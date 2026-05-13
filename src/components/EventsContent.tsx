'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EventsRegistrationModal from '@/components/EventsRegistrationModal';
import EventsSponsorModal from '@/components/EventsSponsorModal';

/* ─── Data ─────────────────────────────────────────────────────────── */

const EVENT_DATE = new Date('2026-06-20T14:00:00+03:00');

const AGENDA = [
  { time: '14:00', label: 'Doors Open · Registration & Networking' },
  { time: '14:30', label: 'Opening Keynote: AI & The African Business Landscape' },
  { time: '15:30', label: 'Panel: AI in Hiring & Operations — Live Demo' },
  { time: '16:15', label: 'Break · Exhibition Floor & Live Demos' },
  { time: '16:45', label: 'Workshop: Building AI-Powered Business Systems' },
  { time: '17:30', label: 'Fireside Chat: Scaling Tech in East Africa' },
  { time: '18:30', label: 'Closing Remarks · Networking Reception' },
];

const TOPICS = [
  { num: '01', title: 'AI Integration for SMEs', desc: 'Practical frameworks for embedding AI into everyday business operations without a big tech team.' },
  { num: '02', title: 'AI-Powered Hiring & Ops', desc: 'How modern tools are transforming talent and operations — live demo included.' },
  { num: '03', title: 'Business Intelligence & Data', desc: 'Turn raw business data into real-time strategic advantage you can act on today.' },
  { num: '04', title: 'AI Ethics & Security', desc: 'Bias, data privacy, and compliance — what every business leader must know.' },
  { num: '05', title: 'Scaling Tech in East Africa', desc: 'The real playbook for building and growing in the age of AI on the continent.' },
  { num: '06', title: "Africa's Digital Future", desc: 'Why Africa is the next major frontier for AI adoption and what that means for you.' },
];

const FOR_WHO = [
  {
    icon: '⚙️',
    audience: 'Developers & Engineers',
    headline: 'Build things that actually ship.',
    bullets: [
      'See live AI integrations — not slides, real code in production',
      'Understand which tools are worth your time and which are hype',
      'Connect with hiring managers, CTOs, and founders building in Africa',
      'Learn how to position your skills for the AI-first job market',
      'Walk away with frameworks you can open your laptop and start using',
    ],
  },
  {
    icon: '📈',
    audience: 'Business Owners & Executives',
    headline: 'Cut costs. Move faster. Stay ahead.',
    bullets: [
      'Discover where AI creates the highest ROI in your business right now',
      'See how competitors are automating what used to take full-time staff',
      "Get a clear picture of what's possible — without the technical jargon",
      'Make informed decisions about AI vendors, tools, and investments',
      'Leave with an action plan you can brief your team on Monday morning',
    ],
  },
  {
    icon: '🚀',
    audience: 'Aspiring Tech Individuals',
    headline: 'Find your path into the future.',
    bullets: [
      'Understand exactly what the tech industry looks like today in Africa',
      'Hear from builders who started where you are — and what they did next',
      'Learn which skills are in demand and how to build them fast',
      'Connect with mentors, communities, and opportunities in the room',
      'Get the clarity and confidence to take your first real step in tech',
    ],
  },
];

const TICKET_TIERS = [
  {
    name: 'General',
    price: '1,500',
    tag: null,
    color: 'rgba(255,255,255,0.06)',
    border: 'rgba(255,255,255,0.1)',
    includes: [
      'Full access to all sessions & keynotes',
      'Exhibition floor & live demos',
      'Networking reception',
      'Event materials & resources',
      'Virtual stream access',
    ],
  },
  {
    name: 'Standard',
    price: '2,500',
    tag: 'MOST POPULAR',
    color: 'rgba(47,166,179,0.08)',
    border: 'rgba(47,166,179,0.4)',
    includes: [
      'Everything in General',
      'Priority seating — front & centre',
      'Workshop session access',
      'Lunch & refreshments included',
      'Digital recap & session recordings',
    ],
  },
  {
    name: 'VIP',
    price: '3,500',
    tag: 'FULL ACCESS',
    color: 'rgba(243,156,36,0.07)',
    border: 'rgba(243,156,36,0.4)',
    includes: [
      'Everything in Standard',
      'VIP lounge access throughout the day',
      'Exclusive speaker & panelist meet',
      'Reserved front-row table for your team',
      'Post-event VIP networking dinner',
    ],
  },
];

const SPEAK_PERKS = [
  { icon: '🎙️', title: 'Stage in front of 300+', desc: 'Keynote, panel, fireside, or workshop — multiple formats available to suit your expertise.' },
  { icon: '📡', title: 'Live-streamed reach', desc: 'Your session goes beyond the room — streamed live to virtual attendees across East Africa and beyond.' },
  { icon: '🤝', title: 'Direct audience access', desc: 'Founders, executives, developers, and decision-makers. The people who act on what they hear.' },
  { icon: '📰', title: 'Feature on all promo channels', desc: 'Your name, company, and session featured across email, social, and the event site pre-event.' },
];

const SPONSOR_TIERS = [
  { level: 'Bronze', benefit: 'Logo on all event materials, virtual shoutout, 2 tickets included.' },
  { level: 'Silver', benefit: 'Exhibition table, branded session segment, 5 tickets, social feature.' },
  { level: 'Gold', benefit: 'Speaking slot, prime exhibition space, 10 tickets, full brand integration.' },
];

/* ─── Countdown ─────────────────────────────────────────────────────── */

function useCountdown(target: Date) {
  const calc = () => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      mins: Math.floor((diff % 3600000) / 60000),
      secs: Math.floor((diff % 60000) / 1000),
    };
  };
  // Start with zeros so SSR and client hydration always agree
  const [tick, setTick] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  useEffect(() => {
    setTick(calc());
    const id = setInterval(() => setTick(calc()), 1000);
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return tick;
}

function CountUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[60px]">
      <span className="tabular-nums font-black leading-none" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#F39C24' }}>
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-xs uppercase tracking-widest mt-1" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace' }}>
        {label}
      </span>
    </div>
  );
}

/* ─── Component ─────────────────────────────────────────────────────── */

type TicketType = 'economy' | 'standard' | 'vip' | 'virtual';
type SponsorTier = 'community' | 'silver' | 'gold' | 'custom';

export default function EventsContent() {
  const [modalOpen, setModalOpen]         = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<TicketType>('standard');
  const [sponsorOpen, setSponsorOpen]     = useState(false);
  const [sponsorTier, setSponsorTier]     = useState<SponsorTier>('silver');
  const [quickEmail, setQuickEmail]       = useState('');
  const countdown = useCountdown(EVENT_DATE);

  const openModal = (ticket: TicketType = 'standard') => {
    setSelectedTicket(ticket);
    setModalOpen(true);
  };

  const openSponsor = (tier: SponsorTier = 'silver') => {
    setSponsorTier(tier);
    setSponsorOpen(true);
  };

  return (
    <div className="min-h-screen" style={{ background: '#080F1C', color: '#fff' }}>
      <Header />

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="relative flex flex-col justify-center overflow-hidden" style={{ minHeight: '100svh', paddingTop: '5rem' }}>
        <div className="absolute inset-0">
          <img src="/events/hero-stage.jpg" alt="Conference audience" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(145deg, rgba(8,15,28,0.93) 0%, rgba(8,15,28,0.80) 50%, rgba(8,15,28,0.88) 100%)' }} />
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(47,166,179,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(47,166,179,0.07) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        </div>
        <div className="absolute pointer-events-none" style={{ top: '15%', right: '0', width: '520px', height: '520px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(47,166,179,0.14) 0%, transparent 70%)' }} />
        <div className="absolute pointer-events-none" style={{ bottom: '10%', left: '0', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(243,156,36,0.1) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 w-full">
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase border" style={{ border: '1px solid rgba(47,166,179,0.45)', color: '#2FA6B3', background: 'rgba(47,166,179,0.1)', fontFamily: 'monospace' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#2FA6B3] animate-pulse inline-block" />
              Nairobi · 20 June 2026 · Sarit Expo Centre, Westlands
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase border" style={{ border: '1px solid rgba(243,156,36,0.35)', color: '#F39C24', background: 'rgba(243,156,36,0.08)', fontFamily: 'monospace' }}>
              Limited Seats Available
            </span>
          </div>

          <h1 className="font-black uppercase leading-[0.9] mb-8" style={{ fontSize: 'clamp(3rem, 9vw, 8rem)', letterSpacing: '-0.02em', maxWidth: '950px' }}>
            The Future <span style={{ color: '#F39C24' }}>of AI</span><br />in Business.
          </h1>
          <p className="mb-12 max-w-xl leading-relaxed" style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.65)' }}>
            Nairobi&apos;s premier AI summit for founders, executives, and builders ready to move fast. One day. Real demos. Conversations that change how you run your business.
          </p>

          <div className="flex items-center gap-4 md:gap-8 mb-12">
            <CountUnit value={countdown.days} label="Days" />
            <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '2rem', fontWeight: 900 }}>:</span>
            <CountUnit value={countdown.hours} label="Hours" />
            <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '2rem', fontWeight: 900 }}>:</span>
            <CountUnit value={countdown.mins} label="Mins" />
            <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '2rem', fontWeight: 900 }}>:</span>
            <CountUnit value={countdown.secs} label="Secs" />
          </div>

          <div className="flex flex-wrap gap-4 mb-20">
            <button type="button" onClick={() => openModal('standard')} className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-lg transition-all" style={{ background: '#F39C24', color: '#080F1C', fontSize: '1rem' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#E48B18')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#F39C24')}>
              Reserve My Seat
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <a href="#agenda" className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-lg transition-all" style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.75)', fontSize: '1rem' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#2FA6B3'; e.currentTarget.style.color = '#2FA6B3'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; }}>
              View Agenda
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4" style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', overflow: 'hidden', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)' }}>
            {[{ value: '300+', label: 'Seats Available' }, { value: '8+', label: 'Expert Speakers' }, { value: '5hrs', label: 'Immersive Content' }, { value: 'Free', label: 'Virtual Access' }].map((s, i) => (
              <div key={s.label} className="flex flex-col items-center justify-center py-5 px-4" style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <span className="font-black text-3xl md:text-4xl" style={{ color: '#2FA6B3' }}>{s.value}</span>
                <span className="text-xs mt-1 uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ opacity: 0.35 }}>
          <span className="text-xs tracking-widest uppercase" style={{ fontFamily: 'monospace' }}>Scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none"><rect x="6" y="2" width="4" height="8" rx="2" fill="white" /><path d="M8 16l-4 6h8l-4-6z" fill="white" /></svg>
        </div>
      </section>

      {/* ── EVENT DETAILS STRIP ─────────────────────────────────────────── */}
      <div style={{ background: '#0D1526', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[{ label: 'Date', value: 'Saturday, 20 June 2026' }, { label: 'Time', value: '14:00 — 19:00 EAT' }, { label: 'Venue', value: 'Sarit Expo Centre, Westlands' }, { label: 'Format', value: 'In-Person + Live Stream' }].map((d, i) => (
              <div key={d.label} className="py-7 px-6 md:px-10" style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <p className="text-xs mb-2 uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>{d.label}</p>
                <p className="font-semibold text-sm md:text-base" style={{ color: 'rgba(255,255,255,0.9)' }}>{d.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── WHO THIS IS FOR ────────────────────────────────────────────── */}
      <section className="py-32" style={{ background: '#080F1C' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#2FA6B3', fontFamily: 'monospace' }}>Who This Is For</p>
          <h2 className="font-black mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
            Built for every person who wants to{' '}
            <span style={{ color: '#F39C24' }}>move with AI.</span>
          </h2>
          <p className="mb-20 max-w-2xl text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Whether you write code, run a business, or are just starting to figure out where you fit in the tech economy — this event was designed around you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FOR_WHO.map((w) => (
              <div key={w.audience} className="rounded-2xl p-8 flex flex-col gap-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div>
                  <span className="text-3xl mb-4 block">{w.icon}</span>
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: 'rgba(47,166,179,0.1)', border: '1px solid rgba(47,166,179,0.25)', color: '#2FA6B3', fontFamily: 'monospace' }}>
                    {w.audience}
                  </span>
                </div>
                <h3 className="font-black text-2xl text-white leading-tight">{w.headline}</h3>
                <ul className="flex flex-col gap-3">
                  {w.bullets.map((b) => (
                    <li key={b} className="flex gap-3 items-start text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                      <span className="mt-1 shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-black" style={{ background: 'rgba(243,156,36,0.15)', color: '#F39C24' }}>✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button type="button" onClick={() => openModal('standard')} className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-lg transition-all" style={{ background: '#F39C24', color: '#080F1C', fontSize: '1rem' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#E48B18')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#F39C24')}>
              This Is Me — Reserve My Seat
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY ──────────────────────────────────────────────── */}
      <section className="pb-32" style={{ background: '#080F1C' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#2FA6B3', fontFamily: 'monospace' }}>Feel the Room</p>
          <h2 className="font-black mb-12" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
            What 300+ people in one room{' '}
            <span style={{ color: '#F39C24' }}>feels like.</span>
          </h2>
          <div className="grid grid-cols-12 grid-rows-2 gap-4" style={{ height: 'clamp(380px, 55vw, 600px)' }}>
            <div className="col-span-12 md:col-span-7 row-span-2 rounded-2xl overflow-hidden relative" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
              <img src="/events/gallery-3.jpg" alt="Keynote presentation on main stage" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute bottom-0 left-0 right-0 p-5" style={{ background: 'linear-gradient(to top, rgba(8,15,28,0.85) 0%, transparent 100%)' }}>
                <p className="text-sm font-semibold text-white">Main Stage Keynote</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'monospace' }}>300+ in attendance · Sarit Expo Centre</p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 row-span-1 rounded-2xl overflow-hidden relative" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
              <img src="/events/hero-stage.jpg" alt="Engaged conference audience" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute bottom-0 left-0 right-0 p-4" style={{ background: 'linear-gradient(to top, rgba(8,15,28,0.8) 0%, transparent 100%)' }}>
                <p className="text-xs font-semibold text-white">Packed house, electric atmosphere</p>
              </div>
            </div>
            <div className="col-span-6 md:col-span-3 row-span-1 rounded-2xl overflow-hidden relative" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
              <img src="/events/keynote.jpg" alt="Engaged tech audience" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 flex items-end p-4" style={{ background: 'linear-gradient(to top, rgba(8,15,28,0.75) 0%, transparent 70%)' }}>
                <p className="text-xs font-semibold text-white">Focused. Taking notes.</p>
              </div>
            </div>
            <div className="col-span-6 md:col-span-2 row-span-1 rounded-2xl overflow-hidden relative" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
              <img src="/events/gallery-4.jpg" alt="Conference workshop session" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 flex items-end p-4" style={{ background: 'linear-gradient(to top, rgba(8,15,28,0.8) 0%, transparent 70%)' }}>
                <p className="text-xs font-semibold text-white">Live Demos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AGENDA ─────────────────────────────────────────────────────── */}
      <section id="agenda" className="py-32" style={{ background: '#0D1526' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#2FA6B3', fontFamily: 'monospace' }}>Day Agenda</p>
          <h2 className="font-black mb-20" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
            One day.{' '}
            <span style={{ color: '#F39C24' }}>Zero filler.</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="relative">
              <div className="absolute left-[72px] top-0 bottom-0 w-px hidden md:block" style={{ background: 'rgba(47,166,179,0.2)' }} />
              <div className="flex flex-col gap-5">
                {AGENDA.map((item, i) => (
                  <div key={item.time} className="flex gap-6 md:gap-10 items-start">
                    <div className="shrink-0 w-[72px] text-right">
                      <span className="font-bold text-sm" style={{ color: '#2FA6B3', fontFamily: 'monospace' }}>{item.time}</span>
                    </div>
                    <div className="hidden md:flex shrink-0 w-3 h-3 rounded-full mt-1 relative z-10" style={{ background: i === 0 ? '#F39C24' : '#2FA6B3', marginLeft: '-6px', boxShadow: i === 0 ? '0 0 14px rgba(243,156,36,0.7)' : 'none' }} />
                    <div className="flex-1 rounded-xl px-6 py-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <p className="font-semibold text-white">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl overflow-hidden relative" style={{ border: '1px solid rgba(255,255,255,0.08)', height: '340px' }}>
                <img src="/events/sarit-event.jpg" alt="Event at Sarit Expo Centre, Westlands Nairobi" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute bottom-0 left-0 right-0 px-5 py-4" style={{ background: 'linear-gradient(to top, rgba(8,15,28,0.85) 0%, transparent 100%)' }}>
                  <p className="text-xs font-semibold text-white" style={{ fontFamily: 'monospace' }}>📍 Sarit Expo Centre · Westlands, Nairobi</p>
                </div>
              </div>
              <div className="rounded-2xl p-7" style={{ background: 'rgba(243,156,36,0.07)', border: '1px solid rgba(243,156,36,0.2)' }}>
                <p className="font-bold text-white text-lg mb-2">Tickets from KES 1,500</p>
                <p className="text-sm mb-5" style={{ color: 'rgba(255,255,255,0.55)' }}>Virtual streaming is free. In-person tickets include full session access, networking, and more. Choose your tier below.</p>
                <a href="#tickets" className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-lg transition-all text-sm" style={{ background: '#F39C24', color: '#080F1C' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#E48B18')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#F39C24')}>
                  View Ticket Options
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TOPICS ────────────────────────────────────────────────────── */}
      <section className="py-32" style={{ background: '#080F1C' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#2FA6B3', fontFamily: 'monospace' }}>What You&apos;ll Learn</p>
          <h2 className="font-black mb-20" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
            Six deep-dives.{' '}
            <span style={{ color: '#F39C24' }}>Zero theory.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TOPICS.map((t) => (
              <div key={t.num} className="rounded-2xl p-7 relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <span className="absolute top-5 right-6 text-6xl font-black leading-none pointer-events-none" style={{ color: 'rgba(47,166,179,0.08)', fontFamily: 'monospace' }}>{t.num}</span>
                <h4 className="font-bold text-lg text-white mb-3 relative z-10">{t.title}</h4>
                <p className="text-sm leading-relaxed relative z-10" style={{ color: 'rgba(255,255,255,0.5)' }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TICKET TIERS ──────────────────────────────────────────────── */}
      <section id="tickets" className="py-32" style={{ background: '#0D1526' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#2FA6B3', fontFamily: 'monospace' }}>Get Your Ticket</p>
          <h2 className="font-black mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
            Choose your experience.
          </h2>
          <p className="mb-16 max-w-xl text-base" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Pick your tier at registration. Virtual access is always free. In-person seats are limited — secure yours early.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {TICKET_TIERS.map((t) => (
              <div key={t.name} className="rounded-2xl p-8 flex flex-col gap-6 relative" style={{ background: t.color, border: `1px solid ${t.border}` }}>
                {t.tag && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-black tracking-widest uppercase px-4 py-1.5 rounded-full" style={{ background: t.name === 'Standard' ? '#2FA6B3' : '#F39C24', color: '#080F1C' }}>
                    {t.tag}
                  </span>
                )}
                <div>
                  <p className="text-xs uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace' }}>{t.name}</p>
                  <div className="flex items-end gap-2">
                    <span className="font-black text-4xl text-white">KES {t.price}</span>
                    <span className="text-sm mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>/ person</span>
                  </div>
                </div>
                <ul className="flex flex-col gap-3 flex-1">
                  {t.includes.map((item) => (
                    <li key={item} className="flex gap-3 items-start text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      <span className="shrink-0 mt-0.5" style={{ color: t.name === 'VIP' ? '#F39C24' : '#2FA6B3' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => openModal(t.name === 'General' ? 'economy' : t.name === 'Standard' ? 'standard' : 'vip')}
                  className="w-full font-bold py-3.5 rounded-lg transition-all text-sm mt-2"
                  style={{ background: t.name === 'VIP' ? '#F39C24' : t.name === 'Standard' ? '#2FA6B3' : 'rgba(255,255,255,0.08)', color: t.name === 'General' ? 'rgba(255,255,255,0.85)' : '#080F1C', border: t.name === 'General' ? '1px solid rgba(255,255,255,0.12)' : 'none' }}
                  onMouseEnter={(e) => { if (t.name === 'General') e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; }}
                  onMouseLeave={(e) => { if (t.name === 'General') e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}>
                  Get {t.name} Ticket
                </button>
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-6 text-center" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Virtual attendance is <strong className="text-white">100% free</strong> — stream all keynotes and panels live from anywhere.{' '}
              <button type="button" onClick={() => openModal('virtual')} style={{ color: '#2FA6B3', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', fontSize: 'inherit' }}>Register for free virtual access →</button>
            </p>
          </div>
        </div>
      </section>

      {/* ── APPLY TO SPEAK ─────────────────────────────────────────────── */}
      <section className="py-32" style={{ background: '#080F1C' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left — value copy */}
            <div>
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#F39C24', fontFamily: 'monospace' }}>Apply to Speak</p>
              <h2 className="font-black mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
                Got something worth<br />
                <span style={{ color: '#F39C24' }}>300 people hearing?</span>
              </h2>
              <p className="text-base leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.55)' }}>
                We&apos;re building a lineup of builders, practitioners, and leaders who are actually doing the work. No fluff, no generic decks. We want real insights, live demos, and lessons from the field.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                {SPEAK_PERKS.map((p) => (
                  <div key={p.title} className="rounded-xl p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <span className="text-2xl mb-3 block">{p.icon}</span>
                    <h4 className="font-bold text-white text-sm mb-2">{p.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{p.desc}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl p-5 mb-8" style={{ background: 'rgba(243,156,36,0.07)', border: '1px solid rgba(243,156,36,0.2)' }}>
                <p className="text-sm font-semibold text-white mb-1">Topics we&apos;re looking for</p>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  AI in business operations · Practical ML · East Africa tech ecosystem · Startup growth · Data strategy · Future of work · Developer tooling · Digital finance
                </p>
              </div>
              <a href="/events/speak" className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-lg transition-all" style={{ background: '#F39C24', color: '#080F1C', fontSize: '1rem', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#E48B18')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#F39C24')}>
                Apply to Speak
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>

            {/* Right — sponsor */}
            <div>
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#2FA6B3', fontFamily: 'monospace' }}>Sponsor the Event</p>
              <h2 className="font-black mb-6" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.1 }}>
                Put your brand in front of the people{' '}
                <span style={{ color: '#2FA6B3' }}>who build things.</span>
              </h2>
              <p className="text-base leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.55)' }}>
                300+ founders, developers, and executives in one room — an audience that makes purchasing decisions and shapes technology for East African businesses. Sponsoring gives you direct access, not just a logo.
              </p>

              <div className="flex flex-col gap-4 mb-10">
                {SPONSOR_TIERS.map((s, i) => (
                  <div key={s.level} className="rounded-xl p-5 flex gap-4 items-start" style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${i === 2 ? 'rgba(243,156,36,0.3)' : i === 1 ? 'rgba(192,192,192,0.2)' : 'rgba(205,127,50,0.2)'}` }}>
                    <span className="font-black text-2xl shrink-0" style={{ color: i === 2 ? '#F39C24' : i === 1 ? '#C0C0C0' : '#CD7F32' }}>
                      {i === 2 ? '🥇' : i === 1 ? '🥈' : '🥉'}
                    </span>
                    <div>
                      <p className="font-bold text-white mb-1">{s.level} Sponsor</p>
                      <p className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>{s.benefit}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => openSponsor('silver')}
                className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-lg transition-all w-full justify-center"
                style={{ border: '1px solid rgba(47,166,179,0.4)', color: '#2FA6B3', fontSize: '1rem', background: 'transparent' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(47,166,179,0.08)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}>
                Apply to Sponsor
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── REGISTER CTA ──────────────────────────────────────────────── */}
      <section id="register" className="py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0D2040 0%, #112233 50%, #0D2040 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(47,166,179,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(47,166,179,0.07) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
          <p className="text-xs uppercase tracking-widest mb-6" style={{ color: '#F39C24', fontFamily: 'monospace' }}>Limited Seats Available</p>
          <h2 className="font-black mb-6" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.1 }}>
            Don&apos;t watch the future<br />
            <span style={{ color: '#F39C24' }}>happen to someone else.</span>
          </h2>
          <p className="mb-12 text-lg" style={{ color: 'rgba(255,255,255,0.6)' }}>
            300 in-person seats. 20 June 2026. Sarit Expo Centre, Westlands, Nairobi.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6">
            <input type="email" placeholder="Your email address" value={quickEmail} onChange={(e) => setQuickEmail(e.target.value)} className="flex-1 px-5 py-4 rounded-lg font-medium focus:outline-none" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontSize: '0.9375rem' }} />
            <button type="button" onClick={() => openModal('standard')} className="font-bold px-7 py-4 rounded-lg whitespace-nowrap transition-all" style={{ background: '#F39C24', color: '#080F1C', fontSize: '0.9375rem' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#E48B18')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#F39C24')}>
              Register Now →
            </button>
          </div>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>
            General: KES 1,500 &nbsp;·&nbsp; Standard: KES 2,500 &nbsp;·&nbsp; VIP: KES 3,500 &nbsp;·&nbsp; Virtual: Free
          </p>
        </div>
      </section>

      {/* ── CONTACT STRIP ──────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: '#0D1526', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p className="font-semibold text-lg text-white mb-2">Have questions?</p>
          <p className="mb-8 text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>Reach us directly — we respond fast.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://wa.me/254708805496?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20the%20CRES%20Dynamics%20AI%20Event." target="_blank" rel="noopener noreferrer" className="font-semibold text-sm" style={{ color: '#2FA6B3' }}>WhatsApp Us</a>
            <a href="mailto:info@cresdynamics.com" className="font-semibold text-sm" style={{ color: '#2FA6B3' }}>info@cresdynamics.com</a>
            <a href="tel:+254708805496" className="font-semibold text-sm" style={{ color: '#2FA6B3' }}>+254 708 805 496</a>
          </div>
        </div>
      </section>

      <Footer />

      <EventsRegistrationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        prefilledEmail={quickEmail}
        defaultTicket={selectedTicket}
      />
      <EventsSponsorModal
        isOpen={sponsorOpen}
        onClose={() => setSponsorOpen(false)}
        defaultTier={sponsorTier}
      />
    </div>
  );
}
