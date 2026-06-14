'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  display: 'swap',
});

const HERO_BACKGROUNDS = [
  { id: 'team', src: '/devs-teams-techies-discussing.jpg' },
  { id: 'data', src: '/data-connected-analysis.jpg' },
  { id: 'nairobi', src: '/connecting-nairobi.jpg' },
  { id: 'growth', src: '/tech-growth.jpg' },
] as const;

const HERO_PREVIEWS = [
  {
    id: 'finance',
    src: '/finance.and.revenue.png',
    alt: 'Finance and revenue platform dashboard',
    caption: 'Finance',
    href: '/finance-platforms',
  },
  {
    id: 'cresos',
    src: '/cresOs.businessoperatingsystem.png',
    alt: 'CresOS business operating system',
    caption: 'CresOS',
    href: '/cresos',
  },
  {
    id: 'ai',
    src: '/ai.automation.png',
    alt: 'AI automation system',
    caption: 'AI Automation',
    href: '/ai-automation',
  },
] as const;

const BG_INTERVAL_MS = 8000;

export default function HeroTesla() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const bgTimer = setInterval(() => {
      setBgIndex((i) => (i + 1) % HERO_BACKGROUNDS.length);
    }, BG_INTERVAL_MS);
    return () => clearInterval(bgTimer);
  }, []);

  const bg = HERO_BACKGROUNDS[bgIndex];

  return (
    <motion.section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden py-16 md:py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0" aria-hidden>
        <AnimatePresence mode="sync">
          <motion.div
            key={bg.id}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
            <Image
              src={bg.src}
              alt=""
              fill
              unoptimized
              priority={bgIndex === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/72" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.h1
            className={`${playfair.className} text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold text-white leading-[1.18] tracking-[-0.02em] mb-5 md:mb-6`}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="block hero-title-underline pb-2">
              Your business is leaking money
            </span>
            <span className="block hero-title-underline pb-2 mt-1 md:mt-2">
              through systems that were never built for it.
            </span>
          </motion.h1>

          <motion.p
            className="text-xs sm:text-sm text-white/75 max-w-xl leading-snug mb-8 md:mb-9 font-normal tracking-normal"
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Manual invoicing. WhatsApp order management. Stock on spreadsheets. Revenue you cannot see
            in real time. We build custom systems that fix all of that — designed around how your
            business actually works.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 md:mb-9"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/contact" className="hero-btn-primary">
              Show me what this looks like
              <span className="hero-btn-arrow" aria-hidden>→</span>
            </Link>
            <Link href="/case-studies" className="hero-btn-glass">
              See what we have built
              <span className="hero-btn-arrow" aria-hidden>→</span>
            </Link>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-end justify-center gap-3 md:gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            aria-label="Live system previews"
          >
            {HERO_PREVIEWS.map((preview) => (
              <Link
                key={preview.id}
                href={preview.href}
                className="group block w-[7.5rem] sm:w-[8.5rem] md:w-[9.5rem] shrink-0"
              >
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden ring-1 ring-white/25 shadow-lg group-hover:ring-white/50 group-hover:scale-[1.03] transition-all duration-300">
                  <Image
                    src={preview.src}
                    alt={preview.alt}
                    fill
                    unoptimized
                    sizes="120px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-black/65 px-2 py-1">
                    <span className="text-[10px] sm:text-[11px] font-medium text-white/95 truncate block">
                      {preview.caption}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
