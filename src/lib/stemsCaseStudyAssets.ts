/** Screenshots in /public/thestems — used by The Stems Flowers case study */
export const STEMS_SCREENSHOT_FILES = [
  'Screenshot 2026-03-21 at 15.01.39.png',
  'Screenshot 2026-03-21 at 15.02.13.png',
  'Screenshot 2026-03-21 at 15.02.23.png',
  'Screenshot 2026-03-21 at 15.02.48.png',
  'Screenshot 2026-03-21 at 15.03.02.png',
  'Screenshot 2026-03-21 at 15.03.40.png',
  'Screenshot 2026-03-21 at 15.03.58.png',
  'Screenshot 2026-03-21 at 15.04.16.png',
] as const;

export function stemsPublicPath(filename: string): string {
  return `/thestems/${filename}`;
}

export function stemsImageItems() {
  return STEMS_SCREENSHOT_FILES.map((file, i) => ({
    src: stemsPublicPath(file),
    alt: `The Stems Flowers — live website screenshot ${i + 1} of ${STEMS_SCREENSHOT_FILES.length}`,
  }));
}
