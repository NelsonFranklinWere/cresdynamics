'use client';

import { useState, useEffect, useCallback, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EventsRegistrationModal from '@/components/EventsRegistrationModal';
import EventsSponsorModal from '@/components/EventsSponsorModal';
import EventsRegisterSection from '@/components/EventsRegisterSection';
import type { SponsorPackageTier } from '@/lib/sponsor-packages';
import { EVENT_LANYARDS } from '@/lib/event-lanyards';
import {
  FUTURE_AI_AGENDA_PREVIEW,
  FUTURE_AI_EVENT,
  FUTURE_AI_PATHS,
} from '@/lib/future-ai-event';

const EVENT_DATE = new Date(FUTURE_AI_EVENT.dateIso);

/** All photos from public/events/ — only reference these paths on the events page */
const EVENT_PHOTOS = {
  hero: '/events/hero-stage.jpg',
  crowd: '/events/conference-crowd.jpg',
  gallery: '/events/gallery-4.jpg',
  speaker1: '/events/speaker-1.jpg',
  speaker2: '/events/speaker-2.jpg',
  venue: '/events/saritbeforearena.jpg',
  meetingNetwork: '/events/saritmeetingnetworkingsession.jpg',
  oneOnOne: '/events/one-on-one-networking.jpg',
} as const;

const MAPS_EMBED =
  'https://maps.google.com/maps?q=Sarit+Expo+Centre+Westlands+Nairobi+Kenya&z=15&output=embed';

const AGENDA = FUTURE_AI_AGENDA_PREVIEW.map((s, i) => ({
  time: s.time,
  label: s.title,
  highlight: i === 0,
}));

const TOPICS = [
  { num: '01', title: 'AI Integration for SMEs', desc: 'Embed AI into daily operations without a large tech team.' },
  { num: '02', title: 'AI-Powered Hiring & Ops', desc: 'Transform talent and operations with tools you can deploy Monday.' },
  { num: '03', title: 'Business Intelligence', desc: 'Turn raw data into decisions — dashboards that executives actually use.' },
  { num: '04', title: 'AI Ethics & Security', desc: 'Privacy, compliance, and bias — what leaders must know now.' },
  { num: '05', title: 'Scaling Tech in East Africa', desc: 'The playbook for building and growing on the continent.' },
  { num: '06', title: "Africa's Digital Future", desc: 'Why Africa is the next major frontier for AI adoption.' },
];

const FOR_WHO = [
  {
    icon: '⚙️',
    audience: 'Developers & Engineers',
    headline: 'Ship AI that works in production.',
    image: EVENT_PHOTOS.speaker1,
    bullets: ['Live code & integrations — not theory', 'Tools worth your time vs hype', 'CTOs and founders hiring in the room'],
  },
  {
    icon: '📈',
    audience: 'Business Owners',
    headline: 'Cut costs. Move faster. Stay ahead.',
    image: EVENT_PHOTOS.meetingNetwork,
    bullets: ['Highest-ROI AI use cases for your business', 'See competitors automating in real time', 'Action plan for your team on Monday'],
  },
  {
    icon: '🚀',
    audience: 'Builders & Students',
    headline: 'Find your path into tech.',
    image: EVENT_PHOTOS.oneOnOne,
    bullets: ['East Africa ecosystem map from practitioners', 'Skills in demand right now', 'Mentors and communities in the room'],
  },
];

const OPERATIONAL_PAINS = [
  {
    title: 'The Sales Leak',
    desc: 'Your team spends 70% of their day manually typing orders from WhatsApp into legacy accounting software instead of closing enterprise deals.',
  },
  {
    title: 'The Hiring Trap',
    desc: 'You struggle to hire top talent because high-tier performers refuse to work in chaotic environments that lack automated workflows and clear role-based tracking.',
  },
  {
    title: 'The Management Blind Spot',
    desc: 'As a founder, you are forced to be in every micro-decision because you lack unified cashflow dashboards that show who owns what and where projects are stuck.',
  },
];

const TICKET_TIERS = [
  {
    name: 'General',
    emoji: '🎟️',
    price: '1,500',
    key: 'economy' as const,
    tag: null,
    border: 'rgba(255,255,255,0.12)',
    bg: 'rgba(255,255,255,0.03)',
    audience: 'Built for Managers & Marketers',
    value:
      'Master the exact AI tools to optimize your customer acquisition loops, compress project delivery times by 40%, and automate multi-channel marketing workflows.',
  },
  {
    name: 'Standard',
    emoji: '📦',
    price: '2,500',
    key: 'standard' as const,
    tag: 'MOST POPULAR',
    border: 'rgba(47,166,179,0.45)',
    bg: 'rgba(47,166,179,0.08)',
    audience: 'Built for Technical Builders & Engineers',
    value:
      'Step-by-step technical workshops on building custom AI internal systems. Learn how to move past basic code templates to engineer zero-trust, enterprise-grade business architecture that commands premium marketplace value.',
  },
  {
    name: 'VIP Executive',
    emoji: '👑',
    price: '3,500',
    key: 'vip' as const,
    tag: 'FULL ACCESS',
    border: 'rgba(243,156,36,0.45)',
    bg: 'rgba(243,156,36,0.07)',
    audience: 'Built for CEOs, Founders & COOs',
    value:
      'Direct access to real execution playbooks. Learn how to tie automated payment layers (M-Pesa and bank APIs) into a single system ledger to eliminate manual reconciliation leaks.',
    bonus:
      'Exclusive VIP bonus: post-event 90-minute Systems Discovery & AI Audit for your company by the Cres Dynamics engineering team — map bottlenecks before you write any code.',
  },
];

const FAQ = [
  { q: 'Where exactly is the event?', a: 'Sarit Expo Centre, inside the Sarit Centre complex in Westlands, Nairobi. Doors open at 1:30 PM — we recommend arriving early for parking and lanyard pickup.' },
  { q: 'What happens on the exhibition floor?', a: 'After the main sessions, the floor opens for networking, partner booths, and informal Q&A with speakers and founders. It is designed for conversations, not product pitches.' },
  { q: 'How do I pay?', a: 'Book online first — no payment required on the form. Our team will contact you with M-Pesa or Paybill 542542 / Account 43869. Your seat is confirmed once payment is received.' },
  { q: 'What is the colour lanyard system?', a: 'Pick your category at registration — business owner, developer, investor, hiring, job seeker, student, or VIP. Your lanyard colour lets everyone know who you are instantly. See the full lanyard guide on the official programme page.' },
  { q: 'Will sessions be recorded?', a: 'Yes. Registered attendees receive recordings within 7 days. VIP includes priority access and extended materials.' },
  { q: 'Can I speak or sponsor?', a: 'Speaker applications at /events/speak/. For sponsorship, use the sponsor form on this page or WhatsApp +254 708 805 496.' },
];

const GALLERY = [
  { src: EVENT_PHOTOS.hero, alt: 'AI in Business event — Nairobi', caption: 'The Future of AI in Business', featured: true },
  { src: EVENT_PHOTOS.venue, alt: 'Sarit Expo Centre', caption: 'Sarit Expo Centre, Westlands' },
  { src: EVENT_PHOTOS.meetingNetwork, alt: 'Meeting and networking at Sarit', caption: 'Meeting & networking' },
  { src: EVENT_PHOTOS.oneOnOne, alt: 'One-on-one networking', caption: 'One-on-one connections' },
  { src: EVENT_PHOTOS.crowd, alt: 'Conference crowd', caption: 'Conference energy' },
  { src: EVENT_PHOTOS.gallery, alt: 'Event gallery', caption: 'On the exhibition floor' },
  { src: EVENT_PHOTOS.speaker1, alt: 'Speaker on stage', caption: 'Keynotes & panels' },
  { src: EVENT_PHOTOS.speaker2, alt: 'Speaker session', caption: 'Sessions that ship Monday' },
];

type TicketType = 'economy' | 'standard' | 'vip';
type SponsorTier = SponsorPackageTier;

function useCountdown(target: Date) {
  const calc = () => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0, live: true };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      mins: Math.floor((diff % 3600000) / 60000),
      secs: Math.floor((diff % 60000) / 1000),
      live: false,
    };
  };
  const [tick, setTick] = useState({ days: 0, hours: 0, mins: 0, secs: 0, live: false });
  useEffect(() => {
    setTick(calc());
    const id = setInterval(() => setTick(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return tick;
}

function CountUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[52px] md:min-w-[64px]">
      <span className="tabular-nums font-black text-3xl md:text-5xl text-[#2FA6B3]">{String(value).padStart(2, '0')}</span>
      <span className="text-[10px] md:text-xs uppercase tracking-widest mt-1 text-white/40 font-mono">{label}</span>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#2FA6B3] mb-3 font-mono">{children}</p>;
}

function PaymentStatusBanner() {
  const searchParams = useSearchParams();
  const payment = searchParams.get('payment');
  const sponsor = searchParams.get('sponsor');
  if (!payment) return null;
  const ok = payment === 'success';
  return (
    <div
      className={`relative z-20 mx-4 sm:mx-6 lg:mx-8 mt-4 max-w-7xl lg:mx-auto rounded-xl px-4 py-3 text-sm font-medium border ${
        ok ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-100' : 'bg-amber-500/15 border-amber-500/40 text-amber-100'
      }`}
    >
      {ok
        ? sponsor
          ? 'Thank you — your sponsorship payment was received. We will confirm your package shortly.'
          : `Thank you — your ticket payment was received. See you at Sarit Expo Centre on ${FUTURE_AI_EVENT.dateShort}.`
        : 'Payment is pending. If you completed checkout, confirmation may take a few minutes.'}
    </div>
  );
}

function EventsContentInner() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<TicketType>('standard');
  const [sponsorOpen, setSponsorOpen] = useState(false);
  const [sponsorTier, setSponsorTier] = useState<SponsorTier>('silver');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const countdown = useCountdown(EVENT_DATE);

  const openModal = useCallback((ticket: TicketType = 'standard') => {
    setSelectedTicket(ticket);
    setModalOpen(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#060B18] text-white overflow-x-hidden pb-24 md:pb-0">
      {/* Tech grid overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(47,166,179,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(47,166,179,0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <Header />
      <Suspense fallback={null}>
        <PaymentStatusBanner />
      </Suspense>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap items-center gap-2 text-xs text-white/45 mb-4 font-mono">
          <Link href={FUTURE_AI_PATHS.hub} className="hover:text-[#2FA6B3]">
            Events
          </Link>
          <span>/</span>
          <span className="text-white/70">{FUTURE_AI_EVENT.title}</span>
        </nav>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="relative z-10 flex flex-col justify-end min-h-[100svh] pt-20 pb-12 md:pb-16">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={EVENT_PHOTOS.hero}
            alt="The Future of AI in Business — Sarit Expo Centre Nairobi"
            className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#060B18]/95 via-[#0A2540]/88 to-[#060B18]/92" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(47,166,179,0.25),transparent_55%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider border border-[#2FA6B3]/40 bg-[#2FA6B3]/10 text-[#2FA6B3] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2FA6B3] animate-pulse" />
              AI in Business · Nairobi
            </span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider border border-[#F39C24]/35 bg-[#F39C24]/10 text-[#F39C24] font-mono">
              {FUTURE_AI_EVENT.dateCheckout} · Nairobi
            </span>
          </div>

          <h1 className="font-black uppercase leading-[0.92] tracking-tight mb-5 md:mb-6" style={{ fontSize: 'clamp(2.25rem, 8vw, 5.5rem)' }}>
            The Future <span className="text-[#F39C24]">of AI</span>
            <br />
            in Business.
          </h1>
          <p className="text-base md:text-lg text-white/65 max-w-xl mb-4 leading-relaxed">
            Nairobi&apos;s practical AI summit for founders, operators, and builders — keynotes, panels, workshops, and{' '}
            <strong className="text-white">targeted networking</strong> at Sarit Expo Centre, Westlands.
          </p>
          <p className="text-sm md:text-base text-white/75 max-w-2xl mb-6 leading-relaxed border-l-2 border-[#F39C24] pl-4">
            Stop wasting hundreds of hours on manual workflows, broken spreadsheets, and duplicate data entry. This is
            Nairobi&apos;s <strong className="text-white">zero-fluff, production-ready systems summit</strong>. Leave Sarit
            Expo Centre with the exact blueprint to deploy automated pipelines, eliminate revenue leaks, and run your
            business predictably on <strong className="text-white">Monday morning</strong>.
          </p>

          <div className="grid md:grid-cols-2 gap-3 mb-8 max-w-3xl rounded-2xl overflow-hidden border border-white/10">
            <div className="relative h-[200px] md:h-[240px] bg-[#1a0a0a] isolate overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={EVENT_PHOTOS.crowd}
                alt="Operational friction — manual workflows and scattered data"
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="eager"
                decoding="async"
              />
              <div
                className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-t from-[#060B18] via-[#060B18]/50 to-transparent"
                aria-hidden
              />
              <div className="absolute bottom-0 left-0 right-0 z-[2] p-3 bg-gradient-to-t from-[#060B18] to-transparent pt-10">
                <p className="text-[10px] font-mono uppercase tracking-widest text-red-400 mb-1">The pain</p>
                <p className="text-xs text-white/90">Spreadsheets, WhatsApp follow-ups, duplicate entry, revenue leaks.</p>
              </div>
            </div>
            <div className="relative h-[200px] md:h-[240px] bg-[#0A2540] isolate overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={EVENT_PHOTOS.gallery}
                alt="Cres Core Engine — automated pipelines and live dashboards"
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="eager"
                decoding="async"
              />
              <div
                className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-t from-[#060B18] via-[#060B18]/45 to-transparent"
                aria-hidden
              />
              <div className="absolute bottom-0 left-0 right-0 z-[2] p-3 bg-gradient-to-t from-[#060B18] to-transparent pt-10">
                <p className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 mb-1">The solution</p>
                <p className="text-xs text-white/90">Live pipelines, role-based approvals, real-time revenue visibility.</p>
              </div>
            </div>
          </div>

          {!countdown.live ? (
            <div className="flex items-center gap-2 md:gap-4 mb-8 flex-wrap">
              <CountUnit value={countdown.days} label="Days" />
              <span className="text-white/20 text-2xl font-black">:</span>
              <CountUnit value={countdown.hours} label="Hrs" />
              <span className="text-white/20 text-2xl font-black">:</span>
              <CountUnit value={countdown.mins} label="Min" />
              <span className="text-white/20 text-2xl font-black">:</span>
              <CountUnit value={countdown.secs} label="Sec" />
            </div>
          ) : (
            <p className="text-[#F39C24] font-mono text-sm font-bold mb-8 uppercase tracking-widest">Event day — see you at Sarit!</p>
          )}

          <div className="flex flex-row flex-wrap gap-2 sm:gap-3 mb-10 md:mb-14">
            <button
              type="button"
              onClick={() => openModal('standard')}
              className="inline-flex flex-1 sm:flex-none justify-center items-center gap-2 font-bold px-4 sm:px-8 py-3 sm:py-4 rounded-xl bg-[#F39C24] text-[#060B18] hover:bg-[#E48B18] transition-colors text-xs sm:text-base whitespace-nowrap"
            >
              Reserve My Seat
              <span aria-hidden>→</span>
            </button>
            <Link
              href={FUTURE_AI_PATHS.programme}
              className="inline-flex flex-1 sm:flex-none justify-center items-center gap-2 font-semibold px-4 sm:px-8 py-3 sm:py-4 rounded-xl border border-white/15 text-white/80 hover:border-[#2FA6B3] hover:text-[#2FA6B3] transition-colors text-xs sm:text-base whitespace-nowrap"
            >
              Full Programme
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 rounded-xl border border-white/10 overflow-hidden bg-white/[0.04] backdrop-blur-md">
            {[
              { v: '300', l: 'In-person seats' },
              { v: '6', l: 'Deep-dives' },
              { v: '5hr', l: 'Programme' },
              { v: 'Sarit', l: 'Expo Centre' },
            ].map((s, i) => (
              <div key={s.l} className={`py-4 px-3 text-center ${i < 3 ? 'border-r border-white/10' : ''}`}>
                <p className="font-black text-xl md:text-2xl text-[#2FA6B3]">{s.v}</p>
                <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-wider font-mono mt-0.5">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DETAILS STRIP ── */}
      <div className="relative z-10 border-y border-white/10 bg-[#0A1628]/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Date', value: FUTURE_AI_EVENT.dateCheckout },
            { label: 'Time', value: FUTURE_AI_EVENT.timeRange },
            { label: 'Venue', value: FUTURE_AI_EVENT.venueShort },
            { label: 'Doors', value: FUTURE_AI_EVENT.doorsOpen },
          ].map((d, i) => (
            <div key={d.label} className={`py-5 px-4 md:px-6 ${i < 3 ? 'border-r border-white/10' : ''}`}>
              <p className="text-[10px] uppercase tracking-widest text-white/35 font-mono mb-1">{d.label}</p>
              <p className="font-semibold text-sm text-white/90">{d.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── VALUE ── */}
      <section id="why-attend" className="relative z-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>Why attend</SectionLabel>
          <h2 className="font-black text-3xl md:text-5xl mb-4 leading-tight">
            Practical AI for <span className="text-[#2FA6B3]">Kenyan business.</span>
          </h2>
          <p className="text-white/55 max-w-2xl mb-10 md:mb-12 text-sm md:text-base">
            One afternoon at Sarit Expo Centre — learn what is working now, meet founders and engineers in the room, and leave with ideas you can act on Monday. No fluff, no generic keynotes.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Actionable sessions', desc: 'Keynotes and panels on hiring, ops, BI, ethics, and scaling — built for decision-makers.' },
              { title: 'Right people in the room', desc: 'Colour-coded lanyards so developers, founders, investors, and students find each other fast.' },
              { title: 'Westlands, easy access', desc: `Sarit Expo Centre — parking, Uber, and matatu links. Doors ${FUTURE_AI_EVENT.doorsOpen}, programme ${FUTURE_AI_EVENT.timeRange.split(' — ')[0]}.` },
            ].map((item) => (
              <div key={item.title} className="rounded-xl p-5 border border-white/10 bg-white/[0.02]">
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 md:mt-20 pt-12 border-t border-white/10">
            <SectionLabel>What is broken behind the scenes?</SectionLabel>
            <h3 className="font-black text-2xl md:text-4xl mb-4 leading-tight">
              What Is <span className="text-[#F39C24]">Silently Killing</span> Your Growth?
            </h3>
            <p className="text-white/55 max-w-2xl mb-8 text-sm md:text-base">
              Most growing enterprises in Kenya aren&apos;t failing due to product quality; they are hitting a ceiling
              because their internal operations are stuck in the past. At this summit, we pull back the curtain on live,
              active systems built to solve these exact local problems.
            </p>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                {OPERATIONAL_PAINS.map((p) => (
                  <div key={p.title} className="rounded-xl p-4 border border-red-500/20 bg-red-500/5">
                    <p className="text-sm font-bold text-white mb-1">
                      <span className="text-red-400 mr-1">🔴</span> {p.title}
                    </p>
                    <p className="text-sm text-white/55">{p.desc}</p>
                  </div>
                ))}
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 h-[280px] md:h-[320px] isolate">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={EVENT_PHOTOS.speaker1}
                  alt="Executive presentation — Nairobi business summit"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
                <div
                  className="absolute inset-x-0 bottom-0 z-[1] h-2/3 pointer-events-none bg-gradient-to-t from-[#060B18] via-[#060B18]/50 to-transparent"
                  aria-hidden
                />
                <p className="absolute bottom-4 left-4 right-4 z-[2] text-xs text-white/90 font-medium drop-shadow-md">
                  High-level corporate authority — operators taking notes, not passive audiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VENUE: SARIT ── */}
      <section id="venue" className="relative z-10 py-16 md:py-24 bg-[#0A1628] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <SectionLabel>Venue</SectionLabel>
              <h2 className="font-black text-3xl md:text-5xl mb-5 leading-tight">
                Sarit <span className="text-[#F39C24]">Expo Centre</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-5 mb-6 items-stretch">
                <p className="text-white/55 text-sm md:text-base leading-relaxed">
                  Hosted inside the <strong className="text-white">Sarit Centre</strong> complex in Westlands — Nairobi&apos;s established hub for conferences, exhibitions, and business events. Same compound as Sarit Centre mall: easy parking, Uber drop-off, and matatu access from Westlands roundabout.
                </p>
                <div className="relative h-[200px] sm:h-auto sm:min-h-[200px] rounded-2xl overflow-hidden border border-white/10 isolate">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={EVENT_PHOTOS.meetingNetwork}
                    alt="Meeting and networking at Sarit Expo Centre"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  'Sarit Expo Centre, Westlands, Nairobi',
                  'Parking: Sarit Centre parking complex',
                  'Matatu 106, 107, 108 → Westlands (3 min walk)',
                  'Doors 1:30 PM · Programme starts 2:00 PM',
                ].map((line) => (
                  <li key={line} className="flex gap-3 text-sm text-white/70">
                    <span className="text-[#2FA6B3] shrink-0">▸</span>
                    {line}
                  </li>
                ))}
              </ul>
              <a
                href="https://maps.google.com/?q=Sarit+Expo+Centre+Westlands+Nairobi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#2FA6B3] hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 h-[180px] md:h-[200px] isolate">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={EVENT_PHOTOS.venue}
                  alt="Sarit Expo Centre — Westlands Nairobi"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] lg:aspect-auto lg:min-h-[240px] relative bg-[#060B18]">
                <iframe
                  title="Sarit Expo Centre map"
                  src={MAPS_EMBED}
                  className="absolute inset-0 w-full h-full min-h-[240px] border-0 grayscale-[20%] contrast-[1.1]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO + LANYARDS ── */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>Who attends</SectionLabel>
          <h2 className="font-black text-3xl md:text-5xl mb-12">Built for builders & decision-makers.</h2>
          <div className="grid md:grid-cols-3 gap-5 mb-16">
            {FOR_WHO.map((w) => (
              <div key={w.audience} className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
                <div className="relative h-[140px] isolate">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={w.image}
                    alt={w.audience}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060B18] via-[#060B18]/40 to-transparent" aria-hidden />
                </div>
                <div className="p-6">
                  <span className="text-2xl mb-3 block">{w.icon}</span>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#2FA6B3] font-mono mb-2">{w.audience}</p>
                  <h3 className="font-black text-lg text-white mb-4">{w.headline}</h3>
                  <ul className="space-y-2">
                    {w.bullets.map((b) => (
                      <li key={b} className="text-sm text-white/55 flex gap-2">
                        <span className="text-[#F39C24]">✓</span> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-6 md:p-8 border border-[#2FA6B3]/20 bg-[#0A2540]/50">
            <SectionLabel>Smart networking</SectionLabel>
            <h3 className="font-black text-xl md:text-2xl mb-4">Colour-coded lanyards at registration</h3>
            <p className="text-sm text-white/55 mb-6 max-w-2xl">
              Pick your category when you register. Your lanyard colour signals who you are — developers find developers, founders find founders, in seconds.
            </p>
            <div className="flex flex-wrap gap-3">
              {EVENT_LANYARDS.map((l) => (
                <div
                  key={l.id}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/[0.03]"
                >
                  <span className="w-3 h-3 rounded-full shrink-0" style={{ background: l.color }} />
                  <div>
                    <p className="text-xs font-bold text-white">{l.label}</p>
                    <p className="text-[10px] text-white/40">{l.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="relative z-10 py-16 md:py-24 bg-[#0A1628]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>On the day</SectionLabel>
          <h2 className="font-black text-3xl md:text-5xl mb-8">Tech conference energy at Sarit.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {GALLERY.map((g) => (
              <div
                key={g.src}
                className={`relative rounded-xl overflow-hidden border border-white/10 isolate ${
                  g.featured
                    ? 'col-span-2 row-span-2 h-[240px] sm:h-[300px] md:h-[380px]'
                    : 'h-[140px] sm:h-[160px] md:h-[185px]'
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={g.src}
                  alt={g.alt}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  loading={g.featured ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <div
                  className="absolute inset-x-0 bottom-0 z-[1] h-2/3 pointer-events-none bg-gradient-to-t from-[#060B18] via-[#060B18]/55 to-transparent"
                  aria-hidden
                />
                <p className="absolute bottom-3 left-3 right-3 z-[2] text-xs font-semibold text-white drop-shadow-md">
                  {g.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AGENDA ── */}
      <section id="agenda" className="relative z-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>Programme preview</SectionLabel>
          <h2 className="font-black text-3xl md:text-5xl mb-4">One afternoon. Zero filler.</h2>
          <p className="text-sm text-white/55 mb-8 max-w-xl">
            {FUTURE_AI_EVENT.theme}{' '}
            <Link href={FUTURE_AI_PATHS.programme} className="text-[#2FA6B3] font-semibold hover:underline">
              View the full official programme →
            </Link>
          </p>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="max-w-2xl space-y-3">
              {AGENDA.map((item) => (
                <div
                  key={item.time}
                  className={`flex gap-4 md:gap-6 items-start rounded-xl p-4 border ${
                    item.highlight ? 'border-[#F39C24]/30 bg-[#F39C24]/5' : 'border-white/10 bg-white/[0.02]'
                  }`}
                >
                  <span className="font-mono text-sm font-bold text-[#2FA6B3] shrink-0 w-16">{item.time}</span>
                  <p className="text-sm md:text-base text-white/85 font-medium">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="relative h-[280px] lg:min-h-[320px] rounded-2xl overflow-hidden border border-white/10 isolate">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={EVENT_PHOTOS.crowd}
                alt="Afternoon programme at Sarit Expo Centre"
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TOPICS ── */}
      <section className="relative z-10 py-16 md:py-24 bg-[#0A1628] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>Programme themes</SectionLabel>
          <h2 className="font-black text-3xl md:text-5xl mb-10">Six deep-dives.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TOPICS.map((t) => (
              <div key={t.num} className="rounded-xl p-5 border border-white/10 bg-white/[0.02] relative overflow-hidden">
                <span className="absolute top-3 right-4 text-5xl font-black text-[#2FA6B3]/10 font-mono">{t.num}</span>
                <h4 className="font-bold text-white mb-2 relative z-10">{t.title}</h4>
                <p className="text-sm text-white/50 relative z-10">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIVE PRODUCTION PROOF ── */}
      <section id="live-proof" className="relative z-10 py-16 md:py-24 bg-[#0A1628] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>Monday action plan</SectionLabel>
          <h2 className="font-black text-3xl md:text-5xl mb-4 leading-tight">
            Real Systems. Real Production. <span className="text-[#2FA6B3]">Zero Decks.</span>
          </h2>
          <p className="text-white/55 max-w-2xl mb-10 text-sm md:text-base">
            We don&apos;t do theoretical PowerPoint presentations. During the{' '}
            <strong className="text-white">Developer Track breakout</strong>, we open live development workflows to
            demonstrate:
          </p>
          <ul className="space-y-3 mb-10 max-w-2xl">
            <li className="flex gap-3 text-sm text-white/70">
              <span className="text-[#2FA6B3] shrink-0">▸</span>
              How to architect an automated invoicing script that triggers text alerts the second an account falls
              behind.
            </li>
            <li className="flex gap-3 text-sm text-white/70">
              <span className="text-[#2FA6B3] shrink-0">▸</span>
              How to structure an AI-driven data layer that pulls raw operational metrics into a clean executive
              dashboard your leadership team can read in 5 seconds.
            </li>
          </ul>
          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            <div className="relative rounded-2xl overflow-hidden border border-[#2FA6B3]/25 bg-[#060B18] h-[240px] md:h-[280px] isolate">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={EVENT_PHOTOS.speaker2}
                alt="Live automation systems — production code"
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
              <span className="absolute top-4 left-4 z-[2] px-3 py-1.5 rounded-lg bg-[#F39C24] text-[#060B18] text-[10px] font-black uppercase tracking-wider">
                Live production demo — no fluff
              </span>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 h-[240px] md:h-[280px] isolate">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={EVENT_PHOTOS.oneOnOne}
                alt="Mobile-responsive business application"
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-x-0 bottom-0 z-[1] h-2/3 pointer-events-none bg-gradient-to-t from-[#060B18] via-[#060B18]/55 to-transparent" aria-hidden />
              <p className="absolute bottom-4 left-4 right-4 text-xs text-white/80">
                IDE-grade automation next to production mobile views — what you ship Monday, not slides.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TICKETS + REGISTER ── */}
      <section id="register" className="relative z-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionLabel>Tickets</SectionLabel>
              <h2 className="font-black text-3xl md:text-5xl mb-4">Choose your experience.</h2>
              <p className="text-sm text-white/50 mb-6 max-w-lg">
                Know exactly what you are paying for — each tier is built for a specific role in the room.
              </p>

              <div className="rounded-2xl p-5 md:p-6 border border-[#2FA6B3]/20 bg-[#0A2540]/40 mb-8">
                <p className="text-[10px] font-mono uppercase tracking-widest text-[#2FA6B3] mb-3">Smart networking</p>
                <p className="text-sm text-white/55 mb-4">
                  Pick up your colour-coded lanyard at registration — instantly see who to talk to without awkward
                  icebreakers.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {EVENT_LANYARDS.slice(0, 4).map((l) => (
                    <div key={l.id} className="text-center rounded-xl p-3 border border-white/10 bg-white/[0.03]">
                      <span
                        className="inline-block w-10 h-10 rounded-full mb-2 ring-2 ring-white/20"
                        style={{ background: l.color }}
                      />
                      <p className="text-xs font-bold text-white">{l.label}</p>
                      <p className="text-[9px] text-white/40 mt-1 leading-tight">{l.role}</p>
                    </div>
                  ))}
                </div>
                <Link href={FUTURE_AI_PATHS.programme} className="inline-block mt-4 text-xs font-semibold text-[#2FA6B3] hover:underline">
                  See all 7 lanyard colours on the programme →
                </Link>
              </div>

              <div className="space-y-4 mb-8">
                {TICKET_TIERS.map((t) => (
                  <div
                    key={t.name}
                    className="rounded-xl p-5 md:p-6 border"
                    style={{ borderColor: t.border, background: t.bg }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        {t.tag && (
                          <span className="text-[9px] font-black uppercase tracking-widest text-[#2FA6B3] font-mono block mb-1">
                            {t.tag}
                          </span>
                        )}
                        <p className="text-lg font-black text-white">
                          {t.emoji} {t.name} Ticket — KES {t.price}
                        </p>
                        <p className="text-xs text-[#F39C24] font-semibold mt-1">{t.audience}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => openModal(t.key)}
                        className="px-5 py-2.5 rounded-lg text-sm font-bold bg-[#2FA6B3] text-[#060B18] hover:bg-[#268F9A] shrink-0"
                      >
                        Book
                      </button>
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed">
                      <strong className="text-white/90">The value:</strong> {t.value}
                    </p>
                    {'bonus' in t && t.bonus ? (
                      <p className="text-xs text-[#F39C24]/90 mt-3 pt-3 border-t border-white/10 leading-relaxed">
                        {t.bonus}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
            <EventsRegisterSection />
          </div>
        </div>
      </section>

      {/* ── SPEAK / SPONSOR ── */}
      <section className="relative z-10 py-16 md:py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div>
            <SectionLabel>Speakers</SectionLabel>
            <h3 className="font-black text-2xl md:text-3xl mb-4">Apply to speak</h3>
            <p className="text-sm text-white/55 mb-6">Practical talks and field lessons preferred over generic decks.</p>
            <Link
              href="/events/speak/"
              className="inline-flex font-bold px-6 py-3 rounded-xl bg-[#F39C24] text-[#060B18] hover:bg-[#E48B18] text-sm"
            >
              Apply to Speak →
            </Link>
          </div>
          <div>
            <SectionLabel>Sponsors</SectionLabel>
            <h3 className="font-black text-2xl md:text-3xl mb-4">Partner with the event</h3>
            <p className="text-sm text-white/55 mb-6">Brand visibility, session segments, and direct access to 300+ decision-makers in Nairobi.</p>
            <button
              type="button"
              onClick={() => setSponsorOpen(true)}
              className="inline-flex font-bold px-6 py-3 rounded-xl border border-[#2FA6B3]/40 text-[#2FA6B3] hover:bg-[#2FA6B3]/10 text-sm"
            >
              Apply to Sponsor →
            </button>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="relative z-10 py-16 md:py-24 bg-[#0A1628]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="font-black text-3xl mb-8">Before you register</h2>
          <div className="space-y-2">
            {FAQ.map((item, i) => (
              <div key={item.q} className="rounded-xl border border-white/10 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center gap-4 p-4 md:p-5 text-left font-semibold text-white hover:bg-white/[0.03]"
                >
                  {item.q}
                  <span className="text-[#2FA6B3] text-xl shrink-0">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && <p className="px-4 md:px-5 pb-4 md:pb-5 text-sm text-white/55 leading-relaxed">{item.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="relative z-10 py-12 border-t border-white/10">
        <div className="max-w-xl mx-auto px-4 text-center">
          <p className="font-semibold text-white mb-2">Questions? Talk to Nelson</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="https://wa.me/254708805496" className="text-[#2FA6B3] font-semibold hover:underline" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a href="mailto:info@cresdynamics.com" className="text-[#2FA6B3] font-semibold hover:underline">
              info@cresdynamics.com
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-3 md:hidden bg-[#060B18]/95 border-t border-white/10 backdrop-blur-md safe-area-pb">
        <button
          type="button"
          onClick={() => openModal('standard')}
          className="w-full py-3.5 rounded-xl font-black text-sm bg-[#F39C24] text-[#060B18]"
        >
          Register — From KES 1,500
        </button>
      </div>

      <EventsRegistrationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultTicket={selectedTicket} />
      <EventsSponsorModal isOpen={sponsorOpen} onClose={() => setSponsorOpen(false)} defaultTier={sponsorTier} />
    </div>
  );
}

export default function EventsContent() {
  return (
    <Suspense fallback={null}>
      <EventsContentInner />
    </Suspense>
  );
}
