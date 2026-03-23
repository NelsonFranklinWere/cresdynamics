/** Screenshots in /public/floralwhispers — Floral Whispers Gifts case study */
export const FLORAL_WHISPERS_SCREENSHOT_FILES = [
  'Screenshot 2026-03-21 at 15.41.27.png',
  'Screenshot 2026-03-21 at 15.41.32.png',
  'Screenshot 2026-03-21 at 15.41.37.png',
  'Screenshot 2026-03-21 at 15.41.53.png',
  'Screenshot 2026-03-21 at 15.42.06.png',
  'Screenshot 2026-03-21 at 15.43.41.png',
  'Screenshot 2026-03-21 at 15.44.16.png',
  'Screenshot 2026-03-21 at 15.44.26.png',
] as const;

export function floralWhispersPublicPath(filename: string): string {
  return `/floralwhispers/${filename}`;
}

export function floralWhispersImageItems() {
  return FLORAL_WHISPERS_SCREENSHOT_FILES.map((file, i) => ({
    src: floralWhispersPublicPath(file),
    alt: `Floral Whispers Gifts — live website screenshot ${i + 1} of ${FLORAL_WHISPERS_SCREENSHOT_FILES.length}`,
  }));
}
