'use client';

import { useState } from 'react';
import Link from 'next/link';
import { whatsappUrl, WHATSAPP_PREFILL } from '@/lib/contact';

const secLabel = 'text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase text-[var(--teal-accent)] flex items-center gap-3 mb-2';
const secLabelBar = "inline-block h-px w-7 bg-[var(--teal-accent)]";

export default function MarketingPageContent() {
  const [tab, setTab] = useState<'how' | 'marketing'>('how');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Tab switcher — fixed bottom right */}
      <div className="fixed bottom-6 right-6 z-[200] flex gap-2">
        <button
          type="button"
          onClick={() => setTab('how')}
          className={`px-4 py-2 rounded text-[10px] font-mono tracking-wider uppercase border transition-colors ${
            tab === 'how'
              ? 'bg-[var(--orange-energy)] text-white border-[var(--orange-energy)]'
              : 'bg-[var(--navy-dark)] text-white/60 border-white/20 hover:bg-[var(--orange-energy)] hover:text-white hover:border-[var(--orange-energy)]'
          }`}
        >
          How We Work
        </button>
        <button
          type="button"
          onClick={() => setTab('marketing')}
          className={`px-4 py-2 rounded text-[10px] font-mono tracking-wider uppercase border transition-colors ${
            tab === 'marketing'
              ? 'bg-[var(--orange-energy)] text-white border-[var(--orange-energy)]'
              : 'bg-[var(--navy-dark)] text-white/60 border-white/20 hover:bg-[var(--orange-energy)] hover:text-white hover:border-[var(--orange-energy)]'
          }`}
        >
          Marketing &amp; Ads
        </button>
      </div>

      {/* ═══ PAGE 1 — HOW WE WORK ═══ */}
      <div className={tab !== 'how' ? 'hidden' : 'block'}>
        <section
          className="relative min-h-[70vh] flex flex-col justify-end pb-16 md:pb-20 pt-24 px-6 md:px-12 overflow-hidden"
          style={{ background: 'var(--cres-gradient-bg)' }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_60%_40%,rgba(243,156,36,0.08)_0%,transparent_70%)]" />
          <div className="relative z-10 max-w-4xl">
            <p className={secLabel}><span className={secLabelBar} /> How We Work</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] mb-4">
              From First Call
              <br />to <span style={{ color: 'var(--orange-energy)' }}>Go-Live.</span>
            </h1>
            <p className="text-white/70 italic text-lg max-w-xl mb-8">
              Every project runs through the same structured process. You know exactly what happens, when, and who is responsible.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#timeline" className="inline-flex items-center gap-2 bg-[var(--orange-energy)] hover:bg-[var(--orange-energy-hover)] text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide">
                See the Full Process
              </a>
              <a href="#rules" className="inline-flex items-center gap-2 text-white/60 hover:text-[var(--teal-accent)] font-mono text-sm uppercase tracking-wide">
                Our Commitments →
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[var(--neutral-bg)] py-16 md:py-20 px-6 md:px-12">
          <div className="max-w-4xl">
            <p className={`${secLabel} text-[var(--teal-accent)]`}><span className={secLabelBar} /> The Philosophy</p>
            <h2 className="text-3xl md:text-4xl font-black text-[var(--navy-primary)] mb-4">
              We Don&apos;t Wing It.<br /><span style={{ color: 'var(--orange-energy)' }}>We Engineer It.</span>
            </h2>
            <p className="text-[var(--navy-primary)]/80 text-sm md:text-base max-w-xl mb-6">
              Every CRES project follows a documented process. Structure protects you and us.
            </p>
            <div className="border-l-4 border-[var(--orange-energy)] bg-white/80 p-5 rounded-r-lg">
              <p className="text-[var(--navy-primary)]/90 text-sm italic">
                <strong className="font-normal not-italic">What you get:</strong> You always know the status, the next step, and what you&apos;re responsible for. No surprises.
              </p>
            </div>
            <div className="flex flex-wrap gap-6 mt-6 text-xs text-[var(--navy-primary)]/70">
              <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-[var(--navy-dark)]" /> CRES handles</span>
              <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-[#EEF2FA]" /> Client handles</span>
              <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-[#EEF8F2]" /> Both</span>
              <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-[#FBF0DC]" /> Payment milestone</span>
            </div>
          </div>
        </section>

        <section id="timeline" className="bg-[var(--navy-dark)] py-16 md:py-20 px-6 md:px-12">
          <div className="max-w-5xl">
            <p className={secLabel}><span className={secLabelBar} /> Project Timeline</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
              Every Step.<br /><span style={{ color: 'var(--orange-energy)' }}>Every Owner.</span>
            </h2>
            <p className="text-white/50 text-sm mb-10">Typical project: 3–4 weeks from first payment to Go-Live.</p>

            <div className="space-y-0 border border-[#E0DCD4] rounded-lg overflow-hidden bg-[#E0DCD4]">
              {[
                { n: '1', title: 'Discovery Session', desc: '20-minute call: we understand your business, goals, and what the project must achieve.', time: 'Day 1', owner: 'CRES', ownerClass: 'cres' },
                { n: '2', title: 'Scope & Agreement', desc: 'Written scope, package details, total investment. You review and confirm in writing.', time: 'Days 1–2', owner: 'Both', ownerClass: 'both' },
                { n: '₂', title: '💰 First Payment — 50% Deposit', desc: 'You transfer 50%. Confirms project, reserves build slot. No work starts before this.', time: 'Day 3', owner: 'Client', ownerClass: 'client', payment: true },
                { n: '4', title: 'Content Collection', desc: 'Content checklist sent. You have 5 business days to supply. Delays extend timeline.', time: 'Days 3–7', owner: 'Client', ownerClass: 'client' },
                { n: '5', title: 'Design Phase', desc: 'We design homepage and key pages. Up to 2 rounds of revisions. Approval in writing before build.', time: 'Week 1–2', owner: 'CRES', ownerClass: 'cres' },
                { n: '6', title: 'Full Build Phase', desc: 'Complete site build. Milestone updates. No surprises.', time: 'Week 2–3', owner: 'CRES', ownerClass: 'cres' },
                { n: '7', title: 'Review & Approval', desc: 'You have 5 business days to test. Raise issues in writing. We resolve before going further.', time: 'Week 3', owner: 'Both', ownerClass: 'both' },
                { n: '₈', title: '💰 Final Payment — 50% on Delivery', desc: 'Site approved. Final payment triggers go-live. Ownership transfers. Live within 24h.', time: 'Week 3–4', owner: 'Client', ownerClass: 'client', payment: true },
                { n: '9', title: 'Go-Live & Launch', desc: 'Domain, SSL, Google Business, Analytics, Search Console. You\'re live.', time: 'Week 4', owner: 'CRES', ownerClass: 'cres' },
                { n: '10', title: 'Handover & Training', desc: 'All credentials. 30-minute training so you manage your site confidently.', time: 'Week 4', owner: 'CRES', ownerClass: 'cres' },
                { n: '11', title: '30-Day Post-Launch Support', desc: 'We fix any bugs from our build at no extra cost. Direct line to the team.', time: '30 Days', owner: 'CRES', ownerClass: 'cres' },
              ].map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-1 md:grid-cols-[64px_1fr_120px_100px] gap-0 ${row.payment ? 'bg-[#FBF0DC]' : ''}`}
                >
                  <div className="bg-[var(--navy-dark)] flex items-center justify-center py-4 text-2xl font-black text-[var(--orange-energy)]/50">
                    {row.n}
                  </div>
                  <div className={`p-5 ${row.payment ? 'bg-[#FBF0DC]' : 'bg-white'}`}>
                    <div className={`font-semibold ${row.payment ? 'text-[#6A4808]' : 'text-[var(--navy-primary)]'}`}>{row.title}</div>
                    <div className={`text-xs mt-1 ${row.payment ? 'text-[#6A4808]/80' : 'text-[var(--navy-primary)]/60'}`}>{row.desc}</div>
                  </div>
                  <div className="hidden md:flex flex-col items-center justify-center bg-[#FBF0DC]/80 py-3 text-center">
                    <span className="text-[10px] text-[#6A4808]/80 uppercase tracking-wider">Timeline</span>
                    <span className="font-black text-[#6A4808] text-sm">{row.time}</span>
                  </div>
                  <div className={`hidden md:flex flex-col items-center justify-center py-3 text-center ${
                    row.ownerClass === 'cres' ? 'bg-[var(--navy-dark)]' :
                    row.ownerClass === 'client' ? 'bg-[#EEF2FA]' : 'bg-[#EEF8F2]'
                  }`}>
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
            <p className={`${secLabel} text-[var(--teal-accent)]`}><span className={secLabelBar} /> Our Commitments</p>
            <h2 className="text-3xl md:text-4xl font-black text-[var(--navy-primary)] mb-4">
              What We Guarantee.<br /><span style={{ color: 'var(--orange-energy)' }}>What We Expect.</span>
            </h2>
            <p className="text-[var(--navy-primary)]/80 text-sm mb-10">Every CRES engagement runs on these principles.</p>
            <div className="grid md:grid-cols-2 gap-2">
              {[
                { label: 'CRES Commitment', title: 'We build what we scope. Nothing less.', desc: 'Every feature agreed gets built. If something can\'t be delivered as described, we tell you before we build an alternative.' },
                { label: 'CRES Commitment', title: 'We keep you updated at every stage.', desc: 'You will never chase us for a project update. We send milestone updates proactively.' },
                { label: 'CRES Commitment', title: 'We fix our mistakes — immediately.', desc: 'If something doesn\'t work as built, we fix it. No questions, no delay, no extra cost within the 30-day warranty.' },
                { label: 'Client Responsibility', title: 'Content in 5 days. Feedback in 5 days.', desc: 'We cannot build without your content or progress without your feedback. Delays on your side extend the timeline.' },
                { label: 'Client Responsibility', title: 'One decision-maker for the project.', desc: 'Designate one person who can review, approve, and decide. Multiple decision-makers slow projects.' },
                { label: 'Both Parties', title: 'Changes go through a formal process.', desc: 'Scope changes are assessed, quoted, and approved before work. No surprise invoices; no surprise requirements.' },
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
            <p className={secLabel}><span className={secLabelBar} /> Payment — Crystal Clear</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
              <span style={{ color: 'var(--orange-energy)' }}>50% Before.</span><br />50% on Delivery.
            </h2>
            <p className="text-white/50 text-sm mb-8">Simple. Fair. Protects both sides.</p>
            <div className="grid md:grid-cols-2 gap-2 mb-6">
              <div className="bg-[var(--navy-primary)]/80 p-6 rounded-lg">
                <p className="text-[10px] font-mono text-[var(--teal-accent)] uppercase tracking-wider mb-2">1st Payment — Before We Start</p>
                <p className="text-4xl font-black text-white">50%</p>
                <p className="text-white/50 text-sm mt-2">Paid before Day 1. Non-refundable once work begins.</p>
              </div>
              <div className="bg-[var(--navy-primary)]/80 p-6 rounded-lg">
                <p className="text-[10px] font-mono text-[var(--teal-accent)] uppercase tracking-wider mb-2">2nd Payment — On Delivery</p>
                <p className="text-4xl font-black text-white">50%</p>
                <p className="text-white/50 text-sm mt-2">Paid before Go-Live. Full ownership transfers on receipt.</p>
              </div>
            </div>
            <div className="border-l-4 border-[var(--orange-energy)] bg-[var(--navy-primary)]/40 p-4 rounded-r">
              <p className="text-white/80 text-sm italic">Accepted via <strong className="text-[var(--orange-energy)] not-italic">Mpesa</strong> (0708 805 496) or bank transfer. Site goes live within 24 hours of final payment confirmation.</p>
            </div>
          </div>
        </section>

        <section className="bg-[var(--orange-energy)] py-14 px-6 md:px-12">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-4xl font-black text-[var(--navy-dark)] mb-1">Ready to Start Your Project?</h2>
              <p className="text-[var(--navy-dark)]/80 italic text-sm md:text-base">20-minute discovery call. We map the project, send the scope, and get started within 24 hours.</p>
            </div>
            <a href="tel:+254708805496" className="shrink-0 inline-flex items-center justify-center bg-[var(--navy-dark)] text-[var(--orange-energy)] font-bold text-sm px-8 py-4 rounded-lg uppercase tracking-wide hover:bg-[var(--navy-primary)]">
              Call +254 708 805 496
            </a>
          </div>
        </section>
      </div>

      {/* ═══ PAGE 2 — MARKETING & ADS ═══ */}
      <div className={tab !== 'marketing' ? 'hidden' : 'block'}>
        <section
          className="relative min-h-[70vh] flex flex-col justify-end pb-16 md:pb-20 pt-24 px-6 md:px-12 overflow-hidden"
          style={{ background: 'var(--cres-gradient-bg)' }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_60%_40%,rgba(26,58,138,0.12)_0%,transparent_70%)]" />
          <div className="relative z-10 max-w-4xl">
            <p className={secLabel}><span className={secLabelBar} /> Marketing &amp; Ads</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] mb-4">
              Stop Waiting
              <br />to Be <span style={{ color: 'var(--orange-energy)' }}>Found.</span>
              <br />Go Find Them.
            </h1>
            <p className="text-white/70 italic text-lg max-w-xl mb-8">
              Meta and Google Ads that bring real buyers — not just likes or traffic. Paying customers.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#mkt-packages" className="inline-flex items-center gap-2 bg-[var(--orange-energy)] hover:bg-[var(--orange-energy-hover)] text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide">
                See Marketing Packages
              </a>
              <a href="#mkt-services" className="inline-flex items-center gap-2 text-white/60 hover:text-[var(--teal-accent)] font-mono text-sm uppercase tracking-wide">
                What We Run →
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[var(--neutral-bg)] py-16 md:py-20 px-6 md:px-12">
          <div className="max-w-5xl">
            <p className={`${secLabel} text-[var(--teal-accent)]`}><span className={secLabelBar} /> The Problem</p>
            <h2 className="text-3xl md:text-4xl font-black text-[var(--navy-primary)] mb-4">
              A Website Without Ads Is a Shop With <span className="text-red-600">No Signboard.</span>
            </h2>
            <p className="text-[var(--navy-primary)]/80 text-sm mb-10 max-w-xl">
              You have a product and a website. If nobody is sent to it — it sits there. Ads put your business in front of people who are already looking.
            </p>
            <div className="grid md:grid-cols-3 gap-2">
              {[
                { icon: '📉', title: 'Organic reach is almost dead', desc: 'In 2026, organic posts reach less than 5% of followers. Paid placement is the only way to reach more people consistently.' },
                { icon: '💸', title: 'Boosting posts is not advertising', desc: 'Real Meta Ads target by location, interest, behaviour, and purchase intent. The difference in results is significant.' },
                { icon: '🌍', title: 'Your best customers might not be local', desc: 'The Kenyan diaspora spends millions on goods from home. Without targeted international ads, you\'re invisible to them.' },
              ].map((c, i) => (
                <div key={i} className="bg-white p-6 rounded border border-[#E0DCD4]">
                  <span className="text-2xl block mb-2">{c.icon}</span>
                  <h3 className="font-semibold text-[var(--navy-primary)] mb-2">{c.title}</h3>
                  <p className="text-xs text-[var(--navy-primary)]/70">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="mkt-services" className="bg-[var(--navy-dark)] py-16 md:py-20 px-6 md:px-12">
          <div className="max-w-5xl">
            <p className={secLabel}><span className={secLabelBar} /> What We Run</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
              Every Platform.<br /><span style={{ color: 'var(--orange-energy)' }}>Every Audience.</span>
            </h2>
            <p className="text-white/50 text-sm mb-10">We run campaigns where your customers are — and connect every ad to measurable outcomes.</p>
            <div className="grid md:grid-cols-3 gap-2">
              {[
                { num: '01', icon: '📘', title: 'Meta Ads (Facebook & Instagram)', desc: 'Targeting by location, interest, behaviour, lookalike audiences. The most powerful targeting platform in Kenya.' },
                { num: '02', icon: '🎯', title: 'Google Search Ads', desc: 'Appear at the top when someone searches for what you sell. High-intent buyers. We capture them before competitors.', featured: true },
                { num: '03', icon: '🔄', title: 'Retargeting Campaigns', desc: '97% don\'t buy on first visit. Retargeting brings them back. Pixel + sequences that recover lost sales.' },
                { num: '04', icon: '🌍', title: 'Diaspora Targeting', desc: 'UK, US, UAE, Canada. For furniture, fashion, food, gifts — an untapped market that spends.' },
                { num: '05', icon: '📌', title: 'Pinterest Campaigns', desc: 'Where people plan décor, fashion, weddings. For interior, fashion, lifestyle — a hidden goldmine.' },
                { num: '06', icon: '📊', title: 'Performance Reporting', desc: 'Monthly report: spend, reach, clicks, conversions, cost per sale. Real business outcomes only.' },
              ].map((s, i) => (
                <div
                  key={i}
                  className={`p-6 rounded border ${s.featured ? 'bg-[var(--orange-energy)] border-[var(--orange-energy)]' : 'bg-[var(--navy-primary)]/60 border-white/10 hover:bg-[var(--teal-deep)]/40'}`}
                >
                  <p className={`text-[10px] font-mono tracking-widest mb-2 ${s.featured ? 'text-[var(--navy-dark)]/70' : 'text-[var(--teal-accent)]'}`}>{s.num}</p>
                  <span className="text-2xl block mb-2">{s.icon}</span>
                  <h3 className={`font-bold text-lg mb-2 ${s.featured ? 'text-[var(--navy-dark)]' : 'text-white'}`}>{s.title}</h3>
                  <p className={`text-sm ${s.featured ? 'text-[var(--navy-dark)]/80' : 'text-white/60'}`}>{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 rounded border border-[var(--teal-accent)]/20 bg-[var(--teal-deep)]/20 flex flex-col md:flex-row md:items-start gap-4">
              <span className="text-4xl">📧</span>
              <div className="flex-1">
                <p className="text-[10px] font-mono text-[var(--teal-accent)] uppercase tracking-wider mb-1">Service 07 — Email Marketing &amp; Automation</p>
                <h3 className="text-xl md:text-2xl font-black text-white mb-2">Your List. Your Most Valuable Asset.</h3>
                <p className="text-white/60 text-sm">We build the list, write sequences, and set automations that convert subscribers into customers.</p>
              </div>
              <a href="#email-packages" className="shrink-0 inline-flex items-center justify-center bg-[var(--orange-energy)] text-white font-bold text-xs px-5 py-2.5 rounded uppercase tracking-wide">
                See Pricing
              </a>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {['Meta Ads Manager', 'Google Ads', 'Instagram', 'Pinterest Ads', 'Meta Pixel', 'GA4', 'GTM', 'Looker Studio', 'Mailchimp', 'Klaviyo', 'Brevo', 'ConvertKit'].map((badge) => (
                <span key={badge} className="px-3 py-1.5 rounded bg-[var(--navy-primary)]/60 border border-white/10 text-[10px] font-mono text-white/60 tracking-wider">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--neutral-bg)] py-16 md:py-20 px-6 md:px-12">
          <div className="max-w-5xl">
            <p className={`${secLabel} text-[var(--teal-accent)]`}><span className={secLabelBar} /> How It Works</p>
            <h2 className="text-3xl md:text-4xl font-black text-[var(--navy-primary)] mb-4">
              What Happens When <span style={{ color: 'var(--orange-energy)' }}>You Engage CRES</span> for Marketing.
            </h2>
            <p className="text-[var(--navy-primary)]/80 text-sm mb-10">We build the marketing infrastructure first — then run the ads on top.</p>
            <div className="grid md:grid-cols-2 gap-2">
              {[
                { phase: 'Phase 1 — Foundation', title: 'We build the infrastructure first', items: ['Meta Business Manager + Pixel', 'GA4 + Google Ads linked', 'Conversion tracking', 'Audience lists from existing customers'] },
                { phase: 'Phase 2 — Campaign Build', title: 'We build your first campaigns', items: ['Strategy + audience research', 'Ad creative (copy, images, video)', 'Campaign structure + targeting', 'Retargeting sequence'] },
                { phase: 'Phase 3 — Launch & Optimise', title: 'We launch, monitor, improve', items: ['Campaigns go live', 'Daily monitoring first 14 days', 'A/B testing', 'Monthly performance report'] },
                { phase: 'Phase 4 — Scale', title: 'What success looks like', items: ['Consistent inbound leads', 'CPA decreasing over time', 'Retargeting recovering 15–30%', 'Clear data on what converts'] },
              ].map((block, i) => (
                <div key={i} className="bg-white p-6 rounded border border-[#E0DCD4]">
                  <p className="text-[10px] font-mono text-[var(--teal-accent)] uppercase tracking-wider mb-1">{block.phase}</p>
                  <h3 className="font-semibold text-[var(--navy-primary)] mb-3">{block.title}</h3>
                  <ul className="space-y-1.5">
                    {block.items.map((item, j) => (
                      <li key={j} className="text-xs text-[var(--navy-primary)]/75 flex gap-2">
                        <span className="text-green-600 font-bold">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--navy-dark)] py-16 md:py-20 px-6 md:px-12">
          <div className="max-w-5xl">
            <p className={secLabel}><span className={secLabelBar} /> What Good Ads Deliver</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
              Ads Work When <span style={{ color: 'var(--orange-energy)' }}>They&apos;re Built Right.</span>
            </h2>
            <p className="text-white/50 text-sm mb-8">Realistic benchmarks for well-built campaigns in the Kenyan market.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
              {[
                { val: '3–7x', label: 'ROAS for e-commerce' },
                { val: '15–30%', label: 'Visitors recovered via retargeting' },
                { val: 'KES 80–300', label: 'Cost per lead (Nairobi)' },
                { val: '2–4 weeks', label: 'To first optimised campaign' },
              ].map((r, i) => (
                <div key={i} className="bg-[var(--navy-primary)]/60 p-5 rounded text-center">
                  <div className="text-3xl font-black text-[var(--orange-energy)]">{r.val}</div>
                  <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider mt-1">{r.label}</div>
                </div>
              ))}
            </div>
            <div className="border-l-4 border-[var(--orange-energy)] bg-[var(--navy-primary)]/30 p-4 rounded-r">
              <p className="text-white/60 text-sm italic">Results depend on product, price, audience, and budget. We give honest projections — not generic promises.</p>
            </div>
          </div>
        </section>

        <section id="email-packages" className="bg-[var(--neutral-bg)] py-16 md:py-20 px-6 md:px-12">
          <div className="max-w-5xl">
            <p className={`${secLabel} text-[var(--teal-accent)]`}><span className={secLabelBar} /> Email Marketing Pricing</p>
            <h2 className="text-3xl md:text-4xl font-black text-[var(--navy-primary)] mb-2">
              Email Add-On <span style={{ color: 'var(--orange-energy)' }}>Packages.</span>
            </h2>
            <p className="text-[var(--navy-primary)]/80 text-sm mb-8">Add email on top of any ads package — or run standalone. We write every email.</p>
            <div className="grid md:grid-cols-3 gap-2 mb-6">
              {[
                { tier: 'Starter', name: 'Email Foundation', price: '15K', note: 'Setup — then KES 8K/month', features: ['Platform setup (Mailchimp/Brevo)', 'Welcome sequence (4 emails)', 'List capture form', '1 campaign email/month'], cta: 'Get Started' },
                { tier: 'Most Popular', name: 'Email Growth', price: '25K', note: 'Setup — then KES 15K/month', features: ['Everything in Foundation', 'Abandoned cart (3 emails)', 'Post-purchase (5 emails)', '2 campaigns/month', 'List segmentation', 'Full dashboard'], cta: 'Book Discovery', on: true },
                { tier: 'Full System', name: 'Email Machine', price: '40K', note: 'Setup — then KES 22K/month', features: ['Everything in Growth', 'Re-engagement campaigns', 'Advanced automation', '4 campaigns/month', 'A/B testing', 'Ads & CRM integration'], cta: 'Let\'s Talk' },
              ].map((pkg, i) => (
                <div key={i} className={`p-6 rounded border ${pkg.on ? 'bg-[var(--navy-dark)] border-[var(--orange-energy)] text-white' : 'bg-white border-[#E0DCD4] text-[var(--navy-primary)]'}`}>
                  <p className="text-[10px] font-mono uppercase tracking-wider mb-1" style={{ color: pkg.on ? 'var(--orange-energy)' : 'var(--teal-accent)' }}>{pkg.tier}</p>
                  <h3 className="text-xl font-black mb-1">{pkg.name}</h3>
                  <p className="text-3xl font-black mb-1" style={{ color: 'var(--orange-energy)' }}>{pkg.price}</p>
                  <p className={`text-xs mb-4 ${pkg.on ? 'text-white/50' : 'text-[var(--navy-primary)]/60'}`}>{pkg.note}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="text-xs flex gap-2">
                        <span className="text-green-600 font-bold">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <a href={whatsappUrl(WHATSAPP_PREFILL.emailPackage(pkg.name))} target="_blank" rel="noopener noreferrer" className={`block text-center py-2.5 rounded text-xs font-bold uppercase ${pkg.on ? 'bg-[var(--orange-energy)] text-[var(--navy-dark)]' : 'border border-[#E0DCD4] hover:bg-[var(--navy-dark)] hover:text-white hover:border-[var(--navy-dark)]'}`}>
                    {pkg.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="mkt-packages" className="bg-[var(--neutral-bg)] py-16 md:py-20 px-6 md:px-12">
          <div className="max-w-5xl">
            <p className={`${secLabel} text-[var(--teal-accent)]`}><span className={secLabelBar} /> Marketing Packages</p>
            <h2 className="text-3xl md:text-4xl font-black text-[var(--navy-primary)] mb-2">
              Choose Your <span style={{ color: 'var(--orange-energy)' }}>Growth Level.</span>
            </h2>
            <p className="text-[var(--navy-primary)]/80 text-sm mb-10">Standalone marketing retainers. Can be added on top of any website package.</p>
            <div className="grid md:grid-cols-3 gap-2 mb-6">
              {[
                { tier: 'Starter', name: 'Local Growth', price: '25K', note: 'Per month — min 3 months', features: ['Meta Ads setup & management', '1 active campaign', 'Pixel + basic retargeting', 'Monthly report', 'Ad spend: client pays separately'], cta: 'Get Started' },
                { tier: 'Most Popular', name: 'Full Marketing', price: '55K', note: 'Per month — min 3 months', features: ['Meta + Google Ads', '3 active campaigns', 'Full retargeting', 'A/B testing', 'Dashboard access', 'Monthly strategy call', 'Ad spend: client pays separately'], cta: 'Book Discovery', on: true },
                { tier: 'Scale', name: 'Global Reach', price: '90K', note: 'Per month — min 3 months', features: ['Everything in Full Marketing', 'Diaspora campaigns', 'Pinterest management', 'SEO content', 'CRM lead management', 'Weekly reporting', 'Ad spend: client pays separately'], cta: 'Let\'s Talk' },
              ].map((pkg, i) => (
                <div key={i} className={`p-6 rounded border ${pkg.on ? 'bg-[var(--navy-dark)] border-[var(--orange-energy)] text-white' : 'bg-white border-[#E0DCD4] text-[var(--navy-primary)]'}`}>
                  <p className="text-[10px] font-mono uppercase tracking-wider mb-1" style={{ color: pkg.on ? 'var(--orange-energy)' : 'var(--teal-accent)' }}>{pkg.tier}</p>
                  <h3 className="text-xl font-black mb-1">{pkg.name}</h3>
                  <p className="text-3xl font-black mb-1" style={{ color: 'var(--orange-energy)' }}>{pkg.price}</p>
                  <p className={`text-xs mb-4 ${pkg.on ? 'text-white/50' : 'text-[var(--navy-primary)]/60'}`}>{pkg.note}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="text-xs flex gap-2">
                        <span className="text-green-600 font-bold">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <a href={whatsappUrl(WHATSAPP_PREFILL.marketingPackage(pkg.name))} target="_blank" rel="noopener noreferrer" className={`block text-center py-2.5 rounded text-xs font-bold uppercase ${pkg.on ? 'bg-[var(--orange-energy)] text-[var(--navy-dark)]' : 'border border-[#E0DCD4] hover:bg-[var(--navy-dark)] hover:text-white hover:border-[var(--navy-dark)]'}`}>
                    {pkg.cta}
                  </a>
                </div>
              ))}
            </div>
            <div className="border-l-4 border-[var(--orange-energy)] bg-[#FBF0DC] p-4 rounded-r text-[#6A4808] text-sm">
              <strong>Note on ad spend:</strong> Packages cover CRES management only. Your ad budget (Meta/Google) is separate. We recommend KES 15,000–30,000/month minimum for meaningful results.
            </div>
          </div>
        </section>

        <section className="bg-[var(--navy-dark)] py-16 md:py-20 px-6 md:px-12">
          <div className="max-w-3xl">
            <p className={secLabel}><span className={secLabelBar} /> Common Questions</p>
            <h2 className="text-3xl font-black text-white mb-8">Answered <span style={{ color: 'var(--orange-energy)' }}>Honestly.</span></h2>
            <div className="space-y-0 border border-white/10 rounded-lg overflow-hidden">
              {[
                { q: 'How much should I budget for ads?', a: 'For local Nairobi campaigns, KES 15,000–30,000/month minimum. National: KES 40,000+. Diaspora: KES 60,000+. We give a specific recommendation before you commit.' },
                { q: 'How long before I see results?', a: "Meta's algorithm needs 7–14 days to exit learning. By week 2 you have clear data; by week 4 campaigns should perform consistently. We set honest expectations up front." },
                { q: 'Do I need a website to run ads?', a: 'Yes. Ads without a proper landing page waste budget. We need somewhere to send the people we reach. CRES website or at least a dedicated landing page.' },
                { q: 'Boosting a post vs proper ads?', a: 'Boosting = broad audience, minimal targeting. Proper Meta Ads use objectives, custom audiences, pixel, A/B testing. Proper campaigns typically outperform boosts by 3–5x on the same budget.' },
                { q: 'How many email subscribers do I need?', a: 'You can start from zero — best time to start. Even 200 subscribers can generate meaningful sales. The list grows once capture systems are in place.' },
                { q: 'Do I have to write the emails myself?', a: 'No. CRES writes all emails — welcome sequence, campaigns, automations. You provide info and tone; we write. You review and approve; we send.' },
              ].map((faq, i) => (
                <div key={i} className="bg-white/5 border-b border-white/10 last:border-0">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-5 py-4 text-left font-semibold text-white text-sm flex justify-between items-center"
                  >
                    {faq.q}
                    <span className={`text-[var(--orange-energy)] text-lg transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-48' : 'max-h-0'}`}>
                    <div className="px-5 pb-4 text-white/60 text-xs leading-relaxed">{faq.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--orange-energy)] py-14 px-6 md:px-12">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-4xl font-black text-[var(--navy-dark)] mb-1">Ready to Start Bringing in Customers?</h2>
              <p className="text-[var(--navy-dark)]/80 italic text-sm md:text-base">20-minute call. We map your audience, budget, and first campaign — no commitment.</p>
            </div>
            <a href="tel:+254708805496" className="shrink-0 inline-flex items-center justify-center bg-[var(--navy-dark)] text-[var(--orange-energy)] font-bold text-sm px-8 py-4 rounded-lg uppercase tracking-wide hover:bg-[var(--navy-primary)]">
              Call +254 708 805 496
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
