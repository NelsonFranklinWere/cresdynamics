import { verifyAdminSessionToken } from '@/lib/adminAuth';

/** Read admin session from Cookie header (works when cookies() is unreliable). */
export function getAdminSessionFromCookieHeader(cookieHeader: string | null): ReturnType<
  typeof verifyAdminSessionToken
> {
  if (!cookieHeader) return null;
  const match = cookieHeader.match(/(?:^|;\s*)cres_admin=([^;]+)/);
  if (!match?.[1]) return null;
  try {
    return verifyAdminSessionToken(decodeURIComponent(match[1]));
  } catch {
    return verifyAdminSessionToken(match[1]);
  }
}
