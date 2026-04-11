'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactPhone: '',
    projectTitle: '',
    projectDetail: '',
    subscribe: false,
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
          email: '',
          contactPhone: '',
          projectTitle: '',
          projectDetail: '',
          subscribe: false,
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
            Book a Systems Discovery Session
            <br />
            <span className="text-[var(--cres-electric-teal)]">Map your needs. We architect and deploy.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discuss your processes, data, and goals. We map requirements and show how we build production-ready ERPs, finance platforms, and automation.
          </p>

          <div className="flex items-center justify-center space-x-2 text-[var(--cres-electric-teal)] text-lg font-semibold">
            <span className="text-2xl">⚡</span>
            <span>Visibility, control, and scale start with the right system—and the right discovery.</span>
          </div>
        </div>
      </section>

      {/* 2️⃣ CONTACT FORM SECTION (Matching Image Layout) */}
      <section className="py-20 bg-gradient-to-br from-[var(--cres-primary-bg)] to-[var(--cres-secondary-bg)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-20"></div>
        {/* Dimmed background overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div id="contact-form" className="max-w-7xl mx-auto px-6 relative z-10 scroll-mt-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            
            {/* LEFT SIDE → Get in Touch */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-[var(--cres-white)] mb-3 md:mb-4" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)'}}>
                  Get in Touch
                </h2>
                <p className="text-base md:text-xl lg:text-2xl text-[var(--cres-white)] mb-4 md:mb-6" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}>
                  Systems Discovery: <span className="text-[var(--cres-orange-primary)]">Process mapping, architecture, and production deployment.</span>
                </p>
                <p className="text-sm md:text-base lg:text-lg text-[var(--cres-white)] leading-relaxed" style={{textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)'}}>
                  Tell us your operations, data, and goals. We respond with a clear path: process and data mapping, then system design and deployment.
                </p>
              </div>

              {/* Contact Us Card */}
              <div className="bg-black border border-white/20 rounded-xl p-4 md:p-8 shadow-lg">
                <h3 className="text-lg md:text-2xl font-bold text-[var(--cres-white)] mb-3 md:mb-4">Contact Us</h3>
                <p className="text-xs md:text-sm text-[var(--cres-white)] mb-4 md:mb-6 leading-relaxed">
                  Reach out to discuss your system needs. We respond within 24 hours.
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
                  Tell us about your project
                </h3>
                <p className="text-xs md:text-base lg:text-lg text-[var(--cres-white)]">
                  Share your name and how to reach you. In the project box below, tell us what you want the project to do,
                  what the website should do, what the system should do—we read everything and reply with next steps,
                  usually within one business day.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-[var(--cres-white)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--cres-orange-primary)] focus:border-transparent"
                    placeholder="Full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-[var(--cres-white)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--cres-orange-primary)] focus:border-transparent"
                    placeholder="We’ll reply here"
                  />
                </div>

                <div>
                  <label htmlFor="contactPhone" className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Phone or WhatsApp
                  </label>
                  <input
                    type="text"
                    id="contactPhone"
                    name="contactPhone"
                    required
                    value={formData.contactPhone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-[var(--cres-white)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--cres-orange-primary)] focus:border-transparent"
                    placeholder="+254 … (best number to reach you)"
                  />
                </div>

                <div>
                  <label htmlFor="projectTitle" className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Project title (short)
                  </label>
                  <input
                    type="text"
                    id="projectTitle"
                    name="projectTitle"
                    required
                    value={formData.projectTitle}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-[var(--cres-white)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--cres-orange-primary)] focus:border-transparent"
                    placeholder="e.g. New website + Mpesa, ERP for stock, finance dashboard"
                  />
                </div>

                <div>
                  <label htmlFor="projectDetail" className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Explain your project — what should it do?
                  </label>
                  <p className="text-[11px] md:text-xs text-gray-400 mb-2 leading-snug">
                    What do you want the project to achieve? What should the <span className="text-gray-300">website</span>{' '}
                    do (e.g. leads, sales, catalogue, bookings)? What should the{' '}
                    <span className="text-gray-300">system</span> do (e.g. stock, invoices, WhatsApp, reports)? Share it
                    with us here—the clearer you are, the faster we can help.
                  </p>
                  <textarea
                    id="projectDetail"
                    name="projectDetail"
                    required
                    value={formData.projectDetail}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-[var(--cres-white)] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--cres-orange-primary)] focus:border-transparent resize-none text-sm"
                    placeholder="Project: …  ·  Website: …  ·  System: …  (add timeline, tools you use today, and what success looks like)"
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
                    Yes, I'd like to get insights about building business systems (optional)
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
                    submitMessage.toLowerCase().includes('thank you') ||
                    submitMessage.toLowerCase().includes('success')
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
                <h3 className="text-[10px] font-bold text-[var(--cres-electric-teal)] underline-custom leading-tight">Business Systems</h3>
              </div>
              <p className="text-white text-center text-sm">ERPs, finance platforms, and automation that companies run on</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
              <div className="flex items-center justify-center gap-1 mb-3">
                <div className="text-xl">🎯</div>
                <h3 className="text-[10px] font-bold text-[var(--cres-electric-teal)] underline-custom leading-tight">Process Mapping First</h3>
              </div>
              <p className="text-white text-center text-sm">We map your processes, then build systems that fit</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
              <div className="flex items-center justify-center gap-1 mb-3">
                <div className="text-xl">📈</div>
                <h3 className="text-[10px] font-bold text-[var(--cres-electric-teal)] underline-custom leading-tight">Production-Ready Systems</h3>
              </div>
              <p className="text-white text-center text-sm">Live systems with real users and revenue tracking</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
              <div className="flex items-center justify-center gap-1 mb-3">
                <div className="text-xl">🌍</div>
                <h3 className="text-[10px] font-bold text-[var(--cres-electric-teal)] underline-custom leading-tight">Scale, Visibility, Control</h3>
              </div>
              <p className="text-white text-center text-sm">Systems designed for governance and enterprise-grade security</p>
            </div>
          </div>

          <div className="mt-12 bg-gray-800/50 p-8 rounded-lg border border-gray-700">
            <p className="text-xl font-bold text-white">
              We don't build websites. <span className="text-[var(--cres-electric-teal)]">We build business systems that run companies.</span>
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
              Most clients contact us <span className="font-black">after</span> struggling without systems.<br />
              The best ones contact us <span className="font-black">before</span> they hit the ceiling.
            </p>
          </div>
        </div>
      </section>

      {/* 5️⃣ FINAL PUSH (Bottom Section) */}
      <section className="py-12 md:py-12 md:py-20 bg-[var(--cres-deep-navy)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8 underline-custom">
            Your business needs systems.
            <br />
            The only question is — <span className="text-[var(--cres-electric-teal)]">will you build them?</span>
          </h2>

          <div className="mb-12">
            <a href="#contact-form" className="bg-[var(--cres-electric-teal)] hover:bg-[#00B894] text-white font-black text-2xl py-6 px-12 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 inline-block">
              Book a Systems Discovery Session
            </a>
          </div>

          <div className="text-gray-400 text-sm">
            <p>Every day without systems is another day operating without visibility, control, and scale.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
