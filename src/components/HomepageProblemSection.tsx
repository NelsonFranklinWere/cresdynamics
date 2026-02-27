'use client';

import { motion } from 'framer-motion';

export default function HomepageProblemSection() {
  const problems = [
    {
      icon: '📱',
      title: "You're invisible to clients who are searching for you right now",
      description:
        "Every day, potential clients search for what you offer in Nairobi and find your competitors instead. Not because you're worse – because you're not findable.",
      num: '01',
    },
    {
      icon: '💸',
      title: "Money is leaking from gaps you can't see",
      description:
        'Stock that disappears without trace. Invoices that never get sent. Orders lost in WhatsApp threads. The leakage is real — you just do not have a system to show you where it is happening.',
      num: '02',
    },
    {
      icon: '⛔',
      title: "Corporate clients won't engage businesses without a credible presence",
      description:
        'Before a corporate client calls you, they Google you. What they find determines whether they call at all. An Instagram page is not enough for a KES 500K order.',
      num: '03',
    },
    {
      icon: '🔄',
      title: 'You are the system — and that has a ceiling',
      description:
        'Every decision, every approval, every operational question flows through you. When you max out, the business maxes out. You cannot scale what you are personally running.',
      num: '04',
    },
  ];

  return (
    <motion.section
      className="bg-[#F8F6F1] text-[#08090F]"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <div className="mb-6">
          <div className="flex items-center gap-3 text-[10px] md:text-xs font-mono tracking-[0.25em] uppercase text-[#C8902A]">
            <span className="inline-block h-px w-7 bg-[#C8902A]" />
            <span>The Problem We Solve</span>
          </div>
        </div>
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4">
            Your Business Has
            <br />
            Outgrown Its Infrastructure.
          </h2>
          <p className="text-sm md:text-base text-[#6B6B80] leading-relaxed">
            You are making sales. You have clients. The work is good. But everything still runs
            through WhatsApp groups, Excel sheets, and one person who holds it all together. That
            person is usually you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {problems.map((p, idx) => {
            const fromLeft = idx % 2 === 0;
            const initialX = fromLeft ? -40 : 40;

            return (
            <motion.div
              key={p.num}
              className="relative bg-white/95 px-6 py-8 md:px-8 md:py-10 rounded-2xl border border-[#D5CBB8] shadow-[0_14px_30px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)]"
              initial={{ opacity: 0, x: initialX }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <div className="text-2xl mb-3">{p.icon}</div>
              <h3 className="text-base md:text-lg font-semibold mb-2 text-[#08090F]">
                {p.title}
              </h3>
              <p className="text-xs md:text-sm text-[#6B6B80] leading-relaxed">{p.description}</p>
              <div className="pointer-events-none select-none absolute -top-2 right-4 text-[72px] font-black text-[#C8902A]/10 leading-none">
                {p.num}
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

