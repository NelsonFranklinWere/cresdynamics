'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EventsRegistrationModal from '@/components/EventsRegistrationModal';

const AGENDA = [
  { time: '09:00', label: 'Registration & Networking Breakfast' },
  { time: '10:00', label: 'Opening Keynote: AI & The African Business Landscape' },
  { time: '11:30', label: 'Panel: AI in Hiring & Operations — Live Demo' },
  { time: '13:00', label: 'Lunch Break & Exhibition' },
  { time: '14:00', label: 'Workshop: Building AI-Powered Business Systems' },
  { time: '15:30', label: 'Fireside Chat: Scaling Tech in East Africa' },
  { time: '16:30', label: 'Closing Remarks & Networking' },
];

const SPEAKERS = [
  { initial: 'K', name: 'Keynote Speaker', role: 'AI Strategist & Tech Entrepreneur', tag: 'Opening Keynote' },
  { initial: 'H', name: 'HR Technology Expert', role: 'Future of Work Specialist', tag: 'Panel Discussion' },
  { initial: 'C', name: 'CRES Dynamics CEO', role: 'Founder, CRES Dynamics', tag: 'Fireside Chat' },
  { initial: 'B', name: 'Business Intelligence Lead', role: 'Enterprise AI Consultant', tag: 'Workshop Host' },
  { initial: 'T', name: 'Startup Mentor', role: 'Venture Builder & Investor', tag: 'Panel Discussion' },
  { initial: 'M', name: 'Data Science Lead', role: 'ML Engineer & Researcher', tag: 'Technical Session' },
];

const TOPICS = [
  { icon: '🤖', title: 'AI Integration for SMEs', desc: 'Practical frameworks for embedding AI into everyday business operations.' },
  { icon: '👥', title: 'AI-Powered Hiring & Ops', desc: 'How modern tools are transforming talent and operations — live demo included.' },
  { icon: '📊', title: 'Business Intelligence & Data', desc: 'Turn raw business data into real-time strategic advantage.' },
  { icon: '🔒', title: 'AI Ethics & Security', desc: 'Bias, data privacy, and regulatory compliance.' },
  { icon: '🚀', title: 'Scaling Tech in East Africa', desc: 'The real playbook for building in the age of AI.' },
  { icon: '🌍', title: "Africa's Digital Future", desc: 'Why Africa is the next frontier for AI adoption.' },
];

const PAST_EVENTS = [
  { date: 'November 2025', title: 'Digital Transformation Summit', desc: '150+ attendees. Building systems for East African businesses.', badge: '150 Attended' },
  { date: 'August 2025', title: 'Product Beta Launch', desc: 'Product demo day for early adopters and partners.', badge: '80 Attended' },
  { date: 'March 2025', title: 'Startup Tech Bootcamp', desc: '2-day intensive for founders building in the African tech space.', badge: '60 Attended' },
];

export default function EventsContent() {
  const [modalOpen, setModalOpen] = useState(false);
  const [quickEmail, setQuickEmail] = useState('');

  const openModal = () => setModalOpen(true);

  return (
    <div className="min-h-screen bg-[var(--neutral-bg)] text-[var(--navy-primary)]">
      <Header />
      <main className="pt-24 pb-16">
        {/* HERO */}
        <section className="relative py-20 md:py-28 text-white overflow-hidden" style={{ background: 'var(--cres-gradient-bg)' }}>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(47,166,179,0.15),transparent_70%)] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[280px] h-[280px] bg-[radial-gradient(circle,rgba(243,156,36,0.1),transparent_70%)] rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <span className="inline-block bg-[var(--orange-energy)]/20 border border-[var(--orange-energy)]/40 text-[var(--orange-energy)] px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase mb-6">
              📅 Upcoming Events
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 max-w-3xl">
              Where Tech Leaders <span style={{ color: 'var(--orange-energy)' }}>Shape Tomorrow</span>
            </h1>
            <p className="text-white/85 text-lg max-w-2xl mb-10">
              Join CRES Dynamics for immersive events on AI, software, and digital transformation for East African business.
            </p>
            <div className="flex flex-wrap gap-10">
              <div>
                <div className="text-3xl font-black" style={{ color: 'var(--orange-energy)' }}>1</div>
                <div className="text-sm text-white/60">Upcoming Event</div>
              </div>
              <div>
                <div className="text-3xl font-black" style={{ color: 'var(--orange-energy)' }}>8+</div>
                <div className="text-sm text-white/60">Expert Speakers</div>
              </div>
              <div>
                <div className="text-3xl font-black" style={{ color: 'var(--orange-energy)' }}>200</div>
                <div className="text-sm text-white/60">Seats Available</div>
              </div>
              <div>
                <div className="text-3xl font-black" style={{ color: 'var(--orange-energy)' }}>6hrs</div>
                <div className="text-sm text-white/60">Of Insight</div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED EVENT */}
        <section className="max-w-5xl mx-auto px-6 -mt-2 relative z-10">
          <p className="text-[11px] font-bold tracking-widest uppercase text-[var(--navy-primary)]/60 mb-5">⚡ Featured Upcoming Event</p>
          <div className="bg-white rounded-3xl border border-[#E5E7EB] shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-between bg-[var(--navy-dark)] text-white relative overflow-hidden">
              <div className="absolute right-0 bottom-0 text-[120px] font-black text-white/5 leading-none">AI</div>
              <div>
                <div className="inline-flex flex-col rounded-2xl bg-[var(--orange-energy)] text-[var(--navy-dark)] px-5 py-4 w-fit text-center">
                  <span className="text-4xl font-black leading-none">16</span>
                  <span className="text-xs font-bold uppercase tracking-wider mt-1">May 2026</span>
                </div>
                <div className="inline-block mt-6 bg-[var(--teal-accent)]/20 border border-[var(--teal-accent)]/40 text-[var(--teal-accent)] px-3 py-1.5 rounded-full text-xs font-semibold">
                  🎤 Conference + Workshop
                </div>
                <div className="mt-6 text-white/80 text-sm space-y-2">
                  <div>📍 Nairobi, Kenya</div>
                  <div>🕙 09:00 — 17:00 EAT</div>
                  <div>🎟️ In-Person + Live Stream</div>
                </div>
              </div>
            </div>
            <div className="p-8 md:p-10">
              <span className="inline-block bg-[#eff6ff] text-[var(--teal-accent)] px-3 py-1 rounded-full text-xs font-bold mb-4">AI & Business Innovation</span>
              <h2 className="text-2xl md:text-3xl font-black text-[var(--navy-primary)] mb-4">The Future of AI in Business</h2>
              <p className="text-[var(--navy-primary)]/70 text-sm md:text-base leading-relaxed mb-6">
                A full-day summit bringing together sharp minds in AI, business leadership, and digital transformation. Learn how to integrate AI into operations and stay ahead of disruption.
              </p>
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex gap-3">
                  <span className="text-[var(--navy-primary)]/50 w-10">📅</span>
                  <div><strong className="text-[var(--navy-primary)]/60 text-xs uppercase">Date</strong><br />Friday, 16 May 2026</div>
                </div>
                <div className="flex gap-3">
                  <span className="text-[var(--navy-primary)]/50 w-10">📍</span>
                  <div><strong className="text-[var(--navy-primary)]/60 text-xs uppercase">Venue</strong><br />Nairobi (venue TBC)</div>
                </div>
                <div className="flex gap-3">
                  <span className="text-[var(--navy-primary)]/50 w-10">🎟️</span>
                  <div><strong className="text-[var(--navy-primary)]/60 text-xs uppercase">Access</strong><br />In-Person (KES 2,500) | Virtual (Free)</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <button type="button" onClick={openModal} className="bg-[var(--teal-accent)] hover:bg-[var(--teal-accent-hover)] text-white font-bold px-6 py-3 rounded-lg">
                  Reserve My Seat →
                </button>
                <a href="#agenda" className="border-2 border-[#E5E7EB] text-[var(--navy-primary)] font-semibold px-5 py-2.5 rounded-lg hover:border-[var(--teal-accent)] hover:text-[var(--teal-accent)]">
                  View Agenda
                </a>
              </div>
              <div id="agenda" className="mt-8 bg-[var(--neutral-bg)] rounded-xl p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--navy-primary)]/60 mb-3">Day Agenda</h4>
                <div className="space-y-2">
                  {AGENDA.map((item) => (
                    <div key={item.time} className="flex gap-3 text-sm">
                      <span className="text-[var(--teal-accent)] font-bold w-14 shrink-0">{item.time}</span>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SPEAKERS */}
        <section className="max-w-5xl mx-auto px-6 mt-16 md:mt-20">
          <p className="text-[11px] font-bold tracking-widest uppercase text-[var(--navy-primary)]/60 mb-2">🎤 Confirmed Speakers</p>
          <h2 className="text-2xl md:text-3xl font-black text-[var(--navy-primary)] mb-10">Minds Shaping the Future</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPEAKERS.map((s) => (
              <div key={s.name} className="bg-white rounded-2xl border border-[#E5E7EB] p-6 text-center shadow-sm">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-black text-white bg-[var(--teal-deep)]">
                  {s.initial}
                </div>
                <h3 className="font-bold text-[var(--navy-primary)] mb-1">{s.name}</h3>
                <p className="text-sm text-[var(--navy-primary)]/60 mb-3">{s.role}</p>
                <span className="inline-block bg-[#eff6ff] text-[var(--teal-accent)] px-3 py-1 rounded-full text-xs font-semibold">{s.tag}</span>
              </div>
            ))}
          </div>
        </section>

        {/* TOPICS */}
        <section className="max-w-5xl mx-auto px-6 mt-16 md:mt-20">
          <p className="text-[11px] font-bold tracking-widest uppercase text-[var(--navy-primary)]/60 mb-2">🧠 What You&apos;ll Learn</p>
          <h2 className="text-2xl md:text-3xl font-black text-[var(--navy-primary)] mb-10">Key Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TOPICS.map((t) => (
              <div key={t.title} className="bg-white rounded-xl border border-[#E5E7EB] p-5 shadow-sm">
                <div className="text-2xl mb-3">{t.icon}</div>
                <h4 className="font-bold text-[var(--navy-primary)] mb-2">{t.title}</h4>
                <p className="text-sm text-[var(--navy-primary)]/70 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* REGISTER CTA */}
        <section id="register" className="max-w-5xl mx-auto px-6 mt-16 md:mt-20">
          <div className="rounded-3xl p-10 md:p-14 text-center text-white" style={{ background: 'var(--cres-gradient-bg)' }}>
            <h2 className="text-2xl md:text-4xl font-black mb-3">
              Don&apos;t Miss <span style={{ color: 'var(--orange-energy)' }}>16 May 2026</span>
            </h2>
            <p className="text-white/80 text-base mb-8">200 seats. One day. Conversations that will change how you build your business.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={quickEmail}
                onChange={(e) => setQuickEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[var(--teal-accent)]"
              />
              <button
                type="button"
                onClick={openModal}
                className="bg-[var(--orange-energy)] hover:bg-[var(--orange-energy-hover)] text-[var(--navy-dark)] font-bold px-6 py-3 rounded-lg whitespace-nowrap"
              >
                Register Free →
              </button>
            </div>
            <p className="text-sm mt-4" style={{ color: 'var(--orange-energy)' }}>⚡ Limited seats — in-person spots filling fast</p>
          </div>
        </section>

        {/* PAST EVENTS */}
        <section className="max-w-5xl mx-auto px-6 mt-16 md:mt-20">
          <p className="text-[11px] font-bold tracking-widest uppercase text-[var(--navy-primary)]/60 mb-2">📼 Past Events</p>
          <h2 className="text-2xl md:text-3xl font-black text-[var(--navy-primary)] mb-10">Where We&apos;ve Been</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PAST_EVENTS.map((e) => (
              <div key={e.title} className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-sm">
                <div className="h-32 flex items-center justify-center text-4xl bg-[var(--navy-dark)]">💻</div>
                <div className="p-5">
                  <p className="text-xs text-[var(--navy-primary)]/60 font-semibold mb-2">{e.date}</p>
                  <h4 className="font-bold text-[var(--navy-primary)] mb-2">{e.title}</h4>
                  <p className="text-sm text-[var(--navy-primary)]/70 mb-3">{e.desc}</p>
                  <span className="inline-block bg-[#f1f5f9] text-[var(--navy-primary)]/70 px-2.5 py-1 rounded-full text-xs">{e.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact strip */}
        <section className="max-w-3xl mx-auto px-6 mt-16">
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 text-center shadow-sm">
            <p className="text-[var(--navy-primary)]/80 text-sm md:text-base">
              Get event updates via WhatsApp or email. We&apos;ll notify you when new events are announced.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/254708805496?text=Hi%2C%20I'd%20like%20to%20be%20notified%20about%20CRES%20Dynamics%20events." target="_blank" rel="noopener noreferrer" className="text-[var(--teal-accent)] hover:text-[var(--orange-energy)] font-medium text-sm">
                WhatsApp
              </a>
              <a href="mailto:info@cresdynamics.com" className="text-[var(--teal-accent)] hover:text-[var(--orange-energy)] font-medium text-sm">info@cresdynamics.com</a>
              <a href="tel:+254708805496" className="text-[var(--teal-accent)] hover:text-[var(--orange-energy)] font-medium text-sm">+254 708 805 496</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <EventsRegistrationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        prefilledEmail={quickEmail}
      />
    </div>
  );
}
