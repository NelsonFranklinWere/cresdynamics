import { listCareerApplications } from '@/lib/db';
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

export default async function ManagementApplicationsPage() {
  const rows = await listCareerApplications(500);

  return (
    <ManagementSection title="Applications" subtitle={`Careers applications (${rows.length})`}>
      {rows.length === 0 ? (
        <AdminEmpty>No applications yet.</AdminEmpty>
      ) : (
        <AdminDataTable caption={`${rows.length} applications`}>
          <AdminDataHead>
            <tr>
              <AdminDataTh>#</AdminDataTh>
              <AdminDataTh>Name</AdminDataTh>
              <AdminDataTh>Role</AdminDataTh>
              <AdminDataTh>Email</AdminDataTh>
              <AdminDataTh>Phone</AdminDataTh>
              <AdminDataTh>CV</AdminDataTh>
              <AdminDataTh>Submitted</AdminDataTh>
            </tr>
          </AdminDataHead>
          <AdminDataBody>
            {rows.map((r) => (
              <AdminDataRow key={r.id}>
                <AdminDataTd className="font-mono text-xs text-white/50">{r.id}</AdminDataTd>
                <AdminDataTd className="font-semibold text-white">{r.fullName}</AdminDataTd>
                <AdminDataTd>{r.role}</AdminDataTd>
                <AdminDataTd>
                  <a className="text-[#2FA6B3] hover:underline" href={`mailto:${r.email}`}>
                    {r.email}
                  </a>
                </AdminDataTd>
                <AdminDataTd>{r.phone || '—'}</AdminDataTd>
                <AdminDataTd className="text-white/70">{r.cvOriginalFilename || '—'}</AdminDataTd>
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
