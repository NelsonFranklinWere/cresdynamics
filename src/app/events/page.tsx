import Script from 'next/script';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { Metadata } from 'next';

export const runtime = 'nodejs';

export const metadata: Metadata = {
  title: 'AI Events Nairobi 2026 | The Future of AI in Business – 20 June | Westlands',
  description:
    'Nairobi\'s leading AI event for business owners and developers. The Future of AI in Business, Saturday 20 June 2026 at Sarit Expo Centre, Westlands. Practical AI strategies, live demos, panels & networking. Events in Nairobi, AI events Nairobi, business events Westlands.',
  keywords: [
    'events nairobi',
    'events in nairobi 2026',
    'ai events nairobi',
    'business events nairobi',
    'events westlands',
    'ai events in nairobi',
    'future of ai in business',
    'events nairobi june 2026',
  ],
  alternates: { canonical: 'https://cresdynamics.com/events/' },
  openGraph: {
    title: 'The Future of AI in Business | AI Events Nairobi 2026',
    description:
      'Join 300 business leaders and developers at Nairobi\'s premier practical AI event. 20 June 2026 • Sarit Expo Centre, Westlands. Keynotes, live AI demos, panels, and networking.',
    url: 'https://cresdynamics.com/events/',
    images: [
      {
        url: '/The-ai-event-the-future-of-ai-in-business.jpg',
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
    description: 'Practical AI strategies for Kenyan businesses. 20 June 2026, Westlands.',
    images: ['/The-ai-event-the-future-of-ai-in-business.jpg'],
  },
};

function loadEventHtml() {
  const p = join(process.cwd(), 'src', 'app', 'events', 'CRES_AI_Event_LandingPage.html');
  const html = readFileSync(p, 'utf8');

  const style = html.match(/<style[^>]*>([\s\S]*?)<\/style>/i)?.[1] ?? '';
  const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? html;
  const scripts = Array.from(html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/gi))
    .map((m) => m[1])
    .join('\n');

  const bodyWithoutScripts = body.replace(/<script[\s\S]*?<\/script>/gi, '');

  return { style, body: bodyWithoutScripts, scripts };
}

export default function EventsPage() {
  const { style, body, scripts } = loadEventHtml();

  return (
    <>
      {/* Loads the landing page fonts (ok in body for this single page). */}
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lora:ital,wght@0,400;0,600;1,400&family=DM+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />

      {style ? <style dangerouslySetInnerHTML={{ __html: style }} /> : null}

      <div dangerouslySetInnerHTML={{ __html: body }} />

      {/* Featured Event Image – confirmed in /public and now displayed */}
      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <img
            src="/The-ai-event-the-future-of-ai-in-business.jpg"
            alt="The Future of AI in Business — CRES Dynamics AI Event in Nairobi, 20 June 2026 at Sarit Expo Centre, Westlands"
            className="w-full h-auto"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <p className="text-white text-lg font-semibold">The Future of AI in Business</p>
            <p className="text-white/70 text-sm">Nairobi • 20 June 2026 • Sarit Expo Centre, Westlands</p>
          </div>
        </div>
      </div>

      {/* Event Structured Data for SEO (helps rank for events nairobi, ai events, business events) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
            image: 'https://cresdynamics.com/The-ai-event-the-future-of-ai-in-business.jpg',
            organizer: {
              '@type': 'Organization',
              name: 'CRES Dynamics',
              url: 'https://cresdynamics.com',
            },
            offers: {
              '@type': 'Offer',
              url: 'https://cresdynamics.com/events/',
              availability: 'https://schema.org/LimitedAvailability',
              price: '0',
              priceCurrency: 'KES',
              validFrom: '2026-05-01T00:00:00+03:00',
            },
          }),
        }}
      />

      {scripts ? (
        <Script id="events-landing-inline" strategy="afterInteractive">
          {scripts}
        </Script>
      ) : null}
    </>
  );
}
