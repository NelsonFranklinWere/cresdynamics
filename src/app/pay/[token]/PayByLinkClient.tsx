'use client';

import { FormEvent, useState } from 'react';

export default function PayByLinkClient({
  token,
  amountKes,
  purpose,
}: {
  token: string;
  amountKes: number;
  purpose: string;
}) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/payments/pesapal/initialize-by-link/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, fullName, email, phone }),
      });
      const json = await res.json();
      if (!res.ok || !json?.redirectUrl) {
        throw new Error(json?.error || 'Failed to initialize payment');
      }
      window.location.href = String(json.redirectUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Payment initialization failed');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-[var(--navy-dark)] text-white px-4 py-24">
      <div className="max-w-xl mx-auto rounded-2xl border border-white/15 bg-white/5 p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-black">Complete your payment</h1>
        <p className="text-white/70 mt-2 text-sm">
          Amount: <span className="font-semibold text-white">KES {amountKes.toLocaleString()}</span>
        </p>
        <p className="text-white/60 text-sm mt-1">Purpose: {purpose}</p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <input
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full name"
            className="w-full rounded-lg bg-black/30 border border-white/20 px-4 py-3"
          />
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full rounded-lg bg-black/30 border border-white/20 px-4 py-3"
          />
          <input
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone (e.g. 2547...)"
            className="w-full rounded-lg bg-black/30 border border-white/20 px-4 py-3"
          />
          {error ? <p className="text-red-300 text-sm">{error}</p> : null}
          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-lg bg-[var(--orange-energy)] hover:bg-[var(--orange-energy-hover)] px-4 py-3 font-bold disabled:opacity-50"
          >
            {submitting ? 'Preparing checkout...' : 'Proceed to Pesapal'}
          </button>
        </form>
      </div>
    </main>
  );
}
