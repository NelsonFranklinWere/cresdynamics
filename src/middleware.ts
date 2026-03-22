import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const CANONICAL_HOST = 'cresdynamics.com';
const HTTPS = 'https';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host') || '';
  const hostLower = host.toLowerCase();
  const isLocalhost = /^(localhost|127\.0\.0\.1)(:\d+)?$/i.test(host);

  // In local dev, don't redirect http → https (dev server is HTTP only)
  if (isLocalhost) return NextResponse.next();

  // 301: www → non-www https (Host header can be mixed-case; must match case-insensitively)
  if (hostLower.startsWith('www.')) {
    url.host = CANONICAL_HOST;
    url.protocol = HTTPS;
    return NextResponse.redirect(url.toString(), 301);
  }

  // 301: http → https (when not already https)
  if (request.nextUrl.protocol !== 'https:') {
    url.protocol = HTTPS;
    url.host = host.replace(/^www\./i, '');
    return NextResponse.redirect(url.toString(), 301);
  }

  return NextResponse.next();
}

// Skip static assets and Next internals — avoids edge cases and matches Next.js guidance
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
