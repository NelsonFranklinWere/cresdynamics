'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BoutiqueCaseStudyPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* SECTION 1: Quiet Authority Hero */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--cres-deep-navy)] via-[#0D1B2A] to-[#1B263B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--cres-electric-teal)] to-transparent"></div>
          <div className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-[var(--cres-electric-teal)] to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">
            When your business exists<br />
            <span className="text-[var(--cres-electric-teal)]">— but customers can't find it.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            This boutique had quality products and loyal walk-in customers, but struggled with online visibility.
          </p>
        </div>
      </section>

      {/* SECTION 2: Pattern Recognition */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-[var(--cres-deep-navy)] mb-8">
            Different industries. The same hidden problems.
          </h2>

          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Most businesses face structural problems, not effort problems. Growth becomes tied to the owner, opportunities slip away after hours, visibility depends entirely on paid advertising, and there's no predictability in the business model.
          </p>

          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-lg text-[var(--cres-deep-navy)] font-medium">
              This creates a ceiling effect. The business can grow to a certain point through effort and hustle, but then stalls because the foundational systems can't support further expansion.
            </p>
          </div>
        </div>
      </section>

      {/* CASE STUDY CARD STRUCTURE */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">

          {/* Industry Label */}
          <div className="text-center mb-8">
            <span className="inline-block bg-[var(--cres-electric-teal)] text-white text-sm font-semibold px-4 py-2 rounded-full">
              Retail · E-commerce · Karen, Nairobi
            </span>
          </div>

          {/* The Situation (Reality-Based) */}
          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <h3 className="text-2xl font-bold text-[var(--cres-deep-navy)] mb-6">The Situation</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The boutique depended on occasional Instagram ads, inconsistent traffic patterns, and had no predictable lead flow. Sales fluctuated significantly, and growth felt uncertain despite quality products and a desirable location.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              The business had loyal walk-in customers but lacked the online infrastructure to capture the broader Nairobi fashion market. Marketing efforts were temporary and reactive rather than strategic and compounding.
            </p>
          </div>

          {/* The Core Issue */}
          <div className="bg-[var(--cres-deep-navy)] text-white p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold text-[var(--cres-electric-teal)] mb-6">The Core Issue</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              The problem wasn't advertising effectiveness or product quality. It was discoverability. Ads brought temporary attention but created no lasting authority or trust signals.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Once advertising stopped, traffic disappeared completely. There was no system to capture long-term demand or build organic visibility. Marketing was treated as an expense rather than an investment in sustainable growth.
            </p>
          </div>

          {/* The Strategic Rethink */}
          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <h3 className="text-2xl font-bold text-[var(--cres-deep-navy)] mb-6">The Strategic Rethink</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Instead of chasing attention through ads, the focus shifted to building a system that attracts customers before they're ready to buy. Visibility needed to compound over time rather than reset with each advertising campaign.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-[var(--cres-electric-teal)]">SEO-Optimized Website</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Long-term discovery through organic search</li>
                  <li>• Fashion-specific keyword targeting</li>
                  <li>• Mobile-optimized shopping experience</li>
                  <li>• Trust-building design elements</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-[var(--cres-electric-teal)]">Conversion-Focused Systems</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Webinar-style educational content</li>
                  <li>• Local search dominance for fashion</li>
                  <li>• Clear user journey mapping</li>
                  <li>• Data-driven optimization tools</li>
                </ul>
              </div>
            </div>
          </div>

          {/* The Outcome */}
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold text-[var(--cres-deep-navy)] mb-6">The Outcome</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The boutique established predictable monthly lead flow with reduced dependency on paid advertising. Customer behavior became visible and measurable, with clear insights into shopping patterns and preferences.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Brand trust strengthened through consistent online presence, and growth became repeatable rather than accidental. The business developed a foundation for sustainable expansion beyond the initial location.
            </p>
          </div>

          {/* Reflection Prompt */}
          <div className="bg-[var(--cres-electric-teal)] text-white p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-6">Reflection Point</h3>
            <p className="text-lg leading-relaxed mb-6">
              If your advertising stopped today, would customers still find you? Do you have systems in place that capture demand beyond paid campaigns?
            </p>
            <p className="text-lg leading-relaxed">
              In a market where attention is temporary, how are you building the permanent visibility your business needs to thrive?
            </p>
          </div>

          {/* Low-Pressure CTA */}
          <div className="text-center">
            <div className="space-y-4">
              <p className="text-gray-600 text-lg">
                Interested in building visibility that lasts beyond advertising campaigns?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/case-studies" className="border border-[var(--cres-electric-teal)] text-[var(--cres-electric-teal)] hover:bg-[var(--cres-electric-teal)] hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                  ← Back to Case Studies
                </a>
                <a href="/contact" className="bg-[var(--cres-electric-teal)] hover:bg-[#00B894] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                  Explore the System
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL SECTION: Silent Urgency Close */}
      <section className="py-20 bg-[var(--cres-deep-navy)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-8">
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
