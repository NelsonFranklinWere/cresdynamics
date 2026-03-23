'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StemsScreenshotCarousel from '@/components/case-studies/StemsScreenshotCarousel';
import { whitelightImageItems } from '@/lib/whitelightCaseStudyAssets';
import { Playfair_Display, DM_Sans } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-wl-playfair',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-wl-dm',
});

const cream = 'var(--neutral-bg)';
const ink = 'var(--cres-deep-navy)';
const electric = 'var(--cres-deep-navy)';
const electricLight = 'rgba(47, 59, 82, 0.12)';
const muted = 'rgba(47, 59, 82, 0.72)';
const border = 'rgba(47, 59, 82, 0.18)';
const orange = 'var(--cres-orange-primary)';

export default function TheWhitelightCaseStudy() {
  const all = whitelightImageItems();
  const carouselA = all.slice(0, 7);
  const carouselB = all.slice(7);

  return (
    <div className={`min-h-screen ${dmSans.className} ${playfair.variable} ${dmSans.variable}`} style={{ background: cream, color: ink }}>
      <Header />

      <div className="pt-20 md:pt-24">
        <div className="mx-auto max-w-[860px] px-6 pb-4 md:px-12">
          <Link href="/case-studies/" className="text-sm font-medium hover:underline" style={{ color: electric }}>
            ← Case studies
          </Link>
        </div>

        <header className="relative overflow-hidden text-[var(--cres-white)]" style={{ background: 'var(--cres-gradient-bg)' }}>
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 55% 75% at 90% 30%, rgba(26,63,181,0.22) 0%, transparent 60%), radial-gradient(ellipse 40% 55% at 5% 80%, rgba(196,92,16,0.12) 0%, transparent 55%)',
            }}
          />
          <div className="relative z-[1] mx-auto max-w-[860px] px-6 py-14 md:px-12 md:py-16">
            <div className="mb-9 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[rgba(248,249,251,0.42)]">
              <span className="inline-block h-px w-6 bg-[rgba(248,249,251,0.25)]" />
              Cres Dynamics · Case Study
            </div>
            <h1 className={`${playfair.className} mb-5 max-w-[640px] text-[clamp(36px,5vw,54px)] font-semibold leading-[1.15] text-[#f8f9fb]`}>
              Premium footwear and gym gear, <em className="italic text-[#8ca4f0]">built to be found</em> — Whitelight Store
            </h1>
            <p className="mb-11 max-w-[480px] text-[17px] font-light text-[rgba(248,249,251,0.55)]">
              A brand new e-commerce website and SEO strategy for a Nairobi fitness and footwear store ready to scale beyond its existing audience.
            </p>
            <div className="flex flex-col gap-5 border-t border-[rgba(248,249,251,0.1)] pt-8 md:flex-row md:flex-wrap md:gap-0">
              {[
                { label: 'Client', value: 'Whitelight Store' },
                { label: 'Project type', value: 'E-commerce Website + SEO' },
                { label: 'Timeline', value: '4 weeks' },
                {
                  label: 'Live site',
                  value: (
                    <a href="https://whitelightstore.co.ke" target="_blank" rel="noopener noreferrer" className="text-[#8ca4f0] no-underline hover:underline">
                      whitelightstore.co.ke ↗
                    </a>
                  ),
                },
              ].map((item) => (
                <div key={item.label} className="min-w-[140px] flex-1 border-[rgba(248,249,251,0.07)] pr-8 md:border-r md:last:border-r-0">
                  <div className="mb-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[rgba(248,249,251,0.34)]">{item.label}</div>
                  <div className="text-[15px] font-medium text-[rgba(248,249,251,0.88)]">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[860px] px-6 pt-12 pb-20 md:px-12 md:pt-16">
          <section>
            <div className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.14em]" style={{ color: electric }}>
              <span className="h-px w-12 max-w-[48px] opacity-20" style={{ background: electric }} />
              01 · The Problem
            </div>
            <h2 className={`${playfair.className} mb-5 text-[clamp(26px,3.5vw,34px)] font-semibold leading-tight`}>Great products, no digital shelf to put them on</h2>
            <p className="max-w-full md:max-w-[640px] text-[15px] md:text-[16.5px] leading-[1.72] md:leading-[1.78] text-[#32363f]">
              Whitelight Store carried a strong range — running shoes, trail shoes, gym footwear, shorts, sweatpants, and yoga accessories — but had no professional online presence to match. Nairobi&apos;s growing fitness community was shopping online for exactly these products, and Whitelight had no way to reach them.
            </p>
            <p className="mt-3.5 max-w-full md:max-w-[640px] text-[15px] md:text-[16.5px] leading-[1.72] md:leading-[1.78] text-[#32363f]">
              Without an e-commerce website, every potential sale that started with a Google search ended at a competitor. The business needed more than just a website — it needed a platform that could present a premium product range in a way that converted browsers into buyers, and that would rank when Nairobi&apos;s runners, gym-goers, and fitness enthusiasts searched for gear.
            </p>
            <div className="mt-8 rounded-r-lg border-l-[3px] px-4 py-5 md:py-6 md:pl-7 md:pr-7" style={{ background: electricLight, borderColor: electric }}>
              <p className={`${playfair.className} text-base md:text-lg italic leading-relaxed text-[#0e2060]`}>
                &ldquo;Nairobi&apos;s fitness market is growing fast. Without a proper online store, Whitelight was watching that growth pass them by.&rdquo;
              </p>
            </div>
          </section>

          <section className="mt-14 border-t pt-14" style={{ borderColor: border }}>
            <div className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.14em]" style={{ color: electric }}>
              <span className="h-px w-12 max-w-[48px] opacity-20" style={{ background: electric }} />
              02 · The Solution
            </div>
            <h2 className={`${playfair.className} mb-5 text-[clamp(26px,3.5vw,34px)] font-semibold leading-tight`}>An e-commerce store built for Nairobi&apos;s fitness community</h2>
            <p className="max-w-full md:max-w-[640px] text-[15px] md:text-[16.5px] leading-[1.72] md:leading-[1.78] text-[#32363f]">Cres Dynamics built Whitelight Store a brand new e-commerce website from scratch — premium feel, mobile-optimised, and structured around their product categories: running shoes, trail shoes, gym footwear, and accessories including shorts, sweatpants, and yoga mats. Each section was designed to speak directly to the customer segment most likely to buy it.</p>
            <p className="mt-3.5 max-w-full md:max-w-[640px] text-[15px] md:text-[16.5px] leading-[1.72] md:leading-[1.78] text-[#32363f]">We built in on-page SEO targeting the search terms Nairobi&apos;s fitness community actually uses — &ldquo;running shoes Kenya,&rdquo; &ldquo;gym shoes Nairobi,&rdquo; &ldquo;trail shoes Kenya,&rdquo; &ldquo;yoga accessories Nairobi&rdquo; — so that Whitelight would appear precisely when a motivated buyer was looking. The entire site was built to convert, not just inform.</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {['Brand new e-commerce site', 'Product catalogue', 'On-page SEO', 'Fitness niche targeting', 'Mobile-first design', 'Category architecture', 'WhatsApp + M-Pesa', 'Google indexing'].map((tag) => (
                <span key={tag} className="inline-block rounded-full border px-4 py-1.5 text-[13px] font-medium" style={{ background: '#fdf0e8', borderColor: 'rgba(196,92,16,0.2)', color: orange }}>
                  {tag}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-14 border-t pt-14" style={{ borderColor: border }}>
            <StemsScreenshotCarousel title="Live build — catalogue & performance layout" subtitle="Screenshots from whitelightstore.co.ke — category architecture, PDPs, and mobile presentation." images={carouselA} autoplayMs={6000} accent="electric" />
          </section>

          <section className="mt-14 border-t pt-14" style={{ borderColor: border }}>
            <div className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.14em]" style={{ color: electric }}>
              <span className="h-px w-12 max-w-[48px] opacity-20" style={{ background: electric }} />
              03 · The Results
            </div>
            <h2 className={`${playfair.className} mb-5 text-[clamp(26px,3.5vw,34px)] font-semibold leading-tight`}>A digital storefront that works while the owner sleeps</h2>
            <p className="max-w-full md:max-w-[640px] text-[15px] md:text-[16.5px] leading-[1.72] md:leading-[1.78] text-[#32363f]">Whitelight Store went from no online presence to a fully indexed, searchable e-commerce platform — open to every Nairobi runner, gym member, and fitness enthusiast searching for gear. The foundation is built; the metrics are now being tracked.</p>
            <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                { tf: 'Before launch', num: '0', label: 'Digital storefront — no website, no search rankings, no online orders', pending: false },
                { tf: 'Post-launch', num: 'Live', label: 'Fully indexed on Google — appearing for running, gym, and fitness searches in Nairobi', pending: false },
                { tf: 'Month 2 target', num: '150+', label: 'Monthly organic visitors from fitness and footwear search queries in Kenya', pending: false },
                { tf: 'Tracking from Month 2', num: 'In progress', label: 'Order volume, top-selling categories, and customer acquisition cost data', pending: true },
              ].map((card) => (
                <div key={card.tf} className="relative overflow-hidden rounded-xl border bg-white p-6" style={{ borderColor: border }}>
                  <div className="absolute left-0 right-0 top-0 h-[3px]" style={{ background: card.pending ? orange : electric }} />
                  <div className="mb-2.5 text-[11px] font-medium uppercase tracking-[0.08em]" style={{ color: card.pending ? orange : electric }}>{card.tf}</div>
                  <div className={`${playfair.className} mb-2 leading-none ${card.pending ? 'text-lg text-[#c45c10]' : 'text-4xl text-[#1a3fb5]'}`}>{card.num}</div>
                  <div className="text-[13px] leading-relaxed" style={{ color: muted }}>{card.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-start gap-3 rounded-lg border px-5 py-4 text-sm text-[#6a2e08]" style={{ background: '#fdf3ec', borderColor: 'rgba(196,92,16,0.25)' }}>
              <span className="mt-1 h-2 w-2 flex-shrink-0 animate-pulse rounded-full bg-[#c45c10]" />
              <div>Project completed. Site live and indexed. Full performance metrics tracking begins Month 2 — order data, top product views, and conversion rates will be reported.</div>
            </div>
          </section>

          <section className="mt-14 border-t pt-14" style={{ borderColor: border }}>
            <div className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.14em]" style={{ color: electric }}>
              <span className="h-px w-12 max-w-[48px] opacity-20" style={{ background: electric }} />
              04 · The Proof
            </div>
            <h2 className={`${playfair.className} mb-5 text-[clamp(26px,3.5vw,34px)] font-semibold leading-tight`}>See it live</h2>
            <p className="max-w-full md:max-w-[640px] text-[15px] md:text-[16.5px] leading-[1.72] md:leading-[1.78] text-[#32363f]">The store is live, indexed, and open for business — serving Nairobi&apos;s fitness community with premium footwear and gym accessories online.</p>
            <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-xl border bg-white p-6" style={{ borderColor: border }}>
                <div className="mb-3.5 text-[11px] font-medium uppercase tracking-[0.1em]" style={{ color: muted }}>Live website</div>
                <a href="https://whitelightstore.co.ke" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-b border-[rgba(26,63,181,0.25)] pb-0.5 text-[15px] font-medium hover:border-[#1a3fb5]" style={{ color: electric }}>
                  whitelightstore.co.ke <span className="-rotate-45 text-sm not-italic">→</span>
                </a>
                <p className="mt-3.5 text-[13.5px] leading-relaxed" style={{ color: muted }}>Running shoes · Trail shoes · Gym footwear · Shorts · Sweatpants · Yoga accessories · M-Pesa checkout</p>
              </div>

              <div className="rounded-xl border bg-white p-6" style={{ borderColor: border }}>
                <div className="mb-3.5 text-[11px] font-medium uppercase tracking-[0.1em]" style={{ color: muted }}>Why they came to us</div>
                <p className="text-[13.5px] leading-relaxed" style={{ color: muted }}>Whitelight Store came to Cres Dynamics with a clear goal — grow their client base and reach customers beyond their existing audience. Every decision in the build, from SEO keyword targeting to category structure, was made with that single objective in mind.</p>
              </div>
            </div>
          </section>

          <section className="mt-14 border-t pb-8 pt-14" style={{ borderColor: border }}>
            <StemsScreenshotCarousel title="Checkout flow, mobile UX & product discovery" subtitle="More views from whitelightstore.co.ke — conversion flow and responsive product browsing." images={carouselB} autoplayMs={6500} accent="electric" />
          </section>

          <footer className="mt-4 flex flex-col items-start justify-between gap-4 border-t pt-8 md:flex-row md:items-center" style={{ borderColor: border }}>
            <div className="text-[13px] font-medium tracking-wide text-[#111318]">CRES <span style={{ color: electric }}>DYNAMICS</span></div>
            <div className="text-xs" style={{ color: muted }}>Nairobi, Kenya · Building systems that make businesses run better</div>
            <a href="https://cresdynamics.com/" className="text-[13px] font-medium" style={{ color: electric }}>cresdynamics.com</a>
          </footer>
        </main>
      </div>

      <Footer />
    </div>
  );
}
