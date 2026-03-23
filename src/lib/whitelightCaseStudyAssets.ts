/** Screenshots in /public/whitelight — Whitelight Store case study */
export const WHITELIGHT_SCREENSHOT_FILES = [
  'Screenshot 2026-03-21 at 16.04.27.png',
  'Screenshot 2026-03-21 at 16.04.33.png',
  'Screenshot 2026-03-21 at 16.04.42.png',
  'Screenshot 2026-03-21 at 16.04.57.png',
  'Screenshot 2026-03-21 at 16.05.08.png',
  'Screenshot 2026-03-21 at 16.05.24.png',
  'Screenshot 2026-03-21 at 16.05.31.png',
  'Screenshot 2026-03-21 at 16.05.42.png',
  'Screenshot 2026-03-21 at 16.05.49.png',
  'Screenshot 2026-03-21 at 16.05.58.png',
  'Screenshot 2026-03-21 at 16.06.04.png',
  'Screenshot 2026-03-21 at 16.06.09.png',
  'Screenshot 2026-03-21 at 16.06.28.png',
  'Screenshot 2026-03-21 at 16.06.33.png',
] as const;

export function whitelightPublicPath(filename: string): string {
  return `/whitelight/${filename}`;
}

export function whitelightImageItems() {
  return WHITELIGHT_SCREENSHOT_FILES.map((file, i) => ({
    src: whitelightPublicPath(file),
    alt: `Whitelight Store — live website screenshot ${i + 1} of ${WHITELIGHT_SCREENSHOT_FILES.length}`,
  }));
}
