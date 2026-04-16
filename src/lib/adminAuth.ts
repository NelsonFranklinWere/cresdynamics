import crypto from 'node:crypto';
import type { NextRequest } from 'next/server';

export const ADMIN_COOKIE_NAME = 'cres_admin';

type SessionPayload = {
  email: string;
  exp: number; // unix ms
};

function getSessionSecret(): string {
  const s = process.env.ADMIN_SESSION_SECRET;
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

export function createAdminSessionToken(email: string, ttlMs = 7 * 24 * 60 * 60 * 1000) {
  const payload: SessionPayload = { email, exp: Date.now() + ttlMs };
  const json = JSON.stringify(payload);
  const b64 = base64UrlEncode(json);
  const sig = sign(b64);
  return `${b64}.${sig}`;
}

export function verifyAdminSessionToken(token: string | undefined | null): SessionPayload | null {
  if (!token) return null;
  const [b64, sig] = token.split('.');
  if (!b64 || !sig) return null;

  const expected = sign(b64);
  const sigBuf = Buffer.from(sig);
  const expBuf = Buffer.from(expected);
  if (sigBuf.length !== expBuf.length) return null;
  if (!crypto.timingSafeEqual(sigBuf, expBuf)) return null;

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

