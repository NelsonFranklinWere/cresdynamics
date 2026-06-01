'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { EVENT_TICKET_AMOUNTS_KES } from '@/lib/event-tickets';
import { lanyardLabel } from '@/lib/event-lanyards';
import {
  AdminCard,
  AdminCardHeader,
  AdminCardList,
  AdminEmpty,
  AdminField,
  AdminFields,
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
};

function ticketAmount(ticketType: string | null): number | null {
  if (!ticketType) return null;
  return EVENT_TICKET_AMOUNTS_KES[ticketType.toLowerCase()] ?? null;
}

function isPaid(r: EventReservationView): boolean {
  return r.bookingStatus === 'paid' || r.paymentStatus === 'paid';
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
        Paid
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

export default function EventReservationsClient({ rows }: { rows: EventReservationView[] }) {
  const router = useRouter();
  const [updating, setUpdating] = useState<number | null>(null);

  const markStatus = async (id: number, bookingStatus: 'pending' | 'paid' | 'cancelled') => {
    setUpdating(id);
    try {
      const res = await fetch(`/api/admin/events/reservations/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bookingStatus }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        alert(data.error || 'Could not update status');
        return;
      }
      router.refresh();
    } finally {
      setUpdating(null);
    }
  };

  if (rows.length === 0) {
    return <AdminEmpty>No event registrations yet.</AdminEmpty>;
  }

  return (
    <AdminCardList label="Registrations">
      {rows.map((r) => {
        const amount = ticketAmount(r.ticketType);
        const paid = isPaid(r);
        const payMessage = `Hi ${r.firstName}, thanks for booking The Future of AI in Business (ref #${r.id}). Your ${r.ticketType || 'ticket'} is KES ${amount?.toLocaleString() ?? '—'}. Please complete payment via Paybill 542542 / Acc 43869 or reply here for M-Pesa details.`;

        return (
          <AdminCard key={r.id}>
            <AdminCardHeader
              title={
                <>
                  {r.firstName} {r.lastName || ''}
                  {r.company ? (
                    <span className="mt-0.5 block text-sm font-normal text-white/55">{r.company}</span>
                  ) : null}
                </>
              }
              meta={`#${r.id} · ${new Date(r.createdAt).toLocaleString()}`}
              badge={<StatusBadge r={r} />}
            />
            <AdminFields>
              <AdminField label="Email">
                <a className="text-[#2FA6B3] hover:underline" href={`mailto:${r.email}`}>
                  {r.email}
                </a>
              </AdminField>
              <AdminField label="Phone">
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
              </AdminField>
              <AdminField label="Ticket">
                <span className="capitalize">{r.ticketType || '—'}</span>
                {amount != null ? (
                  <span className="mt-0.5 block text-xs font-bold text-[#F39C24]">
                    KES {amount.toLocaleString()}
                  </span>
                ) : null}
              </AdminField>
              <AdminField label="Lanyard">
                {r.lanyardCategory ? lanyardLabel(r.lanyardCategory) : '—'}
              </AdminField>
            </AdminFields>
            <div className="mt-4 flex flex-wrap gap-2 border-t border-white/10 pt-3">
              {r.phone && !paid ? (
                <a
                  href={whatsAppUrl(r.phone, payMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-[#2FA6B3]/40 bg-[#2FA6B3]/10 px-3 py-1.5 text-xs font-bold text-[#2FA6B3]"
                >
                  WhatsApp
                </a>
              ) : null}
              {!paid && r.bookingStatus !== 'cancelled' ? (
                <button
                  type="button"
                  disabled={updating === r.id}
                  onClick={() => markStatus(r.id, 'paid')}
                  className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-xs font-bold text-emerald-400 disabled:opacity-50"
                >
                  {updating === r.id ? 'Saving…' : 'Mark paid'}
                </button>
              ) : null}
              {!paid && r.bookingStatus !== 'cancelled' ? (
                <button
                  type="button"
                  disabled={updating === r.id}
                  onClick={() => markStatus(r.id, 'cancelled')}
                  className="rounded-lg border border-white/15 px-3 py-1.5 text-xs text-white/50 hover:text-red-300 disabled:opacity-50"
                >
                  Cancel
                </button>
              ) : null}
              {paid ? (
                <button
                  type="button"
                  disabled={updating === r.id}
                  onClick={() => markStatus(r.id, 'pending')}
                  className="rounded-lg border border-white/15 px-3 py-1.5 text-xs text-white/50 hover:underline disabled:opacity-50"
                >
                  Mark pending
                </button>
              ) : null}
            </div>
          </AdminCard>
        );
      })}
    </AdminCardList>
  );
}
