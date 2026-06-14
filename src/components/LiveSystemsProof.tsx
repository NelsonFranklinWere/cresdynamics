'use client';

import { motion } from 'framer-motion';
import ImageSection from '@/components/ImageSection';
import { HOMEPAGE_SECTION_IMAGES } from '@/lib/section-backgrounds';

const PROOF_CARDS = [
  {
    title: 'Finance Platform',
    stats: '127 active users. KES 4.97 million in revenue tracked. Real-time dashboards. M-Pesa billing. Live in production.',
  },
  {
    title: 'Business Operations ERP',
    stats: '89 active users. KES 2.3 million in project value tracked. Approval workflows. Full audit logging. Live in production.',
  },
  {
    title: 'OCH Platform',
    stats: 'Multi-role cybersecurity talent platform. AI-powered profiling. Certificate generation. M-Pesa billing. Live in production.',
  },
];

export default function LiveSystemsProof() {
  return (
    <ImageSection
      imageSrc={HOMEPAGE_SECTION_IMAGES.proof}
      imageAlt="Technology team planning live production systems"
      overlay="medium"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 md:py-24 text-white">
        <div className="max-w-3xl mb-10 md:mb-14">
          <h2 className="text-2xl md:text-4xl font-black mb-4 leading-tight">
            Systems we have shipped that are live right now.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-10">
          {PROOF_CARDS.map((system, i) => (
            <motion.div
              key={system.title}
              className="border border-white/15 bg-black/45 backdrop-blur-sm p-6 md:p-8 rounded-xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <h3 className="text-lg md:text-xl font-bold text-white mb-4">{system.title}</h3>
              <p className="text-sm md:text-base text-white/80 leading-relaxed">{system.stats}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-base md:text-lg font-semibold text-white/90">
          These are not demos. These are live systems running for real businesses in Kenya today.
        </p>
      </div>
    </ImageSection>
  );
}
