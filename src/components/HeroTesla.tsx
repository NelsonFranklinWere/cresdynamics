'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HeroTesla() {
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col justify-end md:justify-center overflow-hidden">
      {/* Background: system image with gradient fallback */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[var(--cres-primary-bg)] via-[var(--cres-secondary-bg)] to-[var(--cres-primary-bg)]"
        aria-hidden
      />
      <img
        src="/systems/hero.jpg"
        alt=""
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          heroImageLoaded ? 'opacity-40' : 'opacity-0'
        }`}
        onLoad={() => setHeroImageLoaded(true)}
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
      <div className="absolute inset-0 bg-black/50 md:bg-gradient-to-t md:from-black/80 md:via-black/40 md:to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 md:pb-24 pt-32 md:pt-0 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
          We Build <span className="text-[var(--cres-orange-primary)]">Systems</span>
          <br />
          Businesses Run On
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto mb-10 font-medium">
          Software that drives growth, visibility, and control. ERP, finance, CRM, automation—we specialize in the systems you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/cresos"
            className="inline-flex items-center gap-2 bg-white text-[var(--cres-black)] font-bold text-sm px-8 py-3.5 rounded-sm hover:bg-white/90 transition-colors uppercase tracking-wide"
          >
            See Our Systems
            <i className="fas fa-chevron-right text-xs" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border-2 border-white/80 text-white font-bold text-sm px-8 py-3.5 rounded-sm hover:bg-white/10 transition-colors uppercase tracking-wide"
          >
            Book Session
          </Link>
        </div>
      </div>
    </section>
  );
}
