'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ConsultingStrategyPage() {
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
            You're drowning in tools
            <br />
            <span className="text-[var(--cres-electric-teal)]">but starving for direction.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            You have WhatsApp, a website, social media, ads, CRM, email — but no clear plan connecting them all. You're busy being busy but going nowhere. Confusion isn't a strategy, and hope isn't a plan.
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
              <div className="text-5xl mb-4">🌀</div>
              <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-3">Strategy Confusion</h3>
              <p className="text-gray-600">You know you need a plan but don't know where to start. Digital marketing feels like a maze with no exit.</p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-3">Tool Overload</h3>
              <p className="text-gray-600">Too many tools, too little results. You have software for everything but systems for nothing.</p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-3">No Clear Direction</h3>
              <p className="text-gray-600">You're doing social media, ads, SEO, content — but why? What's the bigger picture?</p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-3">No ROI Tracking</h3>
              <p className="text-gray-600">You spend money on marketing but can't connect it to business growth. Is any of it working?</p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-3">Time Waste</h3>
              <p className="text-gray-600">Hours spent on busywork that doesn't move the needle. Tactical work without strategic thinking.</p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-3">Money Down the Drain</h3>
              <p className="text-gray-600">Expensive tools and agencies delivering nothing. You're investing without returns.</p>
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
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">Agencies sell deliverables, not results</h3>
                <p className="text-gray-600">Most agencies deliver websites, campaigns, and content without ensuring they drive business growth.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-3xl">📱</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">Everyone claims to be "full-service"</h3>
                <p className="text-gray-600">Every agency does everything, which means they do nothing exceptionally well. Specialists are rare.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-3xl">⏱️</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">Business owners are too busy</h3>
                <p className="text-gray-600">You're firefighting daily operations and don't have time to think strategically about growth.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-3xl">📊</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">No measurement culture</h3>
                <p className="text-gray-600">Most businesses don't track what's working. Without data, you can't optimize or scale.</p>
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
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-4">Business Audit & Strategy</h3>
              <p className="text-gray-300">Comprehensive analysis of your current systems, gaps, and opportunities. Clear roadmap for growth.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6">2</div>
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-4">Technology Roadmap</h3>
              <p className="text-gray-300">Which tools to use, when to implement them, and how they connect. No more tool chaos.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6">3</div>
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-4">Scaling Implementation</h3>
              <p className="text-gray-300">Step-by-step execution with measurable milestones. From confusion to clarity to growth.</p>
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
                <h3 className="text-lg font-bold text-[var(--cres-deep-navy)]">ROI is our only metric</h3>
                <p className="text-gray-600">We measure success by your bank account, not our deliverables. If it doesn't grow your business, we don't do it.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-2xl text-[var(--cres-electric-teal)]">🇰🇪</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-deep-navy)]">Kenya business expertise</h3>
                <p className="text-gray-600">Deep understanding of local market dynamics, regulations, and customer behavior. No imported frameworks.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-2xl text-[var(--cres-electric-teal)]">🔄</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-deep-navy)]">Long-term partnership</h3>
                <p className="text-gray-600">We don't disappear after the audit. We stay with you through implementation and optimization.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-2xl text-[var(--cres-electric-teal)]">📊</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-deep-navy)]">Data-driven decisions</h3>
                <p className="text-gray-600">Every recommendation backed by data and market research. No guesswork or trends.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-2xl text-[var(--cres-electric-teal)]">🚀</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-deep-navy)]">Execution included</h3>
                <p className="text-gray-600">We don't just give advice — we help implement it. Strategy with execution guarantee.</p>
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
                  <span className="text-gray-700">You're tired of confusing marketing advice and want clear direction</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-gray-700">You want a comprehensive plan that connects all your marketing efforts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-gray-700">You're ready to invest in strategy before spending on tactics</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-gray-700">You want measurable results, not just activity</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-gray-700">You understand that great execution needs great strategy</span>
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
                  <span className="text-gray-700">You want quick fixes without understanding the bigger picture</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 mt-1">✗</span>
                  <span className="text-gray-700">You prefer to keep doing what you're doing because "it might work someday"</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 mt-1">✗</span>
                  <span className="text-gray-700">You don't want data or measurement in your decision-making</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 mt-1">✗</span>
                  <span className="text-gray-700">You think spending money on ads is the same as having a marketing strategy</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 mt-1">✗</span>
                  <span className="text-gray-700">You don't want to invest time in understanding your business systems</span>
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
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-3">Crystal Clear Direction</h3>
              <p className="text-gray-300">No more confusion about what to do next. Every marketing dollar has a clear purpose and expected return.</p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-3">Efficient Resource Allocation</h3>
              <p className="text-gray-300">Stop wasting money on things that don't work. Focus your time and budget on what actually grows your business.</p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-3">Predictable Growth</h3>
              <p className="text-gray-300">Systems create predictable results. Know exactly what to expect and when to expect it.</p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-3">Strategic Confidence</h3>
              <p className="text-gray-300">Make decisions based on data and strategy, not hope and trends. Sleep better knowing you're on the right path.</p>
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
            Your competitors are getting strategic right now. Every day you operate without a clear plan is another day they get stronger. Every dollar you spend without strategy is money thrown away. Confusion costs more than clarity ever will. Your business deserves a real plan — stop delaying and start winning.
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
