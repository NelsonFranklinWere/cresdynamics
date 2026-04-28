import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'How Much Does a Professional Website Cost in Nairobi in 2026? | Cres Dynamics',
  description:
    'Clear website pricing ranges in Nairobi for 2026, including what affects cost and how to budget for a conversion-focused business website.',
  alternates: { canonical: 'https://cresdynamics.com/insights/professional-website-cost-nairobi-2026/' },
  openGraph: {
    title: 'How Much Does a Professional Website Cost in Nairobi in 2026?',
    description: 'Website pricing ranges, scope drivers, and budgeting advice for Kenyan businesses.',
    url: 'https://cresdynamics.com/insights/professional-website-cost-nairobi-2026/',
    type: 'article',
  },
};

export default function WebsiteCostArticlePage() {
  return (
    <div className="min-h-screen bg-[var(--navy-dark)] text-white">
      <Header />
      <main className="pt-24">
        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--teal-accent)] mb-3">Website Cost Nairobi</p>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-5">
            How Much Does a Professional Website Cost in Nairobi in 2026?
          </h1>
          <p className="text-white/80 mb-10">
            The short answer: it depends on outcomes. A website built just to “exist online” costs less than one built to generate qualified enquiries and sales consistently.
          </p>

          <section className="space-y-5 text-white/85 leading-relaxed">
            <h2 className="text-2xl font-bold text-white">Typical pricing ranges in Kenya</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>KES 85,000–140,000:</strong> starter business website with clear pages and inquiry flow.</li>
              <li><strong>KES 150,000–280,000:</strong> growth website with stronger copy, SEO setup, and conversion architecture.</li>
              <li><strong>KES 280,000–450,000+:</strong> e-commerce or platform-style website with advanced integrations.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8">What actually changes the price</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Number of page templates and content complexity.</li>
              <li>Whether copywriting and structure are included.</li>
              <li>M-Pesa checkout and payment workflow requirements.</li>
              <li>Lead routing, CRM, or automation integrations.</li>
              <li>Speed, SEO foundation, and analytics implementation quality.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8">The expensive mistake</h2>
            <p>
              The cheapest website often becomes expensive when it fails to convert. If your site cannot communicate trust, direct
              visitors to action, and capture enquiries reliably, you keep paying for traffic that does not become business.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8">What to ask before you hire a developer</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>How will this website generate leads, not just page views?</li>
              <li>Will I own all credentials and assets?</li>
              <li>How is SEO setup handled at launch?</li>
              <li>Can this site scale to e-commerce or operational tools later?</li>
            </ul>
          </section>

          <section className="mt-12 rounded-2xl border border-white/15 bg-black/30 p-6">
            <h3 className="text-xl font-bold mb-2">Planning a website build this quarter?</h3>
            <p className="text-white/80 mb-4">
              We can map the right scope for your growth stage and budget.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link href="/websites" className="rounded-lg bg-[var(--orange-energy)] px-4 py-2 text-sm font-bold">Explore Website Service</Link>
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
