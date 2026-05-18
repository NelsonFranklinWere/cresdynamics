import EventsContent from '@/components/EventsContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Events Nairobi 2026 | The Future of AI in Business – 20 June | Westlands',
  description:
    "Nairobi's leading AI event for business owners and developers. The Future of AI in Business, Saturday 20 June 2026 at Sarit Expo Centre, Westlands. Practical AI strategies, live demos, panels & networking.",
  keywords: [
    'events nairobi',
    'events in nairobi 2026',
    'ai events nairobi',
    'business events nairobi',
    'events westlands',
    'sarit expo centre events',
    'ai events in nairobi',
    'future of ai in business',
    'events nairobi june 2026',
  ],
  alternates: { canonical: 'https://cresdynamics.com/events/' },
  openGraph: {
    title: 'The Future of AI in Business | AI Events Nairobi 2026',
    description:
      "Join 300 business leaders and developers at Nairobi's premier practical AI event. 20 June 2026 · Sarit Expo Centre, Westlands. Keynotes, live AI demos, panels, and networking.",
    url: 'https://cresdynamics.com/events/',
    images: [
      {
        url: '/events/hero-stage.jpg',
        width: 1200,
        height: 630,
        alt: 'The Future of AI in Business — CRES Dynamics Event, Nairobi June 2026',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Events Nairobi 2026 | Future of AI in Business',
    description: 'Practical AI strategies for Kenyan businesses. 20 June 2026, Sarit Expo Centre, Westlands.',
    images: ['/events/hero-stage.jpg'],
  },
};

const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'The Future of AI in Business',
  description:
    'Practical AI event for business owners and developers in Nairobi. Keynotes, live demos, panels on how to use AI for client acquisition, automation, and growth.',
  startDate: '2026-06-20T14:00:00+03:00',
  endDate: '2026-06-20T19:00:00+03:00',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: 'Sarit Expo Centre',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sarit Centre, Westlands',
      addressLocality: 'Nairobi',
      addressRegion: 'Nairobi County',
      addressCountry: 'KE',
    },
  },
  image: 'https://cresdynamics.com/events/hero-stage.jpg',
  organizer: { '@type': 'Organization', name: 'CRES Dynamics', url: 'https://cresdynamics.com' },
  offers: {
    '@type': 'Offer',
    url: 'https://cresdynamics.com/events/',
    availability: 'https://schema.org/LimitedAvailability',
    price: '2500',
    priceCurrency: 'KES',
    validFrom: '2026-05-01T00:00:00+03:00',
  },
};

export default function EventsPage() {
  return (
    <>
      <EventsContent />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
    </>
  );
}
