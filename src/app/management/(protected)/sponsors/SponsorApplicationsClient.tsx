'use client';

import { useState } from 'react';
import type { SponsorApplicationRow, SponsorSlotSummary } from '@/lib/db';
import {
  AdminCard,
  AdminCardHeader,
  AdminCardList,
  AdminEmpty,
  AdminField,
  AdminFields,
} from '@/components/management/ManagementUI';

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
      <div className="grid grid-cols-2 gap-2 border-b border-white/10 p-4 sm:grid-cols-2 sm:gap-3 sm:p-5 lg:grid-cols-4">
        <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 sm:px-4">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-white/50">Applications</p>
          <p className="text-xl font-black text-white sm:text-2xl">{summary.totalApplications}</p>
        </div>
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-3 py-3 sm:px-4">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-amber-200/80">Gold left</p>
          <p className="text-xl font-black text-amber-100 sm:text-2xl">
            {summary.goldRemaining}
            <span className="text-sm font-semibold text-white/50"> / 1</span>
          </p>
        </div>
        <div className="rounded-xl border border-teal-500/30 bg-teal-500/10 px-3 py-3 sm:px-4">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-teal-200/80">Silver left</p>
          <p className="text-xl font-black text-teal-100 sm:text-2xl">
            {summary.silverRemaining}
            <span className="text-sm font-semibold text-white/50"> / 3</span>
          </p>
        </div>
        <div className="rounded-xl border border-white/15 bg-white/5 px-3 py-3 sm:px-4 col-span-2 lg:col-span-1">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-white/50">Community left</p>
          <p className="text-xl font-black text-white sm:text-2xl">
            {summary.communityRemaining}
            <span className="text-sm font-semibold text-white/50"> / 10</span>
          </p>
        </div>
      </div>

      {rows.length === 0 ? (
        <AdminEmpty>No sponsor applications yet.</AdminEmpty>
      ) : (
        <AdminCardList>
          {rows.map((r) => (
            <AdminCard key={r.id}>
              <AdminCardHeader
                title={r.companyName}
                meta={`${r.contactFullName} · ${new Date(r.createdAt).toLocaleString()}`}
                badge={
                  <select
                    className="max-w-[9rem] rounded-lg border border-white/15 bg-black/40 px-2 py-1 text-xs text-white"
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
                }
              />
              <AdminFields>
                <AdminField label="Package">{r.packageSelected}</AdminField>
                <AdminField label="Email">
                  <a className="hover:underline" href={`mailto:${r.email}`}>
                    {r.email}
                  </a>
                </AdminField>
                <AdminField label="Phone">{r.phone}</AdminField>
              </AdminFields>
              <div className="mt-4 flex flex-wrap gap-2 border-t border-white/10 pt-3">
                <button
                  type="button"
                  className="rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold hover:bg-white/15"
                  onClick={() => openModal(r)}
                >
                  Full details
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-amber-500/40 bg-amber-500/15 px-3 py-1.5 text-xs font-semibold text-amber-100 hover:bg-amber-500/25 disabled:opacity-50"
                  disabled={busyId === r.id}
                  onClick={() => patchRow(r.id, { status: 'Contacted' })}
                >
                  Mark contacted
                </button>
              </div>
            </AdminCard>
          ))}
        </AdminCardList>
      )}

      {modalRow ? (
        <div
          className="fixed inset-0 z-[200] flex items-end justify-center bg-black/70 p-0 sm:items-center sm:p-4"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalRow(null);
          }}
        >
          <div className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-2xl border border-white/15 bg-[#13141e] p-5 shadow-xl sm:rounded-2xl sm:p-6">
            <h2 className="text-lg font-black">Sponsor #{modalRow.id}</h2>
            <p className="mt-1 text-xs text-white/50">
              {new Date(modalRow.createdAt).toLocaleString()}
            </p>
            <dl className="mt-4 space-y-3 text-sm">
              <AdminField label="Company">{modalRow.companyName}</AdminField>
              <AdminField label="Contact">{modalRow.contactFullName}</AdminField>
              <AdminField label="Job title">{modalRow.jobTitle}</AdminField>
              <AdminField label="Email">
                <a href={`mailto:${modalRow.email}`} className="text-amber-200 underline break-all">
                  {modalRow.email}
                </a>
              </AdminField>
              <AdminField label="Phone">{modalRow.phone}</AdminField>
              <AdminField label="Website">{modalRow.companyWebsite || '—'}</AdminField>
              <AdminField label="Package">{modalRow.packageSelected}</AdminField>
              <AdminField label="How they heard">{modalRow.howHeard || '—'}</AdminField>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-wide text-white/45">Why sponsor</dt>
                <dd className="mt-1 whitespace-pre-wrap rounded-lg border border-white/10 bg-black/30 p-3 text-white/85 break-words">
                  {modalRow.whySponsor}
                </dd>
              </div>
              <div>
                <dt className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-white/45">
                  Internal notes
                </dt>
                <textarea
                  className="min-h-[88px] w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm text-white"
                  value={modalNotes}
                  onChange={(e) => setModalNotes(e.target.value)}
                  placeholder="Notes visible only in admin…"
                />
              </div>
              <div>
                <dt className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-white/45">Status</dt>
                <select
                  className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm"
                  value={modalRow.status}
                  onChange={(e) => setModalRow({ ...modalRow, status: e.target.value })}
                >
                  {STATUSES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </dl>
            <div className="mt-6 flex flex-wrap gap-2">
              <button
                type="button"
                className="rounded-lg bg-amber-600 px-4 py-2 text-sm font-bold text-black hover:bg-amber-500"
                onClick={() => saveModal()}
              >
                Save
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
