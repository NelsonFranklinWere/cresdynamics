import { listPayments } from '@/lib/db';
import CreatePaymentLinkForm from './CreatePaymentLinkForm';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export default async function ManagementPaymentsPage() {
  const rows = await listPayments(500);

  return (
    <section className="w-full border border-white/10 bg-black/25">
      <div className="px-5 py-4 border-b border-white/10 md:px-6">
        <h1 className="text-xl md:text-2xl font-black">Payments</h1>
        <p className="text-white/70 text-sm mt-1">Payment records ({rows.length}).</p>
      </div>
      <CreatePaymentLinkForm />
      <div className="overflow-x-auto">
      <table className="w-full min-w-[1180px] text-left text-sm">
        <thead className="bg-black/35 text-white/70 text-xs uppercase tracking-wider">
          <tr>
            <th className="px-4 py-3">Created</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Amount</th>
            <th className="px-4 py-3">Source</th>
            <th className="px-4 py-3">Reference</th>
            <th className="px-4 py-3">Payment Link</th>
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
              <td className="px-4 py-3 whitespace-nowrap text-white/80">
                {r.paymentLinkToken ? (
                  <a
                    className="underline"
                    href={`/pay/${r.paymentLinkToken}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    /pay/{r.paymentLinkToken}
                  </a>
                ) : (
                  '—'
                )}
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-white/80">{r.email || '—'}</td>
              <td className="px-4 py-3 whitespace-nowrap text-white/80">{r.phone || '—'}</td>
              <td className="px-4 py-3 whitespace-nowrap text-white/80">{r.purpose || '—'}</td>
            </tr>
          ))}
          {rows.length === 0 ? (
            <tr>
              <td className="px-4 py-8 text-white/70" colSpan={9}>
                No payment records yet.
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
      </div>
    </section>
  );
}

