'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      {/* 1️⃣ HERO SECTION (ABOVE THE FOLD) */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 bg-[url('/backround.png')] bg-repeat bg-cover bg-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
          <div className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-orange-500 to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-8 underline-custom">
            What's Really Costing Your Business Money<br />
            <span className="text-orange-500">— And Why Most Owners Never See It.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Real insights on visibility, conversions, automation, and growth — written for business owners who want results, not noise.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white font-black text-xl py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
              Get a Free Growth Diagnosis
            </a>
            <button
              onClick={() => document.getElementById('silent-leaks')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold text-lg py-4 px-8 rounded-lg transition-all duration-300"
            >
              Explore Insights ↓
            </button>
          </div>
        </div>
      </section>

      {/* 2️⃣ THE PROBLEM SECTION — "THE SILENT LEAKS" */}
      <section id="silent-leaks" className="py-12 md:py-20 bg-gray-800 bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-black text-center mb-10 underline-custom">
            The Silent Growth Killers Most Businesses Ignore
          </h2>

          <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Most businesses don't fail because they lack effort.<br />
            They fail because they're leaking leads, time, and money — silently.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pain #1 — Visibility */}
            <div className="bg-gray-700 p-8 rounded-lg border-l-4 border-orange-500">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Visibility</h3>
              <h4 className="text-xl font-semibold text-white mb-3">Customers Are Searching. You're Not Showing Up.</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• If you're not ranking, you're invisible</li>
                <li>• Ads stop working the moment you stop paying</li>
                <li>• SEO neglect = lost revenue every single day</li>
              </ul>
            </div>

            {/* Pain #2 — Conversion */}
            <div className="bg-gray-700 p-8 rounded-lg border-l-4 border-orange-500">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Conversion</h3>
              <h4 className="text-xl font-semibold text-white mb-3">Traffic Without Conversion Is Just Noise.</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• Beautiful websites that don't convert</li>
                <li>• No clear CTAs</li>
                <li>• No trust signals</li>
                <li>• No follow-up systems</li>
              </ul>
            </div>

            {/* Pain #3 — Manual Work */}
            <div className="bg-gray-700 p-8 rounded-lg border-l-4 border-orange-500">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Manual Work</h3>
              <h4 className="text-xl font-semibold text-white mb-3">You're Doing Work Software Should Be Doing.</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• Missed WhatsApp messages</li>
                <li>• Late follow-ups</li>
                <li>• Lost leads</li>
                <li>• Burnout</li>
              </ul>
            </div>

            {/* Pain #4 — Data Blindness */}
            <div className="bg-gray-700 p-8 rounded-lg border-l-4 border-orange-500">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Data Blindness</h3>
              <h4 className="text-xl font-semibold text-white mb-3">You Can't Fix What You Don't Track.</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• No idea where leads come from</li>
                <li>• No conversion data</li>
                <li>• No customer journey visibility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ INSIGHT CATEGORIES (CONTENT STRUCTURE) */}
      <section className="py-12 md:py-20 bg-gray-900 bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-black text-center mb-10 underline-custom">
            What We See After Working With Real Businesses
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors duration-300">
              <h3 className="text-xl font-bold text-orange-500 mb-3">SEO & Visibility</h3>
              <p className="text-gray-300">Why most businesses remain invisible online and how to fix it.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors duration-300">
              <h3 className="text-xl font-bold text-orange-500 mb-3">Website Conversion</h3>
              <p className="text-gray-300">Why 90% of business websites never convert and what to do about it.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors duration-300">
              <h3 className="text-xl font-bold text-orange-500 mb-3">Automation & AI</h3>
              <p className="text-gray-300">How automation reduces manual work and increases response speed.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors duration-300">
              <h3 className="text-xl font-bold text-orange-500 mb-3">Sales Systems</h3>
              <p className="text-gray-300">Building predictable sales processes instead of hoping for the best.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors duration-300">
              <h3 className="text-xl font-bold text-orange-500 mb-3">Scaling & Growth</h3>
              <p className="text-gray-300">How to grow without adding complexity or losing control.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors duration-300">
              <h3 className="text-xl font-bold text-orange-500 mb-3">Mistakes & Myths</h3>
              <p className="text-gray-300">Common misconceptions that keep businesses stuck and broke.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ FEATURED INSIGHT CARDS (HIGH-IMPACT) */}
      <section className="py-12 md:py-20 bg-gray-800 bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-black text-center mb-10 underline-custom">Featured Insights</h2>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-700 p-8 rounded-lg border-l-4 border-orange-500 hover:bg-gray-600 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">
                Why 90% of Business Websites Never Convert
              </h3>
              <p className="text-orange-400 font-semibold mb-4">
                Most websites are designed to look good — not to sell.
              </p>
              <p className="text-gray-300 mb-6">
                Learn how conversion-focused design turns visitors into paying clients.
              </p>
              <button className="text-orange-500 hover:text-orange-400 font-semibold">
                Read Full Insight →
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-700 p-8 rounded-lg border-l-4 border-orange-500 hover:bg-gray-600 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ads Without SEO Is Renting Growth
              </h3>
              <p className="text-orange-400 font-semibold mb-4">
                Once ads stop, so does traffic.
              </p>
              <p className="text-gray-300 mb-6">
                Discover why SEO is the foundation of sustainable growth.
              </p>
              <button className="text-orange-500 hover:text-orange-400 font-semibold">
                Read Full Insight →
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-700 p-8 rounded-lg border-l-4 border-orange-500 hover:bg-gray-600 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">
                WhatsApp Is Your Best Sales Channel — If You Automate It
              </h3>
              <p className="text-orange-400 font-semibold mb-4">
                Manual replies kill momentum.
              </p>
              <p className="text-gray-300 mb-6">
                See how automation increases response speed and conversions.
              </p>
              <button className="text-orange-500 hover:text-orange-400 font-semibold">
                Read Full Insight →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ REALITY CHECK SECTION (URGENCY CREATOR) */}
      <section className="py-12 md:py-20 bg-gray-900 bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-black mb-10">
            If You Do Nothing, This Is What Happens
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-red-500 text-2xl">•</span>
                <span className="text-gray-300">Leads continue leaking</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-red-500 text-2xl">•</span>
                <span className="text-gray-300">Competitors outrank you</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-red-500 text-2xl">•</span>
                <span className="text-gray-300">Ad costs increase</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-red-500 text-2xl">•</span>
                <span className="text-gray-300">Burnout grows</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-red-500 text-2xl">•</span>
                <span className="text-gray-300">Growth stalls</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-red-500 text-2xl">•</span>
                <span className="text-gray-300">Profit margins shrink</span>
              </div>
            </div>
          </div>

          <div className="bg-red-900/20 border border-red-500 rounded-lg p-8">
            <p className="text-xl font-bold text-red-400">
              The cost of waiting is always higher than the cost of fixing.
            </p>
          </div>
        </div>
      </section>

      {/* 6️⃣ THE OUTCOME SECTION — "WHAT CHANGES" */}
      <section className="py-12 md:py-20 bg-gray-800 bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-black text-center mb-10 underline-custom">
            What Happens When You Fix the System
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-red-400 mb-6">Before</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-red-500">✗</span>
                  <span className="text-gray-300">Invisible online</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500">✗</span>
                  <span className="text-gray-300">Manual follow-ups</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500">✗</span>
                  <span className="text-gray-300">Random sales</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500">✗</span>
                  <span className="text-gray-300">Guesswork decisions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500">✗</span>
                  <span className="text-gray-300">Burnout</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-green-400 mb-6">After</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-300">Found on Google</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-300">Automated responses</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-300">Predictable growth</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-300">Data-driven decisions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-300">Scalable systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ AUTHORITY POSITIONING (WHY CRES) */}
      <section className="py-12 md:py-20 bg-gray-900 bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-black mb-8">
            Why These Insights Matter
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            These insights don't come from theory.<br />
            They come from building, fixing, and scaling real businesses.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-orange-500 mb-3">SEO-first thinking</h3>
              <p className="text-gray-300">We build visibility that lasts beyond ad spend.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-orange-500 mb-3">Automation-driven growth</h3>
              <p className="text-gray-300">Systems that work harder so you don't have to.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-orange-500 mb-3">Conversion-focused systems</h3>
              <p className="text-gray-300">Every component designed to turn attention into revenue.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-orange-500 mb-3">Data-backed decisions</h3>
              <p className="text-gray-300">What gets measured gets improved.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8️⃣ SOFT CASE PROOF (WITHOUT NUMBERS) */}
      <section className="py-12 md:py-20 bg-gray-800 bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-black mb-12">
            What Businesses Discover After Working With Us
          </h2>

          <div className="space-y-8">
            <div className="bg-gray-700 p-6 rounded-lg border-l-4 border-orange-500">
              <p className="text-lg text-gray-300 italic">
                "We finally understood why our ads weren't converting."
              </p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg border-l-4 border-orange-500">
              <p className="text-lg text-gray-300 italic">
                "Our website started working like a salesperson."
              </p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg border-l-4 border-orange-500">
              <p className="text-lg text-gray-300 italic">
                "Follow-ups stopped slipping through the cracks."
              </p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg border-l-4 border-orange-500">
              <p className="text-lg text-gray-300 italic">
                "We stopped guessing and started growing predictably."
              </p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg border-l-4 border-orange-500">
              <p className="text-lg text-gray-300 italic">
                "The invisible problems became obvious solutions."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9️⃣ FINAL CTA (STRONG, CLEAN, CONFIDENT) */}
      <section className="py-12 md:py-20 bg-orange-500 bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-8">
            Your Business Doesn't Need More Effort.<br />
            It Needs Better Systems.
          </h2>

          <div className="mb-8">
            <a href="/contact" className="bg-white text-orange-500 hover:bg-gray-100 font-black text-2xl py-6 px-12 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105">
              Book a Free Strategy Session
            </a>
          </div>

          <p className="text-orange-100 text-lg">
            Let's identify what's holding your growth back — and fix it.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
