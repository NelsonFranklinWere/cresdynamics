import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {
  ADMIN_COOKIE_NAME,
  verifyAdminSessionToken,
} from '@/lib/adminAuth';
import { ADMIN_VERIFIED_HEADER } from '@/lib/adminSessionEdge';

export const runtime = 'nodejs';

const CANONICAL_HOST = 'cresdynamics.com';
const HTTPS = 'https';

function isProtectedManagementPath(pathname: string): boolean {
  if (!pathname.startsWith('/management')) return false;
  if (pathname.startsWith('/management/login')) return false;
  return true;
}

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host') || '';
  const hostLower = host.toLowerCase();
  const forwardedProto = (request.headers.get('x-forwarded-proto') || '').toLowerCase();
  const isLocalhost = /^(localhost|127\.0\.0\.1)(:\d+)?$/i.test(host);

  if (!isLocalhost) {
    if (hostLower.startsWith('www.')) {
      url.protocol = HTTPS;
      url.hostname = CANONICAL_HOST;
      url.port = '';
      return NextResponse.redirect(url.toString(), 301);
    }

    const isHttps = request.nextUrl.protocol === 'https:' || forwardedProto === 'https';
    if (!isHttps) {
      url.protocol = HTTPS;
      url.hostname = host.replace(/^www\./i, '').split(':')[0] || CANONICAL_HOST;
      url.port = '';
      return NextResponse.redirect(url.toString(), 301);
    }
  }

  if (isProtectedManagementPath(request.nextUrl.pathname)) {
    const token = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
    const session = verifyAdminSessionToken(token);

    if (!session) {
      const login = request.nextUrl.clone();
      login.pathname = '/management/login/';
      login.search = '';
      return NextResponse.redirect(login);
    }

    const requestHeaders = new Headers(request.headers);
    requestHeaders.delete(ADMIN_VERIFIED_HEADER);
    requestHeaders.set(ADMIN_VERIFIED_HEADER, session.email);
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
