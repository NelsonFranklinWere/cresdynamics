'use client';

import { useEffect, useState } from 'react';

const CHAR_MS = 22;
const PAUSE_BETWEEN_ITEMS_MS = 350;
const PAUSE_BEFORE_LOOP_MS = 4500;

type Props = {
  items: readonly string[];
};

export default function TypewriterBoard({ items }: Props) {
  const [lines, setLines] = useState<string[]>(() => items.map(() => ''));
  const [activeIndex, setActiveIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setLines([...items]);
      return;
    }
    setLines(items.map(() => ''));
    setActiveIndex(0);
    setCharIndex(0);
  }, [items, reduceMotion]);

  useEffect(() => {
    if (reduceMotion) return;

    const full = items[activeIndex] ?? '';

    if (charIndex < full.length) {
      const timer = setTimeout(() => {
        setLines((prev) => {
          const next = [...prev];
          next[activeIndex] = full.slice(0, charIndex + 1);
          return next;
        });
        setCharIndex((c) => c + 1);
      }, CHAR_MS);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      if (activeIndex < items.length - 1) {
        setActiveIndex((i) => i + 1);
        setCharIndex(0);
      } else {
        setLines(items.map(() => ''));
        setActiveIndex(0);
        setCharIndex(0);
      }
    }, activeIndex < items.length - 1 ? PAUSE_BETWEEN_ITEMS_MS : PAUSE_BEFORE_LOOP_MS);

    return () => clearTimeout(timer);
  }, [activeIndex, charIndex, items, reduceMotion]);

  return (
    <div
      className="board-panel rounded-xl border border-white/15 bg-black/55 backdrop-blur-sm p-5 sm:p-7 md:p-8 shadow-2xl"
      aria-live={reduceMotion ? 'off' : 'polite'}
      aria-label="Business pain points"
    >
      <ul className="space-y-4 md:space-y-5 font-mono text-left">
        {items.map((full, idx) => {
          const text = lines[idx] ?? '';
          const isTyping = !reduceMotion && idx === activeIndex && charIndex < full.length;
          const isDone = text.length === full.length && full.length > 0;
          const isPending = !reduceMotion && idx > activeIndex;

          return (
            <li
              key={idx}
              className={`flex items-start gap-3 sm:gap-4 transition-opacity duration-300 ${
                isPending ? 'opacity-40' : 'opacity-100'
              }`}
            >
              <span
                className={`flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-md text-xs sm:text-sm font-bold tabular-nums ${
                  isDone || isTyping
                    ? 'bg-[var(--orange-energy)]/90 text-white'
                    : 'bg-white/10 text-white/60'
                }`}
              >
                {idx + 1}
              </span>
              <p className="text-xs sm:text-sm md:text-[15px] text-white/92 leading-relaxed min-h-[2.75rem] sm:min-h-[3rem]">
                {text}
                {isTyping && (
                  <span className="inline-block w-[2px] h-[1em] bg-[var(--teal-accent)] ml-0.5 align-middle animate-pulse" aria-hidden />
                )}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
