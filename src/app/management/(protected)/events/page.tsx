import { listEventReservations } from '@/lib/db';
import EventReservationsClient from './EventReservationsClient';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export default async function ManagementEventsPage() {
  const rows = await listEventReservations(500);

  const pending = rows.filter((r) => r.bookingStatus !== 'paid' && r.paymentStatus !== 'paid').length;

  return (
    <section className="w-full border border-white/10 bg-black/25">
      <div className="px-5 py-4 border-b border-white/10 md:px-6">
        <h1 className="text-xl md:text-2xl font-black">Event bookings</h1>
        <p className="text-white/70 text-sm mt-1">
          {rows.length} registered · {pending} awaiting payment — contact guests then mark paid.
        </p>
        <p className="text-white/50 text-xs mt-2 font-mono">
          Paybill 542542 · Account 43869 · WhatsApp 0708 805 496
        </p>
      </div>
      <EventReservationsClient rows={rows} />
    </section>
  );
}
