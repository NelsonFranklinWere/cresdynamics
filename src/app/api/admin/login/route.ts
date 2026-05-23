import { NextRequest, NextResponse } from 'next/server';
import {
  ADMIN_COOKIE_NAME,
  adminCookieSecure,
  createAdminSessionToken,
  getAdminCredentials,
} from '@/lib/adminAuth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function timingSafeEqualStr(a: string, b: string): boolean {
  const ab = Buffer.from(a, 'utf8');
  const bb = Buffer.from(b, 'utf8');
  if (ab.length !== bb.length) return false;
  return require('node:crypto').timingSafeEqual(ab, bb);
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { email?: string; password?: string };
    const email = (body.email || '').trim();
    const password = body.password || '';

    const creds = getAdminCredentials();
    if (!creds) {
      return NextResponse.json(
        { error: 'Admin credentials are not configured on the server (ADMIN_EMAIL, ADMIN_PASSWORD).' },
        { status: 500 }
      );
    }

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 });
    }

    const okEmail = timingSafeEqualStr(email.toLowerCase(), creds.email.toLowerCase());
    const okPassword = timingSafeEqualStr(password, creds.password);
    if (!okEmail || !okPassword) {
      return NextResponse.json(
        { error: 'Invalid email or password. Use the ADMIN_EMAIL configured on this server.' },
        { status: 401 }
      );
    }

    const token = createAdminSessionToken(creds.email);

    const res = NextResponse.json({ success: true }, { status: 200 });
    res.cookies.set({
      name: ADMIN_COOKIE_NAME,
      value: token,
      httpOnly: true,
      sameSite: 'lax',
      secure: adminCookieSecure(request),
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    });
    return res;
  } catch (e) {
    console.error('admin login error:', e);
    const message = e instanceof Error && e.message.includes('ADMIN_SESSION_SECRET')
      ? 'ADMIN_SESSION_SECRET is not configured on the server.'
      : 'Internal server error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
