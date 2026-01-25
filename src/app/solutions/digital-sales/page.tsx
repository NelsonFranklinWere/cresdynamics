'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DigitalSalesPage() {
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
              <div className="text-3xl md:text-5xl mb-3 md:mb-4">🚫</div>
              <h3 className="text-base md:text-xl font-bold text-[var(--cres-white)] mb-2 md:mb-3 group-hover:text-[var(--cres-orange-primary)] transition-colors">Leads Disappear</h3>
              <p className="text-xs md:text-sm text-gray-300">Visitors contact you but never hear back. Or they hear back too late. By the time you respond, they've bought from someone else.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-3xl md:text-5xl mb-3 md:mb-4">📞</div>
              <h3 className="text-base md:text-xl font-bold text-[var(--cres-white)] mb-2 md:mb-3 group-hover:text-[var(--cres-orange-primary)] transition-colors">No Follow-Up System</h3>
              <p className="text-xs md:text-sm text-gray-300">You get inquiries but don't have a process to nurture them. One touchpoint isn't enough to close the sale.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-3xl md:text-5xl mb-3 md:mb-4">💰</div>
              <h3 className="text-base md:text-xl font-bold text-[var(--cres-white)] mb-2 md:mb-3 group-hover:text-[var(--cres-orange-primary)] transition-colors">High Ad Spend, Low ROI</h3>
              <p className="text-xs md:text-sm text-gray-300">You're paying for clicks but not getting customers. Your cost per acquisition is through the roof.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-3xl md:text-5xl mb-3 md:mb-4">🔄</div>
              <h3 className="text-base md:text-xl font-bold text-[var(--cres-white)] mb-2 md:mb-3 group-hover:text-[var(--cres-orange-primary)] transition-colors">Manual Sales Process</h3>
              <p className="text-xs md:text-sm text-gray-300">Everything is manual. Following up, sending quotes, tracking deals. You can't scale because you're the bottleneck.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-3xl md:text-5xl mb-3 md:mb-4">📊</div>
              <h3 className="text-base md:text-xl font-bold text-[var(--cres-white)] mb-2 md:mb-3 group-hover:text-[var(--cres-orange-primary)] transition-colors">No Conversion Tracking</h3>
              <p className="text-xs md:text-sm text-gray-300">You don't know which marketing works. No data means no optimization. You're guessing, not growing.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-3xl md:text-5xl mb-3 md:mb-4">🎯</div>
              <h3 className="text-base md:text-xl font-bold text-[var(--cres-white)] mb-2 md:mb-3 group-hover:text-[var(--cres-orange-primary)] transition-colors">Wrong Customer Journey</h3>
              <p className="text-xs md:text-sm text-gray-300">Your sales process doesn't match how customers want to buy. You're pushing when you should be guiding.</p>
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
              <div className="text-2xl md:text-3xl">🎨</div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-[var(--cres-white)] mb-1 md:mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Websites designed for looks, not sales</h3>
                <p className="text-xs md:text-sm text-gray-300">Most websites are built to impress, not convert. Pretty designs don't turn visitors into customers.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 flex items-start space-x-3 md:space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-2xl md:text-3xl">📱</div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-[var(--cres-white)] mb-1 md:mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Fragmented communication channels</h3>
                <p className="text-xs md:text-sm text-gray-300">Customers contact you via website, WhatsApp, phone, email. You manage them separately instead of as a unified journey.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 flex items-start space-x-3 md:space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-2xl md:text-3xl">⏱️</div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-[var(--cres-white)] mb-1 md:mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">No sales process</h3>
                <p className="text-xs md:text-sm text-gray-300">You don't have a defined sales funnel. Every customer interaction is handled differently, leading to inconsistent results.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 flex items-start space-x-3 md:space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-2xl md:text-3xl">🎯</div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-[var(--cres-white)] mb-1 md:mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Wrong customer understanding</h3>
                <p className="text-xs md:text-sm text-gray-300">You don't understand your customer's buying journey. You push sales instead of guiding purchases.</p>
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
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-4 group-hover:text-[var(--cres-orange-primary)] transition-colors">Conversion-Optimized Website</h3>
              <p className="text-xs md:text-sm text-gray-300">Landing pages designed specifically for your customer journey. Clear value propositions, social proof, and irresistible offers.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[var(--cres-orange-primary)] rounded-full flex items-center justify-center text-xl md:text-2xl font-bold text-white mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform">2</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-4 group-hover:text-[var(--cres-orange-primary)] transition-colors">Unified Lead Management</h3>
              <p className="text-xs md:text-sm text-gray-300">All inquiries — website forms, WhatsApp, phone calls — flow into one system. Never lose a lead again.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[var(--cres-orange-primary)] rounded-full flex items-center justify-center text-xl md:text-2xl font-bold text-white mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform">3</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-4 group-hover:text-[var(--cres-orange-primary)] transition-colors">Automated Sales Funnel</h3>
              <p className="text-xs md:text-sm text-gray-300">Nurture leads automatically. Follow-up sequences, proposal delivery, payment collection — all on autopilot.</p>
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
                <h3 className="text-sm md:text-base font-bold text-[var(--cres-white)] mb-1 md:mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Sales psychology built-in</h3>
                <p className="text-xs md:text-sm text-gray-300">Every page, every email, every follow-up is crafted using proven sales psychology. We guide, not push.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 flex items-start space-x-3 md:space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-xl md:text-2xl text-[var(--cres-orange-primary)]">📊</div>
              <div>
                <h3 className="text-sm md:text-base font-bold text-[var(--cres-white)] mb-1 md:mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Data-driven optimization</h3>
                <p className="text-xs md:text-sm text-gray-300">Track every conversion point. Know exactly where customers drop off and why. Continuous improvement based on real data.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 flex items-start space-x-3 md:space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-xl md:text-2xl text-[var(--cres-orange-primary)]">🇰🇪</div>
              <div>
                <h3 className="text-sm md:text-base font-bold text-[var(--cres-white)] mb-1 md:mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Kenyan payment integration</h3>
                <p className="text-xs md:text-sm text-gray-300">M-Pesa, card payments, bank transfers — all integrated. Make buying from you as easy as buying from your competitors.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 flex items-start space-x-3 md:space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-xl md:text-2xl text-[var(--cres-orange-primary)]">🤖</div>
              <div>
                <h3 className="text-sm md:text-base font-bold text-[var(--cres-white)] mb-1 md:mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">AI-powered personalization</h3>
                <p className="text-xs md:text-sm text-gray-300">Dynamic content and recommendations based on customer behavior. Every visitor sees a personalized experience.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 flex items-start space-x-3 md:space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-xl md:text-2xl text-[var(--cres-orange-primary)]">🔄</div>
              <div>
                <h3 className="text-sm md:text-base font-bold text-[var(--cres-white)] mb-1 md:mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Lifetime customer value focus</h3>
                <p className="text-xs md:text-sm text-gray-300">We don't just close sales — we build long-term customer relationships that generate repeat business and referrals.</p>
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
                  <span className="text-xs md:text-sm text-gray-300">You're tired of losing leads and wasting ad spend</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--cres-orange-primary)] mt-1">✓</span>
                  <span className="text-xs md:text-sm text-gray-300">You want predictable sales instead of feast-or-famine</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--cres-orange-primary)] mt-1">✓</span>
                  <span className="text-xs md:text-sm text-gray-300">You're ready to invest in systems that pay for themselves</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--cres-orange-primary)] mt-1">✓</span>
                  <span className="text-xs md:text-sm text-gray-300">You want to scale without hiring a sales team</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--cres-orange-primary)] mt-1">✓</span>
                  <span className="text-xs md:text-sm text-gray-300">You understand that great marketing needs great sales systems</span>
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
                  <span className="text-xs md:text-sm text-gray-300">You want to handle every customer interaction personally</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span className="text-xs md:text-sm text-gray-300">You don't want to track or measure your sales performance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span className="text-xs md:text-sm text-gray-300">You prefer manual processes to automated systems</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span className="text-xs md:text-sm text-gray-300">You're not ready to invest in your sales infrastructure</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span className="text-xs md:text-sm text-gray-300">You think sales funnels are just for "big companies"</span>
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
              <h3 className="text-base md:text-xl font-bold text-[var(--cres-orange-primary)] mb-2 md:mb-3">Higher Conversion Rates</h3>
              <p className="text-xs md:text-sm text-gray-300">Turn more website visitors into paying customers. Stop losing prospects at every stage of the funnel.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-base md:text-xl font-bold text-[var(--cres-orange-primary)] mb-2 md:mb-3">Predictable Revenue</h3>
              <p className="text-xs md:text-sm text-gray-300">Know exactly how many leads you need to hit your revenue targets. No more guessing or hoping.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-base md:text-xl font-bold text-[var(--cres-orange-primary)] mb-2 md:mb-3">Lower Customer Acquisition Cost</h3>
              <p className="text-xs md:text-sm text-gray-300">More efficient sales process means you spend less to acquire each customer. Higher profit margins.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-base md:text-xl font-bold text-[var(--cres-orange-primary)] mb-2 md:mb-3">Scalable Sales Operations</h3>
              <p className="text-xs md:text-sm text-gray-300">Handle more customers without adding staff. Your sales team becomes more productive, not bigger.</p>
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
            Your competitors are optimizing their sales funnels right now. Every lead you lose is revenue going to someone else. Every manual process you maintain is time wasted on things that could be automated. Your sales are leaking — and it's costing you dearly.
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
