'use client';

import Link from 'next/link';

const secLabel = 'text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase text-[var(--teal-accent)] flex items-center gap-3 mb-2';
const secLabelBar = 'inline-block h-px w-7 bg-[var(--teal-accent)]';

/** Delivery process: discovery → go-live (Nairobi / Kenya market positioning). */
export default function HowWeWorkPageContent() {
  return (
    <>
      <section
        className="relative min-h-[70vh] flex flex-col justify-end pb-16 md:pb-20 pt-24 px-6 md:px-12 overflow-hidden"
        style={{ background: 'var(--cres-gradient-bg)' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_60%_40%,rgba(243,156,36,0.08)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-4xl">
          <p className={secLabel}>
            <span className={secLabelBar} /> How We Work · Nairobi
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] mb-4">
            Win the Nairobi Market
            <br />
            <span style={{ color: 'var(--orange-energy)' }}>Before</span> Your Competitor Does.
          </h1>
          <p className="text-white/70 italic text-lg max-w-xl mb-8">
            Same structured process for every project — from Westlands to countywide. Clear milestones, Mpesa-ready
            payments, and owners named at every step.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#timeline"
              className="inline-flex items-center gap-2 bg-[var(--orange-energy)] hover:bg-[var(--orange-energy-hover)] text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide"
            >
              See the Full Process
            </a>
            <a
              href="#rules"
              className="inline-flex items-center gap-2 text-white/60 hover:text-[var(--teal-accent)] font-mono text-sm uppercase tracking-wide"
            >
              Our Commitments →
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[var(--neutral-bg)] py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-4xl">
          <p className={`${secLabel} text-[var(--teal-accent)]`}>
            <span className={secLabelBar} /> Built for Kenya&apos;s Pace
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[var(--navy-primary)] mb-4">
            We Don&apos;t Wing It.
            <br />
            <span style={{ color: 'var(--orange-energy)' }}>We Engineer It.</span>
          </h2>
          <p className="text-[var(--navy-primary)]/80 text-sm md:text-base max-w-xl mb-6">
            Nairobi buyers move fast — your delivery shouldn&apos;t lag. Every CRES project follows a documented process
            that protects timelines and budgets.
          </p>
          <div className="border-l-4 border-[var(--orange-energy)] bg-white/80 p-5 rounded-r-lg">
            <p className="text-[var(--navy-primary)]/90 text-sm italic">
              <strong className="font-normal not-italic">What you get:</strong> You always know the status, the next
              step, and what you&apos;re responsible for. No surprises.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 mt-6 text-xs text-[var(--navy-primary)]/70">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-[var(--navy-dark)]" /> CRES handles
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-[#EEF2FA]" /> Client handles
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-[#EEF8F2]" /> Both
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-[#FBF0DC]" /> Payment milestone
            </span>
          </div>
        </div>
      </section>

      <section id="timeline" className="bg-[var(--navy-dark)] py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-5xl">
          <p className={secLabel}>
            <span className={secLabelBar} /> Project Timeline
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
            Every Step.
            <br />
            <span style={{ color: 'var(--orange-energy)' }}>Every Owner.</span>
          </h2>
          <p className="text-white/50 text-sm mb-10">Typical project: 3–4 weeks from first payment to Go-Live.</p>

          <div className="space-y-0 border border-[#E0DCD4] rounded-lg overflow-hidden bg-[#E0DCD4]">
            {[
              {
                n: '1',
                title: 'Discovery Session',
                desc: '20-minute call: we understand your business, goals, and what the project must achieve.',
                time: 'Day 1',
                owner: 'CRES',
                ownerClass: 'cres',
              },
              {
                n: '2',
                title: 'Scope & Agreement',
                desc: 'Written scope, package details, total investment. You review and confirm in writing.',
                time: 'Days 1–2',
                owner: 'Both',
                ownerClass: 'both',
              },
              {
                n: '₂',
                title: '💰 First Payment — 50% Deposit',
                desc: 'You transfer 50%. Confirms project, reserves build slot. No work starts before this.',
                time: 'Day 3',
                owner: 'Client',
                ownerClass: 'client',
                payment: true,
              },
              {
                n: '4',
                title: 'Content Collection',
                desc: 'Content checklist sent. You have 5 business days to supply. Delays extend timeline.',
                time: 'Days 3–7',
                owner: 'Client',
                ownerClass: 'client',
              },
              {
                n: '5',
                title: 'Design Phase',
                desc: 'We design homepage and key pages. Up to 2 rounds of revisions. Approval in writing before build.',
                time: 'Week 1–2',
                owner: 'CRES',
                ownerClass: 'cres',
              },
              {
                n: '6',
                title: 'Full Build Phase',
                desc: 'Complete site build. Milestone updates. No surprises.',
                time: 'Week 2–3',
                owner: 'CRES',
                ownerClass: 'cres',
              },
              {
                n: '7',
                title: 'Review & Approval',
                desc: 'You have 5 business days to test. Raise issues in writing. We resolve before going further.',
                time: 'Week 3',
                owner: 'Both',
                ownerClass: 'both',
              },
              {
                n: '₈',
                title: '💰 Final Payment — 50% on Delivery',
                desc: 'Site approved. Final payment triggers go-live. Ownership transfers. Live within 24h.',
                time: 'Week 3–4',
                owner: 'Client',
                ownerClass: 'client',
                payment: true,
              },
              {
                n: '9',
                title: 'Go-Live & Launch',
                desc: "Domain, SSL, Google Business, Analytics, Search Console. You're live.",
                time: 'Week 4',
                owner: 'CRES',
                ownerClass: 'cres',
              },
              {
                n: '10',
                title: 'Handover & Training',
                desc: 'All credentials. 30-minute training so you manage your site confidently.',
                time: 'Week 4',
                owner: 'CRES',
                ownerClass: 'cres',
              },
              {
                n: '11',
                title: '30-Day Post-Launch Support',
                desc: 'We fix any bugs from our build at no extra cost. Direct line to the team.',
                time: '30 Days',
                owner: 'CRES',
                ownerClass: 'cres',
              },
            ].map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 md:grid-cols-[64px_1fr_120px_100px] gap-0 ${row.payment ? 'bg-[#FBF0DC]' : ''}`}
              >
                <div className="bg-[var(--navy-dark)] flex items-center justify-center py-4 text-2xl font-black text-[var(--orange-energy)]/50">
                  {row.n}
                </div>
                <div className={`p-5 ${row.payment ? 'bg-[#FBF0DC]' : 'bg-white'}`}>
                  <div className={`font-semibold ${row.payment ? 'text-[#6A4808]' : 'text-[var(--navy-primary)]'}`}>
                    {row.title}
                  </div>
                  <div className={`text-xs mt-1 ${row.payment ? 'text-[#6A4808]/80' : 'text-[var(--navy-primary)]/60'}`}>
                    {row.desc}
                  </div>
                </div>
                <div className="hidden md:flex flex-col items-center justify-center bg-[#FBF0DC]/80 py-3 text-center">
                  <span className="text-[10px] text-[#6A4808]/80 uppercase tracking-wider">Timeline</span>
                  <span className="font-black text-[#6A4808] text-sm">{row.time}</span>
                </div>
                <div
                  className={`hidden md:flex flex-col items-center justify-center py-3 text-center ${
                    row.ownerClass === 'cres'
                      ? 'bg-[var(--navy-dark)]'
                      : row.ownerClass === 'client'
                        ? 'bg-[#EEF2FA]'
                        : 'bg-[#EEF8F2]'
                  }`}
                >
                  <span className="text-[10px] uppercase tracking-wider opacity-70">Owner</span>
                  <span className="font-mono text-xs font-medium">{row.owner}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="rules" className="bg-[var(--neutral-bg)] py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-5xl">
          <p className={`${secLabel} text-[var(--teal-accent)]`}>
            <span className={secLabelBar} /> Our Commitments
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[var(--navy-primary)] mb-4">
            What We Guarantee.
            <br />
            <span style={{ color: 'var(--orange-energy)' }}>What We Expect.</span>
          </h2>
          <p className="text-[var(--navy-primary)]/80 text-sm mb-10">Every CRES engagement runs on these principles.</p>
          <div className="grid md:grid-cols-2 gap-2">
            {[
              {
                label: 'CRES Commitment',
                title: 'We build what we scope. Nothing less.',
                desc: "Every feature agreed gets built. If something can't be delivered as described, we tell you before we build an alternative.",
              },
              {
                label: 'CRES Commitment',
                title: 'We keep you updated at every stage.',
                desc: 'You will never chase us for a project update. We send milestone updates proactively.',
              },
              {
                label: 'CRES Commitment',
                title: 'We fix our mistakes — immediately.',
                desc: "If something doesn't work as built, we fix it. No questions, no delay, no extra cost within the 30-day warranty.",
              },
              {
                label: 'Client Responsibility',
                title: 'Content in 5 days. Feedback in 5 days.',
                desc: 'We cannot build without your content or progress without your feedback. Delays on your side extend the timeline.',
              },
              {
                label: 'Client Responsibility',
                title: 'One decision-maker for the project.',
                desc: 'Designate one person who can review, approve, and decide. Multiple decision-makers slow projects.',
              },
              {
                label: 'Both Parties',
                title: 'Changes go through a formal process.',
                desc: 'Scope changes are assessed, quoted, and approved before work. No surprise invoices; no surprise requirements.',
              },
            ].map((card, i) => (
              <div key={i} className="bg-white p-6 rounded border border-[#E0DCD4]">
                <p className="text-[10px] font-mono tracking-widest text-[var(--teal-accent)] uppercase mb-1">{card.label}</p>
                <h3 className="font-semibold text-[var(--navy-primary)] mb-2">{card.title}</h3>
                <p className="text-xs text-[var(--navy-primary)]/70 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--navy-dark)] py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-4xl">
          <p className={secLabel}>
            <span className={secLabelBar} /> Payment — Crystal Clear
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
            <span style={{ color: 'var(--orange-energy)' }}>50% Before.</span>
            <br />
            50% on Delivery.
          </h2>
          <p className="text-white/50 text-sm mb-8">Simple. Fair. Protects both sides.</p>
          <div className="grid md:grid-cols-2 gap-2 mb-6">
            <div className="bg-[var(--navy-primary)]/80 p-6 rounded-lg">
              <p className="text-[10px] font-mono text-[var(--teal-accent)] uppercase tracking-wider mb-2">
                1st Payment — Before We Start
              </p>
              <p className="text-4xl font-black text-white">50%</p>
              <p className="text-white/50 text-sm mt-2">Paid before Day 1. Non-refundable once work begins.</p>
            </div>
            <div className="bg-[var(--navy-primary)]/80 p-6 rounded-lg">
              <p className="text-[10px] font-mono text-[var(--teal-accent)] uppercase tracking-wider mb-2">
                2nd Payment — On Delivery
              </p>
              <p className="text-4xl font-black text-white">50%</p>
              <p className="text-white/50 text-sm mt-2">Paid before Go-Live. Full ownership transfers on receipt.</p>
            </div>
          </div>
          <div className="border-l-4 border-[var(--orange-energy)] bg-[var(--navy-primary)]/40 p-4 rounded-r">
            <p className="text-white/80 text-sm italic">
              Accepted via <strong className="text-[var(--orange-energy)] not-italic">Mpesa</strong> (0708 805 496) or
              bank transfer. Site goes live within 24 hours of final payment confirmation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--orange-energy)] py-14 px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-4xl font-black text-[var(--navy-dark)] mb-1">
              Ready to Lead Your Category in Nairobi?
            </h2>
            <p className="text-[var(--navy-dark)]/80 italic text-sm md:text-base">
              20-minute discovery call. We map the project, send the scope, and get started within 24 hours.
            </p>
          </div>
          <div className="flex flex-col sm:items-end gap-3 shrink-0">
            <a
              href="tel:+254708805496"
              className="inline-flex items-center justify-center bg-[var(--navy-dark)] text-[var(--orange-energy)] font-bold text-sm px-8 py-4 rounded-lg uppercase tracking-wide hover:bg-[var(--navy-primary)]"
            >
              Call +254 708 805 496
            </a>
            <Link
              href="/marketing"
              className="text-[var(--navy-dark)]/90 text-xs font-medium underline underline-offset-2 hover:text-[var(--navy-dark)] text-center sm:text-right"
            >
              Need Nairobi traffic? Meta &amp; Google packages →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
