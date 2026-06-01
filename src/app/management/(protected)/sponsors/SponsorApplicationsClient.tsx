'use client';

import { useState } from 'react';
import type { SponsorApplicationRow, SponsorSlotSummary } from '@/lib/db';
import {
  AdminDataBody,
  AdminDataHead,
  AdminDataRow,
  AdminDataTable,
  AdminDataTd,
  AdminDataTh,
  AdminEmpty,
  AdminField,
  AdminRowActions,
  AdminStatCard,
  AdminStatsGrid,
  adminBtnMuted,
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
      <AdminStatsGrid>
        <AdminStatCard label="Total applications" value={summary.totalApplications} />
        <AdminStatCard label="Gold slots left" value={summary.goldRemaining} suffix="/ 1" tone="gold" />
        <AdminStatCard label="Silver slots left" value={summary.silverRemaining} suffix="/ 3" tone="teal" />
        <AdminStatCard
          label="Community slots left"
          value={summary.communityRemaining}
          suffix="/ 10"
        />
      </AdminStatsGrid>

      {rows.length === 0 ? (
        <AdminEmpty>No sponsor applications yet.</AdminEmpty>
      ) : (
        <AdminDataTable caption={`${rows.length} sponsors`}>
          <AdminDataHead>
            <tr>
              <AdminDataTh>#</AdminDataTh>
              <AdminDataTh>Company</AdminDataTh>
              <AdminDataTh>Contact</AdminDataTh>
              <AdminDataTh>Package</AdminDataTh>
              <AdminDataTh>Email</AdminDataTh>
              <AdminDataTh>Phone</AdminDataTh>
              <AdminDataTh>Status</AdminDataTh>
              <AdminDataTh>Submitted</AdminDataTh>
              <AdminDataTh>Actions</AdminDataTh>
            </tr>
          </AdminDataHead>
          <AdminDataBody>
            {rows.map((r) => (
              <AdminDataRow key={r.id}>
                <AdminDataTd className="font-mono text-xs text-white/50">{r.id}</AdminDataTd>
                <AdminDataTd className="font-semibold text-white">{r.companyName}</AdminDataTd>
                <AdminDataTd>{r.contactFullName}</AdminDataTd>
                <AdminDataTd className="text-white/70">{r.packageSelected}</AdminDataTd>
                <AdminDataTd>
                  <a className="text-[#2FA6B3] hover:underline" href={`mailto:${r.email}`}>
                    {r.email}
                  </a>
                </AdminDataTd>
                <AdminDataTd>{r.phone}</AdminDataTd>
                <AdminDataTd>
                  <select
                    className="w-full min-w-[8.5rem] rounded border border-white/15 bg-black/40 px-2 py-1 text-xs text-white"
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
                </AdminDataTd>
                <AdminDataTd className="whitespace-nowrap text-xs text-white/55">
                  {new Date(r.createdAt).toLocaleString()}
                </AdminDataTd>
                <AdminDataTd>
                  <AdminRowActions>
                    <button type="button" className={adminBtnMuted} onClick={() => openModal(r)}>
                      Details
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center rounded border border-amber-500/40 bg-amber-500/15 px-2 py-1 text-[11px] font-semibold text-amber-100 hover:bg-amber-500/25 disabled:opacity-50"
                      disabled={busyId === r.id}
                      onClick={() => patchRow(r.id, { status: 'Contacted' })}
                    >
                      Contacted
                    </button>
                  </AdminRowActions>
                </AdminDataTd>
              </AdminDataRow>
            ))}
          </AdminDataBody>
        </AdminDataTable>
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
