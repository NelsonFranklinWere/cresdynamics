'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ImageSection from '@/components/ImageSection';
import { HOMEPAGE_SECTION_IMAGES } from '@/lib/section-backgrounds';

const SYSTEM_CARDS = [
  {
    id: 'erp',
    tag: 'Enterprise',
    title: 'Custom ERP Systems',
    body: 'Finance, inventory, approvals, HR, and operations in one platform — built around your workflows, not a vendor template.',
    href: '/erp',
    image: '/cards/erp-data-dashboard.jpg',
    alt: 'Business analytics dashboard with charts and KPI metrics',
    accent: 'from-[#2FA6B3] to-[#1A3A8A]',
  },
  {
    id: 'ecommerce',
    tag: 'Commerce',
    title: 'E-Commerce Platforms',
    body: 'Full product catalogue online with M-Pesa and card payments, automated orders, and real-time stock across every channel.',
    href: '/e-commerce',
    image: '/cards/ecommerce-mobile-payments.jpg',
    alt: 'Mobile payment and online checkout on a smartphone',
    accent: 'from-[#F39C24] to-[#EA580C]',
  },
  {
    id: 'finance',
    tag: 'Finance',
    title: 'Finance & Revenue Platforms',
    body: 'Live revenue visibility, automated M-Pesa reconciliation, invoice management, and dashboards that update in real time.',
    href: '/finance-platforms',
    image: '/cards/finance-analytics-dashboard.jpg',
    alt: 'Finance analytics dashboard with revenue and performance graphs',
    accent: 'from-[#6366F1] to-[#2FA6B3]',
  },
  {
    id: 'ai',
    tag: 'Automation',
    title: 'AI & Automation',
    body: 'Automated follow-ups, workflow triggers, and intelligent routing — systems that handle repetitive work while you sleep.',
    href: '/ai-automation',
    image: '/cards/ai-automation-neural.jpg',
    alt: 'Abstract AI neural network visualization representing intelligent automation',
    accent: 'from-[#10B981] to-[#2FA6B3]',
  },
] as const;

function SystemProductCard({
  card,
  index,
}: {
  card: (typeof SYSTEM_CARDS)[number];
  index: number;
}) {
  return (
    <Link href={card.href} prefetch={false} className="group block h-full">
      <motion.article
        className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-black/50 shadow-[0_8px_40px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-white/25 hover:shadow-[0_16px_56px_rgba(47,166,179,0.18)]"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        {/* Top accent */}
        <div className={`h-1 w-full bg-gradient-to-r ${card.accent}`} aria-hidden />

        {/* Browser-style product preview */}
        <div className="p-4 pb-0 sm:p-5 sm:pb-0">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span
              className={`inline-flex items-center rounded-full bg-gradient-to-r ${card.accent} px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white`}
            >
              {card.tag}
            </span>
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider">
              Live system
            </span>
          </div>

          <div className="overflow-hidden rounded-t-xl border border-white/15 border-b-0 bg-[#0a0f18] shadow-inner">
            <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-[#ff5f57]" aria-hidden />
              <span className="h-2 w-2 rounded-full bg-[#febc2e]" aria-hidden />
              <span className="h-2 w-2 rounded-full bg-[#28c840]" aria-hidden />
              <span className="ml-2 flex-1 truncate rounded bg-white/5 px-2 py-0.5 text-[9px] font-mono text-white/35">
                app.cresdynamics.com
              </span>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden bg-[#0d1117]">
              <Image
                src={card.image}
                alt={card.alt}
                fill
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 540px"
                className="object-cover object-left-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0f18] via-transparent to-transparent opacity-60"
                aria-hidden
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-2 p-5 sm:p-6 pt-4">
          <h3 className="text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-[var(--teal-accent)] transition-colors duration-300">
            {card.title}
          </h3>
          <p className="text-sm text-white/70 leading-relaxed flex-1">{card.body}</p>
          <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-4">
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--teal-accent)]">
              Explore platform
            </span>
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 text-sm text-white transition-all duration-300 group-hover:border-[var(--teal-accent)]/50 group-hover:bg-[var(--teal-accent)]/20 group-hover:translate-x-0.5"
              aria-hidden
            >
              →
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

export default function HomepageSystemsGrid() {
  return (
    <ImageSection
      imageSrc={HOMEPAGE_SECTION_IMAGES.systems}
      imageAlt="Analytics and business systems workspace"
      overlay="medium"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-24 text-white">
        <div className="max-w-3xl mb-10 md:mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--teal-accent)] mb-3">
            Digital infrastructure
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight mb-4">
            We build systems your business actually runs on.
          </h2>
          <p className="text-sm md:text-base text-white/75 leading-relaxed">
            Production-grade software engineered in Nairobi — custom platforms for finance,
            operations, commerce, and automation. Not templates. Not off-the-shelf.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {SYSTEM_CARDS.map((card, idx) => (
            <SystemProductCard key={card.id} card={card} index={idx} />
          ))}
        </div>
      </div>
    </ImageSection>
  );
}
