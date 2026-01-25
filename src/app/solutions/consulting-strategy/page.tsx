'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ConsultingStrategyPage() {
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
      <      section className="py-12 md:py-20 bg-gradient-to-br from-[var(--cres-primary-bg)] to-[var(--cres-secondary-bg)] relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black underline-custom text-[var(--cres-white)] text-center mb-16">
            The Problem Most Businesses Ignore Until It's Too Late
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4">🌀</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-3 group-hover:text-[var(--cres-orange-primary)] transition-colors">Strategy Confusion</h3>
              <p className="text-gray-300">You know you need a plan but don't know where to start. Digital marketing feels like a maze with no exit.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-3 group-hover:text-[var(--cres-orange-primary)] transition-colors">Tool Overload</h3>
              <p className="text-gray-300">Too many tools, too little results. You have software for everything but systems for nothing.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-3 group-hover:text-[var(--cres-orange-primary)] transition-colors">No Clear Direction</h3>
              <p className="text-gray-300">You're doing social media, ads, SEO, content — but why? What's the bigger picture?</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-3 group-hover:text-[var(--cres-orange-primary)] transition-colors">No ROI Tracking</h3>
              <p className="text-gray-300">You spend money on marketing but can't connect it to business growth. Is any of it working?</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-3 group-hover:text-[var(--cres-orange-primary)] transition-colors">Time Waste</h3>
              <p className="text-gray-300">Hours spent on busywork that doesn't move the needle. Tactical work without strategic thinking.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-3 group-hover:text-[var(--cres-orange-primary)] transition-colors">Money Down the Drain</h3>
              <p className="text-gray-300">Expensive tools and agencies delivering nothing. You're investing without returns.</p>
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
              <div className="text-3xl">🎨</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-white)] mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Agencies sell deliverables, not results</h3>
                <p className="text-gray-300">Most agencies deliver websites, campaigns, and content without ensuring they drive business growth.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 flex items-start space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-3xl">📱</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-white)] mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Everyone claims to be "full-service"</h3>
                <p className="text-gray-300">Every agency does everything, which means they do nothing exceptionally well. Specialists are rare.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 flex items-start space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-3xl">⏱️</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-white)] mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Business owners are too busy</h3>
                <p className="text-gray-300">You're firefighting daily operations and don't have time to think strategically about growth.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 flex items-start space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-3xl">📊</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-white)] mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">No measurement culture</h3>
                <p className="text-gray-300">Most businesses don't track what's working. Without data, you can't optimize or scale.</p>
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

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[var(--cres-orange-primary)] rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 group-hover:scale-110 transition-transform">1</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-4 group-hover:text-[var(--cres-orange-primary)] transition-colors">Business Audit & Strategy</h3>
              <p className="text-gray-300">Comprehensive analysis of your current systems, gaps, and opportunities. Clear roadmap for growth.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[var(--cres-orange-primary)] rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 group-hover:scale-110 transition-transform">2</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-4 group-hover:text-[var(--cres-orange-primary)] transition-colors">Technology Roadmap</h3>
              <p className="text-gray-300">Which tools to use, when to implement them, and how they connect. No more tool chaos.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[var(--cres-orange-primary)] rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 group-hover:scale-110 transition-transform">3</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-4 group-hover:text-[var(--cres-orange-primary)] transition-colors">Scaling Implementation</h3>
              <p className="text-gray-300">Step-by-step execution with measurable milestones. From confusion to clarity to growth.</p>
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
            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 flex items-start space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-2xl text-[var(--cres-orange-primary)]">🎯</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-white)] mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">ROI is our only metric</h3>
                <p className="text-gray-300">We measure success by your bank account, not our deliverables. If it doesn't grow your business, we don't do it.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 flex items-start space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-2xl text-[var(--cres-orange-primary)]">🇰🇪</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-white)] mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Kenya business expertise</h3>
                <p className="text-gray-300">Deep understanding of local market dynamics, regulations, and customer behavior. No imported frameworks.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 flex items-start space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-2xl text-[var(--cres-orange-primary)]">🔄</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-white)] mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Long-term partnership</h3>
                <p className="text-gray-300">We don't disappear after the audit. We stay with you through implementation and optimization.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 flex items-start space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-2xl text-[var(--cres-orange-primary)]">📊</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-white)] mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Data-driven decisions</h3>
                <p className="text-gray-300">Every recommendation backed by data and market research. No guesswork or trends.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 flex items-start space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-2xl text-[var(--cres-orange-primary)]">🚀</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-white)] mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Execution included</h3>
                <p className="text-gray-300">We don't just give advice — we help implement it. Strategy with execution guarantee.</p>
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

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[var(--cres-orange-primary)] mb-6 flex items-center">
                <span className="text-3xl mr-3">✅</span>
                This is for you if:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--cres-orange-primary)] mt-1">✓</span>
                  <span className="text-gray-300">You're tired of confusing marketing advice and want clear direction</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--cres-orange-primary)] mt-1">✓</span>
                  <span className="text-gray-300">You want a comprehensive plan that connects all your marketing efforts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--cres-orange-primary)] mt-1">✓</span>
                  <span className="text-gray-300">You're ready to invest in strategy before spending on tactics</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--cres-orange-primary)] mt-1">✓</span>
                  <span className="text-gray-300">You want measurable results, not just activity</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--cres-orange-primary)] mt-1">✓</span>
                  <span className="text-gray-300">You understand that great execution needs great strategy</span>
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
                  <span className="text-gray-300">You want quick fixes without understanding the bigger picture</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span className="text-gray-300">You prefer to keep doing what you're doing because "it might work someday"</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span className="text-gray-300">You don't want data or measurement in your decision-making</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span className="text-gray-300">You think spending money on ads is the same as having a marketing strategy</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span className="text-gray-300">You don't want to invest time in understanding your business systems</span>
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

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-bold text-[var(--cres-orange-primary)] mb-3">Crystal Clear Direction</h3>
              <p className="text-gray-300">No more confusion about what to do next. Every marketing dollar has a clear purpose and expected return.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-bold text-[var(--cres-orange-primary)] mb-3">Efficient Resource Allocation</h3>
              <p className="text-gray-300">Stop wasting money on things that don't work. Focus your time and budget on what actually grows your business.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-bold text-[var(--cres-orange-primary)] mb-3">Predictable Growth</h3>
              <p className="text-gray-300">Systems create predictable results. Know exactly what to expect and when to expect it.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-bold text-[var(--cres-orange-primary)] mb-3">Strategic Confidence</h3>
              <p className="text-gray-300">Make decisions based on data and strategy, not hope and trends. Sleep better knowing you're on the right path.</p>
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
            Your competitors are getting strategic right now. Every day you operate without a clear plan is another day they get stronger. Every dollar you spend without strategy is money thrown away. Confusion costs more than clarity ever will. Your business deserves a real plan — stop delaying and start winning.
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
