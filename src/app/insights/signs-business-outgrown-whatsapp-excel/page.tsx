import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '7 Signs Your Business Has Outgrown WhatsApp and Excel | Cres Dynamics',
  description:
    'Learn the operational warning signs that show your business has outgrown WhatsApp and Excel and needs integrated systems.',
  alternates: { canonical: 'https://cresdynamics.com/insights/signs-business-outgrown-whatsapp-excel/' },
  openGraph: {
    title: '7 Signs Your Business Has Outgrown WhatsApp and Excel',
    description: 'Operational warning signs and what to implement next for scale.',
    url: 'https://cresdynamics.com/insights/signs-business-outgrown-whatsapp-excel/',
    type: 'article',
  },
};

export default function OutgrownOpsArticlePage() {
  return (
    <div className="min-h-screen bg-[var(--navy-dark)] text-white">
      <Header />
      <main className="pt-24">
        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--teal-accent)] mb-3">Operations Systems</p>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-5">
            7 Signs Your Business Has Outgrown WhatsApp and Excel
          </h1>
          <p className="text-white/80 mb-10">
            WhatsApp and spreadsheets are useful early tools. The issue starts when they become your core operating system.
          </p>

          <section className="space-y-5 text-white/85 leading-relaxed">
            <h2 className="text-2xl font-bold text-white">1) You depend on one person for updates</h2>
            <p>If one manager is offline and work stalls, process knowledge is not in the system; it is in a person.</p>

            <h2 className="text-2xl font-bold text-white">2) Approvals happen in scattered chats</h2>
            <p>When approvals are spread across chat threads, there is no reliable audit trail and decisions become hard to track.</p>

            <h2 className="text-2xl font-bold text-white">3) Reporting takes hours every week</h2>
            <p>If your team compiles reports manually every Friday, you are paying labor cost for what software should automate.</p>

            <h2 className="text-2xl font-bold text-white">4) Lead follow-ups are inconsistent</h2>
            <p>Leads should enter structured flows, not depend on whoever remembers to send a message.</p>

            <h2 className="text-2xl font-bold text-white">5) You cannot trust your numbers in real time</h2>
            <p>When finance, operations, and sales data live in separate sheets, leadership decisions become guesswork.</p>

            <h2 className="text-2xl font-bold text-white">6) Duplicate data entry is normal</h2>
            <p>Teams retyping the same data into multiple tools is a direct sign of integration and workflow gaps.</p>

            <h2 className="text-2xl font-bold text-white">7) Growth creates more chaos, not clarity</h2>
            <p>If every new client or branch increases confusion, your operations architecture needs redesign.</p>

            <h2 className="text-2xl font-bold text-white mt-8">What to do next</h2>
            <p>
              Start with one high-friction workflow (approvals, lead handling, or operations tracking) and systemize it first.
              Then expand into integrated operations and ERP modules.
            </p>
          </section>

          <section className="mt-12 rounded-2xl border border-white/15 bg-black/30 p-6">
            <h3 className="text-xl font-bold mb-2">Want to map your first operations system phase?</h3>
            <p className="text-white/80 mb-4">
              We can identify the quickest workflow wins and design your rollout path.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link href="/operations-workflow" className="rounded-lg bg-[var(--orange-energy)] px-4 py-2 text-sm font-bold">Explore Operations Service</Link>
              <Link href="/contact" className="rounded-lg border border-white/25 px-4 py-2 text-sm font-bold">Book Discovery Session</Link>
            </div>
          </section>

          <section className="mt-10">
            <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-3">Related insights</p>
            <div className="flex flex-wrap gap-2">
              <Link href="/insights/custom-erp-system-cost-kenya-2026" className="rounded-lg border border-white/20 px-3 py-1.5 text-xs font-semibold">ERP Cost Kenya 2026</Link>
              <Link href="/insights/mpesa-integration-business-software-kenya" className="rounded-lg border border-white/20 px-3 py-1.5 text-xs font-semibold">M-Pesa Integration Guide</Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
