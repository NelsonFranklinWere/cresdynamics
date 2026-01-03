'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function WebGrowthPage() {
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
            Your website exists but
            <br />
            <span className="text-[var(--cres-electric-teal)]">customers can't find you.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Every day your slow, outdated website loses you customers to competitors. Your digital storefront is broken, and it's costing you real money.
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
      <section className="py-12 md:py-20 bg-gradient-to-br from-[var(--cres-primary-bg)] to-[var(--cres-secondary-bg)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black underline-custom text-[var(--cres-white)] text-center mb-16">
            The Problem Most Businesses Ignore Until It's Too Late
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-3 group-hover:text-[var(--cres-orange-primary)] transition-colors">Invisible Online</h3>
              <p className="text-gray-300">Customers searching for your services can't find you. You're invisible to the people who need you most.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4">🐌</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-3 group-hover:text-[var(--cres-orange-primary)] transition-colors">Slow Loading</h3>
              <p className="text-gray-300">Your website takes forever to load. 53% of mobile users abandon sites that take longer than 3 seconds.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4">❌</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-3 group-hover:text-[var(--cres-orange-primary)] transition-colors">No Conversions</h3>
              <p className="text-gray-300">Visitors come but don't buy. Your website looks pretty but doesn't turn browsers into customers.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-3 group-hover:text-[var(--cres-orange-primary)] transition-colors">Not Mobile-Friendly</h3>
              <p className="text-gray-300">Half your customers use mobile. If your site doesn't work on phones, you're losing half your market.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4">🚫</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-3 group-hover:text-[var(--cres-orange-primary)] transition-colors">No Trust Signals</h3>
              <p className="text-gray-300">No testimonials, no case studies, no proof. Why should customers trust you over competitors?</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4">💸</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-3 group-hover:text-[var(--cres-orange-primary)] transition-colors">Wasted Ad Spend</h3>
              <p className="text-gray-300">You're paying for ads driving traffic to a website that doesn't convert. Money down the drain.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ WHY THIS KEEPS HAPPENING */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[var(--cres-secondary-bg)] to-[var(--cres-primary-bg)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black underline-custom text-[var(--cres-white)] mb-12">
            Why This Problem Persists
          </h2>

          <div className="space-y-6 text-left">
            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 flex items-start space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-3xl">🔧</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-white)] mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Built by amateurs, not experts</h3>
                <p className="text-gray-300">Most business owners hire cheap freelancers or use DIY builders. The result? Websites that look okay but don't work for business growth.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 flex items-start space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-3xl">🎨</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-white)] mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Focus on looks, not results</h3>
                <p className="text-gray-300">Traditional agencies deliver "beautiful websites" but forget the most important thing: turning visitors into customers.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 flex items-start space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-3xl">📊</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-white)] mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">No measurement, no improvement</h3>
                <p className="text-gray-300">Without tracking conversions, you can't know what's working. Most websites are built blind, hoping for the best.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 flex items-start space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-3xl">⚡</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-white)] mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Technology moves too fast</h3>
                <p className="text-gray-300">By the time you finish a website, the technology is already outdated. Mobile usage, SEO algorithms, and customer expectations change constantly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ THE CRES SOLUTION (SYSTEM, NOT SERVICE) */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[var(--cres-deep-navy)] to-[var(--cres-primary-bg)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black underline-custom text-white text-center mb-16">
            The System We Build to Fix This
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[var(--cres-orange-primary)] rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 group-hover:scale-110 transition-transform">1</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-4 group-hover:text-[var(--cres-orange-primary)] transition-colors">Strategy First</h3>
              <p className="text-gray-300">We audit your business, understand your customers, and map out a growth strategy before writing a single line of code.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[var(--cres-orange-primary)] rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 group-hover:scale-110 transition-transform">2</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-4 group-hover:text-[var(--cres-orange-primary)] transition-colors">Conversion-Focused Design</h3>
              <p className="text-gray-300">Every page, every button, every form is designed to turn visitors into customers. Beauty serves business goals.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[var(--cres-orange-primary)] rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 group-hover:scale-110 transition-transform">3</div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-4 group-hover:text-[var(--cres-orange-primary)] transition-colors">Growth Engine</h3>
              <p className="text-gray-300">SEO optimization, fast loading, mobile-first design, and conversion tracking. Your website becomes a customer-generating machine.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ WHAT MAKES THIS DIFFERENT */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[var(--cres-primary-bg)] to-[var(--cres-secondary-bg)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black underline-custom text-[var(--cres-white)] text-center mb-12">
            Why This Isn't Just Another Service
          </h2>

          <div className="space-y-6">
            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 flex items-start space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-2xl text-[var(--cres-orange-primary)]">🎯</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-white)] mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Business-first, not designer-first</h3>
                <p className="text-gray-300">We care about your revenue, not our portfolio. Every decision serves your growth.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 flex items-start space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-2xl text-[var(--cres-orange-primary)]">📈</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-white)] mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">ROI is our only metric</h3>
                <p className="text-gray-300">We measure success by how much money we put in your bank account, not how pretty the site looks.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 flex items-start space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-2xl text-[var(--cres-orange-primary)]">🇰🇪</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-white)] mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Built for Kenya, by Kenyans</h3>
                <p className="text-gray-300">We understand local customer behavior, payment methods, and business culture. No generic solutions.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 flex items-start space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-2xl text-[var(--cres-orange-primary)]">🤖</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-white)] mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Future-proof with automation</h3>
                <p className="text-gray-300">Your website grows with your business. Automated updates, A/B testing, and performance monitoring included.</p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 flex items-start space-x-4 group hover:shadow-xl transition-all duration-300">
              <div className="text-2xl text-[var(--cres-orange-primary)]">🔄</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cres-white)] mb-2 group-hover:text-[var(--cres-orange-primary)] transition-colors">Long-term partnership, not one-off project</h3>
                <p className="text-gray-300">We don't disappear after launch. We monitor, optimize, and grow your online presence continuously.</p>
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
            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[var(--cres-orange-primary)] mb-6 flex items-center">
                <span className="text-3xl mr-3">✅</span>
                This is for you if:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--cres-orange-primary)] mt-1">✓</span>
                  <span className="text-gray-300">You're serious about growing your business online</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--cres-orange-primary)] mt-1">✓</span>
                  <span className="text-gray-300">You want systems that work, not pretty websites</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--cres-orange-primary)] mt-1">✓</span>
                  <span className="text-gray-300">You're willing to invest in your digital growth</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--cres-orange-primary)] mt-1">✓</span>
                  <span className="text-gray-300">You want predictable, measurable results</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--cres-orange-primary)] mt-1">✓</span>
                  <span className="text-gray-300">You understand that great marketing requires great systems</span>
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
                  <span className="text-gray-300">You want the cheapest possible solution</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span className="text-gray-300">You don't want to track or measure results</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span className="text-gray-300">You're not ready to invest in your growth</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span className="text-gray-300">You avoid data and prefer to "go with your gut"</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span className="text-gray-300">You think websites are just for "looking good"</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ RESULTS & IMPACT (NO FAKE CLAIMS) */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[var(--cres-deep-navy)] to-[var(--cres-primary-bg)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black underline-custom text-white text-center mb-12">
            What Businesses Gain After Implementation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-bold text-[var(--cres-orange-primary)] mb-3">Consistent Visibility</h3>
              <p className="text-gray-300">Stop being invisible. Your business appears when customers search for your services.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-bold text-[var(--cres-orange-primary)] mb-3">Trust & Credibility</h3>
              <p className="text-gray-300">Professional design and clear messaging make customers believe in your business.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-bold text-[var(--cres-orange-primary)] mb-3">Predictable Leads</h3>
              <p className="text-gray-300">Instead of hoping for customers, your website consistently generates qualified leads.</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-bold text-[var(--cres-orange-primary)] mb-3">Measurable Growth</h3>
              <p className="text-gray-300">Track exactly where your customers come from and what drives your business growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8️⃣ STRONG CTA (URGENCY) */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[var(--cres-orange-primary)] to-[#E87528] bg-[url('/backround.png')] bg-repeat bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black underline-custom text-white mb-8">
            Every Week You Delay, You Lose
          </h2>

          <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
            Your competitors are investing in their digital presence right now. Every day you wait, they get stronger and you get left behind. Your customers are searching — will they find you?
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
