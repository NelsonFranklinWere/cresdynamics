'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const SYSTEMS = [
  {
    id: 'cresos',
    image: '/cresOs.businessoperatingsystem.png',
    title: 'CresOS',
    subtitle: 'Business Operating System',
    description:
      'One platform. Identity, operations, finance, clients, analytics. Modular, role-based, built on the Cres Core Engine. This is the infrastructure that lets your business run without you in every decision.',
    href: '/cresos',
  },
  {
    id: 'finance',
    image: '/finance.and.revenue.png',
    title: 'Finance & Revenue',
    subtitle: 'Billing, Invoices, Dashboards',
    description: 'Revenue visibility, subscription billing, and payment tracking. One finance layer across your business.',
    href: '/solutions/digital-sales',
  },
  {
    id: 'ops',
    image: '/operations.and.workflow.png',
    title: 'Operations & Workflow',
    subtitle: 'Projects, Approvals, Performance',
    description: 'Who owns what, what’s stuck, how teams perform. Clear operations, no blind spots.',
    href: '/solutions/web-growth',
  },
  {
    id: 'ai',
    image: '/ai.automation.png',
    title: 'AI & Automation',
    subtitle: 'Workflows, Triggers, Decision Support',
    description: 'Less manual work, consistent execution. Automated follow-ups and intelligence where it adds value.',
    href: '/solutions/ai-automation',
  },
];

function SystemBlock({
  id,
  image,
  title,
  subtitle,
  description,
  href,
  reverse,
  isFirst,
}: {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  reverse: boolean;
  isFirst?: boolean;
}) {
  return (
    <motion.section
      className={`min-h-[85vh] md:min-h-screen flex flex-col ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
      initial={{ opacity: 0, y: 40, x: reverse ? 40 : -40 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {/* Image half - framed with brand-colour backdrop */}
      <div className="relative w-full md:w-1/2 min-h-[40vh] md:min-h-full flex items-center justify-center bg-[var(--cres-secondary-bg)]">
        <div className="relative w-[82%] md:w-[78%] aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-br from-[var(--cres-primary-bg)] via-[#141b26] to-[var(--cres-secondary-bg)] shadow-[0_18px_45px_rgba(0,0,0,0.6)] overflow-hidden">
          <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_20%_20%,rgba(244,122,42,0.35),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(79,179,184,0.28),transparent_55%)]" />
          <img
            src={image}
            alt={title}
            className="relative z-10 w-full h-full object-contain mix-blend-screen"
            loading={isFirst ? 'eager' : 'lazy'}
            fetchPriority={isFirst ? 'high' : undefined}
            decoding="async"
          />
        </div>
      </div>

      {/* Copy half */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 lg:px-20 py-16 md:py-24 bg-[var(--cres-primary-bg)] md:bg-white text-[var(--cres-white)] md:text-[var(--cres-black)]">
        {id === 'cresos' ? (
          <>
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--cres-orange-primary)] mb-2">
              01 · Flagship
            </p>
            <div className="mb-6">
              <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.28em] text-[var(--cres-orange-primary)] mb-2">
                What We Build
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                Every System
                <br />
                Your Business
                <br />
                Needs to Scale.
              </h2>
            </div>
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-black/10 md:bg-black/5 px-3 py-1 text-xs md:text-sm font-semibold">
                <span className="text-lg">⚙️</span>
                <span>CresOS – {subtitle}</span>
              </div>
            </div>
            <p className="text-base md:text-lg opacity-80 md:opacity-90 mb-6 max-w-lg leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['Operations', 'Finance', 'CRM', 'Analytics', 'HR'].map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center px-3 py-1 rounded-full border border-black/10 md:border-black/15 text-xs md:text-sm font-medium bg-white/5 md:bg-black/[0.02]"
                >
                  {label}
                </span>
              ))}
            </div>
            <Link
              href={href}
              className="inline-flex items-center gap-2 font-bold text-sm border-b-2 border-current pb-1 w-fit hover:opacity-80 transition-opacity uppercase tracking-wide"
            >
              Learn more
              <i className="fas fa-arrow-right text-xs" />
            </Link>
          </>
        ) : (
          <>
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--cres-orange-primary)] mb-2">
              {subtitle}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6">
              {title}
            </h2>
            <p className="text-base md:text-lg opacity-80 md:opacity-90 mb-8 max-w-lg leading-relaxed">
              {description}
            </p>
            <Link
              href={href}
              className="inline-flex items-center gap-2 font-bold text-sm border-b-2 border-current pb-1 w-fit hover:opacity-80 transition-opacity uppercase tracking-wide"
            >
              Learn more
              <i className="fas fa-arrow-right text-xs" />
            </Link>
          </>
        )}
      </div>
    </motion.section>
  );
}

export default function SystemsShowcaseTesla() {
  return (
    <div className="bg-white">
      {SYSTEMS.map((system, i) => (
        <SystemBlock
          key={system.id}
          id={system.id}
          image={system.image}
          title={system.title}
          subtitle={system.subtitle}
          description={system.description}
          href={system.href}
          reverse={i % 2 === 1}
          isFirst={i === 0}
        />
      ))}
    </div>
  );
}
