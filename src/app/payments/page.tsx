'use client';

import { FormEvent, useState } from 'react';

export default function PaymentsPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [purpose, setPurpose] = useState('consultation');
  const [amountKes, setAmountKes] = useState(1000);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/payments/pesapal/initialize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          purpose,
          amountKes,
          description: `Payment for ${purpose}`,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json?.redirectUrl) {
        throw new Error(json?.error || 'Failed to initialize payment');
      }
      window.location.href = json.redirectUrl as string;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Payment initialization failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[var(--navy-dark)] text-white px-4 py-24">
      <div className="max-w-xl mx-auto rounded-2xl border border-white/15 bg-white/5 p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-black">Make a Payment</h1>
        <p className="text-white/70 mt-2 text-sm">
          You will be redirected securely to Pesapal to complete payment.
        </p>

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
          <input
            required
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            placeholder="Payment purpose"
            className="w-full rounded-lg bg-black/30 border border-white/20 px-4 py-3"
          />
          <input
            required
            type="number"
            min={1}
            value={amountKes}
            onChange={(e) => setAmountKes(Number(e.target.value || 0))}
            placeholder="Amount in KES"
            className="w-full rounded-lg bg-black/30 border border-white/20 px-4 py-3"
          />
          {error ? <p className="text-red-300 text-sm">{error}</p> : null}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[var(--orange-energy)] hover:bg-[var(--orange-energy-hover)] px-4 py-3 font-bold disabled:opacity-50"
          >
            {loading ? 'Preparing payment...' : 'Pay with Pesapal'}
          </button>
        </form>
      </div>
    </main>
  );
}
