import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Custom ERP System Development Nairobi Kenya | Cres Dynamics',
  description:
    'We build custom ERP systems for growing Kenyan businesses. Finance, inventory, HR, and operations in one platform. M-Pesa integrated. Based in Nairobi. Book a free discovery session.',
  alternates: { canonical: 'https://cresdynamics.com/erp/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Custom ERP System Development Nairobi Kenya | Cres Dynamics',
    description:
      'Custom ERP systems for growing Kenyan businesses with finance, inventory, HR and operations in one platform.',
    url: 'https://cresdynamics.com/erp/',
    type: 'website',
  },
};

export default function ERPPage() {
  const erpFaqs = [
    {
      q: 'How much does a custom ERP cost in Kenya?',
      a: 'Most custom ERP implementations in Kenya start from around KES 350,000 for a lean foundation and scale upward based on modules, user count, integrations, and rollout complexity.',
    },
    {
      q: 'How long does ERP implementation take?',
      a: 'Typical ERP projects run in phased releases over 6 to 16 weeks. We prioritise high-impact modules first so you see value early instead of waiting for one massive launch.',
    },
    {
      q: 'Can you integrate M-Pesa into an ERP system?',
      a: 'Yes. We can integrate M-Pesa payment and reconciliation flows so finance and operations teams can track payments, invoices, and statuses from one system.',
    },
    {
      q: 'What is the difference between a custom ERP and software like QuickBooks?',
      a: 'QuickBooks and similar tools solve one domain well (mainly accounting). A custom ERP connects finance, operations, approvals, inventory, HR, and reporting in one workflow tailored to your business process.',
    },
  ];
  const erpFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: erpFaqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(erpFaqSchema) }} />

      {/* HERO SECTION */}
      <section className="py-20 bg-gradient-to-br from-[var(--cres-primary-bg)] to-[var(--cres-secondary-bg)] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--cres-white)] mb-6" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)'}}>
              Custom ERP Systems Built for
              <br />
              <span className="text-[var(--cres-orange-primary)]">Kenyan Businesses</span>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--cres-white)] max-w-4xl mx-auto mb-8" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}>
              When spreadsheets break businesses and off-the-shelf ERPs fail, we build custom ERP for schools, retail, service companies, and multi-branch operations: inventory tracking, finance tracking, staff tracking, reporting dashboards. Clarity, control, scalability.
            </p>
            <p className="text-base md:text-lg text-white/80 max-w-4xl mx-auto mb-8">
              ERP means one connected system across operations, finances, and your team — so your business is no longer running from five separate WhatsApp groups, disconnected spreadsheets, and delayed updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/cresos" className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[#E87528] text-[var(--cres-white)] font-bold text-lg px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wide">
                Explore CresOS
                <i className="fas fa-chevron-right text-sm"></i>
              </a>
              <a href="https://wa.me/254708805496?text=Hi%2C%20I'd%20like%20to%20book%20a%20systems%20discovery%20session%20with%20CRES%20Dynamics." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-primary)]/10 text-[var(--cres-white)] font-bold text-lg px-6 py-3 rounded-xl transition-all duration-300 uppercase tracking-wide">
                Book a Systems Discovery Session
                <i className="fas fa-arrow-right text-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SPREADSHEETS / OFF-THE-SHELF — desktop: content left, comparison cards right; mobile: stacked */}
      <section className="py-16 md:py-20 bg-[var(--cres-primary-bg)] relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row lg:items-stretch lg:gap-12 gap-10">
              <div className="lg:w-2/5 shrink-0 flex flex-col justify-center text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-black text-[var(--cres-white)] mb-4 underline-custom">
                  Why Spreadsheets Break Businesses
                </h2>
                <p className="text-lg text-[var(--cres-white)]/80 max-w-3xl lg:max-w-none mx-auto lg:mx-0 mb-8">Operational chaos without ERP: duplicated data, no single source of truth, no audit trail. Custom ERP gives you clarity, control, and scalability.</p>
                <h2 className="text-2xl md:text-3xl font-black text-[var(--cres-white)] mb-4 underline-custom">
                  When Off-the-Shelf ERPs Fail
                </h2>
                <p className="text-lg md:text-xl text-[var(--cres-white)]/80 max-w-3xl lg:max-w-none mx-auto lg:mx-0">
                  Generic ERPs force you to change your business. We build ERPs that adapt to yours.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 flex-1 min-w-0">
              <div className="bg-black/80 backdrop-blur-sm border border-red-500/30 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-red-500 mb-4 flex items-center gap-2">
                  <i className="fas fa-times-circle"></i>
                  Generic ERPs
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500">•</span>
                    <span className="text-[var(--cres-white)]/90">Force you to change your processes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500">•</span>
                    <span className="text-[var(--cres-white)]/90">Expensive licensing and hidden costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500">•</span>
                    <span className="text-[var(--cres-white)]/90">Slow implementation (months to years)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500">•</span>
                    <span className="text-[var(--cres-white)]/90">Limited customization options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500">•</span>
                    <span className="text-[var(--cres-white)]/90">Vendor lock-in and dependency</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black/80 backdrop-blur-sm border border-green-500/30 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-green-500 mb-4 flex items-center gap-2">
                  <i className="fas fa-check-circle"></i>
                  Custom ERP Systems
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500">•</span>
                    <span className="text-[var(--cres-white)]/90">Built around your existing processes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500">•</span>
                    <span className="text-[var(--cres-white)]/90">Transparent pricing, no hidden fees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500">•</span>
                    <span className="text-[var(--cres-white)]/90">Faster deployment (weeks to months)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500">•</span>
                    <span className="text-[var(--cres-white)]/90">Unlimited customization and flexibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500">•</span>
                    <span className="text-[var(--cres-white)]/90">You own the code and data</span>
                  </li>
                </ul>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHASED ERP APPROACH */}
      <section className="py-16 md:py-20 bg-[var(--cres-secondary-bg)] relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[var(--cres-white)] mb-4 underline-custom">
                Your Phased ERP Approach
              </h2>
              <p className="text-lg md:text-xl text-[var(--cres-white)]/80 max-w-3xl mx-auto">
                We build production-ready modules incrementally, so you start seeing value immediately.
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              {[
                {
                  phase: 'Phase 1: Foundation',
                  description: 'Core modules that solve immediate problems',
                  modules: ['User management & authentication', 'Role-based access control', 'Core data models', 'Basic reporting dashboards']
                },
                {
                  phase: 'Phase 2: Operations',
                  description: 'Business logic and workflow automation',
                  modules: ['Project & task management', 'Approval workflows', 'Document management', 'Basic integrations']
                },
                {
                  phase: 'Phase 3: Finance',
                  description: 'Financial systems and revenue tracking',
                  modules: ['Billing & invoicing', 'Subscription management', 'Revenue dashboards', 'Payment processing']
                },
                {
                  phase: 'Phase 4: Intelligence',
                  description: 'Analytics, automation, and advanced features',
                  modules: ['Advanced analytics & reporting', 'AI-powered automation', 'Predictive insights', 'Mobile applications']
                }
              ].map((phase, i) => (
                <div key={i} className="bg-black/80 backdrop-blur-sm border border-white/20 p-6 md:p-8 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl font-black text-[var(--cres-orange-primary)]">0{i + 1}</span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-[var(--cres-white)]">{phase.phase}</h3>
                      <p className="text-sm md:text-base text-[var(--cres-white)]/70">{phase.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {phase.modules.map((module, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-[var(--cres-orange-primary)]">•</span>
                        <span className="text-[var(--cres-white)]/90">{module}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CORE ERP MODULES */}
      <section className="py-16 md:py-20 bg-[var(--cres-primary-bg)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Core ERP Modules We Build</h2>
            <p className="text-white/75 max-w-3xl mx-auto">Each module is custom-fitted to your workflow so teams can work from one source of truth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Finance',
                body: 'Billing, invoicing, payment tracking, reconciliations, and cashflow visibility in one place. Finance teams stop chasing reports and start managing real-time numbers.',
              },
              {
                title: 'Inventory',
                body: 'Stock levels, reorder points, movement tracking, and issue logs. Inventory teams reduce losses, avoid stock-outs, and forecast with confidence.',
              },
              {
                title: 'HR',
                body: 'Employee records, onboarding workflows, leave management, and role-based access. HR operations become structured, auditable, and easier to scale.',
              },
              {
                title: 'Operations',
                body: 'Task routing, approvals, assignment chains, and process status visibility. Operations move from chat-based follow-up to system-driven execution.',
              },
              {
                title: 'Reporting',
                body: 'Management dashboards and department-level reports with live data views. Decision makers get operational visibility without waiting for month-end compilations.',
              },
            ].map((module) => (
              <article key={module.title} className="rounded-2xl border border-white/10 bg-black/40 p-6">
                <h3 className="text-xl font-bold text-[var(--cres-orange-primary)] mb-2">{module.title}</h3>
                <p className="text-white/80 leading-relaxed">{module.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CASE PROOF */}
      <section className="py-14 bg-[var(--cres-secondary-bg)] border-y border-white/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.22em] text-white/60 mb-2">Case Proof</p>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Real System. Real Numbers. Real Kenyan Context.</h2>
          <p className="text-white/80 mb-6">
            Finance platform build currently supporting <strong>127 active users</strong> and tracking <strong>KES 4.97M</strong> in live revenue workflows.
          </p>
          <Link href="/finance-platforms" className="inline-flex items-center rounded-lg bg-[var(--cres-orange-primary)] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#E87528]">
            View Finance Platform Case Context
          </Link>
        </div>
      </section>

      {/* GOVERNANCE & SECURITY */}
      <section className="py-16 md:py-20 bg-[var(--cres-primary-bg)] relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[var(--cres-white)] mb-4 underline-custom">
                Governance & Security
              </h2>
              <p className="text-lg md:text-xl text-[var(--cres-white)]/80 max-w-3xl mx-auto">
                Enterprise-grade security and governance built into every ERP module.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: 'Access Control',
                  items: ['Role-based permissions', 'Multi-factor authentication', 'Session management', 'IP whitelisting']
                },
                {
                  title: 'Data Security',
                  items: ['Encryption at rest & in transit', 'Regular security audits', 'Data backup & recovery', 'Compliance frameworks']
                },
                {
                  title: 'Audit & Compliance',
                  items: ['Complete audit trails', 'Change tracking', 'Compliance reporting', 'Data retention policies']
                }
              ].map((section, i) => (
                <div key={i} className="bg-black/80 backdrop-blur-sm border border-white/20 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-[var(--cres-orange-primary)] mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[var(--cres-orange-primary)]">•</span>
                        <span className="text-[var(--cres-white)]/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REAL USE CASES */}
      <section className="py-16 md:py-20 bg-[var(--cres-secondary-bg)] relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[var(--cres-white)] mb-4 underline-custom">
                Real Use Cases
              </h2>
              <p className="text-lg md:text-xl text-[var(--cres-white)]/80 max-w-3xl mx-auto">
                ERP systems we've built for finance, operations, and talent management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  category: 'Finance',
                  title: 'Financial Management ERP',
                  description: 'Complete financial system with billing, invoicing, revenue tracking, and financial dashboards.',
                  features: ['Billing & subscriptions', 'Invoice management', 'Revenue dashboards', 'Financial reporting']
                },
                {
                  category: 'Operations',
                  title: 'Operations Management ERP',
                  description: 'End-to-end operations system managing projects, workflows, approvals, and performance.',
                  features: ['Project management', 'Workflow automation', 'Approval chains', 'Performance analytics']
                },
                {
                  category: 'Talent',
                  title: 'Talent Management ERP',
                  description: 'HR and talent system with recruitment, onboarding, performance tracking, and payroll.',
                  features: ['Recruitment workflows', 'Employee management', 'Performance tracking', 'Payroll integration']
                }
              ].map((useCase, i) => (
                <div key={i} className="bg-black/80 backdrop-blur-sm border border-white/20 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="text-sm font-bold text-[var(--cres-orange-primary)] mb-2">{useCase.category}</div>
                  <h3 className="text-xl font-bold text-[var(--cres-white)] mb-3">{useCase.title}</h3>
                  <p className="text-[var(--cres-white)]/80 mb-4 leading-relaxed">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[var(--cres-orange-primary)]">•</span>
                        <span className="text-[var(--cres-white)]/90 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[var(--cres-primary-bg)] via-[#0D1520] to-[var(--cres-primary-bg)] relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-[var(--cres-white)] mb-6 underline-custom">
              Ready to Build Your Custom ERP?
            </h2>
            <p className="text-lg md:text-xl text-[var(--cres-white)]/80 mb-8 max-w-2xl mx-auto">
              Book a discovery session to discuss your business needs and see how we build ERPs that companies actually run on.
            </p>
            <a href="https://wa.me/254708805496?text=Hi%2C%20I'd%20like%20to%20book%20a%20systems%20discovery%20session%20with%20CRES%20Dynamics." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[#E87528] text-[var(--cres-white)] font-bold text-lg md:text-xl px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500 uppercase tracking-wide">
              Book a Systems Discovery Session
              <i className="fas fa-chevron-right text-sm"></i>
            </a>
            <a href="tel:+254708805496" className="inline-flex items-center gap-2 border-2 border-[var(--cres-orange-primary)] text-[var(--cres-white)] font-bold text-lg md:text-xl px-8 py-4 rounded-xl hover:bg-[var(--cres-orange-primary)]/10 transition-all duration-500 uppercase tracking-wide mt-4 sm:mt-0 sm:ml-4">
              Call 0708 805 496
            </a>
          </div>
        </div>
      </section>

      {/* ERP FAQ */}
      <section className="py-16 md:py-20 bg-[var(--cres-primary-bg)]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-8 text-center">ERP Questions (Kenya)</h2>
          <div className="space-y-5">
            {erpFaqs.map((item) => (
              <div key={item.q} className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <h3 className="text-lg font-bold text-white mb-2">{item.q}</h3>
                <p className="text-white/80">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              { href: '/finance-platforms', label: 'Finance Platforms' },
              { href: '/operations-workflow', label: 'Operations & Workflow' },
              { href: '/case-studies', label: 'Case Studies' },
              { href: '/insights', label: 'Insights: ERP Cost in Kenya' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="rounded-lg border border-white/20 px-3 py-1.5 text-xs font-semibold hover:bg-white/10">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
