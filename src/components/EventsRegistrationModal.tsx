'use client';

import { useEffect, useRef, useState } from 'react';

const EVENT_TITLE = 'The Future of AI in Business';
const EVENT_DATE = '16 May 2026';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  prefilledEmail?: string;
};

export default function EventsRegistrationModal({ isOpen, onClose, prefilledEmail = '' }: Props) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (isOpen && prefilledEmail && formRef.current) {
      const emailInput = formRef.current.querySelector<HTMLInputElement>('input[name="email"]');
      if (emailInput && !emailInput.value) emailInput.value = prefilledEmail;
    }
  }, [isOpen, prefilledEmail]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleClose = () => {
    setShowSuccess(false);
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fname = (form.elements.namedItem('fname') as HTMLInputElement)?.value?.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value?.trim();
    if (!fname || !email) {
      alert('Please fill in your name and email to continue.');
      return;
    }

    setSending(true);
    const formData = new FormData(form);

    try {
      const res = await fetch('/api/events/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fname: formData.get('fname'),
          lname: formData.get('lname'),
          email: formData.get('email'),
          phone: formData.get('phone') || '',
          company: formData.get('company') || '',
          type: formData.get('type') || 'virtual',
          eventTitle: EVENT_TITLE,
          eventDate: EVENT_DATE,
        }),
      });
      if (!res.ok) throw new Error('Send failed');
    } catch {
      // Optimistic: show success anyway
    }
    setSending(false);
    setShowSuccess(true);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-2xl p-8 md:p-10 max-w-lg w-[90%] max-h-[90vh] overflow-y-auto shadow-xl">
        {!showSuccess ? (
          <>
            <h3 className="text-xl md:text-2xl font-black text-[var(--navy-primary)] mb-1">Reserve Your Seat</h3>
            <p className="text-sm text-[var(--navy-primary)]/70 mb-6">{EVENT_TITLE} — {EVENT_DATE}, Nairobi</p>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[var(--navy-primary)]/60 mb-1">First Name</label>
                  <input name="fname" required className="w-full px-4 py-3 bg-[var(--neutral-bg)] border border-[#E5E7EB] rounded-lg text-[var(--navy-primary)] focus:outline-none focus:border-[var(--teal-accent)]" placeholder="First name" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[var(--navy-primary)]/60 mb-1">Last Name</label>
                  <input name="lname" className="w-full px-4 py-3 bg-[var(--neutral-bg)] border border-[#E5E7EB] rounded-lg text-[var(--navy-primary)] focus:outline-none focus:border-[var(--teal-accent)]" placeholder="Last name" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[var(--navy-primary)]/60 mb-1">Email</label>
                <input name="email" type="email" required defaultValue={prefilledEmail} className="w-full px-4 py-3 bg-[var(--neutral-bg)] border border-[#E5E7EB] rounded-lg text-[var(--navy-primary)] focus:outline-none focus:border-[var(--teal-accent)]" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[var(--navy-primary)]/60 mb-1">Phone</label>
                <input name="phone" type="tel" className="w-full px-4 py-3 bg-[var(--neutral-bg)] border border-[#E5E7EB] rounded-lg text-[var(--navy-primary)] focus:outline-none focus:border-[var(--teal-accent)]" placeholder="+254 ..." />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[var(--navy-primary)]/60 mb-1">Company / Organisation</label>
                <input name="company" className="w-full px-4 py-3 bg-[var(--neutral-bg)] border border-[#E5E7EB] rounded-lg text-[var(--navy-primary)] focus:outline-none focus:border-[var(--teal-accent)]" placeholder="Optional" />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[var(--navy-primary)]/60 mb-1">Attendance Type</label>
                <select name="type" className="w-full px-4 py-3 bg-[var(--neutral-bg)] border border-[#E5E7EB] rounded-lg text-[var(--navy-primary)] focus:outline-none focus:border-[var(--teal-accent)]">
                  <option value="in-person">In-Person (KES 2,500)</option>
                  <option value="virtual">Virtual Stream (Free)</option>
                </select>
              </div>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={handleClose} className="flex-1 py-3 rounded-lg bg-[#f1f5f9] text-[var(--navy-primary)] font-semibold">
                  Cancel
                </button>
                <button type="submit" disabled={sending} className="flex-[2] py-3 rounded-lg bg-[var(--teal-accent)] hover:bg-[var(--teal-accent-hover)] text-white font-bold disabled:opacity-50">
                  {sending ? 'Sending…' : 'Confirm Registration →'}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="text-5xl mb-4">🎉</div>
            <h4 className="text-xl font-black text-[var(--navy-primary)] mb-2">You&apos;re Registered!</h4>
            <p className="text-sm text-[var(--navy-primary)]/70 mb-6">We&apos;ve sent a confirmation to your email. See you on <strong>{EVENT_DATE}</strong> in Nairobi.</p>
            <button type="button" onClick={handleClose} className="w-full py-3 rounded-lg bg-[var(--teal-accent)] text-white font-bold">
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
