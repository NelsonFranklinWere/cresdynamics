'use client';

import { motion } from 'framer-motion';
import ImageSection from '@/components/ImageSection';
import TypewriterBoard from '@/components/TypewriterBoard';
import { HOMEPAGE_SECTION_IMAGES } from '@/lib/section-backgrounds';

const PROBLEMS = [
  'You spend hours every day answering the same WhatsApp messages from customers who want to know your prices, your stock availability, and how to pay.',
  'Your team runs on verbal instructions and gut feel because there is no system showing who owns what and what is stuck.',
  'You find out about a revenue problem at the end of the month when the damage is already done.',
  'Your website exists but it does not bring in customers because nobody can find it on Google and nobody knows what to do when they land on it.',
  'You have tried generic software that was built for a different market and forced your business to adapt to it.',
] as const;

export default function HomepageProblemSection() {
  return (
    <ImageSection
      imageSrc={HOMEPAGE_SECTION_IMAGES.problem}
      imageAlt="Business team collaborating around operational challenges"
      overlay="dark"
    >
      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 py-14 md:py-24"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-8 md:mb-10 text-white text-center">
          Does this sound familiar?
        </h2>

        <TypewriterBoard items={PROBLEMS} />

        <p className="text-base md:text-lg font-semibold text-white/90 text-center mt-8 md:mt-10">
          If any of these are true you are in the right place.
        </p>
      </motion.div>
    </ImageSection>
  );
}
