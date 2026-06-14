'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ImageSection from '@/components/ImageSection';
import { HOMEPAGE_SECTION_IMAGES } from '@/lib/section-backgrounds';

const AUDIENCES = [
  'Growing Kenyan businesses',
  'SACCOs and financial institutions',
  'Retail and e-commerce businesses',
  'Logistics and supply chain operations',
  'Hospitals, schools, and service companies',
  'Any organisation that needs custom software built for the Kenyan market',
];

export default function HomepageWhoThisIsFor() {
  return (
    <ImageSection
      imageSrc={HOMEPAGE_SECTION_IMAGES.whoFor}
      imageAlt="Startup and business team in modern office"
      overlay="medium"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-24 text-white">
        <motion.div
          className="max-w-3xl mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight mb-4">
            Is this for you?
          </h2>
          <p className="text-sm md:text-base text-white/80 leading-relaxed mb-4">
            We work with businesses that have outgrown WhatsApp groups and Excel spreadsheets. If you
            are managing your operations manually and it is costing you time, money, and visibility —
            we build the system that fixes that.
          </p>
          <p className="text-sm font-semibold text-white/90 mb-3">We work with:</p>
        </motion.div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-10">
          {AUDIENCES.map((item, idx) => (
            <motion.li
              key={item}
              className="flex items-start gap-3 px-5 py-4 rounded-xl border border-white/15 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <span className="text-[var(--teal-accent)] font-bold mt-0.5" aria-hidden>
                ✓
              </span>
              <span className="text-sm md:text-base text-white/90">{item}</span>
            </motion.li>
          ))}
        </ul>

        <Link href="/contact" className="hero-btn-glass inline-flex">
          Start the conversation
          <span className="hero-btn-arrow" aria-hidden>
            →
          </span>
        </Link>
      </div>
    </ImageSection>
  );
}
