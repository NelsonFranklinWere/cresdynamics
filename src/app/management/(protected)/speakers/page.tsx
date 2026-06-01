import { listSpeakerApplications } from '@/lib/db';
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

export default async function ManagementSpeakersPage() {
  const rows = await listSpeakerApplications(500);

  return (
    <ManagementSection title="Speaker applications" subtitle={`Event speaker submissions (${rows.length})`}>
      {rows.length === 0 ? (
        <AdminEmpty>No speaker applications yet.</AdminEmpty>
      ) : (
        <AdminDataTable caption={`${rows.length} speakers`}>
          <AdminDataHead>
            <tr>
              <AdminDataTh>#</AdminDataTh>
              <AdminDataTh>Name</AdminDataTh>
              <AdminDataTh>Company</AdminDataTh>
              <AdminDataTh>Email</AdminDataTh>
              <AdminDataTh>Phone</AdminDataTh>
              <AdminDataTh>Topic</AdminDataTh>
              <AdminDataTh>LinkedIn</AdminDataTh>
              <AdminDataTh>Files</AdminDataTh>
              <AdminDataTh>Submitted</AdminDataTh>
            </tr>
          </AdminDataHead>
          <AdminDataBody>
            {rows.map((r) => (
              <AdminDataRow key={r.id}>
                <AdminDataTd className="font-mono text-xs text-white/50">{r.id}</AdminDataTd>
                <AdminDataTd className="font-semibold text-white">{r.fullName}</AdminDataTd>
                <AdminDataTd className="text-white/60">{r.company || '—'}</AdminDataTd>
                <AdminDataTd>
                  <a className="text-[#2FA6B3] hover:underline" href={`mailto:${r.email}`}>
                    {r.email}
                  </a>
                </AdminDataTd>
                <AdminDataTd>{r.phone}</AdminDataTd>
                <AdminDataTd className="max-w-xs">{r.topic}</AdminDataTd>
                <AdminDataTd>
                  {r.linkedin ? (
                    <a
                      href={r.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2FA6B3] hover:underline"
                    >
                      Profile
                    </a>
                  ) : (
                    '—'
                  )}
                </AdminDataTd>
                <AdminDataTd className="text-xs text-white/60">
                  {r.bioPdfFilename}
                  <br />
                  {r.imageFilename}
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
