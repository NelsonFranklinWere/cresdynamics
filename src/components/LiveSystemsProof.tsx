export default function LiveSystemsProof() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-[var(--cres-primary-bg)] to-[var(--cres-secondary-bg)] relative">
      <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-[var(--cres-white)] mb-6 md:mb-8 underline-custom" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)'}}>
              Live Systems in <span className="text-[var(--cres-orange-primary)]">Production</span>
            </h2>
            <p className="text-sm md:text-base text-[var(--cres-electric-teal)] font-semibold mb-2 uppercase tracking-wide">
              Trusted to Build Regional Digital Infrastructure
            </p>
            <p className="text-lg md:text-2xl text-[var(--cres-white)] max-w-4xl mx-auto" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}>
              Real systems. Real users. Real revenue. From enterprise systems and secure architecture to Church platforms—we deploy the engines enterprises run on.
            </p>
          </div>

          {/* PROOF CARDS: active users, revenue, roles, stack, uptime/performance where possible */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {[
              {
                title: 'Finance & Revenue Platform',
                users: '127',
                revenue: 'KES 4.97M',
                roles: 'Admin, Finance, Viewer',
                description: 'Live production system serving 127 active users, tracking KES 4.97M in revenue with role-based access.',
                features: ['Billing & subscriptions', 'Invoice management', 'Revenue dashboards', 'Role-based access'],
                stack: 'Next.js • PostgreSQL • Stripe • RBAC',
                uptime: '99.9%'
              },
              {
                title: 'Business Operations ERP',
                users: '89',
                revenue: 'KES 2.3M',
                roles: 'Manager, Member, Auditor',
                description: 'Operations system with 89 users, KES 2.3M tracked project value, approval chains, and audit trails.',
                features: ['Project workflows', 'Approval chains', 'Performance analytics', 'Audit trails'],
                stack: 'React • Node.js • MongoDB • Redis',
                uptime: '99.5%'
              },
              {
                title: 'Automation & AI System',
                users: '156',
                revenue: 'KES 1.8M',
                roles: 'Operator, Analyst, Admin',
                description: 'Automation platform with 156 users, KES 1.8M in automated transaction volume, workflow triggers, and decision support.',
                features: ['Automated follow-ups', 'Workflow automation', 'Decision support', 'Analytics pipelines'],
                stack: 'Python • FastAPI • PostgreSQL • AI/ML',
                uptime: '99.7%'
              }
            ].map((system, i) => (
              <div key={i} className="bg-black/80 backdrop-blur-sm border border-white/20 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-lg md:text-xl font-bold text-[var(--cres-white)] mb-4 group-hover:text-[var(--cres-orange-primary)] transition-colors">
                  {system.title}
                </h3>
                <div className="mb-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs md:text-sm text-[var(--cres-white)]/70">Active users</span>
                    <span className="text-xl md:text-2xl font-black text-[var(--cres-orange-primary)]">{system.users}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs md:text-sm text-[var(--cres-white)]/70">Revenue tracked</span>
                    <span className="text-lg md:text-xl font-bold text-[var(--cres-electric-teal)]">{system.revenue}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs md:text-sm text-[var(--cres-white)]/70">Roles</span>
                    <span className="text-sm font-medium text-[var(--cres-white)]/90">{system.roles}</span>
                  </div>
                  {system.uptime && (
                    <div className="flex items-center justify-between">
                      <span className="text-xs md:text-sm text-[var(--cres-white)]/70">Uptime</span>
                      <span className="text-sm font-medium text-green-400">{system.uptime}</span>
                    </div>
                  )}
                </div>
                <p className="text-sm md:text-base text-[var(--cres-white)]/90 mb-4 leading-relaxed">
                  {system.description}
                </p>
                <div className="mb-4">
                  <p className="text-xs md:text-sm font-bold text-[var(--cres-orange-primary)] mb-2">Capabilities</p>
                  <ul className="space-y-1">
                    {system.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[var(--cres-orange-primary)] text-xs">•</span>
                        <span className="text-xs md:text-sm text-[var(--cres-white)]/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-[var(--cres-white)]/60 font-mono">{system.stack}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a href="/case-studies" className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[#E87528] text-[var(--cres-white)] font-bold text-base md:text-lg px-6 md:px-8 py-3 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500 uppercase tracking-wide">
              View Case Proof
              <i className="fas fa-chevron-right text-sm"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
