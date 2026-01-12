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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black underline-custom text-white leading-tight mb-8">
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
            <a href="/contact" className="border-2 border-[var(--cres-electric-teal)] text-[var(--cres-electric-teal)] hover:bg-[var(--cres-electric-teal)] hover:text-white font-bold text-lg py-4 px-8 rounded-lg transition-all duration-300">
              See How It Works
            </a>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-3xl md:text-5xl mb-3 md:mb-4">📱</div>
              <h3 className="text-base md:text-xl font-bold text-[var(--cres-white)] mb-2 md:mb-3 group-hover:text-[var(--cres-orange-primary)] transition-colors">WhatsApp Overload</h3>
              <p className="text-xs md:text-sm text-gray-300">Your phone buzzes constantly. Customer inquiries, complaints, orders — all mixed together. You can't respond to everything.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-3xl md:text-5xl mb-3 md:mb-4">😴</div>
              <h3 className="text-base md:text-xl font-bold text-[var(--cres-white)] mb-2 md:mb-3 group-hover:text-[var(--cres-orange-primary)] transition-colors">Missed Opportunities</h3>
              <p className="text-xs md:text-sm text-gray-300">Leads contact you while you're sleeping, in meetings, or busy with other customers. By the time you respond, they've moved on.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-3xl md:text-5xl mb-3 md:mb-4">🔄</div>
              <h3 className="text-base md:text-xl font-bold text-[var(--cres-white)] mb-2 md:mb-3 group-hover:text-[var(--cres-orange-primary)] transition-colors">Manual Repetition</h3>
              <p className="text-xs md:text-sm text-gray-300">You answer the same questions every day. Pricing inquiries, service details, location info — all manual work that steals your time.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-3xl md:text-5xl mb-3 md:mb-4">📊</div>
              <h3 className="text-base md:text-xl font-bold text-[var(--cres-white)] mb-2 md:mb-3 group-hover:text-[var(--cres-orange-primary)] transition-colors">No Lead Tracking</h3>
              <p className="text-xs md:text-sm text-gray-300">You don't know which inquiries turn into customers. No data means no improvement. You're operating blind.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-3xl md:text-5xl mb-3 md:mb-4">⏰</div>
              <h3 className="text-base md:text-xl font-bold text-[var(--cres-white)] mb-2 md:mb-3 group-hover:text-[var(--cres-orange-primary)] transition-colors">Time Drain</h3>
              <p className="text-xs md:text-sm text-gray-300">Hours spent on WhatsApp instead of growing your business. Customer service becomes your full-time job.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-3xl md:text-5xl mb-3 md:mb-4">💸</div>
              <h3 className="text-base md:text-xl font-bold text-[var(--cres-white)] mb-2 md:mb-3 group-hover:text-[var(--cres-orange-primary)] transition-colors">Lost Revenue</h3>
              <p className="text-xs md:text-sm text-gray-300">Every missed message is a lost customer. Every slow response loses trust. Every manual process costs you money.</p>
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
            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 flex items-start space-x-3 md:space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-2xl md:text-3xl">📱</div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-[var(--cres-white)] mb-1 md:mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">WhatsApp is your only channel</h3>
                <p className="text-xs md:text-sm text-gray-300">Most businesses rely on one person answering WhatsApp. When that person is unavailable, the business stops responding.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 flex items-start space-x-3 md:space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-2xl md:text-3xl">🤖</div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-[var(--cres-white)] mb-1 md:mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">AI feels too complicated</h3>
                <p className="text-xs md:text-sm text-gray-300">Business owners know they need automation but think it's too technical or expensive. They put up with manual work instead.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 flex items-start space-x-3 md:space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-2xl md:text-3xl">📈</div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-[var(--cres-white)] mb-1 md:mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">No systems thinking</h3>
                <p className="text-xs md:text-sm text-gray-300">Most businesses automate one thing at a time. They need a complete system that handles the entire customer journey.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 flex items-start space-x-3 md:space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-2xl md:text-3xl">⏱️</div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-[var(--cres-white)] mb-1 md:mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Time poverty</h3>
                <p className="text-xs md:text-sm text-gray-300">You're too busy putting out fires to build systems that prevent them. It's a vicious cycle of reactive work.</p>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[var(--cres-orange-primary)] rounded-full flex items-center justify-center text-xl md:text-2xl font-bold text-white mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform">1</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-4 group-hover:text-[var(--cres-orange-primary)] transition-colors">Smart AI Assistant</h3>
              <p className="text-xs md:text-sm text-gray-300">AI answers common questions instantly. Handles pricing, availability, and basic inquiries 24/7.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[var(--cres-orange-primary)] rounded-full flex items-center justify-center text-xl md:text-2xl font-bold text-white mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform">2</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-4 group-hover:text-[var(--cres-orange-primary)] transition-colors">Lead Qualification</h3>
              <p className="text-xs md:text-sm text-gray-300">Automatically identifies serious buyers from casual browsers. Routes hot leads directly to you.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[var(--cres-orange-primary)] rounded-full flex items-center justify-center text-xl md:text-2xl font-bold text-white mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform">3</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-4 group-hover:text-[var(--cres-orange-primary)] transition-colors">Workflow Automation</h3>
              <p className="text-xs md:text-sm text-gray-300">Order tracking, delivery updates, payment reminders — all automated. You focus on growing, not managing.</p>
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
            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 flex items-start space-x-3 md:space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-xl md:text-2xl text-[var(--cres-orange-primary)]">🎯</div>
              <div>
                <h3 className="text-sm md:text-base font-bold text-[var(--cres-white)] mb-1 md:mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Business-first automation</h3>
                <p className="text-xs md:text-sm text-gray-300">We automate to grow your business, not just to reduce costs. Every automated process drives revenue.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 flex items-start space-x-3 md:space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-xl md:text-2xl text-[var(--cres-orange-primary)]">📈</div>
              <div>
                <h3 className="text-sm md:text-base font-bold text-[var(--cres-white)] mb-1 md:mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Scalable systems</h3>
                <p className="text-xs md:text-sm text-gray-300">As you grow, your automation grows with you. Handle 10 customers or 10,000 with the same systems.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 flex items-start space-x-3 md:space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-xl md:text-2xl text-[var(--cres-orange-primary)]">🇰🇪</div>
              <div>
                <h3 className="text-sm md:text-base font-bold text-[var(--cres-white)] mb-1 md:mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Kenya-specific AI</h3>
                <p className="text-xs md:text-sm text-gray-300">Trained on Kenyan business practices, payment methods, and customer behavior. No generic solutions.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 flex items-start space-x-3 md:space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-xl md:text-2xl text-[var(--cres-orange-primary)]">📊</div>
              <div>
                <h3 className="text-sm md:text-base font-bold text-[var(--cres-white)] mb-1 md:mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Data-driven optimization</h3>
                <p className="text-xs md:text-sm text-gray-300">Every interaction is tracked. We know what's working and continuously improve your automation.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 flex items-start space-x-3 md:space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-xl md:text-2xl text-[var(--cres-orange-primary)]">🔄</div>
              <div>
                <h3 className="text-sm md:text-base font-bold text-[var(--cres-white)] mb-1 md:mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Human-AI collaboration</h3>
                <p className="text-xs md:text-sm text-gray-300">AI handles routine tasks. You handle high-value customer relationships. Best of both worlds.</p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-8">
              <h3 className="text-lg md:text-2xl font-bold text-[var(--cres-orange-primary)] mb-4 md:mb-6 flex items-center">
                <span className="text-2xl md:text-3xl mr-2 md:mr-3">✅</span>
                This is for you if:
              </h3>
              <ul className="space-y-2 md:space-y-4">
                <li className="flex items-start space-x-2 md:space-x-3">
                  <span className="text-[var(--cres-orange-primary)] mt-1 text-xs md:text-base">✓</span>
                  <span className="text-xs md:text-sm text-gray-300">You're tired of answering the same questions every day</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--cres-orange-primary)] mt-1">✓</span>
                  <span className="text-xs md:text-sm text-gray-300">You want to work on your business, not in it</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--cres-orange-primary)] mt-1">✓</span>
                  <span className="text-xs md:text-sm text-gray-300">You want to scale without hiring more staff</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--cres-orange-primary)] mt-1">✓</span>
                  <span className="text-xs md:text-sm text-gray-300">You want 24/7 customer service without 24/7 work</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--cres-orange-primary)] mt-1">✓</span>
                  <span className="text-xs md:text-sm text-gray-300">You understand that automation is about growth, not just saving time</span>
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
                  <span className="text-xs md:text-sm text-gray-300">You want to control every customer interaction personally</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span className="text-xs md:text-sm text-gray-300">You think automation means losing the "personal touch"</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span className="text-xs md:text-sm text-gray-300">You're not ready to invest in your operational efficiency</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span className="text-xs md:text-sm text-gray-300">You prefer manual work to using technology</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span className="text-xs md:text-sm text-gray-300">You don't want data about your customer interactions</span>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-base md:text-xl font-bold text-[var(--cres-orange-primary)] mb-2 md:mb-3">Never Miss a Lead</h3>
              <p className="text-xs md:text-sm text-gray-300">AI responds instantly to inquiries. No more lost opportunities while you sleep or are in meetings.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-base md:text-xl font-bold text-[var(--cres-orange-primary)] mb-2 md:mb-3">Scale Without Hiring</h3>
              <p className="text-xs md:text-sm text-gray-300">Handle more customers without adding staff. Your business grows while your workload stays manageable.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-base md:text-xl font-bold text-[var(--cres-orange-primary)] mb-2 md:mb-3">Consistent Service</h3>
              <p className="text-xs md:text-sm text-gray-300">Every customer gets the same professional experience, whether they contact you at 2 AM or 2 PM.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-base md:text-xl font-bold text-[var(--cres-orange-primary)] mb-2 md:mb-3">Data-Driven Growth</h3>
              <p className="text-xs md:text-sm text-gray-300">Track what works. Know which messages convert. Continuously improve your customer experience.</p>
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
            Your competitors are automating right now. Every day you spend answering routine questions manually, they're converting more customers. Every missed lead is money leaving your business forever.
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
