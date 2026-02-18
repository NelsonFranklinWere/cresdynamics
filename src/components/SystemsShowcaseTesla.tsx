'use client';

import { useState } from 'react';
import Link from 'next/link';

const SYSTEMS = [
  {
    id: 'cresos',
    image: '/cresOs.businessoperatingsystem.png',
    title: 'CresOS',
    subtitle: 'Business Operating System',
    description: 'One platform: identity, operations, finance, clients, analytics. Modular, role-based, built for scale.',
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
  image,
  title,
  subtitle,
  description,
  href,
  reverse,
  isFirst,
}: {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  reverse: boolean;
  isFirst?: boolean;
}) {
  return (
    <section
      className={`min-h-[85vh] md:min-h-screen flex flex-col ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
    >
      {/* Image half - plain img so it always displays beside the copy */}
      <div className="relative w-full md:w-1/2 min-h-[40vh] md:min-h-full bg-[var(--cres-secondary-bg)] shrink-0">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover block"
          loading={isFirst ? 'eager' : 'lazy'}
          fetchPriority={isFirst ? 'high' : undefined}
          decoding="async"
        />
      </div>

      {/* Copy half */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 lg:px-20 py-16 md:py-24 bg-[var(--cres-primary-bg)] md:bg-white text-[var(--cres-white)] md:text-[var(--cres-black)]">
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
      </div>
    </section>
  );
}

export default function SystemsShowcaseTesla() {
  return (
    <div className="bg-white">
      {SYSTEMS.map((system, i) => (
        <SystemBlock
          key={system.id}
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
