import Script from 'next/script';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { Metadata } from 'next';

export const runtime = 'nodejs';

export const metadata: Metadata = {
  title: 'Future of AI — CRES Dynamics Event | June 20, Nairobi',
  description:
    'One afternoon. 300 seats. Business owners and developers learning what AI means for them — and what to do about it right now.',
  alternates: { canonical: 'https://cresdynamics.com/events/' },
  openGraph: {
    title: 'Future of AI in Business — Nairobi (June 20, 2026)',
    description:
      'Reserve your spot for CRES Dynamics’ AI event in Nairobi. Keynotes, panel, breakouts, and networking.',
    url: 'https://cresdynamics.com/events/',
    type: 'website',
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

      {scripts ? (
        <Script id="events-landing-inline" strategy="afterInteractive">
          {scripts}
        </Script>
      ) : null}
    </>
  );
}
