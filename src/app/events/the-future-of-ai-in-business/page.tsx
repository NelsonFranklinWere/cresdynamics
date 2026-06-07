import EventsContent from '@/components/EventsContent';
import type { Metadata } from 'next';
import { FUTURE_AI_EVENT, FUTURE_AI_PATHS } from '@/lib/future-ai-event';

export const metadata: Metadata = {
  title: `AI Events Nairobi 2026 | ${FUTURE_AI_EVENT.title} – 20 June | Westlands`,
  description:
    `Nairobi's leading AI event for business owners and developers. ${FUTURE_AI_EVENT.title}, ${FUTURE_AI_EVENT.dateLabel} at ${FUTURE_AI_EVENT.venue}. Practical AI strategies, live demos, panels & networking.`,
  keywords: [
    'events nairobi',
    'events in nairobi 2026',
    'ai events nairobi',
    'business events nairobi',
    'events westlands',
    'sarit expo centre events',
    'future of ai in business',
    'events nairobi june 2026',
  ],
  alternates: { canonical: `https://cresdynamics.com${FUTURE_AI_PATHS.event}` },
  openGraph: {
    title: `${FUTURE_AI_EVENT.title} | AI Events Nairobi 2026`,
    description:
      `Join business leaders and developers at Nairobi's practical AI event. ${FUTURE_AI_EVENT.dateLabel} · ${FUTURE_AI_EVENT.venueShort}, Westlands.`,
    url: `https://cresdynamics.com${FUTURE_AI_PATHS.event}`,
    images: [
      {
        url: '/events/hero-stage.jpg',
        width: 1200,
        height: 630,
        alt: `${FUTURE_AI_EVENT.title} — Cres Dynamics Event, Nairobi June 2026`,
      },
    ],
    type: 'website',
  },
};

const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: FUTURE_AI_EVENT.title,
  description: FUTURE_AI_EVENT.theme,
  startDate: FUTURE_AI_EVENT.dateIso,
  endDate: FUTURE_AI_EVENT.endIso,
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: FUTURE_AI_EVENT.venueShort,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sarit Centre, Westlands',
      addressLocality: 'Nairobi',
      addressRegion: 'Nairobi County',
      addressCountry: 'KE',
    },
  },
  image: 'https://cresdynamics.com/events/hero-stage.jpg',
  organizer: { '@type': 'Organization', name: FUTURE_AI_EVENT.organiser, url: 'https://cresdynamics.com' },
  offers: {
    '@type': 'Offer',
    url: `https://cresdynamics.com${FUTURE_AI_PATHS.event}`,
    availability: 'https://schema.org/LimitedAvailability',
    price: '1500',
    priceCurrency: 'KES',
  },
};

export default function FutureAiEventPage() {
  return (
    <>
      <EventsContent />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
    </>
  );
}
