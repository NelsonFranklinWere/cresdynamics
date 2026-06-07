import EventProgrammeContent from '@/components/EventProgrammeContent';
import type { Metadata } from 'next';
import { FUTURE_AI_EVENT, FUTURE_AI_PATHS } from '@/lib/future-ai-event';

export const metadata: Metadata = {
  title: `Official Programme | ${FUTURE_AI_EVENT.title} | 20 June 2026`,
  description: `Full official programme for ${FUTURE_AI_EVENT.title} — ${FUTURE_AI_EVENT.dateLabel}, ${FUTURE_AI_EVENT.venue}. ${FUTURE_AI_EVENT.timeRange}.`,
  alternates: { canonical: `https://cresdynamics.com${FUTURE_AI_PATHS.programme}` },
};

export default function FutureAiProgrammePage() {
  return <EventProgrammeContent />;
}
