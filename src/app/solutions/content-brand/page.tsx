'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContentBrandPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* 1️⃣ HERO SECTION (PAIN-DRIVEN) */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br bg-[url('/backround.png')] bg-repeat bg-cover bg-center from-[var(--cres-deep-navy)] via-[#0D1B2A] to-[#1B263B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--cres-electric-teal)] to-transparent"></div>
          <div className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-[var(--cres-electric-teal)] to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black underline-custom text-white leading-tight mb-8">
            Customers don't trust you
            <br />
            <span className="text-[var(--cres-electric-teal)]">because you look like everyone else.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Your website is generic. Your messaging is forgettable. Your brand has no personality. Customers scroll past you because you haven't given them a reason to stop. You're invisible in a sea of sameness.
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
      <section className="py-12 md:py-20 bg-gradient-to-br from-[var(--cres-primary-bg)] to-[var(--cres-secondary-bg)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black underline-custom text-[var(--cres-white)] text-center mb-16">
            The Problem Most Businesses Ignore Until It's Too Late
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4">🤷</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-3 group-hover:text-[var(--cres-orange-primary)] transition-colors">No Clear Identity</h3>
              <p className="text-gray-300">Your brand doesn't stand for anything. Customers can't remember what makes you different or why they should choose you.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-3 group-hover:text-[var(--cres-orange-primary)] transition-colors">Generic Messaging</h3>
              <p className="text-gray-300">"Quality service, competitive prices" — everyone says this. Your words disappear into the noise because they mean nothing.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4">🚫</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-3 group-hover:text-[var(--cres-orange-primary)] transition-colors">No Social Proof</h3>
              <p className="text-gray-300">No testimonials, no case studies, no success stories. Why should customers believe you're any good?</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4">🎭</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-3 group-hover:text-[var(--cres-orange-primary)] transition-colors">Inconsistent Voice</h3>
              <p className="text-gray-300">Your website sounds corporate, your WhatsApp is casual, your ads are desperate. Customers get confused about who you are.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-3 group-hover:text-[var(--cres-orange-primary)] transition-colors">No Authority Signals</h3>
              <p className="text-gray-300">You don't position yourself as an expert. Customers see you as just another vendor, not a trusted authority.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-3 group-hover:text-[var(--cres-orange-primary)] transition-colors">Price-Driven Decisions</h3>
              <p className="text-gray-300">Customers choose you based on price because they don't see value in your brand. You're competing on cost, not worth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ WHY THIS KEEPS HAPPENING */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[var(--cres-secondary-bg)] to-[var(--cres-primary-bg)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black underline-custom text-[var(--cres-white)] mb-12">
            Why This Problem Persists
          </h2>

          <div className="space-y-6 text-left">
            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 flex items-start space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-3xl">🎨</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-white)] mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Designers without strategy</h3>
                <p className="text-gray-300">Most agencies focus on making things "look nice" but forget that branding is about business strategy, not just aesthetics.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 flex items-start space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-3xl">📝</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-white)] mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Content without purpose</h3>
                <p className="text-gray-300">Businesses create content because "everyone does it" but don't have a clear strategy for what to say or why it matters.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 flex items-start space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-3xl">⏱️</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-white)] mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Short-term thinking</h3>
                <p className="text-gray-300">Building brand authority takes time. Most businesses want quick results and give up before the foundation is solid.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 flex items-start space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-3xl">🇰🇪</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-white)] mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Generic approaches</h3>
                <p className="text-gray-300">Using templates and strategies from other markets. Kenyan customers have unique values, challenges, and buying behaviors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ THE CRES SOLUTION (SYSTEM, NOT SERVICE) */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[var(--cres-deep-navy)] to-[var(--cres-primary-bg)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black underline-custom text-white text-center mb-16">
            The System We Build to Fix This
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[var(--cres-orange-primary)] rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 group-hover:scale-110 transition-transform">1</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-4 group-hover:text-[var(--cres-orange-primary)] transition-colors">Brand Strategy Foundation</h3>
              <p className="text-gray-300">Define your unique position, voice, and story. Know exactly what you stand for and why customers should care.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[var(--cres-orange-primary)] rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 group-hover:scale-110 transition-transform">2</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-4 group-hover:text-[var(--cres-orange-primary)] transition-colors">Authority-Driven Website</h3>
              <p className="text-gray-300">Transform your website into a trust-building machine. Case studies, testimonials, thought leadership content.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[var(--cres-orange-primary)] rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 group-hover:scale-110 transition-transform">3</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-4 group-hover:text-[var(--cres-orange-primary)] transition-colors">Content Authority Engine</h3>
              <p className="text-gray-300">Strategic content that positions you as the go-to expert. Blog posts, videos, social proof that builds credibility over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ WHAT MAKES THIS DIFFERENT */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[var(--cres-primary-bg)] to-[var(--cres-secondary-bg)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black underline-custom text-[var(--cres-white)] text-center mb-12">
            Why This Isn't Just Another Service
          </h2>

          <div className="space-y-6">
            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 flex items-start space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-2xl text-[var(--cres-orange-primary)]">🎯</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-white)] mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Business strategy first</h3>
                <p className="text-gray-300">We start with your business goals, not design trends. Every brand decision serves your growth objectives.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 flex items-start space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-2xl text-[var(--cres-orange-primary)]">🇰🇪</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-white)] mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Kenyan market expertise</h3>
                <p className="text-gray-300">Deep understanding of Kenyan consumer behavior, cultural values, and market dynamics. No imported strategies.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 flex items-start space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-2xl text-[var(--cres-orange-primary)]">📈</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-white)] mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Authority that converts</h3>
                <p className="text-gray-300">We build brands that command premium pricing. Customers pay more because they see your unique value.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 flex items-start space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-2xl text-[var(--cres-orange-primary)]">🔄</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-white)] mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Long-term brand equity</h3>
                <p className="text-gray-300">Your brand becomes an asset that appreciates over time. Build once, benefit forever.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 flex items-start space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-2xl text-[var(--cres-orange-primary)]">🎨</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-white)] mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Design with purpose</h3>
                <p className="text-gray-300">Every visual decision communicates your brand values. Design that works harder, not just looks better.</p>
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
            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[var(--cres-orange-primary)] mb-6 flex items-center">
                <span className="text-3xl mr-3">✅</span>
                This is for you if:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--cres-orange-primary)] mt-1">✓</span>
                  <span className="text-gray-300">You want to stop competing on price and start competing on value</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--cres-orange-primary)] mt-1">✓</span>
                  <span className="text-gray-300">You want customers to choose you because of who you are, not what you cost</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--cres-orange-primary)] mt-1">✓</span>
                  <span className="text-gray-300">You're willing to invest time and money in building a brand that lasts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--cres-orange-primary)] mt-1">✓</span>
                  <span className="text-gray-300">You want to become the obvious choice in your market</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--cres-orange-primary)] mt-1">✓</span>
                  <span className="text-gray-300">You understand that great brands are built, not bought</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center">
                <span className="text-3xl mr-3">❌</span>
                This is NOT for you if:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span className="text-gray-300">You want a logo and some colors to "look professional"</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span className="text-gray-300">You don't want to invest in content or thought leadership</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span className="text-gray-300">You prefer short-term tactics over long-term brand building</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span className="text-gray-300">You want customers to find you based on price, not value</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span className="text-gray-300">You don't want to position yourself as an industry expert</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ RESULTS & IMPACT (NO FAKE CLAIMS) */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[var(--cres-deep-navy)] to-[var(--cres-primary-bg)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black underline-custom text-white text-center mb-12">
            What Businesses Gain After Implementation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-bold text-[var(--cres-orange-primary)] mb-3">Premium Pricing Power</h3>
              <p className="text-gray-300">Customers pay more because they see your unique value. Stop competing on price and start winning on worth.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-bold text-[var(--cres-orange-primary)] mb-3">Customer Loyalty</h3>
              <p className="text-gray-300">Build emotional connections that turn one-time customers into lifelong advocates and referral sources.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-bold text-[var(--cres-orange-primary)] mb-3">Market Authority</h3>
              <p className="text-gray-300">Become the go-to expert in your field. Customers seek you out instead of you chasing them.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-bold text-[var(--cres-orange-primary)] mb-3">Business Resilience</h3>
              <p className="text-gray-300">Strong brands survive economic downturns. Customers stay loyal even when competitors cut prices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8️⃣ STRONG CTA (URGENCY) */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[var(--cres-orange-primary)] to-[#E87528] bg-[url('/backround.png')] bg-repeat bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black underline-custom text-white mb-8">
            Every Week You Delay, You Lose
          </h2>

          <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
            Your competitors are building their brands right now. Every day you stay generic is another day customers choose them over you. Every time someone scrolls past your bland messaging is another lost opportunity. Your brand is your most valuable asset — start building it before it's too late.
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
