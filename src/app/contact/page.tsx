'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    description: '',
    subscribe: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

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
    setSubmitMessage('');

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
        setSubmitMessage(data.message || 'Message sent successfully! We will contact you within 24 hours.');
        // Reset form
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          description: '',
          subscribe: false
        });
      } else {
        setSubmitMessage(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* 1️⃣ HERO SECTION (Above the Fold) */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--cres-deep-navy)] via-[#0D1B2A] to-[#1B263B] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-20"></div>
        {/* Subtle Electric Teal glow lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--cres-electric-teal)] to-transparent"></div>
          <div className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-[var(--cres-electric-teal)] to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-8 underline-custom">
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

      {/* 2️⃣ CONTACT FORM SECTION (Matching Image Layout) */}
      <section className="py-20 bg-gradient-to-br from-[var(--cres-primary-bg)] to-[var(--cres-secondary-bg)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-20"></div>
        {/* Dimmed background overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            
            {/* LEFT SIDE → Get in Touch */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-[var(--cres-white)] mb-3 md:mb-4" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)'}}>
                  Get in Touch
                </h2>
                <p className="text-base md:text-xl lg:text-2xl text-[var(--cres-white)] mb-4 md:mb-6" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}>
                  Let's Discuss Growing Your Business <span className="text-[var(--cres-orange-primary)]">Smarter.</span>
                </p>
                <p className="text-sm md:text-base lg:text-lg text-[var(--cres-white)] leading-relaxed" style={{textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)'}}>
                  Whether you're ready to improve your lead flow, automate your processes, or just have questions, we're here to help.
                </p>
              </div>

              {/* Contact Us Card */}
              <div className="bg-black border border-white/20 rounded-xl p-4 md:p-8 shadow-lg">
                <h3 className="text-lg md:text-2xl font-bold text-[var(--cres-white)] mb-3 md:mb-4">Contact Us</h3>
                <p className="text-xs md:text-sm text-[var(--cres-white)] mb-4 md:mb-6 leading-relaxed">
                  Reach out to discuss your growth challenges. We respond within 24 hours.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <i className="fas fa-phone text-[var(--cres-orange-primary)] text-base md:text-xl"></i>
                    <a href="tel:+254708805496" className="text-xs md:text-sm text-[var(--cres-white)] hover:text-[var(--cres-orange-primary)] transition-colors">
                      +254 708 805 496
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fas fa-phone text-[var(--cres-orange-primary)] text-base md:text-xl"></i>
                    <a href="tel:+254743869564" className="text-xs md:text-sm text-[var(--cres-white)] hover:text-[var(--cres-orange-primary)] transition-colors">
                      +254 743 869 564
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fas fa-envelope text-[var(--cres-orange-primary)] text-base md:text-xl"></i>
                    <a href="mailto:info@cresdynamics.com" className="text-xs md:text-sm text-[var(--cres-white)] hover:text-[var(--cres-orange-primary)] transition-colors">
                      info@cresdynamics.com
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="fas fa-map-marker-alt text-[var(--cres-orange-primary)] text-base md:text-xl mt-1"></i>
                    <p className="text-xs md:text-sm text-[var(--cres-white)]">
                      Kivuli Tower, 3rd Floor Westlands, Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE → Contact Form */}
            <div className="bg-black border border-white/20 rounded-xl p-4 md:p-8 shadow-lg">
              <div className="mb-4 md:mb-6">
                <h3 className="text-lg md:text-2xl lg:text-3xl font-black text-[var(--cres-white)] mb-2 md:mb-3">
                  Let's Strategize Your Growth
                </h3>
                <p className="text-xs md:text-base lg:text-lg text-[var(--cres-white)]">
                  Fill out the form below, and let's talk about scaling your business effectively.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-[var(--cres-white)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--cres-orange-primary)] focus:border-transparent"
                    placeholder="Full Name"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-[var(--cres-white)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--cres-orange-primary)] focus:border-transparent"
                    placeholder="Email"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-[var(--cres-white)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--cres-orange-primary)] focus:border-transparent"
                    placeholder="Contact Number"
                  />
                </div>

                <div>
                  <textarea
                    id="description"
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-[var(--cres-white)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--cres-orange-primary)] focus:border-transparent resize-none"
                    placeholder="Message"
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="subscribe"
                    name="subscribe"
                    checked={formData.subscribe || false}
                    onChange={(e) => setFormData(prev => ({ ...prev, subscribe: e.target.checked }))}
                    className="mt-1 w-5 h-5 rounded border-gray-700 bg-gray-800 text-[var(--cres-orange-primary)] focus:ring-2 focus:ring-[var(--cres-orange-primary)]"
                  />
                  <label htmlFor="subscribe" className="text-xs md:text-sm lg:text-base text-[var(--cres-white)] cursor-pointer">
                    Yes, I'd like to get insights and tips for digital growth (optional)
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[var(--cres-orange-primary)] hover:bg-[#E87528] text-[var(--cres-white)] font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {submitMessage && (
                  <div className={`mt-4 p-4 rounded-xl text-center ${
                    submitMessage.includes('successfully') 
                      ? 'bg-green-900/50 text-green-300 border border-green-700' 
                      : 'bg-red-900/50 text-red-300 border border-red-700'
                  }`}>
                    {submitMessage}
                  </div>
                )}
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
