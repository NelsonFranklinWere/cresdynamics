import { listEventReservations } from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export default async function ManagementEventsPage() {
  const rows = await listEventReservations(500);

  return (
    <section className="w-full border border-white/10 bg-black/25">
      <div className="px-5 py-4 border-b border-white/10 md:px-6">
        <h1 className="text-xl md:text-2xl font-black">Events</h1>
        <p className="text-white/70 text-sm mt-1">Registered users ({rows.length}).</p>
      </div>
      <div className="overflow-x-auto">
      <table className="w-full min-w-[920px] text-left text-sm">
        <thead className="bg-black/35 text-white/70 text-xs uppercase tracking-wider">
          <tr>
            <th className="px-4 py-3">Created</th>
            <th className="px-4 py-3">Full name</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Phone</th>
            <th className="px-4 py-3">Attendance</th>
            <th className="px-4 py-3">Ticket</th>
            <th className="px-4 py-3">Event</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} className="border-t border-white/10">
              <td className="px-4 py-3 whitespace-nowrap text-white/70">
                {new Date(r.createdAt).toLocaleString()}
              </td>
              <td className="px-4 py-3 whitespace-nowrap font-semibold">
                {r.firstName} {r.lastName || ''}
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <a className="hover:underline" href={`mailto:${r.email}`}>
                  {r.email}
                </a>
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-white/80">{r.phone || '—'}</td>
              <td className="px-4 py-3 whitespace-nowrap text-white/80">{r.attendanceType || '—'}</td>
              <td className="px-4 py-3 whitespace-nowrap text-white/80">{r.ticketType || '—'}</td>
              <td className="px-4 py-3 whitespace-nowrap text-white/80">
                {r.eventTitle} — {r.eventDate}
              </td>
            </tr>
          ))}
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
    </section>
  );
}

