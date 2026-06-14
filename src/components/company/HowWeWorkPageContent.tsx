'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  CompanyDarkSection,
  CompanyEyebrow,
  CompanyHero,
  CompanyPanelSection,
  CompanyPhotoSection,
  ScrollReveal,
  ScrollRevealStagger,
} from '@/components/company/CompanyPageUI';
import { COMPANY_PAGE_IMAGES } from '@/lib/company-page-images';

const TIMELINE = [
  { n: '01', title: 'Discovery session', desc: '20-minute call: business, goals, and what the project must achieve.', time: 'Day 1', owner: 'CRES', payment: false },
  { n: '02', title: 'Scope & agreement', desc: 'Written scope, package details, total investment. You confirm in writing.', time: 'Days 1–2', owner: 'Both', payment: false },
  { n: '03', title: 'First payment — 50% deposit', desc: 'Confirms project and reserves build slot. No work starts before this.', time: 'Day 3', owner: 'Client', payment: true },
  { n: '04', title: 'Content collection', desc: 'Content checklist sent. Five business days to supply. Delays extend timeline.', time: 'Days 3–7', owner: 'Client', payment: false },
  { n: '05', title: 'Design phase', desc: 'Homepage and key pages. Up to two revision rounds. Written approval before build.', time: 'Week 1–2', owner: 'CRES', payment: false },
  { n: '06', title: 'Full build phase', desc: 'Complete site build with milestone updates. No surprises.', time: 'Week 2–3', owner: 'CRES', payment: false },
  { n: '07', title: 'Review & approval', desc: 'Five business days to test. Issues raised in writing before go-live.', time: 'Week 3', owner: 'Both', payment: false },
  { n: '08', title: 'Final payment — 50% on delivery', desc: 'Site approved. Final payment triggers go-live within 24 hours.', time: 'Week 3–4', owner: 'Client', payment: true },
  { n: '09', title: 'Go-live & launch', desc: 'Domain, SSL, Google Business, Analytics, Search Console.', time: 'Week 4', owner: 'CRES', payment: false },
  { n: '10', title: 'Handover & training', desc: 'All credentials plus 30-minute training to manage your site.', time: 'Week 4', owner: 'CRES', payment: false },
  { n: '11', title: '30-day post-launch support', desc: 'We fix any bugs from our build at no extra cost.', time: '30 days', owner: 'CRES', payment: false },
];

const COMMITMENTS = [
  { label: 'CRES commitment', title: 'We build what we scope.', desc: 'Every agreed feature gets built. Alternatives are discussed before we build.' },
  { label: 'CRES commitment', title: 'Proactive updates.', desc: 'You never chase us for status. Milestone updates are sent proactively.' },
  { label: 'CRES commitment', title: 'We fix our mistakes.', desc: 'Within the 30-day warranty — no questions, no delay, no extra cost.' },
  { label: 'Client responsibility', title: 'Content in 5 days. Feedback in 5 days.', desc: 'Delays on your side extend the timeline.' },
  { label: 'Client responsibility', title: 'One decision-maker.', desc: 'Designate one person who can review, approve, and decide.' },
  { label: 'Both parties', title: 'Formal change process.', desc: 'Scope changes are assessed, quoted, and approved before work.' },
];

export default function HowWeWorkPageContent() {
  return (
    <div className="min-h-screen bg-[#060B18] text-white">
      <Header />

      <CompanyHero
        eyebrow="How we work · Delivery process"
        title={
          <>
            Structured delivery
            <span className="block text-[var(--teal-accent)] mt-1">from discovery to go-live.</span>
          </>
        }
        subtitle="Same documented process for every project — clear milestones, M-Pesa-ready payments, and owners named at every step."
        imageSrc={COMPANY_PAGE_IMAGES.howWeWork}
        imageAlt="How Cres Dynamics works with clients"
        primaryLabel="See the full process"
        primaryHref="#timeline"
        secondaryHref="#commitments"
        secondaryLabel="Our commitments"
      />

      <CompanyPhotoSection imageSrc={COMPANY_PAGE_IMAGES.team} imageAlt="Structured project delivery">
        <ScrollReveal className="max-w-3xl">
          <CompanyEyebrow>Built for Kenya&apos;s pace</CompanyEyebrow>
          <h2 className="text-2xl md:text-3xl font-black mb-4">
            We do not wing it. <span className="text-[var(--teal-accent)]">We engineer it.</span>
          </h2>
          <p className="text-white/75 leading-relaxed mb-6">
            Nairobi buyers move fast — your delivery should not lag. Every Cres project follows a documented process that
            protects timelines and budgets.
          </p>
          <div className="rounded-xl border border-[var(--teal-accent)]/30 bg-black/40 px-5 py-4 text-sm text-white/85">
            <strong className="text-[var(--teal-accent)]">What you get:</strong> You always know the status, the next
            step, and what you are responsible for. No surprises.
          </div>
        </ScrollReveal>
      </CompanyPhotoSection>

      <CompanyDarkSection id="timeline">
        <ScrollReveal className="mb-10">
          <CompanyEyebrow>Project timeline</CompanyEyebrow>
          <h2 className="text-2xl md:text-4xl font-black mb-2">
            Every step. <span className="text-[var(--teal-accent)]">Every owner.</span>
          </h2>
          <p className="text-white/50 text-sm">Typical project: 3–4 weeks from first payment to go-live.</p>
        </ScrollReveal>

        <div className="space-y-3">
          {TIMELINE.map((row, i) => (
            <ScrollReveal key={row.n} delay={i * 0.03}>
              <div
                className={`grid md:grid-cols-[72px_1fr_120px_100px] gap-0 overflow-hidden rounded-xl border ${
                  row.payment ? 'border-[var(--cres-orange-primary)]/40 bg-[var(--cres-orange-primary)]/10' : 'border-white/10 bg-white/[0.03]'
                }`}
              >
                <div className="flex items-center justify-center py-4 md:py-0 text-xl font-black text-[var(--teal-accent)]/70 bg-black/30">
                  {row.n}
                </div>
                <div className="p-5">
                  <p className={`font-semibold ${row.payment ? 'text-[var(--cres-orange-primary)]' : 'text-white'}`}>
                    {row.title}
                  </p>
                  <p className="text-xs mt-1 text-white/55 leading-relaxed">{row.desc}</p>
                </div>
                <div className="hidden md:flex flex-col items-center justify-center border-l border-white/10 py-3 text-center">
                  <span className="text-[10px] uppercase tracking-wider text-white/40">Timeline</span>
                  <span className="font-bold text-sm text-white/90">{row.time}</span>
                </div>
                <div className="hidden md:flex flex-col items-center justify-center border-l border-white/10 py-3 text-center">
                  <span className="text-[10px] uppercase tracking-wider text-white/40">Owner</span>
                  <span className="font-mono text-xs text-[var(--teal-accent)]">{row.owner}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </CompanyDarkSection>

      <CompanyPanelSection id="commitments">
        <ScrollReveal className="mb-10">
          <CompanyEyebrow>Our commitments</CompanyEyebrow>
          <h2 className="text-2xl md:text-3xl font-black">
            What we guarantee. <span className="text-[var(--teal-accent)]">What we expect.</span>
          </h2>
        </ScrollReveal>
        <ScrollRevealStagger className="grid md:grid-cols-2 gap-4" staggerDelay={0.05}>
          {COMMITMENTS.map((card) => (
            <div key={card.title} className="rounded-xl border border-white/10 bg-black/30 p-5">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--teal-accent)] mb-2">{card.label}</p>
              <h3 className="font-bold mb-2">{card.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </ScrollRevealStagger>
      </CompanyPanelSection>

      <CompanyPhotoSection imageSrc={COMPANY_PAGE_IMAGES.workspace} imageAlt="Payment and delivery">
        <ScrollReveal className="max-w-3xl">
          <CompanyEyebrow>Payment</CompanyEyebrow>
          <h2 className="text-2xl md:text-4xl font-black mb-6">
            <span className="text-[var(--teal-accent)]">50% before.</span> 50% on delivery.
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              { label: '1st payment — before we start', amount: '50%', note: 'Paid before Day 1. Non-refundable once work begins.' },
              { label: '2nd payment — on delivery', amount: '50%', note: 'Paid before go-live. Full ownership transfers on receipt.' },
            ].map((block) => (
              <div key={block.label} className="rounded-xl border border-white/10 bg-black/40 p-6">
                <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--teal-accent)] mb-2">{block.label}</p>
                <p className="text-4xl font-black">{block.amount}</p>
                <p className="text-sm text-white/55 mt-2">{block.note}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-white/70 border-l-4 border-[var(--cres-orange-primary)] pl-4">
            Accepted via <strong className="text-[var(--cres-orange-primary)]">M-Pesa</strong> (+254 708 805 496) or bank
            transfer. Site goes live within 24 hours of final payment confirmation.
          </p>
        </ScrollReveal>
      </CompanyPhotoSection>

      <section className="py-14 md:py-16 bg-[var(--cres-orange-primary)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-[#060B18] mb-2">Ready to get started?</h2>
            <p className="text-[#060B18]/80 text-sm md:text-base">
              20-minute discovery call. We map the project, send the scope, and get started within 24 hours.
            </p>
          </div>
          <a
            href="tel:+254708805496"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#060B18] text-[var(--cres-orange-primary)] font-bold text-sm px-8 py-4 uppercase tracking-wide hover:bg-[#0A1628] transition-colors"
          >
            Call +254 708 805 496
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
