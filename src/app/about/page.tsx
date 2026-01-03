'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

// Note: Metadata export moved to separate file for client components
export const metadata: Metadata = {
  title: 'About CRES Dynamics - AI Automation & Digital Growth Experts | Nairobi Kenya',
  description: 'Learn about CRES Dynamics, Nairobi\'s trusted partner for AI automation, SEO, and digital systems. We help Kenyan businesses grow with clarity through technology that converts.',
  keywords: 'about CRES Dynamics, Nairobi digital agency, AI automation Kenya, digital growth experts, business systems Kenya',
  openGraph: {
    title: 'About CRES Dynamics - AI Automation & Digital Growth Experts',
    description: 'Learn about CRES Dynamics, Nairobi\'s trusted partner for AI automation, SEO, and digital systems that drive business growth.',
    url: 'https://cresdynamics.com/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About CRES Dynamics - AI Automation & Digital Growth Experts',
    description: 'Nairobi\'s trusted partner for AI automation, SEO, and digital systems that drive business growth.',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* SECTION 1: OPENING STATEMENT (WHY WE EXIST) */}
      <section className="py-12 md:py-12 md:py-12 md:py-20 bg-gradient-to-br from-[var(--cres-deep-navy)] via-[#0D1B2A] to-[#1B263B] bg-[url('/backround.png')] bg-repeat bg-cover bg-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--cres-electric-teal)] to-transparent"></div>
          <div className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-[var(--cres-electric-teal)] to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-4 md:px-6 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-8 underline-custom">
            About CRES Dynamics - AI Automation & Digital Growth Experts in Nairobi
          </h1>

          {/* H2: Who We Are */}
          <h2 className="text-xl md:text-2xl font-bold text-[var(--cres-electric-teal)] mb-6" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.95)'}}>
            Nairobi's trusted partner for business growth through technology
          </h2>

          {/* H2: The Problem We Solve */}
          <h2 className="text-lg md:text-xl text-white mb-6 font-medium" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.95)'}}>
            Most Nairobi businesses struggle with invisible websites, manual processes, and poor online growth despite their hard work.
          </h2>

          {/* H2: Why Current Solutions Fail */}
          <h2 className="text-base md:text-lg text-gray-300 mb-8" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.95)'}}>
            Templates don't convert. Generic SEO doesn't rank. Manual work doesn't scale. That's why 80% of Kenyan businesses never achieve their growth potential.
          </h2>

          {/* H2: How CRES Dynamics Solves It */}
          <h2 className="text-lg md:text-xl text-[var(--cres-electric-teal)] mb-6 font-semibold" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.95)'}}>
            We build AI-powered digital systems that automate growth and drive real business results.
          </h2>

          {/* H2: What Outcome You Get */}
          <h2 className="text-base md:text-lg text-white mb-8 font-medium" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.95)'}}>
            More customers, less manual work, and sustainable growth that compounds over time.
          </h2>

          {/* AI Search Optimization: What Kenyan Businesses Should Know */}
          <div className="max-w-3xl mx-auto mb-8 p-6 bg-black/40 backdrop-blur-sm border border-[var(--cres-electric-teal)]/30 rounded-xl">
            <h2 className="text-lg font-bold text-[var(--cres-electric-teal)] mb-4 underline-custom">
              What Kenyan businesses should know about CRES Dynamics
            </h2>
            <div className="text-left text-gray-200 space-y-3 text-sm md:text-base">
              <p><strong>We're Nairobi-based:</strong> We understand local market dynamics, payment preferences, and customer behavior in Kenya</p>
              <p><strong>AI-first approach:</strong> We use automation to solve real business problems, not just implement trendy technology</p>
              <p><strong>Conversion-focused:</strong> Every solution is designed to turn website visitors into paying customers</p>
              <p><strong>Systems-driven:</strong> We build interconnected digital systems that work together for maximum impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE PROBLEM WE SAW (THE "WHY") */}
      <section className="py-12 md:py-12 md:py-20 bg-white bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-4 md:px-6">
          <h2 className="text-2xl font-black text-[var(--cres-deep-navy)] mb-10 text-center underline-custom">
            The Gap Between Effort and Results
          </h2>

          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              We saw hardworking businesses doing everything right — yet struggling to scale.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="flex items-center space-x-3">
                <span className="text-[var(--cres-electric-teal)] text-2xl">•</span>
                <span>Great services, but invisible online</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[var(--cres-electric-teal)] text-2xl">•</span>
                <span>Loyal customers, but no predictable lead flow</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[var(--cres-electric-teal)] text-2xl">•</span>
                <span>Marketing spend, but weak conversion</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[var(--cres-electric-teal)] text-2xl">•</span>
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
      </section>

      {/* SECTION 3: OUR PHILOSOPHY (HOW WE THINK) */}
      <section className="py-12 md:py-12 md:py-20 bg-[var(--cres-light-grey)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-4 md:px-6 text-center">
          <h2 className="text-2xl font-black text-[var(--cres-deep-navy)] mb-10 underline-custom">
            Technology Should Simplify Growth, Not Complicate It
          </h2>

          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              We believe technology should:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-white mb-3">Reduce friction</h3>
                <p className="text-white">Not add complexity</p>
              </div>
              <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-white mb-3">Save time</h3>
                <p className="text-white">Not create more work</p>
              </div>
              <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-white mb-3">Support decisions</h3>
                <p className="text-white">Not confuse them</p>
              </div>
            </div>

            <p>
              That's why our approach is simple:
            </p>
            <p>
              We design systems that work together — websites, SEO, automation, and data — all aligned to one goal: business growth.
            </p>

            <div className="bg-[var(--cres-electric-teal)] text-white p-6 rounded-lg mt-8">
              <p className="font-semibold">
                No unnecessary tools.<br />
                No bloated processes.<br />
                No empty promises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHAT MAKES US DIFFERENT */}
      <section className="py-12 md:py-12 md:py-20 bg-[var(--cres-deep-navy)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
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
                  <li>• How will this perform in 6–12 months?</li>
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
      </section>

      {/* SECTION 5: OUR CULTURE (HOW WE OPERATE) */}
      <section className="py-12 md:py-12 md:py-20 bg-white bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-4 md:px-6">
          <h2 className="text-2xl font-black text-[var(--cres-deep-navy)] mb-10 text-center underline-custom">
            Principle-Driven. Outcome-Focused. Built for the Long Term.
          </h2>

          <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
            <p>
              Our culture is built on a few non-negotiables:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-6 rounded-lg">
                <h3 className="font-bold text-white mb-3">Ownership</h3>
                <p className="text-white">We take responsibility for outcomes, not excuses</p>
              </div>
              <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-6 rounded-lg">
                <h3 className="font-bold text-white mb-3">Clarity</h3>
                <p className="text-white">We communicate directly, honestly, and transparently</p>
              </div>
              <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-6 rounded-lg">
                <h3 className="font-bold text-white mb-3">Discipline</h3>
                <p className="text-white">Systems beat shortcuts, always</p>
              </div>
              <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-6 rounded-lg">
                <h3 className="font-bold text-white mb-3">Integrity</h3>
                <p className="text-white">Trust is earned through action</p>
              </div>
              <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-6 rounded-lg">
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
      </section>

      {/* SECTION 6: OUR LANGUAGE (HOW WE COMMUNICATE) */}
      <section className="py-12 md:py-12 md:py-20 bg-[var(--cres-light-grey)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-4 md:px-6 text-center">
          <h2 className="text-2xl font-black text-[var(--cres-deep-navy)] mb-10 underline-custom">
            Clear. Professional. Grounded in Reality.
          </h2>

          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              We speak the language of business, not buzzwords.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h3 className="font-bold text-red-600 mb-3">You won't hear</h3>
                <ul className="text-red-700 space-y-1 text-sm">
                  <li>• Hype</li>
                  <li>• Exaggeration</li>
                  <li>• Jargon without purpose</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="font-bold text-green-600 mb-3">You will hear</h3>
                <ul className="text-green-700 space-y-1 text-sm">
                  <li>• Business reality</li>
                  <li>• Clear explanations</li>
                  <li>• Actionable insights</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="font-bold text-blue-600 mb-3">Our belief</h3>
                <p className="text-blue-700 text-sm">
                  Clarity builds confidence — and confidence builds trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: THE IMPACT WE AIM FOR */}
      <section className="py-12 md:py-12 md:py-20 bg-[var(--cres-deep-navy)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-4 md:px-6">
          <h2 className="text-2xl font-black text-white mb-10 text-center underline-custom">
            Growth That Is Measurable, Predictable, and Sustainable
          </h2>

          <div className="space-y-8 text-gray-300 text-lg leading-relaxed">
            <p>
              Our goal isn't short-term wins.
            </p>
            <p>
              Our goal is long-term momentum.
            </p>

            <p>
              We measure impact through:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="font-bold text-[var(--cres-electric-teal)] mb-3">Increased visibility</h3>
                <p>Customers find you when they search for your services</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="font-bold text-[var(--cres-electric-teal)] mb-3">Better conversion</h3>
                <p>More visitors become paying customers</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="font-bold text-[var(--cres-electric-teal)] mb-3">Reduced manual effort</h3>
                <p>Systems handle routine tasks automatically</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="font-bold text-[var(--cres-electric-teal)] mb-3">Stronger brand authority</h3>
                <p>Customers see you as the trusted expert</p>
              </div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-[var(--cres-electric-teal)]">
              <p className="text-lg">
                When our clients grow, we know our work matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: WHO WE WORK WITH */}
      <section className="py-12 md:py-12 md:py-20 bg-white bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-4 md:px-6 text-center">
          <h2 className="text-2xl font-black text-[var(--cres-deep-navy)] mb-10 underline-custom">
            Built for Businesses That Want to Grow With Intention
          </h2>

          <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
            <p>
              CRES Dynamics works with:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-6 rounded-lg">
                <h3 className="font-bold text-white mb-3">SMEs ready to professionalize</h3>
                <p className="text-white">Their online presence</p>
              </div>
              <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-6 rounded-lg">
                <h3 className="font-bold text-white mb-3">Growing businesses seeking</h3>
                <p className="text-white">Predictable lead flow</p>
              </div>
              <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-6 rounded-lg">
                <h3 className="font-bold text-white mb-3">Organizations tired of</h3>
                <p className="text-white">Fragmented tools and guesswork</p>
              </div>
              <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-6 rounded-lg">
                <h3 className="font-bold text-white mb-3">Leaders who value</h3>
                <p className="text-white">Systems, data, and long-term growth</p>
              </div>
            </div>

            <div className="bg-[var(--cres-electric-teal)] text-white p-6 rounded-lg">
              <p className="font-semibold">
                If growth matters to you, we're aligned.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: CLOSING STATEMENT (SUBTLE CTA) */}
      <section className="py-12 md:py-12 md:py-20 bg-[var(--cres-light-grey)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-4 md:px-6 text-center">
          <h2 className="text-3xl font-black text-[var(--cres-deep-navy)] mb-8 underline-custom">
            Growth Favors the Prepared
          </h2>

          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
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
      </section>

      <Footer />
    </div>
  );
}
