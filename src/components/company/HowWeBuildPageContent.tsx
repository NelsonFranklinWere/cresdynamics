import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import {
  CompanyDarkSection,
  CompanyEyebrow,
  CompanyHero,
  CompanyPhotoSection,
  ScrollReveal,
  ScrollRevealStagger,
} from '@/components/company/CompanyPageUI';
import { COMPANY_PAGE_IMAGES } from '@/lib/company-page-images';
import { whatsappUrl, WHATSAPP_PREFILL } from '@/lib/contact';

const PHASES = [
  {
    phase: 'Phase 1 — Diagnose',
    title: 'Process & data mapping',
    body: 'We map your existing processes, data flows, and decision points before we write code. No guesswork.',
    items: [
      'Current state analysis — workflows, data sources, pain points',
      'Process design — approvals, automation opportunities',
      'Validation with stakeholders and success metrics',
    ],
  },
  {
    phase: 'Phase 2 — Architect & build',
    title: 'Core ERP architecture',
    body: 'Identity, data models, role-based access, and APIs — modular and scalable on the Cres Core Engine.',
    items: [
      'Modular design and API-first integrations',
      'User management, RBAC, core business logic',
      'Workflow engines and baseline reporting',
    ],
  },
  {
    phase: 'Phase 3 — Deploy & optimize',
    title: 'Automation & intelligence',
    body: 'Automation pipelines, dashboards, and decision support on top of the core system.',
    items: [
      'Automated workflows and event-driven triggers',
      'Real-time dashboards and custom reports',
      'AI decision support where it adds value',
    ],
  },
  {
    phase: 'Phase 4 — Scale',
    title: 'Security, governance & scale',
    body: 'Production-readiness: access control, audit trails, monitoring, and scaling architecture.',
    items: [
      'Encryption, audit trails, compliance-aware design',
      'Governance policies and change management',
      'Horizontal scaling, caching, uptime monitoring',
    ],
  },
];

const STANDARDS = [
  'Role-based access control so users see only what they need.',
  'Audit trails for critical actions — audit-ready records.',
  'System testing discipline before every deploy.',
  'Monitoring and alerting when something breaks.',
  'Documentation and handover so your team can operate the system.',
];

export default function HowWeBuildPageContent() {
  return (
    <div className="min-h-screen bg-[#060B18] text-white">
      <Header />

      <CompanyHero
        eyebrow="How we build · Engineering framework"
        title={
          <>
            Enterprise systems
            <span className="block text-[var(--teal-accent)] mt-1">built for Nairobi &amp; scale.</span>
          </>
        }
        subtitle="Diagnose, architect, build, deploy, optimize, scale — the same discipline Kenyan enterprises use when clicks must become operations, not slide decks."
        imageSrc={COMPANY_PAGE_IMAGES.howWeBuild}
        imageAlt="How Cres Dynamics builds systems"
        primaryLabel="Book discovery session"
        primaryHref="/contact"
        secondaryHref="/how-we-work"
        secondaryLabel="How we work"
      />

      {PHASES.map((phase, index) => (
        <CompanyPhotoSection
          key={phase.phase}
          imageSrc={
            index % 2 === 0 ? COMPANY_PAGE_IMAGES.planning : COMPANY_PAGE_IMAGES.workspace
          }
          imageAlt={phase.title}
          overlay={index % 2 === 0 ? 'medium' : 'dark'}
        >
          <ScrollReveal className="max-w-3xl mb-8">
            <CompanyEyebrow>{phase.phase}</CompanyEyebrow>
            <h2 className="text-2xl md:text-3xl font-black leading-tight mb-3">{phase.title}</h2>
            <p className="text-white/75 leading-relaxed">{phase.body}</p>
          </ScrollReveal>
          <ScrollRevealStagger className="grid sm:grid-cols-3 gap-4" staggerDelay={0.05}>
            {phase.items.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-black/40 p-5 text-sm text-white/75 leading-relaxed"
              >
                {item}
              </div>
            ))}
          </ScrollRevealStagger>
        </CompanyPhotoSection>
      ))}

      <CompanyDarkSection>
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-10">
          <CompanyEyebrow>Standards</CompanyEyebrow>
          <h2 className="text-2xl md:text-3xl font-black mb-3">Production-readiness. No shortcuts.</h2>
          <p className="text-white/65">Every system we deploy meets these standards.</p>
        </ScrollReveal>
        <ul className="max-w-2xl mx-auto space-y-3">
          {STANDARDS.map((item, i) => (
            <ScrollReveal key={item} delay={i * 0.04}>
              <li className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white/85">
                <span className="text-[var(--teal-accent)] font-bold shrink-0">✓</span>
                {item}
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </CompanyDarkSection>

      <CompanyPhotoSection imageSrc={COMPANY_PAGE_IMAGES.cta} imageAlt="Connect with Cres Dynamics">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <CompanyEyebrow>Next step</CompanyEyebrow>
            <h2 className="text-2xl md:text-4xl font-black mb-5">Ready to build your system?</h2>
            <p className="text-white/80 mb-8 leading-relaxed">
              Book a systems discovery session. We map your needs, then show you how we architect and deploy.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={whatsappUrl(WHATSAPP_PREFILL.cresosDiscovery)} target="_blank" rel="noopener noreferrer" className="hero-btn-primary">
                Book discovery on WhatsApp
                <span className="hero-btn-arrow" aria-hidden>→</span>
              </a>
              <Link href="/contact" className="hero-btn-glass">
                Contact form
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </CompanyPhotoSection>

      <Footer />
    </div>
  );
}
