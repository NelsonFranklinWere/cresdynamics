'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RealEstateCaseStudyPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-20 bg-gradient-to-br bg-[url('/backround.png')] bg-repeat bg-cover bg-center from-[var(--cres-deep-navy)] via-[#0D1B2A] to-[#1B263B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--cres-electric-teal)] to-transparent"></div>
          <div className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-[var(--cres-electric-teal)] to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">
            Real Estate Brand Authority
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            From commodity to premium positioning
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

      <section className="py-16 bg-white bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-[var(--cres-deep-navy)] mb-8">The Business</h2>
          <div className="space-y-6 text-gray-700">
            <div className="grid md:grid-cols-2 gap-8">
              <div><h3 className="font-bold text-[var(--cres-deep-navy)] mb-2">Industry</h3><p>Real estate agency specializing in luxury properties</p></div>
              <div><h3 className="font-bold text-[var(--cres-deep-navy)] mb-2">Business Size</h3><p>Established agency with premium client base</p></div>
              <div><h3 className="font-bold text-[var(--cres-deep-navy)] mb-2">Market Situation</h3><p>Competitive Nairobi luxury real estate market</p></div>
              <div><h3 className="font-bold text-[var(--cres-deep-navy)] mb-2">Growth Stage</h3><p>Premium positioning but price-driven competition</p></div>
            </div>
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <p className="text-lg">This luxury real estate agency had excellent properties but struggled to justify premium pricing due to lack of perceived authority and trust.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-[var(--cres-deep-navy)] mb-8">The Challenge</h2>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[var(--cres-electric-teal)]">What Was Broken</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• No clear brand differentiation from competitors</li>
                  <li>• Generic marketing that focused on features, not value</li>
                  <li>• Lack of trust and authority in luxury market</li>
                  <li>• Price-driven rather than value-driven sales</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[var(--cres-electric-teal)]">What Was Costing Growth</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Clients choosing cheaper alternatives</li>
                  <li>• Reduced profit margins on luxury deals</li>
                  <li>• Difficulty attracting high-value clients</li>
                  <li>• Commoditization of luxury services</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-white rounded-lg border-l-4 border-[var(--cres-electric-teal)]">
              <p className="font-semibold text-[var(--cres-deep-navy)] mb-2">The Root Issue</p>
              <p className="text-gray-700">They were offering luxury services but competing on price because they hadn't established the brand authority and trust required for premium positioning.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-[var(--cres-deep-navy)] mb-8">Why Previous Solutions Didn't Work</h2>
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">📸</div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-3">Property Photography</h3>
                <p className="text-gray-600 text-sm">Beautiful photos helped but didn't address the brand perception problem.</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-3">Listing Platforms</h3>
                <p className="text-gray-600 text-sm">More exposure helped but made them look like every other agent online.</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-3">Logo & Branding</h3>
                <p className="text-gray-600 text-sm">Visual identity helped but didn't create the authority and trust needed for premium pricing.</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-red-50 rounded-lg border border-red-200">
              <p className="text-red-800 font-semibold mb-2">The Pattern</p>
              <p className="text-red-700">They were treating luxury real estate like a commodity business, focusing on transactions rather than building a premium brand experience.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--cres-deep-navy)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-8">Our Thinking & Strategy</h2>
          <div className="space-y-6 text-gray-300">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-4">Questions We Asked</h3>
                <ul className="space-y-3">
                  <li>• What makes their service truly exceptional?</li>
                  <li>• How do luxury buyers make decisions differently?</li>
                  <li>• What authority signals matter most in real estate?</li>
                  <li>• How can they justify premium pricing?</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-4">What We Prioritized</h3>
                <ul className="space-y-3">
                  <li>• Authority over visibility</li>
                  <li>• Trust-building content</li>
                  <li>• Premium client experience</li>
                  <li>• Value-based positioning</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-gray-800/50 rounded-lg">
              <p className="text-lg text-white font-semibold mb-3">Our Strategic Decision</p>
              <p className="text-gray-300">Instead of competing on price, we positioned them as the authoritative luxury real estate experts, creating a brand that justifies premium pricing through demonstrated value and trust.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-[var(--cres-deep-navy)] mb-8">The System We Implemented</h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">1</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">Authority-Driven Website</h3>
                <p className="text-gray-700 mb-3">A website that positions them as luxury real estate experts, not just property listings.</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Market insights and luxury property trends</li>
                  <li>• Client success stories and testimonials</li>
                  <li>• Premium design reflecting luxury positioning</li>
                  <li>• Clear value propositions for high-end clients</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">Thought Leadership Content</h3>
                <p className="text-gray-700 mb-3">Regular content that establishes them as Nairobi's premier luxury real estate authority.</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Luxury market analysis and predictions</li>
                  <li>• Investment opportunity insights</li>
                  <li>• Lifestyle content for high-net-worth individuals</li>
                  <li>• Exclusive property market reports</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">Premium Client Experience</h3>
                <p className="text-gray-700 mb-3">End-to-end luxury experience that justifies premium pricing and builds lifetime loyalty.</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Personalized property search and recommendations</li>
                  <li>• VIP property tours and exclusive access</li>
                  <li>• Dedicated relationship management</li>
                  <li>• Post-sale luxury lifestyle services</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-[var(--cres-electric-teal)]/10 rounded-lg border border-[var(--cres-electric-teal)]/20">
              <p className="text-[var(--cres-deep-navy)] font-semibold">System Integration: Every touchpoint reinforces their luxury positioning and authority in the premium real estate market.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-[var(--cres-deep-navy)] mb-8">The Impact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[var(--cres-electric-teal)] mb-3">Premium Pricing Power</h3>
              <p className="text-gray-700">Clients now willingly pay premium commissions because they see the exceptional value and authority.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[var(--cres-electric-teal)] mb-3">Client Retention</h3>
              <p className="text-gray-700">High-net-worth clients return for multiple transactions and refer others within their network.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[var(--cres-electric-teal)] mb-3">Market Authority</h3>
              <p className="text-gray-700">Recognized as Nairobi's premier luxury real estate experts by both clients and industry peers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[var(--cres-electric-teal)] mb-3">Referral Business</h3>
              <p className="text-gray-700">Premium clients become brand ambassadors, generating high-quality referrals from their networks.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-[var(--cres-deep-navy)] mb-8">What This Case Teaches</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
              <div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-1">Authority creates pricing power</h3>
                <p className="text-gray-700">When clients perceive you as the authoritative expert, price becomes secondary to the value you provide.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
              <div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-1">Content builds credibility</h3>
                <p className="text-gray-700">Regular, valuable content establishes expertise and trust faster than any advertising campaign.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
              <div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-1">Luxury requires luxury positioning</h3>
                <p className="text-gray-700">Premium services need premium positioning. Generic marketing undermines luxury perception.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">4</div>
              <div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-1">Trust drives premium decisions</h3>
                <p className="text-gray-700">High-value purchases require high levels of trust. Authority and credibility are the foundation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--cres-electric-teal)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-white mb-8">Is This Similar to Your Business?</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">This applies to you if:</h3>
              <ul className="text-white space-y-2 text-left">
                <li>• You offer premium services but compete on price</li>
                <li>• Your clients need to trust you before buying</li>
                <li>• You want to establish thought leadership</li>
                <li>• You're tired of being seen as a commodity</li>
                <li>• You want to command premium pricing</li>
              </ul>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Let's discuss your situation:</h3>
              <ul className="text-white space-y-2 text-left">
                <li>• Professional services requiring credibility</li>
                <li>• Luxury or premium product positioning</li>
                <li>• B2B sales with long decision cycles</li>
                <li>• Services needing authority and trust</li>
                <li>• Markets with educated, discerning buyers</li>
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
