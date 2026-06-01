import Link from 'next/link';
import {
  getManagementDashboardStats,
  MANAGEMENT_TARGETS,
  progressPercent,
  progressTone,
} from '@/lib/managementDashboard';
import {
  AdminDashboardCard,
  AdminDashboardGrid,
  AdminMetricLine,
  AdminProgressRow,
  ManagementSection,
} from '@/components/management/ManagementUI';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function kes(n: number) {
  return `KES ${n.toLocaleString()}`;
}

export default async function ManagementDashboardPage() {
  const stats = await getManagementDashboardStats();

  if (!stats) {
    return (
      <ManagementSection
        title="Overview"
        subtitle="Performance across events, leads, sponsors, and content"
      >
        <p className="p-8 text-center text-sm text-white/65">
          Dashboard requires a database connection. Set <code className="text-white/80">DATABASE_URL</code>{' '}
          and run <code className="text-white/80">npm run db:init</code>.
        </p>
      </ManagementSection>
    );
  }

  const eventPaidPct = progressPercent(stats.events.paid, MANAGEMENT_TARGETS.eventPaidRegistrations);
  const eventRegPct = progressPercent(stats.events.total, MANAGEMENT_TARGETS.eventRegistrations);
  const revenuePct = progressPercent(
    stats.events.revenueCollectedKes,
    MANAGEMENT_TARGETS.eventRevenueKes
  );

  return (
    <ManagementSection
      title="Overview"
      subtitle={`Live snapshot · updated ${new Date(stats.generatedAt).toLocaleString()}`}
      note="Targets are planning benchmarks — adjust in src/lib/managementDashboard.ts"
    >
      <AdminDashboardGrid>
        <AdminDashboardCard title="Event bookings" href="/management/events">
          <div className="space-y-3">
            <AdminProgressRow
              label="Registrations"
              value={stats.events.total}
              target={MANAGEMENT_TARGETS.eventRegistrations}
              tone={progressTone(eventRegPct)}
            />
            <AdminProgressRow
              label="Paid tickets"
              value={stats.events.paid}
              target={MANAGEMENT_TARGETS.eventPaidRegistrations}
              tone={progressTone(eventPaidPct)}
            />
            <AdminProgressRow
              label="Revenue (paid)"
              value={stats.events.revenueCollectedKes}
              target={MANAGEMENT_TARGETS.eventRevenueKes}
              tone={progressTone(revenuePct)}
            />
            <AdminMetricLine label="Awaiting payment" value={stats.events.pending} />
            <AdminMetricLine label="New (7 days)" value={stats.events.last7Days} />
            <AdminMetricLine label="Expected pipeline" value={kes(stats.events.revenueExpectedKes)} />
          </div>
        </AdminDashboardCard>

        <AdminDashboardCard title="Messages" href="/management/messages">
          <div className="space-y-3">
            <AdminProgressRow
              label="Contact leads"
              value={stats.messages.total}
              target={MANAGEMENT_TARGETS.contactLeads}
              tone={progressTone(progressPercent(stats.messages.total, MANAGEMENT_TARGETS.contactLeads))}
            />
            <AdminMetricLine label="Newsletter opt-in" value={stats.messages.subscribed} />
            <AdminMetricLine label="Last 7 days" value={stats.messages.last7Days} />
          </div>
        </AdminDashboardCard>

        <AdminDashboardCard title="Careers" href="/management/applications">
          <div className="space-y-3">
            <AdminProgressRow
              label="Applications"
              value={stats.applications.total}
              target={MANAGEMENT_TARGETS.careerApplications}
              tone={progressTone(
                progressPercent(stats.applications.total, MANAGEMENT_TARGETS.careerApplications)
              )}
            />
            <AdminMetricLine label="Last 7 days" value={stats.applications.last7Days} />
          </div>
        </AdminDashboardCard>

        <AdminDashboardCard title="Speakers" href="/management/speakers">
          <div className="space-y-3">
            <AdminProgressRow
              label="Applications"
              value={stats.speakers.total}
              target={MANAGEMENT_TARGETS.speakerApplications}
              tone={progressTone(
                progressPercent(stats.speakers.total, MANAGEMENT_TARGETS.speakerApplications)
              )}
            />
            <AdminMetricLine label="Last 7 days" value={stats.speakers.last7Days} />
          </div>
        </AdminDashboardCard>

        <AdminDashboardCard title="Sponsors" href="/management/sponsors">
          <div className="space-y-3">
            <AdminProgressRow
              label="Confirmed"
              value={stats.sponsors.confirmed}
              target={MANAGEMENT_TARGETS.sponsorConfirmed}
              tone={progressTone(
                progressPercent(stats.sponsors.confirmed, MANAGEMENT_TARGETS.sponsorConfirmed)
              )}
            />
            <AdminMetricLine label="Total leads" value={stats.sponsors.total} />
            <AdminMetricLine label="In pipeline" value={stats.sponsors.inPipeline} />
            <AdminMetricLine label="New" value={stats.sponsors.newLeads} />
            <AdminMetricLine
              label="Slots left"
              value={`Gold ${stats.sponsors.goldRemaining} · Silver ${stats.sponsors.silverRemaining} · Community ${stats.sponsors.communityRemaining}`}
            />
          </div>
        </AdminDashboardCard>

        <AdminDashboardCard title="Payments" href="/management/payments">
          <div className="space-y-3">
            <AdminProgressRow
              label="Paid transactions"
              value={stats.payments.paid}
              target={MANAGEMENT_TARGETS.paymentsPaid}
              tone={progressTone(
                progressPercent(stats.payments.paid, MANAGEMENT_TARGETS.paymentsPaid)
              )}
            />
            <AdminMetricLine label="Total records" value={stats.payments.total} />
            <AdminMetricLine label="Pending" value={stats.payments.pending} />
            <AdminMetricLine label="Amount collected" value={kes(stats.payments.amountPaidKes)} />
          </div>
        </AdminDashboardCard>

        <AdminDashboardCard title="Blog" href="/management/blog">
          <div className="space-y-3">
            <AdminProgressRow
              label="Published posts"
              value={stats.blog.published}
              target={MANAGEMENT_TARGETS.blogPublished}
              tone={progressTone(
                progressPercent(stats.blog.published, MANAGEMENT_TARGETS.blogPublished)
              )}
            />
            <AdminMetricLine label="Drafts" value={stats.blog.drafts} />
            <AdminMetricLine label="Total" value={stats.blog.total} />
          </div>
        </AdminDashboardCard>
      </AdminDashboardGrid>

      <div className="border-t border-white/10 px-4 py-4 text-center sm:px-5">
        <Link href="/management/events" className="text-xs font-semibold text-[var(--teal-accent)] hover:underline">
          Open event bookings to mark paid &amp; record payments →
        </Link>
      </div>
    </ManagementSection>
  );
}
