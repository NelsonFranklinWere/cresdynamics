import { listPayments } from '@/lib/db';
import {
  AdminCard,
  AdminCardHeader,
  AdminCardList,
  AdminEmpty,
  AdminField,
  AdminFields,
  ManagementSection,
} from '@/components/management/ManagementUI';
import CreatePaymentLinkForm from './CreatePaymentLinkForm';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export default async function ManagementPaymentsPage() {
  const rows = await listPayments(500);

  return (
    <ManagementSection title="Payments" subtitle={`Payment records (${rows.length})`}>
      <CreatePaymentLinkForm />
      {rows.length === 0 ? (
        <AdminEmpty>No payment records yet.</AdminEmpty>
      ) : (
        <AdminCardList>
          {rows.map((r) => (
            <AdminCard key={r.id}>
              <AdminCardHeader
                title={
                  r.amountKes === null
                    ? 'Amount pending'
                    : `${r.currency} ${r.amountKes.toLocaleString()}`
                }
                meta={new Date(r.createdAt).toLocaleString()}
                badge={
                  <span className="rounded bg-white/10 px-2 py-0.5 text-xs font-semibold capitalize text-white/80">
                    {r.status}
                  </span>
                }
              />
              <AdminFields>
                <AdminField label="Source">{r.source}</AdminField>
                <AdminField label="Reference">{r.reference || '—'}</AdminField>
                <AdminField label="Purpose" className="sm:col-span-2">
                  {r.purpose || '—'}
                </AdminField>
                <AdminField label="Email">{r.email || '—'}</AdminField>
                <AdminField label="Phone">{r.phone || '—'}</AdminField>
                {r.paymentLinkToken ? (
                  <AdminField label="Payment link" className="sm:col-span-2">
                    <a
                      className="break-all text-[var(--teal-accent)] hover:underline"
                      href={`/pay/${r.paymentLinkToken}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      /pay/{r.paymentLinkToken}
                    </a>
                  </AdminField>
                ) : null}
              </AdminFields>
            </AdminCard>
          ))}
        </AdminCardList>
      )}
    </ManagementSection>
  );
}
