'use client';

import { motion } from 'framer-motion';

export default function HomepageStatsMarquee() {
  return (
    <motion.section
      className="bg-[var(--cres-black)] text-[var(--cres-white)]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <div className="max-w-5xl mx-auto px-6 pb-10 pt-6 md:pt-10">
        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 border border-white/10 bg-black/40">
          {[
            { label: 'Active Users', value: '127+' },
            { label: 'Revenue Tracked', value: 'KES 4.97M' },
            { label: 'System Uptime', value: '99.9%' },
            { label: 'Verticals Served', value: '5+' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-black/80 px-4 py-4 md:px-6 md:py-5 border-t border-white/10"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, delay: 0.08 * index, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <div className="text-2xl md:text-3xl font-black text-[var(--cres-orange-primary)] leading-none mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-white/50">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="cres-marquee-wrap">
        <div className="cres-marquee">
          {[
            'Websites',
            'ERP Systems',
            'Finance Platforms',
            'AI Automation',
            'CresOS',
            'Operations Systems',
            'Business Infrastructure',
            'Nairobi Kenya',
          ].flatMap((item, idx) => [
            <div key={`${item}-${idx}-a`} className="cres-marquee-item">
              {item}
            </div>,
            <div key={`${item}-${idx}-b`} className="cres-marquee-item">
              {item}
            </div>,
          ])}
        </div>
      </div>
    </motion.section>
  );
}

