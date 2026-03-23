'use client';

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
    btn: 'text-[var(--cres-teal-secondary)] hover:bg-[color:rgba(47,166,179,0.12)]',
    dot: 'bg-[var(--cres-teal-secondary)]',
    dotInactive: 'bg-[color:rgba(47,166,179,0.28)] hover:bg-[color:rgba(47,166,179,0.5)]',
  },
  rose: {
    btn: 'text-[var(--cres-orange-primary)] hover:bg-[color:rgba(243,156,36,0.14)]',
    dot: 'bg-[var(--cres-orange-primary)]',
    dotInactive: 'bg-[color:rgba(243,156,36,0.28)] hover:bg-[color:rgba(243,156,36,0.5)]',
  },
  electric: {
    btn: 'text-[var(--cres-deep-navy)] hover:bg-[color:rgba(47,59,82,0.12)]',
    dot: 'bg-[var(--cres-deep-navy)]',
    dotInactive: 'bg-[color:rgba(47,59,82,0.25)] hover:bg-[color:rgba(47,59,82,0.45)]',
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
    <div className={`rounded-xl border border-[color:rgba(47,59,82,0.18)] bg-white p-4 md:p-6 shadow-sm ${className}`}>
      <div className="mb-4">
        <h3 className="font-serif text-lg font-semibold text-[var(--cres-deep-navy)] md:text-xl">
          {title}
        </h3>
        {subtitle ? <p className="mt-1 text-sm text-[color:rgba(47,59,82,0.72)]">{subtitle}</p> : null}
      </div>

      <div className="relative overflow-hidden rounded-lg border border-[color:rgba(47,59,82,0.18)] bg-[var(--neutral-bg)]">
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
              <img
                src={slide.src}
                alt={slide.alt}
                className="h-full w-full object-contain object-top"
                loading="eager"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-between gap-2 border-t border-[color:rgba(47,59,82,0.18)] bg-white/90 px-3 py-2 backdrop-blur-sm">
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
