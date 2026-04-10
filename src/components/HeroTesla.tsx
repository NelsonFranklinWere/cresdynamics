'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const CAROUSEL_SLIDES = [
  {
    id: 'finance',
    src: '/image1.jpg',
    alt: 'Finance and revenue platform dashboard',
    caption: 'Finance platforms',
    href: '/finance-platforms',
  },
  {
    id: 'erp',
    src: '/image2.jpg',
    alt: 'Custom ERP system interface',
    caption: 'Custom ERP',
    href: '/erp',
  },
  {
    id: 'cresos',
    src: '/image3.jpg',
    alt: 'CresOS business operating system',
    caption: 'CresOS',
    href: '/cresos',
  },
] as const;

const INTERVAL_MS = 5500;

export default function HeroTesla() {
  const [index, setIndex] = useState(0);
  const [imgFailed, setImgFailed] = useState(false);

  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((current) => {
        const next = current + dir;
        if (next < 0) return CAROUSEL_SLIDES.length - 1;
        if (next >= CAROUSEL_SLIDES.length) return 0;
        return next;
      });
    },
    []
  );

  useEffect(() => {
    setImgFailed(false);
  }, [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % CAROUSEL_SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  const slide = CAROUSEL_SLIDES[index];

  return (
    <motion.section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden py-16 md:py-20"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
      style={{ background: 'var(--cres-gradient-bg)' }}
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          <div className="text-left">
            <motion.div
              className="text-[11px] md:text-xs font-semibold tracking-[0.24em] uppercase text-white/70 mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
            >
              Nairobi, Kenya · Est. 2024
            </motion.div>
            <motion.h1
              className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
              style={{ textShadow: '0 2px 12px rgba(0,0,0,0.3)' }}
            >
              <span className="text-[var(--orange-energy)]">Systems</span> Businesses Run On.
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-white/90 max-w-xl mb-10 font-medium leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
            >
              We build the operational infrastructure that growing Kenyan businesses run on – websites, ERPs,
              finance platforms, and AI automation. When you&apos;ve outgrown WhatsApp and Excel, this is what comes
              next.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <Link
                href="/how-we-build"
                className="inline-flex items-center justify-center gap-2 bg-[var(--orange-energy)] hover:bg-[var(--orange-energy-hover)] text-white font-bold text-sm px-8 py-3.5 rounded-lg transition-colors uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              >
                How We Build
                <i className="fas fa-chevron-right text-xs" aria-hidden />
              </Link>
              <Link
                href="/proof-of-work"
                className="inline-flex items-center justify-center gap-2 border-2 border-[var(--teal-accent)] text-white hover:bg-[var(--teal-accent)]/20 font-bold text-sm px-8 py-3.5 rounded-lg transition-colors uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-[var(--teal-accent)] focus:ring-offset-2 focus:ring-offset-transparent"
              >
                Our Work
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="w-full max-w-xl mx-auto lg:max-w-none lg:mx-0"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <div
              className="relative rounded-2xl border border-white/15 bg-black/25 shadow-[0_24px_80px_rgba(0,0,0,0.35)] overflow-hidden aspect-[4/3] sm:aspect-[16/10]"
              aria-roledescription="carousel"
              aria-label="Finance, ERP, and CresOS product previews"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  className="absolute inset-0"
                  initial={{ opacity: 0, x: 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -28 }}
                  transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
                >
                  {!imgFailed ? (
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="absolute inset-0 w-full h-full object-cover object-left-top"
                      onError={() => setImgFailed(true)}
                    />
                  ) : (
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[var(--navy-primary)]/90 to-black/80 px-6 text-center"
                      aria-hidden
                    >
                      <span className="text-white/50 text-xs font-semibold tracking-[0.2em] uppercase">
                        Preview
                      </span>
                      <span className="text-white text-lg font-bold">{slide.caption}</span>
                      <span className="text-white/55 text-xs max-w-xs leading-relaxed">
                        Add <span className="text-white/75">image1.jpg</span>,{' '}
                        <span className="text-white/75">image2.jpg</span>, or{' '}
                        <span className="text-white/75">image3.jpg</span> in the public folder.
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                    <Link
                      href={slide.href}
                      className="text-white text-sm font-semibold tracking-wide drop-shadow-md hover:text-[var(--orange-energy)] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
                    >
                      {slide.caption}
                      <span className="ml-1" aria-hidden>
                        →
                      </span>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>

              <button
                type="button"
                onClick={() => go(-1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/45 hover:bg-black/60 text-white flex items-center justify-center border border-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Previous slide"
              >
                <i className="fas fa-chevron-left text-sm" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/45 hover:bg-black/60 text-white flex items-center justify-center border border-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Next slide"
              >
                <i className="fas fa-chevron-right text-sm" aria-hidden />
              </button>
            </div>

            <div
              className="flex justify-center gap-2 mt-5"
              role="tablist"
              aria-label="Carousel slides"
            >
              {CAROUSEL_SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show ${s.caption}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent ${
                    i === index ? 'w-8 bg-[var(--orange-energy)]' : 'w-2 bg-white/35 hover:bg-white/55'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
