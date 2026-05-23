import crypto from 'node:crypto';
import type { NextRequest } from 'next/server';

export const ADMIN_COOKIE_NAME = 'cres_admin';

type SessionPayload = {
  email: string;
  exp: number; // unix ms
};

function getSessionSecret(): string {
  const s = process.env.ADMIN_SESSION_SECRET?.trim();
  if (!s) {
    throw new Error('ADMIN_SESSION_SECRET is not configured');
  }
  return s;
}

function base64UrlEncode(input: Buffer | string): string {
  const b = Buffer.isBuffer(input) ? input : Buffer.from(input, 'utf8');
  return b
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

function base64UrlDecodeToString(input: string): string {
  const b64 = input.replace(/-/g, '+').replace(/_/g, '/');
  const padLen = (4 - (b64.length % 4)) % 4;
  const padded = b64 + '='.repeat(padLen);
  return Buffer.from(padded, 'base64').toString('utf8');
}

function sign(data: string): string {
  return base64UrlEncode(
    crypto.createHmac('sha256', getSessionSecret()).update(data).digest()
  );
}

function timingSafeEqualStr(a: string, b: string): boolean {
  const ab = Buffer.from(a, 'utf8');
  const bb = Buffer.from(b, 'utf8');
  if (ab.length !== bb.length) return false;
  return crypto.timingSafeEqual(ab, bb);
}

export function getAdminCredentials(): { email: string; password: string } | null {
  const email = process.env.ADMIN_EMAIL?.trim();
  const password = process.env.ADMIN_PASSWORD ?? '';
  if (!email || !password) return null;
  return { email, password };
}

export function adminCookieSecure(request?: NextRequest): boolean {
  if (process.env.ADMIN_COOKIE_SECURE === 'false') return false;
  if (request) {
    const proto = request.headers.get('x-forwarded-proto')?.toLowerCase();
    if (proto === 'https') return true;
    if (request.nextUrl.protocol === 'https:') return true;
  }
  return process.env.NODE_ENV === 'production';
}

export function createAdminSessionToken(email: string, ttlMs = 7 * 24 * 60 * 60 * 1000) {
  const payload: SessionPayload = { email, exp: Date.now() + ttlMs };
  const json = JSON.stringify(payload);
  const b64 = base64UrlEncode(json);
  const sig = sign(b64);
  return `${b64}.${sig}`;
}

export function verifyAdminSessionToken(token: string | undefined | null): SessionPayload | null {
  if (!token) return null;
  const dot = token.indexOf('.');
  if (dot <= 0) return null;
  const b64 = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  if (!b64 || !sig) return null;

  const expected = sign(b64);
  if (!timingSafeEqualStr(sig, expected)) return null;

  try {
    const json = base64UrlDecodeToString(b64);
    const payload = JSON.parse(json) as SessionPayload;
    if (!payload?.email || typeof payload.exp !== 'number') return null;
    if (Date.now() > payload.exp) return null;
    return payload;
  } catch {
    return null;
  }
}

export function getAdminSessionFromRequest(request: NextRequest): SessionPayload | null {
  const token = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
  return verifyAdminSessionToken(token);
}
