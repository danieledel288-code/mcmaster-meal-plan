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

function userKey(request) {
  const url = new URL(request.url);
  const u = url.searchParams.get('u');
  if (!u || !/^[a-zA-Z0-9-]{8,64}$/.test(u)) return null;
  return `user:${u}`;
}

export async function onRequestGet(context) {
  const key = userKey(context.request);
  if (!key) return new Response('Missing or invalid ?u= id', { status: 400 });
  const raw = await context.env.MEAL_PLAN_KV.get(key);
  const state = raw ? { ...DEFAULT_STATE, ...JSON.parse(raw) } : DEFAULT_STATE;
  return Response.json(state);
}

export async function onRequestPut(context) {
  const key = userKey(context.request);
  if (!key) return new Response('Missing or invalid ?u= id', { status: 400 });
  let body;
  try {
    body = await context.request.json();
  } catch (e) {
    return new Response('Invalid JSON body', { status: 400 });
  }
  const state = { ...DEFAULT_STATE, ...body, updatedAt: new Date().toISOString() };
  await context.env.MEAL_PLAN_KV.put(key, JSON.stringify(state));
  return Response.json(state);
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Methods': 'GET, PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
