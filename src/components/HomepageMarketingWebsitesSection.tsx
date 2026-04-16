'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomepageMarketingWebsitesSection() {
  const meta = {
    kicker: 'Meta Ads',
    title: 'Meta ads are the fastest way\nto buy attention in Nairobi.',
    whyMeta: [
      'Your buyers are already on Instagram and Facebook, scrolling daily.',
      'Meta lets us target by location + interests + behavior, then retarget warm visitors.',
      'It works even if you don’t rank on Google yet—demand first, SEO later.',
    ],
    painInstagramAds: [
      'Boosted posts with no offer = reach with no buyers',
      'DM chaos: leads get lost, responses are slow, no follow-up',
      'No tracking: you don’t know what ad brought real money',
      'Wrong audience: clicks from people who can’t afford you',
    ],
    doItRight: [
      'A clear offer that makes the click feel worth it',
      'Creative angles built for scroll-stopping clarity',
      'A fast follow-up path: WhatsApp / call / booked consult',
      'Tracking so you can scale what’s actually working',
    ],
    href: '/marketing',
    cta: 'Go to Marketing',
    accent: 'var(--teal-accent)',
  };

  const websites = {
    kicker: 'Websites',
    title: 'Your website is the closer.\nIt turns attention into enquiries.',
    body:
      'After the click, people Google you. They compare. They look for proof. A serious website closes the trust gap, answers objections, and makes contacting you effortless—so ads and referrals convert.',
    bullets: [
      'Conversion architecture (CTA paths, forms, WhatsApp, calls)',
      'Credibility + proof (work, case studies, testimonials, clarity)',
      'Mobile-first speed (most buyers are on phones)',
      'SEO-ready structure so you compound long-term',
    ],
    href: '/websites',
    cta: 'Go to Websites',
    accent: 'var(--cres-orange-primary)',
  };

  return (
    <>
      {/* META ADS — full section */}
      <motion.section
        className="relative overflow-hidden text-white"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
        style={{ background: 'var(--cres-gradient-bg)' }}
      >
        <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_60%_40%,rgba(0,201,188,0.10)_0%,transparent_70%)]"
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 md:py-24">
          <div className="flex items-center gap-3 text-[10px] md:text-xs font-semibold tracking-[0.24em] uppercase text-white/70">
            <span className="inline-block h-px w-7 bg-[var(--teal-accent)]" />
            <span>{meta.kicker}</span>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-black leading-[1.05] tracking-tight whitespace-pre-line">
                {meta.title}
              </h2>
              <p className="mt-5 text-base md:text-lg lg:text-xl text-white/85 leading-relaxed font-medium">
                Why Meta? Because it’s where attention already lives—and Meta gives us the controls to target, retarget,
                and scale.
              </p>

              <ul className="mt-6 space-y-3 text-sm md:text-base text-white/80">
                {meta.whyMeta.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--teal-accent)] shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  href={meta.href}
                  className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-xs md:text-sm font-bold uppercase tracking-wide text-white bg-[var(--teal-accent)] hover:opacity-95"
                >
                  {meta.cta}
                </Link>
              </div>
            </div>

            <div className="relative bg-black/30 rounded-2xl border border-white/15 shadow-[0_24px_80px_rgba(0,0,0,0.35)] overflow-hidden">
              <div
                className="absolute -top-16 -right-20 h-56 w-56 rounded-full blur-3xl opacity-35"
                style={{ background: meta.accent }}
                aria-hidden="true"
              />

              <div className="relative p-7 md:p-10">
                <h3 className="text-lg md:text-xl font-black text-white">
                  Pain points with “Instagram ads” (the usual way)
                </h3>
                <ul className="mt-4 space-y-3 text-sm md:text-base text-white/80">
                  {meta.painInstagramAds.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span className="text-[var(--teal-accent)] mt-0.5">▸</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 pt-6 border-t border-white/10">
                  <h4 className="text-sm md:text-base font-bold text-white">
                    How we do Meta properly
                  </h4>
                  <ul className="mt-3 space-y-2 text-sm md:text-base text-white/80">
                    {meta.doItRight.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--teal-accent)] shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* WEBSITES — full section */}
      <motion.section
        className="relative overflow-hidden text-white"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
        style={{ background: 'var(--cres-gradient-bg)' }}
      >
        <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_60%_40%,rgba(243,156,36,0.10)_0%,transparent_70%)]"
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 md:py-24">
          <div className="flex items-center gap-3 text-[10px] md:text-xs font-semibold tracking-[0.24em] uppercase text-white/70">
            <span className="inline-block h-px w-7 bg-[var(--cres-orange-primary)]" />
            <span>{websites.kicker}</span>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-black leading-[1.05] tracking-tight whitespace-pre-line">
                {websites.title}
              </h2>
              <p className="mt-5 text-base md:text-lg lg:text-xl text-white/85 leading-relaxed font-medium">
                {websites.body}
              </p>
              <div className="mt-8">
                <Link
                  href={websites.href}
                  className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-xs md:text-sm font-bold uppercase tracking-wide text-white bg-[var(--cres-orange-primary)] hover:opacity-95"
                >
                  {websites.cta}
                </Link>
              </div>
            </div>

            <div className="relative bg-black/30 rounded-2xl border border-white/15 shadow-[0_24px_80px_rgba(0,0,0,0.35)] overflow-hidden">
              <div
                className="absolute -top-16 -right-20 h-56 w-56 rounded-full blur-3xl opacity-35"
                style={{ background: websites.accent }}
                aria-hidden="true"
              />
              <div className="relative p-7 md:p-10">
                <h3 className="text-lg md:text-xl font-black text-white">What a website must do (to convert)</h3>
                <ul className="mt-4 space-y-3 text-sm md:text-base text-white/80">
                  {websites.bullets.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span className="text-[var(--cres-orange-primary)] mt-0.5">▸</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

