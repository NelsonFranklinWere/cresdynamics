import { listContactLeads } from '@/lib/db';
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

export default async function ManagementMessagesPage() {
  const rows = await listContactLeads(500);

  return (
    <ManagementSection title="Messages" subtitle={`Contact form submissions (${rows.length})`}>
      {rows.length === 0 ? (
        <AdminEmpty>No contact messages yet.</AdminEmpty>
      ) : (
        <AdminCardList>
          {rows.map((r) => (
            <AdminCard key={r.id}>
              <AdminCardHeader
                title={r.fullName}
                meta={new Date(r.createdAt).toLocaleString()}
                badge={
                  <span className="text-xs text-white/50">{r.subscribe ? 'Subscribed' : 'No list'}</span>
                }
              />
              <AdminFields>
                <AdminField label="Email">
                  <a className="hover:underline" href={`mailto:${r.email}`}>
                    {r.email}
                  </a>
                </AdminField>
                <AdminField label="Phone">{r.contactPhone}</AdminField>
                <AdminField label="Project" className="sm:col-span-2">
                  {r.projectTitle}
                </AdminField>
              </AdminFields>
            </AdminCard>
          ))}
        </AdminCardList>
      )}
    </ManagementSection>
  );
}
