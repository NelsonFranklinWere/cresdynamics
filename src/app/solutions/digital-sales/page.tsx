'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DigitalSalesPage() {
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
            Traffic flows in but
            <br />
            <span className="text-[var(--cres-electric-teal)]">customers leak out everywhere.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            You drive visitors to your site but they don't buy. Leads disappear into black holes. Your sales funnel has more holes than a fishing net. You're generating traffic but not revenue.
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
              <div className="text-5xl mb-4">🚫</div>
              <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-3">Leads Disappear</h3>
              <p className="text-gray-600">Visitors contact you but never hear back. Or they hear back too late. By the time you respond, they've bought from someone else.</p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-3">No Follow-Up System</h3>
              <p className="text-gray-600">You get inquiries but don't have a process to nurture them. One touchpoint isn't enough to close the sale.</p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-3">High Ad Spend, Low ROI</h3>
              <p className="text-gray-600">You're paying for clicks but not getting customers. Your cost per acquisition is through the roof.</p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-3">Manual Sales Process</h3>
              <p className="text-gray-600">Everything is manual. Following up, sending quotes, tracking deals. You can't scale because you're the bottleneck.</p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-3">No Conversion Tracking</h3>
              <p className="text-gray-600">You don't know which marketing works. No data means no optimization. You're guessing, not growing.</p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-3">Wrong Customer Journey</h3>
              <p className="text-gray-600">Your sales process doesn't match how customers want to buy. You're pushing when you should be guiding.</p>
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
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">Websites designed for looks, not sales</h3>
                <p className="text-gray-600">Most websites are built to impress, not convert. Pretty designs don't turn visitors into customers.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-3xl">📱</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">Fragmented communication channels</h3>
                <p className="text-gray-600">Customers contact you via website, WhatsApp, phone, email. You manage them separately instead of as a unified journey.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-3xl">⏱️</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">No sales process</h3>
                <p className="text-gray-600">You don't have a defined sales funnel. Every customer interaction is handled differently, leading to inconsistent results.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-3xl">🎯</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">Wrong customer understanding</h3>
                <p className="text-gray-600">You don't understand your customer's buying journey. You push sales instead of guiding purchases.</p>
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
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-4">Conversion-Optimized Website</h3>
              <p className="text-gray-300">Landing pages designed specifically for your customer journey. Clear value propositions, social proof, and irresistible offers.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6">2</div>
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-4">Unified Lead Management</h3>
              <p className="text-gray-300">All inquiries — website forms, WhatsApp, phone calls — flow into one system. Never lose a lead again.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6">3</div>
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-4">Automated Sales Funnel</h3>
              <p className="text-gray-300">Nurture leads automatically. Follow-up sequences, proposal delivery, payment collection — all on autopilot.</p>
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
                <h3 className="text-lg font-bold text-[var(--cres-deep-navy)]">Sales psychology built-in</h3>
                <p className="text-gray-600">Every page, every email, every follow-up is crafted using proven sales psychology. We guide, not push.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-2xl text-[var(--cres-electric-teal)]">📊</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-deep-navy)]">Data-driven optimization</h3>
                <p className="text-gray-600">Track every conversion point. Know exactly where customers drop off and why. Continuous improvement based on real data.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-2xl text-[var(--cres-electric-teal)]">🇰🇪</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-deep-navy)]">Kenyan payment integration</h3>
                <p className="text-gray-600">M-Pesa, card payments, bank transfers — all integrated. Make buying from you as easy as buying from your competitors.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-2xl text-[var(--cres-electric-teal)]">🤖</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-deep-navy)]">AI-powered personalization</h3>
                <p className="text-gray-600">Dynamic content and recommendations based on customer behavior. Every visitor sees a personalized experience.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-2xl text-[var(--cres-electric-teal)]">🔄</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-deep-navy)]">Lifetime customer value focus</h3>
                <p className="text-gray-600">We don't just close sales — we build long-term customer relationships that generate repeat business and referrals.</p>
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
                  <span className="text-gray-700">You're tired of losing leads and wasting ad spend</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-gray-700">You want predictable sales instead of feast-or-famine</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-gray-700">You're ready to invest in systems that pay for themselves</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-gray-700">You want to scale without hiring a sales team</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-gray-700">You understand that great marketing needs great sales systems</span>
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
                  <span className="text-gray-700">You want to handle every customer interaction personally</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 mt-1">✗</span>
                  <span className="text-gray-700">You don't want to track or measure your sales performance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 mt-1">✗</span>
                  <span className="text-gray-700">You prefer manual processes to automated systems</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 mt-1">✗</span>
                  <span className="text-gray-700">You're not ready to invest in your sales infrastructure</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 mt-1">✗</span>
                  <span className="text-gray-700">You think sales funnels are just for "big companies"</span>
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
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-3">Higher Conversion Rates</h3>
              <p className="text-gray-300">Turn more website visitors into paying customers. Stop losing prospects at every stage of the funnel.</p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-3">Predictable Revenue</h3>
              <p className="text-gray-300">Know exactly how many leads you need to hit your revenue targets. No more guessing or hoping.</p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-3">Lower Customer Acquisition Cost</h3>
              <p className="text-gray-300">More efficient sales process means you spend less to acquire each customer. Higher profit margins.</p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-3">Scalable Sales Operations</h3>
              <p className="text-gray-300">Handle more customers without adding staff. Your sales team becomes more productive, not bigger.</p>
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
            Your competitors are optimizing their sales funnels right now. Every lead you lose is revenue going to someone else. Every manual process you maintain is time wasted on things that could be automated. Your sales are leaking — and it's costing you dearly.
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
