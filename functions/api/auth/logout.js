import { sessionCookieHeader } from './_utils.js';

export async function onRequestPost() {
  return Response.json({ ok: true }, { headers: { 'Set-Cookie': sessionCookieHeader('', 0) } });
}
