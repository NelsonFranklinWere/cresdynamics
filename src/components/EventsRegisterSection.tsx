'use client';

import { useState } from 'react';
import EventLanyardPicker from '@/components/EventLanyardPicker';
import { DEFAULT_LANYARD, type LanyardCategory } from '@/lib/event-lanyards';

const EVENT_TITLE = 'The Future of AI in Business';
const EVENT_DATE = 'Saturday, 20 June 2026';

type TicketType = 'economy' | 'standard' | 'vip';

const TICKETS: { value: TicketType; label: string; price: string }[] = [
  { value: 'standard', label: 'Standard', price: 'KES 2,500' },
  { value: 'economy', label: 'General', price: 'KES 1,500' },
  { value: 'vip', label: 'VIP', price: 'KES 3,500' },
];

const inputCls =
  'w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#2FA6B3]/50 bg-white/[0.06] border border-white/10';

export default function EventsRegisterSection({ defaultTicket = 'standard' }: { defaultTicket?: TicketType }) {
  const [ticket, setTicket] = useState<TicketType>(defaultTicket);
  const [lanyard, setLanyard] = useState<LanyardCategory>(DEFAULT_LANYARD);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState<{ reservationId: number } | null>(null);
  const selected = TICKETS.find((t) => t.value === ticket) ?? TICKETS[0];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const fname = (form.elements.namedItem('fname') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value.trim();
    if (!fname || !email || !phone || !lanyard) {
      setError('Please fill in all required fields and select your lanyard colour.');
      return;
    }

    setSending(true);
    try {
      const res = await fetch('/api/events/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fname,
          lname: (form.elements.namedItem('lname') as HTMLInputElement).value.trim(),
          email,
          phone,
          company: (form.elements.namedItem('company') as HTMLInputElement).value.trim(),
          lanyard,
          ticket,
          eventTitle: EVENT_TITLE,
          eventDate: EVENT_DATE,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data?.error || 'Registration failed. Please try again.');
        return;
      }

      if (data.success && data.reservationId) {
        setDone({ reservationId: data.reservationId });
        form.reset();
        setLanyard(DEFAULT_LANYARD);
        return;
      }

      setError(data?.error || 'Registration failed. Please try again.');
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setSending(false);
    }
  };

  if (done) {
    return (
      <div className="rounded-2xl p-8 md:p-10 text-center border border-[#2FA6B3]/30 bg-[#2FA6B3]/10">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-2xl font-black text-white mb-2">You&apos;re booked!</h3>
        <p className="text-white/60 text-sm mb-2">
          Reservation <strong className="text-white">#{done.reservationId}</strong>
        </p>
        <p className="text-white/60 text-sm">
          We will contact you shortly with payment details (M-Pesa / Paybill) to confirm your {selected.label} ticket.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 md:p-8">
      <p className="text-[10px] font-bold uppercase tracking-widest text-[#2FA6B3] mb-1 font-mono">Register now</p>
      <h3 className="text-xl font-black text-white mb-2">Secure your seat</h3>
      <p className="text-xs text-white/45 mb-6">
        Book now — no payment required online. We will call or WhatsApp you with M-Pesa / Paybill details to complete payment.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6">
        {TICKETS.map((t) => (
          <button
            key={t.value}
            type="button"
            onClick={() => setTicket(t.value)}
            className={`rounded-xl p-3 text-left transition-all border ${
              ticket === t.value ? 'border-[#2FA6B3] bg-[#2FA6B3]/10' : 'border-white/10 bg-white/[0.02] hover:border-white/20'
            }`}
          >
            <p className="text-xs font-bold text-white">{t.label}</p>
            <p className={`text-sm font-black mt-0.5 ${ticket === t.value ? 'text-[#2FA6B3]' : 'text-white/40'}`}>{t.price}</p>
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-3 mb-3">
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-wider text-white/40 mb-1.5 font-mono">First name *</label>
          <input name="fname" required className={inputCls} placeholder="John" />
        </div>
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-wider text-white/40 mb-1.5 font-mono">Last name</label>
          <input name="lname" className={inputCls} placeholder="Kamau" />
        </div>
      </div>
      <div className="space-y-3 mb-4">
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-wider text-white/40 mb-1.5 font-mono">Email *</label>
          <input name="email" type="email" required className={inputCls} placeholder="you@company.co.ke" />
        </div>
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-wider text-white/40 mb-1.5 font-mono">Phone *</label>
          <input name="phone" type="tel" required className={inputCls} placeholder="+254 7XX XXX XXX" />
        </div>
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-wider text-white/40 mb-1.5 font-mono">Company</label>
          <input name="company" className={inputCls} placeholder="Optional" />
        </div>
        <EventLanyardPicker value={lanyard} onChange={setLanyard} />
      </div>

      {error && <p className="text-sm text-red-300 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3 mb-4">{error}</p>}

      <button
        type="submit"
        disabled={sending}
        className="w-full py-4 rounded-xl font-black text-sm uppercase tracking-wide bg-[#F39C24] text-[#060B18] hover:bg-[#E48B18] disabled:opacity-50 transition-colors"
      >
        {sending ? 'Booking…' : `Book — ${selected.price}`}
      </button>
      <p className="text-[11px] text-white/35 mt-3 text-center">Pay after we contact you · Sarit Expo Centre · 20 June 2026</p>
    </form>
  );
}
