'use client';

import { FormEvent, useState } from 'react';

export default function CreatePaymentLinkForm() {
  const [amountKes, setAmountKes] = useState(0);
  const [purpose, setPurpose] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setPaymentUrl(null);
    try {
      const res = await fetch('/api/admin/payments/links/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amountKes, purpose }),
      });
      const json = await res.json();
      if (!res.ok || !json?.paymentUrl) {
        throw new Error(json?.error || 'Failed to create payment link');
      }
      setPaymentUrl(String(json.paymentUrl));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to create payment link');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="border-b border-white/10 px-5 py-4 md:px-6">
      <h2 className="text-lg font-bold">Create payment link</h2>
      <form onSubmit={onSubmit} className="mt-3 grid grid-cols-1 md:grid-cols-[180px_1fr_auto] gap-3">
        <input
          required
          type="number"
          min={1}
          placeholder="Amount (KES)"
          value={amountKes || ''}
          onChange={(e) => setAmountKes(Number(e.target.value || 0))}
          className="rounded-lg bg-black/30 border border-white/20 px-3 py-2"
        />
        <input
          required
          placeholder="Purpose (e.g. Project deposit)"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          className="rounded-lg bg-black/30 border border-white/20 px-3 py-2"
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-[var(--orange-energy)] hover:bg-[var(--orange-energy-hover)] px-4 py-2 font-bold disabled:opacity-50"
        >
          {loading ? 'Creating...' : 'Create Link'}
        </button>
      </form>
      {error ? <p className="text-red-300 text-sm mt-2">{error}</p> : null}
      {paymentUrl ? (
        <p className="text-emerald-300 text-sm mt-2 break-all">
          Link created:{' '}
          <a className="underline" href={paymentUrl} target="_blank" rel="noopener noreferrer">
            {paymentUrl}
          </a>
        </p>
      ) : null}
    </div>
  );
}
