'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FloristCaseStudyPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* SECTION 1: Quiet Authority Hero */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--cres-deep-navy)] via-[#0D1B2A] to-[#1B263B] bg-[url('/backround.png')] bg-repeat bg-cover bg-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--cres-electric-teal)] to-transparent"></div>
          <div className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-[var(--cres-electric-teal)] to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-[0-9]xl md:text-[0-9]xl lg:text-[0-9]xl font-black underline-custom text-white leading-tight mb-8">
            Businesses don't fail from lack of effort<br />
            <span className="text-[var(--cres-electric-teal)]">— they fail from lack of systems.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            These case studies show how growth stalls silently, and how the right infrastructure unlocks scale.
          </p>
        </div>
      </section>

      {/* SECTION 2: Pattern Recognition */}
      <section className="py-12 md:py-20 bg-black/70 backdrop-blur-sm border border-white/20 bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-[0-9]xl font-black underline-custom text-[var(--cres-deep-navy)] mb-8">
            Different industries. The same hidden problems.
          </h2>

          <p className="text-xl text-white mb-12 max-w-3xl mx-auto">
            Most businesses face structural problems, not effort problems. Growth becomes tied to the owner, opportunities slip away after hours, visibility depends entirely on paid advertising, and there's no predictability in the business model.
          </p>

          <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-8 rounded-lg">
            <p className="text-lg text-[var(--cres-deep-navy)] font-medium">
              This creates a ceiling effect. The business can grow to a certain point through effort and hustle, but then stalls because the foundational systems can't support further expansion.
            </p>
          </div>
        </div>
      </section>

      {/* CASE STUDY CARD STRUCTURE */}
      <section className="py-12 md:py-20 bg-black/70 backdrop-blur-sm border border-white/20 bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6">

          {/* Industry Label */}
          <div className="text-center mb-8">
            <span className="inline-block bg-[var(--cres-electric-teal)] text-white text-sm font-semibold px-4 py-2 rounded-full">
              Florist Business · Retail Services
            </span>
          </div>

          {/* Problem (Reality-Based) */}
          <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-8 rounded-lg shadow-sm mb-8">
            <h3 className="text-2xl font-bold text-[var(--cres-deep-navy)] mb-6">The Situation</h3>
            <p className="text-white text-lg leading-relaxed mb-6">
              The business operated successfully within its local market, with consistent orders and satisfied customers. However, expansion efforts consistently stalled at the point where growth would require additional staff or new locations.
            </p>
            <p className="text-white text-lg leading-relaxed">
              Customer acquisition remained entirely dependent on word-of-mouth referrals and occasional paid advertising bursts. There was no systematic approach to capturing demand or converting website visitors into paying customers.
            </p>
          </div>

          {/* What Was Actually Holding Growth Back */}
          <div className="bg-[var(--cres-deep-navy)] text-white p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold text-[var(--cres-electric-teal)] mb-6">The Constraint</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              The issue wasn't insufficient demand or poor service quality. The constraint was systemic dependence on the owner's direct involvement in every transaction and customer interaction.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Growth relied entirely on personal relationships, manual order processing, and reactive customer service. This created a ceiling where expansion would either dilute service quality or overwhelm the existing operational capacity.
            </p>
          </div>

          {/* Our Approach (Architectural) */}
          <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-8 rounded-lg shadow-sm mb-8">
            <h3 className="text-2xl font-bold text-[var(--cres-deep-navy)] mb-6">The System Architecture</h3>
            <p className="text-white text-lg leading-relaxed mb-8">
              We designed a digital infrastructure that allowed customer acquisition and order processing to operate independently of direct owner involvement, while maintaining the personal service quality that drove customer loyalty.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-[var(--cres-electric-teal)]">Digital Presence Infrastructure</h4>
                <ul className="text-white space-y-2">
                  <li>• Website as a 24/7 customer acquisition channel</li>
                  <li>• SEO-driven visibility for organic search traffic</li>
                  <li>• Online ordering system with real-time availability</li>
                  <li>• Automated inquiry response and qualification</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-[var(--cres-electric-teal)]">Operational Scaling Framework</h4>
                <ul className="text-white space-y-2">
                  <li>• Standardized order processing workflows</li>
                  <li>• Customer data collection and segmentation</li>
                  <li>• Automated follow-up and retention systems</li>
                  <li>• Performance tracking and optimization tools</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Outcome (Readiness-Focused) */}
          <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold text-[var(--cres-deep-navy)] mb-6">The Outcome</h3>
            <p className="text-white text-lg leading-relaxed mb-6">
              The business established clear visibility into customer demand patterns and developed operational processes that could scale beyond a single location or owner involvement.
            </p>
            <p className="text-white text-lg leading-relaxed">
              Customer acquisition became predictable and measurable, with systems in place to handle increased order volume without compromising service quality or requiring immediate staff expansion.
            </p>
          </div>

          {/* Reflection Prompt */}
          <div className="bg-[var(--cres-electric-teal)] text-white p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-6">Reflection Point</h3>
            <p className="text-lg leading-relaxed mb-6">
              If your business operations stopped depending on your direct involvement today, would growth continue, or would everything grind to a halt?
            </p>
            <p className="text-lg leading-relaxed">
              What systems would need to be in place for your business to handle a 3x increase in demand without you personally managing every interaction?
            </p>
          </div>

          {/* Low-Pressure CTA */}
          <div className="text-center">
            <div className="space-y-4">
              <p className="text-white text-lg">
                Interested in understanding how this system could apply to your business constraints?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/case-studies" className="border border-[var(--cres-electric-teal)] text-[var(--cres-electric-teal)] hover:bg-[var(--cres-electric-teal)] hover:text-white font-semibold py-3 px-4 md:px-6 rounded-lg transition-all duration-300">
                  ← Back to Case Studies
                </a>
                <a href="/contact" className="bg-[var(--cres-electric-teal)] hover:bg-[#00B894] text-white font-semibold py-3 px-4 md:px-6 rounded-lg transition-all duration-300">
                  Explore the System
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL SECTION: Silent Urgency Close */}
      <section className="py-12 md:py-20 bg-[var(--cres-deep-navy)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-[0-9]xl font-black underline-custom text-white mb-8">
            Growth doesn't break businesses.<br />
            <span className="text-[var(--cres-electric-teal)]">Weak systems do.</span>
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            The difference between businesses that scale and those that stall is rarely effort. It's whether the systems can support the next level of growth without breaking under the strain.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/contact" className="bg-[var(--cres-electric-teal)] hover:bg-[#00B894] text-white font-black text-lg py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
              Discuss your growth constraints
            </a>
            <a href="/insights" className="border-2 border-gray-400 text-gray-300 hover:text-white hover:border-white font-semibold text-lg py-4 px-8 rounded-lg transition-all duration-300">
              Read more insights
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
