/** Unique image per homepage section — none repeat the hero carousel set */
export const HOMEPAGE_SECTION_IMAGES = {
  hero: [
    '/devs-teams-techies-discussing.jpg',
    '/data-connected-analysis.jpg',
    '/connecting-nairobi.jpg',
    '/tech-growth.jpg',
  ],
  problem: '/sections/team-collaboration-board.jpg',
  systems: '/sections/analytics-workspace.jpg',
  proof: '/sections/tech-team-planning.jpg',
  howWeWork: '/04_how_we_build.jpg',
  whoFor: '/sections/startup-team-office.jpg',
  cta: '/connecting-nairobi.jpg',
} as const;

export type SectionOverlay = 'dark' | 'medium' | 'light';

export const OVERLAY_CLASS: Record<SectionOverlay, string> = {
  dark: 'bg-black/78',
  medium: 'bg-black/68',
  light: 'bg-black/58',
};
