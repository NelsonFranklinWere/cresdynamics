import { listCareerApplications } from '@/lib/db';
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

export default async function ManagementApplicationsPage() {
  const rows = await listCareerApplications(500);

  return (
    <ManagementSection title="Applications" subtitle={`Careers applications (${rows.length})`}>
      {rows.length === 0 ? (
        <AdminEmpty>No applications yet.</AdminEmpty>
      ) : (
        <AdminCardList>
          {rows.map((r) => (
            <AdminCard key={r.id}>
              <AdminCardHeader
                title={r.fullName}
                meta={new Date(r.createdAt).toLocaleString()}
                badge={<span className="text-xs font-semibold text-white/70">{r.role}</span>}
              />
              <AdminFields>
                <AdminField label="Email">
                  <a className="hover:underline" href={`mailto:${r.email}`}>
                    {r.email}
                  </a>
                </AdminField>
                <AdminField label="Phone">{r.phone || '—'}</AdminField>
                <AdminField label="CV file">{r.cvOriginalFilename || '—'}</AdminField>
              </AdminFields>
            </AdminCard>
          ))}
        </AdminCardList>
      )}
    </ManagementSection>
  );
}
