'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StemsScreenshotCarousel from '@/components/case-studies/StemsScreenshotCarousel';
import { sparkLightsImageItems } from '@/lib/sparkLightsCaseStudyAssets';
import { Playfair_Display, DM_Sans } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-sl-playfair',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sl-dm',
});

const cream = 'var(--neutral-bg)';
const ink = 'var(--cres-deep-navy)';
const amber = 'var(--cres-orange-primary)';
const amberLight = 'rgba(243, 156, 36, 0.12)';
const amberDeep = 'var(--cres-orange-hover)';
const teal = 'var(--cres-teal-secondary)';
const muted = 'rgba(47, 59, 82, 0.72)';
const border = 'rgba(47, 59, 82, 0.18)';

export default function TheSparkLightsCaseStudy() {
  const all = sparkLightsImageItems();
  const carouselA = all.slice(0, 5);
  const carouselB = all.slice(5);

  return (
    <div className={`min-h-screen ${dmSans.className} ${playfair.variable} ${dmSans.variable}`} style={{ background: cream, color: ink }}>
      <Header />

      <div className="pt-20 md:pt-24">
        <div className="mx-auto max-w-[860px] px-6 pb-4 md:px-12">
          <Link href="/case-studies/" className="text-sm font-medium hover:underline" style={{ color: amberDeep }}>
            ← Case studies
          </Link>
        </div>

        <header className="relative overflow-hidden text-[var(--cres-white)]" style={{ background: 'var(--cres-gradient-bg)' }}>
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 50% 90% at 75% 20%, rgba(196,124,10,0.28) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 20% 100%, rgba(15,92,82,0.14) 0%, transparent 55%), radial-gradient(ellipse 30% 40% at 50% 50%, rgba(196,124,10,0.06) 0%, transparent 70%)',
            }}
          />
          <div className="relative z-[1] mx-auto max-w-[860px] px-6 py-14 md:px-12 md:py-16">
            <div className="mb-9 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[rgba(250,248,244,0.42)]">
              <span className="inline-block h-px w-6 bg-[rgba(250,248,244,0.25)]" />
              Cres Dynamics · Case Study
            </div>
            <h1 className={`${playfair.className} mb-5 max-w-[640px] text-[clamp(36px,5vw,54px)] font-semibold leading-[1.15] text-[#faf8f4]`}>
              11,700 Nairobi eyes searching for lights — <em className="italic text-[#f0c96a]">finding Spark Lights 254</em>
            </h1>
            <p className="mb-11 max-w-[500px] text-[17px] font-light text-[rgba(250,248,244,0.55)]">
              A website and SEO build that put a Nyamakima lighting store in front of thousands of buyers actively searching Google for chandeliers and ceiling lights in Nairobi.
            </p>

            <div className="mb-11 flex flex-wrap gap-3">
              {[
                { num: '11.7k', label: 'Google impressions' },
                { num: '281', label: 'Clicks from Google search' },
                { num: '7', label: 'Product categories indexed' },
              ].map((s) => (
                <div key={s.label} className="flex flex-col gap-1 rounded-lg border px-5 py-3" style={{ background: 'rgba(196,124,10,0.15)', borderColor: 'rgba(196,124,10,0.3)' }}>
                  <span className={`${playfair.className} text-3xl leading-none text-[#f0c96a]`}>{s.num}</span>
                  <span className="text-xs text-[rgba(250,248,244,0.55)]">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-5 border-t border-[rgba(250,248,244,0.1)] pt-8 md:flex-row md:flex-wrap md:gap-0">
              {[
                { label: 'Client', value: 'Spark Lights 254' },
                { label: 'Project type', value: 'Website + SEO' },
                { label: 'Timeline', value: '4 weeks' },
                {
                  label: 'Live site',
                  value: (
                    <a href="https://sparklights.co.ke" target="_blank" rel="noopener noreferrer" className="text-[#f0c96a] no-underline hover:underline">
                      sparklights.co.ke ↗
                    </a>
                  ),
                },
              ].map((item) => (
                <div key={item.label} className="min-w-[140px] flex-1 border-[rgba(250,248,244,0.07)] pr-8 md:border-r md:last:border-r-0">
                  <div className="mb-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[rgba(250,248,244,0.34)]">{item.label}</div>
                  <div className="text-[15px] font-medium text-[rgba(250,248,244,0.88)]">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[860px] px-6 pt-12 pb-20 md:px-12 md:pt-16">
          <section>
            <div className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.14em]" style={{ color: amber }}>
              <span className="h-px w-12 max-w-[48px] opacity-20" style={{ background: amber }} />
              01 · The Problem
            </div>
            <h2 className={`${playfair.className} mb-5 text-[clamp(26px,3.5vw,34px)] font-semibold leading-tight`}>
              A full lighting showroom at Nyamakima — unknown to anyone online
            </h2>
            <p className="max-w-full md:max-w-[640px] text-[15px] md:text-[16.5px] leading-[1.72] md:leading-[1.78] text-[#3a3428]">
              Spark Lights 254 stocked one of Nairobi&apos;s widest selections of chandeliers, ceiling lights, pendant lights, wall lights, bedroom lights, and outdoor lighting — all available for same-day delivery. But without a website, none of that catalogue existed to a customer searching Google for &ldquo;chandeliers Nairobi&rdquo; or &ldquo;ceiling lights Karen.&rdquo;
            </p>
            <p className="mt-3.5 max-w-full md:max-w-[640px] text-[15px] md:text-[16.5px] leading-[1.72] md:leading-[1.78] text-[#3a3428]">
              Interior designers sourcing lights for a Karen project, homeowners renovating in Kilimani, and landlords furnishing apartments in Westlands — all of them were searching online and finding competitors. Spark Lights had the stock, the prices, and the delivery speed. What they didn&apos;t have was digital visibility.
            </p>
            <div className="mt-8 rounded-r-lg border-l-[3px] px-4 py-5 md:py-6 md:pl-7 md:pr-7" style={{ background: amberLight, borderColor: amber }}>
              <p className={`${playfair.className} text-base md:text-lg italic leading-relaxed text-[#5a3800]`}>
                &ldquo;Every day, Nairobi residents were typing &lsquo;chandeliers Nairobi&rsquo; into Google and finding someone else. Spark Lights 254 had exactly what those buyers needed — they just couldn&apos;t be found.&rdquo;
              </p>
            </div>
          </section>

          <section className="mt-14 border-t pt-14" style={{ borderColor: border }}>
            <div className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.14em]" style={{ color: amber }}>
              <span className="h-px w-12 max-w-[48px] opacity-20" style={{ background: amber }} />
              02 · The Solution
            </div>
            <h2 className={`${playfair.className} mb-5 text-[clamp(26px,3.5vw,34px)] font-semibold leading-tight`}>
              A structured website engineered to rank for lighting searches across Nairobi
            </h2>
            <p className="max-w-full md:max-w-[640px] text-[15px] md:text-[16.5px] leading-[1.72] md:leading-[1.78] text-[#3a3428]">
              Cres Dynamics built Spark Lights 254 a full website with seven dedicated product category pages — Chandeliers, Ceiling Lights, Pendant Lights, Dining Room Lights, Wall Lights, Outdoor Lights, and Bedroom Lights. Each page was individually optimised for the exact search terms Nairobi buyers use, with room-specific targeting to capture searches at every stage of a home renovation.
            </p>
            <p className="mt-3.5 max-w-full md:max-w-[640px] text-[15px] md:text-[16.5px] leading-[1.72] md:leading-[1.78] text-[#3a3428]">
              The site was built around a WhatsApp-first ordering flow — matching how Nairobi buyers prefer to transact — with same-day delivery prominently communicated throughout. A Lighting Guide blog was added to capture additional search traffic from informational queries, and Google Business Profile was optimised to surface the Nyamakima location for local searches.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {['Brand new website', '7 SEO-optimised category pages', 'WhatsApp ordering flow', 'Lighting Guide blog', 'Google Business Profile', 'Local search targeting', 'Room-specific SEO', 'Same-day delivery UX', 'Mobile-first design'].map((tag) => (
                <span key={tag} className="inline-block rounded-full border px-4 py-1.5 text-[13px] font-medium" style={{ background: '#e6f4f2', borderColor: 'rgba(15,92,82,0.2)', color: teal }}>
                  {tag}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-14 border-t pt-14" style={{ borderColor: border }}>
            <StemsScreenshotCarousel
              title="Live build — product categories & mobile UX"
              subtitle="Screenshots from sparklights.co.ke showing category pages, product presentation, and conversion flow."
              images={carouselA}
              autoplayMs={6000}
            />
          </section>

          <section className="mt-14 border-t pt-14" style={{ borderColor: border }}>
            <div className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.14em]" style={{ color: amber }}>
              <span className="h-px w-12 max-w-[48px] opacity-20" style={{ background: amber }} />
              03 · The Results
            </div>
            <h2 className={`${playfair.className} mb-5 text-[clamp(26px,3.5vw,34px)] font-semibold leading-tight`}>
              Real numbers. Verified from Google Search Console.
            </h2>
            <p className="max-w-full md:max-w-[640px] text-[15px] md:text-[16.5px] leading-[1.72] md:leading-[1.78] text-[#3a3428]">
              These are not projections. These are live figures pulled directly from Google Search Console — showing exactly how many Nairobi buyers the website is now reaching through organic search.
            </p>

            <div className="mt-7 grid gap-5 rounded-2xl bg-[#18140a] p-8 md:grid-cols-2">
              <div className="md:col-span-2 text-[11px] uppercase tracking-[0.12em] text-[rgba(240,201,106,0.55)]">
                Google Search Console · Verified data
              </div>
              <div className={`md:col-span-2 ${playfair.className} text-xl text-[#faf8f4]`}>
                Sparklights.co.ke is now in front of thousands of Nairobi buyers every month
              </div>
              <div className="md:col-span-2 border-b border-[rgba(250,248,244,0.08)] pb-4 text-sm text-[rgba(250,248,244,0.48)]">
                Built from zero. No paid ads. Pure organic search visibility from SEO.
              </div>
              <div className="flex flex-col gap-2">
                <span className={`${playfair.className} text-6xl leading-none text-[#f0c96a]`}>11,700</span>
                <span className="text-sm text-[rgba(250,248,244,0.55)]">Times Spark Lights appeared in Google search results</span>
                <span className="text-xs text-[rgba(250,248,244,0.3)]">Google Search Console · Impressions</span>
              </div>
              <div className="flex flex-col gap-2 border-l border-[rgba(250,248,244,0.08)] pl-6">
                <span className={`${playfair.className} text-6xl leading-none text-[#f0c96a]`}>281</span>
                <span className="text-sm text-[rgba(250,248,244,0.55)]">Clicks through to the site from Google search</span>
                <span className="text-xs text-[rgba(250,248,244,0.3)]">Google Search Console · Clicks</span>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                { tf: 'Before launch', num: '0', label: 'Google impressions, zero online presence, zero search traffic', pending: false },
                { tf: 'Live now', num: '7', label: 'Category pages ranked on Google — chandeliers, pendant, wall, outdoor, bedroom, ceiling, dining', pending: false },
                { tf: 'Growing', num: '2.4%', label: 'Click-through rate from Google — 281 buyers clicked through to the site from search', pending: false },
                { tf: 'Next milestone', num: 'Scaling', label: 'Impressions and clicks growing month-on-month as domain authority builds', pending: true },
              ].map((card) => (
                <div key={card.tf} className="relative overflow-hidden rounded-xl border bg-white p-6" style={{ borderColor: border }}>
                  <div className="absolute left-0 right-0 top-0 h-[3px]" style={{ background: card.pending ? amber : teal }} />
                  <div className="mb-2.5 text-[11px] font-medium uppercase tracking-[0.08em]" style={{ color: amber }}>
                    {card.tf}
                  </div>
                  <div className={`${playfair.className} mb-2 leading-none ${card.pending ? 'text-lg text-[#c47c0a]' : 'text-4xl text-[#0f5c52]'}`}>{card.num}</div>
                  <div className="text-[13px] leading-relaxed" style={{ color: muted }}>
                    {card.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium" style={{ background: '#e8f7f4', borderColor: 'rgba(15,92,82,0.2)', color: teal }}>
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#0f5c52]" />
              Live data · Google Search Console verified · Numbers growing monthly
            </div>
          </section>

          <section className="mt-14 border-t pt-14" style={{ borderColor: border }}>
            <div className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.14em]" style={{ color: amber }}>
              <span className="h-px w-12 max-w-[48px] opacity-20" style={{ background: amber }} />
              04 · The Proof
            </div>
            <h2 className={`${playfair.className} mb-5 text-[clamp(26px,3.5vw,34px)] font-semibold leading-tight`}>See it live — and see the numbers</h2>
            <p className="max-w-full md:max-w-[640px] text-[15px] md:text-[16.5px] leading-[1.72] md:leading-[1.78] text-[#3a3428]">
              The website is fully live, ranking across multiple lighting categories in Nairobi. The Google Search Console data is available for any prospect who wants to see it.
            </p>

            <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-xl border bg-white p-6" style={{ borderColor: border }}>
                <div className="mb-3.5 text-[11px] font-medium uppercase tracking-[0.1em]" style={{ color: muted }}>
                  Live website
                </div>
                <a href="https://sparklights.co.ke" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-b border-[rgba(138,84,0,0.25)] pb-0.5 text-[15px] font-medium hover:border-[#8a5400]" style={{ color: amberDeep }}>
                  sparklights.co.ke <span className="-rotate-45 text-sm not-italic">→</span>
                </a>
                <p className="mt-3.5 text-[13.5px] leading-relaxed" style={{ color: muted }}>
                  Chandeliers · Ceiling lights · Pendant lights · Wall lights · Outdoor lights · Bedroom lights · WhatsApp ordering · Same-day delivery Nairobi
                </p>
              </div>

              <div className="rounded-xl border bg-white p-6" style={{ borderColor: border }}>
                <div className="mb-3.5 text-[11px] font-medium uppercase tracking-[0.1em]" style={{ color: muted }}>
                  Why they came to us
                </div>
                <p className="text-[13.5px] leading-relaxed" style={{ color: muted }}>
                  Spark Lights 254 came to Cres Dynamics to grow their client base. The brief was simple — reach more buyers online. The result: 11,700 impressions and 281 clicks from Google, entirely through organic SEO. No paid ads spent.
                </p>
              </div>

              <div className="md:col-span-2 rounded-xl border bg-white p-6" style={{ borderColor: border }}>
                <div className="mb-2 flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg text-xl" style={{ background: amberLight }}>
                    📊
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#18140a]">Verified · Google Search Console data</div>
                    <div className="mt-1 text-[13.5px] leading-relaxed" style={{ color: muted }}>
                      These numbers are pulled directly from Google Search Console — the same dashboard Google provides to verify organic search performance. Not estimated. Not projected. Measured.
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-6">
                  {[
                    { num: '11,700', label: 'Impressions' },
                    { num: '281', label: 'Clicks' },
                    { num: '2.4%', label: 'CTR' },
                  ].map((s) => (
                    <div key={s.label} className="flex flex-col gap-1">
                      <span className={`${playfair.className} text-3xl leading-none text-[#c47c0a]`}>{s.num}</span>
                      <span className="text-[11px] uppercase tracking-[0.08em]" style={{ color: muted }}>
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-14 border-t pb-8 pt-14" style={{ borderColor: border }}>
            <StemsScreenshotCarousel
              title="More live screenshots — store pages and SERP-ready structure"
              subtitle="Additional captures from sparklights.co.ke and category sections."
              images={carouselB}
              autoplayMs={6500}
            />
          </section>

          <footer className="mt-4 flex flex-col items-start justify-between gap-4 border-t pt-8 md:flex-row md:items-center" style={{ borderColor: border }}>
            <div className="text-[13px] font-medium tracking-wide text-[#18140a]">
              CRES <span style={{ color: amber }}>DYNAMICS</span>
            </div>
            <div className="text-xs" style={{ color: muted }}>
              Nairobi, Kenya · Building systems that make businesses run better
            </div>
            <a href="https://cresdynamics.com/" className="text-[13px] font-medium" style={{ color: amberDeep }}>
              cresdynamics.com
            </a>
          </footer>
        </main>
      </div>

      <Footer />
    </div>
  );
}
