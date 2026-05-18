export const EVENT_LANYARDS = [
  { id: 'developer', label: 'Developer', color: '#2FA6B3', role: 'Engineers & builders' },
  { id: 'business_owner', label: 'Business Owner', color: '#F39C24', role: 'Founders & executives' },
  { id: 'hiring', label: 'Hiring', color: '#6366F1', role: 'Recruiters & HR' },
  { id: 'investor', label: 'Investor', color: '#22C55E', role: 'Capital & partners' },
  { id: 'student', label: 'Student', color: '#EC4899', role: 'Learning & exploring' },
] as const;

export type LanyardCategory = (typeof EVENT_LANYARDS)[number]['id'];

export const DEFAULT_LANYARD: LanyardCategory = 'business_owner';

export function getLanyardById(id: string) {
  return EVENT_LANYARDS.find((l) => l.id === id);
}

export function lanyardLabel(id: string): string {
  return getLanyardById(id)?.label ?? id;
}
