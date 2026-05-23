import { listSpeakerApplications } from '@/lib/db';
import {
  AdminCard,
  AdminCardHeader,
  AdminCardList,
  AdminEmpty,
  AdminField,
  AdminFields,
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
        <AdminCardList>
          {rows.map((r) => (
            <AdminCard key={r.id}>
              <AdminCardHeader
                title={r.fullName}
                meta={new Date(r.createdAt).toLocaleString()}
                badge={
                  r.company ? (
                    <span className="text-xs text-white/60">{r.company}</span>
                  ) : undefined
                }
              />
              <AdminFields>
                <AdminField label="Email">
                  <a className="hover:underline" href={`mailto:${r.email}`}>
                    {r.email}
                  </a>
                </AdminField>
                <AdminField label="Phone">{r.phone}</AdminField>
                <AdminField label="Topic" className="sm:col-span-2">
                  {r.topic}
                </AdminField>
                <AdminField label="LinkedIn">
                  {r.linkedin ? (
                    <a
                      href={r.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all underline"
                    >
                      Profile
                    </a>
                  ) : (
                    '—'
                  )}
                </AdminField>
                <AdminField label="Bio PDF">{r.bioPdfFilename}</AdminField>
                <AdminField label="Image">{r.imageFilename}</AdminField>
              </AdminFields>
            </AdminCard>
          ))}
        </AdminCardList>
      )}
    </ManagementSection>
  );
}
