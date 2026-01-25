'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      {/* 1️⃣ HERO SECTION (ABOVE THE FOLD) */}
      <section className="py-20 bg-gradient-to-br from-[var(--cres-primary-bg)] to-[var(--cres-secondary-bg)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-20"></div>
        {/* Dimmed background overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Main Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--cres-white)] mb-6" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)'}}>
              Insights to Grow Your Business <span className="text-[var(--cres-orange-primary)]">Smarter.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--cres-white)] max-w-4xl mx-auto" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}>
              Expert strategies on digital growth, systems, SEO, and automation—crafted for serious business owners ready to scale.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <i className="fas fa-search"></i>
              </div>
              <input
                type="text"
                placeholder="Search insights..."
                className="w-full bg-gray-800/80 border border-gray-700 rounded-xl py-4 pl-12 pr-4 text-[var(--cres-white)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--cres-orange-primary)] focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { name: 'All', active: true },
              { name: 'Digital Growth', active: false },
              { name: 'SEO', active: false },
              { name: 'Automation', active: false },
              { name: 'Case Studies', active: false }
            ].map((category) => (
              <button
                key={category.name}
                className={`px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                  category.active
                    ? 'bg-[var(--cres-orange-primary)] text-[var(--cres-white)]'
                    : 'bg-gray-800/80 text-[var(--cres-white)] hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2️⃣ THE PROBLEM SECTION — "THE SILENT LEAKS" */}
      <section id="silent-leaks" className="py-12 md:py-20 bg-gray-800 relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-6 md:mb-10 underline-custom">
            The Silent Growth Killers Most Businesses Ignore
          </h2>

          <p className="text-base md:text-xl text-gray-300 text-center mb-8 md:mb-16 max-w-3xl mx-auto">
            Most businesses don't fail because they lack effort.<br />
            They fail because they're leaking leads, time, and money — silently.
          </p>

          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            {/* Pain #1 — Visibility */}
            <div className="bg-black border border-white/20 p-4 md:p-8 rounded-lg border-l-4 border-orange-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl md:text-4xl">🔍</div>
                <h3 className="text-xl md:text-2xl font-bold text-orange-500 underline-custom">Visibility</h3>
              </div>
              <h4 className="text-lg md:text-xl font-semibold text-white mb-3">Customers Are Searching. You're Not Showing Up.</h4>
              <ul className="text-gray-300 space-y-2 text-sm md:text-base">
                <li>• If you're not ranking, you're invisible</li>
                <li>• Ads stop working the moment you stop paying</li>
                <li>• SEO neglect = lost revenue every single day</li>
              </ul>
            </div>

            {/* Pain #2 — Conversion */}
            <div className="bg-black border border-white/20 p-4 md:p-8 rounded-lg border-l-4 border-orange-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl md:text-4xl">🎯</div>
                <h3 className="text-xl md:text-2xl font-bold text-orange-500 underline-custom">Conversion</h3>
              </div>
              <h4 className="text-lg md:text-xl font-semibold text-white mb-3">Traffic Without Conversion Is Just Noise.</h4>
              <ul className="text-gray-300 space-y-2 text-sm md:text-base">
                <li>• Beautiful websites that don't convert</li>
                <li>• No clear CTAs</li>
                <li>• No trust signals</li>
                <li>• No follow-up systems</li>
              </ul>
            </div>

            {/* Pain #3 — Manual Work */}
            <div className="bg-black border border-white/20 p-4 md:p-8 rounded-lg border-l-4 border-orange-500">
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
            <div className="bg-black border border-white/20 p-4 md:p-8 rounded-lg border-l-4 border-orange-500">
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
        </div>
      </section>

      {/* 3️⃣ INSIGHT CATEGORIES (CONTENT STRUCTURE) */}
      <section className="py-12 md:py-20 bg-gray-900 relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-black text-center mb-10 underline-custom">
            What We See After Working With Real Businesses
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-black border border-white/20 p-4 md:p-6 rounded-lg hover:border-orange-500 transition-colors duration-300">
              <h3 className="text-xl font-bold text-orange-500 mb-3">SEO & Visibility</h3>
              <p className="text-gray-300">Why most businesses remain invisible online and how to fix it.</p>
            </div>

            <div className="bg-black border border-white/20 p-4 md:p-6 rounded-lg hover:border-orange-500 transition-colors duration-300">
              <h3 className="text-lg md:text-xl font-bold text-orange-500 mb-2 md:mb-3">Website Conversion</h3>
              <p className="text-gray-300">Why 90% of business websites never convert and what to do about it.</p>
            </div>

            <div className="bg-black border border-white/20 p-4 md:p-6 rounded-lg hover:border-orange-500 transition-colors duration-300">
              <h3 className="text-lg md:text-xl font-bold text-orange-500 mb-2 md:mb-3">Automation & AI</h3>
              <p className="text-gray-300">How automation reduces manual work and increases response speed.</p>
            </div>

            <div className="bg-black border border-white/20 p-4 md:p-6 rounded-lg hover:border-orange-500 transition-colors duration-300">
              <h3 className="text-lg md:text-xl font-bold text-orange-500 mb-2 md:mb-3">Sales Systems</h3>
              <p className="text-gray-300">Building predictable sales processes instead of hoping for the best.</p>
            </div>

            <div className="bg-black border border-white/20 p-4 md:p-6 rounded-lg hover:border-orange-500 transition-colors duration-300">
              <h3 className="text-lg md:text-xl font-bold text-orange-500 mb-2 md:mb-3">Scaling & Growth</h3>
              <p className="text-gray-300">How to grow without adding complexity or losing control.</p>
            </div>

            <div className="bg-black border border-white/20 p-4 md:p-6 rounded-lg hover:border-orange-500 transition-colors duration-300">
              <h3 className="text-lg md:text-xl font-bold text-orange-500 mb-2 md:mb-3">Mistakes & Myths</h3>
              <p className="text-gray-300">Common misconceptions that keep businesses stuck and broke.</p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* 4️⃣ FEATURED INSIGHT CARDS (HIGH-IMPACT) */}
      <section className="py-12 md:py-20 bg-gray-800 relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-black text-center mb-10 underline-custom">Featured Insights</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {/* Card 1 */}
            <div className="bg-black border border-white/20 p-6 md:p-8 rounded-lg border-l-4 border-orange-500 hover:border-orange-400 transition-colors duration-300">
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
            <div className="bg-black border border-white/20 p-6 md:p-8 rounded-lg border-l-4 border-orange-500 hover:border-orange-400 transition-colors duration-300">
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
            <div className="bg-black border border-white/20 p-6 md:p-8 rounded-lg border-l-4 border-orange-500 hover:border-orange-400 transition-colors duration-300">
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
        </div>
      </section>

      {/* 5️⃣ REALITY CHECK SECTION (URGENCY CREATOR) */}
      <section className="py-12 md:py-20 bg-gray-900 relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
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
        </div>
      </section>

      {/* 6️⃣ THE OUTCOME SECTION — "WHAT CHANGES" */}
      <section className="py-12 md:py-20 bg-gray-800 relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
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
        </div>
      </section>

      {/* 7️⃣ AUTHORITY POSITIONING (WHY CRES) */}
      <section className="py-12 md:py-20 bg-gray-900 relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-black mb-8">
            Why These Insights Matter
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            These insights don't come from theory.<br />
            They come from building, fixing, and scaling real businesses.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="bg-black border border-white/20 p-4 md:p-6 rounded-lg">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-orange-500 mb-3">SEO-first thinking</h3>
              <p className="text-gray-300">We build visibility that lasts beyond ad spend.</p>
            </div>

            <div className="bg-black border border-white/20 p-4 md:p-6 rounded-lg">
              <div className="text-2xl md:text-3xl mb-3 md:mb-4">🤖</div>
              <h3 className="text-lg md:text-xl font-bold text-orange-500 mb-2 md:mb-3">Automation-driven growth</h3>
              <p className="text-sm md:text-base text-gray-300">Systems that work harder so you don't have to.</p>
            </div>

            <div className="bg-black border border-white/20 p-4 md:p-6 rounded-lg">
              <div className="text-2xl md:text-3xl mb-3 md:mb-4">💰</div>
              <h3 className="text-lg md:text-xl font-bold text-orange-500 mb-2 md:mb-3">Conversion-focused systems</h3>
              <p className="text-sm md:text-base text-gray-300">Every component designed to turn attention into revenue.</p>
            </div>

            <div className="bg-black border border-white/20 p-4 md:p-6 rounded-lg">
              <div className="text-2xl md:text-3xl mb-3 md:mb-4">📊</div>
              <h3 className="text-lg md:text-xl font-bold text-orange-500 mb-2 md:mb-3">Data-backed decisions</h3>
              <p className="text-sm md:text-base text-gray-300">What gets measured gets improved.</p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* 8️⃣ SOFT CASE PROOF (WITHOUT NUMBERS) */}
      <section className="py-12 md:py-20 bg-gray-800 relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-black mb-12">
            What Businesses Discover After Working With Us
          </h2>

          <div className="space-y-8">
            <div className="bg-black border border-white/20 p-4 md:p-6 rounded-lg border-l-4 border-orange-500">
              <p className="text-base md:text-lg text-gray-300 italic">
                "We finally understood why our ads weren't converting."
              </p>
            </div>

            <div className="bg-black border border-white/20 p-4 md:p-6 rounded-lg border-l-4 border-orange-500">
              <p className="text-base md:text-lg text-gray-300 italic">
                "Our website started working like a salesperson."
              </p>
            </div>

            <div className="bg-black border border-white/20 p-4 md:p-6 rounded-lg border-l-4 border-orange-500">
              <p className="text-base md:text-lg text-gray-300 italic">
                "Follow-ups stopped slipping through the cracks."
              </p>
            </div>

            <div className="bg-black border border-white/20 p-4 md:p-6 rounded-lg border-l-4 border-orange-500">
              <p className="text-base md:text-lg text-gray-300 italic">
                "We stopped guessing and started growing predictably."
              </p>
            </div>

            <div className="bg-black border border-white/20 p-4 md:p-6 rounded-lg border-l-4 border-orange-500">
              <p className="text-base md:text-lg text-gray-300 italic">
                "The invisible problems became obvious solutions."
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* 9️⃣ LATEST INSIGHTS SECTION */}
      <section className="py-20 bg-gradient-to-br from-[var(--cres-primary-bg)] to-[var(--cres-secondary-bg)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
        {/* Dimmed background overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Latest Insights Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-[var(--cres-white)] mb-6" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)'}}>
              Latest Insights
            </h2>
            <p className="text-xl md:text-2xl text-[var(--cres-white)] max-w-4xl mx-auto" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}>
              Expert strategies on digital growth, systems, SEO, and automation — crafted for serious business owners ready to scale.
            </p>
          </div>

          {/* Article Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16">
            {[
              {
                category: 'Digital Growth',
                title: '5 Digital Growth Mistakes Holding Your Business Back',
                description: 'Common pitfalls that prevent businesses from scaling effectively and how to avoid them.',
                date: 'April 26, 2024',
                readTime: '5 min read'
              },
              {
                category: 'SEO',
                title: 'SEO Myths That Are Slowing Your Growth',
                description: 'Debunking the most common SEO misconceptions that keep businesses invisible online.',
                date: 'April 20, 2024',
                readTime: '4 min read'
              },
              {
                category: 'Automation',
                title: 'Stop Missing Leads: How AI Automation Changed Sales for One Business',
                description: 'A real case study showing how automation transformed lead management and increased conversions.',
                date: 'April 18, 2024',
                readTime: '5 min read'
              },
              {
                category: 'Digital Growth',
                title: 'How to Make Your Website Work for You 24/7',
                description: 'Transform your website into a sales machine that works around the clock, even when you\'re not online.',
                date: 'April 9, 2024',
                readTime: '5 min read'
              }
            ].map((article, i) => (
              <div key={i} className="bg-black border border-white/20 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="mb-3 md:mb-4">
                  <span className={`inline-block px-2 md:px-3 py-1 rounded text-xs font-semibold ${
                    article.category === 'Digital Growth' || article.category === 'Automation'
                      ? 'bg-[var(--cres-orange-primary)] text-[var(--cres-white)]'
                      : 'bg-gray-600 text-[var(--cres-white)]'
                  }`}>
                    {article.category}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[var(--cres-white)] mb-2 md:mb-3 leading-tight">
                  {article.title}
                </h3>
                <p className="text-sm md:text-base text-[var(--cres-white)] mb-3 md:mb-4 leading-relaxed">
                  {article.description}
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-0 text-xs md:text-sm text-gray-400 mb-3 md:mb-4">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
                <a href="#" className="text-sm md:text-base text-[var(--cres-white)] font-semibold hover:text-[var(--cres-orange-primary)] transition-colors">
                  Read More <span className="text-[var(--cres-orange-primary)]">→</span>
                </a>
              </div>
            ))}
          </div>

          {/* Ready to Build Predictable Growth CTA */}
          <div className="bg-black border border-white/20 rounded-xl p-6 md:p-8 lg:p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              {/* Left Side - Branding */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-3 md:mb-4">
                  <img
                    src="/logo.png"
                    alt="CRES Dynamics Logo"
                    className="h-8 w-8 md:h-10 md:w-10 rounded-full object-cover"
                  />
                  <span className="text-[var(--cres-white)] font-bold text-base md:text-xl uppercase tracking-wide">
                    <span className="font-black">CRES</span> DYNAMICS
                  </span>
                </div>
                <p className="text-sm md:text-base lg:text-lg text-[var(--cres-white)]">
                  Turning Clicks Into Clients. Turning Chaos Into Growth.
                </p>
              </div>

              {/* Right Side - CTA */}
              <div className="text-center md:text-right">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-[var(--cres-white)] mb-3 md:mb-4" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}>
                  Ready to Build Predictable Growth?
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-[var(--cres-white)] mb-4 md:mb-6" style={{textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)'}}>
                  Get a clear strategy and system that brings results—consistently.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[#E87528] text-[var(--cres-white)] font-bold text-sm md:text-base lg:text-lg px-4 md:px-6 py-2 md:py-3 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500 uppercase tracking-wide"
                >
                  Book Your Free Strategy Session <span className="text-xs md:text-sm">►</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
