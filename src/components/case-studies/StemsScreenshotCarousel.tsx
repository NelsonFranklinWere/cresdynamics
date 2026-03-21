'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type StemsScreenshotCarouselProps = {
  title: string;
  subtitle?: string;
  images: { src: string; alt: string }[];
  /** Autoplay interval in ms; 0 to disable */
  autoplayMs?: number;
  className?: string;
  /** Sage for Stems, rose for Floral Whispers, electric for Whitelight */
  accent?: 'sage' | 'rose' | 'electric';
};

const ACCENT = {
  sage: {
    btn: 'text-[#4a6741] hover:bg-[#eef2ec]',
    dot: 'bg-[#4a6741]',
    dotInactive: 'bg-[#e2ddd6] hover:bg-[#c9826b]/50',
  },
  rose: {
    btn: 'text-[#6b3d7a] hover:bg-[#f8edf2]',
    dot: 'bg-[#b85c7a]',
    dotInactive: 'bg-[#e2ddd6] hover:bg-[#b85c7a]/40',
  },
  electric: {
    btn: 'text-[#1a3fb5] hover:bg-[#edf1fc]',
    dot: 'bg-[#1a3fb5]',
    dotInactive: 'bg-[#dde0e8] hover:bg-[#1a3fb5]/35',
  },
} as const;

export default function StemsScreenshotCarousel({
  title,
  subtitle,
  images,
  autoplayMs = 5500,
  className = '',
  accent = 'sage',
}: StemsScreenshotCarouselProps) {
  const a = ACCENT[accent];
  const [index, setIndex] = useState(0);

  const go = useCallback(
    (next: number) => {
      if (images.length === 0) return;
      const n = ((next % images.length) + images.length) % images.length;
      if (n === index) return;
      setIndex(n);
    },
    [index, images.length]
  );

  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    if (!autoplayMs || images.length < 2) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, autoplayMs);
    return () => clearInterval(t);
  }, [autoplayMs, images.length]);

  if (images.length === 0) return null;

  const slide = images[index];

  return (
    <div className={`rounded-xl border border-[#e2ddd6] bg-white p-4 md:p-6 shadow-sm ${className}`}>
      <div className="mb-4">
        <h3 className="font-serif text-lg font-semibold text-[#1c2018] md:text-xl">
          {title}
        </h3>
        {subtitle ? <p className="mt-1 text-sm text-[#7a7a72]">{subtitle}</p> : null}
      </div>

      <div className="relative overflow-hidden rounded-lg border border-[#e2ddd6] bg-[#faf7f2]">
        <div className="relative aspect-[16/10] w-full md:aspect-[1280/800]">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={slide.src + index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-contain object-top"
                sizes="(max-width: 860px) 100vw, 860px"
                loading="eager"
                priority={index === 0}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-between gap-2 border-t border-[#e2ddd6] bg-white/90 px-3 py-2 backdrop-blur-sm">
          <button
            type="button"
            onClick={prev}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition ${a.btn}`}
            aria-label="Previous screenshot"
          >
            ← Prev
          </button>
          <div className="flex flex-1 flex-wrap items-center justify-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                className={`h-2 rounded-full transition-all ${i === index ? `w-6 ${a.dot}` : `w-2 ${a.dotInactive}`}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition ${a.btn}`}
            aria-label="Next screenshot"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
