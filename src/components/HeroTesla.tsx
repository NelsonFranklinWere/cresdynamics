'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HERO_IMAGES = [
  {
    id: 'websites',
    src: '/systems/websites.jpg',
    alt: 'Websites Serious Businesses Run On',
  },
  {
    id: 'cresos',
    src: '/systems/cresos.jpg',
    alt: 'CresOS – Business Operating System',
  },
  {
    id: 'erp',
    src: '/systems/erp.jpg',
    alt: 'Custom ERPs for Growing Companies',
  },
];

export default function HeroTesla() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % HERO_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
      style={{ background: 'var(--cres-gradient-bg)' }}
    >
      {/* Optional subtle image layer under gradient */}
      <div className="absolute inset-0 opacity-20" aria-hidden>
        {HERO_IMAGES.map((image, i) => (
          <motion.img
            key={image.id}
            src={image.src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: i === index ? 0 : 0 }}
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          className="text-[11px] md:text-xs font-semibold tracking-[0.24em] uppercase text-white/70 mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
        >
          Nairobi, Kenya · Est. 2024
        </motion.div>
        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
          style={{ textShadow: '0 2px 12px rgba(0,0,0,0.3)' }}
        >
          <span className="text-[var(--orange-energy)]">Systems</span> Businesses Run On.
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto mb-10 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
        >
          We build the operational infrastructure that growing Kenyan businesses run on – websites, ERPs, finance platforms, and AI automation. When you&apos;ve outgrown WhatsApp and Excel, this is what comes next.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <Link
            href="/how-we-build"
            className="inline-flex items-center gap-2 bg-[var(--orange-energy)] hover:bg-[var(--orange-energy-hover)] text-white font-bold text-sm px-8 py-3.5 rounded-lg transition-colors uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
          >
            How We Build
            <i className="fas fa-chevron-right text-xs" />
          </Link>
          <Link
            href="/proof-of-work"
            className="inline-flex items-center gap-2 border-2 border-[var(--teal-accent)] text-white hover:bg-[var(--teal-accent)]/20 font-bold text-sm px-8 py-3.5 rounded-lg transition-colors uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-[var(--teal-accent)] focus:ring-offset-2 focus:ring-offset-transparent"
          >
            Our Work
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
