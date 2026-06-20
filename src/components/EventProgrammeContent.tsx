'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  FUTURE_AI_EVENT,
  FUTURE_AI_LANYARDS,
  FUTURE_AI_PATHS,
  FUTURE_AI_PROGRAMME,
  FUTURE_AI_SPONSORS,
  FUTURE_AI_TICKETS,
  type ProgrammeSession,
} from '@/lib/future-ai-event';

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'theme', label: 'Theme' },
  { id: 'lanyards', label: 'Lanyards' },
  { id: 'programme', label: 'Programme' },
  { id: 'tickets', label: 'Tickets' },
  { id: 'sponsors', label: 'Sponsors' },
  { id: 'register', label: 'Register' },
] as const;

const TICKET_STYLE: Record<string, { accent: string; glow: string; tag?: string }> = {
  economy: { accent: 'rgba(255,255,255,0.2)', glow: 'rgba(255,255,255,0.06)' },
  standard: { accent: 'rgba(47,166,179,0.55)', glow: 'rgba(47,166,179,0.12)', tag: 'Most popular' },
  vip: { accent: 'rgba(243,156,36,0.55)', glow: 'rgba(243,156,36,0.1)', tag: 'Full access' },
};

const SPONSOR_STYLE: Record<string, string> = {
  'Gold Sponsor': '#F39C24',
  'Silver Sponsor': '#94A3B8',
  'Community Partner': '#2FA6B3',
};

type ProgrammeGroup = { time: string; sessions: ProgrammeSession[] };

function groupProgramme(sessions: ProgrammeSession[]): ProgrammeGroup[] {
  const groups: ProgrammeGroup[] = [];
  for (const session of sessions) {
    const last = groups[groups.length - 1];
    const sameSlot =
      last &&
      last.time === session.time &&
      (session.parallel || last.sessions.some((s) => s.parallel));
    if (sameSlot) {
      last.sessions.push(session);
    } else {
      groups.push({ time: session.time, sessions: [session] });
    }
  }
  return groups;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.22em] text-[#2FA6B3] mb-3 font-mono flex items-center gap-2">
      <span className="inline-block w-6 h-px bg-[#2FA6B3]/50" aria-hidden />
      {children}
    </p>
  );
}

function SessionMeta({ session }: { session: ProgrammeSession }) {
  const lines: { label: string; value: string }[] = [];
  if (session.host) lines.push({ label: 'Host', value: session.host });
  if (session.speaker) lines.push({ label: 'Speaker', value: session.speaker });
  if (session.moderator) lines.push({ label: 'Moderator', value: session.moderator });
  if (session.panellists) lines.push({ label: 'Panellists', value: session.panellists });
  if (session.facilitator) lines.push({ label: 'Facilitator', value: session.facilitator });
  if (session.guest) lines.push({ label: 'Guest', value: session.guest });
  if (lines.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {lines.map((line) => (
        <span
          key={line.label}
          className="inline-flex items-center gap-1.5 rounded-full border border-[#2FA6B3]/25 bg-[#2FA6B3]/8 px-3 py-1 text-xs text-[#7dd3e0]"
        >
          <span className="text-white/40 font-mono uppercase tracking-wider text-[9px]">{line.label}</span>
          {line.value}
        </span>
      ))}
    </div>
  );
}

function SessionCard({ session, compact }: { session: ProgrammeSession; compact?: boolean }) {
  const [open, setOpen] = useState(!compact);

  return (
    <article
      className={`relative overflow-hidden rounded-2xl border backdrop-blur-md transition-all duration-300 hover:border-white/20 ${
        session.parallel
          ? 'border-[#F39C24]/35 bg-gradient-to-br from-[#F39C24]/10 via-[#060B18]/80 to-[#060B18]/90'
          : session.title === 'The Open Table'
            ? 'border-[#2FA6B3]/40 bg-gradient-to-br from-[#2FA6B3]/12 via-[#060B18]/85 to-[#0A2540]/90 ring-1 ring-[#2FA6B3]/20'
            : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.05]'
      }`}
    >
      {session.parallel && (
        <div
          className="absolute top-0 right-0 px-3 py-1 text-[9px] font-black uppercase tracking-widest text-[#F39C24] bg-[#F39C24]/15 rounded-bl-xl font-mono"
          aria-hidden
        >
          Parallel
        </div>
      )}

      <div className="p-4 sm:p-5 md:p-6">
        <h3 className="text-sm sm:text-base md:text-lg font-black text-white uppercase tracking-wide leading-snug pr-16 mb-2">
          {session.title}
        </h3>

        {session.audience && (
          <p className="text-xs sm:text-sm font-semibold text-[#F39C24] mb-1.5">{session.audience}</p>
        )}
        {session.location && (
          <p className="text-[10px] sm:text-xs text-white/40 mb-2 font-mono flex items-center gap-1.5">
            <span aria-hidden>◎</span> {session.location}
          </p>
        )}
        {session.sessionTitle && (
          <p className="text-sm font-bold text-white/90 mb-3 leading-snug">
            <span className="text-white/40 font-normal">Title · </span>
            {session.sessionTitle}
          </p>
        )}

        <SessionMeta session={session} />

        {/* Mobile: collapsible body */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="w-full flex items-center justify-between text-xs font-semibold text-[#2FA6B3] py-2 border-t border-white/10 mt-2"
            aria-expanded={open}
          >
            {open ? 'Hide details' : 'Read session details'}
            <span className="text-lg leading-none">{open ? '−' : '+'}</span>
          </button>
          {open && (
            <div className="space-y-3 pt-3 pb-1">
              {session.body.map((para) => (
                <p key={para.slice(0, 48)} className="text-sm text-white/60 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Desktop: always visible */}
        <div className="hidden md:block space-y-3">
          {session.body.map((para) => (
            <p key={para.slice(0, 48)} className="text-sm text-white/60 leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-white/5">
          {session.duration && (
            <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/5 text-white/50 border border-white/10">
              {session.duration}
            </span>
          )}
          {session.format && (
            <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-[#2FA6B3]/10 text-[#7dd3e0] border border-[#2FA6B3]/20 max-w-full">
              {session.format}
            </span>
          )}
          {session.maxAttendees && (
            <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-[#F39C24]/10 text-[#F39C24] border border-[#F39C24]/20">
              {session.maxAttendees}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

function TimelineGroup({ group, index }: { group: ProgrammeGroup; index: number }) {
  const isParallel = group.sessions.length > 1;

  return (
    <div className="relative pl-8 sm:pl-10 md:pl-12">
      {/* Timeline spine */}
      <div className="absolute left-[11px] sm:left-[15px] md:left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-[#2FA6B3]/60 via-[#2FA6B3]/20 to-transparent" aria-hidden />
      <div
        className="absolute left-0 sm:left-1 md:left-2 top-5 w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] rounded-full border-2 border-[#2FA6B3] bg-[#060B18] flex items-center justify-center shadow-[0_0_20px_rgba(47,166,179,0.35)]"
        aria-hidden
      >
        <span className="w-2 h-2 rounded-full bg-[#2FA6B3] animate-pulse" />
      </div>

      <div className="mb-3 flex flex-wrap items-center gap-2 sm:gap-3">
        <time className="font-mono text-sm sm:text-base font-black text-[#2FA6B3] tabular-nums">
          {group.time}
        </time>
        {isParallel && (
          <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-[#F39C24] font-mono px-2 py-0.5 rounded border border-[#F39C24]/30 bg-[#F39C24]/10">
            {group.sessions.length} tracks
          </span>
        )}
        <span className="text-[10px] text-white/25 font-mono hidden sm:inline">Session {String(index + 1).padStart(2, '0')}</span>
      </div>

      <div className={`grid gap-4 ${isParallel ? 'md:grid-cols-2' : 'grid-cols-1'} ${group.sessions.some((s) => s.title === 'The Open Table') ? 'mb-6' : 'mb-10'}`}>
        {group.sessions.map((session) => (
          <SessionCard key={`${session.time}-${session.title}`} session={session} compact={session.body.length > 2} />
        ))}
      </div>
    </div>
  );
}

export default function EventProgrammeContent() {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const programmeGroups = useMemo(() => groupProgramme(FUTURE_AI_PROGRAMME), []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    for (const { id } of SECTIONS) {
      const el = document.getElementById(id);
      if (!el) continue;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    }
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-[#060B18] text-white overflow-x-hidden">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden>
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(47,166,179,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(47,166,179,0.07) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-[#2FA6B3]/15 blur-[120px]" />
        <div className="absolute top-1/2 -left-40 w-[360px] h-[360px] rounded-full bg-[#F39C24]/10 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-[#6366F1]/8 blur-[90px]" />
      </div>

      <Header />

      {/* Hero */}
      <section id="overview" className="relative z-10 pt-8 pb-6 md:pb-8 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-white/40 mb-6 font-mono">
            <Link href={FUTURE_AI_PATHS.hub} className="hover:text-[#2FA6B3] transition-colors">
              Events
            </Link>
            <span>/</span>
            <Link href={FUTURE_AI_PATHS.event} className="hover:text-[#2FA6B3] transition-colors truncate max-w-[140px] sm:max-w-none">
              {FUTURE_AI_EVENT.title}
            </Link>
            <span>/</span>
            <span className="text-white/70">Programme</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
            <div className="max-w-3xl">
              <SectionLabel>Official Event Programme</SectionLabel>
              <h1
                className="font-black uppercase leading-[0.95] tracking-tight mb-4"
                style={{ fontSize: 'clamp(1.75rem, 5.5vw, 3.25rem)' }}
              >
                The Future{' '}
                <span className="bg-gradient-to-r from-[#F39C24] via-[#2FA6B3] to-[#F39C24] bg-clip-text text-transparent">
                  of AI
                </span>
                <br />
                in Business
              </h1>
              <p className="text-sm sm:text-base text-[#F39C24] font-semibold tracking-wide mb-3">
                {FUTURE_AI_EVENT.tagline}
              </p>
              <p className="text-sm text-white/55 leading-relaxed max-w-2xl">
                Official programme for Nairobi&apos;s AI business conference — {FUTURE_AI_EVENT.dateCheckout},{' '}
                {FUTURE_AI_EVENT.venue}. Keynotes, breakout tracks, live AI challenge, and The Open Table finale.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 shrink-0">
              <Link
                href={`${FUTURE_AI_PATHS.event}#register`}
                className="inline-flex items-center justify-center rounded-xl bg-[#F39C24] px-5 py-2.5 text-xs sm:text-sm font-bold text-[#060B18] hover:bg-[#E48B18] transition-colors shadow-[0_0_24px_rgba(243,156,36,0.25)]"
              >
                Register →
              </Link>
              <Link
                href={FUTURE_AI_PATHS.event}
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white/80 hover:border-[#2FA6B3] hover:text-[#2FA6B3] transition-colors backdrop-blur-sm"
              >
                Event page
              </Link>
            </div>
          </div>

          {/* Meta grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { label: 'Date', value: FUTURE_AI_EVENT.dateCheckout, icon: '📅', dateTime: '2026-07-25' },
              { label: 'Time', value: FUTURE_AI_EVENT.timeRange, icon: '⏱', dateTime: undefined },
              { label: 'Venue', value: FUTURE_AI_EVENT.venueShort, icon: '📍', dateTime: undefined },
              { label: 'Organiser', value: FUTURE_AI_EVENT.organiser, icon: '◆', dateTime: undefined },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-4 sm:p-5 hover:border-[#2FA6B3]/30 transition-colors group"
              >
                <span className="text-base mb-2 block opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden>
                  {item.icon}
                </span>
                <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-white/35 font-mono mb-1">
                  {item.label}
                </p>
                {item.dateTime ? (
                  <time dateTime={item.dateTime} className="text-xs sm:text-sm font-semibold text-white/90 leading-snug">
                    {item.value}
                  </time>
                ) : (
                  <p className="text-xs sm:text-sm font-semibold text-white/90 leading-snug">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4 sm:p-5">
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
              <span className="text-white/40 font-mono uppercase tracking-wider text-[10px] mr-2">Contact</span>
              <a href={`mailto:${FUTURE_AI_EVENT.contactEmail}`} className="text-[#2FA6B3] hover:underline break-all">
                {FUTURE_AI_EVENT.contactEmail}
              </a>
              <span className="text-white/25 mx-2 hidden sm:inline">|</span>
              <span className="block sm:inline mt-1 sm:mt-0">
                <a href="https://wa.me/254708805496" className="text-[#2FA6B3] hover:underline" target="_blank" rel="noopener noreferrer">
                  {FUTURE_AI_EVENT.contactPhone}
                </a>
              </span>
              <span className="text-white/25 mx-2 hidden sm:inline">|</span>
              <span className="block sm:inline mt-1 sm:mt-0">
                <Link href={FUTURE_AI_PATHS.hub} className="text-[#2FA6B3] hover:underline">
                  cresdynamics.com/events
                </Link>
              </span>
            </p>
            <p className="text-[10px] text-white/35 mt-2 font-mono">Doors open {FUTURE_AI_EVENT.doorsOpen}</p>
          </div>
        </div>
      </section>

      {/* Sticky section nav */}
      <nav
        className="sticky top-[72px] z-30 border-y border-white/10 bg-[#060B18]/85 backdrop-blur-xl"
        aria-label="Programme sections"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-2.5 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {SECTIONS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`shrink-0 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider font-mono transition-all ${
                  activeSection === id
                    ? 'bg-[#2FA6B3]/20 text-[#2FA6B3] border border-[#2FA6B3]/40'
                    : 'text-white/45 hover:text-white/80 border border-transparent hover:border-white/10'
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="relative z-10 pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-0">

          {/* Theme */}
          <section id="theme" className="pt-4 pb-2 md:pt-5 md:pb-3 scroll-mt-36">
            <SectionLabel>Theme</SectionLabel>
            <div className="relative rounded-3xl border border-[#F39C24]/25 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F39C24]/10 via-transparent to-[#2FA6B3]/10" aria-hidden />
              <blockquote className="relative p-5 sm:p-6 md:p-7 text-base sm:text-lg md:text-xl font-medium text-white/90 leading-relaxed">
                <span className="absolute top-3 left-4 text-4xl text-[#F39C24]/20 font-serif leading-none select-none" aria-hidden>
                  &ldquo;
                </span>
                {FUTURE_AI_EVENT.theme}
              </blockquote>
            </div>
          </section>

          {/* Lanyards */}
          <section id="lanyards" className="py-4 md:py-5 scroll-mt-36">
            <SectionLabel>Lanyard System</SectionLabel>
            <p className="text-sm sm:text-base text-white/55 mb-4 max-w-2xl">
              Every attendee receives a colour coded lanyard at registration — instant signal of who is in the room.
            </p>

            {/* Mobile: horizontal scroll cards */}
            <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:overflow-visible sm:pb-0 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {FUTURE_AI_LANYARDS.map((l) => (
                <div
                  key={l.id}
                  className="shrink-0 w-[200px] sm:w-auto rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-4 hover:border-white/20 transition-all hover:-translate-y-0.5"
                  style={{ boxShadow: `0 8px 32px ${l.color}18` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="w-10 h-10 rounded-full shrink-0 ring-2 ring-white/20 shadow-lg"
                      style={{ background: l.color, boxShadow: `0 0 20px ${l.color}66` }}
                    />
                    <div>
                      <p className="text-sm font-black text-white">{l.colorName}</p>
                      <p className="text-[10px] text-white/40 font-mono uppercase tracking-wider">{l.label}</p>
                    </div>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">{l.role}</p>
                </div>
              ))}
            </div>

            {/* Desktop table fallback for accessibility / print */}
            <details className="mt-6 hidden lg:block group">
              <summary className="text-xs text-white/35 font-mono cursor-pointer hover:text-[#2FA6B3] list-none flex items-center gap-2">
                <span className="group-open:rotate-90 transition-transform inline-block">▸</span> Table view
              </summary>
              <div className="mt-3 overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/[0.03]">
                      <th className="text-left py-3 px-4 font-semibold text-white/70">Colour</th>
                      <th className="text-left py-3 px-4 font-semibold text-white/70">Who</th>
                    </tr>
                  </thead>
                  <tbody>
                    {FUTURE_AI_LANYARDS.map((l) => (
                      <tr key={l.id} className="border-b border-white/5 last:border-0">
                        <td className="py-3 px-4">
                          <span className="inline-flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full" style={{ background: l.color }} />
                            {l.colorName}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-white/75">{l.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </details>
          </section>

          {/* Programme timeline */}
          <section id="programme" className="py-4 md:py-6 scroll-mt-36">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5">
              <div>
                <SectionLabel>Full Programme</SectionLabel>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black">
                  Afternoon <span className="text-[#2FA6B3]">timeline</span>
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-white/40 font-mono">
                {FUTURE_AI_PROGRAMME.length} sessions · {FUTURE_AI_EVENT.timeRange}
              </p>
            </div>

            <div className="relative">
              {programmeGroups.map((group, i) => (
                <TimelineGroup key={`${group.time}-${i}`} group={group} index={i} />
              ))}
            </div>
          </section>

          {/* Tickets */}
          <section id="tickets" className="py-12 md:py-16 scroll-mt-36">
            <SectionLabel>Ticket Tiers and What Each Includes</SectionLabel>
            <div className="grid gap-4 md:grid-cols-3">
              {FUTURE_AI_TICKETS.map((t) => {
                const style = TICKET_STYLE[t.key];
                return (
                  <div
                    key={t.key}
                    className="relative rounded-2xl border backdrop-blur-md overflow-hidden flex flex-col transition-transform hover:-translate-y-1 duration-300"
                    style={{ borderColor: style.accent, background: style.glow }}
                  >
                    {style.tag && (
                      <span className="absolute top-3 right-3 text-[9px] font-black uppercase tracking-widest text-[#2FA6B3] font-mono">
                        {style.tag}
                      </span>
                    )}
                    <div className="p-5 sm:p-6 flex flex-col flex-1">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1">Ticket</p>
                      <p className="font-black text-xl sm:text-2xl text-white mb-1">{t.name}</p>
                      <p className="text-2xl sm:text-3xl font-black text-[#2FA6B3] mb-5">
                        KES {t.price}
                      </p>
                      <ul className="space-y-2.5 flex-1">
                        {t.includes.map((item) => (
                          <li key={item} className="text-xs sm:text-sm text-white/65 leading-relaxed flex gap-2">
                            <span className="text-[#2FA6B3] shrink-0 mt-0.5">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`${FUTURE_AI_PATHS.event}#register`}
                        className="mt-6 inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-[#2FA6B3] hover:text-[#060B18] border border-white/15 px-4 py-2.5 text-xs sm:text-sm font-bold text-white transition-colors"
                      >
                        Book {t.name}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Sponsors */}
          <section id="sponsors" className="py-12 md:py-16 scroll-mt-36">
            <SectionLabel>Sponsors and Partners</SectionLabel>
            <div className="grid gap-3 sm:grid-cols-3 mb-6">
              {FUTURE_AI_SPONSORS.map((s) => (
                <div
                  key={s.tier}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 hover:border-white/20 transition-colors"
                  style={{ borderTopColor: SPONSOR_STYLE[s.tier] ?? '#2FA6B3', borderTopWidth: 3 }}
                >
                  <p className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1">Tier</p>
                  <p className="font-black text-white mb-1">{s.tier}</p>
                  <p className="text-lg font-bold" style={{ color: SPONSOR_STYLE[s.tier] }}>
                    {s.amount}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-sm text-white/55">
              Sponsor enquiries:{' '}
              <a href={`mailto:${FUTURE_AI_EVENT.contactEmail}`} className="text-[#2FA6B3] hover:underline">
                {FUTURE_AI_EVENT.contactEmail}
              </a>
            </p>
          </section>

          {/* Registration */}
          <section id="register" className="py-12 md:py-16 scroll-mt-36">
            <SectionLabel>Registration</SectionLabel>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { label: 'Website', value: 'cresdynamics.com/events', href: FUTURE_AI_PATHS.hub, external: false },
                { label: 'Phone', value: FUTURE_AI_EVENT.contactPhone, href: 'https://wa.me/254708805496', external: true },
                { label: 'Email', value: FUTURE_AI_EVENT.contactEmail, href: `mailto:${FUTURE_AI_EVENT.contactEmail}`, external: true },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-5 hover:border-[#2FA6B3]/40 hover:bg-[#2FA6B3]/5 transition-all"
                >
                  <p className="text-[10px] font-mono uppercase tracking-widest text-white/35 mb-2">{c.label}</p>
                  <p className="text-sm font-semibold text-[#2FA6B3] group-hover:underline break-all">{c.value}</p>
                </a>
              ))}
            </div>
          </section>

          {/* Footer CTA */}
          <footer className="relative rounded-3xl border border-[#2FA6B3]/30 overflow-hidden mt-4">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] via-[#060B18] to-[#0A2540]" aria-hidden />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(47,166,179,0.15),transparent_60%)]" aria-hidden />
            <div className="relative p-6 sm:p-8 md:p-10 text-center">
              <p className="font-black text-lg sm:text-xl text-white mb-1">
                {FUTURE_AI_EVENT.title}
              </p>
              <p className="text-sm text-white/50 mb-0.5">
                {FUTURE_AI_EVENT.organiser} · {FUTURE_AI_EVENT.dateShort}
              </p>
              <p className="text-sm text-white/50 mb-1">{FUTURE_AI_EVENT.venue}</p>
              <p className="text-sm text-[#F39C24] font-semibold mb-6">{FUTURE_AI_EVENT.tagline}</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href={`${FUTURE_AI_PATHS.event}#register`}
                  className="inline-flex items-center justify-center rounded-xl bg-[#F39C24] px-6 py-3 text-sm font-bold text-[#060B18] hover:bg-[#E48B18] shadow-[0_0_28px_rgba(243,156,36,0.3)] transition-all hover:scale-[1.02]"
                >
                  Register now
                </Link>
                <Link
                  href={FUTURE_AI_PATHS.event}
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white/85 hover:border-[#2FA6B3] hover:text-[#2FA6B3] backdrop-blur-sm transition-colors"
                >
                  Back to event page
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </main>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-3 md:hidden bg-[#060B18]/95 border-t border-white/10 backdrop-blur-xl safe-area-pb">
        <Link
          href={`${FUTURE_AI_PATHS.event}#register`}
          className="flex items-center justify-center w-full py-3.5 rounded-xl font-black text-sm bg-[#F39C24] text-[#060B18] shadow-[0_0_20px_rgba(243,156,36,0.25)]"
        >
          Register — From KES 1,500
        </Link>
      </div>

      <Footer />
    </div>
  );
}
