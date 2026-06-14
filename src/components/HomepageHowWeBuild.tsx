'use client';

import { motion } from 'framer-motion';
import ImageSection from '@/components/ImageSection';
import { HOMEPAGE_SECTION_IMAGES } from '@/lib/section-backgrounds';

const STEPS = [
  {
    id: 'map',
    label: 'Step 1',
    title: 'We map your business first.',
    body: 'Before writing a single line of code we spend time understanding how your business actually operates. Where decisions happen. Where money moves. Where things break.',
  },
  {
    id: 'build',
    label: 'Step 2',
    title: 'We build exactly what you need.',
    body: 'No generic features. No bloated software. A system designed around the specific problems we identified in step one.',
  },
  {
    id: 'deliver',
    label: 'Step 3',
    title: 'We deliver and stay.',
    body: 'Every system is deployed, tested, and trained on before handover. We do not disappear after launch. We stay accountable.',
  },
];

export default function HomepageHowWeBuild() {
  return (
    <ImageSection
      imageSrc={HOMEPAGE_SECTION_IMAGES.howWeWork}
      imageAlt="Engineering team building custom business systems"
      overlay="medium"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-24 text-white">
        <div className="max-w-3xl mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight mb-3">
            How we work with you.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.id}
              className="relative px-6 py-8 rounded-xl border border-white/15 bg-black/40 backdrop-blur-sm flex flex-col gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--teal-accent)]">
                {step.label}
              </p>
              <h3 className="text-base md:text-lg font-bold text-white">{step.title}</h3>
              <p className="text-sm text-white/75 leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </ImageSection>
  );
}
