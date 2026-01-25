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
            We Exist to Help Businesses Grow<br />
            <span className="text-[var(--cres-electric-teal)]">With Clarity, Not Guesswork.</span>
          </h1>

          <div className="space-y-4 md:space-y-6 text-white text-base md:text-lg leading-relaxed">
            <p style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}>
              Most businesses don't fail because they lack effort.
            </p>
            <p style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}>
              They fail because they grow without systems, without visibility, and without a clear digital foundation.
            </p>
            <p style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}>
              CRES Dynamics was created to solve that exact problem.
            </p>
            <p style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}>
              We exist to help businesses be found, be trusted, and grow sustainably in a digital world that rewards clarity, speed, and consistency.
            </p>
            <p className="font-semibold text-[var(--cres-electric-teal)]" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}>
              We don't chase trends.<br />
              We build foundations that compound.
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
              CRES Dynamics — A Digital Innovation Company
            </h2>

            <div className="text-center mb-8 md:mb-12">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
                CRES Dynamics is a digital innovation company focused on building fast, growth driven digital systems that solve real world business problems. We design, optimize, and automate digital experiences that help businesses move faster, scale smarter, and achieve measurable success.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-12">
              {/* Mission Card */}
              <div className="bg-[var(--cres-black)] backdrop-blur-sm border border-[var(--cres-orange-primary)] md:border-white/20 p-4 md:p-8 rounded-lg shadow-lg">
                <h3 className="text-lg md:text-2xl font-bold text-[var(--cres-electric-teal)] mb-3 md:mb-6">Our Mission</h3>
                <p className="text-white text-xs md:text-lg leading-relaxed">
                  Empower businesses with fast, growth-focused digital solutions that solve real-world problems and drive measurable success.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-[var(--cres-black)] backdrop-blur-sm border border-[var(--cres-orange-primary)] md:border-white/20 p-4 md:p-8 rounded-lg shadow-lg">
                <h3 className="text-lg md:text-2xl font-bold text-[var(--cres-electric-teal)] mb-3 md:mb-6">Our Vision</h3>
                <p className="text-white text-xs md:text-lg leading-relaxed">
                  Become the leading force in transforming businesses through technology, setting new standards for speed, growth, and innovation in the digital landscape.
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
                Book a Free Strategy Session
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
              The problem was the lack of structure, automation, and strategy behind their growth.
            </p>
            <p className="font-semibold text-[var(--cres-deep-navy)]">
              CRES Dynamics was born to close that gap.
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
              We design systems that work together — websites, SEO, automation, and data — all aligned to one goal: business growth.
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

      {/* SECTION 5: WHAT MAKES US DIFFERENT */}
      <section className="py-12 md:py-20 bg-[var(--cres-deep-navy)] relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-40 md:opacity-20"></div>
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto px-4 md:px-4 md:px-6">
          <h2 className="text-2xl font-black text-white mb-10 text-center underline-custom">
            We Build Systems, Not Just Deliverables
          </h2>

          <div className="space-y-8 text-gray-300 text-lg leading-relaxed">
            <p>
              Most agencies deliver assets.
            </p>
            <p>
              We build operating systems for growth.
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
                <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-4">We go further:</h3>
                <ul className="space-y-3">
                  <li>• How will this convert?</li>
                  <li>• How will this scale?</li>
                  <li>• How will this perform in 6 12 months?</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-[var(--cres-electric-teal)]">
              <p className="text-lg">
                Every solution we design answers one question:
              </p>
              <p className="text-xl font-bold text-[var(--cres-electric-teal)] mt-2">
                Does this move the business forward?
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
                <h3 className="font-bold text-[var(--cres-electric-teal)] text-sm md:text-base mb-2 md:mb-3">Increased visibility</h3>
                <p className="text-white text-sm md:text-base">Customers find you when they search for your services</p>
              </div>
              <div className="bg-[var(--cres-black)] p-4 md:p-6 rounded-lg">
                <h3 className="font-bold text-[var(--cres-electric-teal)] text-sm md:text-base mb-2 md:mb-3">Better conversion</h3>
                <p className="text-white text-sm md:text-base">More visitors become paying customers</p>
              </div>
              <div className="bg-[var(--cres-black)] p-4 md:p-6 rounded-lg">
                <h3 className="font-bold text-[var(--cres-electric-teal)] text-sm md:text-base mb-2 md:mb-3">Reduced manual effort</h3>
                <p className="text-white text-sm md:text-base">Systems handle routine tasks automatically</p>
              </div>
              <div className="bg-[var(--cres-black)] p-4 md:p-6 rounded-lg">
                <h3 className="font-bold text-[var(--cres-electric-teal)] text-sm md:text-base mb-2 md:mb-3">Stronger brand authority</h3>
                <p className="text-white text-sm md:text-base">Customers see you as the trusted expert</p>
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
              CRES Dynamics works with:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-[var(--cres-black)] backdrop-blur-sm border border-[var(--cres-orange-primary)] md:border-white/20 p-6 rounded-lg">
                <h3 className="font-bold text-white mb-3">SMEs ready to professionalize</h3>
                <p className="text-white">Their online presence</p>
              </div>
              <div className="bg-[var(--cres-black)] backdrop-blur-sm border border-[var(--cres-orange-primary)] md:border-white/20 p-6 rounded-lg">
                <h3 className="font-bold text-white mb-3">Growing businesses seeking</h3>
                <p className="text-white">Predictable lead flow</p>
              </div>
              <div className="bg-[var(--cres-black)] backdrop-blur-sm border border-[var(--cres-orange-primary)] md:border-white/20 p-6 rounded-lg">
                <h3 className="font-bold text-white mb-3">Organizations tired of</h3>
                <p className="text-white">Fragmented tools and guesswork</p>
              </div>
              <div className="bg-[var(--cres-black)] backdrop-blur-sm border border-[var(--cres-orange-primary)] md:border-white/20 p-6 rounded-lg">
                <h3 className="font-bold text-white mb-3">Leaders who value</h3>
                <p className="text-white">Systems, data, and long term growth</p>
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
              The digital landscape rewards businesses that are structured, visible, and intentional.
            </p>
            <p>
              CRES Dynamics exists to help you get there — with systems that work today and scale tomorrow.
            </p>
            <p className="font-semibold text-[var(--cres-deep-navy)]">
              When you're ready to build for growth, we're ready to help.
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
