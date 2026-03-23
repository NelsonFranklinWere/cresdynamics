/** Screenshots in /public/mohaafinest — Mohaa Finest case study */
export const MOHAA_FINEST_SCREENSHOT_FILES = [
  'Screenshot 2026-03-21 at 16.08.19.png',
  'Screenshot 2026-03-21 at 16.08.23.png',
  'Screenshot 2026-03-21 at 16.08.28.png',
  'Screenshot 2026-03-21 at 16.08.35.png',
  'Screenshot 2026-03-21 at 16.08.43.png',
  'Screenshot 2026-03-21 at 16.08.49.png',
  'Screenshot 2026-03-21 at 16.08.58.png',
  'Screenshot 2026-03-21 at 16.09.03.png',
  'Screenshot 2026-03-21 at 16.09.13.png',
  'Screenshot 2026-03-21 at 16.09.20.png',
  'Screenshot 2026-03-21 at 16.09.25.png',
  'Screenshot 2026-03-21 at 16.09.37.png',
  'Screenshot 2026-03-21 at 16.10.25.png',
] as const;

export function mohaaFinestPublicPath(filename: string): string {
  return `/mohaafinest/${filename}`;
}

export function mohaaFinestImageItems() {
  return MOHAA_FINEST_SCREENSHOT_FILES.map((file, i) => ({
    src: mohaaFinestPublicPath(file),
    alt: `Mohaa Finest — live website screenshot ${i + 1} of ${MOHAA_FINEST_SCREENSHOT_FILES.length}`,
  }));
}
