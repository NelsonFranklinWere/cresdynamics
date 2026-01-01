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
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--cres-deep-navy)] via-[#0D1B2A] to-[#1B263B] bg-[url('/backround.png')] bg-repeat bg-cover bg-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--cres-electric-teal)] to-transparent"></div>
          <div className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-[var(--cres-electric-teal)] to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">
            Real Growth. Real Systems. Real Businesses.
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            How we help businesses remove bottlenecks, build systems, and grow sustainably using technology and automation.
          </p>

          <p className="text-lg text-gray-400 mb-12">
            Not experiments. Not templates. Real work done for real businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/contact" className="bg-[var(--cres-electric-teal)] hover:bg-[#00B894] text-white font-black text-xl py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
              Request a Growth Audit
            </a>
            <button className="border-2 border-[var(--cres-electric-teal)] text-[var(--cres-electric-teal)] hover:bg-[var(--cres-electric-teal)] hover:text-white font-bold text-lg py-4 px-8 rounded-lg transition-all duration-300">
              See How We Work
            </button>
          </div>
        </div>
      </section>

      {/* 2️⃣ HOW TO READ OUR CASE STUDIES */}
      <section className="py-20 bg-white bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-[var(--cres-deep-navy)] mb-8">
            This Is Not a Portfolio. It's Proof of Thinking.
          </h2>

          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We don't show screenshots to impress. We show problems → systems → outcomes. Each case focuses on decision-making, not deliverables.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-[var(--cres-deep-navy)] mb-3">Business Context</h3>
              <p className="text-gray-600">Understanding the industry, market situation, and growth stage before any recommendations.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-[var(--cres-deep-navy)] mb-3">Growth Challenge</h3>
              <p className="text-gray-600">Identifying the real bottleneck preventing sustainable growth, not just surface symptoms.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-[var(--cres-deep-navy)] mb-3">System Built</h3>
              <p className="text-gray-600">The integrated solution that connects technology, processes, and business goals.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-[var(--cres-deep-navy)] mb-3">Measurable Impact</h3>
              <p className="text-gray-600">Real business outcomes that prove the system's effectiveness beyond vanity metrics.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-[var(--cres-deep-navy)] mb-3">Lessons Learned</h3>
              <p className="text-gray-600">Key insights that apply to similar businesses facing the same challenges.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-[var(--cres-deep-navy)] mb-3">Decision Framework</h3>
              <p className="text-gray-600">How we made strategic choices and what factors influenced our recommendations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ CASE STUDY GRID / LIST VIEW */}
      <section className="py-20 bg-gray-50 bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-[var(--cres-deep-navy)] text-center mb-12">
            Case Studies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="mb-4">
                  <span className="inline-block bg-[var(--cres-electric-teal)] text-white text-sm font-semibold px-3 py-1 rounded-full">
                    {study.industry}
                  </span>
                </div>

                <div className="mb-4">
                  <h3 className="font-bold text-[var(--cres-deep-navy)] mb-2">Problem</h3>
                  <p className="text-gray-600 text-sm">{study.problem}</p>
                </div>

                <div className="mb-4">
                  <h3 className="font-bold text-[var(--cres-deep-navy)] mb-2">Solution</h3>
                  <p className="text-gray-600 text-sm">{study.solution}</p>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold text-[var(--cres-deep-navy)] mb-2">Outcome</h3>
                  <p className="text-gray-600 text-sm">{study.outcome}</p>
                </div>

                <a
                  href={`/case-studies/${study.slug}`}
                  className="inline-block bg-[var(--cres-electric-teal)] hover:bg-[#00B894] text-white font-semibold py-2 px-4 rounded transition-colors duration-200 text-sm"
                >
                  View Case Study
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6️⃣ FINAL CTA – STRATEGIC, NOT PUSHY */}
      <section className="py-20 bg-[var(--cres-electric-teal)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-8">
            Your Business Doesn't Need More Tools.
            <br />
            It Needs a System.
          </h2>

          <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
            If any of these case studies feel familiar, it's not by accident. Most growing businesses hit the same ceiling — until systems are put in place.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a href="/contact" className="bg-white text-[var(--cres-electric-teal)] hover:bg-gray-100 font-black text-xl py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
              Request a Growth Audit
            </a>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[var(--cres-electric-teal)] font-bold text-lg py-4 px-8 rounded-lg transition-all duration-300">
              Talk to a Specialist
            </button>
          </div>

          <div className="bg-white/10 p-6 rounded-lg">
            <p className="text-white font-semibold">
              CRES Dynamics partners with businesses that are serious about growth.
              <br />
              We don't chase volume — we build foundations.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
