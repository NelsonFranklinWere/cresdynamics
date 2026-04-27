import {
  getSponsorSlotSummary,
  listSponsorApplications,
  type SponsorSlotSummary,
} from '@/lib/db';
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
    <section className="w-full border border-white/10 bg-black/25">
      <div className="px-5 py-4 border-b border-white/10 md:px-6">
        <h1 className="text-xl md:text-2xl font-black">Sponsor applications</h1>
        <p className="text-white/70 text-sm mt-1">Event sponsor leads and package interest.</p>
      </div>
      <div className="px-4 py-4 md:px-6 md:py-5">
        <SponsorApplicationsClient initialRows={rows} slotSummary={slotSummary} />
      </div>
    </section>
  );
}
