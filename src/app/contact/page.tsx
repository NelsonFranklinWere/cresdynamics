'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    phone: '',
    email: '',
    problem: '',
    description: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add actual form submission logic here
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* 1️⃣ HERO SECTION (Above the Fold) */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--cres-deep-navy)] via-[#0D1B2A] to-[#1B263B] relative overflow-hidden">
        {/* Subtle Electric Teal glow lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--cres-electric-teal)] to-transparent"></div>
          <div className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-[var(--cres-electric-teal)] to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-8">
            Your business has a problem.
            <br />
            <span className="text-[var(--cres-electric-teal)]">We help you fix it — fast.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            If customers can't find you, trust you, or reach you online, you're losing money every day.
          </p>

          <div className="flex items-center justify-center space-x-2 text-[var(--cres-electric-teal)] text-lg font-semibold">
            <span className="text-2xl">⚡</span>
            <span>Every week you delay, competitors take your customers.</span>
          </div>
        </div>
      </section>

      {/* 2️⃣ CONTACT OPTIONS (Split Layout) */}
      <section className="py-20 bg-[var(--cres-deep-navy)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* LEFT SIDE → Problem-Focused Copy */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-black text-white mb-6">Who should contact us:</h2>
                <ul className="space-y-4 text-gray-300 text-base">
                  <li className="flex items-center space-x-3">
                    <span className="text-[var(--cres-electric-teal)]">✓</span>
                    <span>Businesses losing customers online</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-[var(--cres-electric-teal)]">✓</span>
                    <span>Brands invisible on Google</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-[var(--cres-electric-teal)]">✓</span>
                    <span>Teams overwhelmed by WhatsApp messages</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-[var(--cres-electric-teal)]">✓</span>
                    <span>Founders ready to scale with systems</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-gray-700 pt-8">
                <h3 className="text-2xl font-bold text-red-400 mb-4">Who should NOT contact us:</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center space-x-3">
                    <span className="text-red-400">✗</span>
                    <span>Looking for "cheap work"</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-red-400">✗</span>
                    <span>Not ready to act</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-red-400">✗</span>
                    <span>No intention to grow</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <p className="text-gray-300 font-semibold">
                  We work with <span className="text-[var(--cres-electric-teal)] font-black">decision-makers</span> only.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE → CONTACT FORM */}
            <div className="bg-gray-100 rounded-2xl p-8 shadow-2xl">
              <div className="mb-8">
                <h3 className="text-xl font-black text-[var(--cres-deep-navy)] mb-2">
                  Tell us what's breaking your growth
                </h3>
                <p className="text-gray-600 text-sm">Serious businesses ready to fix real problems.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-[var(--cres-deep-navy)] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--cres-electric-teal)] focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="businessName" className="block text-sm font-semibold text-[var(--cres-deep-navy)] mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      required
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--cres-electric-teal)] focus:border-transparent"
                      placeholder="Your business name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[var(--cres-deep-navy)] mb-2">
                      Phone Number (WhatsApp preferred) *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--cres-electric-teal)] focus:border-transparent"
                      placeholder="+254 XXX XXX XXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[var(--cres-deep-navy)] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--cres-electric-teal)] focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="problem" className="block text-sm font-semibold text-[var(--cres-deep-navy)] mb-2">
                    What best describes your problem? *
                  </label>
                  <select
                    id="problem"
                    name="problem"
                    required
                    value={formData.problem}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--cres-electric-teal)] focus:border-transparent"
                  >
                    <option value="">Select your main challenge</option>
                    <option value="not-getting-customers">Not getting customers</option>
                    <option value="website-not-converting">Website not converting</option>
                    <option value="poor-google-visibility">Poor Google visibility</option>
                    <option value="manual-work">Manual work wasting time</option>
                    <option value="need-automation">Need automation / AI</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-semibold text-[var(--cres-deep-navy)] mb-2">
                    Describe the problem (short but specific) *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--cres-electric-teal)] focus:border-transparent"
                    placeholder="Be specific about what's not working and what's costing you money..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[var(--cres-electric-teal)] hover:bg-[#00B894] text-white font-black text-xl py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Request a Strategy Call
                </button>

                <p className="text-center text-sm text-gray-500">
                  We respond within 24 hours. Serious businesses only.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ TRUST + AUTHORITY SECTION */}
      <section className="py-20 bg-[var(--cres-deep-navy)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-12">
            Why businesses choose CRES Dynamics
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-2">Systems, not templates</h3>
              <p className="text-gray-300">Custom-built solutions that grow with you</p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-2">Strategy before execution</h3>
              <p className="text-gray-300">We plan your growth, then build it</p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-2">Growth-focused, ROI-driven</h3>
              <p className="text-gray-300">Every feature drives revenue</p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-2">Built for African businesses</h3>
              <p className="text-gray-300">Understanding your market and customers</p>
            </div>
          </div>

          <div className="mt-12 bg-gray-800/50 p-8 rounded-lg border border-gray-700">
            <p className="text-xl font-bold text-white">
              We don't sell websites. <span className="text-[var(--cres-electric-teal)]">We build growth systems.</span>
            </p>
          </div>
        </div>
      </section>

      {/* 4️⃣ DIRECT CONTACT (FOR FAST MOVERS) */}
      <section className="py-16 bg-[var(--cres-electric-teal)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-white mb-8">
            🚀 FAST TRACK
          </h2>
          <p className="text-xl text-white font-semibold mb-8">
            Need results faster?
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-white">
            <div className="text-center">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="font-bold mb-2">Call / WhatsApp</h3>
              <p className="text-lg">+254 XXX XXX XXX</p>
            </div>

            <div className="text-center">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="font-bold mb-2">Website</h3>
              <p className="text-lg">www.cresdynamics.com</p>
            </div>

            <div className="text-center">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="font-bold mb-2">Location</h3>
              <p className="text-lg">Nairobi, Kenya<br /><span className="text-sm">(Remote-first)</span></p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white/10 rounded-lg">
            <p className="text-white font-semibold">
              Most clients contact us <span className="font-black">after</span> losing money.<br />
              The best ones contact us <span className="font-black">before</span>.
            </p>
          </div>
        </div>
      </section>

      {/* 5️⃣ FINAL PUSH (Bottom Section) */}
      <section className="py-20 bg-[var(--cres-deep-navy)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8">
            Your customers are already searching.
            <br />
            The only question is — <span className="text-[var(--cres-electric-teal)]">will they find you?</span>
          </h2>

          <div className="mb-12">
            <button className="bg-[var(--cres-electric-teal)] hover:bg-[#00B894] text-white font-black text-2xl py-6 px-12 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105">
              Let's Fix This Now
            </button>
          </div>

          <div className="text-gray-400 text-sm">
            <p>Every day without the right systems is another day losing customers to competitors.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
