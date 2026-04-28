import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'How Much Does a Custom ERP System Cost in Kenya in 2026? | Cres Dynamics',
  description:
    'A practical ERP pricing guide for Kenyan businesses in 2026: cost ranges, timelines, and what actually affects implementation budget.',
  alternates: { canonical: 'https://cresdynamics.com/insights/custom-erp-system-cost-kenya-2026/' },
  openGraph: {
    title: 'How Much Does a Custom ERP System Cost in Kenya in 2026?',
    description: 'ERP pricing ranges, scope drivers, and implementation timelines for Kenyan businesses.',
    url: 'https://cresdynamics.com/insights/custom-erp-system-cost-kenya-2026/',
    type: 'article',
  },
};

export default function ERPArticlePage() {
  return (
    <div className="min-h-screen bg-[var(--navy-dark)] text-white">
      <Header />
      <main className="pt-24">
        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--teal-accent)] mb-3">ERP Cost Kenya</p>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-5">
            How Much Does a Custom ERP System Cost in Kenya in 2026?
          </h1>
          <p className="text-white/80 mb-10">
            Most Kenyan businesses ask this question late, after operations are already stretched. The better time to ask is before spreadsheets and WhatsApp processes become your bottleneck.
          </p>

          <section className="space-y-5 text-white/85 leading-relaxed">
            <h2 className="text-2xl font-bold text-white">Quick answer</h2>
            <p>
              A lean custom ERP in Kenya typically starts around <strong>KES 350,000</strong> for foundation modules. Mid-range
              builds with finance + operations + approval workflows usually land between <strong>KES 700,000 and KES 2.5M</strong>.
              Larger multi-branch implementations can go beyond that.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8">What drives ERP cost</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Module scope:</strong> finance, inventory, HR, operations, reporting.</li>
              <li><strong>User complexity:</strong> role-based permissions and approval chains.</li>
              <li><strong>Integrations:</strong> M-Pesa, existing accounting tools, SMS/email workflows.</li>
              <li><strong>Rollout model:</strong> phased deployment vs all-at-once implementation.</li>
              <li><strong>Data migration:</strong> how much history needs to be cleaned and imported.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8">Timeline expectations</h2>
            <p>
              Most successful projects run in phases over 6–16 weeks. Businesses that phase implementation usually see value
              earlier because critical modules go live first instead of waiting for a single big launch.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8">Cost mistakes to avoid</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Choosing software by cheapest quote instead of process fit.</li>
              <li>Skipping discovery and trying to “build as we go.”</li>
              <li>Treating integrations (especially M-Pesa) as optional extras too late.</li>
              <li>Planning no onboarding/change management budget.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8">Bottom line</h2>
            <p>
              ERP cost is less about code and more about operational clarity. If implementation reduces delays, missed invoices,
              and manual approvals, the system often pays for itself faster than expected.
            </p>
          </section>

          <section className="mt-12 rounded-2xl border border-white/15 bg-black/30 p-6">
            <h3 className="text-xl font-bold mb-2">Need an ERP scope estimate for your business?</h3>
            <p className="text-white/80 mb-4">
              We can map your first implementation phase and give a practical budget range.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link href="/erp" className="rounded-lg bg-[var(--orange-energy)] px-4 py-2 text-sm font-bold">Explore ERP Service</Link>
              <Link href="/contact" className="rounded-lg border border-white/25 px-4 py-2 text-sm font-bold">Book Discovery Session</Link>
            </div>
          </section>

          <section className="mt-10">
            <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-3">Related insights</p>
            <div className="flex flex-wrap gap-2">
              <Link href="/insights/professional-website-cost-nairobi-2026" className="rounded-lg border border-white/20 px-3 py-1.5 text-xs font-semibold">Website Cost Nairobi 2026</Link>
              <Link href="/insights/signs-business-outgrown-whatsapp-excel" className="rounded-lg border border-white/20 px-3 py-1.5 text-xs font-semibold">Outgrown WhatsApp & Excel</Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
