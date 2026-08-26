import { hashPassword, signSession, sessionCookieHeader, newUuid, isValidEmail } from './_utils.js';

const UUID_RE = /^[a-zA-Z0-9-]{8,64}$/;
const SESSION_MAX_AGE = 60 * 60 * 24 * 90;

export async function onRequestPost(context) {
  let body;
  try {
    body = await context.request.json();
  } catch {
    return new Response('Invalid JSON body', { status: 400 });
  }
  const email = (body.email || '').trim().toLowerCase();
  const password = body.password || '';
  const claimUuid = body.claimUuid;

  if (!isValidEmail(email)) return new Response('Enter a valid email.', { status: 400 });
  if (password.length < 8) return new Response('Password needs to be at least 8 characters.', { status: 400 });

  const existing = await context.env.USERS_DB.prepare('SELECT id FROM users WHERE email = ?').bind(email).first();
  if (existing) return new Response('An account with that email already exists.', { status: 409 });

  const stateUuid = claimUuid && UUID_RE.test(claimUuid) ? claimUuid : newUuid();
  const { hash, salt } = await hashPassword(password);
  const id = newUuid();

  await context.env.USERS_DB.prepare(
    'INSERT INTO users (id, email, password_hash, password_salt, state_uuid, created_at) VALUES (?, ?, ?, ?, ?, ?)'
  ).bind(id, email, hash, salt, stateUuid, new Date().toISOString()).run();

  const token = await signSession({ uid: id, exp: Date.now() + SESSION_MAX_AGE * 1000 }, context.env.SESSION_SECRET || 'dev-insecure-secret');
  return Response.json({ email, uuid: stateUuid }, {
    headers: { 'Set-Cookie': sessionCookieHeader(token, SESSION_MAX_AGE) },
  });
}
