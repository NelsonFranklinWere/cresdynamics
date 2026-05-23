import { listEventReservations } from '@/lib/db';
import { ManagementSection } from '@/components/management/ManagementUI';
import EventReservationsClient from './EventReservationsClient';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export default async function ManagementEventsPage() {
  const rows = await listEventReservations(500);

  const pending = rows.filter((r) => r.bookingStatus !== 'paid' && r.paymentStatus !== 'paid').length;

  return (
    <ManagementSection
      title="Event bookings"
      subtitle={`${rows.length} registered · ${pending} awaiting payment`}
      note="Paybill 542542 · Acc 43869 · WhatsApp 0708 805 496"
    >
      <EventReservationsClient rows={rows} />
    </ManagementSection>
  );
}
