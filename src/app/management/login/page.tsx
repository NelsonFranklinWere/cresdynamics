'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/admin/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = (await res.json()) as { success?: boolean; error?: string };
      if (!res.ok) {
        setError(data.error || 'Login failed.');
        return;
      }
      router.push('/management');
      router.refresh();
    } catch (err) {
      console.error(err);
      setError('Login failed.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-[var(--navy-dark)] text-white flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
        <h1 className="text-2xl font-black mb-2">Admin Login</h1>
        <p className="text-white/70 text-sm mb-6">Sign in to view event reservations.</p>

        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Admin email (ADMIN_EMAIL on server)"
            required
            className="w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[var(--teal-accent)]"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[var(--teal-accent)]"
          />

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-lg bg-[var(--orange-energy)] hover:bg-[var(--orange-energy-hover)] text-white font-bold text-sm px-6 py-3 uppercase tracking-wide disabled:opacity-60"
          >
            {submitting ? 'Signing in…' : 'Sign in'}
          </button>

          {error ? (
            <div className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {error}
            </div>
          ) : null}
        </form>
      </div>
    </div>
  );
}

