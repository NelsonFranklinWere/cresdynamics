export const SITE_URL = 'https://cresdynamics.com';

export function canonical(path: string) {
  const p = path.startsWith('/') ? path : `/${path}`;
  const normalized = p === '/' ? '/' : p.endsWith('/') ? p : `${p}/`;
  return `${SITE_URL}${normalized}`;
}
