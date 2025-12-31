'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ConsultingSEOCaseStudyPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--cres-deep-navy)] via-[#0D1B2A] to-[#1B263B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--cres-electric-teal)] to-transparent"></div>
          <div className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-[var(--cres-electric-teal)] to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">
            Consulting SEO Growth System
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            From invisible to industry authority
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/contact" className="bg-[var(--cres-electric-teal)] hover:bg-[#00B894] text-white font-bold text-lg py-3 px-6 rounded-lg transition-all duration-300">
              Request a Growth Audit
            </a>
            <a href="/case-studies" className="border border-gray-400 text-gray-300 hover:text-white hover:border-white font-semibold text-lg py-3 px-6 rounded-lg transition-all duration-300">
              ← Back to Case Studies
            </a>
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 1: BUSINESS CONTEXT */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-[var(--cres-deep-navy)] mb-8">
            The Business
          </h2>

          <div className="space-y-6 text-gray-700">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-2">Industry</h3>
                <p>Business consulting and advisory services</p>
              </div>
              <div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-2">Business Size</h3>
                <p>Small boutique firm with expert partners</p>
              </div>
              <div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-2">Market Situation</h3>
                <p>Competitive Nairobi consulting market with many generalists</p>
              </div>
              <div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-2">Growth Stage</h3>
                <p>Quality work but struggling with client acquisition</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <p className="text-lg">
                This consulting firm had exceptional expertise and satisfied clients, but remained invisible to potential clients searching for consulting services online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 2: THE REAL PROBLEM */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-[var(--cres-deep-navy)] mb-8">
            The Challenge
          </h2>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[var(--cres-electric-teal)]">What Was Broken</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• No online presence for their specialty services</li>
                  <li>• Generic website that didn't showcase expertise</li>
                  <li>• Not appearing in relevant search results</li>
                  <li>• No content establishing thought leadership</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[var(--cres-electric-teal)]">What Was Costing Growth</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Clients finding competitors instead</li>
                  <li>• Difficulty attracting ideal client types</li>
                  <li>• Over-reliance on referrals and networking</li>
                  <li>• Perception of being just another consulting firm</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg border-l-4 border-[var(--cres-electric-teal)]">
              <p className="font-semibold text-[var(--cres-deep-navy)] mb-2">The Root Issue</p>
              <p className="text-gray-700">
                They were excellent consultants but invisible online. In a digital age, potential clients couldn't find them when searching for the specific consulting services they offered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 3: WHY PREVIOUS ATTEMPTS FAILED */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-[var(--cres-deep-navy)] mb-8">
            Why Previous Solutions Didn't Work
          </h2>

          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-3">Generic Website Builders</h3>
                <p className="text-gray-600 text-sm">Created a "professional-looking" site but didn't address SEO or content strategy for their specific consulting niche.</p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-3">Basic SEO Services</h3>
                <p className="text-gray-600 text-sm">Generic SEO packages that improved rankings but didn't establish them as thought leaders in their consulting specialty.</p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-3">No Content Strategy</h3>
                <p className="text-gray-600 text-sm">Posted occasional blog posts but had no systematic approach to content marketing or authority building.</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-red-50 rounded-lg border border-red-200">
              <p className="text-red-800 font-semibold mb-2">The Pattern</p>
              <p className="text-red-700">
                They treated SEO as a technical task rather than a strategic growth system. They needed to become the authoritative voice in their consulting niche, not just another website with keywords.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 4: THE CRES APPROACH */}
      <section className="py-16 bg-[var(--cres-deep-navy)]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-8">
            Our Thinking & Strategy
          </h2>

          <div className="space-y-6 text-gray-300">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-4">Questions We Asked</h3>
                <ul className="space-y-3">
                  <li>• What makes their consulting approach unique?</li>
                  <li>• Who are their ideal clients and what do they search for?</li>
                  <li>• What problems do they solve that others don't?</li>
                  <li>• How can they position themselves as the go-to experts?</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-4">What We Prioritized</h3>
                <ul className="space-y-3">
                  <li>• Authority over visibility</li>
                  <li>• Content that demonstrates expertise</li>
                  <li>• Client outcomes over service features</li>
                  <li>• Long-term positioning over quick wins</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-800/50 rounded-lg">
              <p className="text-lg text-white font-semibold mb-3">Our Strategic Decision</p>
              <p className="text-gray-300">
                Instead of chasing generic search terms, we positioned them as the authoritative consulting voice in their specialty. SEO became a tool for authority building, not just traffic generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 5: THE SYSTEM BUILT */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-[var(--cres-deep-navy)] mb-8">
            The System We Implemented
          </h2>

          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">1</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">Authority-Driven Website</h3>
                <p className="text-gray-700 mb-3">A website that showcases expertise and positions them as thought leaders in their consulting niche.</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Case studies showcasing real client transformations</li>
                  <li>• Blog content demonstrating deep industry knowledge</li>
                  <li>• Clear positioning as specialists, not generalists</li>
                  <li>• Client testimonials focusing on outcomes</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">Niche SEO Strategy</h3>
                <p className="text-gray-700 mb-3">Targeted SEO that focuses on high-value keywords their ideal clients actually search for.</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Long-tail keywords specific to consulting challenges</li>
                  <li>• Local SEO optimization for Nairobi business clients</li>
                  <li>• Technical SEO ensuring fast, mobile-friendly experience</li>
                  <li>• Schema markup for better search result display</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">Content Authority Engine</h3>
                <p className="text-gray-700 mb-3">Systematic content creation that establishes them as the definitive voice in their consulting specialty.</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Monthly content calendar with strategic themes</li>
                  <li>• In-depth guides solving real client problems</li>
                  <li>• Client success stories and case studies</li>
                  <li>• Industry insights positioning as thought leaders</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-[var(--cres-electric-teal)]/10 rounded-lg border border-[var(--cres-electric-teal)]/20">
              <p className="text-[var(--cres-deep-navy)] font-semibold">
                System Integration: SEO drives qualified traffic to authoritative content that converts visitors into consulting conversations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 6: RESULTS & IMPACT */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-[var(--cres-deep-navy)] mb-8">
            The Impact
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[var(--cres-electric-teal)] mb-3">Qualified Traffic</h3>
              <p className="text-gray-700">Consistent flow of potential clients actively searching for their specific consulting services, not random website visitors.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[var(--cres-electric-teal)] mb-3">Market Positioning</h3>
              <p className="text-gray-700">Established as the authoritative consulting voice in their specialty, making competitors' generic approaches less appealing.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[var(--cres-electric-teal)] mb-3">Client Quality</h3>
              <p className="text-gray-700">Attracting clients who understand their value and are willing to invest in quality consulting rather than seeking the lowest price.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[var(--cres-electric-teal)] mb-3">Sustainable Growth</h3>
              <p className="text-gray-700">Built a foundation that continues to attract ideal clients without ongoing paid advertising dependency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 7: KEY INSIGHTS */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-[var(--cres-deep-navy)] mb-8">
            What This Case Teaches
          </h2>

          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
              <div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-1">Authority beats visibility</h3>
                <p className="text-gray-700">It's better to be the trusted expert in a niche than the most visible generalist in a broad market.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
              <div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-1">Content demonstrates competence</h3>
                <p className="text-gray-700">Well-crafted content that solves real problems proves expertise better than any marketing claim.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
              <div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-1">SEO serves business goals</h3>
                <p className="text-gray-700">Search optimization should drive qualified prospects to conversion opportunities, not just increase traffic numbers.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">4</div>
              <div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-1">Positioning creates pricing power</h3>
                <p className="text-gray-700">Clear positioning as specialists allows premium pricing and attracts clients who value quality over cost.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 8: RELEVANCE CHECK */}
      <section className="py-16 bg-[var(--cres-electric-teal)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-white mb-8">
            Is This Similar to Your Business?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">This applies to you if:</h3>
              <ul className="text-white space-y-2 text-left">
                <li>• You're an expert in your field but struggle with visibility</li>
                <li>• You want to attract premium clients, not price shoppers</li>
                <li>• Your services require trust and credibility to sell</li>
                <li>• You want to establish thought leadership in your industry</li>
                <li>• You prefer organic growth over constant advertising</li>
              </ul>
            </div>

            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Let's discuss your situation:</h3>
              <ul className="text-white space-y-2 text-left">
                <li>• Professional services (consulting, legal, accounting)</li>
                <li>• B2B businesses requiring credibility</li>
                <li>• Expertise-based service providers</li>
                <li>• Businesses wanting premium positioning</li>
                <li>• Companies needing authority in competitive markets</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/contact" className="bg-white text-[var(--cres-electric-teal)] hover:bg-gray-100 font-black text-xl py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
              Let's Map Your Growth System
            </a>
            <a href="/case-studies" className="border-2 border-white text-white hover:bg-white hover:text-[var(--cres-electric-teal)] font-bold text-lg py-4 px-8 rounded-lg transition-all duration-300">
              View More Case Studies
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
