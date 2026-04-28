'use client';

import { useState } from 'react';
import Link from 'next/link';
import { whatsappUrl, WHATSAPP_PREFILL } from '@/lib/contact';

const secLabel = 'text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase text-[var(--teal-accent)] flex items-center gap-3 mb-2';
const secLabelBar = 'inline-block h-px w-7 bg-[var(--teal-accent)]';

/** Meta / Google ads & marketing retainers — Nairobi & Kenya market positioning. */
export default function MarketingPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <section
        className="relative min-h-[70vh] flex flex-col justify-end pb-16 md:pb-20 pt-24 px-6 md:px-12 overflow-hidden"
        style={{ background: 'var(--cres-gradient-bg)' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_60%_40%,rgba(26,58,138,0.12)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-4xl">
          <p className={secLabel}>
            <span className={secLabelBar} /> Marketing &amp; Ads · Nairobi
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] mb-4">
            Meta Ads &amp; Digital Marketing
            <br />
            Management
            <br />
            <span style={{ color: 'var(--orange-energy)' }}>Nairobi, Kenya.</span>
          </h1>
          <p className="text-white/75 text-lg md:text-xl max-w-2xl mb-6 leading-relaxed">
            Meta and Google Ads tuned for Kenyan buyers — CBD, Westlands, countywide, and diaspora. Built for outcomes
            you can measure: calls, WhatsApp enquiries, booked visits, and purchases. Not vanity likes.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 text-white/80 text-sm md:text-base max-w-3xl mb-8">
            {[
              {
                title: 'Why Meta',
                body: 'Your buyers already spend hours on Instagram & Facebook. We use targeting + retargeting so your spend goes to people most likely to buy.',
              },
              {
                title: 'Why Google Search',
                body: 'Search captures intent. When someone is actively looking for what you sell, you show up before competitors.',
              },
              {
                title: 'Why CRES',
                body: 'We build the tracking + landing flow first, then run ads on top—so you can see what works and scale without guessing.',
              },
              {
                title: 'What you get',
                body: 'Clear offer + campaign structure, creatives, conversion tracking, retargeting, and reporting you can understand.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-black/20 border border-white/10 rounded-xl p-4">
                <p className="text-[11px] md:text-xs font-semibold tracking-[0.22em] uppercase text-white/60 mb-1">
                  {item.title}
                </p>
                <p className="leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#mkt-packages"
              className="inline-flex items-center gap-2 bg-[var(--orange-energy)] hover:bg-[var(--orange-energy-hover)] text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide"
            >
              See Marketing Packages
            </a>
            <a
              href={whatsappUrl(WHATSAPP_PREFILL.marketingDiscovery)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/25 bg-white/5 hover:bg-white/10 text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide"
            >
              WhatsApp Us
            </a>
            <a
              href="#mkt-services"
              className="inline-flex items-center gap-2 text-white/60 hover:text-[var(--teal-accent)] font-mono text-sm uppercase tracking-wide"
            >
              What We Run →
            </a>
            <a
              href="tel:+254708805496"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white font-mono text-sm uppercase tracking-wide"
            >
              Call 0708 805 496 →
            </a>
          </div>
          <p className="mt-4 text-white/55 text-xs md:text-sm max-w-2xl">
            If you’re already boosting posts and “getting messages” but not seeing consistent sales, this is the page to
            start with.
          </p>
        </div>
      </section>

      <section className="bg-[var(--neutral-bg)] py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-5xl">
          <p className={`${secLabel} text-[var(--teal-accent)]`}>
            <span className={secLabelBar} /> The Nairobi Reality
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[var(--navy-primary)] mb-4">
            A Website Without Ads Is a Shop With <span className="text-red-600">No Signboard</span> on Mombasa Road.
          </h2>
          <p className="text-[var(--navy-primary)]/80 text-sm mb-10 max-w-xl">
            Your competitors are bidding on the same Nairobi keywords and placements. If nobody is sent to your site, it
            sits there — while they capture the demand.
          </p>
          <div className="grid md:grid-cols-3 gap-2">
            {[
              {
                icon: '📉',
                title: 'Organic reach is almost dead',
                desc: 'In 2026, organic posts reach less than 5% of followers. Paid placement is the only way to reach more people consistently.',
              },
              {
                icon: '💸',
                title: 'Boosting posts is not advertising',
                desc: 'Real Meta Ads target by location, interest, behaviour, and purchase intent. The difference in results is significant.',
              },
              {
                icon: '🌍',
                title: 'Your best customers might not be local',
                desc: 'The Kenyan diaspora spends millions on goods from home. Without targeted international ads, you\'re invisible to them.',
              },
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
          <p className={secLabel}>
            <span className={secLabelBar} /> What We Run
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
            Every Platform.
            <br />
            <span style={{ color: 'var(--orange-energy)' }}>Every Nairobi Audience.</span>
          </h2>
          <p className="text-white/50 text-sm mb-10">
            We run campaigns where your buyers are — and connect every ad to measurable outcomes.
          </p>
          <div className="grid md:grid-cols-3 gap-2">
            {[
              {
                num: '01',
                icon: '📘',
                title: 'Meta Ads (Facebook & Instagram)',
                desc: 'Targeting by location, interest, behaviour, lookalike audiences. The most powerful targeting platform in Kenya.',
              },
              {
                num: '02',
                icon: '🎯',
                title: 'Google Search Ads',
                desc: 'Appear at the top when someone searches for what you sell. High-intent buyers. We capture them before competitors.',
                featured: true,
              },
              {
                num: '03',
                icon: '🔄',
                title: 'Retargeting Campaigns',
                desc: "97% don't buy on first visit. Retargeting brings them back. Pixel + sequences that recover lost sales.",
              },
              {
                num: '04',
                icon: '🌍',
                title: 'Diaspora Targeting',
                desc: 'UK, US, UAE, Canada. For furniture, fashion, food, gifts — an untapped market that spends.',
              },
              {
                num: '05',
                icon: '📌',
                title: 'Pinterest Campaigns',
                desc: 'Where people plan décor, fashion, weddings. For interior, fashion, lifestyle — a hidden goldmine.',
              },
              {
                num: '06',
                icon: '📊',
                title: 'Performance Reporting',
                desc: 'Monthly report: spend, reach, clicks, conversions, cost per sale. Real business outcomes only.',
              },
            ].map((s, i) => (
              <div
                key={i}
                className={`p-6 rounded border ${
                  s.featured
                    ? 'bg-[var(--orange-energy)] border-[var(--orange-energy)]'
                    : 'bg-[var(--navy-primary)]/60 border-white/10 hover:bg-[var(--teal-deep)]/40'
                }`}
              >
                <p
                  className={`text-[10px] font-mono tracking-widest mb-2 ${
                    s.featured ? 'text-[var(--navy-dark)]/70' : 'text-[var(--teal-accent)]'
                  }`}
                >
                  {s.num}
                </p>
                <span className="text-2xl block mb-2">{s.icon}</span>
                <h3 className={`font-bold text-lg mb-2 ${s.featured ? 'text-[var(--navy-dark)]' : 'text-white'}`}>
                  {s.title}
                </h3>
                <p className={`text-sm ${s.featured ? 'text-[var(--navy-dark)]/80' : 'text-white/60'}`}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 rounded border border-[var(--teal-accent)]/20 bg-[var(--teal-deep)]/20 flex flex-col md:flex-row md:items-start gap-4">
            <span className="text-4xl">📧</span>
            <div className="flex-1">
              <p className="text-[10px] font-mono text-[var(--teal-accent)] uppercase tracking-wider mb-1">
                Service 07 — Email Marketing &amp; Automation
              </p>
              <h3 className="text-xl md:text-2xl font-black text-white mb-2">Your List. Your Most Valuable Asset.</h3>
              <p className="text-white/60 text-sm">
                We build the list, write sequences, and set automations that convert subscribers into customers.
              </p>
            </div>
            <a
              href="#email-packages"
              className="shrink-0 inline-flex items-center justify-center bg-[var(--orange-energy)] text-white font-bold text-xs px-5 py-2.5 rounded uppercase tracking-wide"
            >
              See Pricing
            </a>
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            {[
              'Meta Ads Manager',
              'Google Ads',
              'Instagram',
              'Pinterest Ads',
              'Meta Pixel',
              'GA4',
              'GTM',
              'Looker Studio',
              'Mailchimp',
              'Klaviyo',
              'Brevo',
              'ConvertKit',
            ].map((badge) => (
              <span
                key={badge}
                className="px-3 py-1.5 rounded bg-[var(--navy-primary)]/60 border border-white/10 text-[10px] font-mono text-white/60 tracking-wider"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--neutral-bg)] py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-5xl">
          <p className={`${secLabel} text-[var(--teal-accent)]`}>
            <span className={secLabelBar} /> How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[var(--navy-primary)] mb-4">
            What Happens When <span style={{ color: 'var(--orange-energy)' }}>You Engage CRES</span> for Marketing.
          </h2>
          <p className="text-[var(--navy-primary)]/80 text-sm mb-10">
            We build the marketing infrastructure first — then run the ads on top.
          </p>
          <div className="grid md:grid-cols-2 gap-2">
            {[
              {
                phase: 'Phase 1 — Foundation',
                title: 'We build the infrastructure first',
                items: [
                  'Meta Business Manager + Pixel',
                  'GA4 + Google Ads linked',
                  'Conversion tracking',
                  'Audience lists from existing customers',
                ],
              },
              {
                phase: 'Phase 2 — Campaign Build',
                title: 'We build your first campaigns',
                items: [
                  'Strategy + audience research',
                  'Ad creative (copy, images, video)',
                  'Campaign structure + targeting',
                  'Retargeting sequence',
                ],
              },
              {
                phase: 'Phase 3 — Launch & Optimise',
                title: 'We launch, monitor, improve',
                items: [
                  'Campaigns go live',
                  'Daily monitoring first 14 days',
                  'A/B testing',
                  'Monthly performance report',
                ],
              },
              {
                phase: 'Phase 4 — Scale',
                title: 'What success looks like',
                items: [
                  'Consistent inbound leads',
                  'CPA decreasing over time',
                  'Retargeting recovering 15–30%',
                  'Clear data on what converts',
                ],
              },
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
          <p className={secLabel}>
            <span className={secLabelBar} /> What Good Ads Deliver
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
            Ads Work When <span style={{ color: 'var(--orange-energy)' }}>They&apos;re Built Right.</span>
          </h2>
          <p className="text-white/50 text-sm mb-8">Realistic benchmarks for well-built campaigns in the Kenyan market.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
            {[
              { val: '3–7x', label: 'ROAS for e-commerce' },
              { val: '15–30%', label: 'Visitors recovered via retargeting' },
              { val: 'KES 25 → 5', label: 'Cost per lead (Nairobi)' },
              { val: '1–2 weeks', label: 'To first optimised campaign' },
            ].map((r, i) => (
              <div key={i} className="bg-[var(--navy-primary)]/60 p-5 rounded text-center">
                <div className="text-3xl font-black text-[var(--orange-energy)]">{r.val}</div>
                <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider mt-1">{r.label}</div>
              </div>
            ))}
          </div>
          <div className="border-l-4 border-[var(--orange-energy)] bg-[var(--navy-primary)]/30 p-4 rounded-r">
            <p className="text-white/60 text-sm italic">
              Results depend on product, price, audience, and budget. We give honest projections — not generic promises.
            </p>
          </div>
        </div>
      </section>

      <section id="email-packages" className="bg-[var(--neutral-bg)] py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-5xl">
          <p className={`${secLabel} text-[var(--teal-accent)]`}>
            <span className={secLabelBar} /> Email Marketing Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[var(--navy-primary)] mb-2">
            Email Add-On <span style={{ color: 'var(--orange-energy)' }}>Packages.</span>
          </h2>
          <p className="text-[var(--navy-primary)]/80 text-sm mb-8">
            Add email on top of any ads package — or run standalone. We write every email.
          </p>
          <div className="grid md:grid-cols-3 gap-2 mb-6">
            {[
              {
                tier: 'Starter',
                name: 'Email Foundation',
                price: '15K',
                note: 'Setup — then KES 8K/month',
                features: ['Platform setup (Mailchimp/Brevo)', 'Welcome sequence (4 emails)', 'List capture form', '1 campaign email/month'],
                cta: 'Get Started',
              },
              {
                tier: 'Most Popular',
                name: 'Email Growth',
                price: '25K',
                note: 'Setup — then KES 15K/month',
                features: [
                  'Everything in Foundation',
                  'Abandoned cart (3 emails)',
                  'Post-purchase (5 emails)',
                  '2 campaigns/month',
                  'List segmentation',
                  'Full dashboard',
                ],
                cta: 'Book Discovery',
                on: true,
              },
              {
                tier: 'Full System',
                name: 'Email Machine',
                price: '40K',
                note: 'Setup — then KES 22K/month',
                features: [
                  'Everything in Growth',
                  'Re-engagement campaigns',
                  'Advanced automation',
                  '4 campaigns/month',
                  'A/B testing',
                  'Ads & CRM integration',
                ],
                cta: "Let's Talk",
              },
            ].map((pkg, i) => (
              <div
                key={i}
                className={`p-6 rounded border ${
                  pkg.on ? 'bg-[var(--navy-dark)] border-[var(--orange-energy)] text-white' : 'bg-white border-[#E0DCD4] text-[var(--navy-primary)]'
                }`}
              >
                <p
                  className="text-[10px] font-mono uppercase tracking-wider mb-1"
                  style={{ color: pkg.on ? 'var(--orange-energy)' : 'var(--teal-accent)' }}
                >
                  {pkg.tier}
                </p>
                <h3 className="text-xl font-black mb-1">{pkg.name}</h3>
                <p className="text-3xl font-black mb-1" style={{ color: 'var(--orange-energy)' }}>
                  {pkg.price}
                </p>
                <p className={`text-xs mb-4 ${pkg.on ? 'text-white/50' : 'text-[var(--navy-primary)]/60'}`}>{pkg.note}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="text-xs flex gap-2">
                      <span className="text-green-600 font-bold">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappUrl(WHATSAPP_PREFILL.emailPackage(pkg.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-2.5 rounded text-xs font-bold uppercase ${
                    pkg.on
                      ? 'bg-[var(--orange-energy)] text-[var(--navy-dark)]'
                      : 'border border-[#E0DCD4] hover:bg-[var(--navy-dark)] hover:text-white hover:border-[var(--navy-dark)]'
                  }`}
                >
                  {pkg.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mkt-packages" className="bg-[var(--neutral-bg)] py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-5xl">
          <p className={`${secLabel} text-[var(--teal-accent)]`}>
            <span className={secLabelBar} /> Marketing Packages
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[var(--navy-primary)] mb-2">
            Choose Your <span style={{ color: 'var(--orange-energy)' }}>Nairobi Growth Level.</span>
          </h2>
          <p className="text-[var(--navy-primary)]/80 text-sm mb-10">
            Standalone marketing retainers. Can be added on top of any website package.
          </p>
          <div className="grid md:grid-cols-3 gap-2 mb-6">
            {[
              {
                tier: 'Starter',
                name: 'Local Growth',
                price: '25K',
                note: 'Per month — min 3 months',
                features: [
                  'Meta Ads setup & management',
                  '1 active campaign',
                  'Pixel + basic retargeting',
                  'Monthly report',
                  'Ad spend: client pays separately',
                ],
                cta: 'Get Started',
              },
              {
                tier: 'Most Popular',
                name: 'Full Marketing',
                price: '55K',
                note: 'Per month — min 3 months',
                features: [
                  'Meta + Google Ads',
                  '3 active campaigns',
                  'Full retargeting',
                  'A/B testing',
                  'Dashboard access',
                  'Monthly strategy call',
                  'Ad spend: client pays separately',
                ],
                cta: 'Book Discovery',
                on: true,
              },
              {
                tier: 'Scale',
                name: 'Global Reach',
                price: '90K',
                note: 'Per month — min 3 months',
                features: [
                  'Everything in Full Marketing',
                  'Diaspora campaigns',
                  'Pinterest management',
                  'SEO content',
                  'CRM lead management',
                  'Weekly reporting',
                  'Ad spend: client pays separately',
                ],
                cta: "Let's Talk",
              },
            ].map((pkg, i) => (
              <div
                key={i}
                className={`p-6 rounded border ${
                  pkg.on ? 'bg-[var(--navy-dark)] border-[var(--orange-energy)] text-white' : 'bg-white border-[#E0DCD4] text-[var(--navy-primary)]'
                }`}
              >
                <p
                  className="text-[10px] font-mono uppercase tracking-wider mb-1"
                  style={{ color: pkg.on ? 'var(--orange-energy)' : 'var(--teal-accent)' }}
                >
                  {pkg.tier}
                </p>
                <h3 className="text-xl font-black mb-1">{pkg.name}</h3>
                <p className="text-3xl font-black mb-1" style={{ color: 'var(--orange-energy)' }}>
                  {pkg.price}
                </p>
                <p className={`text-xs mb-4 ${pkg.on ? 'text-white/50' : 'text-[var(--navy-primary)]/60'}`}>{pkg.note}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="text-xs flex gap-2">
                      <span className="text-green-600 font-bold">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappUrl(WHATSAPP_PREFILL.marketingPackage(pkg.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-2.5 rounded text-xs font-bold uppercase ${
                    pkg.on
                      ? 'bg-[var(--orange-energy)] text-[var(--navy-dark)]'
                      : 'border border-[#E0DCD4] hover:bg-[var(--navy-dark)] hover:text-white hover:border-[var(--navy-dark)]'
                  }`}
                >
                  {pkg.cta}
                </a>
              </div>
            ))}
          </div>
          <div className="border-l-4 border-[var(--orange-energy)] bg-[#FBF0DC] p-4 rounded-r text-[#6A4808] text-sm">
            <strong>Note on ad spend:</strong> Packages cover CRES management only. Your ad budget (Meta/Google) is
            separate. We recommend KES 15,000–30,000/month minimum for meaningful results.
          </div>
          <div className="mt-6 rounded border border-[#E0DCD4] bg-white p-5 text-sm text-[var(--navy-primary)]">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--teal-accent)] mb-2">Before &amp; After (Honest)</p>
            <p className="leading-relaxed">
              Before: client was boosting posts with no targeting structure, no pixel events, and no clear conversion page.
              Results were inconsistent and mostly vanity metrics. After: structured campaign setup (offer + landing flow + tracking + retargeting),
              lead quality improved, reporting became predictable, and spend decisions were based on data not guesswork.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--navy-dark)] py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-3xl">
          <p className={secLabel}>
            <span className={secLabelBar} /> Common Questions
          </p>
          <h2 className="text-3xl font-black text-white mb-8">
            Answered <span style={{ color: 'var(--orange-energy)' }}>Honestly.</span>
          </h2>
          <div className="space-y-0 border border-white/10 rounded-lg overflow-hidden">
            {[
              {
                q: 'How much should I budget for ads?',
                a: 'For local Nairobi campaigns, KES 15,000–30,000/month minimum. National: KES 40,000+. Diaspora: KES 60,000+. We give a specific recommendation before you commit.',
              },
              {
                q: 'How long before I see results?',
                a: "Meta's algorithm needs 7–14 days to exit learning. By week 2 you have clear data; by week 4 campaigns should perform consistently. We set honest expectations up front.",
              },
              {
                q: 'Do I need a website to run ads?',
                a: 'Yes. Ads without a proper landing page waste budget. We need somewhere to send the people we reach. CRES website or at least a dedicated landing page.',
              },
              {
                q: 'Boosting a post vs proper ads?',
                a: 'Boosting = broad audience, minimal targeting. Proper Meta Ads use objectives, custom audiences, pixel, A/B testing. Proper campaigns typically outperform boosts by 3–5x on the same budget.',
              },
              {
                q: 'How many email subscribers do I need?',
                a: 'You can start from zero — best time to start. Even 200 subscribers can generate meaningful sales. The list grows once capture systems are in place.',
              },
              {
                q: 'Do I have to write the emails myself?',
                a: 'No. CRES writes all emails — welcome sequence, campaigns, automations. You provide info and tone; we write. You review and approve; we send.',
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white/5 border-b border-white/10 last:border-0">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-5 py-4 text-left font-semibold text-white text-sm flex justify-between items-center"
                >
                  {faq.q}
                  <span
                    className={`text-[var(--orange-energy)] text-lg transition-transform ${openFaq === i ? 'rotate-45' : ''}`}
                  >
                    +
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-48' : 'max-h-0'}`}>
                  <div className="px-5 pb-4 text-white/60 text-xs leading-relaxed">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              { href: '/websites', label: 'Website Development' },
              { href: '/e-commerce', label: 'E-Commerce' },
              { href: '/insights', label: 'Insights: Meta vs Google Ads' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="rounded-lg border border-white/20 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/10">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--orange-energy)] py-14 px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-4xl font-black text-[var(--navy-dark)] mb-1">
              Ready to Dominate Your Category in Nairobi?
            </h2>
            <p className="text-[var(--navy-dark)]/80 italic text-sm md:text-base">
              20-minute call. We map your audience, budget, and first campaign — no commitment.
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
              href="/how-we-work"
              className="text-[var(--navy-dark)]/90 text-xs font-medium underline underline-offset-2 hover:text-[var(--navy-dark)] text-center sm:text-right"
            >
              How we deliver new sites — timeline &amp; payments →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
