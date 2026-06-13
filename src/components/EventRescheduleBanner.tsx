'use client';

import { useEffect, useRef } from 'react';
import { FUTURE_AI_EVENT } from '@/lib/future-ai-event';

const BANNER_PARAGRAPHS = [
  {
    type: 'heading' as const,
    text: 'Important Update — The Future of AI in Business is Moving to July 2026',
  },
  { type: 'body' as const, text: 'Here is the honest story.' },
  {
    type: 'body' as const,
    text: 'Registrations for this event exceeded 300 people faster than we anticipated. When we went back to Sarit Expo Centre to expand the space and accommodate everyone — we were told the halls are fully booked for a boxing match on 20th June.',
  },
  {
    type: 'body' as const,
    text: 'We are not squeezing 300 plus people into a space that cannot hold them properly. We are not rushing a last minute venue and compromising the experience. We are moving to July with a larger venue and breakout sessions that the original space could not accommodate.',
  },
  {
    type: 'body' as const,
    text: 'Your registration is fully valid. Your seat is reserved. No action needed from your side.',
  },
  {
    type: 'body' as const,
    text: 'New date and venue will be confirmed within 48 hours. Watch your email for the update.',
  },
  {
    type: 'body' as const,
    text: 'If the new date does not work for you email info@cresdynamics.com or WhatsApp plus 254 708 805 496 and we will process your refund immediately. No questions asked.',
  },
  {
    type: 'body' as const,
    text: 'Thank you for your patience and for making this event bigger than we planned.',
  },
  { type: 'signoff' as const, text: 'Nelson Were' },
  { type: 'role' as const, text: 'Director, Cres Dynamics Ltd' },
];

export default function EventRescheduleBanner() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const setHeight = () => {
      document.documentElement.style.setProperty('--event-banner-height', `${el.offsetHeight}px`);
    };

    setHeight();
    const ro = new ResizeObserver(setHeight);
    ro.observe(el);
    window.addEventListener('resize', setHeight);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', setHeight);
      document.documentElement.style.removeProperty('--event-banner-height');
    };
  }, []);

  if (FUTURE_AI_EVENT.status !== 'rescheduled') return null;

  return (
    <div
      ref={ref}
      role="alert"
      aria-live="polite"
      className="fixed inset-x-0 top-0 z-[100] border-b border-amber-300/30 bg-gradient-to-br from-[#D97706] via-[#F59E0B] to-[#EA580C] text-white shadow-2xl"
    >
      <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6 sm:py-5">
        <div className="space-y-2.5 text-sm leading-relaxed sm:text-[15px]">
          {BANNER_PARAGRAPHS.map((block, i) => {
            if (block.type === 'heading') {
              return (
                <p key={i} className="text-base font-black leading-snug text-white sm:text-lg">
                  {block.text}
                </p>
              );
            }
            if (block.type === 'signoff') {
              return (
                <p key={i} className="pt-2 font-bold text-white">
                  {block.text}
                </p>
              );
            }
            if (block.type === 'role') {
              return (
                <p key={i} className="text-xs font-semibold uppercase tracking-wide text-white/90">
                  {block.text}
                </p>
              );
            }
            return (
              <p key={i} className="text-white/95">
                {block.text.includes('info@cresdynamics.com') ? (
                  <>
                    If the new date does not work for you email{' '}
                    <a href={`mailto:${FUTURE_AI_EVENT.contactEmail}`} className="font-bold underline">
                      info@cresdynamics.com
                    </a>{' '}
                    or{' '}
                    <a
                      href="https://wa.me/254708805496"
                      className="font-bold underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp +254 708 805 496
                    </a>{' '}
                    and we will process your refund immediately. No questions asked.
                  </>
                ) : (
                  block.text
                )}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
