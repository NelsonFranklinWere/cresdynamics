'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const HERO_SLIDES = [
  {
    id: 'websites',
    tag: 'Websites',
    title: 'Websites Serious Businesses Run On',
    body: 'Professional websites that convert. Not brochures – sales tools. Mobile-first, fast, and built to rank so your business is findable in Nairobi and beyond.',
    points: [
      'Conversion-focused: clear CTAs, forms, and WhatsApp so leads don’t slip away',
      'Search-ready: structured so you show up when people look for what you offer',
      'Built for authority: fast loading, mobile-first, designed to support ads',
    ],
    cta: 'Get a website',
    href: '/websites',
  },
  {
    id: 'cresos',
    tag: 'CresOS',
    title: 'CresOS – Business Operating System',
    body: 'One platform for identity, operations, finance, and clients. Built on the Cres Core Engine so your company can scale without losing control.',
    points: [
      'Sales, marketing, finance, and operations in one system',
      'KPI visibility and workflow clarity for structured decision-making',
      'Built for SMEs scaling beyond survival – modular and extensible',
    ],
    cta: 'Explore CresOS',
    href: '/cresos',
  },
  {
    id: 'erp',
    tag: 'Custom ERPs',
    title: 'Custom ERPs for Growing Companies',
    body: 'We map your processes, then build ERPs that fit them. Governance, security, and reporting designed around how you actually operate.',
    points: [
      'Schools, retail, service companies, multi-branch operations',
      'Inventory, finance, and staff tracking with reporting dashboards',
      'Clarity, control, scalability – no more spreadsheets or chaos',
    ],
    cta: 'See ERP approach',
    href: '/erp',
  },
] as const;

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
};

export default function HeroCarousels() {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex(([i]) => [(i + 1) % HERO_SLIDES.length, 1]);
    }, 7000);
    return () => clearInterval(t);
  }, []);

  const goTo = (next: number) => {
    if (next === index) return;
    const dir = next > index ? 1 : -1;
    setIndex([next, dir]);
  };

  const slide = HERO_SLIDES[index];

  return (
    <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-8 flex flex-col flex-1 justify-center py-12">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <div className="flex items-center gap-2">
          <span className="text-[10px] md:text-xs font-semibold tracking-[0.28em] uppercase text-[var(--cres-orange-primary)]">
            {slide.tag}
          </span>
        </div>
        <div className="hidden md:flex items-center gap-2 text-xs text-white/50">
          <span>{index + 1}</span>
          <span className="w-10 h-px bg-white/20" />
          <span>{HERO_SLIDES.length}</span>
        </div>
      </div>

      <div className="relative overflow-hidden flex-1 min-h-0 flex flex-col">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={slide.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
            className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12 py-6 md:py-10 min-h-[280px] md:min-h-[320px]"
          >
            <div className="max-w-2xl text-left">
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 md:mb-6">
                {slide.title}
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed mb-6 md:mb-8">
                {slide.body}
              </p>
              <ul className="space-y-2 md:space-y-3">
                {slide.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/75 text-sm md:text-base">
                    <span className="text-[var(--cres-orange-primary)] mt-1.5 shrink-0">▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex md:flex-col items-center md:items-end gap-3 shrink-0">
              <Link
                href={slide.href}
                className="inline-flex items-center justify-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-white font-bold text-sm md:text-base px-6 py-3 rounded-md uppercase tracking-wide transition-colors"
              >
                {slide.cta}
                <i className="fas fa-arrow-right text-xs" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex items-center justify-between pt-4 md:pt-6">
          <div className="flex gap-1.5">
            {HERO_SLIDES.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  i === index
                    ? 'w-6 bg-[var(--cres-orange-primary)]'
                    : 'w-2 bg-white/25 hover:bg-white/50'
                }`}
                aria-label={`Go to ${s.tag}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() =>
                setIndex(([i]) => [
                  (i - 1 + HERO_SLIDES.length) % HERO_SLIDES.length,
                  -1,
                ])
              }
              className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-white/25 text-white/70 hover:bg-white/10 flex items-center justify-center text-xs md:text-sm"
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() =>
                setIndex(([i]) => [(i + 1) % HERO_SLIDES.length, 1])
              }
              className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-white/25 text-white/70 hover:bg-white/10 flex items-center justify-center text-xs md:text-sm"
              aria-label="Next slide"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
