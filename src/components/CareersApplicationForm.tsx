'use client';

import { useState, useRef } from 'react';
import { CAREER_ROLES } from '@/data/careersRoles';

type RoleTitle = (typeof CAREER_ROLES)[number]['title'];

export default function CareersApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '' as RoleTitle | '',
    linkedin: '',
    portfolio: '',
    experienceSummary: '',
    whyCres: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const cvInputRef = useRef<HTMLInputElement>(null);

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
      const file = cvInputRef.current?.files?.[0];
      if (!file || file.size === 0) {
        setMessage('Please upload your CV (PDF or Word, max 4 MB).');
        setIsSubmitting(false);
        return;
      }

      const fd = new FormData();
      fd.append('fullName', formData.fullName);
      fd.append('email', formData.email);
      fd.append('phone', formData.phone);
      fd.append('role', formData.role);
      fd.append('linkedin', formData.linkedin);
      fd.append('portfolio', formData.portfolio);
      fd.append('experienceSummary', formData.experienceSummary);
      fd.append('whyCres', formData.whyCres);
      fd.append('cv', file);

      const res = await fetch('/api/careers/apply', {
        method: 'POST',
        body: fd,
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
        if (cvInputRef.current) cvInputRef.current.value = '';
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

  const portfolioHint =
    formData.role === 'Sales Executive'
      ? 'Optional: link to a win summary, deck, or relevant proof'
      : 'Portfolio or GitHub URL';

  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[var(--cres-secondary-bg)]">
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-14">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-black mb-3">How to Apply</h2>
              <ol className="space-y-3 text-sm text-white/80 list-decimal list-inside">
                <li>
                  <span className="font-semibold text-white">Pick the role</span> that matches the open listing (titles are
                  identical to the cards above).
                </li>
                <li>
                  <span className="font-semibold text-white">Upload your CV</span> (PDF or Word, max 4 MB) plus{' '}
                  <span className="font-semibold text-white">links:</span> LinkedIn and portfolio/GitHub or sales-proof URL.
                </li>
                <li>
                  <span className="font-semibold text-white">Summarize proof:</span> what you shipped or owned, who it served,
                  and what changed.
                </li>
                <li>
                  <span className="font-semibold text-white">Explain fit:</span> why CRES and why this seat now.
                </li>
              </ol>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold">Roles on this page</h3>
              <div className="space-y-3 text-sm text-white/80">
                {CAREER_ROLES.map((r) => (
                  <div key={r.id} className="border border-white/15 rounded-lg p-4 bg-black/40">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--cres-orange-primary)] mb-1">
                      {r.department}
                    </p>
                    <p className="font-bold mb-1">{r.title}</p>
                    <p className="text-xs leading-relaxed">{r.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-black/80 border border-white/20 rounded-xl p-5 md:p-7 shadow-lg">
            <h3 className="text-lg md:text-2xl font-black mb-4">Send Your Application</h3>
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
                {CAREER_ROLES.map((r) => (
                  <option key={r.id} value={r.title}>
                    {r.title}
                  </option>
                ))}
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
                placeholder={portfolioHint}
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

              <div>
                <label htmlFor="cv" className="block text-xs font-semibold text-gray-300 mb-1.5">
                  CV / résumé <span className="text-red-400">*</span>
                </label>
                <p className="text-[11px] text-white/50 mb-2">PDF or Word (.pdf, .doc, .docx) — max 4 MB. Emailed to our team with your application.</p>
                <input
                  ref={cvInputRef}
                  id="cv"
                  name="cv"
                  type="file"
                  required
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  className="w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[var(--cres-orange-primary)] file:text-white file:font-semibold"
                />
              </div>

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
    </div>
  );
}
