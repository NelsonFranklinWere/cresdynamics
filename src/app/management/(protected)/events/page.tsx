import { listEventReservations } from '@/lib/db';
import { ManagementSection } from '@/components/management/ManagementUI';
import EventReservationsClient from './EventReservationsClient';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export default async function ManagementEventsPage() {
  const rows = await listEventReservations(500);

  const confirmed = rows.filter((r) => r.bookingStatus === 'paid' || r.paymentStatus === 'paid').length;
  const pending = rows.filter((r) => r.bookingStatus !== 'paid' && r.paymentStatus !== 'paid' && r.bookingStatus !== 'cancelled').length;

  return (
    <ManagementSection
      title="Event bookings"
      subtitle={`${confirmed} confirmed · ${pending} awaiting payment · ${rows.length} total registrations`}
      fillScreen
    >
      <EventReservationsClient rows={rows} />
    </ManagementSection>
  );
}
