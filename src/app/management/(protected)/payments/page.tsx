import { listPayments } from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export default async function ManagementPaymentsPage() {
  const rows = await listPayments(500);

  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 overflow-x-auto">
      <div className="p-5 border-b border-white/10">
        <h1 className="text-xl md:text-2xl font-black">Payments</h1>
        <p className="text-white/70 text-sm mt-1">Payment records ({rows.length}).</p>
        <p className="text-white/50 text-xs mt-2">
          Payments capture is a placeholder until Mpesa/Stripe is wired in.
        </p>
      </div>

      <table className="w-full text-left text-sm">
        <thead className="bg-black/40 text-white/70 text-xs uppercase tracking-wider">
          <tr>
            <th className="px-4 py-3">Created</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Amount</th>
            <th className="px-4 py-3">Source</th>
            <th className="px-4 py-3">Reference</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Phone</th>
            <th className="px-4 py-3">Purpose</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} className="border-t border-white/10">
              <td className="px-4 py-3 whitespace-nowrap text-white/70">
                {new Date(r.createdAt).toLocaleString()}
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-white/80">{r.status}</td>
              <td className="px-4 py-3 whitespace-nowrap text-white/80">
                {r.amountKes === null ? '—' : `${r.currency} ${r.amountKes.toLocaleString()}`}
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-white/80">{r.source}</td>
              <td className="px-4 py-3 whitespace-nowrap text-white/80">{r.reference || '—'}</td>
              <td className="px-4 py-3 whitespace-nowrap text-white/80">{r.email || '—'}</td>
              <td className="px-4 py-3 whitespace-nowrap text-white/80">{r.phone || '—'}</td>
              <td className="px-4 py-3 whitespace-nowrap text-white/80">{r.purpose || '—'}</td>
            </tr>
          ))}
          {rows.length === 0 ? (
            <tr>
              <td className="px-4 py-8 text-white/70" colSpan={8}>
                No payment records yet.
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
    </div>
  );
}

