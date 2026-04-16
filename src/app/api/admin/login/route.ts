import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_COOKIE_NAME, createAdminSessionToken } from '@/lib/adminAuth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function timingSafeEqualStr(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ab.length !== bb.length) return false;
  return require('node:crypto').timingSafeEqual(ab, bb);
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { email?: string; password?: string };
    const email = (body.email || '').trim();
    const password = body.password || '';

    const expectedEmail = (process.env.ADMIN_EMAIL || '').trim();
    const expectedPassword = process.env.ADMIN_PASSWORD || '';

    if (!expectedEmail || !expectedPassword) {
      return NextResponse.json(
        { error: 'Admin credentials are not configured on the server.' },
        { status: 500 }
      );
    }

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 });
    }

    const okEmail = timingSafeEqualStr(email.toLowerCase(), expectedEmail.toLowerCase());
    const okPassword = timingSafeEqualStr(password, expectedPassword);
    if (!okEmail || !okPassword) {
      return NextResponse.json({ error: 'Invalid credentials.' }, { status: 401 });
    }

    const token = createAdminSessionToken(expectedEmail);

    const res = NextResponse.json({ success: true }, { status: 200 });
    res.cookies.set({
      name: ADMIN_COOKIE_NAME,
      value: token,
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    return res;
  } catch (e) {
    console.error('admin login error:', e);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

