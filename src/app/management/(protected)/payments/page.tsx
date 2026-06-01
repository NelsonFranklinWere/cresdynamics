import { listPayments } from '@/lib/db';
import {
  AdminDataBody,
  AdminDataHead,
  AdminDataRow,
  AdminDataTable,
  AdminDataTd,
  AdminDataTh,
  AdminEmpty,
  ManagementSection,
} from '@/components/management/ManagementUI';
import CreatePaymentLinkForm from './CreatePaymentLinkForm';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export default async function ManagementPaymentsPage() {
  const rows = await listPayments(500);

  return (
    <ManagementSection title="Payments" subtitle={`Payment records (${rows.length})`}>
      <div className="border-b border-white/10 px-4 py-4 sm:px-5">
        <CreatePaymentLinkForm />
      </div>
      {rows.length === 0 ? (
        <AdminEmpty>No payment records yet.</AdminEmpty>
      ) : (
        <AdminDataTable caption={`${rows.length} payments`}>
          <AdminDataHead>
            <tr>
              <AdminDataTh>#</AdminDataTh>
              <AdminDataTh>Amount</AdminDataTh>
              <AdminDataTh>Status</AdminDataTh>
              <AdminDataTh>Source</AdminDataTh>
              <AdminDataTh>Email</AdminDataTh>
              <AdminDataTh>Phone</AdminDataTh>
              <AdminDataTh>Purpose</AdminDataTh>
              <AdminDataTh>Reference</AdminDataTh>
              <AdminDataTh>Link</AdminDataTh>
              <AdminDataTh>Created</AdminDataTh>
            </tr>
          </AdminDataHead>
          <AdminDataBody>
            {rows.map((r) => (
              <AdminDataRow key={r.id}>
                <AdminDataTd className="font-mono text-xs text-white/50">{r.id}</AdminDataTd>
                <AdminDataTd className="font-semibold text-white">
                  {r.amountKes === null ? '—' : `${r.currency} ${r.amountKes.toLocaleString()}`}
                </AdminDataTd>
                <AdminDataTd>
                  <span className="rounded bg-white/10 px-2 py-0.5 text-xs font-semibold capitalize">
                    {r.status}
                  </span>
                </AdminDataTd>
                <AdminDataTd>{r.source}</AdminDataTd>
                <AdminDataTd>{r.email || '—'}</AdminDataTd>
                <AdminDataTd>{r.phone || '—'}</AdminDataTd>
                <AdminDataTd className="max-w-[10rem] truncate">{r.purpose || '—'}</AdminDataTd>
                <AdminDataTd className="font-mono text-xs text-white/60">{r.reference || '—'}</AdminDataTd>
                <AdminDataTd>
                  {r.paymentLinkToken ? (
                    <a
                      className="text-[#2FA6B3] hover:underline"
                      href={`/pay/${r.paymentLinkToken}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open
                    </a>
                  ) : (
                    '—'
                  )}
                </AdminDataTd>
                <AdminDataTd className="whitespace-nowrap text-xs text-white/55">
                  {new Date(r.createdAt).toLocaleString()}
                </AdminDataTd>
              </AdminDataRow>
            ))}
          </AdminDataBody>
        </AdminDataTable>
      )}
    </ManagementSection>
  );
}
