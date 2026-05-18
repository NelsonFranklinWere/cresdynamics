'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import EventLanyardPicker from '@/components/EventLanyardPicker';
import { DEFAULT_LANYARD, lanyardLabel, type LanyardCategory } from '@/lib/event-lanyards';

const EVENT_TITLE = 'The Future of AI in Business';
const EVENT_DATE  = 'Saturday, 20 June 2026';

type TicketType = 'economy' | 'standard' | 'vip';

const TICKET_OPTIONS: { value: TicketType; label: string; price: string; accentColor: string }[] = [
  { value: 'standard', label: 'Standard — In-Person', price: 'KES 2,500', accentColor: '#2FA6B3' },
  { value: 'economy', label: 'General — In-Person', price: 'KES 1,500', accentColor: 'rgba(255,255,255,0.7)' },
  { value: 'vip', label: 'VIP — In-Person', price: 'KES 3,500', accentColor: '#F39C24' },
];

export type Props = {
  isOpen: boolean;
  onClose: () => void;
  prefilledEmail?: string;
  defaultTicket?: TicketType;
};

type SuccessData = {
  reservationId: number;
};

const inputStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.1)',
  color: '#fff',
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5" style={{ color: 'rgba(255,255,255,0.38)', fontFamily: 'monospace' }}>
        {label}
      </label>
      {children}
    </div>
  );
}

export default function EventsRegistrationModal({
  isOpen,
  onClose,
  prefilledEmail = '',
  defaultTicket = 'standard',
}: Props) {
  const [ticket, setTicket]           = useState<TicketType>(defaultTicket);
  const [lanyard, setLanyard]         = useState<LanyardCategory>(DEFAULT_LANYARD);
  const [sending, setSending]         = useState(false);
  const [error, setError]             = useState<string | null>(null);
  const [success, setSuccess]         = useState<SuccessData | null>(null);
  const formRef                       = useRef<HTMLFormElement>(null);

  /* sync ticket when parent changes which button was clicked */
  useEffect(() => {
    if (isOpen) {
      setTicket(defaultTicket);
      setLanyard(DEFAULT_LANYARD);
    }
  }, [defaultTicket, isOpen]);

  /* lock body scroll */
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else        document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleClose = () => {
    setSuccess(null);
    setError(null);
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) handleClose();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const form  = e.currentTarget;
    const fname = (form.elements.namedItem('fname') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value.trim();
    if (!fname || !email || !phone || !lanyard) {
      setError('First name, email, phone and lanyard colour are required.');
      return;
    }
    setSending(true);
    try {
      const res = await fetch('/api/events/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fname,
          lname:         (form.elements.namedItem('lname')   as HTMLInputElement).value.trim(),
          email,
          phone,
          company:       (form.elements.namedItem('company') as HTMLInputElement).value.trim(),
          type:          'in-person',
          ticket,
          lanyard,
          eventTitle:    EVENT_TITLE,
          eventDate:     EVENT_DATE,
        }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data?.error || 'Registration failed. Please try again.'); return; }

      if (data.success && data.reservationId) {
        setSuccess({ reservationId: data.reservationId });
        return;
      }

      setError(data?.error || 'Registration failed. Please try again.');
    } catch {
      setError('Network error — please check your connection and try again.');
    } finally {
      setSending(false);
    }
  };

  if (!isOpen) return null;

  const opt = TICKET_OPTIONS.find(o => o.value === ticket) ?? TICKET_OPTIONS[0];

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
              {/* Header */}
              <div className="flex items-start justify-between mb-7">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: '#2FA6B3', fontFamily: 'monospace' }}>Reserve Your Seat</p>
                  <h3 className="text-xl font-black text-white">{EVENT_TITLE}</h3>
                  <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.42)' }}>20 June 2026 · Sarit Expo Centre, Westlands</p>
                </div>
                <button onClick={handleClose} className="shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center text-xs" style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.45)' }}>✕</button>
              </div>

              {/* Ticket picker */}
              <p className="text-[10px] font-black uppercase tracking-widest mb-2.5" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>Ticket Type</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-7">
                {TICKET_OPTIONS.map(o => (
                  <button
                    key={o.value}
                    type="button"
                    onClick={() => setTicket(o.value)}
                    className="rounded-xl p-3 text-left transition-all"
                    style={{
                      background: ticket === o.value ? 'rgba(47,166,179,0.1)' : 'rgba(255,255,255,0.03)',
                      border:     ticket === o.value ? `1px solid ${o.accentColor}` : '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <p className="text-[11px] font-semibold text-white leading-tight">{o.label}</p>
                    <p className="text-xs font-black mt-0.5" style={{ color: ticket === o.value ? o.accentColor : 'rgba(255,255,255,0.35)' }}>{o.price}</p>
                  </button>
                ))}
              </div>

              {/* Form */}
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <Field label="First Name *">
                    <input name="fname" required placeholder="First name" className="w-full px-4 py-3 rounded-lg text-sm focus:outline-none" style={inputStyle} />
                  </Field>
                  <Field label="Last Name">
                    <input name="lname" placeholder="Last name" className="w-full px-4 py-3 rounded-lg text-sm focus:outline-none" style={inputStyle} />
                  </Field>
                </div>
                <Field label="Email *">
                  <input name="email" type="email" required defaultValue={prefilledEmail} placeholder="your@email.com" className="w-full px-4 py-3 rounded-lg text-sm focus:outline-none" style={inputStyle} />
                </Field>
                <Field label="Phone *">
                  <input name="phone" type="tel" required placeholder="+254 7XX XXX XXX" className="w-full px-4 py-3 rounded-lg text-sm focus:outline-none" style={inputStyle} />
                </Field>
                <Field label="Company / Organisation">
                  <input name="company" placeholder="Optional" className="w-full px-4 py-3 rounded-lg text-sm focus:outline-none" style={inputStyle} />
                </Field>

                <EventLanyardPicker value={lanyard} onChange={setLanyard} compact />

                {/* Summary pill */}
                <div className="rounded-xl px-5 py-4" style={{ background: 'rgba(243,156,36,0.07)', border: '1px solid rgba(243,156,36,0.18)' }}>
                  <p className="text-xs font-bold text-white">Selected: {opt.label}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {`${opt.price} · Lanyard: ${lanyardLabel(lanyard)} · We will contact you to complete payment.`}
                  </p>
                </div>

                {error && (
                  <p className="text-sm rounded-lg px-4 py-3" style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', color: '#FCA5A5' }}>
                    {error}
                  </p>
                )}

                <div className="flex gap-3 pt-1">
                  <button type="button" onClick={handleClose} className="flex-1 py-3.5 rounded-xl text-sm font-semibold" style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    Cancel
                  </button>
                  <button type="submit" disabled={sending} className="flex-[2] py-3.5 rounded-xl text-sm font-black disabled:opacity-50 transition-all" style={{ background: '#F39C24', color: '#080F1C' }}>
                    {sending ? 'Processing…' : `Book — ${opt.price}`}
                  </button>
                </div>
              </form>
            </>
          ) : (
            /* Success screen */
            <div className="text-center py-4">
              <div className="text-5xl mb-5">🎉</div>
              <h4 className="text-2xl font-black text-white mb-2">You&apos;re Registered!</h4>
              <p className="text-sm mb-1" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Reservation <strong className="text-white">#{success.reservationId}</strong> confirmed.
              </p>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Our team will contact you by phone or email with M-Pesa / Paybill details (542542 / Acc 43869) to confirm your ticket.
              </p>
              <p className="text-sm mb-7" style={{ color: 'rgba(255,255,255,0.55)' }}>
                See you on <strong className="text-white">20 June 2026</strong> at Sarit Expo Centre, Westlands.
              </p>

              <button onClick={handleClose} className="w-full py-3.5 rounded-xl font-black text-sm" style={{ background: '#F39C24', color: '#080F1C' }}>
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
