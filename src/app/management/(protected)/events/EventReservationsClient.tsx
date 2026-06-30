'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { EVENT_TICKET_AMOUNTS_KES } from '@/lib/event-tickets';
import { lanyardLabel } from '@/lib/event-lanyards';
import {
  AdminDataBody,
  AdminDataHead,
  AdminDataRow,
  AdminDataTable,
  AdminDataTd,
  AdminDataTh,
  AdminEmpty,
  AdminRowActions,
  adminBtnDanger,
  adminBtnMuted,
  adminBtnPrimary,
  adminBtnTeal,
} from '@/components/management/ManagementUI';

export type EventReservationView = {
  id: number;
  eventTitle: string;
  eventDate: string;
  firstName: string;
  lastName: string | null;
  email: string;
  phone: string | null;
  company: string | null;
  ticketType: string | null;
  lanyardCategory: string | null;
  bookingStatus: string;
  createdAt: string;
  paymentStatus: string | null;
  paidAt: string | null;
  paidBy: string | null;
  paidSource: string | null;
  ticketNumber: string | null;
  confirmationSentAt: string | null;
};

function ticketAmount(ticketType: string | null): number | null {
  if (!ticketType) return null;
  return EVENT_TICKET_AMOUNTS_KES[ticketType.toLowerCase()] ?? null;
}

function isPaid(r: EventReservationView): boolean {
  return r.bookingStatus.toLowerCase() === 'paid' || r.paymentStatus?.toLowerCase() === 'paid';
}

function whatsAppUrl(phone: string, message: string): string {
  const digits = phone.replace(/\D/g, '');
  const normalized = digits.startsWith('254')
    ? digits
    : digits.startsWith('0')
      ? `254${digits.slice(1)}`
      : `254${digits}`;
  return `https://wa.me/${normalized}?text=${encodeURIComponent(message)}`;
}

function StatusBadge({ r }: { r: EventReservationView }) {
  const paid = isPaid(r);
  if (paid) {
    return (
      <span className="inline-block rounded bg-emerald-500/20 px-2 py-0.5 text-xs font-semibold text-emerald-400">
        Confirmed{r.paidSource === 'manual' ? ' · manual' : r.paidSource === 'pesapal' ? ' · Pesapal' : ''}
      </span>
    );
  }
  if (r.bookingStatus === 'cancelled') {
    return (
      <span className="inline-block rounded bg-red-500/20 px-2 py-0.5 text-xs font-semibold text-red-300">
        Cancelled
      </span>
    );
  }
  return (
    <span className="inline-block rounded bg-amber-500/20 px-2 py-0.5 text-xs font-semibold text-amber-400">
      Awaiting payment
    </span>
  );
}

function shortDate(iso: string) {
  return new Date(iso).toLocaleString('en-KE', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default function EventReservationsClient({ rows }: { rows: EventReservationView[] }) {
  const router = useRouter();
  const [localRows, setLocalRows] = useState(rows);
  const [updating, setUpdating] = useState<number | null>(null);

  useEffect(() => {
    setLocalRows(rows);
  }, [rows]);

  const confirmedCount = useMemo(() => localRows.filter((r) => isPaid(r)).length, [localRows]);

  const markStatus = async (id: number, bookingStatus: 'pending' | 'paid' | 'cancelled') => {
    setUpdating(id);
    try {
      const res = await fetch(`/api/admin/events/reservations/${id}/`, {
        method: 'PATCH',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bookingStatus }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        bookingStatus?: string;
        paidAt?: string | null;
        paidBy?: string | null;
        ticketNumber?: string | null;
        confirmationEmailSent?: boolean;
      };
      if (!res.ok || !data.ok) {
        alert(data.error || 'Could not update status');
        return;
      }
      const nextStatus = (data.bookingStatus ?? bookingStatus).toLowerCase();
      setLocalRows((prev) =>
        prev.map((r) =>
          r.id === id
            ? {
                ...r,
                bookingStatus: nextStatus,
                paymentStatus: nextStatus === 'paid' ? 'paid' : nextStatus === 'pending' ? null : r.paymentStatus,
                paidAt:
                  data.paidAt ?? (nextStatus === 'paid' ? new Date().toISOString() : null),
                paidBy: data.paidBy ?? (nextStatus === 'paid' ? r.paidBy : null),
                paidSource: nextStatus === 'paid' ? 'manual' : null,
                ticketNumber: data.ticketNumber ?? (nextStatus === 'paid' ? r.ticketNumber : null),
                confirmationSentAt:
                  data.confirmationEmailSent && nextStatus === 'paid'
                    ? new Date().toISOString()
                    : r.confirmationSentAt,
              }
            : r
        )
      );
      if (nextStatus === 'paid') {
        const ticketMsg = data.ticketNumber ? `\nTicket: ${data.ticketNumber}` : '';
        const emailMsg = data.confirmationEmailSent
          ? 'Confirmation email sent to the attendee.'
          : 'Marked paid. Confirmation email could not be sent — check Resend API keys or resend manually.';
        alert(`Payment confirmed.${ticketMsg}\n${emailMsg}`);
      }
      router.refresh();
    } finally {
      setUpdating(null);
    }
  };

  const deleteRow = async (id: number, name: string) => {
    if (!confirm(`Delete registration for ${name}? This cannot be undone.`)) return;
    setUpdating(id);
    try {
      const res = await fetch(`/api/admin/events/reservations/${id}/`, {
        method: 'DELETE',
        credentials: 'include',
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        alert(data.error || 'Could not delete registration');
        return;
      }
      setLocalRows((prev) => prev.filter((r) => r.id !== id));
      router.refresh();
    } finally {
      setUpdating(null);
    }
  };

  if (localRows.length === 0) {
    return <AdminEmpty>No event registrations yet.</AdminEmpty>;
  }

  return (
    <AdminDataTable caption={`${localRows.length} registrations · ${confirmedCount} confirmed`} fillHeight>
        <AdminDataHead>
          <tr>
            <AdminDataTh>Ticket #</AdminDataTh>
            <AdminDataTh>Name</AdminDataTh>
            <AdminDataTh>Company</AdminDataTh>
            <AdminDataTh>Email</AdminDataTh>
            <AdminDataTh>Phone</AdminDataTh>
            <AdminDataTh>Ticket</AdminDataTh>
            <AdminDataTh>Lanyard</AdminDataTh>
            <AdminDataTh>Status</AdminDataTh>
            <AdminDataTh>Timeline</AdminDataTh>
            <AdminDataTh className="min-w-[12rem]">Actions</AdminDataTh>
          </tr>
        </AdminDataHead>
        <AdminDataBody>
          {localRows.map((r) => {
            const amount = ticketAmount(r.ticketType);
            const paid = isPaid(r);
            const payMessage = `Hi ${r.firstName}, thanks for booking The Future of AI in Business${r.ticketNumber ? ` (${r.ticketNumber})` : ''}. Your ${r.ticketType || 'ticket'} is KES ${amount?.toLocaleString() ?? '—'}. Please complete payment via Paybill 542542 / Acc 43869 or reply here for M-Pesa details.`;

            return (
              <AdminDataRow key={r.id}>
                <AdminDataTd className="font-mono text-xs">
                  {r.ticketNumber ? (
                    <span className="font-bold text-[#F39C24]">{r.ticketNumber}</span>
                  ) : (
                    <span className="text-white/30">—</span>
                  )}
                  <span className="block text-[10px] text-white/35 mt-0.5">ref #{r.id}</span>
                </AdminDataTd>
                <AdminDataTd className="font-semibold text-white">
                  {r.firstName} {r.lastName || ''}
                </AdminDataTd>
                <AdminDataTd className="text-white/60">{r.company || '—'}</AdminDataTd>
                <AdminDataTd>
                  <a className="text-[#2FA6B3] hover:underline" href={`mailto:${r.email}`}>
                    {r.email}
                  </a>
                </AdminDataTd>
                <AdminDataTd>
                  {r.phone ? (
                    <a
                      className="hover:underline"
                      href={whatsAppUrl(r.phone, payMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {r.phone}
                    </a>
                  ) : (
                    '—'
                  )}
                </AdminDataTd>
                <AdminDataTd>
                  <span className="capitalize">{r.ticketType || '—'}</span>
                  {amount != null ? (
                    <span className="mt-0.5 block text-xs font-bold text-[#F39C24]">
                      KES {amount.toLocaleString()}
                    </span>
                  ) : null}
                </AdminDataTd>
                <AdminDataTd className="text-white/70">
                  {r.lanyardCategory ? lanyardLabel(r.lanyardCategory) : '—'}
                </AdminDataTd>
                <AdminDataTd>
                  <StatusBadge r={r} />
                  {paid && r.confirmationSentAt ? (
                    <span className="mt-1 block text-[10px] text-emerald-400/80">Email sent</span>
                  ) : null}
                </AdminDataTd>
                <AdminDataTd className="text-xs text-white/55">
                  <div>Reg {shortDate(r.createdAt)}</div>
                  {paid && r.paidAt ? (
                    <div className="mt-1 text-emerald-400/90">
                      Paid {shortDate(r.paidAt)}
                      {r.paidBy ? <span className="block text-white/40">by {r.paidBy}</span> : null}
                    </div>
                  ) : null}
                </AdminDataTd>
                <AdminDataTd>
                  <AdminRowActions>
                    {r.phone && !paid ? (
                      <a
                        href={whatsAppUrl(r.phone, payMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={adminBtnTeal}
                      >
                        WhatsApp
                      </a>
                    ) : null}
                    {!paid && r.bookingStatus !== 'cancelled' ? (
                      <button
                        type="button"
                        disabled={updating === r.id}
                        onClick={() => markStatus(r.id, 'paid')}
                        className={adminBtnPrimary}
                      >
                        {updating === r.id ? '…' : 'Mark paid'}
                      </button>
                    ) : null}
                    {!paid && r.bookingStatus !== 'cancelled' ? (
                      <button
                        type="button"
                        disabled={updating === r.id}
                        onClick={() => markStatus(r.id, 'cancelled')}
                        className={adminBtnMuted}
                      >
                        Cancel
                      </button>
                    ) : null}
                    {paid ? (
                      <button
                        type="button"
                        disabled={updating === r.id}
                        onClick={() => markStatus(r.id, 'pending')}
                        className={adminBtnMuted}
                      >
                        Pending
                      </button>
                    ) : null}
                    <button
                      type="button"
                      disabled={updating === r.id}
                      onClick={() => deleteRow(r.id, r.firstName)}
                      className={adminBtnDanger}
                    >
                      Delete
                    </button>
                  </AdminRowActions>
                </AdminDataTd>
              </AdminDataRow>
            );
          })}
        </AdminDataBody>
      </AdminDataTable>
  );
}
