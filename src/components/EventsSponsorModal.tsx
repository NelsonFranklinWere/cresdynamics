'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { SponsorPackageTier } from '@/lib/sponsor-packages';
import { SPONSOR_PACKAGES, getSponsorPackage } from '@/lib/sponsor-packages';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  defaultTier?: SponsorPackageTier;
};

const inputCls = 'w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors text-white';
const inputStyle: React.CSSProperties = { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' };

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[11px] font-black uppercase tracking-wider mb-1.5" style={{ color: 'rgba(255,255,255,0.38)', fontFamily: 'monospace' }}>
        {label}{required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

export default function EventsSponsorModal({ isOpen, onClose, defaultTier = 'silver' }: Props) {
  const [tier, setTier] = useState<SponsorPackageTier>(defaultTier);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState<{ message: string; requiresPayment: boolean } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => { setTier(defaultTier); }, [defaultTier, isOpen]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleClose = () => { setSuccess(null); setError(null); onClose(); };
  const handleOverlayClick = (e: React.MouseEvent) => { if (e.target === e.currentTarget) handleClose(); };

  const selected = getSponsorPackage(tier);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) || '').trim();
    const whySponsor = get('whySponsor');

    if (!get('companyName') || !get('contactFullName') || !get('jobTitle') || !get('email') || !get('phone') || !whySponsor) {
      setError('Please fill in all required fields.');
      return;
    }
    if (whySponsor.length < 50) {
      setError(`"Why sponsor" needs at least 50 characters (currently ${whySponsor.length}).`);
      return;
    }

    setSending(true);
    try {
      const res = await fetch('/api/events/sponsors/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyName: get('companyName'),
          contactFullName: get('contactFullName'),
          jobTitle: get('jobTitle'),
          email: get('email'),
          phone: get('phone'),
          companyWebsite: get('companyWebsite') || null,
          packageTier: tier,
          packageSelected: selected.label,
          whySponsor,
          howHeard: get('howHeard') || null,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data?.error || 'Submission failed. Please try again.');
        return;
      }

      if (data.redirectUrl) {
        window.location.href = data.redirectUrl;
        return;
      }

      setSuccess({
        message: data.message || 'Application received. We will contact you within 48 hours.',
        requiresPayment: Boolean(data.requiresPayment),
      });
    } catch {
      setError('Network error — please check your connection and try again.');
    } finally {
      setSending(false);
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
      style={{ background: 'rgba(8,15,28,0.88)', backdropFilter: 'blur(10px)' }}
      onClick={handleOverlayClick}
    >
      <div
        className="rounded-2xl w-full max-w-lg max-h-[92vh] overflow-y-auto shadow-2xl"
        style={{ background: '#0D1526', border: '1px solid rgba(47,166,179,0.28)' }}
      >
        <div className="p-8 md:p-10">
          {!success ? (
            <>
              <div className="flex items-start justify-between mb-7">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: '#2FA6B3', fontFamily: 'monospace' }}>Sponsor the Event</p>
                  <h3 className="text-xl font-black text-white">Apply to Sponsor</h3>
                  <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.42)' }}>
                    Paid packages checkout via Pesapal after you apply
                  </p>
                </div>
                <button onClick={handleClose} className="shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center text-xs" style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.45)' }}>✕</button>
              </div>

              <p className="text-[10px] font-black uppercase tracking-widest mb-2.5" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>Sponsorship Package</p>
              <div className="flex flex-col gap-2 mb-7">
                {SPONSOR_PACKAGES.map((p) => (
                  <button
                    key={p.tier}
                    type="button"
                    onClick={() => setTier(p.tier)}
                    className="rounded-xl p-3.5 text-left flex items-start gap-3 transition-all"
                    style={{
                      background: tier === p.tier ? 'rgba(47,166,179,0.09)' : 'rgba(255,255,255,0.03)',
                      border: tier === p.tier ? '1px solid #2FA6B3' : '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    <div className="flex-1">
                      <p className="text-sm font-bold text-white leading-tight">{p.label}</p>
                      <p className="text-xs font-black mt-0.5 text-[#2FA6B3]">{p.priceLabel}</p>
                      <p className="text-[11px] mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
                        {p.requiresPayment ? 'Pay online after submitting application' : 'No online payment — team will follow up'}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Field label="Company Name" required>
                  <input name="companyName" required placeholder="Your company" className={inputCls} style={inputStyle} />
                </Field>
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Your Full Name" required>
                    <input name="contactFullName" required placeholder="Full name" className={inputCls} style={inputStyle} />
                  </Field>
                  <Field label="Job Title" required>
                    <input name="jobTitle" required placeholder="CEO, CMO…" className={inputCls} style={inputStyle} />
                  </Field>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Email" required>
                    <input name="email" type="email" required placeholder="you@company.com" className={inputCls} style={inputStyle} />
                  </Field>
                  <Field label="Phone" required>
                    <input name="phone" type="tel" required placeholder="+254 7XX XXX XXX" className={inputCls} style={inputStyle} />
                  </Field>
                </div>
                <Field label="Company Website">
                  <input name="companyWebsite" type="url" placeholder="https://yourcompany.com (optional)" className={inputCls} style={inputStyle} />
                </Field>
                <Field label="Why do you want to sponsor?" required>
                  <textarea
                    name="whySponsor"
                    required
                    rows={4}
                    placeholder="Tell us about your goals… (min 50 characters)"
                    className={`${inputCls} resize-none`}
                    style={inputStyle}
                  />
                </Field>
                <Field label="How did you hear about us?">
                  <input name="howHeard" placeholder="Optional" className={inputCls} style={inputStyle} />
                </Field>

                {error && (
                  <p className="text-sm rounded-xl px-4 py-3" style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', color: '#FCA5A5' }}>
                    {error}
                  </p>
                )}

                <div className="flex gap-3 pt-1">
                  <button type="button" onClick={handleClose} className="flex-1 py-3.5 rounded-xl text-sm font-semibold" style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    Cancel
                  </button>
                  <button type="submit" disabled={sending} className="flex-[2] py-3.5 rounded-xl text-sm font-black disabled:opacity-50" style={{ background: '#2FA6B3', color: '#080F1C' }}>
                    {sending
                      ? 'Submitting…'
                      : selected.requiresPayment
                        ? `Apply & pay ${selected.priceLabel} →`
                        : 'Submit Application →'}
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="text-5xl mb-5">🤝</div>
              <h4 className="text-2xl font-black text-white mb-2">Application Received</h4>
              <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.55)' }}>{success.message}</p>
              <button onClick={handleClose} className="w-full py-3.5 rounded-xl font-black text-sm" style={{ background: '#2FA6B3', color: '#080F1C' }}>
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
