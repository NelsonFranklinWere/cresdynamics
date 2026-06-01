import { listContactLeads } from '@/lib/db';
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

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export default async function ManagementMessagesPage() {
  const rows = await listContactLeads(500);

  return (
    <ManagementSection title="Messages" subtitle={`Contact form submissions (${rows.length})`}>
      {rows.length === 0 ? (
        <AdminEmpty>No contact messages yet.</AdminEmpty>
      ) : (
        <AdminDataTable caption={`${rows.length} messages`}>
          <AdminDataHead>
            <tr>
              <AdminDataTh>#</AdminDataTh>
              <AdminDataTh>Name</AdminDataTh>
              <AdminDataTh>Email</AdminDataTh>
              <AdminDataTh>Phone</AdminDataTh>
              <AdminDataTh>Project</AdminDataTh>
              <AdminDataTh>List</AdminDataTh>
              <AdminDataTh>Received</AdminDataTh>
            </tr>
          </AdminDataHead>
          <AdminDataBody>
            {rows.map((r) => (
              <AdminDataRow key={r.id}>
                <AdminDataTd className="font-mono text-xs text-white/50">{r.id}</AdminDataTd>
                <AdminDataTd className="font-semibold text-white">{r.fullName}</AdminDataTd>
                <AdminDataTd>
                  <a className="text-[#2FA6B3] hover:underline" href={`mailto:${r.email}`}>
                    {r.email}
                  </a>
                </AdminDataTd>
                <AdminDataTd>{r.contactPhone}</AdminDataTd>
                <AdminDataTd className="max-w-md">{r.projectTitle}</AdminDataTd>
                <AdminDataTd className="text-white/60">
                  {r.subscribe ? 'Subscribed' : 'No list'}
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
