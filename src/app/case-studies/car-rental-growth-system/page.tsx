'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CarRentalCaseStudyPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br bg-[url('/backround.png')] bg-repeat bg-cover bg-center from-[var(--cres-deep-navy)] via-[#0D1B2A] to-[#1B263B] bg-[url('/backround.png')] bg-repeat bg-cover bg-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--cres-electric-teal)] to-transparent"></div>
          <div className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-[var(--cres-electric-teal)] to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-[0-9]xl md:text-[0-9]xl lg:text-[0-9]xl font-black underline-custom text-white leading-tight mb-8">
            Car Rental Growth System
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            From fully booked to scalable expansion
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/contact" className="bg-[var(--cres-electric-teal)] hover:bg-[#00B894] text-white font-bold text-lg py-3 px-4 md:px-6 rounded-lg transition-all duration-300">
              Request a Growth Audit
            </a>
            <a href="/case-studies" className="border border-gray-400 text-gray-300 hover:text-white hover:border-white font-semibold text-lg py-3 px-4 md:px-6 rounded-lg transition-all duration-300">
              ← Back to Case Studies
            </a>
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 1: BUSINESS CONTEXT */}
      <section className="py-16 bg-black/70 backdrop-blur-sm border border-white/20 bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-[0-9]xl font-black underline-custom text-[var(--cres-deep-navy)] mb-8">
            The Business
          </h2>

          <div className="space-y-6 text-white">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-2">Industry</h3>
                <p>Car rental services in Nairobi, Kenya</p>
              </div>
              <div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-2">Business Size</h3>
                <p>Established with 2 showrooms, 50+ vehicles</p>
              </div>
              <div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-2">Market Situation</h3>
                <p>Growing Nairobi car rental market with increasing tourism and business travel</p>
              </div>
              <div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-2">Growth Stage</h3>
                <p>Operationally successful but hitting scaling limitations</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-black/70 backdrop-blur-sm border border-white/20 rounded-lg">
              <p className="text-lg">
                This business was fully booked most days but couldn't grow beyond their current capacity. They had proven their operational model worked, but lacked the systems to scale efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 2: THE REAL PROBLEM */}
      <section className="py-16 bg-black/70 backdrop-blur-sm border border-white/20 bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-[0-9]xl font-black underline-custom text-[var(--cres-deep-navy)] mb-8">
            The Challenge
          </h2>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[var(--cres-electric-teal)]">What Was Broken</h3>
                <ul className="space-y-2 text-white">
                  <li>• No digital booking system - all reservations by phone</li>
                  <li>• No online visibility for walk-in customers</li>
                  <li>• Manual inventory tracking across multiple locations</li>
                  <li>• No customer data collection or follow-up system</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[var(--cres-electric-teal)]">What Was Costing Growth</h3>
                <ul className="space-y-2 text-white">
                  <li>• Lost bookings during business hours</li>
                  <li>• No ability to showcase full inventory online</li>
                  <li>• Time wasted on repetitive customer inquiries</li>
                  <li>• No system to identify and retain high-value customers</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-black/70 backdrop-blur-sm border border-white/20 rounded-lg border-l-4 border-[var(--cres-electric-teal)]">
              <p className="font-semibold text-[var(--cres-deep-navy)] mb-2">The Root Issue</p>
              <p className="text-white">
                They were operationally successful but digitally invisible. While their showrooms were busy, they weren't attracting customers who research online first, and they had no system to handle growth beyond their current capacity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 3: WHY PREVIOUS ATTEMPTS FAILED */}
      <section className="py-16 bg-black/70 backdrop-blur-sm border border-white/20 bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-[0-9]xl font-black underline-custom text-[var(--cres-deep-navy)] mb-8">
            Why Previous Solutions Didn't Work
          </h2>

          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-black/70 backdrop-blur-sm border border-white/20 rounded-lg">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-3">Design-Focused Agencies</h3>
                <p className="text-white text-sm">Created a "beautiful website" but didn't understand car rental business needs or customer behavior.</p>
              </div>

              <div className="text-center p-6 bg-black/70 backdrop-blur-sm border border-white/20 rounded-lg">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-3">Generic Booking Tools</h3>
                <p className="text-white text-sm">Off-the-shelf booking systems that didn't integrate with their existing operations or local payment methods.</p>
              </div>

              <div className="text-center p-6 bg-black/70 backdrop-blur-sm border border-white/20 rounded-lg">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-3">No Integration Planning</h3>
                <p className="text-white text-sm">Individual tools purchased separately without considering how they work together as a system.</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-red-50 rounded-lg border border-red-200">
              <p className="text-red-800 font-semibold mb-2">The Pattern</p>
              <p className="text-red-700">
                Each solution addressed one symptom but ignored the systemic nature of their growth challenge. They needed a comprehensive system, not isolated tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 4: THE CRES APPROACH */}
      <section className="py-16 bg-[var(--cres-deep-navy)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-[0-9]xl font-black underline-custom text-white mb-8">
            Our Thinking & Strategy
          </h2>

          <div className="space-y-6 text-gray-300">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-4">Questions We Asked</h3>
                <ul className="space-y-3">
                  <li>• How do car rental customers actually research and book?</li>
                  <li>• What information do they need at each stage of their journey?</li>
                  <li>• How can we showcase availability across multiple locations?</li>
                  <li>• What systems do we need for operational scalability?</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-4">What We Prioritized</h3>
                <ul className="space-y-3">
                  <li>• Customer experience over operational convenience</li>
                  <li>• Real-time inventory visibility</li>
                  <li>• Local payment integration (M-Pesa, card)</li>
                  <li>• Mobile-first design for Kenyan users</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-800/50 rounded-lg">
              <p className="text-lg text-white font-semibold mb-3">Our Strategic Decision</p>
              <p className="text-gray-300">
                Instead of building just a website, we created a digital ecosystem that connected their physical locations with online discovery. The system had to work for both walk-in customers and those booking online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 5: THE SYSTEM BUILT */}
      <section className="py-16 bg-black/70 backdrop-blur-sm border border-white/20 bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-[0-9]xl font-black underline-custom text-[var(--cres-deep-navy)] mb-8">
            The System We Implemented
          </h2>

          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">1</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">Real-Time Inventory Website</h3>
                <p className="text-white mb-3">A mobile-optimized website showing live availability across all locations, with instant booking capability.</p>
                <ul className="text-white text-sm space-y-1">
                  <li>• Live inventory sync from both showrooms</li>
                  <li>• Mobile-first design for Kenyan browsing habits</li>
                  <li>• Clear pricing with no hidden fees</li>
                  <li>• Integration with M-Pesa and card payments</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">SEO & Local Visibility System</h3>
                <p className="text-white mb-3">Comprehensive local SEO strategy to dominate car rental searches in Nairobi.</p>
                <ul className="text-white text-sm space-y-1">
                  <li>• Google Business Profile optimization</li>
                  <li>• Local keyword targeting (car rental Nairobi)</li>
                  <li>• Location-specific content and schema markup</li>
                  <li>• Regular performance monitoring and updates</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">Brand Authority Platform</h3>
                <p className="text-white mb-3">Content and systems to establish them as Nairobi's most trusted car rental experts.</p>
                <ul className="text-white text-sm space-y-1">
                  <li>• Blog content about car rental tips and Nairobi travel</li>
                  <li>• Customer testimonial collection system</li>
                  <li>• Social proof integration across all touchpoints</li>
                  <li>• Consistent brand messaging framework</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-[var(--cres-electric-teal)]/10 rounded-lg border border-[var(--cres-electric-teal)]/20">
              <p className="text-[var(--cres-deep-navy)] font-semibold">
                System Integration: All components work together. Website bookings update inventory, SEO drives qualified traffic, and brand authority converts visitors to loyal customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 6: RESULTS & IMPACT */}
      <section className="py-16 bg-black/70 backdrop-blur-sm border border-white/20 bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-[0-9]xl font-black underline-custom text-[var(--cres-deep-navy)] mb-8">
            The Impact
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[var(--cres-electric-teal)] mb-3">Operational Efficiency</h3>
              <p className="text-white">Reduced phone inquiries by 60% through self-service booking, allowing staff to focus on customer service rather than basic information requests.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[var(--cres-electric-teal)] mb-3">Revenue Growth Foundation</h3>
              <p className="text-white">Established systems that support scaling from 2 to 4 showrooms, with clear processes for inventory management and customer experience.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[var(--cres-electric-teal)] mb-3">Market Position</h3>
              <p className="text-white">Became the most visible car rental company online in Nairobi, with customers choosing them based on digital research rather than just location.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[var(--cres-electric-teal)] mb-3">Scalable Operations</h3>
              <p className="text-white">Created standardized processes that work whether managing 50 vehicles or 200, with systems that grow with the business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 7: KEY INSIGHTS */}
      <section className="py-16 bg-black/70 backdrop-blur-sm border border-white/20 bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-[0-9]xl font-black underline-custom text-[var(--cres-deep-navy)] mb-8">
            What This Case Teaches
          </h2>

          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
              <div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-1">Operational success doesn't guarantee digital readiness</h3>
                <p className="text-white">Just because your physical business works doesn't mean your digital systems support growth.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
              <div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-1">Customer journeys are multichannel</h3>
                <p className="text-white">Modern customers research online, compare offline, and expect seamless experiences across all touchpoints.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
              <div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-1">Systems enable scaling, tools just add complexity</h3>
                <p className="text-white">Individual tools create more work. Integrated systems reduce complexity while enabling growth.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">4</div>
              <div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-1">Local market understanding drives success</h3>
                <p className="text-white">Kenyan customer behavior, payment preferences, and mobile usage patterns require tailored solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 8: RELEVANCE CHECK */}
      <section className="py-16 bg-[var(--cres-electric-teal)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-[0-9]xl font-black underline-custom text-white mb-8">
            Is This Similar to Your Business?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-black/70 backdrop-blur-sm border border-white/20/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">This applies to you if:</h3>
              <ul className="text-white space-y-2 text-left">
                <li>• You're operationally successful but digitally limited</li>
                <li>• Your business has physical locations but no online presence</li>
                <li>• You want to scale beyond your current capacity</li>
                <li>• Customer inquiries are overwhelming your team</li>
                <li>• You serve local customers who research online first</li>
              </ul>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Let's discuss your situation:</h3>
              <ul className="text-white space-y-2 text-left">
                <li>• Different industry, same growth challenges</li>
                <li>• Multiple locations needing coordination</li>
                <li>• Service-based business with booking complexity</li>
                <li>• Local market dominance goals</li>
                <li>• Operational scaling requirements</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/contact" className="bg-black/70 backdrop-blur-sm border border-white/20 text-[var(--cres-electric-teal)] hover:bg-black/70 backdrop-blur-sm border border-white/20 font-black text-xl py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
              Let's Map Your Growth System
            </a>
            <a href="/case-studies" className="border-2 border-white text-white hover:bg-black/70 backdrop-blur-sm border border-white/20 hover:text-[var(--cres-electric-teal)] font-bold text-lg py-4 px-8 rounded-lg transition-all duration-300">
              View More Case Studies
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
