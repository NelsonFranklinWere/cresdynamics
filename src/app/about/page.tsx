'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* SECTION 1: OPENING STATEMENT (WHY WE EXIST) */}
      <section className="py-12 md:py-12 md:py-12 md:py-20 bg-gradient-to-br from-[var(--cres-deep-navy)] via-[#0D1B2A] to-[#1B263B] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-40 md:opacity-20"></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--cres-electric-teal)] to-transparent"></div>
          <div className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-[var(--cres-electric-teal)] to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-4 md:px-6 text-center relative z-10">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-8 md:mb-12 underline-custom">
            We Build Business Systems That<br />
            <span className="text-[var(--cres-electric-teal)]">Run Companies.</span>
          </h1>

          <div className="space-y-4 md:space-y-6 text-white text-base md:text-lg leading-relaxed">
            <p style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}>
              CRES Dynamics is a systems engineering company that builds ERP platforms, financial infrastructure, and automation systems that enable businesses to operate with visibility, control, and scale.
            </p>
            <p style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}>
              Most businesses fail not because they lack effort, but because they operate without systems, without visibility, and without proper controls.
            </p>
            <p style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}>
              We build systems that solve business problems, control critical data, and enable better decisions.
            </p>
            <p style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}>
              Every system we build—from ERPs to finance platforms to automation pipelines—is designed for scale, visibility, and control.
            </p>
            <p className="font-semibold text-[var(--cres-electric-teal)]" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}>
              We don't build websites.<br />
              We build systems that companies run on.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: CRES DYNAMICS — MISSION, VISION, CULTURE, THEME */}
      <section className="py-8 md:py-12 bg-white relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-40 md:opacity-20"></div>
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <h2 className="text-lg md:text-2xl font-black text-[var(--cres-deep-navy)] mb-6 md:mb-8 text-center underline-custom">
              CRES Dynamics — Business Systems Builder
            </h2>

            <div className="text-center mb-8 md:mb-12">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
                CRES Dynamics designs and builds business systems—ERPs, finance platforms, and automation—that companies actually run on. We build systems that solve business problems, control critical data, and enable better decisions. Every system is designed for scale, visibility, and control.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-12">
              {/* Mission Card */}
              <div className="bg-[var(--cres-black)] backdrop-blur-sm border border-[var(--cres-orange-primary)] md:border-white/20 p-4 md:p-8 rounded-lg shadow-lg">
                <h3 className="text-lg md:text-2xl font-bold text-[var(--cres-electric-teal)] mb-3 md:mb-6">Our Mission</h3>
                <p className="text-white text-xs md:text-lg leading-relaxed">
                  Build business systems—ERPs, finance platforms, and automation—that companies actually run on. Systems that solve problems, control data, and enable decisions.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-[var(--cres-black)] backdrop-blur-sm border border-[var(--cres-orange-primary)] md:border-white/20 p-4 md:p-8 rounded-lg shadow-lg">
                <h3 className="text-lg md:text-2xl font-bold text-[var(--cres-electric-teal)] mb-3 md:mb-6">Our Vision</h3>
                <p className="text-white text-xs md:text-lg leading-relaxed">
                  Become the leading builder of business systems in Kenya—ERPs, finance platforms, and automation systems that companies actually run on.
                </p>
              </div>

              {/* Culture Card */}
              <div className="bg-[var(--cres-black)] backdrop-blur-sm border border-[var(--cres-orange-primary)] md:border-white/20 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-[var(--cres-electric-teal)] mb-6">Our Culture</h3>
                <p className="text-white text-lg leading-relaxed mb-4">
                  We operate with a culture built on:
                </p>
                <ul className="text-white space-y-2">
                  <li className="flex items-start">
                    <span className="text-[var(--cres-electric-teal)] mr-3">•</span>
                    Continuous learning
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--cres-electric-teal)] mr-3">•</span>
                    Quick iteration
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--cres-electric-teal)] mr-3">•</span>
                    Iterating through each milestone with clarity and intent
                  </li>
                </ul>
                <p className="text-white text-lg leading-relaxed mt-4">
                  We believe progress comes from testing, improving, and refining systems continuously—not waiting for perfection.
                </p>
              </div>

              {/* Theme Card */}
              <div className="bg-gradient-to-br from-[var(--cres-orange-primary)] to-[#E87528] p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-6">Our Theme</h3>
                <p className="text-white text-lg md:text-xl font-semibold leading-relaxed">
                  Empowering businesses at the speed of technology.
                </p>
                <p className="text-white text-lg leading-relaxed mt-4">
                  This theme should be visually highlighted (accent color) and positioned as a guiding principle behind every solution CRES Dynamics builds.
                </p>
              </div>
            </div>

            <div className="text-center">
              <a href="/contact" className="bg-[var(--cres-electric-teal)] hover:bg-[#00B894] text-white font-black text-base md:text-lg py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 inline-block">
                Book a Systems Discovery Session
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE PROBLEM WE SAW (THE "WHY") */}
      <section className="py-8 md:py-12 bg-white relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-40 md:opacity-20"></div>
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto px-4 md:px-4 md:px-6">
          <h2 className="text-base md:text-xl font-black text-[var(--cres-deep-navy)] mb-4 md:mb-6 text-center underline-custom">
            The Gap Between Effort and Results
          </h2>

          <div className="space-y-3 md:space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              We saw hardworking businesses doing everything right — yet struggling to scale.
            </p>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6 my-4 md:my-6">
              <div className="flex items-center space-x-3">
                <span className="text-[var(--cres-electric-teal)] text-lg md:text-2xl">•</span>
                <span>Great services, but invisible online</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[var(--cres-electric-teal)] text-lg md:text-2xl">•</span>
                <span>Loyal customers, but no predictable lead flow</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[var(--cres-electric-teal)] text-lg md:text-2xl">•</span>
                <span>Marketing spend, but weak conversion</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[var(--cres-electric-teal)] text-lg md:text-2xl">•</span>
                <span>Growth ambition, but no systems to support it</span>
              </div>
            </div>

            <p>
              The problem wasn't the business.
            </p>
            <p>
              The problem was the lack of structure, automation, and systems—visibility and control were missing.
            </p>
            <p>
              Businesses lose money digitally when they are invisible to search, when revenue and payments are untracked, and when leads and deals slip through unrecorded.
            </p>
            <p className="font-semibold text-[var(--cres-deep-navy)]">
              CRES Dynamics was born to close that gap. Our long-term ambition: Africa tech transformation—business systems that companies across the region actually run on.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* SECTION 4: OUR PHILOSOPHY (HOW WE THINK) */}
      <section className="py-8 md:py-12 bg-[var(--cres-light-grey)] relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-40 md:opacity-20"></div>
        <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 md:px-4 md:px-6 text-center">
          <h2 className="text-base md:text-xl font-black text-[var(--cres-deep-navy)] mb-4 md:mb-8 underline-custom">
            Technology Should Simplify Growth, Not Complicate It
          </h2>

          <div className="space-y-3 md:space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              We believe technology should:
            </p>

            <div className="grid grid-cols-3 gap-2 md:gap-6 my-4 md:my-8">
              <div className="bg-[var(--cres-black)] backdrop-blur-sm border border-[var(--cres-orange-primary)] md:border-white/20 p-3 md:p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-white text-sm md:text-base mb-2 md:mb-3">Reduce friction</h3>
                <p className="text-white text-xs md:text-sm">Not add complexity</p>
              </div>
              <div className="bg-[var(--cres-black)] backdrop-blur-sm border border-[var(--cres-orange-primary)] md:border-white/20 p-3 md:p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-white text-sm md:text-base mb-2 md:mb-3">Save time</h3>
                <p className="text-white text-xs md:text-sm">Not create more work</p>
              </div>
              <div className="bg-[var(--cres-black)] backdrop-blur-sm border border-[var(--cres-orange-primary)] md:border-white/20 p-3 md:p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-white text-sm md:text-base mb-2 md:mb-3">Support decisions</h3>
                <p className="text-white text-xs md:text-sm">Not confuse them</p>
              </div>
            </div>

            <p>
              That's why our approach is simple:
            </p>
            <p>
              We build business systems that work together — ERPs, finance platforms, automation pipelines, and analytics — all aligned to one goal: systems that companies actually run on.
            </p>

            <div className="bg-[var(--cres-electric-teal)] text-white p-4 md:p-6 rounded-lg mt-4 md:mt-6">
              <p className="font-semibold text-sm md:text-base">
                No unnecessary tools. No bloated processes. No empty promises.
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* SECTION 5: WHAT MAKES US DIFFERENT (WHY US) */}
      <section id="why-us" className="py-12 md:py-20 bg-[var(--cres-deep-navy)] relative scroll-mt-20">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-40 md:opacity-20"></div>
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto px-4 md:px-4 md:px-6">
          <h2 className="text-2xl font-black text-white mb-10 text-center underline-custom">
            We Build Business Systems, Not Just Websites
          </h2>

          <div className="space-y-8 text-gray-300 text-lg leading-relaxed">
            <p>
              Most agencies build websites and deliver assets.
            </p>
            <p>
              We build business systems—ERPs, finance platforms, and automation—that companies actually run on.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-4">Where others stop at:</h3>
                <ul className="space-y-3">
                  <li>• A website</li>
                  <li>• A campaign</li>
                  <li>• A tool</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-4">We build systems:</h3>
                <ul className="space-y-3">
                  <li>• ERPs with role-based access and analytics</li>
                  <li>• Finance platforms with revenue tracking</li>
                  <li>• Automation pipelines that enable decisions</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-[var(--cres-electric-teal)]">
              <p className="text-lg">
                Every system we build answers three questions:
              </p>
              <p className="text-xl font-bold text-[var(--cres-electric-teal)] mt-2">
                What business problem does it solve? What data does it control? What decisions does it enable?
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* SECTION 6: OUR CULTURE (HOW WE OPERATE) */}
      <section className="py-12 md:py-20 bg-white relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-40 md:opacity-20"></div>
        <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 md:px-4 md:px-6">
          <h2 className="text-lg md:text-2xl font-black text-[var(--cres-deep-navy)] mb-6 md:mb-10 text-center underline-custom">
            Principle Driven. Outcome Focused. Built for the Long Term.
          </h2>

          <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
            <p>
              Our culture is built on a few non negotiables:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[var(--cres-black)] backdrop-blur-sm border border-[var(--cres-orange-primary)] md:border-white/20 p-6 rounded-lg">
                <h3 className="font-bold text-white mb-3">Ownership</h3>
                <p className="text-white">We take responsibility for outcomes, not excuses</p>
              </div>
              <div className="bg-[var(--cres-black)] backdrop-blur-sm border border-[var(--cres-orange-primary)] md:border-white/20 p-6 rounded-lg">
                <h3 className="font-bold text-white mb-3">Clarity</h3>
                <p className="text-white">We communicate directly, honestly, and transparently</p>
              </div>
              <div className="bg-[var(--cres-black)] backdrop-blur-sm border border-[var(--cres-orange-primary)] md:border-white/20 p-6 rounded-lg">
                <h3 className="font-bold text-white mb-3">Discipline</h3>
                <p className="text-white">Systems beat shortcuts, always</p>
              </div>
              <div className="bg-[var(--cres-black)] backdrop-blur-sm border border-[var(--cres-orange-primary)] md:border-white/20 p-6 rounded-lg">
                <h3 className="font-bold text-white mb-3">Integrity</h3>
                <p className="text-white">Trust is earned through action</p>
              </div>
              <div className="bg-[var(--cres-black)] backdrop-blur-sm border border-[var(--cres-orange-primary)] md:border-white/20 p-6 rounded-lg">
                <h3 className="font-bold text-white mb-3">Growth</h3>
                <p className="text-white">For our clients, and for ourselves</p>
              </div>
            </div>

            <div className="bg-[var(--cres-light-grey)] border border-gray-200 p-6 rounded-lg mt-8">
              <p className="font-semibold text-[var(--cres-deep-navy)]">
                We don't rush.<br />
                We don't overpromise.<br />
                We don't compromise quality.
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* SECTION 7: OUR LANGUAGE (HOW WE COMMUNICATE) */}
      <section className="py-12 md:py-20 bg-[var(--cres-light-grey)] relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-40 md:opacity-20"></div>
        <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 md:px-4 md:px-6 text-center">
          <h2 className="text-lg md:text-2xl font-black text-[var(--cres-deep-navy)] mb-6 md:mb-10 underline-custom">
            Clear. Professional. Grounded in Reality.
          </h2>

          <div className="space-y-4 md:space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
            <p>
              We speak the language of business, not buzzwords.
            </p>

            <div className="grid grid-cols-3 gap-2 md:gap-6 my-4 md:my-8">
              <div className="bg-red-50 p-3 md:p-6 rounded-lg border border-red-200">
                <h3 className="font-bold text-red-600 text-sm md:text-base mb-2 md:mb-3">You won't hear</h3>
                <ul className="text-red-700 space-y-1 text-xs md:text-sm">
                  <li>• Hype</li>
                  <li>• Exaggeration</li>
                  <li>• Jargon without purpose</li>
                </ul>
              </div>

              <div className="bg-green-50 p-3 md:p-6 rounded-lg border border-green-200">
                <h3 className="font-bold text-green-600 text-sm md:text-base mb-2 md:mb-3">You will hear</h3>
                <ul className="text-green-700 space-y-1 text-xs md:text-sm">
                  <li>• Business reality</li>
                  <li>• Clear explanations</li>
                  <li>• Actionable insights</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-3 md:p-6 rounded-lg border border-blue-200">
                <h3 className="font-bold text-blue-600 text-sm md:text-base mb-2 md:mb-3">Our belief</h3>
                <p className="text-blue-700 text-xs md:text-sm">
                  Clarity builds confidence — and confidence builds trust.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* SECTION 8: THE IMPACT WE AIM FOR */}
      <section className="py-12 md:py-20 bg-[var(--cres-deep-navy)] relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-40 md:opacity-20"></div>
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto px-4 md:px-4 md:px-6">
          <h2 className="text-2xl font-black text-white mb-10 text-center underline-custom">
            Growth That Is Measurable, Predictable, and Sustainable
          </h2>

          <div className="space-y-8 text-gray-300 text-lg leading-relaxed">
            <p>
              Our goal isn't short-term wins.
            </p>
            <p>
              Our goal is long term momentum.
            </p>

            <p>
              We measure impact through:
            </p>

            <div className="grid grid-cols-2 gap-4 md:gap-6 my-4 md:my-8">
              <div className="bg-[var(--cres-black)] p-4 md:p-6 rounded-lg">
                <h3 className="font-bold text-[var(--cres-electric-teal)] text-sm md:text-base mb-2 md:mb-3">ERP Systems</h3>
                <p className="text-white text-sm md:text-base">Role-based access, analytics, and automation that companies run on</p>
              </div>
              <div className="bg-[var(--cres-black)] p-4 md:p-6 rounded-lg">
                <h3 className="font-bold text-[var(--cres-electric-teal)] text-sm md:text-base mb-2 md:mb-3">Finance Platforms</h3>
                <p className="text-white text-sm md:text-base">Billing, subscriptions, invoices, and revenue dashboards</p>
              </div>
              <div className="bg-[var(--cres-black)] p-4 md:p-6 rounded-lg">
                <h3 className="font-bold text-[var(--cres-electric-teal)] text-sm md:text-base mb-2 md:mb-3">Automation Systems</h3>
                <p className="text-white text-sm md:text-base">Workflows, pipelines, and decision support that eliminate manual work</p>
              </div>
              <div className="bg-[var(--cres-black)] p-4 md:p-6 rounded-lg">
                <h3 className="font-bold text-[var(--cres-electric-teal)] text-sm md:text-base mb-2 md:mb-3">Business Operations</h3>
                <p className="text-white text-sm md:text-base">Projects, approvals, workflows, and reporting systems</p>
              </div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-[var(--cres-electric-teal)]">
              <p className="text-lg">
                When our clients grow, we know our work matters.
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* SECTION 9: WHO WE WORK WITH */}
      <section className="py-12 md:py-20 bg-white relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-40 md:opacity-20"></div>
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto px-4 md:px-4 md:px-6 text-center">
          <h2 className="text-lg md:text-2xl font-black text-[var(--cres-deep-navy)] mb-6 md:mb-10 underline-custom">
            Built for Businesses That Want to Grow With Intention
          </h2>

          <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
            <p>
              CRES Dynamics works with businesses that need:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-[var(--cres-black)] backdrop-blur-sm border border-[var(--cres-orange-primary)] md:border-white/20 p-6 rounded-lg">
                <h3 className="font-bold text-white mb-3">Custom ERP Systems</h3>
                <p className="text-white">When off-the-shelf ERPs fail</p>
              </div>
              <div className="bg-[var(--cres-black)] backdrop-blur-sm border border-[var(--cres-orange-primary)] md:border-white/20 p-6 rounded-lg">
                <h3 className="font-bold text-white mb-3">Finance & Revenue Platforms</h3>
                <p className="text-white">Billing, subscriptions, invoices, dashboards</p>
              </div>
              <div className="bg-[var(--cres-black)] backdrop-blur-sm border border-[var(--cres-orange-primary)] md:border-white/20 p-6 rounded-lg">
                <h3 className="font-bold text-white mb-3">Business Operations Systems</h3>
                <p className="text-white">Projects, approvals, workflows, reporting</p>
              </div>
              <div className="bg-[var(--cres-black)] backdrop-blur-sm border border-[var(--cres-orange-primary)] md:border-white/20 p-6 rounded-lg">
                <h3 className="font-bold text-white mb-3">Automation & AI Systems</h3>
                <p className="text-white">Follow-ups, workflows, decision support</p>
              </div>
            </div>

            <div className="bg-[var(--cres-electric-teal)] text-white p-6 rounded-lg">
              <p className="font-semibold">
                If growth matters to you, we're aligned.
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* SECTION 10: CLOSING STATEMENT (SUBTLE CTA) */}
      <section className="py-12 md:py-20 bg-[var(--cres-light-grey)] relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-40 md:opacity-20"></div>
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto px-4 md:px-4 md:px-6 text-center">
          <h2 className="text-3xl font-black text-[var(--cres-deep-navy)] mb-8 underline-custom">
            Growth Favors the Prepared
          </h2>

          <div className="space-y-4 md:space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
            <p>
              The business landscape rewards companies that have systems, visibility, and control.
            </p>
            <p>
              CRES Dynamics exists to build those systems — ERPs, finance platforms, and automation that companies actually run on.
            </p>
            <p className="font-semibold text-[var(--cres-deep-navy)]">
              When you're ready to build systems that run your company, we're ready to help.
            </p>
          </div>

          <div className="mt-12">
            <a href="/contact" className="bg-[var(--cres-electric-teal)] hover:bg-[#00B894] text-white font-black text-xl py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
              Contact CRES Dynamics
            </a>
          </div>
        </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
