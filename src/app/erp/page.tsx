import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ERPPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      {/* HERO SECTION */}
      <section className="py-20 bg-gradient-to-br from-[var(--cres-primary-bg)] to-[var(--cres-secondary-bg)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--cres-white)] mb-6" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)'}}>
              Custom ERP Systems for <span className="text-[var(--cres-orange-primary)]">Growing Businesses</span>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--cres-white)] max-w-4xl mx-auto mb-8" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}>
              When off-the-shelf ERPs fail, we build modular systems—including CresOS—that fit your business. Governance, security, production-grade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/cresos" className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[#E87528] text-[var(--cres-white)] font-bold text-lg px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wide">
                Explore CresOS
                <i className="fas fa-chevron-right text-sm"></i>
              </a>
              <a href="/contact" className="inline-flex items-center gap-2 border-2 border-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-primary)]/10 text-[var(--cres-white)] font-bold text-lg px-6 py-3 rounded-xl transition-all duration-300 uppercase tracking-wide">
                Book a Systems Discovery Session
                <i className="fas fa-arrow-right text-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHEN OFF-THE-SHELF ERPs FAIL */}
      <section className="py-16 md:py-20 bg-[var(--cres-primary-bg)] relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[var(--cres-white)] mb-4 underline-custom">
                When Off-the-Shelf ERPs Fail
              </h2>
              <p className="text-lg md:text-xl text-[var(--cres-white)]/80 max-w-3xl mx-auto">
                Generic ERPs force you to change your business. We build ERPs that adapt to yours.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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
            <a href="/contact" className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[#E87528] text-[var(--cres-white)] font-bold text-lg md:text-xl px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500 uppercase tracking-wide">
              Book a Systems Discovery Session
              <i className="fas fa-chevron-right text-sm"></i>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
