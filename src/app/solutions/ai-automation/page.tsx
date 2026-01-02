'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AIAutomationPage() {
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
            Your phone never stops ringing,
            <br />
            <span className="text-[var(--cres-electric-teal)]">but you're missing customers.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            WhatsApp messages pile up. Calls go unanswered. Leads slip through the cracks. You're overwhelmed by communication but underperforming on sales.
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
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-3">WhatsApp Overload</h3>
              <p className="text-gray-600">Your phone buzzes constantly. Customer inquiries, complaints, orders — all mixed together. You can't respond to everything.</p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">😴</div>
              <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-3">Missed Opportunities</h3>
              <p className="text-gray-600">Leads contact you while you're sleeping, in meetings, or busy with other customers. By the time you respond, they've moved on.</p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-3">Manual Repetition</h3>
              <p className="text-gray-600">You answer the same questions every day. Pricing inquiries, service details, location info — all manual work that steals your time.</p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-3">No Lead Tracking</h3>
              <p className="text-gray-600">You don't know which inquiries turn into customers. No data means no improvement. You're operating blind.</p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">⏰</div>
              <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-3">Time Drain</h3>
              <p className="text-gray-600">Hours spent on WhatsApp instead of growing your business. Customer service becomes your full-time job.</p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">💸</div>
              <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-3">Lost Revenue</h3>
              <p className="text-gray-600">Every missed message is a lost customer. Every slow response loses trust. Every manual process costs you money.</p>
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
              <div className="text-3xl">📱</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">WhatsApp is your only channel</h3>
                <p className="text-gray-600">Most businesses rely on one person answering WhatsApp. When that person is unavailable, the business stops responding.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-3xl">🤖</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">AI feels too complicated</h3>
                <p className="text-gray-600">Business owners know they need automation but think it's too technical or expensive. They put up with manual work instead.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-3xl">📈</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">No systems thinking</h3>
                <p className="text-gray-600">Most businesses automate one thing at a time. They need a complete system that handles the entire customer journey.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-3xl">⏱️</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">Time poverty</h3>
                <p className="text-gray-600">You're too busy putting out fires to build systems that prevent them. It's a vicious cycle of reactive work.</p>
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
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-4">Smart AI Assistant</h3>
              <p className="text-gray-300">AI answers common questions instantly. Handles pricing, availability, and basic inquiries 24/7.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6">2</div>
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-4">Lead Qualification</h3>
              <p className="text-gray-300">Automatically identifies serious buyers from casual browsers. Routes hot leads directly to you.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6">3</div>
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-4">Workflow Automation</h3>
              <p className="text-gray-300">Order tracking, delivery updates, payment reminders — all automated. You focus on growing, not managing.</p>
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
                <h3 className="text-lg font-bold text-[var(--cres-deep-navy)]">Business-first automation</h3>
                <p className="text-gray-600">We automate to grow your business, not just to reduce costs. Every automated process drives revenue.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-2xl text-[var(--cres-electric-teal)]">📈</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-deep-navy)]">Scalable systems</h3>
                <p className="text-gray-600">As you grow, your automation grows with you. Handle 10 customers or 10,000 with the same systems.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-2xl text-[var(--cres-electric-teal)]">🇰🇪</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-deep-navy)]">Kenya-specific AI</h3>
                <p className="text-gray-600">Trained on Kenyan business practices, payment methods, and customer behavior. No generic solutions.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-2xl text-[var(--cres-electric-teal)]">📊</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-deep-navy)]">Data-driven optimization</h3>
                <p className="text-gray-600">Every interaction is tracked. We know what's working and continuously improve your automation.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-2xl text-[var(--cres-electric-teal)]">🔄</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-deep-navy)]">Human-AI collaboration</h3>
                <p className="text-gray-600">AI handles routine tasks. You handle high-value customer relationships. Best of both worlds.</p>
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
                  <span className="text-gray-700">You're tired of answering the same questions every day</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-gray-700">You want to work on your business, not in it</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-gray-700">You want to scale without hiring more staff</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-gray-700">You want 24/7 customer service without 24/7 work</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-gray-700">You understand that automation is about growth, not just saving time</span>
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
                  <span className="text-gray-700">You want to control every customer interaction personally</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 mt-1">✗</span>
                  <span className="text-gray-700">You think automation means losing the "personal touch"</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 mt-1">✗</span>
                  <span className="text-gray-700">You're not ready to invest in your operational efficiency</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 mt-1">✗</span>
                  <span className="text-gray-700">You prefer manual work to using technology</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 mt-1">✗</span>
                  <span className="text-gray-700">You don't want data about your customer interactions</span>
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
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-3">Never Miss a Lead</h3>
              <p className="text-gray-300">AI responds instantly to inquiries. No more lost opportunities while you sleep or are in meetings.</p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-3">Scale Without Hiring</h3>
              <p className="text-gray-300">Handle more customers without adding staff. Your business grows while your workload stays manageable.</p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-3">Consistent Service</h3>
              <p className="text-gray-300">Every customer gets the same professional experience, whether they contact you at 2 AM or 2 PM.</p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-3">Data-Driven Growth</h3>
              <p className="text-gray-300">Track what works. Know which messages convert. Continuously improve your customer experience.</p>
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
            Your competitors are automating right now. Every day you spend answering routine questions manually, they're converting more customers. Every missed lead is money leaving your business forever.
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
