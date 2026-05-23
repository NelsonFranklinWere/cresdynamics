import { NextRequest, NextResponse } from 'next/server';
import { getAdminSessionFromRequest } from '@/lib/adminAuth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const session = getAdminSessionFromRequest(request);
  return NextResponse.json({
    ok: Boolean(session),
    email: session?.email ?? null,
    hasSecret: Boolean(process.env.ADMIN_SESSION_SECRET),
    hasEmail: Boolean(process.env.ADMIN_EMAIL),
  });
}
