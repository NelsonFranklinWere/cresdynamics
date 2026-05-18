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
  caseStudySlug: string;
  images: string[];
}

const projects: Project[] = [
  {
    id: 'stems-flowers',
    title: 'The Stems Flowers',
    industry: 'Florist · E-commerce (Nairobi CBD)',
    problem: 'Strong in-store trade but invisible online — no reorder path or M-Pesa checkout',
    solution: 'Next.js e-commerce, M-Pesa, SEO, same-day delivery UX — live in 4 weeks',
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
  }
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
    <div className="relative group overflow-hidden rounded-xl border border-white/10 bg-black/20">
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
      </div>

      {/* Carousel Controls */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
            aria-label="Previous image"
          >
            ←
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
            aria-label="Next image"
          >
            →
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => goTo(e, index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === current 
                    ? 'bg-[var(--orange-energy)] w-4' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[var(--neutral-bg)]">
      <Header />

      {/* Hero */}
      <section className="pt-20 pb-12 px-6 border-b border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-[var(--orange-energy)]/10 text-[var(--orange-energy)] text-xs font-semibold tracking-[2px] mb-4">
            CLIENT PROJECTS
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[var(--navy-primary)] tracking-[-1.5px] mb-4">
            Real Results.<br />Real Businesses.
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-[var(--navy-primary)]/70">
            Production systems we have delivered for Kenyan businesses — websites, e-commerce, and growth infrastructure that drive measurable outcomes.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link 
              key={project.id} 
              href={`/case-studies/${project.caseStudySlug}`}
              className="group block rounded-3xl border border-white/10 bg-white hover:border-[var(--orange-energy)]/40 transition-all duration-200 overflow-hidden shadow-sm hover:shadow-xl"
            >
              {/* Carousel */}
              <div className="p-5 pb-0">
                <ImageCarousel images={project.images} alt={project.title} />
              </div>

              <div className="p-6 pt-5">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-xs uppercase tracking-[1.5px] text-[var(--orange-energy)] font-semibold">
                      {project.industry}
                    </div>
                    <h3 className="text-2xl font-black text-[var(--navy-primary)] group-hover:text-[var(--orange-energy)] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-gray-400">LIVE</div>
                    <div className="text-xs text-[var(--teal-accent)] font-mono truncate max-w-[120px]">
                      {project.liveUrl.replace('https://', '')}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-[var(--navy-primary)]">Problem: </span>
                    <span className="text-[var(--navy-primary)]/80">{project.problem}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[var(--navy-primary)]">Solution: </span>
                    <span className="text-[var(--navy-primary)]/80">{project.solution}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[var(--navy-primary)]">Outcome: </span>
                    <span className="text-[var(--navy-primary)]/80">{project.outcome}</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <div className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--orange-energy)] px-5 py-2.5 text-sm font-bold text-white group-hover:bg-[#E87528] transition">
                    View Case Study 
                    <span className="transition group-hover:translate-x-0.5">→</span>
                  </div>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-4 py-2.5 text-xs font-semibold text-[var(--navy-primary)] hover:bg-gray-50 transition"
                  >
                    Visit Live Site
                  </a>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
