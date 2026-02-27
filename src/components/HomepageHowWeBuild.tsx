'use client';

import { motion } from 'framer-motion';

const STEPS = [
  {
    id: 'discover',
    label: '01 · Discover',
    title: 'Understand Your Business',
    body: '2–4 hours understanding how you actually operate before touching technology. Where decisions happen. Where money moves. Where things break.',
  },
  {
    id: 'design',
    label: '02 · Design',
    title: 'Map the Solution',
    body: "We map your actual workflow and agree on exactly what the system must do. No surprises, no scope creep, no features you didn't ask for.",
  },
  {
    id: 'build',
    label: '03 · Build',
    title: 'Build on Cres Core',
    body: 'We deploy on the Cres Core Engine – our proprietary platform – customised to your specific operations. Faster. More reliable. No third-party dependencies.',
  },
  {
    id: 'deploy',
    label: '04 · Deploy',
    title: 'Train and Launch',
    body: 'We train every user and confirm adoption before handover. The system is live and working — not just delivered and forgotten.',
  },
  {
    id: 'support',
    label: '05 · Support',
    title: 'Stay and Maintain',
    body: "We maintain a retainer relationship. The system lives, evolves, and remains accountable. We don't disappear after launch.",
  },
];

export default function HomepageHowWeBuild() {
  return (
    <section className="bg-white text-[#08090F] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-10 md:mb-14">
          <p className="text-[11px] md:text-xs font-semibold tracking-[0.24em] uppercase text-[#C08A2A] mb-3">
            How We Build
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight mb-3">
            Business First.
            <br />
            Technology Second.
          </h2>
          <p className="text-sm md:text-base text-[#5A5A70] max-w-xl">
            We never open with a product feature. We open with your business. Only after understanding how you operate do
            we build what you actually need.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {STEPS.map((step, idx) => {
            const fromLeft = idx % 2 === 0;
            const initialX = fromLeft ? -28 : 28;

            return (
              <motion.div
                key={step.id}
                className="relative bg-[#F8F6F1] px-5 py-7 md:px-6 md:py-8 rounded-2xl border border-[#E0D9CC] shadow-[0_10px_24px_rgba(0,0,0,0.04)] flex flex-col gap-3 overflow-hidden"
                initial={{ opacity: 0, x: initialX, y: 16 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <p className="text-[10px] md:text-xs font-semibold tracking-[0.24em] uppercase text-[#C08A2A]">
                  {step.label}
                </p>
                <h3 className="text-sm md:text-base font-semibold">{step.title}</h3>
                <p className="text-[11px] md:text-sm text-[#5A5A70] leading-relaxed">{step.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

