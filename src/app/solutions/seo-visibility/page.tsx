'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SEOVisibilityPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* 1️⃣ HERO SECTION (PAIN-DRIVEN) */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br bg-[url('/backround.png')] bg-repeat bg-cover bg-center from-[var(--cres-deep-navy)] via-[#0D1B2A] to-[#1B263B] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--cres-electric-teal)] to-transparent"></div>
          <div className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-[var(--cres-electric-teal)] to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black underline-custom text-white leading-tight mb-8">
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
            <a href="/contact" className="border-2 border-[var(--cres-electric-teal)] text-[var(--cres-electric-teal)] hover:bg-[var(--cres-electric-teal)] hover:text-white font-bold text-lg py-4 px-8 rounded-lg transition-all duration-300">
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* 2️⃣ THE PROBLEM (MAKE IT UNCOMFORTABLE) */}
      <      section className="py-12 md:py-20 bg-gradient-to-br from-[var(--cres-primary-bg)] to-[var(--cres-secondary-bg)] relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black underline-custom text-[var(--cres-white)] text-center mb-16">
            The Problem Most Businesses Ignore Until It's Too Late
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-3xl md:text-5xl mb-3 md:mb-4">🔍</div>
              <h3 className="text-base md:text-xl font-bold text-[var(--cres-white)] mb-2 md:mb-3 group-hover:text-[var(--cres-orange-primary)] transition-colors">Invisible on Google</h3>
              <p className="text-xs md:text-sm text-gray-300">Customers search for your services every day but your business doesn't appear. You're completely invisible to the people who need you.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-3 group-hover:text-[var(--cres-orange-primary)] transition-colors">Endless Ad Dependency</h3>
              <p className="text-gray-300">You pay Google every month just to exist. Turn off ads for a week and your business disappears. This isn't sustainable.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-3 group-hover:text-[var(--cres-orange-primary)] transition-colors">Competitors Dominate</h3>
              <p className="text-gray-300">Everyone else ranks higher. Your competitors get all the free traffic while you pay premium prices for the scraps.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-3 group-hover:text-[var(--cres-orange-primary)] transition-colors">Local Search Invisible</h3>
              <p className="text-gray-300">When customers search "services near me" in Nairobi, your business doesn't show up. You're missing hyper-local opportunities.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-3 group-hover:text-[var(--cres-orange-primary)] transition-colors">No Organic Growth</h3>
              <p className="text-gray-300">All your growth comes from paid ads. No organic traffic means no sustainable business. One algorithm change and you're done.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4">⏰</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-3 group-hover:text-[var(--cres-orange-primary)] transition-colors">Time-Consuming Battle</h3>
              <p className="text-gray-300">SEO feels like a never-ending game of catch-up. Algorithms change, competitors optimize, and you struggle to keep up.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ WHY THIS KEEPS HAPPENING */}
      <      section className="py-12 md:py-20 bg-gradient-to-br from-[var(--cres-secondary-bg)] to-[var(--cres-primary-bg)] relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black underline-custom text-[var(--cres-white)] mb-12">
            Why This Problem Persists
          </h2>

          <div className="space-y-6 text-left">
            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 flex items-start space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-3xl">🎯</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-white)] mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">SEO feels too complicated</h3>
                <p className="text-xs md:text-sm text-gray-300">Business owners know they need SEO but think it's too technical. They throw money at ads instead of building long-term visibility.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 flex items-start space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-3xl">⏱️</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-white)] mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Results take too long</h3>
                <p className="text-gray-300">SEO takes 3-6 months to show results. Most businesses want instant gratification and give up before seeing the payoff.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 flex items-start space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-3xl">🔄</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-white)] mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Constant algorithm changes</h3>
                <p className="text-gray-300">Google changes rankings every few months. Most SEO efforts become outdated quickly without continuous monitoring.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 flex items-start space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-3xl">📍</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-white)] mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Local SEO ignorance</h3>
                <p className="text-gray-300">Most businesses focus on global SEO while ignoring local search. In Kenya, most customers search for local services first.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ THE CRES SOLUTION (SYSTEM, NOT SERVICE) */}
      <      section className="py-12 md:py-20 bg-gradient-to-br from-[var(--cres-deep-navy)] to-[var(--cres-primary-bg)] relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black underline-custom text-white text-center mb-16">
            The System We Build to Fix This
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[var(--cres-orange-primary)] rounded-full flex items-center justify-center text-xl md:text-2xl font-bold text-white mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform">1</div>
              <h3 className="text-base md:text-xl font-bold text-[var(--cres-white)] mb-2 md:mb-4 group-hover:text-[var(--cres-orange-primary)] transition-colors">Local SEO Foundation</h3>
              <p className="text-xs md:text-sm text-gray-300">Google Business Profile optimization, local keywords, and Nairobi-specific ranking factors. Dominate local search.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[var(--cres-orange-primary)] rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 group-hover:scale-110 transition-transform">2</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-4 group-hover:text-[var(--cres-orange-primary)] transition-colors">Content & Authority</h3>
              <p className="text-gray-300">Strategic content that positions you as the local expert. Build trust and authority in your market.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[var(--cres-orange-primary)] rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 group-hover:scale-110 transition-transform">3</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-4 group-hover:text-[var(--cres-orange-primary)] transition-colors">Continuous Optimization</h3>
              <p className="text-gray-300">Monitor rankings, track competitors, adapt to algorithm changes. Your visibility grows month after month.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ WHAT MAKES THIS DIFFERENT */}
      <      section className="py-12 md:py-20 bg-gradient-to-br from-[var(--cres-primary-bg)] to-[var(--cres-secondary-bg)] relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black underline-custom text-[var(--cres-white)] text-center mb-12">
            Why This Isn't Just Another Service
          </h2>

          <div className="space-y-6">
            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 flex items-start space-x-3 md:space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-xl md:text-2xl text-[var(--cres-orange-primary)]">🇰🇪</div>
              <div>
                <h3 className="text-sm md:text-base font-bold text-[var(--cres-white)] mb-1 md:mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Kenya-first SEO</h3>
                <p className="text-xs md:text-sm text-gray-300">We understand Kenyan search behavior, local competition, and what works in Nairobi markets. No generic global strategies.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 flex items-start space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-2xl text-[var(--cres-orange-primary)]">📈</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-white)] mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Traffic that converts</h3>
                <p className="text-gray-300">We don't just drive traffic — we drive qualified customers. Every SEO decision serves your business goals.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 flex items-start space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-2xl text-[var(--cres-orange-primary)]">🎯</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-white)] mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Competitor analysis included</h3>
                <p className="text-gray-300">We study what your competitors are doing right (and wrong). Learn from their successes and avoid their mistakes.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 flex items-start space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-2xl text-[var(--cres-orange-primary)]">📊</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-white)] mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Data-driven decisions</h3>
                <p className="text-gray-300">Every strategy is backed by data. We track what works, measure ROI, and adjust based on real results.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 flex items-start space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-2xl text-[var(--cres-orange-primary)]">🔄</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-white)] mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Long-term partnership</h3>
                <p className="text-gray-300">SEO isn't "set and forget." We monitor, optimize, and adapt as your business and Google both evolve.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ WHO THIS IS FOR (AND NOT FOR) */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[var(--cres-secondary-bg)] to-[var(--cres-primary-bg)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black underline-custom text-[var(--cres-white)] text-center mb-16">
            Is This Right for Your Business?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-8">
              <h3 className="text-lg md:text-2xl font-bold text-[var(--cres-orange-primary)] mb-4 md:mb-6 flex items-center">
                <span className="text-2xl md:text-3xl mr-2 md:mr-3">✅</span>
                This is for you if:
              </h3>
              <ul className="space-y-2 md:space-y-4">
                <li className="flex items-start space-x-2 md:space-x-3">
                  <span className="text-[var(--cres-orange-primary)] mt-1 text-xs md:text-base">✓</span>
                  <span className="text-xs md:text-sm text-gray-300">You're tired of paying for ads that disappear</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--cres-orange-primary)] mt-1">✓</span>
                  <span className="text-gray-300">You want customers to find you naturally</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--cres-orange-primary)] mt-1">✓</span>
                  <span className="text-gray-300">You're willing to invest in long-term growth</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--cres-orange-primary)] mt-1">✓</span>
                  <span className="text-gray-300">You want to dominate your local market</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--cres-orange-primary)] mt-1">✓</span>
                  <span className="text-gray-300">You understand that SEO is about owning your market</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-8">
              <h3 className="text-lg md:text-2xl font-bold text-red-400 mb-4 md:mb-6 flex items-center">
                <span className="text-2xl md:text-3xl mr-2 md:mr-3">❌</span>
                This is NOT for you if:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1 text-xs md:text-base">✗</span>
                  <span className="text-xs md:text-sm text-gray-300">You want instant results (SEO takes 3-6 months)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span className="text-gray-300">You don't want to invest in your online presence</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span className="text-gray-300">You prefer ads because they're "predictable"</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span className="text-gray-300">You don't want to track or measure results</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span className="text-gray-300">You think SEO is too complicated or expensive</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ RESULTS & IMPACT (NO FAKE CLAIMS) */}
      <      section className="py-12 md:py-20 bg-gradient-to-br from-[var(--cres-deep-navy)] to-[var(--cres-primary-bg)] relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black underline-custom text-white text-center mb-12">
            What Businesses Gain After Implementation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-base md:text-xl font-bold text-[var(--cres-orange-primary)] mb-2 md:mb-3">Free Organic Traffic</h3>
              <p className="text-xs md:text-sm text-gray-300">Customers find you without paying for ads. Sustainable growth that doesn't disappear when budget runs out.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-bold text-[var(--cres-orange-primary)] mb-3">Local Market Domination</h3>
              <p className="text-gray-300">When Nairobi customers search for your services, your business appears first. Own your local market.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-bold text-[var(--cres-orange-primary)] mb-3">Cost Reduction Over Time</h3>
              <p className="text-gray-300">Less dependency on paid ads means lower customer acquisition costs and higher profit margins.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-bold text-[var(--cres-orange-primary)] mb-3">Authority & Trust</h3>
              <p className="text-gray-300">Higher rankings build credibility. Customers trust businesses that appear at the top of search results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8️⃣ STRONG CTA (URGENCY) */}
      <      section className="py-12 md:py-20 bg-gradient-to-br from-[var(--cres-orange-primary)] to-[#E87528] relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black underline-custom text-white mb-8">
            Every Week You Delay, You Lose
          </h2>

          <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
            Your competitors are investing in SEO right now. Every day you delay, they get stronger rankings and steal your customers. Every dollar you spend on ads is money that could fund your organic growth instead.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a href="/contact" className="bg-white text-[var(--cres-orange-primary)] hover:bg-gray-100 font-black text-xl py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
              Book a Strategy Call
            </a>
            <a href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-[var(--cres-orange-primary)] font-bold text-lg py-4 px-8 rounded-lg transition-all duration-300">
              Start With a Growth Audit
            </a>
          </div>

          <p className="text-white/90 text-sm font-medium">
            "We don't sell services. We build systems that grow businesses."
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
