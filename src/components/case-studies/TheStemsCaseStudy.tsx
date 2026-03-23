'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StemsScreenshotCarousel from '@/components/case-studies/StemsScreenshotCarousel';
import { stemsImageItems } from '@/lib/stemsCaseStudyAssets';
import { Playfair_Display, DM_Sans } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-stems-playfair',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-stems-dm',
});

const cream = 'var(--neutral-bg)';
const ink = 'var(--cres-deep-navy)';
const blush = 'var(--cres-orange-primary)';
const sage = 'var(--cres-teal-secondary)';
const muted = 'rgba(47, 59, 82, 0.72)';
const border = 'rgba(47, 59, 82, 0.18)';

export default function TheStemsCaseStudy() {
  const all = stemsImageItems();
  const carouselA = all.slice(0, 4);
  const carouselB = all.slice(4);

  return (
    <div
      className={`min-h-screen ${dmSans.className} ${playfair.variable} ${dmSans.variable}`}
      style={{ background: cream, color: ink }}
    >
      <Header />

      <div className="pt-20 md:pt-24">
        <div className="mx-auto max-w-[860px] px-6 pb-4 md:px-12">
          <Link
            href="/case-studies/"
            className="text-sm font-medium text-[#4a6741] underline-offset-4 hover:underline"
          >
            ← Case studies
          </Link>
        </div>

        {/* HERO */}
        <header className="relative overflow-hidden text-[var(--cres-white)]" style={{ background: 'var(--cres-gradient-bg)' }}>
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(180,130,90,0.15) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 20% 80%, rgba(100,140,80,0.12) 0%, transparent 60%)',
            }}
          />
          <div className="relative z-[1] mx-auto max-w-[860px] px-6 py-14 md:px-12 md:py-16">
            <div className="mb-9 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[rgba(250,247,242,0.55)]">
              <span className="inline-block h-px w-6 bg-[rgba(250,247,242,0.35)]" />
              Cres Dynamics · Case Study
            </div>
            <h1
              className={`${playfair.className} mb-5 max-w-[600px] text-[clamp(36px,5vw,54px)] font-semibold leading-[1.15] text-[#faf7f2]`}
            >
              From walk-ins only to <em className="italic text-[#c9b89a]">ordering online</em> — The Stems Flowers
            </h1>
            <p className="mb-11 max-w-[480px] text-[17px] font-light text-[rgba(250,247,242,0.65)]">
              A full e-commerce revamp for Nairobi&apos;s premier CBD florist, delivered in under 4 weeks.
            </p>
            <div className="flex flex-col gap-5 border-t border-[rgba(250,247,242,0.12)] pt-8 md:flex-row md:flex-wrap md:gap-0">
              {[
                { label: 'Client', value: 'The Stems Flowers' },
                { label: 'Project type', value: 'E-commerce Website' },
                { label: 'Timeline', value: '4 weeks' },
                {
                  label: 'Live site',
                  value: (
                    <a
                      href="https://thestemsflowers.co.ke"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#c9b89a] no-underline hover:underline"
                    >
                      thestemsflowers.co.ke ↗
                    </a>
                  ),
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="min-w-[140px] flex-1 border-[rgba(250,247,242,0.1)] pr-8 md:border-r md:last:border-r-0"
                >
                  <div className="mb-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[rgba(250,247,242,0.4)]">
                    {item.label}
                  </div>
                  <div className="text-[15px] font-medium text-[rgba(250,247,242,0.9)]">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[860px] px-6 pt-12 pb-20 md:px-12 md:pt-16">
          {/* 01 PROBLEM */}
          <section className="border-t-0">
            <div className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.14em]" style={{ color: blush }}>
              <span className="h-px w-12 max-w-[48px] opacity-25" style={{ background: blush }} />
              01 · The Problem
            </div>
            <h2 className={`${playfair.className} mb-5 text-[clamp(26px,3.5vw,34px)] font-semibold leading-tight`}>
              A great shop, invisible online
            </h2>
            <p className="max-w-full md:max-w-[640px] text-[15px] md:text-[16.5px] leading-[1.72] md:leading-[1.78] text-[#3a3a34]">
              The Stems Flowers had built a loyal customer base at their Delta Hotel location on University Way, Nairobi CBD
              — but their digital presence was practically non-existent. Customers who discovered them in person had no easy
              way to reorder, and anyone searching online for flower delivery in Nairobi found their competitors instead.
            </p>
            <p className="mt-3.5 max-w-full md:max-w-[640px] text-[15px] md:text-[16.5px] leading-[1.72] md:leading-[1.78] text-[#3a3a34]">
              Without an online shop or M-Pesa payment integration, every order required a phone call or an in-person visit.
              Same-day delivery — one of their strongest offerings — had no professional platform to communicate it from.
            </p>
            <div
              className="mt-8 rounded-r-lg border-l-[3px] px-4 py-5 md:py-6 md:pl-7 md:pr-7"
              style={{ background: '#f5ede9', borderColor: blush }}
            >
              <p className={`${playfair.className} text-base md:text-lg italic leading-relaxed text-[#5a3428]`}>
                &ldquo;A florist this good deserved a shop window the whole of Nairobi could see — not just foot traffic on
                University Way.&rdquo;
              </p>
            </div>
          </section>

          {/* 02 SOLUTION */}
          <section className="mt-14 border-t pt-14" style={{ borderColor: border }}>
            <div className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.14em]" style={{ color: blush }}>
              <span className="h-px w-12 max-w-[48px] opacity-25" style={{ background: blush }} />
              02 · The Solution
            </div>
            <h2 className={`${playfair.className} mb-5 text-[clamp(26px,3.5vw,34px)] font-semibold leading-tight`}>
              A full e-commerce platform, built for Nairobi
            </h2>
            <p className="max-w-full md:max-w-[640px] text-[15px] md:text-[16.5px] leading-[1.72] md:leading-[1.78] text-[#3a3a34]">
              Cres Dynamics rebuilt The Stems Flowers from the ground up — a fast, mobile-first e-commerce website with a
              structured product catalogue across four collections: Flower Bouquets, Teddy Bears, Gift Hampers, and Cards. The
              site handles online orders end-to-end, from browsing to M-Pesa checkout.
            </p>
            <p className="mt-3.5 max-w-full md:max-w-[640px] text-[15px] md:text-[16.5px] leading-[1.72] md:leading-[1.78] text-[#3a3a34]">
              We layered in on-page SEO targeting high-intent searches like &ldquo;florist Nairobi CBD&rdquo; and
              &ldquo;same-day flower delivery Nairobi,&rdquo; and structured the site architecture to rank for anniversary,
              birthday, and surprise gift occasions year-round.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {[
                'Next.js E-commerce',
                'M-Pesa Integration',
                'Product Catalogue',
                'Same-day Delivery UX',
                'On-page SEO',
                'Mobile-first Design',
                'Supabase Backend',
                'WhatsApp CTA',
              ].map((tag) => (
                <span
                  key={tag}
                  className="inline-block rounded-full border px-4 py-1.5 text-[13px] font-medium"
                  style={{
                    background: '#eef2ec',
                    borderColor: 'rgba(74,103,65,0.2)',
                    color: sage,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* Carousel 1 — lower section: storefront & catalogue */}
          <section className="mt-14 border-t pt-14" style={{ borderColor: border }}>
            <StemsScreenshotCarousel
              title="Live build — storefront & catalogue"
              subtitle="Screenshots from thestemsflowers.co.ke — product grids, collections, and mobile layout."
              images={carouselA}
              autoplayMs={6000}
            />
          </section>

          {/* 03 RESULTS */}
          <section className="mt-14 border-t pt-14" style={{ borderColor: border }}>
            <div className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.14em]" style={{ color: blush }}>
              <span className="h-px w-12 max-w-[48px] opacity-25" style={{ background: blush }} />
              03 · The Results
            </div>
            <h2 className={`${playfair.className} mb-5 text-[clamp(26px,3.5vw,34px)] font-semibold leading-tight`}>
              Early signals, metrics in motion
            </h2>
            <p className="max-w-full md:max-w-[640px] text-[15px] md:text-[16.5px] leading-[1.72] md:leading-[1.78] text-[#3a3a34]">
              The site launched last month. Baseline metrics are being established now — full reporting begins at Month 2.
              The indicators below reflect what we expect to track and what&apos;s already visible from the live site.
            </p>

            <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                { tf: 'Month 2 target', num: '100+', label: 'Monthly organic visitors from Google search', pending: false },
                {
                  tf: 'Immediate win',
                  num: '24→2',
                  label: 'Hours to respond to orders — from phone-only to instant online checkout',
                  pending: false,
                },
                { tf: 'Live now', num: '4', label: 'Product collections online — flowers, teddies, hampers & cards', pending: false },
                {
                  tf: 'Tracking from Month 2',
                  num: 'In progress',
                  label: 'Online order volume, revenue from Google & M-Pesa data',
                  pending: true,
                },
              ].map((card) => (
                <div
                  key={card.tf}
                  className="relative overflow-hidden rounded-xl border bg-white p-6"
                  style={{ borderColor: border }}
                >
                  <div
                    className="absolute left-0 right-0 top-0 h-[3px]"
                    style={{ background: card.pending ? '#b8935a' : sage }}
                  />
                  <div className="mb-2.5 text-[11px] font-medium uppercase tracking-[0.08em]" style={{ color: blush }}>
                    {card.tf}
                  </div>
                  <div
                    className={`${playfair.className} mb-2 leading-none ${card.pending ? 'text-lg text-[#b8935a]' : 'text-4xl text-[#4a6741]'}`}
                  >
                    {card.num}
                  </div>
                  <div className="text-[13px] leading-relaxed" style={{ color: muted }}>
                    {card.label}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-5 flex items-start gap-3 rounded-lg border px-5 py-4 text-sm text-[#6b5030]"
              style={{ background: '#fffbf5', borderColor: 'rgba(184,147,90,0.3)' }}
            >
              <span className="mt-1 h-2 w-2 flex-shrink-0 animate-pulse rounded-full bg-[#b8935a]" />
              <div>
                Project completed successfully. Metrics tracking commences in Month 2. This case study will be updated with live
                performance data.
              </div>
            </div>
          </section>

          {/* 04 PROOF */}
          <section className="mt-14 border-t pt-14" style={{ borderColor: border }}>
            <div className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.14em]" style={{ color: blush }}>
              <span className="h-px w-12 max-w-[48px] opacity-25" style={{ background: blush }} />
              04 · The Proof
            </div>
            <h2 className={`${playfair.className} mb-5 text-[clamp(26px,3.5vw,34px)] font-semibold leading-tight`}>
              See it live
            </h2>
            <p className="max-w-full md:max-w-[640px] text-[15px] md:text-[16.5px] leading-[1.72] md:leading-[1.78] text-[#3a3a34]">
              The site is fully live, SEO-indexed, and accepting M-Pesa orders across all Nairobi areas.
            </p>

            <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-xl border bg-white p-6" style={{ borderColor: border }}>
                <div className="mb-3.5 text-[11px] font-medium uppercase tracking-[0.1em]" style={{ color: muted }}>
                  Live website
                </div>
                <a
                  href="https://thestemsflowers.co.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-b border-[rgba(74,103,65,0.25)] pb-0.5 text-[15px] font-medium text-[#4a6741] hover:border-[#4a6741]"
                >
                  thestemsflowers.co.ke <span className="-rotate-45 text-sm not-italic">→</span>
                </a>
                <p className="mt-3.5 text-[13.5px] leading-relaxed" style={{ color: muted }}>
                  Full product catalogue · M-Pesa checkout · Same-day delivery across Nairobi · Mon–Sat 8AM–8PM
                </p>
              </div>

              <div className="rounded-xl border bg-white p-6" style={{ borderColor: border }}>
                <div className="mb-3.5 text-[11px] font-medium uppercase tracking-[0.1em]" style={{ color: muted }}>
                  Previous work that won this client
                </div>
                <a
                  href="https://floralwhispersgifts.co.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-b border-[rgba(74,103,65,0.25)] pb-0.5 text-[15px] font-medium text-[#4a6741] hover:border-[#4a6741]"
                >
                  floralwhispersgifts.co.ke <span className="-rotate-45 text-sm not-italic">→</span>
                </a>
                <p className="mt-3.5 text-[13.5px] leading-relaxed" style={{ color: muted }}>
                  The client discovered Cres Dynamics through our work on{' '}
                  <a href="https://floralwhispersgifts.co.ke" target="_blank" rel="noopener noreferrer" className="text-[#4a6741] hover:underline">
                    Floral Whispers Gifts
                  </a>{' '}
                  and reached out directly for his own revamp.
                </p>
              </div>

              <div
                className="flex items-center gap-4 rounded-xl border bg-white px-6 py-5 md:col-span-2"
                style={{ borderColor: border }}
              >
                <div
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-base"
                  style={{ background: '#f5ede9' }}
                >
                  🌸
                </div>
                <p className="text-sm leading-relaxed text-[#3a3a34]">
                  <strong className="font-medium text-[#1c2018]">Referral-driven project.</strong> The Stems Flowers owner saw
                  our work on{' '}
                  <a
                    href="https://floralwhispersgifts.co.ke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#4a6741] hover:underline"
                  >
                    floralwhispersgifts.co.ke
                  </a>{' '}
                  and contacted Cres Dynamics directly — no outbound sales, no ads. This project is a direct result of quality
                  work speaking for itself.
                </p>
              </div>
            </div>
          </section>

          {/* Carousel 2 — checkout & product detail */}
          <section className="mt-14 border-t pb-8 pt-14" style={{ borderColor: border }}>
            <StemsScreenshotCarousel
              title="Checkout, product detail & mobile"
              subtitle="Additional views from the live build — cart flow, PDP, and responsive UI."
              images={carouselB}
              autoplayMs={6500}
            />
          </section>

          {/* Local footer strip (editorial) */}
          <footer
            className="mt-4 flex flex-col items-start justify-between gap-4 border-t pt-8 md:flex-row md:items-center"
            style={{ borderColor: border }}
          >
            <div className="text-[13px] font-medium tracking-wide text-[#1c2018]">
              CRES <span style={{ color: sage }}>DYNAMICS</span>
            </div>
            <div className="text-xs" style={{ color: muted }}>
              Nairobi, Kenya · Building systems that make businesses run better
            </div>
            <a href="https://cresdynamics.com/" className="text-[13px] font-medium" style={{ color: sage }}>
              cresdynamics.com
            </a>
          </footer>
        </main>
      </div>

      <Footer />
    </div>
  );
}
