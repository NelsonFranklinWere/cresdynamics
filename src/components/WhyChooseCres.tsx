export default function WhyChooseCres() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-[var(--cres-primary-bg)] to-[var(--cres-secondary-bg)] relative">
      <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-10"></div>
      {/* Enhanced overlay for better content visibility */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-[var(--cres-white)] mb-6 md:mb-8 underline-custom" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)'}}>
            Systems We <span className="text-[var(--cres-orange-primary)]">Build</span>
          </h2>
          <p className="text-lg md:text-2xl text-[var(--cres-white)] max-w-4xl mx-auto" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}>
            We don&apos;t build websites. We engineer proprietary operating environments—each system centralizes data and enables measurable decisions.
          </p>
        </div>

        {/* 4 SYSTEM CARDS: CresOS, Finance, Operations, AI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {[
            {
              icon: <i className="fas fa-cubes"></i>,
              title: 'CresOS – Business Operating System',
              subtitle: 'Identity & Access (RBAC/ABAC) • Operations Management • Finance Visibility • Client & Engagement Tracking • Analytics & Dashboards',
              problem: 'What business problem it solves:',
              problemText: 'Replaces fragmented tools with a single modular ERP: one identity layer, one operations layer, one finance layer.',
              data: 'What data it centralizes:',
              dataText: 'Users, roles, permissions, projects, tasks, financial metrics, client records, engagement data.',
              decisions: 'What decisions it enables:',
              decisionsText: 'Who can see what; resource allocation; cash position; pipeline and performance at a glance.'
            },
            {
              icon: <i className="fas fa-dollar-sign"></i>,
              title: 'Finance & Revenue Systems',
              subtitle: 'Subscription billing • Invoices & reconciliation • Revenue dashboards • Payment tracking • Usage-based billing • Export to accounting tools',
              problem: 'What business problem it solves:',
              problemText: 'Eliminates manual billing, delayed reconciliation, and lack of revenue visibility.',
              data: 'What data it centralizes:',
              dataText: 'Subscriptions, invoices, payments, revenue by product/segment, usage metrics.',
              decisions: 'What decisions it enables:',
              decisionsText: 'Cash flow forecasting, revenue recognition, subscription health, pricing and packaging.'
            },
            {
              icon: <i className="fas fa-project-diagram"></i>,
              title: 'Operations & Workflow Systems',
              subtitle: 'Project tracking • Task ownership • Approvals • Team performance dashboards',
              problem: 'What business problem it solves:',
              problemText: 'Removes blind spots in who owns what, what is stuck, and how teams perform.',
              data: 'What data it centralizes:',
              dataText: 'Projects, tasks, assignees, approval chains, status, deadlines, performance metrics.',
              decisions: 'What decisions it enables:',
              decisionsText: 'Bottleneck identification, capacity planning, accountability, and prioritization.'
            },
            {
              icon: <i className="fas fa-robot"></i>,
              title: 'AI & Automation Infrastructure',
              subtitle: 'Automated follow-ups • Workflow triggers • Decision support systems • CRM automation',
              problem: 'What business problem it solves:',
              problemText: 'Reduces manual, repetitive work and ensures consistent execution of follow-ups and workflows.',
              data: 'What data it centralizes:',
              dataText: 'Customer interactions, workflow states, triggers, automation logs, CRM activity.',
              decisions: 'What decisions it enables:',
              decisionsText: 'Next-best action, lead routing, prioritization, and exception handling.'
            }
          ].map((system, i) => (
            <div key={i} className="group bg-black/80 backdrop-blur-sm border border-white/20 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-xl md:text-2xl text-[var(--cres-orange-primary)] group-hover:scale-110 transition-transform">{system.icon}</div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-[var(--cres-white)] group-hover:text-[var(--cres-orange-primary)] transition-colors mb-1">
                    {system.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[var(--cres-white)]/80 font-medium">
                    {system.subtitle}
                  </p>
                </div>
              </div>
              <div className="space-y-3 text-left">
                <div>
                  <p className="text-xs md:text-sm font-bold text-[var(--cres-orange-primary)] mb-1">{system.problem}</p>
                  <p className="text-xs md:text-sm text-[var(--cres-white)]/90">{system.problemText}</p>
                </div>
                <div>
                  <p className="text-xs md:text-sm font-bold text-[var(--cres-orange-primary)] mb-1">{system.data}</p>
                  <p className="text-xs md:text-sm text-[var(--cres-white)]/90">{system.dataText}</p>
                </div>
                <div>
                  <p className="text-xs md:text-sm font-bold text-[var(--cres-orange-primary)] mb-1">{system.decisions}</p>
                  <p className="text-xs md:text-sm text-[var(--cres-white)]/90">{system.decisionsText}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        </div>
      </div>
    </section>
  );
}
