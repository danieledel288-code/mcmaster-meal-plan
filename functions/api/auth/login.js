import { verifyPassword, signSession, sessionCookieHeader, isValidEmail, sessionSecret } from './_utils.js';

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
  if (!isValidEmail(email) || !password) return new Response('Enter your email and password.', { status: 400 });

  const row = await context.env.USERS_DB.prepare(
    'SELECT id, password_hash, password_salt, state_uuid FROM users WHERE email = ?'
  ).bind(email).first();
  if (!row) return new Response('Incorrect email or password.', { status: 401 });

  const ok = await verifyPassword(password, row.password_hash, row.password_salt);
  if (!ok) return new Response('Incorrect email or password.', { status: 401 });

  const token = await signSession({ uid: row.id, exp: Date.now() + SESSION_MAX_AGE * 1000 }, sessionSecret(context.env));
  return Response.json({ email, uuid: row.state_uuid }, {
    headers: { 'Set-Cookie': sessionCookieHeader(token, SESSION_MAX_AGE) },
  });
}
