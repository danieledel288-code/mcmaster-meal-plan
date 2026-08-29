// Per-user planner state. Backed by D1 (see migrations/0002_user_state.sql).
//   GET    /api/state?u=<uuid>   -> the full state object
//   PUT    /api/state?u=<uuid>   -> save the full state object
//   DELETE /api/state?u=<uuid>   -> wipe this planner (and its account, if any)
//
// Access model:
//   - A uuid with NO account attached is link-based: anyone with the link can
//     read/write it (disclosed in the UI).
//   - Once someone signs up and that uuid becomes their account's state_uuid,
//     the link alone stops working -- every request must carry that account's
//     session cookie.

import { getSessionUser } from './auth/_utils.js';

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
  mealPlan: 'custom',
  budgetMode: 'term',
  updatedAt: null,
};

const UUID_RE = /^[a-zA-Z0-9-]{8,64}$/;
const MAX_BODY_BYTES = 96 * 1024; // a fat planner is a few KB; this is generous

function getUuid(request) {
  const u = new URL(request.url).searchParams.get('u');
  return u && UUID_RE.test(u) ? u : null;
}

// Returns { ok, status?, msg? }. ok === true means the caller may proceed.
async function authorize(context, uuid) {
  const owner = await context.env.USERS_DB
    .prepare('SELECT id FROM users WHERE state_uuid = ?').bind(uuid).first();
  if (!owner) return { ok: true };                       // anonymous / link-based
  const user = await getSessionUser(context);
  if (user && user.state_uuid === uuid) return { ok: true };
  return { ok: false, status: 401, msg: 'This planner is tied to an account. Log in to open it.' };
}

// One user_state row (+ its schedule rows) -> the JSON shape the frontend wants.
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
    onboarded: !!row.onboarded,
    mealPlan: row.meal_plan,
    budgetMode: row.budget_mode,
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

// Save a full state object for one uuid, atomically (db.batch).
async function writeState(db, uuid, incoming) {
  const s = { ...DEFAULT_STATE, ...incoming, updatedAt: new Date().toISOString() };

  const statements = [
    db.prepare(`
      INSERT INTO user_state
        (state_uuid, residence, term_budget, term_start, term_end, onboarded,
         dietary, home_days, favorite_venues, hidden_venues, venue_choices,
         meal_plan, budget_mode, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
        meal_plan       = excluded.meal_plan,
        budget_mode     = excluded.budget_mode,
        updated_at      = excluded.updated_at
    `).bind(
      uuid, s.residence, s.termBudget, s.termStart, s.termEnd, s.onboarded ? 1 : 0,
      JSON.stringify(s.dietary), JSON.stringify(s.homeDays),
      JSON.stringify(s.favoriteVenues), JSON.stringify(s.hiddenVenues),
      JSON.stringify(s.venueChoices),
      s.mealPlan || 'custom', s.budgetMode || 'term', s.updatedAt,
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

  const auth = await authorize(context, uuid);
  if (!auth.ok) return new Response(auth.msg, { status: auth.status });

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

  // No D1 row yet. If this user still has an old KV blob, migrate it in once.
  const legacy = await context.env.MEAL_PLAN_KV.get(`user:${uuid}`);
  if (legacy) {
    const parsed = { ...DEFAULT_STATE, ...JSON.parse(legacy) };
    const saved = await writeState(db, uuid, parsed);
    await context.env.MEAL_PLAN_KV.delete(`user:${uuid}`);
    return Response.json(saved);
  }

  return Response.json({ ...DEFAULT_STATE });
}

export async function onRequestPut(context) {
  const uuid = getUuid(context.request);
  if (!uuid) return new Response('Missing or invalid ?u= id', { status: 400 });

  const auth = await authorize(context, uuid);
  if (!auth.ok) return new Response(auth.msg, { status: auth.status });

  const cl = Number(context.request.headers.get('content-length') || 0);
  if (cl > MAX_BODY_BYTES) return new Response('Payload too large', { status: 413 });

  let body;
  try {
    const raw = await context.request.text();
    if (raw.length > MAX_BODY_BYTES) return new Response('Payload too large', { status: 413 });
    body = JSON.parse(raw);
  } catch {
    return new Response('Invalid JSON body', { status: 400 });
  }

  const saved = await writeState(context.env.USERS_DB, uuid, body);
  await context.env.MEAL_PLAN_KV.delete(`user:${uuid}`).catch(() => {});
  return Response.json(saved);
}

export async function onRequestDelete(context) {
  const uuid = getUuid(context.request);
  if (!uuid) return new Response('Missing or invalid ?u= id', { status: 400 });

  const auth = await authorize(context, uuid);
  if (!auth.ok) return new Response(auth.msg, { status: auth.status });

  const db = context.env.USERS_DB;
  const hadAccount = !!(await db.prepare('SELECT id FROM users WHERE state_uuid = ?').bind(uuid).first());

  await db.batch([
    db.prepare('DELETE FROM schedule_entries WHERE state_uuid = ?').bind(uuid),
    db.prepare('DELETE FROM user_state WHERE state_uuid = ?').bind(uuid),
    db.prepare('DELETE FROM users WHERE state_uuid = ?').bind(uuid),
  ]);
  await context.env.MEAL_PLAN_KV.delete(`user:${uuid}`).catch(() => {});

  const headers = {};
  // Only drop the session if we just deleted the account it belongs to.
  if (hadAccount) headers['Set-Cookie'] = 'session=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0';
  return new Response(null, { status: 204, headers });
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Methods': 'GET, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
