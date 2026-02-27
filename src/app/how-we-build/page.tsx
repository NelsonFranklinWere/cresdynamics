import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HowWeBuildPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      {/* HERO */}
      <section className="py-20 bg-gradient-to-br from-[var(--cres-primary-bg)] to-[var(--cres-secondary-bg)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--cres-white)] mb-6" style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)' }}>
              Our System Engineering <span className="text-[var(--cres-orange-primary)]">Framework</span>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--cres-white)] max-w-4xl mx-auto" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
              Diagnose, Architect, Build, Deploy, Optimize, Scale. Structured implementation with clear milestones, accountability, and reporting at every phase.
            </p>
          </div>
        </div>
      </section>

      {/* PHASE 1: Process & Data Mapping */}
      <section id="phase-1" className="py-16 md:py-20 bg-[var(--cres-primary-bg)] relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <span className="text-[var(--cres-orange-primary)] font-black text-sm uppercase tracking-wider">Phase 1 — Diagnose</span>
              <h2 className="text-3xl md:text-4xl font-black text-[var(--cres-white)] mt-2 mb-4 underline-custom">
                Process & Data Mapping
              </h2>
              <p className="text-lg md:text-xl text-[var(--cres-white)]/80 max-w-3xl mx-auto">
                We map your existing processes, data flows, and decision points before we write code. No guesswork.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { title: 'Current state analysis', desc: 'We document existing workflows, data sources, and pain points. We identify manual steps and bottlenecks.' },
                { title: 'Process design', desc: 'We design optimized workflows with clear decision points, approval chains, and automation opportunities.' },
                { title: 'Validation', desc: 'We validate process and data models with stakeholders and establish success metrics.' },
              ].map((item, i) => (
                <div key={i} className="bg-black/80 backdrop-blur-sm border border-white/20 p-6 rounded-xl shadow-lg">
                  <div className="text-2xl font-black text-[var(--cres-orange-primary)] mb-3">{i + 1}</div>
                  <h3 className="text-xl font-bold text-[var(--cres-white)] mb-2">{item.title}</h3>
                  <p className="text-[var(--cres-white)]/80 leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PHASE 2: Core ERP Architecture */}
      <section id="phase-2" className="py-16 md:py-20 bg-[var(--cres-secondary-bg)] relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <span className="text-[var(--cres-orange-primary)] font-black text-sm uppercase tracking-wider">Phase 2 — Architect & Build</span>
              <h2 className="text-3xl md:text-4xl font-black text-[var(--cres-white)] mt-2 mb-4 underline-custom">
                Core ERP Architecture
              </h2>
              <p className="text-lg md:text-xl text-[var(--cres-white)]/80 max-w-3xl mx-auto">
                We architect the core system: identity, data models, role-based access, and APIs. Modular and scalable.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-black/80 backdrop-blur-sm border border-white/20 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[var(--cres-orange-primary)] mb-4">Architecture principles</h3>
                <ul className="space-y-3">
                  {['Modular design—add or scale modules independently', 'API-first for integrations and future extensions', 'Database design optimized for your query patterns', 'Security and RBAC designed in from the start'].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[var(--cres-orange-primary)]">•</span>
                      <span className="text-[var(--cres-white)]/90">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-black/80 backdrop-blur-sm border border-white/20 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[var(--cres-orange-primary)] mb-4">Core build</h3>
                <ul className="space-y-3">
                  {['User management and authentication', 'Role-based access control (RBAC)', 'Core data models and business logic', 'Workflow and approval engines', 'Basic reporting and exports'].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[var(--cres-orange-primary)]">•</span>
                      <span className="text-[var(--cres-white)]/90">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHASE 3: Automation & Intelligence */}
      <section id="phase-3" className="py-16 md:py-20 bg-[var(--cres-primary-bg)] relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <span className="text-[var(--cres-orange-primary)] font-black text-sm uppercase tracking-wider">Phase 3 — Deploy & Optimize</span>
              <h2 className="text-3xl md:text-4xl font-black text-[var(--cres-white)] mt-2 mb-4 underline-custom">
                Automation & Intelligence
              </h2>
              <p className="text-lg md:text-xl text-[var(--cres-white)]/80 max-w-3xl mx-auto">
                We add automation pipelines, dashboards, and decision support on top of the core system.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-black/80 backdrop-blur-sm border border-white/20 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[var(--cres-orange-primary)] mb-4">Automation</h3>
                <ul className="space-y-3">
                  {['Automated workflows and approval chains', 'Scheduled tasks and batch processing', 'Event-driven triggers', 'AI-powered decision support where it adds value'].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[var(--cres-orange-primary)]">•</span>
                      <span className="text-[var(--cres-white)]/90">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-black/80 backdrop-blur-sm border border-white/20 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[var(--cres-orange-primary)] mb-4">Analytics & reporting</h3>
                <ul className="space-y-3">
                  {['Real-time dashboards and KPIs', 'Custom reports and data exports', 'Data pipelines and ETL where needed', 'Forecasting and predictive analytics where applicable'].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[var(--cres-orange-primary)]">•</span>
                      <span className="text-[var(--cres-white)]/90">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHASE 4: Security, Governance & Scale */}
      <section id="security" className="py-16 md:py-20 bg-[var(--cres-secondary-bg)] relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <span className="text-[var(--cres-orange-primary)] font-black text-sm uppercase tracking-wider">Phase 4 — Scale</span>
              <h2 className="text-3xl md:text-4xl font-black text-[var(--cres-white)] mt-2 mb-4 underline-custom">
                Security, Governance & Scale
              </h2>
              <p className="text-lg md:text-xl text-[var(--cres-white)]/80 max-w-3xl mx-auto">
                We deploy with production-readiness: role-based access, audit trails, and a system testing discipline.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { title: 'Security', items: ['Role-based access control (RBAC)', 'Data encryption at rest and in transit', 'Audit trails and logging', 'Compliance-aware design'] },
                { title: 'Governance', items: ['Access control policies', 'Data retention and change management', 'Compliance reporting', 'Audit-ready exports'] },
                { title: 'Scale', items: ['Horizontal scaling architecture', 'Database and query optimization', 'Caching and CDN where needed', 'Monitoring and uptime'] },
              ].map((block, i) => (
                <div key={i} className="bg-black/80 backdrop-blur-sm border border-white/20 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-[var(--cres-orange-primary)] mb-4">{block.title}</h3>
                  <ul className="space-y-2">
                    {block.items.map((item, idx) => (
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

      {/* Production-readiness standards */}
      <section className="py-16 md:py-20 bg-[var(--cres-primary-bg)] relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[var(--cres-white)] mb-4 underline-custom">
                Production-Readiness Standards
              </h2>
              <p className="text-lg md:text-xl text-[var(--cres-white)]/80 max-w-3xl mx-auto">
                Every system we deploy meets these standards. No shortcuts.
              </p>
            </div>
            <div className="bg-black/80 backdrop-blur-sm border border-white/20 p-6 md:p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
              <ul className="space-y-4">
                {[
                  'Role-based access control so users see only what they need.',
                  'Audit trails for critical actions so you have an audit-ready record.',
                  'System testing discipline: we test before we deploy.',
                  'Monitoring and alerting so we know when something breaks.',
                  'Documentation and handover so your team can operate and extend the system.',
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[var(--cres-orange-primary)] font-bold">✓</span>
                    <span className="text-[var(--cres-white)]/90">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[var(--cres-primary-bg)] via-[#0D1520] to-[var(--cres-primary-bg)] relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-[var(--cres-white)] mb-6 underline-custom">
              Ready to Build Your System?
            </h2>
            <p className="text-lg md:text-xl text-[var(--cres-white)]/80 mb-8 max-w-2xl mx-auto">
              Book a Systems Discovery Session. We map your needs, then show you how we architect and deploy.
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[#E87528] text-[var(--cres-white)] font-bold text-base md:text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500 uppercase tracking-wide">
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
