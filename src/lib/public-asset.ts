/**
 * Build a safe URL for files in /public (handles spaces and special characters).
 */
export function publicAssetPath(...segments: string[]): string {
  const cleaned = segments.filter(Boolean).map((s) => s.replace(/^\/+|\/+$/g, ''));
  if (cleaned.length === 0) return '/';
  return `/${cleaned.map((s) => encodeURIComponent(s)).join('/')}`;
}

/** Encode an existing root-relative path (e.g. /thestems/foo bar.png). */
export function encodePublicUrl(path: string): string {
  if (!path || !path.startsWith('/')) return path;
  const parts = path.split('/').filter(Boolean);
  return `/${parts.map((p) => encodeURIComponent(decodeURIComponent(p))).join('/')}`;
}
