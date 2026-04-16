import { listContactLeads } from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export default async function ManagementMessagesPage() {
  const rows = await listContactLeads(500);

  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 overflow-x-auto">
      <div className="p-5 border-b border-white/10">
        <h1 className="text-xl md:text-2xl font-black">Messages</h1>
        <p className="text-white/70 text-sm mt-1">Contact form submissions ({rows.length}).</p>
      </div>

      <table className="w-full text-left text-sm">
        <thead className="bg-black/40 text-white/70 text-xs uppercase tracking-wider">
          <tr>
            <th className="px-4 py-3">Created</th>
            <th className="px-4 py-3">Full name</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Phone</th>
            <th className="px-4 py-3">Project</th>
            <th className="px-4 py-3">Subscribed</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} className="border-t border-white/10">
              <td className="px-4 py-3 whitespace-nowrap text-white/70">
                {new Date(r.createdAt).toLocaleString()}
              </td>
              <td className="px-4 py-3 whitespace-nowrap font-semibold">{r.fullName}</td>
              <td className="px-4 py-3 whitespace-nowrap">
                <a className="hover:underline" href={`mailto:${r.email}`}>
                  {r.email}
                </a>
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-white/80">{r.contactPhone}</td>
              <td className="px-4 py-3 text-white/80">{r.projectTitle}</td>
              <td className="px-4 py-3 whitespace-nowrap text-white/80">
                {r.subscribe ? 'Yes' : 'No'}
              </td>
            </tr>
          ))}
          {rows.length === 0 ? (
            <tr>
              <td className="px-4 py-8 text-white/70" colSpan={6}>
                No contact messages yet.
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
    </div>
  );
}

