import {
  getSponsorSlotSummary,
  listSponsorApplications,
  type SponsorSlotSummary,
} from '@/lib/db';
import { ManagementSection } from '@/components/management/ManagementUI';
import SponsorApplicationsClient from './SponsorApplicationsClient';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export default async function ManagementSponsorsPage() {
  const rows = await listSponsorApplications(500);
  const summary = await getSponsorSlotSummary();
  const slotSummary: SponsorSlotSummary = summary ?? {
    totalApplications: 0,
    goldRemaining: 1,
    silverRemaining: 3,
    communityRemaining: 10,
  };

  return (
    <ManagementSection
      title="Sponsor applications"
      subtitle="Event sponsor leads and package interest"
    >
      <SponsorApplicationsClient initialRows={rows} slotSummary={slotSummary} />
    </ManagementSection>
  );
}
