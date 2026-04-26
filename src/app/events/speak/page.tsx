'use client';

import { FormEvent, useState } from 'react';

export default function SpeakPage() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMsg(null);
    setErr(null);
    try {
      const fd = new FormData(e.currentTarget);
      const res = await fetch('/api/events/speakers/apply/', { method: 'POST', body: fd });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || 'Submission failed');
      setMsg('Application submitted successfully. We will contact you soon.');
      (e.currentTarget as HTMLFormElement).reset();
    } catch (e) {
      setErr(e instanceof Error ? e.message : 'Submission failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[var(--navy-dark)] text-white px-4 py-24">
      <div className="max-w-2xl mx-auto border border-white/10 bg-black/25 p-6 md:p-8">
        <h1 className="text-3xl font-black">Apply to Speak</h1>
        <p className="text-white/70 mt-2">
          Submit your details, topic, PDF bio, and profile image.
        </p>
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <input name="fullName" required placeholder="Full name" className="w-full rounded bg-black/35 border border-white/20 px-4 py-3" />
          <input type="email" name="email" required placeholder="Email" className="w-full rounded bg-black/35 border border-white/20 px-4 py-3" />
          <input name="phone" required placeholder="Phone" className="w-full rounded bg-black/35 border border-white/20 px-4 py-3" />
          <input name="company" placeholder="Company (optional)" className="w-full rounded bg-black/35 border border-white/20 px-4 py-3" />
          <input name="topic" required placeholder="Topic you would speak on" className="w-full rounded bg-black/35 border border-white/20 px-4 py-3" />
          <input name="linkedin" placeholder="LinkedIn profile URL" className="w-full rounded bg-black/35 border border-white/20 px-4 py-3" />
          <textarea name="audienceWhy" required rows={5} placeholder="Why this audience should hear your story" className="w-full rounded bg-black/35 border border-white/20 px-4 py-3" />
          <div>
            <label className="text-sm text-white/70">Bio (PDF only)</label>
            <input type="file" name="bioPdf" accept="application/pdf" required className="w-full mt-1" />
          </div>
          <div>
            <label className="text-sm text-white/70">Profile image</label>
            <input type="file" name="image" accept="image/*" required className="w-full mt-1" />
          </div>
          {msg ? <p className="text-emerald-300">{msg}</p> : null}
          {err ? <p className="text-red-300">{err}</p> : null}
          <button disabled={loading} className="bg-[var(--orange-energy)] px-5 py-3 rounded font-bold">
            {loading ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      </div>
    </main>
  );
}
