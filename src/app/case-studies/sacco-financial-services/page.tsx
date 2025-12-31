'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SaccoCaseStudyPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* SECTION 1: Quiet Authority Hero */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--cres-deep-navy)] via-[#0D1B2A] to-[#1B263B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--cres-electric-teal)] to-transparent"></div>
          <div className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-[var(--cres-electric-teal)] to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">
            When opportunity arrives after hours<br />
            <span className="text-[var(--cres-electric-teal)]">— and no one is there to receive it.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            This SACCO had demand, inquiries, and interest — but lost momentum outside working hours.
          </p>
        </div>
      </section>

      {/* SECTION 2: Pattern Recognition */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-[var(--cres-deep-navy)] mb-8">
            Different industries. The same hidden problems.
          </h2>

          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Most businesses face structural problems, not effort problems. Growth becomes tied to the owner, opportunities slip away after hours, visibility depends entirely on paid advertising, and there's no predictability in the business model.
          </p>

          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-lg text-[var(--cres-deep-navy)] font-medium">
              This creates a ceiling effect. The business can grow to a certain point through effort and hustle, but then stalls because the foundational systems can't support further expansion.
            </p>
          </div>
        </div>
      </section>

      {/* CASE STUDY CARD STRUCTURE */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">

          {/* Industry Label */}
          <div className="text-center mb-8">
            <span className="inline-block bg-[var(--cres-electric-teal)] text-white text-sm font-semibold px-4 py-2 rounded-full">
              Financial Services · SACCO
            </span>
          </div>

          {/* The Situation (Reality-Based) */}
          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <h3 className="text-2xl font-bold text-[var(--cres-deep-navy)] mb-6">The Situation</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The SACCO relied on manual WhatsApp responses, office-hour follow-ups, and staff-dependent engagement. Leads came in consistently, but many went cold before any response could be provided.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              The operational model worked during business hours but created significant gaps in customer engagement outside those windows. Financial decisions are time-sensitive, and delayed responses created friction in the application process.
            </p>
          </div>

          {/* The Real Problem */}
          <div className="bg-[var(--cres-deep-navy)] text-white p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold text-[var(--cres-electric-teal)] mb-6">The Real Problem</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              The challenge wasn't marketing or product appeal. It was availability. Customers expect instant responses for financial services, and financial decisions are inherently time-sensitive.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Delayed replies reduced trust and momentum. Human-only systems could not match modern customer behavior expectations. Every missed response represented a lost opportunity that competitors with better systems could capture.
            </p>
          </div>

          {/* The Strategic Shift */}
          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <h3 className="text-2xl font-bold text-[var(--cres-deep-navy)] mb-6">The Strategic Shift</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Instead of increasing staff workload to cover more hours, the SACCO needed a system that never sleeps, never forgets, and never delays. Automation wasn't about replacing people — it was about protecting opportunity and ensuring consistent service quality.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-[var(--cres-electric-teal)]">WhatsApp AI Automation</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Instant responses to common inquiries</li>
                  <li>• Lead qualification and information gathering</li>
                  <li>• Application process initiation</li>
                  <li>• Clear handoff points to human staff</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-[var(--cres-electric-teal)]">Structured Follow-Up System</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Automated engagement sequences</li>
                  <li>• Usage tracking and member activity monitoring</li>
                  <li>• Consistent communication workflows</li>
                  <li>• Performance analytics and optimization</li>
                </ul>
              </div>
            </div>
          </div>

          {/* The Outcome */}
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold text-[var(--cres-deep-navy)] mb-6">The Outcome</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The SACCO established 24/7 lead engagement capability with consistent application flow processing. The system worked quietly in the background without disrupting existing operations or requiring additional staffing.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Member acquisition became more predictable, with reduced workload on existing staff and no missed opportunities after hours. The SACCO moved from reactive customer service to always-on availability.
            </p>
          </div>

          {/* Reflection Prompt */}
          <div className="bg-[var(--cres-electric-teal)] text-white p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-6">Reflection Point</h3>
            <p className="text-lg leading-relaxed mb-6">
              How many serious inquiries does your business miss when you're offline? What opportunities slip away because your systems can't respond instantly?
            </p>
            <p className="text-lg leading-relaxed">
              In a world where customers expect immediate responses, how does your current availability limit your growth potential?
            </p>
          </div>

          {/* Low-Pressure CTA */}
          <div className="text-center">
            <div className="space-y-4">
              <p className="text-gray-600 text-lg">
                Interested in understanding how 24/7 availability could transform your customer engagement?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/case-studies" className="border border-[var(--cres-electric-teal)] text-[var(--cres-electric-teal)] hover:bg-[var(--cres-electric-teal)] hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                  ← Back to Case Studies
                </a>
                <a href="/contact" className="bg-[var(--cres-electric-teal)] hover:bg-[#00B894] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                  Explore the System
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL SECTION: Silent Urgency Close */}
      <section className="py-20 bg-[var(--cres-deep-navy)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-8">
            Growth doesn't break businesses.<br />
            <span className="text-[var(--cres-electric-teal)]">Weak systems do.</span>
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            The difference between businesses that scale and those that stall is rarely effort. It's whether the systems can support the next level of growth without breaking under the strain.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/contact" className="bg-[var(--cres-electric-teal)] hover:bg-[#00B894] text-white font-black text-lg py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
              Discuss your growth constraints
            </a>
            <a href="/insights" className="border-2 border-gray-400 text-gray-300 hover:text-white hover:border-white font-semibold text-lg py-4 px-8 rounded-lg transition-all duration-300">
              Read more insights
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
