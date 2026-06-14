'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  CompanyEyebrow,
  CompanyHero,
  CompanyPhotoSection,
  ScrollReveal,
} from '@/components/company/CompanyPageUI';
import { COMPANY_PAGE_IMAGES } from '@/lib/company-page-images';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactPhone: '',
    businessName: '',
    businessDescription: '',
    biggestProblem: '',
    referralSource: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const projectDetail = [
      `What the business does:\n${formData.businessDescription}`,
      `\nBiggest operational problem:\n${formData.biggestProblem}`,
      `\nHow they heard about us:\n${formData.referralSource}`,
    ].join('\n');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          contactPhone: formData.contactPhone,
          projectTitle: formData.businessName,
          projectDetail,
          subscribe: false,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage(data.message || 'Message sent. We will respond within 2 hours during working hours.');
        setFormData({
          fullName: '',
          email: '',
          contactPhone: '',
          businessName: '',
          businessDescription: '',
          biggestProblem: '',
          referralSource: '',
        });
      } else {
        setSubmitMessage(data.error || 'Failed to send message. Please try again.');
      }
    } catch {
      setSubmitMessage('An error occurred. Please try again or WhatsApp +254 708 805 496.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    'w-full px-4 py-3 bg-[#0a0f18] border border-white/15 rounded-xl text-white placeholder-white/35 focus:outline-none focus:ring-2 focus:ring-[var(--teal-accent)] focus:border-transparent transition-shadow';
  const labelClass = 'block text-xs font-semibold uppercase tracking-wide text-white/55 mb-1.5';

  return (
    <div className="min-h-screen bg-[#060B18] text-white">
      <Header />

      <CompanyHero
        eyebrow="Contact · Cres Dynamics"
        title={
          <>
            Tell us what you are
            <span className="block text-[var(--teal-accent)] mt-1">dealing with.</span>
          </>
        }
        subtitle="We do not send generic proposals. We start with a conversation about your specific situation and tell you honestly what we can build to fix it."
        imageSrc={COMPANY_PAGE_IMAGES.contact}
        imageAlt="Contact Cres Dynamics Nairobi"
        primaryLabel="Jump to form"
        primaryHref="#contact-form"
        secondaryHref="https://wa.me/254708805496"
        secondaryLabel="WhatsApp us"
      />

      <CompanyPhotoSection imageSrc={COMPANY_PAGE_IMAGES.office} imageAlt="Cres Dynamics office">
        <ScrollReveal>
          <div id="contact-form" className="max-w-2xl mx-auto scroll-mt-28">
            <CompanyEyebrow>Start here</CompanyEyebrow>
            <h2 className="text-2xl md:text-3xl font-black mb-8">A few details so we can respond properly.</h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl border border-white/10 bg-black/50 backdrop-blur-sm p-6 md:p-8"
            >
              <div>
                <label htmlFor="fullName" className={labelClass}>
                  Your name
                </label>
                <input type="text" id="fullName" name="fullName" required value={formData.fullName} onChange={handleInputChange} className={inputClass} />
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} className={inputClass} placeholder="We will reply here" />
              </div>

              <div>
                <label htmlFor="contactPhone" className={labelClass}>
                  Phone or WhatsApp
                </label>
                <input type="text" id="contactPhone" name="contactPhone" required value={formData.contactPhone} onChange={handleInputChange} className={inputClass} placeholder="+254 …" />
              </div>

              <div>
                <label htmlFor="businessName" className={labelClass}>
                  Your business name
                </label>
                <input type="text" id="businessName" name="businessName" required value={formData.businessName} onChange={handleInputChange} className={inputClass} />
              </div>

              <div>
                <label htmlFor="businessDescription" className={labelClass}>
                  What does your business do
                </label>
                <textarea id="businessDescription" name="businessDescription" required rows={3} value={formData.businessDescription} onChange={handleInputChange} className={`${inputClass} resize-none`} />
              </div>

              <div>
                <label htmlFor="biggestProblem" className={labelClass}>
                  Biggest operational problem right now
                </label>
                <textarea id="biggestProblem" name="biggestProblem" required rows={4} value={formData.biggestProblem} onChange={handleInputChange} className={`${inputClass} resize-none`} />
              </div>

              <div>
                <label htmlFor="referralSource" className={labelClass}>
                  How did you hear about us
                </label>
                <input type="text" id="referralSource" name="referralSource" required value={formData.referralSource} onChange={handleInputChange} className={inputClass} placeholder="Google, referral, event, social media…" />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full hero-btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed !text-[#060B18]"
              >
                {isSubmitting ? 'Sending…' : 'Start the conversation'}
              </button>

              {submitMessage ? (
                <div
                  className={`p-4 rounded-xl text-center text-sm ${
                    submitMessage.toLowerCase().includes('sent') || submitMessage.toLowerCase().includes('thank')
                      ? 'bg-emerald-950/50 text-emerald-300 border border-emerald-800'
                      : 'bg-red-950/50 text-red-300 border border-red-800'
                  }`}
                >
                  {submitMessage}
                </div>
              ) : null}
            </form>

            <p className="text-white/55 text-sm text-center mt-8 leading-relaxed">
              We respond within 2 hours during working hours. Urgent?{' '}
              <a href="https://wa.me/254708805496" className="text-[var(--teal-accent)] font-semibold hover:underline" target="_blank" rel="noopener noreferrer">
                WhatsApp +254 708 805 496
              </a>
            </p>

            <div className="mt-10 text-center text-white/45 text-sm space-y-1">
              <p>
                <a href="tel:+254708805496" className="hover:text-white transition-colors">
                  +254 708 805 496
                </a>
                {' · '}
                <a href="mailto:info@cresdynamics.com" className="hover:text-white transition-colors">
                  info@cresdynamics.com
                </a>
              </p>
              <p>Kivuli Tower, 3rd Floor Westlands, Nairobi, Kenya</p>
            </div>
          </div>
        </ScrollReveal>
      </CompanyPhotoSection>

      <Footer />
    </div>
  );
}
