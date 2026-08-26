const PBKDF2_ITERATIONS = 100000;

function toB64(bytes) {
  let str = '';
  for (const b of bytes) str += String.fromCharCode(b);
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function fromB64(b64) {
  const std = b64.replace(/-/g, '+').replace(/_/g, '/');
  const pad = std.length % 4 ? '='.repeat(4 - (std.length % 4)) : '';
  const str = atob(std + pad);
  const bytes = new Uint8Array(str.length);
  for (let i = 0; i < str.length; i++) bytes[i] = str.charCodeAt(i);
  return bytes;
}

export async function hashPassword(password, saltBytes) {
  const salt = saltBytes || crypto.getRandomValues(new Uint8Array(16));
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', salt, iterations: PBKDF2_ITERATIONS, hash: 'SHA-256' }, keyMaterial, 256);
  return { hash: toB64(new Uint8Array(bits)), salt: toB64(salt) };
}

export async function verifyPassword(password, hashB64, saltB64) {
  const { hash } = await hashPassword(password, fromB64(saltB64));
  if (hash.length !== hashB64.length) return false;
  let diff = 0;
  for (let i = 0; i < hash.length; i++) diff |= hash.charCodeAt(i) ^ hashB64.charCodeAt(i);
  return diff === 0;
}

async function hmacKey(secret) {
  const enc = new TextEncoder();
  return crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']);
}

export async function signSession(payload, secret) {
  const key = await hmacKey(secret);
  const body = toB64(new TextEncoder().encode(JSON.stringify(payload)));
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(body));
  return `${body}.${toB64(new Uint8Array(sig))}`;
}

export async function verifySession(token, secret) {
  if (!token || !token.includes('.')) return null;
  const [body, sig] = token.split('.');
  const key = await hmacKey(secret);
  const valid = await crypto.subtle.verify('HMAC', key, fromB64(sig), new TextEncoder().encode(body));
  if (!valid) return null;
  try {
    const payload = JSON.parse(new TextDecoder().decode(fromB64(body)));
    if (payload.exp && Date.now() > payload.exp) return null;
    return payload;
  } catch {
    return null;
  }
}

export function readCookie(request, name) {
  const header = request.headers.get('Cookie') || '';
  const match = header.split(';').map(s => s.trim()).find(s => s.startsWith(name + '='));
  return match ? decodeURIComponent(match.slice(name.length + 1)) : null;
}

export function sessionCookieHeader(token, maxAgeSeconds) {
  const parts = [`session=${encodeURIComponent(token)}`, 'Path=/', 'HttpOnly', 'Secure', 'SameSite=Lax'];
  parts.push(maxAgeSeconds === 0 ? 'Max-Age=0' : `Max-Age=${maxAgeSeconds}`);
  return parts.join('; ');
}

export function newUuid() {
  return crypto.randomUUID();
}

export function isValidEmail(email) {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

export async function getSessionUser(context) {
  const token = readCookie(context.request, 'session');
  const payload = await verifySession(token, context.env.SESSION_SECRET || 'dev-insecure-secret');
  if (!payload) return null;
  const row = await context.env.USERS_DB.prepare('SELECT id, email, state_uuid FROM users WHERE id = ?').bind(payload.uid).first();
  return row || null;
}
