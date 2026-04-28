import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TEL_LINK, WHATSAPP_PREFILL, whatsappUrl } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Custom Software Development Nairobi Kenya | Web Applications | Cres Dynamics',
  description:
    'We build custom software and web applications for Kenyan businesses. Portals, dashboards, booking systems, and internal tools. Fast delivery. Based in Nairobi, Kenya.',
  alternates: { canonical: 'https://cresdynamics.com/software/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Custom Software Development Nairobi Kenya | Web Applications | Cres Dynamics',
    description:
      'Custom software and web application development for Kenyan businesses, including portals, dashboards, and internal tools.',
    url: 'https://cresdynamics.com/software/',
    type: 'website',
  },
};

const useCases = [
  {
    title: 'Customer Portals',
    body: 'Secure client dashboards for onboarding, service requests, ticketing, and account visibility.',
  },
  {
    title: 'Internal Tools',
    body: 'Custom systems for teams to run approvals, workflows, and reporting without spreadsheet sprawl.',
  },
  {
    title: 'Booking & Scheduling Systems',
    body: 'Online booking flows with reminders, status tracking, and staff assignment in one platform.',
  },
  {
    title: 'Business Dashboards',
    body: 'Real-time operational dashboards that combine sales, finance, operations, and team performance.',
  },
];

export default function SoftwarePage() {
  return (
    <div className="min-h-screen bg-[var(--navy-dark)] text-white">
      <Header />
      <main className="pt-24">
        <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: 'var(--cres-gradient-bg)' }}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_60%_40%,rgba(243,156,36,0.1)_0%,transparent_70%)]" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-3xl md:text-5xl font-black mb-6">
              Custom Software Development
              <br />
              Nairobi, Kenya
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              We build software that sits between a brochure website and a full ERP: portals, dashboards, booking platforms,
              and internal applications designed around your workflow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl(WHATSAPP_PREFILL.systemsDiscovery)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--orange-energy)] hover:bg-[var(--orange-energy-hover)] text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide"
              >
                Book Software Discovery
              </a>
              <a
                href={TEL_LINK}
                className="inline-flex items-center gap-2 border border-white/40 hover:bg-white/5 text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide"
              >
                Call 0708 805 496
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-[var(--cres-primary-bg)]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-4xl font-black mb-4 text-center">What This Page Covers</h2>
            <p className="text-white/80 text-center max-w-3xl mx-auto mb-10">
              If you need more than a marketing website but do not need a full ERP yet, this is the category: software
              applications built to solve one clear business problem quickly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {useCases.map((item) => (
                <article key={item.title} className="rounded-2xl border border-white/10 bg-black/30 p-6">
                  <h3 className="text-xl font-bold mb-2 text-[var(--orange-energy)]">{item.title}</h3>
                  <p className="text-white/80 leading-relaxed">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-[var(--cres-secondary-bg)] border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-black mb-6 text-center">Related Services</h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/erp" className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold hover:bg-white/10">Custom ERP</Link>
              <Link href="/operations-workflow" className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold hover:bg-white/10">Operations & Workflow</Link>
              <Link href="/ai-automation" className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold hover:bg-white/10">AI & Automation</Link>
              <Link href="/finance-platforms" className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold hover:bg-white/10">Finance Platforms</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
