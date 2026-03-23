'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StemsScreenshotCarousel from '@/components/case-studies/StemsScreenshotCarousel';
import { floralWhispersImageItems } from '@/lib/floralWhispersCaseStudyAssets';
import { Playfair_Display, DM_Sans } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-fw-playfair',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-fw-dm',
});

const cream = 'var(--neutral-bg)';
const ink = 'var(--cres-deep-navy)';
const rose = 'var(--cres-orange-primary)';
const roseLight = 'rgba(243, 156, 36, 0.12)';
const plumMid = 'var(--cres-teal-secondary)';
const muted = 'rgba(47, 59, 82, 0.72)';
const border = 'rgba(47, 59, 82, 0.18)';
const gold = 'var(--cres-orange-primary)';

export default function TheFloralWhispersCaseStudy() {
  const all = floralWhispersImageItems();
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
            className="text-sm font-medium hover:underline"
            style={{ color: plumMid }}
          >
            ← Case studies
          </Link>
        </div>

        {/* HERO — plum gradient */}
        <header className="relative overflow-hidden text-[var(--cres-white)]" style={{ background: 'var(--cres-gradient-bg)' }}>
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 55% 70% at 85% 40%, rgba(184,92,122,0.2) 0%, transparent 65%), radial-gradient(ellipse 45% 65% at 15% 85%, rgba(107,61,122,0.15) 0%, transparent 60%)',
            }}
          />
          <div className="relative z-[1] mx-auto max-w-[860px] px-6 py-14 md:px-12 md:py-16">
            <div className="mb-9 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[rgba(250,247,242,0.5)]">
              <span className="inline-block h-px w-6 bg-[rgba(250,247,242,0.3)]" />
              Cres Dynamics · Case Study
            </div>
            <h1
              className={`${playfair.className} mb-5 max-w-[620px] text-[clamp(36px,5vw,54px)] font-semibold leading-[1.15] text-[#faf7f2]`}
            >
              Beautiful gifts, finally visible — <em className="italic text-[#e0a8be]">Floral Whispers Gifts</em>
            </h1>
            <p className="mb-11 max-w-[480px] text-[17px] font-light text-[rgba(250,247,242,0.6)]">
              Building an e-commerce presence for a Nairobi florist whose quality was already there — the world just
              couldn&apos;t find them.
            </p>
            <div className="flex flex-col gap-5 border-t border-[rgba(250,247,242,0.1)] pt-8 md:flex-row md:flex-wrap md:gap-0">
              {[
                { label: 'Client', value: 'Floral Whispers Gifts' },
                { label: 'Project type', value: 'E-commerce Website' },
                { label: 'Timeline', value: '4 weeks' },
                {
                  label: 'Live site',
                  value: (
                    <a
                      href="https://floralwhispersgifts.co.ke"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#e0a8be] no-underline hover:underline"
                    >
                      floralwhispersgifts.co.ke ↗
                    </a>
                  ),
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="min-w-[140px] flex-1 border-[rgba(250,247,242,0.08)] pr-8 md:border-r md:last:border-r-0"
                >
                  <div className="mb-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[rgba(250,247,242,0.38)]">
                    {item.label}
                  </div>
                  <div className="text-[15px] font-medium text-[rgba(250,247,242,0.88)]">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[860px] px-6 pt-12 pb-20 md:px-12 md:pt-16">
          {/* 01 PROBLEM */}
          <section>
            <div className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.14em]" style={{ color: rose }}>
              <span className="h-px w-12 max-w-[48px] opacity-20" style={{ background: rose }} />
              01 · The Problem
            </div>
            <h2 className={`${playfair.className} mb-5 text-[clamp(26px,3.5vw,34px)] font-semibold leading-tight`}>
              The value was there. The visibility wasn&apos;t.
            </h2>
            <p className="max-w-full md:max-w-[640px] text-[15px] md:text-[16.5px] leading-[1.72] md:leading-[1.78] text-[#3a3a34]">
              Floral Whispers Gifts was already delivering premium flower bouquets, luxury gift hampers, and teddy bears
              across Nairobi — but their digital footprint did not match the quality of what they were offering. Customers
              searching online for flower delivery or anniversary gifts in Nairobi had no way to discover them.
            </p>
            <p className="mt-3.5 max-w-full md:max-w-[640px] text-[15px] md:text-[16.5px] leading-[1.72] md:leading-[1.78] text-[#3a3a34]">
              Without a structured product catalogue or online ordering system, potential customers either called in, found a
              competitor instead, or simply never knew Floral Whispers existed. The business was undercharging in reach for
              the premium service it was actually delivering.
            </p>
            <div
              className="mt-8 rounded-r-lg border-l-[3px] px-4 py-5 md:py-6 md:pl-7 md:pr-7"
              style={{ background: roseLight, borderColor: rose }}
            >
              <p className={`${playfair.className} text-base md:text-lg italic leading-relaxed text-[#5a1f35]`}>
                &ldquo;They had the flowers, the presentation, the delivery speed — everything a Nairobi customer wants. The
                only thing missing was a platform that could show the world what they had.&rdquo;
              </p>
            </div>
          </section>

          {/* 02 SOLUTION */}
          <section className="mt-14 border-t pt-14" style={{ borderColor: border }}>
            <div className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.14em]" style={{ color: rose }}>
              <span className="h-px w-12 max-w-[48px] opacity-20" style={{ background: rose }} />
              02 · The Solution
            </div>
            <h2 className={`${playfair.className} mb-5 text-[clamp(26px,3.5vw,34px)] font-semibold leading-tight`}>
              An e-commerce platform built to communicate premium
            </h2>
            <p className="max-w-full md:max-w-[640px] text-[15px] md:text-[16.5px] leading-[1.72] md:leading-[1.78] text-[#3a3a34]">
              Cres Dynamics designed and built a full e-commerce website for Floral Whispers Gifts — visually premium,
              mobile-first, and structured for search. The site organises their catalogue into clear collections: Flower
              Bouquets, Teddy Bears, Gift Hampers, and Cards, with dedicated product pages that communicate the value of each
              offering.
            </p>
            <p className="mt-3.5 max-w-full md:max-w-[640px] text-[15px] md:text-[16.5px] leading-[1.72] md:leading-[1.78] text-[#3a3a34]">
              We integrated WhatsApp ordering for fast customer communication and M-Pesa for seamless Kenyan payments.
              On-page SEO was built in from the start, targeting searches like &ldquo;flower delivery Nairobi,&rdquo;
              &ldquo;gift hampers Nairobi,&rdquo; and occasion-driven queries across birthdays, anniversaries, and
              celebrations.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {[
                'Next.js E-commerce',
                'M-Pesa Integration',
                'WhatsApp Ordering',
                'Product Catalogue',
                'On-page SEO',
                'Mobile-first Design',
                'Premium Brand Positioning',
                'Same-day Delivery UX',
              ].map((tag) => (
                <span
                  key={tag}
                  className="inline-block rounded-full border px-4 py-1.5 text-[13px] font-medium"
                  style={{
                    background: '#eef2ec',
                    borderColor: 'rgba(74,103,65,0.2)',
                    color: '#4a6741',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* Carousel 1 */}
          <section className="mt-14 border-t pt-14" style={{ borderColor: border }}>
            <StemsScreenshotCarousel
              title="Live build — catalogue & brand"
              subtitle="Screenshots from floralwhispersgifts.co.ke — collections, product pages, and premium presentation."
              images={carouselA}
              autoplayMs={6000}
              accent="rose"
            />
          </section>

          {/* 03 RESULTS */}
          <section className="mt-14 border-t pt-14" style={{ borderColor: border }}>
            <div className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.14em]" style={{ color: rose }}>
              <span className="h-px w-12 max-w-[48px] opacity-20" style={{ background: rose }} />
              03 · The Results
            </div>
            <h2 className={`${playfair.className} mb-5 text-[clamp(26px,3.5vw,34px)] font-semibold leading-tight`}>
              Visibility, reach, and a referral that proved the work
            </h2>
            <p className="max-w-full md:max-w-[640px] text-[15px] md:text-[16.5px] leading-[1.72] md:leading-[1.78] text-[#3a3a34]">
              The site established Floral Whispers Gifts as a discoverable, credible brand online. The strongest result was
              indirect but unmistakable — within months of launch, a competing Nairobi florist found the site, recognised the
              quality of the build, and contacted Cres Dynamics directly to do the same for their business.
            </p>

            <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                {
                  tf: 'Post-launch',
                  num: '4',
                  label: 'Product collections live — flowers, hampers, teddies & cards — fully indexed on Google',
                  gold: false,
                },
                {
                  tf: 'Organic reach',
                  num: '100+',
                  label: 'Monthly visitors from Nairobi-specific search queries',
                  gold: false,
                },
                {
                  tf: 'Brand signal',
                  num: '1',
                  label: 'Direct referral client won — The Stems Flowers reached out after seeing this site',
                  gold: false,
                },
                {
                  tf: 'Ongoing',
                  num: 'Tracking active',
                  label: 'Order volume and revenue data from WhatsApp + M-Pesa tracked monthly',
                  gold: true,
                },
              ].map((card) => (
                <div
                  key={card.tf}
                  className="relative overflow-hidden rounded-xl border bg-white p-6"
                  style={{ borderColor: border }}
                >
                  <div
                    className="absolute left-0 right-0 top-0 h-[3px]"
                    style={{ background: card.gold ? gold : rose }}
                  />
                  <div
                    className={`mb-2.5 text-[11px] font-medium uppercase tracking-[0.08em] ${card.gold ? '' : ''}`}
                    style={{ color: card.gold ? gold : rose }}
                  >
                    {card.tf}
                  </div>
                  <div
                    className={`${playfair.className} mb-2 leading-none ${card.gold ? 'text-lg text-[#b8935a]' : 'text-4xl text-[#6b3d7a]'}`}
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
                Project completed and live. Monthly performance reviews in progress. The referral win from The Stems Flowers
                is independently verifiable proof of the site&apos;s market visibility.
              </div>
            </div>
          </section>

          {/* 04 PROOF */}
          <section className="mt-14 border-t pt-14" style={{ borderColor: border }}>
            <div className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.14em]" style={{ color: rose }}>
              <span className="h-px w-12 max-w-[48px] opacity-20" style={{ background: rose }} />
              04 · The Proof
            </div>
            <h2 className={`${playfair.className} mb-5 text-[clamp(26px,3.5vw,34px)] font-semibold leading-tight`}>
              See it live
            </h2>
            <p className="max-w-full md:max-w-[640px] text-[15px] md:text-[16.5px] leading-[1.72] md:leading-[1.78] text-[#3a3a34]">
              The site is fully live, SEO-indexed, and serving customers across Nairobi — from CBD to Westlands, Karen, and
              Lavington.
            </p>

            <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-xl border bg-white p-6" style={{ borderColor: border }}>
                <div className="mb-3.5 text-[11px] font-medium uppercase tracking-[0.1em]" style={{ color: muted }}>
                  Live website
                </div>
                <a
                  href="https://floralwhispersgifts.co.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-b border-[rgba(107,61,122,0.25)] pb-0.5 text-[15px] font-medium hover:border-[#6b3d7a]"
                  style={{ color: plumMid }}
                >
                  floralwhispersgifts.co.ke <span className="-rotate-45 text-sm not-italic">→</span>
                </a>
                <p className="mt-3.5 text-[13.5px] leading-relaxed" style={{ color: muted }}>
                  Full product catalogue · WhatsApp ordering · M-Pesa checkout · Same-day delivery across Nairobi
                </p>
              </div>

              <div className="rounded-xl border bg-white p-6" style={{ borderColor: border }}>
                <div className="mb-3.5 text-[11px] font-medium uppercase tracking-[0.1em]" style={{ color: muted }}>
                  What this project led to
                </div>
                <a
                  href="https://thestemsflowers.co.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-b border-[rgba(107,61,122,0.25)] pb-0.5 text-[15px] font-medium hover:border-[#6b3d7a]"
                  style={{ color: plumMid }}
                >
                  thestemsflowers.co.ke <span className="-rotate-45 text-sm not-italic">→</span>
                </a>
                <p className="mt-3.5 text-[13.5px] leading-relaxed" style={{ color: muted }}>
                  The owner of The Stems Flowers discovered this site and reached out to Cres Dynamics directly — resulting
                  in a second florist e-commerce project won entirely through referral.
                </p>
              </div>

              <div
                className="flex items-center gap-4 rounded-xl border bg-white px-6 py-5 md:col-span-2"
                style={{ borderColor: border }}
              >
                <div
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-base"
                  style={{ background: roseLight }}
                >
                  ✦
                </div>
                <p className="text-sm leading-relaxed text-[#3a3a34]">
                  <strong className="font-medium text-[#1c1820]">The ripple effect.</strong> This project directly generated the
                  next one.{' '}
                  <a
                    href="/case-studies/the-stems-flowers/"
                    className="font-medium hover:underline"
                    style={{ color: plumMid }}
                  >
                    The Stems Flowers
                  </a>{' '}
                  found Floral Whispers Gifts online, saw the quality of the build, and contacted Cres Dynamics without a
                  single sales conversation. That is what great digital work does.
                </p>
              </div>
            </div>
          </section>

          {/* Carousel 2 */}
          <section className="mt-14 border-t pb-8 pt-14" style={{ borderColor: border }}>
            <StemsScreenshotCarousel
              title="Checkout, mobile & delivery UX"
              subtitle="Additional views from the live build — ordering flow, M-Pesa path, and responsive layouts."
              images={carouselB}
              autoplayMs={6500}
              accent="rose"
            />
          </section>

          <footer
            className="mt-4 flex flex-col items-start justify-between gap-4 border-t pt-8 md:flex-row md:items-center"
            style={{ borderColor: border }}
          >
            <div className="text-[13px] font-medium tracking-wide text-[#1c1820]">
              CRES <span style={{ color: rose }}>DYNAMICS</span>
            </div>
            <div className="text-xs" style={{ color: muted }}>
              Nairobi, Kenya · Building systems that make businesses run better
            </div>
            <a href="https://cresdynamics.com/" className="text-[13px] font-medium" style={{ color: plumMid }}>
              cresdynamics.com
            </a>
          </footer>
        </main>
      </div>

      <Footer />
    </div>
  );
}
