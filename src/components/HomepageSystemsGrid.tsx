'use client';

import { motion } from 'framer-motion';

const SYSTEM_CARDS = [
  {
    id: 'websites',
    icon: '🌐',
    label: '03',
    title: 'Professional Websites',
    body: 'Websites that work as sales tools – not just digital brochures. Built to convert, rank on Google, and make your business look as serious as it actually is.',
    tags: ['SEO', 'Mobile-first', 'Conversion'],
  },
  {
    id: 'erp',
    icon: '🏗️',
    label: '04',
    title: 'Custom ERP Systems',
    body: 'Enterprise-grade resource planning built around how your business actually operates – not adapted from a generic global template.',
    tags: ['Inventory', 'Workflows', 'Reporting'],
  },
  {
    id: 'finance',
    icon: '💰',
    label: '05',
    title: 'Finance & Revenue Platforms',
    body: 'Real-time revenue visibility, invoice management, subscription billing, and Mpesa integration. Know your numbers every day – not just at end of month.',
    tags: ['Mpesa', 'Invoicing', 'Dashboards'],
  },
  {
    id: 'ai',
    icon: '🤖',
    label: '06',
    title: 'AI & Automation',
    body: 'Automated follow-ups, workflow triggers, and intelligent decision support. Less manual work, consistent execution, more time for the things only you can do.',
    tags: ['Workflows', 'AI', 'Triggers'],
  },
  {
    id: 'ecommerce',
    icon: '🛒',
    label: '07',
    title: 'E-Commerce Systems',
    body: 'Online stores built for Kenyan businesses – Mpesa payments, product catalogs, order management, and customer communication in one system.',
    tags: ['Mpesa', 'Orders', 'Catalog'],
  },
];

export default function HomepageSystemsGrid() {
  return (
    <section className="bg-[#F8F6F1] text-[#08090F] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-10 md:mb-14">
          <p className="text-[11px] md:text-xs font-semibold tracking-[0.24em] uppercase text-[#C08A2A] mb-3">
            What We Build
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight mb-3">
            Every critical system your business needs to grow up from WhatsApp and spreadsheets.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {SYSTEM_CARDS.map((card, idx) => {
            const fromLeft = idx % 2 === 0;
            const initialX = fromLeft ? -32 : 32;

            return (
              <motion.div
                key={card.id}
                className="relative bg-white px-6 py-8 md:px-7 md:py-9 rounded-2xl border border-[#E0D9CC] shadow-[0_12px_28px_rgba(0,0,0,0.05)] flex flex-col gap-4 overflow-hidden"
                initial={{ opacity: 0, x: initialX, y: 18 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl md:text-3xl">{card.icon}</span>
                    <div>
                      <p className="text-[10px] md:text-xs font-semibold tracking-[0.22em] uppercase text-[#C08A2A] mb-1">
                        {card.label}
                      </p>
                      <h3 className="text-base md:text-lg font-semibold">{card.title}</h3>
                    </div>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-[#5A5A70] leading-relaxed">{card.body}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full border border-[#E0D9CC] bg-[#FBF8F1] text-[10px] md:text-xs font-medium tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

