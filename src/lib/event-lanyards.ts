import { FUTURE_AI_LANYARDS } from '@/lib/future-ai-event';

export type LanyardCategory = (typeof FUTURE_AI_LANYARDS)[number]['id'];

export const EVENT_LANYARDS = FUTURE_AI_LANYARDS.map((l) => ({
  id: l.id,
  label: l.label,
  color: l.color,
  role: l.role,
}));

export const DEFAULT_LANYARD: LanyardCategory = 'business_owner';

export function getLanyardById(id: string) {
  return FUTURE_AI_LANYARDS.find((l) => l.id === id);
}

export function lanyardLabel(id: string): string {
  return getLanyardById(id)?.label ?? id;
}
