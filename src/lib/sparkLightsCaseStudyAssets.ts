/** Screenshots in /public/sparklights — Spark Lights 254 case study */
export const SPARK_LIGHTS_SCREENSHOT_FILES = [
  'Screenshot 2026-03-21 at 16.01.25.png',
  'Screenshot 2026-03-21 at 16.01.33.png',
  'Screenshot 2026-03-21 at 16.01.41.png',
  'Screenshot 2026-03-21 at 16.01.46.png',
  'Screenshot 2026-03-21 at 16.01.51.png',
  'Screenshot 2026-03-21 at 16.02.24.png',
  'Screenshot 2026-03-21 at 16.02.32.png',
  'Screenshot 2026-03-21 at 16.02.41.png',
  'Screenshot 2026-03-21 at 16.02.49.png',
  'Screenshot 2026-03-21 at 16.03.01.png',
] as const;

export function sparkLightsPublicPath(filename: string): string {
  return `/sparklights/${filename}`;
}

export function sparkLightsImageItems() {
  return SPARK_LIGHTS_SCREENSHOT_FILES.map((file, i) => ({
    src: sparkLightsPublicPath(file),
    alt: `Spark Lights 254 — live website screenshot ${i + 1} of ${SPARK_LIGHTS_SCREENSHOT_FILES.length}`,
  }));
}
