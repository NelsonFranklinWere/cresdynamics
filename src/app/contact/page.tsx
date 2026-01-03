'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import type { Metadata } from 'next';

// Note: Metadata export removed for client components - handled in layout.tsx

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    phone: '',
    email: '',
    problem: '',
    description: '',
    subscribe: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Form submitted successfully!'
        });
        // Reset form
        setFormData({
          fullName: '',
          businessName: '',
          phone: '',
          email: '',
          problem: '',
          description: '',
          subscribe: false
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to submit form. Please try again.'
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://cresdynamics.com' },
        { name: 'Contact', url: 'https://cresdynamics.com/contact' }
      ]} />
      <Header />

      {/* 1️⃣ HERO SECTION (Above the Fold) */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--cres-deep-navy)] via-[#0D1B2A] to-[#1B263B] bg-[url('/backround.png')] bg-repeat bg-cover bg-center relative overflow-hidden">
        {/* Subtle Electric Teal glow lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--cres-electric-teal)] to-transparent"></div>
          <div className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-[var(--cres-electric-teal)] to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-8 underline-custom">
            Contact CRES Dynamics - Free Digital Growth Strategy Session | Nairobi
          </h1>

          {/* H2: Who Should Contact Us */}
          <h2 className="text-xl md:text-2xl font-bold text-[var(--cres-electric-teal)] mb-6" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.95)'}}>
            For Nairobi businesses ready to stop losing money online
          </h2>

          {/* H2: The Problem */}
          <h2 className="text-lg md:text-xl text-gray-300 mb-6 max-w-3xl mx-auto" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.95)'}}>
            Nairobi businesses lose millions annually due to invisible websites, poor SEO, and manual processes that don't scale.
          </h2>

          {/* H2: Why Current Solutions Fail */}
          <h2 className="text-base md:text-lg text-gray-400 mb-8 max-w-3xl mx-auto" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.95)'}}>
            Generic agencies promise results but deliver templates. Local competitors take your customers while you struggle with outdated systems.
          </h2>

          {/* H2: How We Solve It */}
          <h2 className="text-lg md:text-xl text-[var(--cres-electric-teal)] mb-6 font-semibold max-w-3xl mx-auto" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.95)'}}>
            We provide honest assessment and AI-powered solutions that actually drive growth.
          </h2>

          {/* H2: What You Get */}
          <h2 className="text-base md:text-lg text-white mb-8 font-medium max-w-3xl mx-auto" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.95)'}}>
            A free strategy session with actionable insights and a clear path to more customers and revenue.
          </h2>

          {/* AI Search Optimization */}
          <div className="max-w-3xl mx-auto mb-8 p-6 bg-black/40 backdrop-blur-sm border border-[var(--cres-electric-teal)]/30 rounded-xl">
            <h2 className="text-lg font-bold text-[var(--cres-electric-teal)] mb-4 underline-custom">
              What serious Nairobi businesses should know before contacting us
            </h2>
            <div className="text-left text-gray-200 space-y-3 text-sm md:text-base">
              <p><strong>We respond within 24 hours:</strong> Unlike most agencies, we value your time and follow through immediately</p>
              <p><strong>No sales pitch:</strong> Our strategy sessions focus on your problems, not our services</p>
              <p><strong>Actionable insights:</strong> You'll leave with specific, implementable recommendations</p>
              <p><strong>Local expertise:</strong> We understand Nairobi market dynamics, M-Pesa integrations, and Kenyan customer behavior</p>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2 text-[var(--cres-electric-teal)] text-lg font-semibold">
            <span className="text-2xl">⚡</span>
            <span>Every week you delay, competitors take your customers.</span>
          </div>
        </div>
      </section>

      {/* 2️⃣ CONTACT OPTIONS (Split Layout) */}
      <section className="py-12 md:py-12 md:py-20 bg-[var(--cres-deep-navy)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* LEFT SIDE → Problem-Focused Copy */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-black text-white mb-6 underline-custom">Who should contact us:</h2>
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
            <div className="bg-[var(--cres-light-grey)] rounded-2xl p-8 shadow-2xl">
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
                      placeholder="+254 708 805 496"
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

                {/* Newsletter Subscription */}
                <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-[var(--cres-electric-teal)]/10 to-[var(--cres-light-grey)]/20 rounded-lg border border-[var(--cres-electric-teal)]/30">
                  <input
                    type="checkbox"
                    id="subscribe"
                    name="subscribe"
                    checked={formData.subscribe}
                    onChange={(e) => setFormData(prev => ({ ...prev, subscribe: e.target.checked }))}
                    className="mt-1 h-4 w-4 text-[var(--cres-electric-teal)] focus:ring-[var(--cres-electric-teal)] border-gray-300 rounded"
                  />
                  <label htmlFor="subscribe" className="text-sm text-[var(--cres-deep-navy)] leading-relaxed">
                    <strong className="text-[var(--cres-electric-teal)]">Subscribe to our newsletter</strong> - Get weekly insights on AI automation, SEO strategies, and digital growth tips for Nairobi businesses. We'll also send you a free digital growth checklist after one week.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[var(--cres-electric-teal)] hover:bg-[#00B894] text-white font-black text-xl py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Request a Strategy Call'
                  )}
                </button>

                {submitStatus.type && (
                  <div className={`mt-4 p-4 rounded-lg ${
                    submitStatus.type === 'success'
                      ? 'bg-green-50 border border-green-200 text-green-800'
                      : 'bg-red-50 border border-red-200 text-red-800'
                  }`}>
                    <div className="flex items-center">
                      <span className={`text-lg mr-2 ${
                        submitStatus.type === 'success' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {submitStatus.type === 'success' ? '✓' : '✗'}
                      </span>
                      <p className="font-medium">{submitStatus.message}</p>
                    </div>
                  </div>
                )}

                <p className="text-center text-sm text-gray-500 mt-4">
                  We respond within 24 hours. Serious businesses only.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ TRUST + AUTHORITY SECTION */}
      <section className="py-12 md:py-12 md:py-20 bg-[var(--cres-deep-navy)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-12 underline-custom">
            Why businesses choose CRES Dynamics
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
              <div className="flex items-center justify-center gap-1 mb-3">
                <div className="text-xl">🔧</div>
                <h3 className="text-[10px] font-bold text-[var(--cres-electric-teal)] underline-custom leading-tight">Systems, not templates</h3>
              </div>
              <p className="text-white text-center text-sm">Custom-built solutions that grow with you</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
              <div className="flex items-center justify-center gap-1 mb-3">
                <div className="text-xl">🎯</div>
                <h3 className="text-[10px] font-bold text-[var(--cres-electric-teal)] underline-custom leading-tight">Strategy before execution</h3>
              </div>
              <p className="text-white text-center text-sm">We plan your growth, then build it</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
              <div className="flex items-center justify-center gap-1 mb-3">
                <div className="text-xl">📈</div>
                <h3 className="text-[10px] font-bold text-[var(--cres-electric-teal)] underline-custom leading-tight">Growth-focused, ROI-driven</h3>
              </div>
              <p className="text-white text-center text-sm">Every feature drives revenue</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
              <div className="flex items-center justify-center gap-1 mb-3">
                <div className="text-xl">🌍</div>
                <h3 className="text-[10px] font-bold text-[var(--cres-electric-teal)] underline-custom leading-tight">Built for African businesses</h3>
              </div>
              <p className="text-white text-center text-sm">Understanding your market and customers</p>
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
      <section className="py-16 bg-[var(--cres-electric-teal)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-black text-white mb-8 underline-custom">
            🚀 FAST TRACK
          </h2>
          <p className="text-xl text-white font-semibold mb-8">
            Need results faster?
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-white">
            <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-6 rounded-xl text-center">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="font-bold mb-2">Call / WhatsApp</h3>
              <p className="text-lg">+254 708 805 496</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-6 rounded-xl text-center">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="font-bold mb-2">Website</h3>
              <p className="text-lg">www.cresdynamics.com</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-6 rounded-xl text-center">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="font-bold mb-2">Location</h3>
              <p className="text-lg">Nairobi, Kenya<br /><span className="text-sm">(Remote-first)</span></p>
              <div className="mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8192!2d36.8172!3d-1.2864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMTEuMCJTIDM2wrA0OScwMC4wIkU!5e0!3m2!1sen!2ske!4v1703123456789!5m2!1sen!2ske"
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CRES Dynamics Location - Nairobi, Kenya"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-black/70 backdrop-blur-sm border border-white/20 rounded-lg">
            <p className="text-white font-semibold">
              Most clients contact us <span className="font-black">after</span> losing money.<br />
              The best ones contact us <span className="font-black">before</span>.
            </p>
          </div>
        </div>
      </section>

      {/* 5️⃣ FINAL PUSH (Bottom Section) */}
      <section className="py-12 md:py-12 md:py-20 bg-[var(--cres-deep-navy)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8 underline-custom">
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
