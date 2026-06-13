'use client';

import { useCallback, useEffect, useState } from 'react';

type Report = {
  totalEligible: number;
  attempted: number;
  sent: number;
  failed: number;
  skipped: number;
  results: Array<{
    email: string;
    firstName: string;
    sent: boolean;
    error?: string;
    skipped?: boolean;
    skipReason?: string;
  }>;
  eventRecordUpdated: boolean;
};

type Summary = {
  eligible: number;
  sent: number;
  failed: number;
  lastRunAt: string | null;
};

export default function EventRescheduleTools() {
  const [summary, setSummary] = useState<Summary | null>(null);
  const [report, setReport] = useState<Report | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadSummary = useCallback(async () => {
    const res = await fetch('/api/admin/events/reschedule-notify/', { credentials: 'include' });
    const data = (await res.json().catch(() => ({}))) as Summary & { ok?: boolean };
    if (res.ok && data.ok !== false) {
      setSummary({
        eligible: data.eligible ?? 0,
        sent: data.sent ?? 0,
        failed: data.failed ?? 0,
        lastRunAt: data.lastRunAt ?? null,
      });
    }
  }, []);

  useEffect(() => {
    void loadSummary();
  }, [loadSummary]);

  const runSend = async (opts: { dryRun?: boolean; resend?: boolean }) => {
    const label = opts.dryRun ? 'Preview reschedule emails?' : 'Send reschedule update to all eligible attendees?';
    if (!confirm(label)) return;
    setBusy(true);
    setError(null);
    setReport(null);
    try {
      const res = await fetch('/api/admin/events/reschedule-notify/', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(opts),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; report?: Report };
      if (!res.ok || !data.ok || !data.report) {
        setError(data.error || 'Send failed');
        return;
      }
      setReport(data.report);
      await loadSummary();
    } finally {
      setBusy(false);
    }
  };

  const failures = report?.results.filter((r) => !r.sent && !r.skipped) ?? [];

  return (
    <div className="mb-4 rounded-lg border border-amber-500/30 bg-amber-500/10 p-4 text-sm">
      <p className="text-xs font-bold uppercase tracking-wide text-amber-200/90">July 2026 reschedule</p>
      <p className="mt-1 text-white/75">
        Send personalised reschedule emails to registered &amp; paid attendees (individual sends, not BCC).
      </p>
      {summary ? (
        <p className="mt-2 font-mono text-xs text-white/55">
          Eligible: {summary.eligible} · Logged sent: {summary.sent} · Failed: {summary.failed}
          {summary.lastRunAt ? ` · Last run: ${new Date(summary.lastRunAt).toLocaleString('en-KE')}` : ''}
        </p>
      ) : null}
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          disabled={busy}
          onClick={() => runSend({ dryRun: true })}
          className="rounded border border-white/20 px-3 py-1.5 text-xs font-semibold text-white/80 hover:bg-white/10 disabled:opacity-50"
        >
          Preview count
        </button>
        <button
          type="button"
          disabled={busy}
          onClick={() => runSend({})}
          className="rounded border border-amber-400/40 bg-amber-500/20 px-3 py-1.5 text-xs font-semibold text-amber-100 hover:bg-amber-500/30 disabled:opacity-50"
        >
          {busy ? 'Sending…' : 'Send update emails'}
        </button>
        <button
          type="button"
          disabled={busy}
          onClick={() => runSend({ resend: true })}
          className="rounded border border-white/20 px-3 py-1.5 text-xs font-semibold text-white/70 hover:bg-white/10 disabled:opacity-50"
        >
          Resend all
        </button>
        <a
          href="/api/admin/events/attendees-export/"
          className="rounded border border-[#2FA6B3]/40 bg-[#2FA6B3]/10 px-3 py-1.5 text-xs font-semibold text-[#2FA6B3] hover:bg-[#2FA6B3]/20"
        >
          Export CSV
        </a>
      </div>
      {error ? <p className="mt-2 text-xs text-red-300">{error}</p> : null}
      {report ? (
        <div className="mt-3 rounded border border-white/10 bg-black/30 p-3 font-mono text-xs text-white/80">
          <p>
            Report: {report.sent} sent · {report.failed} failed · {report.skipped} skipped ·{' '}
            {report.totalEligible} eligible
            {report.eventRecordUpdated ? ' · event record updated' : ''}
          </p>
          {failures.length > 0 ? (
            <ul className="mt-2 max-h-32 overflow-auto text-red-300">
              {failures.map((f) => (
                <li key={f.email}>
                  {f.firstName} &lt;{f.email}&gt; — {f.error || 'failed'}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
