import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FUTURE_AI_EVENT, FUTURE_AI_PATHS } from '@/lib/future-ai-event';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events Nairobi 2026 | Cres Dynamics',
  description:
    'Upcoming Cres Dynamics events in Nairobi — AI, business systems, and practical growth for founders, developers, and teams.',
  alternates: { canonical: 'https://cresdynamics.com/events/' },
};

const EVENT_PHOTO = '/events/hero-stage.jpg';

export default function EventsHubPage() {
  return (
    <div className="min-h-screen bg-[#060B18] text-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2FA6B3] mb-3 font-mono">
            Cres Dynamics Events
          </p>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4">Events in Nairobi</h1>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mb-10">
            Practical sessions for business owners, developers, and teams — built by Cres Dynamics. Pick an event below
            to view details, programme, and registration.
          </p>

          <div className="grid gap-6">
            <article className="group rounded-2xl border border-white/15 bg-white/[0.03] overflow-hidden hover:border-[#2FA6B3]/40 transition-colors">
              <div className="grid md:grid-cols-[1.2fr_1fr]">
                <div className="relative min-h-[200px] md:min-h-full bg-[#0A2540]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={EVENT_PHOTO}
                    alt={FUTURE_AI_EVENT.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060B18] via-[#060B18]/40 to-transparent md:bg-gradient-to-r" />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <span className="inline-flex w-fit mb-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-[#F39C24]/40 text-[#F39C24]">
                    Featured · {FUTURE_AI_EVENT.dateLabel}
                  </span>
                  <h2 className="text-xl md:text-2xl font-black mb-2 group-hover:text-[#2FA6B3] transition-colors">
                    {FUTURE_AI_EVENT.title}
                  </h2>
                  <p className="text-sm text-white/55 mb-1">{FUTURE_AI_EVENT.venue}</p>
                  <p className="text-sm text-white/55 mb-6">
                    {FUTURE_AI_EVENT.timeRange} · Doors {FUTURE_AI_EVENT.doorsOpen}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={FUTURE_AI_PATHS.event}
                      className="inline-flex items-center justify-center rounded-xl bg-[#F39C24] px-5 py-2.5 text-sm font-bold text-[#060B18] hover:bg-[#E48B18]"
                    >
                      Event details &amp; register
                    </Link>
                    <Link
                      href={FUTURE_AI_PATHS.programme}
                      className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-2.5 text-sm font-semibold text-white/85 hover:border-[#2FA6B3] hover:text-[#2FA6B3]"
                    >
                      Full programme
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <p className="mt-10 text-center text-sm text-white/45">
            Questions?{' '}
            <a href="mailto:info@cresdynamics.com" className="text-[#2FA6B3] hover:underline">
              info@cresdynamics.com
            </a>{' '}
            ·{' '}
            <a href="https://wa.me/254708805496" className="text-[#2FA6B3] hover:underline" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
