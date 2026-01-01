'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ManufacturingCaseStudyPage() {
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
            Manufacturing Digital Transformation
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            From traditional operations to digital growth
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
              <div><h3 className="font-bold text-[var(--cres-deep-navy)] mb-2">Industry</h3><p>Manufacturing company producing industrial equipment</p></div>
              <div><h3 className="font-bold text-[var(--cres-deep-navy)] mb-2">Business Size</h3><p>Established manufacturer with traditional operations</p></div>
              <div><h3 className="font-bold text-[var(--cres-deep-navy)] mb-2">Market Situation</h3><p>Growing East African industrial market with increasing demand</p></div>
              <div><h3 className="font-bold text-[var(--cres-deep-navy)] mb-2">Growth Stage</h3><p>Operationally sound but digitally disconnected from market</p></div>
            </div>
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <p className="text-lg">This manufacturing company was operationally excellent but digitally invisible, missing growth opportunities in an increasingly digital marketplace.</p>
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
                  <li>• No digital presence for B2B customers</li>
                  <li>• Manual sales and inquiry processes</li>
                  <li>• Limited visibility in industrial markets</li>
                  <li>• Traditional marketing disconnected from digital buyers</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[var(--cres-electric-teal)]">What Was Costing Growth</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Missing digital sales opportunities</li>
                  <li>• Limited market reach beyond local networks</li>
                  <li>• Difficulty attracting younger, digital-native buyers</li>
                  <li>• Competitive disadvantage in digital marketplace</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-white rounded-lg border-l-4 border-[var(--cres-electric-teal)]">
              <p className="font-semibold text-[var(--cres-deep-navy)] mb-2">The Root Issue</p>
              <p className="text-gray-700">They were manufacturing leaders in their field but operating in a digital world. Modern industrial buyers research, compare, and purchase online, but this company was invisible in digital channels.</p>
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
                <div className="text-4xl mb-4">📞</div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-3">Trade Show Focus</h3>
                <p className="text-gray-600 text-sm">Excellent at industry events but missing the digital buyers who research online first.</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-3">Relationship Selling</h3>
                <p className="text-gray-600 text-sm">Strong network but couldn't scale beyond personal relationships in a growing market.</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-3">Basic Website</h3>
                <p className="text-gray-600 text-sm">Had a "brochure website" but it didn't convert inquiries or showcase their manufacturing expertise.</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-red-50 rounded-lg border border-red-200">
              <p className="text-red-800 font-semibold mb-2">The Pattern</p>
              <p className="text-red-700">They were using traditional industrial marketing tactics in a digital marketplace. B2B buyers now expect digital experiences, detailed specifications, and seamless purchasing processes.</p>
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
                  <li>• How do industrial buyers research equipment?</li>
                  <li>• What information do they need to make purchase decisions?</li>
                  <li>• How can we bridge traditional manufacturing with digital marketing?</li>
                  <li>• What systems do they need for digital growth?</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-4">What We Prioritized</h3>
                <ul className="space-y-3">
                  <li>• Educational content over sales pitches</li>
                  <li>• Technical credibility and expertise</li>
                  <li>• Streamlined digital sales process</li>
                  <li>• Integration with existing operations</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-gray-800/50 rounded-lg">
              <p className="text-lg text-white font-semibold mb-3">Our Strategic Decision</p>
              <p className="text-gray-300">Instead of forcing digital tactics onto traditional operations, we created a comprehensive digital ecosystem that enhanced their manufacturing strengths while opening new markets.</p>
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
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">Technical Authority Website</h3>
                <p className="text-gray-700 mb-3">A website that showcases manufacturing expertise and provides the technical information industrial buyers need.</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Detailed product specifications and technical data</li>
                  <li>• Manufacturing process insights and quality standards</li>
                  <li>• Industry knowledge base and technical resources</li>
                  <li>• B2B-focused design optimized for industrial decision-makers</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">Digital Sales Enablement</h3>
                <p className="text-gray-700 mb-3">Tools and systems that support the entire B2B sales process from inquiry to delivery.</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Automated inquiry response and qualification</li>
                  <li>• Product configurator for custom equipment needs</li>
                  <li>• Integration with existing CRM and manufacturing systems</li>
                  <li>• Digital quote generation and approval workflows</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">Content & Thought Leadership</h3>
                <p className="text-gray-700 mb-3">Strategic content that positions them as industrial manufacturing experts in East Africa.</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Industry insights and manufacturing trends</li>
                  <li>• Technical guides and best practices</li>
                  <li>• Case studies of successful implementations</li>
                  <li>• Educational content for industrial buyers</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-[var(--cres-electric-teal)]/10 rounded-lg border border-[var(--cres-electric-teal)]/20">
              <p className="text-[var(--cres-deep-navy)] font-semibold">System Integration: Digital presence enhances manufacturing operations while opening new markets and customer relationships.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-[var(--cres-deep-navy)] mb-8">The Impact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[var(--cres-electric-teal)] mb-3">New Market Opportunities</h3>
              <p className="text-gray-700">Access to digital-native industrial buyers and new geographic markets beyond traditional networks.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[var(--cres-electric-teal)] mb-3">Lead Quality Improvement</h3>
              <p className="text-gray-700">Digital inquiries are more qualified and ready to purchase, reducing sales cycle time.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[var(--cres-electric-teal)] mb-3">Operational Efficiency</h3>
              <p className="text-gray-700">Automated processes handle routine inquiries, allowing technical staff to focus on complex customer needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[var(--cres-electric-teal)] mb-3">Market Position</h3>
              <p className="text-gray-700">Established as a forward-thinking manufacturer that understands modern industrial buying processes.</p>
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
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-1">Traditional excellence needs digital presence</h3>
                <p className="text-gray-700">Even the best manufacturing operations remain limited without digital visibility and modern sales processes.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
              <div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-1">B2B buyers are digital first</h3>
                <p className="text-gray-700">Industrial buyers research extensively online. Manufacturing companies need digital credibility to compete.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
              <div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-1">Technical authority drives sales</h3>
                <p className="text-gray-700">Industrial buyers need detailed technical information. Authority content converts browsers into buyers.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">4</div>
              <div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-1">Digital enhances operations</h3>
                <p className="text-gray-700">Digital systems don't replace manufacturing excellence — they amplify it and open new opportunities.</p>
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
                <li>• You're operationally excellent but digitally invisible</li>
                <li>• Your customers research extensively before buying</li>
                <li>• You sell complex, technical products or services</li>
                <li>• You want to reach new markets beyond local networks</li>
                <li>• You're ready to modernize your sales and marketing</li>
              </ul>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Let's discuss your situation:</h3>
              <ul className="text-white space-y-2 text-left">
                <li>• Manufacturing or industrial companies</li>
                <li>• B2B businesses with technical products</li>
                <li>• Traditional companies needing digital transformation</li>
                <li>• Companies with complex sales processes</li>
                <li>• Businesses wanting to expand market reach</li>
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
