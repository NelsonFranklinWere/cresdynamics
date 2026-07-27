'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { publicAssetPath } from '@/lib/public-asset';

interface Project {
  id: string;
  title: string;
  industry: string;
  problem: string;
  solution: string;
  outcome: string;
  liveUrl: string;
  caseStudySlug?: string;
  images: string[];
}

const projects: Project[] = [
  {
    id: 'stems-flowers',
    title: 'The Stems Flowers',
    industry: 'Florist · E-commerce (Nairobi CBD)',
    problem: 'Strong in-store trade but invisible online — no reorder path or M-Pesa checkout',
    solution: 'Node.js e-commerce, M-Pesa, SEO, same-day delivery UX — live in 4 weeks',
    outcome: 'Full catalogue live; organic & order metrics tracked from Month 2',
    liveUrl: 'https://thestemsflowers.co.ke',
    caseStudySlug: 'the-stems-flowers',
    images: [
      publicAssetPath('thestems', 'Screenshot 2026-03-21 at 15.01.39.png'),
      publicAssetPath('thestems', 'Screenshot 2026-03-21 at 15.02.13.png'),
      publicAssetPath('thestems', 'Screenshot 2026-03-21 at 15.02.48.png'),
      publicAssetPath('thestems', 'Screenshot 2026-03-21 at 15.03.40.png'),
    ],
  },
  {
    id: 'floral-whispers',
    title: 'Floral Whispers Gifts',
    industry: 'Florist · E-commerce (Referral Engine)',
    problem: 'Premium bouquets & hampers with almost no digital discoverability',
    solution: 'Premium e-commerce, WhatsApp + M-Pesa, SEO — full catalogue indexed',
    outcome: '100+ monthly organic visitors; referral win → The Stems Flowers project',
    liveUrl: 'https://floralwhispersgifts.co.ke',
    caseStudySlug: 'floral-whispers-gifts',
    images: [
      publicAssetPath('floralwhispers', 'Screenshot 2026-03-21 at 15.41.27.png'),
      publicAssetPath('floralwhispers', 'Screenshot 2026-03-21 at 15.41.37.png'),
      publicAssetPath('floralwhispers', 'Screenshot 2026-03-21 at 15.41.53.png'),
      publicAssetPath('floralwhispers', 'Screenshot 2026-03-21 at 15.44.16.png'),
    ],
  },
  {
    id: 'whitelight-store',
    title: 'White Light Store',
    industry: 'Fitness Retail · E-commerce + SEO',
    problem: 'Strong product range but no digital storefront or search visibility',
    solution: 'New e-commerce build, category architecture, and Nairobi-focused SEO',
    outcome: 'Live indexed store; month-2 tracking for traffic, orders, and top categories',
    liveUrl: 'https://whitelightstore.co.ke',
    caseStudySlug: 'whitelight-store',
    images: [
      publicAssetPath('whitelight', 'Screenshot 2026-03-21 at 16.04.27.png'),
      publicAssetPath('whitelight', 'Screenshot 2026-03-21 at 16.04.42.png'),
      publicAssetPath('whitelight', 'Screenshot 2026-03-21 at 16.05.08.png'),
      publicAssetPath('whitelight', 'Screenshot 2026-03-21 at 16.05.58.png'),
    ],
  },
  {
    id: 'mohaa-finest',
    title: 'Mohaa Finest',
    industry: 'Home Decor · Website + SEO',
    problem: 'Trusted in Eastleigh but invisible to online curtain searches',
    solution: 'New website, product sections, and Nairobi/Eastleigh local SEO targeting',
    outcome: 'Live indexed site; month-2 tracking for WhatsApp inquiries and conversions',
    liveUrl: 'https://mohaafinestcurtains.co.ke',
    caseStudySlug: 'mohaa-finest',
    images: [
      publicAssetPath('mohaafinest', 'Screenshot 2026-03-21 at 16.08.19.png'),
      publicAssetPath('mohaafinest', 'Screenshot 2026-03-21 at 16.08.28.png'),
      publicAssetPath('mohaafinest', 'Screenshot 2026-03-21 at 16.08.43.png'),
      publicAssetPath('mohaafinest', 'Screenshot 2026-03-21 at 16.08.49.png'),
    ],
  },
  {
    id: 'spark-lights',
    title: 'Spark Lights 254',
    industry: 'Lighting Retail · Website + SEO',
    problem: 'Large lighting showroom but no Google visibility for Nairobi buyers',
    solution: 'SEO-first site with 7 product categories, local search targeting, and WhatsApp flow',
    outcome: '11.7k impressions, 281 clicks, and 2.4% CTR from organic search',
    liveUrl: 'https://sparklights.co.ke',
    caseStudySlug: 'spark-lights-254',
    images: [
      publicAssetPath('sparklights', 'Screenshot 2026-03-21 at 16.01.25.png'),
      publicAssetPath('sparklights', 'Screenshot 2026-03-21 at 16.01.33.png'),
      publicAssetPath('sparklights', 'Screenshot 2026-03-21 at 16.01.46.png'),
      publicAssetPath('sparklights', 'Screenshot 2026-03-21 at 16.02.24.png'),
    ],
  },
  {
    id: 'och-platform',
    title: 'OCH Platform',
    industry: 'Cybersecurity Talent · Multi-country Platform',
    problem:
      'Cybersecurity talent, mentors, and programmes across Africa were fragmented — no single place to profile skills, match mentors, certify, or collect payments',
    solution:
      'Multi-role platform with AI profiling, mentor matching, certificates, community tools, and M-Pesa billing — built by Cres Dynamics',
    outcome:
      '10,000+ users, 20+ mentors, and presence in 10+ African countries — live in production',
    liveUrl: 'https://och-waitlist.cresdynamics.com',
    images: [
      '/events/hero-stage.jpg',
      '/events/conference-crowd.jpg',
      '/cresOs.businessoperatingsystem.png',
      '/data-connected-analysis.jpg',
    ],
  },
];

function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [current, setCurrent] = useState(0);

  const goTo = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setCurrent(index);
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative group overflow-hidden rounded-xl border border-white/15 bg-black/40">
      <div className="relative h-56 md:h-64 overflow-hidden">
        {images.map((img, index) => (
          <Image
            key={img}
            src={img}
            alt={`${alt} screenshot ${index + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className={`object-cover transition-opacity duration-500 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--navy-dark)]/50 via-transparent to-transparent" />
      </div>

      {images.length > 1 ? (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-[var(--navy-dark)]/80 p-2 text-white opacity-0 transition hover:border-[var(--teal-accent)]/50 hover:bg-black/90 group-hover:opacity-100"
            aria-label="Previous image"
          >
            ←
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-[var(--navy-dark)]/80 p-2 text-white opacity-0 transition hover:border-[var(--teal-accent)]/50 hover:bg-black/90 group-hover:opacity-100"
            aria-label="Next image"
          >
            →
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={(e) => goTo(e, index)}
                className={`h-2 rounded-full transition-all ${
                  index === current
                    ? 'w-4 bg-[var(--orange-energy)]'
                    : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[var(--navy-dark)] text-white">
      <Header />

      <section className="relative overflow-hidden border-b border-white/10 pt-24 pb-14">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% -20%, rgba(47,166,179,0.18), transparent 60%), radial-gradient(ellipse 40% 30% at 100% 40%, rgba(243,156,36,0.1), transparent 50%)',
          }}
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--teal-accent)]">
            Client projects
          </p>
          <h1 className="mb-4 text-4xl font-black leading-[1.08] tracking-tight md:text-6xl">
            Real results.
            <span className="block text-[var(--orange-energy)]">Real businesses.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Production systems delivered for Kenyan businesses — websites, e-commerce, platforms, and
            growth infrastructure with outcomes you can see.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-14 md:py-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((project) => {
            const detailHref = project.caseStudySlug
              ? `/case-studies/${project.caseStudySlug}`
              : project.liveUrl;
            const detailIsExternal = !project.caseStudySlug;

            return (
              <Link
                key={project.id}
                href={detailHref}
                {...(detailIsExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group block overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--teal-accent)]/45 hover:bg-white/[0.07] hover:shadow-[0_20px_50px_-20px_rgba(47,166,179,0.35)]"
              >
                <div className="p-4 pb-0 sm:p-5 sm:pb-0">
                  <ImageCarousel images={project.images} alt={project.title} />
                </div>

                <div className="p-5 sm:p-6">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--orange-energy)]">
                        {project.industry}
                      </p>
                      <h3 className="text-xl font-black leading-snug text-white transition-colors group-hover:text-[var(--teal-accent)] sm:text-2xl">
                        {project.title}
                      </h3>
                    </div>
                    <div className="shrink-0 text-right">
                      <span className="inline-flex rounded-full border border-emerald-400/35 bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-300">
                        Live
                      </span>
                      <p className="mt-1 max-w-[120px] truncate font-mono text-[10px] text-[var(--teal-accent)]/90">
                        {project.liveUrl.replace(/^https?:\/\//, '')}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm leading-relaxed">
                    <p>
                      <span className="font-semibold text-[var(--teal-accent)]">Problem: </span>
                      <span className="text-white/75">{project.problem}</span>
                    </p>
                    <p>
                      <span className="font-semibold text-[var(--teal-accent)]">Solution: </span>
                      <span className="text-white/75">{project.solution}</span>
                    </p>
                    <p>
                      <span className="font-semibold text-[var(--orange-energy)]">Outcome: </span>
                      <span className="text-white/85">{project.outcome}</span>
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <div className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[var(--orange-energy)] px-5 py-2.5 text-sm font-bold text-[var(--navy-dark)] transition group-hover:bg-[var(--orange-energy-hover)] min-w-[10rem]">
                      {project.caseStudySlug ? 'View case study' : 'Open platform'}
                      <span aria-hidden>→</span>
                    </div>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-white/85 transition hover:border-[var(--teal-accent)]/50 hover:bg-white/[0.08] hover:text-white"
                    >
                      Visit live site
                    </a>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
