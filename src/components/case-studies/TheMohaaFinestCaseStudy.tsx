'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StemsScreenshotCarousel from '@/components/case-studies/StemsScreenshotCarousel';
import { mohaaFinestImageItems } from '@/lib/mohaaFinestCaseStudyAssets';
import { Playfair_Display, DM_Sans } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-mh-playfair',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-mh-dm',
});

const cream = '#faf8f3';
const ink = '#1a1710';
const gold = '#b8880a';
const goldLight = '#fdf6e3';
const teal = '#1a5c52';
const muted = '#7a7870';
const border = '#e4dfd6';

export default function TheMohaaFinestCaseStudy() {
  const all = mohaaFinestImageItems();
  const carouselA = all.slice(0, 14);
  const carouselB = all.slice(14);

  return (
    <div className={`min-h-screen ${dmSans.className} ${playfair.variable} ${dmSans.variable}`} style={{ background: cream, color: ink }}>
      <Header />

      <div className="pt-20 md:pt-24">
        <div className="mx-auto max-w-[860px] px-6 pb-4 md:px-12">
          <Link href="/case-studies/" className="text-sm font-medium hover:underline" style={{ color: teal }}>
            ← Case studies
          </Link>
        </div>

        <header className="relative overflow-hidden text-[#faf8f3]" style={{ background: '#1a1208' }}>
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 60% 80% at 80% 40%, rgba(184,136,10,0.18) 0%, transparent 65%), radial-gradient(ellipse 40% 60% at 10% 90%, rgba(26,92,82,0.12) 0%, transparent 60%)',
            }}
          />
          <div className="relative z-[1] mx-auto max-w-[860px] px-6 py-14 md:px-12 md:py-16">
            <div className="mb-9 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[rgba(250,248,243,0.45)]">
              <span className="inline-block h-px w-6 bg-[rgba(250,248,243,0.28)]" />
              Cres Dynamics · Case Study
            </div>
            <h1 className={`${playfair.className} mb-5 max-w-[620px] text-[clamp(36px,5vw,54px)] font-semibold leading-[1.15] text-[#faf8f3]`}>
              Eastleigh&apos;s finest curtains, finally <em className="italic text-[#e8c97a]">found online</em> — Mohaa Finest
            </h1>
            <p className="mb-11 max-w-[480px] text-[17px] font-light text-[rgba(250,248,243,0.58)]">
              A brand new website and SEO strategy for a Nairobi curtain specialist ready to reach customers beyond walk-ins.
            </p>
            <div className="flex flex-col gap-5 border-t border-[rgba(250,248,243,0.1)] pt-8 md:flex-row md:flex-wrap md:gap-0">
              {[
                { label: 'Client', value: 'Mohaa Finest' },
                { label: 'Project type', value: 'Website + SEO' },
                { label: 'Timeline', value: '4 weeks' },
                {
                  label: 'Live site',
                  value: (
                    <a href="https://mohaafinest.co.ke" target="_blank" rel="noopener noreferrer" className="text-[#e8c97a] no-underline hover:underline">
                      mohaafinest.co.ke ↗
                    </a>
                  ),
                },
              ].map((item) => (
                <div key={item.label} className="min-w-[140px] flex-1 border-[rgba(250,248,243,0.08)] pr-8 md:border-r md:last:border-r-0">
                  <div className="mb-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[rgba(250,248,243,0.36)]">{item.label}</div>
                  <div className="text-[15px] font-medium text-[rgba(250,248,243,0.88)]">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[860px] px-6 pb-20 md:px-12">
          <section className="mt-16">
            <div className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.14em]" style={{ color: gold }}>
              <span className="h-px w-12 max-w-[48px] opacity-20" style={{ background: gold }} />
              01 · The Problem
            </div>
            <h2 className={`${playfair.className} mb-5 text-[clamp(26px,3.5vw,34px)] font-semibold leading-tight`}>
              A trusted curtain shop, invisible to everyone searching online
            </h2>
            <p className="max-w-[640px] text-[16.5px] leading-[1.78] text-[#3a3830]">
              Mohaa Finest had built a solid reputation in Eastleigh for quality curtains and interior fabric — but their entire customer base came through foot traffic and word of mouth. Anyone in Nairobi searching online for curtains, blinds, or home decor had no way to find them.
            </p>
            <p className="mt-3.5 max-w-[640px] text-[16.5px] leading-[1.78] text-[#3a3830]">
              Without a website, Mohaa Finest could not compete with newer businesses that ranked on Google, displayed their catalogue online, or captured leads from customers planning a home renovation. The business was capped by geography — limited to whoever physically walked past their door.
            </p>
            <div className="mt-8 rounded-r-lg border-l-[3px] py-6 pl-7 pr-7" style={{ background: goldLight, borderColor: gold }}>
              <p className={`${playfair.className} text-lg italic leading-relaxed text-[#5a3e00]`}>
                &ldquo;The quality was there, the range was there, the experience was there — but if you weren&apos;t in Eastleigh already, Mohaa Finest simply didn&apos;t exist to you.&rdquo;
              </p>
            </div>
          </section>

          <section className="mt-14 border-t pt-14" style={{ borderColor: border }}>
            <div className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.14em]" style={{ color: gold }}>
              <span className="h-px w-12 max-w-[48px] opacity-20" style={{ background: gold }} />
              02 · The Solution
            </div>
            <h2 className={`${playfair.className} mb-5 text-[clamp(26px,3.5vw,34px)] font-semibold leading-tight`}>
              A professional website built to rank and convert
            </h2>
            <p className="max-w-[640px] text-[16.5px] leading-[1.78] text-[#3a3830]">
              Cres Dynamics built Mohaa Finest a brand new website from scratch — clean, professional, and designed to immediately communicate quality to any visitor landing from search. The site showcases their curtain range with clear product categories, helping customers understand the breadth of their offering before even making contact.
            </p>
            <p className="mt-3.5 max-w-[640px] text-[16.5px] leading-[1.78] text-[#3a3830]">
              We layered in on-page SEO from the ground up, targeting high-intent searches like &ldquo;curtains Nairobi,&rdquo; &ldquo;curtains Eastleigh,&rdquo; and &ldquo;home decor Kenya&rdquo; — the exact terms a homeowner or interior designer in Nairobi would type when ready to buy. The goal: turn Mohaa Finest from a local secret into a Google-discoverable business.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {['Brand new website', 'Product catalogue', 'On-page SEO', 'Google indexing', 'Mobile-first design', 'WhatsApp inquiry CTA', 'Local search targeting'].map((tag) => (
                <span key={tag} className="inline-block rounded-full border px-4 py-1.5 text-[13px] font-medium" style={{ background: '#e8f4f2', borderColor: 'rgba(26,92,82,0.2)', color: teal }}>
                  {tag}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-14 border-t pt-14" style={{ borderColor: border }}>
            <StemsScreenshotCarousel
              title="Live build — homepage, catalogue & mobile"
              subtitle="Screenshots from mohaafinest.co.ke showing the new digital storefront and category presentation."
              images={carouselA}
              autoplayMs={6000}
            />
          </section>

          <section className="mt-14 border-t pt-14" style={{ borderColor: border }}>
            <div className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.14em]" style={{ color: gold }}>
              <span className="h-px w-12 max-w-[48px] opacity-20" style={{ background: gold }} />
              03 · The Results
            </div>
            <h2 className={`${playfair.className} mb-5 text-[clamp(26px,3.5vw,34px)] font-semibold leading-tight`}>
              From zero digital presence to Google-indexed and growing
            </h2>
            <p className="max-w-[640px] text-[16.5px] leading-[1.78] text-[#3a3830]">
              Before this project, Mohaa Finest had no website and zero organic search presence. The site launch created a searchable, credible digital footprint for the first time — expanding their potential customer reach from Eastleigh foot traffic to anyone in Nairobi searching online.
            </p>

            <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { tf: 'Before Cres Dynamics', num: '0', label: 'Online presence — no website, no Google ranking, no digital enquiries', pending: false },
                { tf: 'Post-launch', num: 'Live', label: 'Indexed on Google — now appearing for curtain and home decor searches in Nairobi', pending: false },
                { tf: 'Month 2 target', num: '100+', label: 'Monthly visitors from organic Nairobi search queries', pending: false },
                { tf: 'Tracking from Month 2', num: 'In progress', label: 'WhatsApp inquiry volume, lead conversions, and repeat customer data', pending: true },
              ].map((card) => (
                <div key={card.tf} className="relative overflow-hidden rounded-xl border bg-white p-6" style={{ borderColor: border }}>
                  <div className="absolute left-0 right-0 top-0 h-[3px]" style={{ background: card.pending ? gold : teal }} />
                  <div className="mb-2.5 text-[11px] font-medium uppercase tracking-[0.08em]" style={{ color: gold }}>
                    {card.tf}
                  </div>
                  <div className={`${playfair.className} mb-2 leading-none ${card.pending ? 'text-lg text-[#b8880a]' : 'text-4xl text-[#1a5c52]'}`}>{card.num}</div>
                  <div className="text-[13px] leading-relaxed" style={{ color: muted }}>
                    {card.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-start gap-3 rounded-lg border px-5 py-4 text-sm text-[#5a4000]" style={{ background: '#fffbf0', borderColor: 'rgba(184,136,10,0.28)' }}>
              <span className="mt-1 h-2 w-2 flex-shrink-0 animate-pulse rounded-full bg-[#b8880a]" />
              <div>Project completed. Website live and indexed. Full metrics tracking begins Month 2 — this case study will be updated with enquiry and conversion data.</div>
            </div>
          </section>

          <section className="mt-14 border-t pt-14" style={{ borderColor: border }}>
            <div className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.14em]" style={{ color: gold }}>
              <span className="h-px w-12 max-w-[48px] opacity-20" style={{ background: gold }} />
              04 · The Proof
            </div>
            <h2 className={`${playfair.className} mb-5 text-[clamp(26px,3.5vw,34px)] font-semibold leading-tight`}>See it live</h2>
            <p className="max-w-[640px] text-[16.5px] leading-[1.78] text-[#3a3830]">
              The site is fully live and ranking for curtain-related searches in Nairobi — opening the business to customers well beyond Eastleigh.
            </p>

            <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-xl border bg-white p-6" style={{ borderColor: border }}>
                <div className="mb-3.5 text-[11px] font-medium uppercase tracking-[0.1em]" style={{ color: muted }}>
                  Live website
                </div>
                <a href="https://mohaafinest.co.ke" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-b border-[rgba(26,92,82,0.25)] pb-0.5 text-[15px] font-medium hover:border-[#1a5c52]" style={{ color: teal }}>
                  mohaafinest.co.ke <span className="-rotate-45 text-sm not-italic">→</span>
                </a>
                <p className="mt-3.5 text-[13.5px] leading-relaxed" style={{ color: muted }}>
                  Curtain catalogue · WhatsApp inquiries · SEO-optimised for Nairobi and Eastleigh searches
                </p>
              </div>

              <div className="rounded-xl border bg-white p-6" style={{ borderColor: border }}>
                <div className="mb-3.5 text-[11px] font-medium uppercase tracking-[0.1em]" style={{ color: muted }}>
                  Why they came to us
                </div>
                <p className="text-[13.5px] leading-relaxed" style={{ color: muted }}>
                  Mohaa Finest reached out to Cres Dynamics specifically to grow their client base beyond walk-ins — a clear brief that drove every decision in the build, from site structure to keyword targeting.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-14 border-t pb-8 pt-14" style={{ borderColor: border }}>
            <StemsScreenshotCarousel
              title="More live screenshots — product sections & inquiry paths"
              subtitle="Additional page captures from mohaafinest.co.ke, including mobile-ready layouts."
              images={carouselB}
              autoplayMs={6500}
            />
          </section>

          <footer className="mt-4 flex flex-col items-start justify-between gap-4 border-t pt-8 md:flex-row md:items-center" style={{ borderColor: border }}>
            <div className="text-[13px] font-medium tracking-wide text-[#1a1710]">
              CRES <span style={{ color: teal }}>DYNAMICS</span>
            </div>
            <div className="text-xs" style={{ color: muted }}>
              Nairobi, Kenya · Web &amp; Digital Solutions
            </div>
            <a href="https://cresdynamics.com/" className="text-[13px] font-medium" style={{ color: teal }}>
              cresdynamics.com
            </a>
          </footer>
        </main>
      </div>

      <Footer />
    </div>
  );
}
