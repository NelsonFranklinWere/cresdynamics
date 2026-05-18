'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { EVENT_TICKET_AMOUNTS_KES } from '@/lib/event-payments';
import { lanyardLabel } from '@/lib/event-lanyards';

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
  const normalized = digits.startsWith('254') ? digits : digits.startsWith('0') ? `254${digits.slice(1)}` : `254${digits}`;
  return `https://wa.me/${normalized}?text=${encodeURIComponent(message)}`;
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

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[1100px] text-left text-sm">
        <thead className="bg-black/35 text-white/70 text-xs uppercase tracking-wider">
          <tr>
            <th className="px-4 py-3">Created</th>
            <th className="px-4 py-3">Guest</th>
            <th className="px-4 py-3">Contact</th>
            <th className="px-4 py-3">Ticket</th>
            <th className="px-4 py-3">Lanyard</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => {
            const amount = ticketAmount(r.ticketType);
            const paid = isPaid(r);
            const payMessage = `Hi ${r.firstName}, thanks for booking The Future of AI in Business (ref #${r.id}). Your ${r.ticketType || 'ticket'} is KES ${amount?.toLocaleString() ?? '—'}. Please complete payment via Paybill 542542 / Acc 43869 or reply here for M-Pesa details.`;
            return (
              <tr key={r.id} className="border-t border-white/10 align-top">
                <td className="px-4 py-3 whitespace-nowrap text-white/70 text-xs">
                  {new Date(r.createdAt).toLocaleString()}
                </td>
                <td className="px-4 py-3">
                  <p className="font-semibold">
                    {r.firstName} {r.lastName || ''}
                  </p>
                  {r.company ? <p className="text-white/50 text-xs mt-0.5">{r.company}</p> : null}
                  <p className="text-white/40 text-xs mt-0.5">#{r.id}</p>
                </td>
                <td className="px-4 py-3 text-xs">
                  <a className="block hover:underline text-[#2FA6B3]" href={`mailto:${r.email}`}>
                    {r.email}
                  </a>
                  {r.phone ? (
                    <a
                      className="block hover:underline text-white/80 mt-1"
                      href={whatsAppUrl(r.phone, payMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {r.phone}
                    </a>
                  ) : (
                    '—'
                  )}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <p className="capitalize">{r.ticketType || '—'}</p>
                  {amount != null ? (
                    <p className="text-[#F39C24] font-bold text-xs">KES {amount.toLocaleString()}</p>
                  ) : null}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-white/80 text-xs">
                  {r.lanyardCategory ? lanyardLabel(r.lanyardCategory) : '—'}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  {paid ? (
                    <span className="inline-block rounded bg-emerald-500/20 px-2 py-0.5 text-xs font-semibold text-emerald-400">
                      Paid
                    </span>
                  ) : r.bookingStatus === 'cancelled' ? (
                    <span className="inline-block rounded bg-red-500/20 px-2 py-0.5 text-xs font-semibold text-red-300">
                      Cancelled
                    </span>
                  ) : (
                    <span className="inline-block rounded bg-amber-500/20 px-2 py-0.5 text-xs font-semibold text-amber-400">
                      Awaiting payment
                    </span>
                  )}
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-col gap-1.5">
                    {r.phone && !paid ? (
                      <a
                        href={whatsAppUrl(r.phone, payMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-[#2FA6B3] hover:underline"
                      >
                        WhatsApp to collect payment
                      </a>
                    ) : null}
                    {!paid && r.bookingStatus !== 'cancelled' ? (
                      <button
                        type="button"
                        disabled={updating === r.id}
                        onClick={() => markStatus(r.id, 'paid')}
                        className="text-left text-xs font-bold text-emerald-400 hover:underline disabled:opacity-50"
                      >
                        {updating === r.id ? 'Saving…' : 'Mark as paid'}
                      </button>
                    ) : null}
                    {!paid && r.bookingStatus !== 'cancelled' ? (
                      <button
                        type="button"
                        disabled={updating === r.id}
                        onClick={() => markStatus(r.id, 'cancelled')}
                        className="text-left text-xs text-white/40 hover:text-red-300 disabled:opacity-50"
                      >
                        Cancel booking
                      </button>
                    ) : null}
                    {paid ? (
                      <button
                        type="button"
                        disabled={updating === r.id}
                        onClick={() => markStatus(r.id, 'pending')}
                        className="text-left text-xs text-white/40 hover:underline disabled:opacity-50"
                      >
                        Mark pending again
                      </button>
                    ) : null}
                  </div>
                </td>
              </tr>
            );
          })}
          {rows.length === 0 ? (
            <tr>
              <td className="px-4 py-8 text-white/70" colSpan={7}>
                No event registrations yet.
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
    </div>
  );
}
