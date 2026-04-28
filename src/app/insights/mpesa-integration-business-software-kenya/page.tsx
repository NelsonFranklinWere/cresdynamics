import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'M-Pesa Integration — How to Connect Mpesa to Your Business Software | Cres Dynamics',
  description:
    'A practical guide to M-Pesa integration for Kenyan businesses, from checkout and invoicing to reconciliation workflows.',
  alternates: { canonical: 'https://cresdynamics.com/insights/mpesa-integration-business-software-kenya/' },
  openGraph: {
    title: 'M-Pesa Integration — How to Connect Mpesa to Your Business Software',
    description: 'Implementation guide for M-Pesa integration across sales, finance, and operational workflows.',
    url: 'https://cresdynamics.com/insights/mpesa-integration-business-software-kenya/',
    type: 'article',
  },
};

export default function MpesaIntegrationArticlePage() {
  return (
    <div className="min-h-screen bg-[var(--navy-dark)] text-white">
      <Header />
      <main className="pt-24">
        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--teal-accent)] mb-3">M-Pesa Integration</p>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-5">
            M-Pesa Integration — How to Connect Mpesa to Your Business Software
          </h1>
          <p className="text-white/80 mb-10">
            In Kenya, payment experience is business experience. If your software is not integrated with M-Pesa workflows, your teams end up reconciling manually and customers face avoidable friction.
          </p>

          <section className="space-y-5 text-white/85 leading-relaxed">
            <h2 className="text-2xl font-bold text-white">What M-Pesa integration should solve</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Trigger payment requests from system actions.</li>
              <li>Match payment confirmations to correct orders/invoices.</li>
              <li>Update status automatically (pending, paid, failed).</li>
              <li>Reduce month-end manual reconciliation time.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8">Core implementation flow</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Create payment intent in your system first.</li>
              <li>Redirect or trigger M-Pesa payment flow.</li>
              <li>Receive callback/IPN and verify transaction status.</li>
              <li>Update internal records and notify customer/team.</li>
              <li>Store references for audit and reconciliation.</li>
            </ol>

            <h2 className="text-2xl font-bold text-white mt-8">Common mistakes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Recording customer registration only after payment success.</li>
              <li>Not handling pending/failed states cleanly.</li>
              <li>No reconciliation dashboard for finance teams.</li>
              <li>No fallback path when provider redirects fail.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8">Best practice for Kenyan businesses</h2>
            <p>
              Save customer and order data first, then process payment. That gives your team visibility even if a payment fails,
              so follow-up can happen immediately and revenue leakage is reduced.
            </p>
          </section>

          <section className="mt-12 rounded-2xl border border-white/15 bg-black/30 p-6">
            <h3 className="text-xl font-bold mb-2">Need M-Pesa integrated into your operations?</h3>
            <p className="text-white/80 mb-4">
              We can design and implement the full workflow: checkout, callbacks, reconciliation, and reporting.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link href="/finance-platforms" className="rounded-lg bg-[var(--orange-energy)] px-4 py-2 text-sm font-bold">Explore Finance Platforms</Link>
              <Link href="/contact" className="rounded-lg border border-white/25 px-4 py-2 text-sm font-bold">Book Discovery Session</Link>
            </div>
          </section>

          <section className="mt-10">
            <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-3">Related insights</p>
            <div className="flex flex-wrap gap-2">
              <Link href="/insights/custom-erp-system-cost-kenya-2026" className="rounded-lg border border-white/20 px-3 py-1.5 text-xs font-semibold">ERP Cost Kenya 2026</Link>
              <Link href="/insights/professional-website-cost-nairobi-2026" className="rounded-lg border border-white/20 px-3 py-1.5 text-xs font-semibold">Website Cost Nairobi 2026</Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
