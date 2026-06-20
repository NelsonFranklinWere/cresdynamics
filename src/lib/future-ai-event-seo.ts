import type { Metadata } from 'next';
import {
  FUTURE_AI_EVENT,
  FUTURE_AI_PATHS,
  FUTURE_AI_PROGRAMME,
  FUTURE_AI_TICKETS,
} from '@/lib/future-ai-event';

export const FUTURE_AI_SITE = 'https://cresdynamics.com';

export const FUTURE_AI_OG_IMAGE = {
  url: '/events/hero-stage.jpg',
  width: 1200,
  height: 630,
  alt: `${FUTURE_AI_EVENT.title} — AI business conference in Nairobi, June 2026`,
} as const;

export const FUTURE_AI_KEYWORDS = [
  'The Future of AI in Business',
  'Future of AI in Business Nairobi',
  'AI events Nairobi 2026',
  'AI events Kenya',
  'AI conference Nairobi',
  'AI business event Kenya',
  'business events Nairobi 2026',
  'events in Nairobi June 2026',
  'events Westlands Nairobi',
  'Sarit Expo Centre events',
  'Sarit Expo Centre AI event',
  'AI for business owners Kenya',
  'AI for developers Nairobi',
  'AI networking event Nairobi',
  'Cres Dynamics events',
  'tech events Nairobi 2026',
  'AI summit Kenya',
  'artificial intelligence business Kenya',
  'AI workshop Nairobi',
  'Nairobi business conference 2026',
  'Thursday 25 June 2026 events Nairobi',
  'AI in business Kenya',
  'enterprise AI Nairobi',
  'AI talent Kenya event',
] as const;

const doorsIso = '2026-06-25T13:30:00+03:00';

function absolute(path: string) {
  return `${FUTURE_AI_SITE}${path}`;
}

function sharedOpenGraph(title: string, description: string, url: string): Metadata['openGraph'] {
  return {
    title,
    description,
    url: absolute(url),
    type: 'website',
    locale: 'en_KE',
    siteName: 'Cres Dynamics',
    images: [{ ...FUTURE_AI_OG_IMAGE, url: absolute(FUTURE_AI_OG_IMAGE.url) }],
  };
}

function sharedTwitter(title: string, description: string): Metadata['twitter'] {
  return {
    card: 'summary_large_image',
    title,
    description,
    images: [absolute(FUTURE_AI_OG_IMAGE.url)],
  };
}

const ROBOTS: Metadata['robots'] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
};

export function futureAiHubMetadata(): Metadata {
  const title = 'Events Nairobi 2026 | AI & Business Conferences | Cres Dynamics';
  const description =
    'Upcoming Cres Dynamics events in Nairobi — including The Future of AI in Business on Thursday 25th June 2026. Register for keynotes, panels, and networking.';
  return {
    title,
    description,
    keywords: [...FUTURE_AI_KEYWORDS],
    alternates: { canonical: absolute(FUTURE_AI_PATHS.hub) },
    robots: ROBOTS,
    openGraph: sharedOpenGraph(title, description, FUTURE_AI_PATHS.hub),
    twitter: sharedTwitter(title, description),
  };
}

export function futureAiEventMetadata(): Metadata {
  const title = `AI Events Nairobi 2026 | ${FUTURE_AI_EVENT.title} – 25 June 2026 | Nairobi`;
  const description = `Nairobi's practical AI conference for business owners, developers, and founders. ${FUTURE_AI_EVENT.title}, ${FUTURE_AI_EVENT.dateLabel}, ${FUTURE_AI_EVENT.venue}. Keynotes, breakout tracks, live AI challenge, The Open Table & networking. Tickets from KES 1,500.`;
  return {
    title,
    description,
    keywords: [...FUTURE_AI_KEYWORDS],
    alternates: { canonical: absolute(FUTURE_AI_PATHS.event) },
    robots: ROBOTS,
    openGraph: sharedOpenGraph(
      `${FUTURE_AI_EVENT.title} | AI Conference Nairobi 2026`,
      description,
      FUTURE_AI_PATHS.event
    ),
    twitter: sharedTwitter(`${FUTURE_AI_EVENT.title} | Nairobi 25 June 2026`, description),
  };
}

export function futureAiProgrammeMetadata(): Metadata {
  const title = `Official Programme | ${FUTURE_AI_EVENT.title} | 25 June 2026 | Nairobi`;
  const description = `Full official programme for ${FUTURE_AI_EVENT.title} — ${FUTURE_AI_EVENT.dateLabel}, ${FUTURE_AI_EVENT.venue}. ${FUTURE_AI_EVENT.timeRange}. Keynotes, business & developer tracks, VIP roundtable, live AI challenge, and The Open Table finale.`;
  return {
    title,
    description,
    keywords: [
      ...FUTURE_AI_KEYWORDS,
      'AI event programme Nairobi',
      'Future of AI in Business schedule',
      'Sarit Expo AI conference agenda',
      'AI conference agenda Kenya 2026',
    ],
    alternates: { canonical: absolute(FUTURE_AI_PATHS.programme) },
    robots: ROBOTS,
    openGraph: sharedOpenGraph(title, description, FUTURE_AI_PATHS.programme),
    twitter: sharedTwitter(title, description),
  };
}

function eventLocation() {
  return {
    '@type': 'Place' as const,
    name: FUTURE_AI_EVENT.venueShort,
    address: {
      '@type': 'PostalAddress' as const,
      streetAddress: 'Sarit Centre, Westlands',
      addressLocality: 'Nairobi',
      addressRegion: 'Nairobi County',
      postalCode: '00100',
      addressCountry: 'KE',
    },
    geo: {
      '@type': 'GeoCoordinates' as const,
      latitude: -1.2634,
      longitude: 36.7878,
    },
  };
}

function ticketOffers(pagePath: string) {
  return FUTURE_AI_TICKETS.map((t) => ({
    '@type': 'Offer' as const,
    name: `${t.name} Ticket`,
    price: t.price.replace(/,/g, ''),
    priceCurrency: 'KES',
    url: absolute(pagePath),
    availability: 'https://schema.org/InStock',
    validFrom: '2026-01-01',
  }));
}

export function futureAiEventJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    '@id': absolute(FUTURE_AI_PATHS.event),
    name: FUTURE_AI_EVENT.title,
    description: `${FUTURE_AI_EVENT.theme} ${FUTURE_AI_EVENT.tagline}`,
    startDate: FUTURE_AI_EVENT.dateIso,
    endDate: FUTURE_AI_EVENT.endIso,
    doorTime: doorsIso,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    inLanguage: 'en-KE',
    isAccessibleForFree: false,
    maximumAttendeeCapacity: 300,
    location: eventLocation(),
    image: [absolute(FUTURE_AI_OG_IMAGE.url)],
    url: absolute(FUTURE_AI_PATHS.event),
    organizer: {
      '@type': 'Organization',
      name: FUTURE_AI_EVENT.organiser,
      url: FUTURE_AI_SITE,
      email: FUTURE_AI_EVENT.contactEmail,
      telephone: FUTURE_AI_EVENT.contactPhone,
    },
    performer: {
      '@type': 'Person',
      name: 'Nelson Were',
      jobTitle: 'Director',
      worksFor: { '@type': 'Organization', name: FUTURE_AI_EVENT.organiser },
    },
    offers: ticketOffers(FUTURE_AI_PATHS.event),
    subEvent: FUTURE_AI_PROGRAMME.slice(0, 8).map((s) => ({
      '@type': 'Event',
      name: s.sessionTitle ?? s.title,
      startDate: FUTURE_AI_EVENT.dateIso,
      location: eventLocation(),
      description: s.body[0],
    })),
  };
}

export function futureAiProgrammeJsonLd() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': absolute(FUTURE_AI_PATHS.programme),
      name: `Official Programme — ${FUTURE_AI_EVENT.title}`,
      description: FUTURE_AI_EVENT.theme,
      url: absolute(FUTURE_AI_PATHS.programme),
      inLanguage: 'en-KE',
      isPartOf: { '@type': 'WebSite', name: 'Cres Dynamics', url: FUTURE_AI_SITE },
      about: { '@id': absolute(FUTURE_AI_PATHS.event) },
      datePublished: '2026-03-01',
      dateModified: '2026-06-01',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Event',
      '@id': absolute(FUTURE_AI_PATHS.event),
      name: FUTURE_AI_EVENT.title,
      startDate: FUTURE_AI_EVENT.dateIso,
      endDate: FUTURE_AI_EVENT.endIso,
      location: eventLocation(),
      url: absolute(FUTURE_AI_PATHS.event),
      eventSchedule: {
        '@type': 'Schedule',
        startDate: doorsIso,
        endDate: FUTURE_AI_EVENT.endIso,
        scheduleTimezone: 'Africa/Nairobi',
        byDay: 'https://schema.org/Thursday',
        repeatFrequency: 'P1D',
        duration: 'PT5H30M',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: `${FUTURE_AI_EVENT.title} — Full Programme`,
      numberOfItems: FUTURE_AI_PROGRAMME.length,
      itemListElement: FUTURE_AI_PROGRAMME.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: `${s.time} — ${s.title}`,
        description: s.body[0],
      })),
    },
    breadcrumbJsonLd([
      { name: 'Events', path: FUTURE_AI_PATHS.hub },
      { name: FUTURE_AI_EVENT.title, path: FUTURE_AI_PATHS.event },
      { name: 'Official Programme', path: FUTURE_AI_PATHS.programme },
    ]),
  ];
}

export function futureAiHubJsonLd() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Cres Dynamics Events Nairobi',
      description: 'Upcoming business and AI events in Nairobi, Kenya by Cres Dynamics.',
      url: absolute(FUTURE_AI_PATHS.hub),
      inLanguage: 'en-KE',
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            url: absolute(FUTURE_AI_PATHS.event),
            name: FUTURE_AI_EVENT.title,
          },
        ],
      },
    },
    breadcrumbJsonLd([{ name: 'Events', path: FUTURE_AI_PATHS.hub }]),
  ];
}

export function futureAiEventPageJsonLd() {
  return [
    futureAiEventJsonLd(),
    breadcrumbJsonLd([
      { name: 'Events', path: FUTURE_AI_PATHS.hub },
      { name: FUTURE_AI_EVENT.title, path: FUTURE_AI_PATHS.event },
    ]),
    futureAiFaqJsonLd(),
  ];
}

function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}

function futureAiFaqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'When and where is The Future of AI in Business?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${FUTURE_AI_EVENT.dateLabel}, ${FUTURE_AI_EVENT.venue}. Doors open at ${FUTURE_AI_EVENT.doorsOpen}. Programme runs ${FUTURE_AI_EVENT.timeRange}.`,
        },
      },
      {
        '@type': 'Question',
        name: 'How much are tickets for The Future of AI in Business?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'General KES 1,500, Standard KES 2,500, VIP KES 3,500. Register at cresdynamics.com/events.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who should attend this AI event in Nairobi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Business owners, founders, developers, engineers, investors, job seekers, and students interested in practical AI adoption in Kenyan business.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the colour lanyard networking system?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Every attendee receives a colour-coded lanyard at registration — blue for business owners, yellow for developers, orange for investors, red for hiring, green for job seekers, white for students, and purple for VIP and speakers.',
        },
      },
    ],
  };
}
