import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { whatsappUrl, WHATSAPP_PREFILL, TEL_LINK } from '@/lib/contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Finance & Revenue Management System Kenya | M-Pesa Integration | Cres Dynamics',
  description:
    'Real-time revenue tracking, invoice management, and subscription billing for Kenyan businesses. M-Pesa integrated. 127 active users. KES 4.97M tracked. Based in Nairobi.',
  alternates: { canonical: 'https://cresdynamics.com/finance-platforms/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Finance & Revenue Management System Kenya | M-Pesa Integration | Cres Dynamics',
    description:
      'Real-time revenue tracking, invoice management, and subscription billing with M-Pesa integration for Kenyan businesses.',
    url: 'https://cresdynamics.com/finance-platforms/',
    type: 'website',
  },
};

export default function FinancePlatformsPage() {
  return (
    <div className="min-h-screen bg-[var(--navy-dark)] text-white">
      <Header />
      <main className="pt-24">
        {/* HERO */}
        <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: 'var(--cres-gradient-bg)' }}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_60%_40%,rgba(26,104,53,0.12)_0%,transparent_70%)]" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-3xl md:text-5xl font-black mb-6">
              Finance &amp; Revenue Platforms
              <br />
              Real-Time Visibility for
              <br />
              Kenyan Businesses
            </h1>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--cres-orange-primary)]/50 bg-black/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--cres-orange-primary)] mb-5">
              127 Active Users · KES 4.97M Tracked Live
            </div>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              Real-time revenue visibility, invoice management, and Mpesa integration. Stop reconstructing last month – start
              reading today&apos;s dashboard.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl(WHATSAPP_PREFILL.financeDiscovery)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide"
              >
                Book Finance Discovery
              </a>
              <a
                href={TEL_LINK}
                className="inline-flex items-center gap-2 border border-white/40 hover:bg-white/5 text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide"
              >
                Call 0708 805 496
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 border border-white/40 hover:bg-white/5 text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide"
              >
                See What&apos;s Included
              </Link>
            </div>
          </div>
        </section>

        {/* METRICS STRIP */}
        <section className="relative py-10 md:py-12 bg-[var(--cres-primary-bg)] border-t border-b border-white/10">
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-1">
                <div className="text-xs uppercase tracking-[0.2em] text-white/60">Revenue Tracked Live</div>
                <div className="text-2xl md:text-3xl font-black text-[var(--cres-orange-primary)]">KES 4.97M</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs uppercase tracking-[0.2em] text-white/60">Active Platform Users</div>
                <div className="text-2xl md:text-3xl font-black text-white">127</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs uppercase tracking-[0.2em] text-white/60">System Uptime</div>
                <div className="text-2xl md:text-3xl font-black text-[var(--cres-electric-teal)]">99.9%</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs uppercase tracking-[0.2em] text-white/60">To Pull a Full Report</div>
                <div className="text-2xl md:text-3xl font-black text-white">30 sec</div>
              </div>
            </div>
          </div>
        </section>

        {/* THE PROBLEM — desktop: content left, cards right; mobile: stacked */}
        <section className="relative py-16 md:py-20 bg-[var(--cres-primary-bg)]">
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12 gap-10">
              <div className="lg:w-2/5 shrink-0 text-center lg:text-left">
                <h2 className="text-sm md:text-base font-semibold tracking-[0.24em] uppercase text-white/60 mb-2">
                  The Problem
                </h2>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4">
                  If You Don&apos;t Know
                  <br />
                  Your Numbers,
                  <br />
                  You Can&apos;t Lead.
                </h3>
                <p className="text-white/75 text-sm md:text-base mb-6 max-w-2xl lg:max-w-none mx-auto lg:mx-0">
                  Most business owners in Nairobi find out how last month went from a conversation at end of month. That&apos;s
                  not visibility. That&apos;s archaeology.
                </p>
                <p className="text-white/75 text-sm md:text-base max-w-2xl lg:max-w-none mx-auto lg:mx-0 mb-0 lg:mb-0">
                  A business doing KES 500,000 a month with no finance system is typically losing KES 60,000–120,000 monthly in
                  missed invoices, untracked stock, and unrecorded transactions. Not because they&apos;re careless. Because
                  they have no system to catch it.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 min-w-0">
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="text-2xl mb-3">📊</div>
                <h4 className="text-lg font-bold text-white mb-2">You find out how you&apos;re doing too late</h4>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  End-of-month reports mean you&apos;re always reacting. By the time you know there&apos;s a problem, the
                  month is gone. A finance system gives you today&apos;s picture.
                </p>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="text-2xl mb-3">🧾</div>
                <h4 className="text-lg font-bold text-white mb-2">Invoices get lost, delayed, or forgotten</h4>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Every unrecorded transaction is revenue earned but never collected. In manual systems, this is the most
                  common invisible loss.
                </p>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="text-2xl mb-3">📦</div>
                <h4 className="text-lg font-bold text-white mb-2">Stock disappears without trace</h4>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Inventory that isn&apos;t tracked in real time is inventory that walks out the door. Stock shrinkage in
                  untracked businesses runs 8–15% annually.
                </p>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="text-2xl mb-3">🏦</div>
                <h4 className="text-lg font-bold text-white mb-2">Investors and banks need numbers you don&apos;t have</h4>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Every funding conversation, every bank loan, every partnership requires financial statements you can&apos;t
                  produce without a system. You&apos;re locked out of the capital you deserve.
                </p>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* THE PLATFORM — desktop: cards left, content right (alternate); mobile: stacked */}
        <section className="relative py-16 md:py-20 bg-[var(--cres-secondary-bg)]">
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row-reverse lg:items-start lg:gap-12 gap-10">
              <div className="lg:w-2/5 shrink-0 text-center lg:text-left order-first lg:order-last">
                <p className="text-[11px] md:text-xs font-semibold tracking-[0.24em] uppercase text-white/70 mb-2">
                  The Platform
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3">
                  Finance Infrastructure
                  <br />
                  Built for Kenya.
                </h2>
                <p className="text-white/75 text-sm md:text-base max-w-2xl lg:max-w-none mx-auto lg:mx-0">
                  Not adapted from a global SaaS tool. Built from the ground up for how Kenyan businesses move money –
                  Mpesa, invoice terms, local accounting standards.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 min-w-0 order-last lg:order-first">
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">
                    01
                  </span>
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Live Revenue Dashboard</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Today&apos;s revenue. This week. This month. Compared to last month. All on one screen. No waiting for a
                  report. No calling the accountant.
                </p>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">
                    02
                  </span>
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Mpesa Integration</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Every Mpesa transaction reconciled automatically. Know who paid, how much, and when – without checking
                  your phone manually. Fully integrated into your revenue dashboard.
                </p>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">
                    03
                  </span>
                  <span className="text-2xl">🧾</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Invoice Management</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Create, send, and track invoices in one place. Automatic reminders for overdue payments. Know which
                  clients owe you what – at a glance.
                </p>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">
                    04
                  </span>
                  <span className="text-2xl">📦</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Inventory &amp; Stock Tracking</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Real-time stock levels. Low-stock alerts. Movement history. Every item tracked from arrival to sale.
                  Stock shrinkage becomes visible – and stoppable.
                </p>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">
                    05
                  </span>
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Role-Based Access</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Your accountant sees financials. Your manager sees operations. Your team sees only what they need.
                  Sensitive data protected with military-grade role controls.
                </p>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">
                    06
                  </span>
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Export-Ready Reports</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  One-click export of P&amp;L statements, cash flow reports, and revenue summaries. In the format your
                  accountant, bank, or investor needs.
                </p>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* BEFORE & AFTER */}
        <section className="relative py-16 md:py-20 bg-[var(--cres-primary-bg)]">
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <div className="text-center mb-10 md:mb-12">
              <p className="text-[11px] md:text-xs font-semibold tracking-[0.24em] uppercase text-white/60 mb-2">
                Before &amp; After
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3">
                What Financial
                <br />
                Visibility Changes.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 md:p-7 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <h3 className="text-lg font-bold text-white mb-4">Without a Finance System</h3>
                <ul className="space-y-3 text-white/80 text-sm md:text-base">
                  <li>
                    <strong className="text-white">Daily Numbers</strong> – You ask your team or check your bank app.
                    Informal, incomplete, delayed.
                  </li>
                  <li>
                    <strong className="text-white">Invoicing</strong> – Invoices sent manually, sometimes forgotten. Money
                    earned but never collected.
                  </li>
                  <li>
                    <strong className="text-white">Stock</strong> – Inventory counted by eye. Shrinkage invisible.
                    Ordering decisions are guesses.
                  </li>
                  <li>
                    <strong className="text-white">Funding</strong> – Can&apos;t produce clean financials. Banks and
                    investors say no or offer poor terms.
                  </li>
                </ul>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 md:p-7 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <h3 className="text-lg font-bold text-white mb-4">With CRES Finance Platform</h3>
                <ul className="space-y-3 text-white/80 text-sm md:text-base">
                  <li>
                    <strong className="text-white">Daily Numbers</strong> – Open your dashboard. Revenue, expenses,
                    outstanding invoices – live.
                  </li>
                  <li>
                    <strong className="text-white">Invoicing</strong> – Every invoice tracked. Automatic reminders.
                    Collection rate approaches 100%.
                  </li>
                  <li>
                    <strong className="text-white">Stock</strong> – Every item tracked in real time. Alerts before you run
                    out. No more stock guessing.
                  </li>
                  <li>
                    <strong className="text-white">Funding</strong> – Export investor-ready reports instantly. Access the
                    capital your business deserves.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* INVESTMENT / CTA */}
        <section className="relative py-16 md:py-20 bg-[var(--cres-secondary-bg)]">
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <p className="text-[11px] md:text-xs font-semibold tracking-[0.24em] uppercase text-white/60 mb-2">
              Investment
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Finance Platform Pricing.</h2>
            <p className="text-white/75 text-sm md:text-base mb-6 max-w-2xl mx-auto">
              Stop guessing. Start knowing. Our finance platform is priced transparently. See full details and starting
              points on the pricing page.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide"
              >
                See Pricing
              </Link>
              <p className="text-white/80 text-xs md:text-sm">
                Book a 20-minute finance discovery session. We&apos;ll show you exactly where your money is going.
              </p>
            </div>
            <p className="text-white/90 text-sm md:text-base mt-4">
              Call{' '}
              <a href="tel:+254708805496" className="font-semibold text-[var(--cres-orange-primary)]">
                +254 708 805 496
              </a>
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {[
                { href: '/erp', label: 'Custom ERP' },
                { href: '/operations-workflow', label: 'Operations & Workflow' },
                { href: '/case-studies', label: 'Case Studies' },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="rounded-lg border border-white/20 px-3 py-1.5 text-xs font-semibold hover:bg-white/10">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
