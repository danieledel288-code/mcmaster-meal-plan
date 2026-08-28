// Per-user planner state. Backed by D1 (see migrations/0002_user_state.sql).
// The HTTP shape is unchanged from the old KV version:
//   GET  /api/state?u=<uuid>   -> the full state object
//   PUT  /api/state?u=<uuid>   -> save the full state object
// so index.html did not have to change.

const DEFAULT_STATE = {
  residence: 'pgcll',
  termBudget: 3522.50,
  termStart: '2026-09-01',
  termEnd: '2026-12-23',
  dietary: [],
  favoriteVenues: [],
  hiddenVenues: [],
  schedule: [],
  homeDays: [],
  venueChoices: {},
  onboarded: false,
  updatedAt: null,
};

const UUID_RE = /^[a-zA-Z0-9-]{8,64}$/;

function getUuid(request) {
  const u = new URL(request.url).searchParams.get('u');
  return u && UUID_RE.test(u) ? u : null;
}

// One user_state row (+ its schedule rows) -> the JSON shape the frontend wants.
// DB columns are snake_case; the frontend expects camelCase. This function is
// the single place that translation happens.
function rowToState(row, scheduleRows) {
  return {
    residence: row.residence,
    termBudget: row.term_budget,
    termStart: row.term_start,
    termEnd: row.term_end,
    dietary: JSON.parse(row.dietary),
    favoriteVenues: JSON.parse(row.favorite_venues),
    hiddenVenues: JSON.parse(row.hidden_venues),
    homeDays: JSON.parse(row.home_days),
    venueChoices: JSON.parse(row.venue_choices),
    onboarded: !!row.onboarded,          // stored as 0 / 1, exposed as a boolean
    updatedAt: row.updated_at,
    schedule: scheduleRows.map(r => ({
      day: r.day,
      start: r.start_time,
      end: r.end_time,
      course: r.course,
      building: r.building,
    })),
  };
}

// Save a full state object for one uuid:
//   1. upsert the scalar row     (INSERT ... ON CONFLICT DO UPDATE)
//   2. delete its schedule rows
//   3. re-insert them in order
// db.batch([...]) runs all of that as ONE atomic transaction -- either the
// whole save lands or none of it does.
async function writeState(db, uuid, incoming) {
  const s = { ...DEFAULT_STATE, ...incoming, updatedAt: new Date().toISOString() };

  const statements = [
    db.prepare(`
      INSERT INTO user_state
        (state_uuid, residence, term_budget, term_start, term_end, onboarded,
         dietary, home_days, favorite_venues, hidden_venues, venue_choices, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(state_uuid) DO UPDATE SET
        residence       = excluded.residence,
        term_budget     = excluded.term_budget,
        term_start      = excluded.term_start,
        term_end        = excluded.term_end,
        onboarded       = excluded.onboarded,
        dietary         = excluded.dietary,
        home_days       = excluded.home_days,
        favorite_venues = excluded.favorite_venues,
        hidden_venues   = excluded.hidden_venues,
        venue_choices   = excluded.venue_choices,
        updated_at      = excluded.updated_at
    `).bind(
      uuid, s.residence, s.termBudget, s.termStart, s.termEnd, s.onboarded ? 1 : 0,
      JSON.stringify(s.dietary), JSON.stringify(s.homeDays),
      JSON.stringify(s.favoriteVenues), JSON.stringify(s.hiddenVenues),
      JSON.stringify(s.venueChoices), s.updatedAt,
    ),
    db.prepare('DELETE FROM schedule_entries WHERE state_uuid = ?').bind(uuid),
    ...s.schedule.map((c, i) => db.prepare(`
      INSERT INTO schedule_entries
        (state_uuid, day, start_time, end_time, course, building, position)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).bind(
      uuid, Number(c.day) || 0, c.start || '', c.end || '',
      c.course || '', c.building || '', i,
    )),
  ];

  await db.batch(statements);
  return s;
}

export async function onRequestGet(context) {
  const uuid = getUuid(context.request);
  if (!uuid) return new Response('Missing or invalid ?u= id', { status: 400 });
  const db = context.env.USERS_DB;

  const row = await db.prepare('SELECT * FROM user_state WHERE state_uuid = ?').bind(uuid).first();

  if (row) {
    const { results } = await db.prepare(
      `SELECT day, start_time, end_time, course, building
         FROM schedule_entries
        WHERE state_uuid = ?
        ORDER BY position`
    ).bind(uuid).all();
    return Response.json(rowToState(row, results));
  }

  // No D1 row yet. If this user still has an old KV blob, migrate it in once,
  // then drop the KV copy so this branch never runs again for them.
  const legacy = await context.env.MEAL_PLAN_KV.get(`user:${uuid}`);
  if (legacy) {
    const parsed = { ...DEFAULT_STATE, ...JSON.parse(legacy) };
    const saved = await writeState(db, uuid, parsed);
    await context.env.MEAL_PLAN_KV.delete(`user:${uuid}`);
    return Response.json(saved);
  }

  // Brand-new user: hand back defaults without persisting anything yet
  // (matches the old behaviour -- a row is only created on first save).
  return Response.json({ ...DEFAULT_STATE });
}

export async function onRequestPut(context) {
  const uuid = getUuid(context.request);
  if (!uuid) return new Response('Missing or invalid ?u= id', { status: 400 });

  let body;
  try {
    body = await context.request.json();
  } catch {
    return new Response('Invalid JSON body', { status: 400 });
  }

  const saved = await writeState(context.env.USERS_DB, uuid, body);
  // Belt and suspenders: kill any stale KV blob so the read-through path
  // in GET can never resurrect old data over a fresh save.
  await context.env.MEAL_PLAN_KV.delete(`user:${uuid}`).catch(() => {});
  return Response.json(saved);
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Methods': 'GET, PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
