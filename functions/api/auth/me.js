import { getSessionUser } from './_utils.js';

export async function onRequestGet(context) {
  const user = await getSessionUser(context);
  if (!user) return new Response('Not logged in', { status: 401 });
  return Response.json({ email: user.email, uuid: user.state_uuid });
}
