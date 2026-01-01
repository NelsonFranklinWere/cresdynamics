'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SEOVisibilityPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* 1️⃣ HERO SECTION (PAIN-DRIVEN) */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--cres-deep-navy)] via-[#0D1B2A] to-[#1B263B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--cres-electric-teal)] to-transparent"></div>
          <div className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-[var(--cres-electric-teal)] to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-8">
            You're paying for ads forever
            <br />
            <span className="text-[var(--cres-electric-teal)]">because no one can find you organically.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Ad spend is burning a hole in your pocket. Competitors rank higher. Customers search for your services but find everyone else. Your Google visibility is zero.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/contact" className="bg-[var(--cres-electric-teal)] hover:bg-[#00B894] text-white font-black text-xl py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
              Request a Growth Audit
            </a>
            <button className="border-2 border-[var(--cres-electric-teal)] text-[var(--cres-electric-teal)] hover:bg-[var(--cres-electric-teal)] hover:text-white font-bold text-lg py-4 px-8 rounded-lg transition-all duration-300">
              See How It Works
            </button>
          </div>
        </div>
      </section>

      {/* 2️⃣ THE PROBLEM (MAKE IT UNCOMFORTABLE) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-black text-[var(--cres-deep-navy)] text-center mb-16">
            The Problem Most Businesses Ignore Until It's Too Late
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-3">Invisible on Google</h3>
              <p className="text-gray-600">Customers search for your services every day but your business doesn't appear. You're completely invisible to the people who need you.</p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-3">Endless Ad Dependency</h3>
              <p className="text-gray-600">You pay Google every month just to exist. Turn off ads for a week and your business disappears. This isn't sustainable.</p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-3">Competitors Dominate</h3>
              <p className="text-gray-600">Everyone else ranks higher. Your competitors get all the free traffic while you pay premium prices for the scraps.</p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-3">Local Search Invisible</h3>
              <p className="text-gray-600">When customers search "services near me" in Nairobi, your business doesn't show up. You're missing hyper-local opportunities.</p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-3">No Organic Growth</h3>
              <p className="text-gray-600">All your growth comes from paid ads. No organic traffic means no sustainable business. One algorithm change and you're done.</p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">⏰</div>
              <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-3">Time-Consuming Battle</h3>
              <p className="text-gray-600">SEO feels like a never-ending game of catch-up. Algorithms change, competitors optimize, and you struggle to keep up.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ WHY THIS KEEPS HAPPENING */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-[var(--cres-deep-navy)] mb-12">
            Why This Problem Persists
          </h2>

          <div className="space-y-8 text-left">
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🎯</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">SEO feels too complicated</h3>
                <p className="text-gray-600">Business owners know they need SEO but think it's too technical. They throw money at ads instead of building long-term visibility.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-3xl">⏱️</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">Results take too long</h3>
                <p className="text-gray-600">SEO takes 3-6 months to show results. Most businesses want instant gratification and give up before seeing the payoff.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-3xl">🔄</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">Constant algorithm changes</h3>
                <p className="text-gray-600">Google changes rankings every few months. Most SEO efforts become outdated quickly without continuous monitoring.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-3xl">📍</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">Local SEO ignorance</h3>
                <p className="text-gray-600">Most businesses focus on global SEO while ignoring local search. In Kenya, most customers search for local services first.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ THE CRES SOLUTION (SYSTEM, NOT SERVICE) */}
      <section className="py-20 bg-[var(--cres-deep-navy)]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white text-center mb-16">
            The System We Build to Fix This
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6">1</div>
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-4">Local SEO Foundation</h3>
              <p className="text-gray-300">Google Business Profile optimization, local keywords, and Nairobi-specific ranking factors. Dominate local search.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6">2</div>
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-4">Content & Authority</h3>
              <p className="text-gray-300">Strategic content that positions you as the local expert. Build trust and authority in your market.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6">3</div>
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-4">Continuous Optimization</h3>
              <p className="text-gray-300">Monitor rankings, track competitors, adapt to algorithm changes. Your visibility grows month after month.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ WHAT MAKES THIS DIFFERENT */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-black text-[var(--cres-deep-navy)] text-center mb-12">
            Why This Isn't Just Another Service
          </h2>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="text-2xl text-[var(--cres-electric-teal)]">🇰🇪</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-deep-navy)]">Kenya-first SEO</h3>
                <p className="text-gray-600">We understand Kenyan search behavior, local competition, and what works in Nairobi markets. No generic global strategies.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-2xl text-[var(--cres-electric-teal)]">📈</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-deep-navy)]">Traffic that converts</h3>
                <p className="text-gray-600">We don't just drive traffic — we drive qualified customers. Every SEO decision serves your business goals.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-2xl text-[var(--cres-electric-teal)]">🎯</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-deep-navy)]">Competitor analysis included</h3>
                <p className="text-gray-600">We study what your competitors are doing right (and wrong). Learn from their successes and avoid their mistakes.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-2xl text-[var(--cres-electric-teal)]">📊</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-deep-navy)]">Data-driven decisions</h3>
                <p className="text-gray-600">Every strategy is backed by data. We track what works, measure ROI, and adjust based on real results.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-2xl text-[var(--cres-electric-teal)]">🔄</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)]">Long-term partnership</h3>
                <p className="text-gray-600">SEO isn't "set and forget." We monitor, optimize, and adapt as your business and Google both evolve.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ WHO THIS IS FOR (AND NOT FOR) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-black text-[var(--cres-deep-navy)] text-center mb-16">
            Is This Right for Your Business?
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
                <span className="text-3xl mr-3">✅</span>
                This is for you if:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-gray-700">You're tired of paying for ads that disappear</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-gray-700">You want customers to find you naturally</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-gray-700">You're willing to invest in long-term growth</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-gray-700">You want to dominate your local market</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-gray-700">You understand that SEO is about owning your market</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center">
                <span className="text-3xl mr-3">❌</span>
                This is NOT for you if:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 mt-1">✗</span>
                  <span className="text-gray-700">You want instant results (SEO takes 3-6 months)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 mt-1">✗</span>
                  <span className="text-gray-700">You don't want to invest in your online presence</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 mt-1">✗</span>
                  <span className="text-gray-700">You prefer ads because they're "predictable"</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 mt-1">✗</span>
                  <span className="text-gray-700">You don't want to track or measure results</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 mt-1">✗</span>
                  <span className="text-gray-700">You think SEO is too complicated or expensive</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ RESULTS & IMPACT (NO FAKE CLAIMS) */}
      <section className="py-20 bg-[var(--cres-deep-navy)]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white text-center mb-12">
            What Businesses Gain After Implementation
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-3">Free Organic Traffic</h3>
              <p className="text-gray-300">Customers find you without paying for ads. Sustainable growth that doesn't disappear when budget runs out.</p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-3">Local Market Domination</h3>
              <p className="text-gray-300">When Nairobi customers search for your services, your business appears first. Own your local market.</p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-3">Cost Reduction Over Time</h3>
              <p className="text-gray-300">Less dependency on paid ads means lower customer acquisition costs and higher profit margins.</p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-3">Authority & Trust</h3>
              <p className="text-gray-300">Higher rankings build credibility. Customers trust businesses that appear at the top of search results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8️⃣ STRONG CTA (URGENCY) */}
      <section className="py-20 bg-[var(--cres-electric-teal)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-8">
            Every Week You Delay, You Lose
          </h2>

          <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
            Your competitors are investing in SEO right now. Every day you delay, they get stronger rankings and steal your customers. Every dollar you spend on ads is money that could fund your organic growth instead.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a href="/contact" className="bg-white text-[var(--cres-electric-teal)] hover:bg-gray-100 font-black text-xl py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
              Book a Strategy Call
            </a>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[var(--cres-electric-teal)] font-bold text-lg py-4 px-8 rounded-lg transition-all duration-300">
              Start With a Growth Audit
            </button>
          </div>

          <p className="text-white/80 text-sm">
            "We don't sell services. We build systems that grow businesses."
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
