'use client';

import { useState } from 'react';
import type { SponsorApplicationRow, SponsorSlotSummary } from '@/lib/db';

const STATUSES = ['New', 'Contacted', 'In Discussion', 'Confirmed', 'Declined'] as const;

export default function SponsorApplicationsClient({
  initialRows,
  slotSummary,
}: {
  initialRows: SponsorApplicationRow[];
  slotSummary: SponsorSlotSummary;
}) {
  const [rows, setRows] = useState(initialRows);
  const [busyId, setBusyId] = useState<number | null>(null);
  const [modalRow, setModalRow] = useState<SponsorApplicationRow | null>(null);
  const [modalNotes, setModalNotes] = useState('');
  const [summary, setSummary] = useState(slotSummary);

  async function patchRow(id: number, body: { status?: string; notes?: string | null }) {
    setBusyId(id);
    try {
      const res = await fetch(`/api/admin/sponsors/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(body),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.ok) {
        alert((data && data.error) || 'Update failed.');
        return false;
      }
      if (data.slotSummary) {
        setSummary(data.slotSummary);
      }
      setRows((prev) =>
        prev.map((r) =>
          r.id === id
            ? {
                ...r,
                ...(body.status !== undefined ? { status: body.status } : {}),
                ...(body.notes !== undefined ? { notes: body.notes } : {}),
              }
            : r
        )
      );
      if (modalRow?.id === id) {
        setModalRow((m) =>
          m && m.id === id
            ? {
                ...m,
                ...(body.status !== undefined ? { status: body.status } : {}),
                ...(body.notes !== undefined ? { notes: body.notes } : {}),
              }
            : m
        );
      }
      return true;
    } finally {
      setBusyId(null);
    }
  }

  function openModal(r: SponsorApplicationRow) {
    setModalRow(r);
    setModalNotes(r.notes || '');
  }

  async function saveModal() {
    if (!modalRow) return;
    await patchRow(modalRow.id, {
      status: modalRow.status,
      notes: modalNotes.trim() || null,
    });
    setModalRow(null);
  }

  return (
    <>
      <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-white/50">Total applications</p>
          <p className="text-2xl font-black text-white">{summary.totalApplications}</p>
        </div>
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-200/80">Gold slots left</p>
          <p className="text-2xl font-black text-amber-100">
            {summary.goldRemaining} <span className="text-sm font-semibold text-white/50">/ 1</span>
          </p>
        </div>
        <div className="rounded-xl border border-teal-500/30 bg-teal-500/10 px-4 py-3">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-teal-200/80">Silver slots left</p>
          <p className="text-2xl font-black text-teal-100">
            {summary.silverRemaining} <span className="text-sm font-semibold text-white/50">/ 3</span>
          </p>
        </div>
        <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-3">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-white/50">Community partner left</p>
          <p className="text-2xl font-black text-white">
            {summary.communityRemaining} <span className="text-sm font-semibold text-white/50">/ 10</span>
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[1040px] text-left text-sm">
          <thead className="bg-black/35 text-white/70 text-xs uppercase tracking-wider">
            <tr>
              <th className="px-4 py-3">Date submitted</th>
              <th className="px-4 py-3">Company</th>
              <th className="px-4 py-3">Contact</th>
              <th className="px-4 py-3">Package</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-white/10 align-top">
                <td className="px-4 py-3 whitespace-nowrap text-white/70">
                  {new Date(r.createdAt).toLocaleString()}
                </td>
                <td className="px-4 py-3 font-semibold">{r.companyName}</td>
                <td className="px-4 py-3 text-white/90">{r.contactFullName}</td>
                <td className="px-4 py-3 text-white/80 max-w-[200px]">{r.packageSelected}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <a className="hover:underline" href={`mailto:${r.email}`}>
                    {r.email}
                  </a>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-white/80">{r.phone}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <select
                    className="rounded-lg border border-white/15 bg-black/40 px-2 py-1.5 text-xs text-white"
                    value={r.status}
                    disabled={busyId === r.id}
                    onChange={async (e) => {
                      await patchRow(r.id, { status: e.target.value });
                    }}
                  >
                    {STATUSES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold hover:bg-white/15"
                      onClick={() => openModal(r)}
                    >
                      View full application
                    </button>
                    <button
                      type="button"
                      className="rounded-lg border border-amber-500/40 bg-amber-500/15 px-3 py-1.5 text-xs font-semibold text-amber-100 hover:bg-amber-500/25"
                      disabled={busyId === r.id}
                      onClick={() => patchRow(r.id, { status: 'Contacted' })}
                    >
                      Mark as contacted
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {rows.length === 0 ? (
              <tr>
                <td className="px-4 py-8 text-white/70" colSpan={8}>
                  No sponsor applications yet.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>

      {modalRow ? (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalRow(null);
          }}
        >
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/15 bg-[#13141e] p-6 shadow-xl">
            <h2 className="text-lg font-black">Sponsor application #{modalRow.id}</h2>
            <p className="mt-1 text-xs text-white/50">
              Submitted {new Date(modalRow.createdAt).toLocaleString()}
            </p>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-[11px] uppercase tracking-wide text-white/45">Company</dt>
                <dd className="font-semibold">{modalRow.companyName}</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wide text-white/45">Contact person</dt>
                <dd>{modalRow.contactFullName}</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wide text-white/45">Job title</dt>
                <dd>{modalRow.jobTitle}</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wide text-white/45">Email</dt>
                <dd>
                  <a href={`mailto:${modalRow.email}`} className="text-amber-200 underline">
                    {modalRow.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wide text-white/45">Phone (WhatsApp)</dt>
                <dd>{modalRow.phone}</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wide text-white/45">Website</dt>
                <dd>{modalRow.companyWebsite || '—'}</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wide text-white/45">Package interested in</dt>
                <dd>{modalRow.packageSelected}</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wide text-white/45">How they heard</dt>
                <dd>{modalRow.howHeard || '—'}</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wide text-white/45 mb-1">Why sponsor</dt>
                <dd className="whitespace-pre-wrap rounded-lg border border-white/10 bg-black/30 p-3 text-white/85">
                  {modalRow.whySponsor}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wide text-white/45 mb-1">Internal notes</dt>
                <textarea
                  className="min-h-[88px] w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm text-white"
                  value={modalNotes}
                  onChange={(e) => setModalNotes(e.target.value)}
                  placeholder="Notes visible only in admin…"
                />
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wide text-white/45 mb-1">Status</dt>
                <select
                  className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm"
                  value={modalRow.status}
                  onChange={(e) =>
                    setModalRow({ ...modalRow, status: e.target.value })
                  }
                >
                  {STATUSES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </dl>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-lg bg-amber-600 px-4 py-2 text-sm font-bold text-black hover:bg-amber-500"
                onClick={() => saveModal()}
              >
                Save notes & status
              </button>
              <button
                type="button"
                className="rounded-lg border border-white/20 px-4 py-2 text-sm hover:bg-white/10"
                onClick={() => setModalRow(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
