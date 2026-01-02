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
          <h1 className="text-[0-9]xl md:text-[0-9]xl lg:text-[0-9]xl font-black underline-custom text-white leading-tight mb-8">
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
            <button className="border-2 border-[var(--cres-electric-teal)] text-[var(--cres-electric-teal)] hover:bg-[var(--cres-electric-teal)] hover:text-white font-bold text-lg py-4 px-8 rounded-lg transition-all duration-300">
              See How It Works
            </button>
          </div>
        </div>
      </section>

      {/* 2️⃣ THE PROBLEM (MAKE IT UNCOMFORTABLE) */}
      <section className="py-12 md:py-20 bg-white bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-[0-9]xl font-black underline-custom text-[var(--cres-deep-navy)] text-center mb-16">
            The Problem Most Businesses Ignore Until It's Too Late
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🤷</div>
              <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-3">No Clear Identity</h3>
              <p className="text-gray-600">Your brand doesn't stand for anything. Customers can't remember what makes you different or why they should choose you.</p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-3">Generic Messaging</h3>
              <p className="text-gray-600">"Quality service, competitive prices" — everyone says this. Your words disappear into the noise because they mean nothing.</p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">🚫</div>
              <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-3">No Social Proof</h3>
              <p className="text-gray-600">No testimonials, no case studies, no success stories. Why should customers believe you're any good?</p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">🎭</div>
              <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-3">Inconsistent Voice</h3>
              <p className="text-gray-600">Your website sounds corporate, your WhatsApp is casual, your ads are desperate. Customers get confused about who you are.</p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-3">No Authority Signals</h3>
              <p className="text-gray-600">You don't position yourself as an expert. Customers see you as just another vendor, not a trusted authority.</p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-3">Price-Driven Decisions</h3>
              <p className="text-gray-600">Customers choose you based on price because they don't see value in your brand. You're competing on cost, not worth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ WHY THIS KEEPS HAPPENING */}
      <section className="py-12 md:py-20 bg-[var(--cres-light-grey)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-[0-9]xl font-black underline-custom text-[var(--cres-deep-navy)] mb-12">
            Why This Problem Persists
          </h2>

          <div className="space-y-8 text-left">
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🎨</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">Designers without strategy</h3>
                <p className="text-gray-600">Most agencies focus on making things "look nice" but forget that branding is about business strategy, not just aesthetics.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-3xl">📝</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">Content without purpose</h3>
                <p className="text-gray-600">Businesses create content because "everyone does it" but don't have a clear strategy for what to say or why it matters.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-3xl">⏱️</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">Short-term thinking</h3>
                <p className="text-gray-600">Building brand authority takes time. Most businesses want quick results and give up before the foundation is solid.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-3xl">🇰🇪</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">Generic approaches</h3>
                <p className="text-gray-600">Using templates and strategies from other markets. Kenyan customers have unique values, challenges, and buying behaviors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ THE CRES SOLUTION (SYSTEM, NOT SERVICE) */}
      <section className="py-12 md:py-20 bg-[var(--cres-deep-navy)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-[0-9]xl font-black underline-custom text-white text-center mb-16">
            The System We Build to Fix This
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6">1</div>
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-4">Brand Strategy Foundation</h3>
              <p className="text-gray-300">Define your unique position, voice, and story. Know exactly what you stand for and why customers should care.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6">2</div>
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-4">Authority-Driven Website</h3>
              <p className="text-gray-300">Transform your website into a trust-building machine. Case studies, testimonials, thought leadership content.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6">3</div>
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-4">Content Authority Engine</h3>
              <p className="text-gray-300">Strategic content that positions you as the go-to expert. Blog posts, videos, social proof that builds credibility over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ WHAT MAKES THIS DIFFERENT */}
      <section className="py-12 md:py-20 bg-white bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-[0-9]xl font-black underline-custom text-[var(--cres-deep-navy)] text-center mb-12">
            Why This Isn't Just Another Service
          </h2>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="text-2xl text-[var(--cres-electric-teal)]">🎯</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-deep-navy)]">Business strategy first</h3>
                <p className="text-gray-600">We start with your business goals, not design trends. Every brand decision serves your growth objectives.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-2xl text-[var(--cres-electric-teal)]">🇰🇪</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-deep-navy)]">Kenyan market expertise</h3>
                <p className="text-gray-600">Deep understanding of Kenyan consumer behavior, cultural values, and market dynamics. No imported strategies.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-2xl text-[var(--cres-electric-teal)]">📈</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-deep-navy)]">Authority that converts</h3>
                <p className="text-gray-600">We build brands that command premium pricing. Customers pay more because they see your unique value.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-2xl text-[var(--cres-electric-teal)]">🔄</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-deep-navy)]">Long-term brand equity</h3>
                <p className="text-gray-600">Your brand becomes an asset that appreciates over time. Build once, benefit forever.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-2xl text-[var(--cres-electric-teal)]">🎨</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-deep-navy)]">Design with purpose</h3>
                <p className="text-gray-600">Every visual decision communicates your brand values. Design that works harder, not just looks better.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ WHO THIS IS FOR (AND NOT FOR) */}
      <section className="py-12 md:py-20 bg-[var(--cres-light-grey)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-[0-9]xl font-black underline-custom text-[var(--cres-deep-navy)] text-center mb-16">
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
                  <span className="text-gray-700">You want to stop competing on price and start competing on value</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-gray-700">You want customers to choose you because of who you are, not what you cost</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-gray-700">You're willing to invest time and money in building a brand that lasts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-gray-700">You want to become the obvious choice in your market</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-gray-700">You understand that great brands are built, not bought</span>
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
                  <span className="text-gray-700">You want a logo and some colors to "look professional"</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 mt-1">✗</span>
                  <span className="text-gray-700">You don't want to invest in content or thought leadership</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 mt-1">✗</span>
                  <span className="text-gray-700">You prefer short-term tactics over long-term brand building</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 mt-1">✗</span>
                  <span className="text-gray-700">You want customers to find you based on price, not value</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 mt-1">✗</span>
                  <span className="text-gray-700">You don't want to position yourself as an industry expert</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ RESULTS & IMPACT (NO FAKE CLAIMS) */}
      <section className="py-12 md:py-20 bg-[var(--cres-deep-navy)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-[0-9]xl font-black underline-custom text-white text-center mb-12">
            What Businesses Gain After Implementation
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-3">Premium Pricing Power</h3>
              <p className="text-gray-300">Customers pay more because they see your unique value. Stop competing on price and start winning on worth.</p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-3">Customer Loyalty</h3>
              <p className="text-gray-300">Build emotional connections that turn one-time customers into lifelong advocates and referral sources.</p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-3">Market Authority</h3>
              <p className="text-gray-300">Become the go-to expert in your field. Customers seek you out instead of you chasing them.</p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-3">Business Resilience</h3>
              <p className="text-gray-300">Strong brands survive economic downturns. Customers stay loyal even when competitors cut prices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8️⃣ STRONG CTA (URGENCY) */}
      <section className="py-12 md:py-20 bg-[var(--cres-electric-teal)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-[0-9]xl font-black underline-custom text-white mb-8">
            Every Week You Delay, You Lose
          </h2>

          <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
            Your competitors are building their brands right now. Every day you stay generic is another day customers choose them over you. Every time someone scrolls past your bland messaging is another lost opportunity. Your brand is your most valuable asset — start building it before it's too late.
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
