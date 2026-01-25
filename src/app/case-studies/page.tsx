'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 'florist-growth',
      industry: 'Florist Business',
      problem: 'Successful locally but unable to scale beyond owner capacity',
      solution: 'Digital infrastructure for independent customer acquisition',
      outcome: 'Predictable growth systems without owner dependency',
      slug: 'florist-growth-system'
    },
    {
      id: 'sacco-financial',
      industry: 'Financial Services (SACCO)',
      problem: 'Lost opportunities after hours due to manual responses',
      solution: '24/7 WhatsApp automation and lead management',
      outcome: 'Always-on availability with reduced staff workload',
      slug: 'sacco-financial-services'
    },
    {
      id: 'karen-boutique',
      industry: 'Retail (Karen Boutique)',
      problem: 'Quality products but no online discoverability',
      solution: 'SEO-optimized website with conversion systems',
      outcome: 'Predictable leads beyond advertising campaigns',
      slug: 'karen-boutique-retail'
    },
    {
      id: 'car-rental-growth',
      industry: 'Car Rental Business',
      problem: 'Fully booked but no scalable growth system',
      solution: 'Website + SEO + brand authority system',
      outcome: 'Ready for second showroom expansion',
      slug: 'car-rental-growth-system'
    },
    {
      id: 'restaurant-automation',
      industry: 'Restaurant Chain',
      problem: 'Manual order processing killing efficiency',
      solution: 'AI ordering system + customer management',
      outcome: 'Reduced processing time by 70%',
      slug: 'restaurant-automation-system'
    },
    {
      id: 'consulting-seo-growth',
      industry: 'Consulting Firm',
      problem: 'Invisible online despite quality services',
      solution: 'Local SEO + authority content system',
      outcome: 'Consistent qualified leads without ads',
      slug: 'consulting-seo-growth'
    },
    {
      id: 'retail-sales-system',
      industry: 'Retail Store',
      problem: 'High foot traffic, low conversion',
      solution: 'Sales funnel + customer tracking system',
      outcome: 'Predictable monthly sales growth',
      slug: 'retail-sales-system'
    },
    {
      id: 'real-estate-branding',
      industry: 'Real Estate Agency',
      problem: 'No trust or authority in market',
      solution: 'Brand positioning + content authority system',
      outcome: 'Premium pricing and client retention',
      slug: 'real-estate-brand-authority'
    },
    {
      id: 'manufacturing-digital',
      industry: 'Manufacturing Company',
      problem: 'Traditional business with no digital presence',
      solution: 'Complete digital transformation system',
      outcome: 'New market opportunities unlocked',
      slug: 'manufacturing-digital-transformation'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* 1️⃣ HERO SECTION – AUTHORITY FIRST */}
      <section className="pt-12 md:pt-16 pb-0 flex flex-col justify-end bg-gradient-to-br from-[var(--cres-deep-navy)] via-[#0D1B2A] to-[#1B263B] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-3/4 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--cres-electric-teal)] to-transparent"></div>
          <div className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-[var(--cres-electric-teal)] to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10 pb-0">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-3 md:mb-4 underline-custom">
            Real Growth. Real Systems. Real Businesses.
          </h1>

          <p className="text-sm md:text-lg lg:text-xl text-gray-300 mb-3 md:mb-4 max-w-3xl mx-auto">
            How we help businesses remove bottlenecks, build systems, and grow sustainably using technology and automation.
          </p>

          <p className="text-xs md:text-sm text-gray-400 mb-4 md:mb-6">
            Not experiments. Not templates. Real work done for real businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <a href="/contact" className="bg-[var(--cres-electric-teal)] hover:bg-[#00B894] text-white font-black text-lg py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
              Request a Growth Audit
            </a>
            <button className="border-2 border-[var(--cres-electric-teal)] text-[var(--cres-electric-teal)] hover:bg-[var(--cres-electric-teal)] hover:text-white font-bold text-base py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all duration-300">
              See How We Work
            </button>
          </div>
        </div>
      </section>

      {/* 2️⃣ HOW TO READ OUR CASE STUDIES */}
      <section className="pt-0 pb-12 md:pb-20 bg-black/70 backdrop-blur-sm border border-white/20 relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black underline-custom text-[var(--cres-white)] mb-6 md:mb-8 underline-custom">
              This Is Not a Portfolio. It's Proof of Thinking.
            </h2>

            <p className="text-base md:text-xl text-white mb-8 md:mb-12 max-w-3xl mx-auto">
            We don't show screenshots to impress. We show problems → systems → outcomes. Each case focuses on decision-making, not deliverables.
          </p>

            <div className="grid grid-cols-3 gap-6 md:gap-8 text-left">
              <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-4 md:p-6 rounded-lg">
                <h3 className="text-sm md:text-base font-bold text-white mb-2 md:mb-3">Business Context</h3>
                <p className="text-xs md:text-sm text-white">Understanding the industry, market situation, and growth stage before any recommendations.</p>
              </div>

              <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-4 md:p-6 rounded-lg">
                <h3 className="text-sm md:text-base font-bold text-white mb-2 md:mb-3">Growth Challenge</h3>
                <p className="text-xs md:text-sm text-white">Identifying the real bottleneck preventing sustainable growth, not just surface symptoms.</p>
              </div>

              <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-4 md:p-6 rounded-lg">
                <h3 className="text-sm md:text-base font-bold text-white mb-2 md:mb-3">System Built</h3>
                <p className="text-xs md:text-sm text-white">The integrated solution that connects technology, processes, and business goals.</p>
              </div>

              <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-4 md:p-6 rounded-lg">
                <h3 className="text-sm md:text-base font-bold text-white mb-2 md:mb-3">Measurable Impact</h3>
                <p className="text-xs md:text-sm text-white">Real business outcomes that prove the system's effectiveness beyond vanity metrics.</p>
              </div>

              <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-4 md:p-6 rounded-lg">
                <h3 className="text-sm md:text-base font-bold text-white mb-2 md:mb-3">Lessons Learned</h3>
                <p className="text-xs md:text-sm text-white">Key insights that apply to similar businesses facing the same challenges.</p>
              </div>

              <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-4 md:p-6 rounded-lg">
                <h3 className="text-sm md:text-base font-bold text-white mb-2 md:mb-3">Decision Framework</h3>
                <p className="text-xs md:text-sm text-white">How we made strategic choices and what factors influenced our recommendations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ CASE STUDY GRID / LIST VIEW */}
      <section className="py-12 md:py-20 bg-black/70 backdrop-blur-sm border border-white/20 relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black underline-custom text-[var(--cres-white)] text-center mb-8 md:mb-12 underline-custom">
              Case Studies
            </h2>

            <div className="grid grid-cols-3 gap-6 md:gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-lg shadow-lg p-4 md:p-6 hover:shadow-xl transition-all duration-300">
                  <div className="mb-3 md:mb-4">
                    <span className="inline-block bg-[var(--cres-electric-teal)] text-white text-xs md:text-sm font-semibold px-2 md:px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>

                  <div className="mb-3 md:mb-4">
                    <h3 className="text-xs md:text-sm font-bold text-[var(--cres-orange-primary)] mb-1 md:mb-2">Problem</h3>
                    <p className="text-xs md:text-sm text-white">{study.problem}</p>
                  </div>

                  <div className="mb-3 md:mb-4">
                    <h3 className="text-xs md:text-sm font-bold text-[var(--cres-orange-primary)] mb-1 md:mb-2">Solution</h3>
                    <p className="text-xs md:text-sm text-white">{study.solution}</p>
                  </div>

                  <div className="mb-4 md:mb-6">
                    <h3 className="text-xs md:text-sm font-bold text-[var(--cres-orange-primary)] mb-1 md:mb-2">Outcome</h3>
                    <p className="text-xs md:text-sm text-white">{study.outcome}</p>
                  </div>

                  <a
                    href={`/case-studies/${study.slug}`}
                    className="inline-block bg-[var(--cres-electric-teal)] hover:bg-[#00B894] text-white font-semibold py-2 px-3 md:px-4 rounded transition-colors duration-200 text-xs md:text-sm"
                  >
                    View Case Study
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ FINAL CTA – STRATEGIC, NOT PUSHY */}
      <section className="py-12 md:py-20 bg-[var(--cres-electric-teal)] relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black underline-custom text-white mb-6 md:mb-8 underline-custom">
              Your Business Doesn't Need More Tools.
              <br />
              It Needs a System.
            </h2>

            <p className="text-base md:text-xl text-white mb-8 md:mb-12 max-w-2xl mx-auto">
            If any of these case studies feel familiar, it's not by accident. Most growing businesses hit the same ceiling — until systems are put in place.
          </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-6 md:mb-8">
              <a href="/contact" className="bg-black/70 backdrop-blur-sm border border-white/20 text-[var(--cres-electric-teal)] hover:bg-black/80 font-black text-base md:text-xl py-3 md:py-4 px-6 md:px-8 rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                Request a Growth Audit
              </a>
              <a href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-[var(--cres-electric-teal)] font-bold text-sm md:text-lg py-3 md:py-4 px-6 md:px-8 rounded-lg transition-all duration-300">
                Talk to a Specialist
              </a>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-4 md:p-6 rounded-lg">
              <p className="text-sm md:text-base text-white font-semibold">
                CRES Dynamics partners with businesses that are serious about growth.
                <br />
                We don't chase volume — we build foundations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
