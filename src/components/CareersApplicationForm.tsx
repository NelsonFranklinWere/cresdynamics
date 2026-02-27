'use client';

import { useState } from 'react';

type RoleOption = 'Sales & Growth' | 'Software Engineer';

export default function CareersApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '' as RoleOption | '',
    linkedin: '',
    portfolio: '',
    experienceSummary: '',
    whyCres: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const res = await fetch('/api/careers/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(
          data.message ||
            'Application submitted. If there is a fit, we will reach out within 7 days.'
        );
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          role: '',
          linkedin: '',
          portfolio: '',
          experienceSummary: '',
          whyCres: '',
        });
      } else {
        setMessage(data.error || 'Failed to submit. Please try again.');
      }
    } catch (err) {
      console.error('Careers form error', err);
      setMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-16 md:py-20 bg-[var(--cres-secondary-bg)]">
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Steps + roles */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-black mb-3">
                How to Apply
              </h2>
              <ol className="space-y-3 text-sm text-white/80 list-decimal list-inside">
                <li>
                  <span className="font-semibold text-white">Choose your role:</span>{' '}
                  Sales & Growth or Software Engineer.
                </li>
                <li>
                  <span className="font-semibold text-white">Prepare your links:</span>{' '}
                  LinkedIn and portfolio / GitHub.
                </li>
                <li>
                  <span className="font-semibold text-white">Tell us your experience:</span>{' '}
                  what you have shipped, who it served, and outcomes.
                </li>
                <li>
                  <span className="font-semibold text-white">Explain fit:</span>{' '}
                  why CRES Dynamics and why this role.
                </li>
              </ol>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold">Open Roles</h3>
              <div className="space-y-3 text-sm text-white/80">
                <div className="border border-white/15 rounded-lg p-4 bg-black/40">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--cres-orange-primary)] mb-1">
                    Sales & Growth
                  </p>
                  <p className="font-bold mb-1">Sales & Growth Specialist</p>
                  <p className="text-xs">
                    Own conversations with operators and founders, qualify fits, and
                    move them to systems discovery calls. You think in pipelines and
                    follow-through, not one-off pitches.
                  </p>
                </div>

                <div className="border border-white/15 rounded-lg p-4 bg-black/40">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--cres-orange-primary)] mb-1">
                    Engineering
                  </p>
                  <p className="font-bold mb-1">Software Engineer</p>
                  <p className="text-xs">
                    Help design and build CresOS modules, finance systems, and
                    automation engines. You think in systems, data models, and
                    production reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Application form */}
          <div className="bg-black/80 border border-white/20 rounded-xl p-5 md:p-7 shadow-lg">
            <h3 className="text-lg md:text-2xl font-black mb-4">
              Send Your Application
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full name"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--cres-orange-primary)]"
              />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--cres-orange-primary)]"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone (optional but preferred)"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--cres-orange-primary)]"
              />

              <select
                name="role"
                required
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--cres-orange-primary)]"
              >
                <option value="">Select role</option>
                <option value="Sales & Growth">Sales & Growth Specialist</option>
                <option value="Software Engineer">Software Engineer</option>
              </select>

              <input
                type="url"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                placeholder="LinkedIn profile URL"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--cres-orange-primary)]"
              />
              <input
                type="url"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                placeholder="Portfolio / GitHub URL"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--cres-orange-primary)]"
              />

              <textarea
                name="experienceSummary"
                required
                value={formData.experienceSummary}
                onChange={handleChange}
                rows={4}
                placeholder="Briefly describe your relevant experience. What have you shipped? Who did it serve? What changed?"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--cres-orange-primary)] resize-none"
              />

              <textarea
                name="whyCres"
                required
                value={formData.whyCres}
                onChange={handleChange}
                rows={3}
                placeholder="Why CRES Dynamics, and why this role?"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--cres-orange-primary)] resize-none"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-white font-bold text-sm md:text-base px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting…' : 'Submit Application'}
              </button>

              {message && (
                <div className="mt-3 text-xs md:text-sm text-center text-white/90 bg-black/60 border border-white/20 rounded-lg px-4 py-3">
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

