'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CASE_STUDY_HEADLINES } from '@/lib/caseStudyHeadlines';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 'florist-growth',
      industry: 'Florist Business',
      problem: 'Successful locally but unable to scale beyond owner capacity',
      solution: 'Digital infrastructure for independent customer acquisition',
      outcome: 'Predictable growth systems without owner dependency',
      slug: 'florist-growth-system',
    },
    {
      id: 'sacco-financial',
      industry: 'Financial Services (SACCO)',
      problem: 'Lost opportunities after hours due to manual responses',
      solution: '24/7 WhatsApp automation and lead management',
      outcome: 'Always-on availability with reduced staff workload',
      slug: 'sacco-financial-services',
    },
    {
      id: 'karen-boutique',
      industry: 'Retail (Karen Boutique)',
      problem: 'Quality products but no online discoverability',
      solution: 'SEO-optimized website with conversion systems',
      outcome: 'Predictable leads beyond advertising campaigns',
      slug: 'karen-boutique-retail',
    },
    {
      id: 'car-rental-growth',
      industry: 'Car Rental Business',
      problem: 'Fully booked but no scalable growth system',
      solution: 'Website + SEO + brand authority system',
      outcome: 'Ready for second showroom expansion',
      slug: 'car-rental-growth-system',
    },
    {
      id: 'restaurant-automation',
      industry: 'Restaurant Chain',
      problem: 'Manual order processing killing efficiency',
      solution: 'AI ordering system + customer management',
      outcome: 'Reduced processing time by 70%',
      slug: 'restaurant-automation-system',
    },
    {
      id: 'consulting-seo-growth',
      industry: 'Consulting Firm',
      problem: 'Invisible online despite quality services',
      solution: 'Local SEO + authority content system',
      outcome: 'Consistent qualified leads without ads',
      slug: 'consulting-seo-growth',
    },
    {
      id: 'retail-sales-system',
      industry: 'Retail Store',
      problem: 'High foot traffic, low conversion',
      solution: 'Sales funnel + customer tracking system',
      outcome: 'Predictable monthly sales growth',
      slug: 'retail-sales-system',
    },
    {
      id: 'real-estate-branding',
      industry: 'Real Estate Agency',
      problem: 'No trust or authority in market',
      solution: 'Brand positioning + content authority system',
      outcome: 'Premium pricing and client retention',
      slug: 'real-estate-brand-authority',
    },
    {
      id: 'manufacturing-digital',
      industry: 'Manufacturing Company',
      problem: 'Traditional business with no digital presence',
      solution: 'Complete digital transformation system',
      outcome: 'New market opportunities unlocked',
      slug: 'manufacturing-digital-transformation',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[var(--navy-primary)]">
      <Header />

      {/* 1️⃣ HERO */}
      <section className="pt-24 md:pt-28 pb-8 md:pb-12 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10 text-black">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-black text-black leading-tight mb-2.5 md:mb-3">
            Real Systems. Real Production. Real Businesses.
          </h1>

          <p className="text-xs md:text-sm lg:text-base text-black/80 mb-2.5 md:mb-3 max-w-3xl mx-auto">
            How we build business systems—ERPs, finance platforms, and automation—that companies actually run on.
          </p>

          <p className="text-[11px] md:text-xs text-black/70 mb-3 md:mb-4">
            Production proof: active users, revenue tracked, roles, deployment stack, uptime. Numbers over testimonials.
          </p>

          <div className="mb-3 md:mb-5">
            <p className="mb-2 text-[11px] md:text-xs text-black/70">
              See systems Cres Dynamics recently deployed and the business outcomes they are driving.
            </p>
            <a
              href="/proof-of-work/"
              className="inline-flex items-center gap-1.5 rounded-md bg-black px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-black/85"
            >
              See Recent Results & Deployed Projects
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 md:gap-2.5 justify-center items-center">
            <a
              href="https://wa.me/254708805496?text=Hi%2C%20I'd%20like%20to%20book%20a%20systems%20discovery%20session%20with%20CRES%20Dynamics."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-black/85 text-white font-bold text-[11px] md:text-xs py-1.5 md:py-2 px-3 md:px-4 rounded-md transition-all duration-300 hover:shadow-md"
            >
              Book a Systems Discovery Session
            </a>
            <a
              href="tel:+254708805496"
              className="border border-black text-black hover:bg-black hover:text-white font-bold text-[11px] md:text-xs py-1.5 md:py-2 px-3 md:px-4 rounded-md transition-all duration-300"
            >
              Call 0708 805 496
            </a>
            <a
              href="/how-we-build"
              className="border border-black text-black hover:bg-black hover:text-white font-semibold text-[11px] md:text-xs py-1.5 md:py-2 px-3 md:px-4 rounded-md transition-all duration-300"
            >
              See How We Build Systems
            </a>
          </div>
        </div>
      </section>

      {/* 2️⃣ HOW TO READ OUR CASE STUDIES */}
      <section className="py-10 md:py-14 bg-white border-t border-[#E8ECF2]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-black text-[var(--navy-primary)] mb-3 md:mb-4">
            This Is Not a Portfolio. It&apos;s Proof of Systems Built.
          </h2>

          <p className="text-xs md:text-sm text-[var(--navy-primary)]/75 mb-6 md:mb-8 max-w-3xl mx-auto">
            We don&apos;t show screenshots to impress. We show problems → systems built → production outcomes. Each
            case focuses on the systems we built—ERPs, finance platforms, automation—that companies actually run on.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 text-left">
            {[
              {
                title: 'Business Context',
                body: 'Understanding the industry, market situation, and growth stage before any recommendations.',
              },
              {
                title: 'Growth Challenge',
                body: 'Identifying the real bottleneck preventing sustainable growth, not just surface symptoms.',
              },
              {
                title: 'System Built',
                body: 'The business system we built—ERP, finance platform, or automation—with architecture, modules, and production metrics.',
              },
              {
                title: 'Measurable Impact',
                body: "Real business outcomes that prove the system's effectiveness beyond vanity metrics.",
              },
              {
                title: 'Lessons Learned',
                body: 'Key insights that apply to similar businesses facing the same challenges.',
              },
              {
                title: 'Decision Framework',
                body: 'How we made strategic choices and what factors influenced our recommendations.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-white/10 bg-black p-3 md:p-4 text-white shadow-sm"
              >
                <h3 className="text-xs md:text-sm font-bold text-white mb-1.5">{item.title}</h3>
                <p className="text-[11px] md:text-xs text-white/75">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ CASE STUDY GRID */}
      <section className="py-10 md:py-14 bg-white border-t border-[#E8ECF2]">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-black text-[var(--navy-primary)] text-center mb-6 md:mb-8">
            Case Studies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="rounded-lg border border-white/10 bg-black p-3.5 md:p-4 text-white shadow-sm transition-shadow duration-300 hover:shadow-md hover:border-white/20"
              >
                <div className="mb-2">
                  <span className="inline-block rounded-full bg-[var(--cres-electric-teal)]/20 px-2 py-0.5 text-[10px] font-semibold text-[var(--cres-electric-teal)]">
                    {study.industry}
                  </span>
                </div>

                <h3 className="text-[11px] md:text-xs font-black text-white leading-snug mb-0.5">
                  {CASE_STUDY_HEADLINES[study.slug].title}
                </h3>
                <p className="text-[9px] md:text-[10px] text-[var(--cres-electric-teal)] font-semibold mb-2">
                  {CASE_STUDY_HEADLINES[study.slug].subtitle}
                </p>

                <div className="mb-2">
                  <h4 className="text-[10px] font-bold text-[var(--cres-orange-primary)] mb-0.5">Problem</h4>
                  <p className="text-[11px] md:text-xs text-white/80">{study.problem}</p>
                </div>

                <div className="mb-2">
                  <h4 className="text-[10px] font-bold text-[var(--cres-orange-primary)] mb-0.5">Solution</h4>
                  <p className="text-[11px] md:text-xs text-white/80">{study.solution}</p>
                </div>

                <div className="mb-3">
                  <h4 className="text-[10px] font-bold text-[var(--cres-orange-primary)] mb-0.5">Outcome</h4>
                  <p className="text-[11px] md:text-xs text-white/80">{study.outcome}</p>
                </div>

                <a
                  href={`/case-studies/${study.slug}`}
                  className="inline-block rounded-md bg-white hover:bg-white/90 px-2.5 py-1.5 text-[11px] font-semibold text-black transition-colors duration-200"
                >
                  View Case Study
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ FINAL CTA */}
      <section className="py-10 md:py-14 bg-[var(--cres-electric-teal)] relative">
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-black text-white mb-4 md:mb-5">
            Your Business Doesn&apos;t Need More Tools.
            <br />
            It Needs Systems That Run Companies.
          </h2>

          <p className="text-xs md:text-sm text-white/95 mb-5 md:mb-6 max-w-2xl mx-auto">
            If any of these case studies feel familiar, it&apos;s not by accident. Most growing businesses hit the same
            ceiling — until we build ERPs, finance platforms, and automation systems that companies actually run on.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 md:gap-2.5 justify-center items-center mb-5">
            <a
              href="https://wa.me/254708805496?text=Hi%2C%20I'd%20like%20to%20book%20a%20systems%20discovery%20session%20with%20CRES%20Dynamics."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[var(--cres-electric-teal)] hover:bg-[#0B0F14] hover:text-white font-bold text-[11px] md:text-xs py-1.5 md:py-2 px-3 md:px-4 rounded-md transition-all duration-300"
            >
              Book a Systems Discovery Session
            </a>
            <a
              href="tel:+254708805496"
              className="border border-white/50 text-white hover:bg-white/10 font-bold text-[11px] md:text-xs py-1.5 md:py-2 px-3 md:px-4 rounded-md transition-all duration-300"
            >
              Call 0708 805 496
            </a>
            <a
              href="/how-we-build"
              className="border border-white text-white hover:bg-[#0B0F14] hover:border-[#0B0F14] font-semibold text-[11px] md:text-xs py-1.5 md:py-2 px-3 md:px-4 rounded-md transition-all duration-300"
            >
              See How We Build Systems
            </a>
          </div>

          <div className="rounded-lg border border-white/20 bg-[#0B0F14]/40 p-3 md:p-4">
            <p className="text-[11px] md:text-xs text-white font-semibold">
              CRES Dynamics builds business systems for companies that are serious about scale, visibility, and control.
              <br />
              We don&apos;t build websites — we build systems that companies run on.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
