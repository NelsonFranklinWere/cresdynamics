import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function WhyUsPage() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <Header />

      {/* 1. HERO */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--cres-deep-navy)] via-[#0D1B2A] to-[#0B0F14]" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
            Why Serious Businesses <span className="text-[var(--cres-orange-primary)]">Choose CRES Dynamics</span>
          </h1>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-12 leading-relaxed">
            We don&apos;t build websites. We build operational systems that drive growth, visibility, and measurable business control.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[#E87528] text-white font-bold text-sm px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wide"
            >
              Book Strategy Call
              <i className="fas fa-chevron-right text-xs" />
            </Link>
            <Link
              href="/how-we-build"
              className="inline-flex items-center gap-2 border border-white/40 hover:bg-white/5 text-white font-bold text-sm px-6 py-3 rounded-lg transition-all duration-300 uppercase tracking-wide"
            >
              See Our Systems
              <i className="fas fa-arrow-right text-xs" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. THE REAL PROBLEM */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-[var(--cres-primary-bg)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-black text-white mb-8 text-center">
            Most Agencies Build Pages. <span className="text-[var(--cres-orange-primary)]">We Build Engines.</span>
          </h2>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 text-center">
            Businesses don&apos;t fail for lack of effort. They fail because they lack systems.
          </p>
          <ul className="space-y-4 max-w-2xl mx-auto">
            {[
              'No CRM – leads and customers live in spreadsheets and inboxes.',
              'No financial visibility – revenue and cash flow are guesswork.',
              'No automation – repetitive work burns time and creates errors.',
              'No measurable data – decisions are gut feel, not evidence.',
              'No growth structure – scaling means chaos, not control.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-white/90">
                <span className="text-[var(--cres-orange-primary)] mt-1.5 text-sm">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-[var(--cres-electric-teal)] font-semibold text-center mt-10 text-lg">
            CRES Dynamics exists as the correction to that chaos.
          </p>
        </div>
      </section>

      {/* 2b. HOW WE THINK — DIFFERENTIATION */}
      <section className="relative py-20 md:py-28 bg-[var(--cres-secondary-bg)]">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-black text-white mb-6 text-center">
            How We <span className="text-[var(--cres-orange-primary)]">Think</span>
          </h2>
          <ul className="space-y-3 max-w-2xl mx-auto">
            {[
              'We build systems, not pages.',
              'We focus on revenue, not aesthetics.',
              'We start from structure, not design.',
              'We think in scalability from day one.',
              'We combine business thinking and tech execution.',
              'We move fast but deliberately.',
              'We operate with discipline.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-white/90">
                <span className="text-[var(--cres-orange-primary)] mt-1 shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-12 p-6 rounded-xl bg-black/40 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-[var(--cres-orange-primary)] mb-2">Philosophy: Structure before scale</h3>
            <p className="text-white/80 text-sm">We map processes and data first. When the structure is right, scaling and design follow. No building on sand.</p>
          </div>
        </div>
      </section>

      {/* 2c. WHY CRES — DIFFERENT CATEGORY */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-[var(--cres-primary-bg)]" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-3">
              Why <span className="text-[var(--cres-orange-primary)]">CRES</span>
            </h2>
            <p className="text-xl md:text-2xl font-black text-white mb-4 leading-tight">
              Not Another Tech Vendor.
              <br />
              A Different Category.
            </p>
            <p className="text-white/75 text-sm md:text-base leading-relaxed">
              We don&apos;t compete with web agencies or freelancers. We sit at a different layer – the infrastructure
              between your business and its ability to scale. When you outgrow campaigns and templates, this is the layer
              that actually runs the company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: 'We own our technology',
                body: 'The Cres Core Engine is proprietary. No licensing fees to third-party platforms, no dependency on SaaS tools that change pricing or shut down. Your system is built on infrastructure we control, so you are not exposed to surprise deprecations.',
              },
              {
                title: 'We start with your business, not a brief',
                body: 'Before any code is written, we understand how your business actually operates – decisions, approvals, money flows, edge cases. We build around your reality, not a generic template or theme.',
              },
              {
                title: 'We have proof in the Nairobi market',
                body: '127 active users. KES 4.97M tracked. Live systems across logistics, church management, finance, and operations. Not demos – production systems that have to work every day.',
              },
              {
                title: 'We understand Kenyan business realities',
                body: 'Mpesa integration. Kenyan accounting and regulatory expectations. County business contexts and how Nairobi companies actually sell and collect. We build for that world – not how Silicon Valley imagines it.',
              },
              {
                title: 'We stay after the launch',
                body: 'Every system comes with a support structure and a relationship. We are an infrastructure partner, not a vendor who hands over and disappears. Systems are monitored, improved, and kept accountable over time.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-7 shadow-[0_18px_40px_rgba(0,0,0,0.55)]"
              >
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2d. COMPARISON TABLE */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-[var(--cres-primary-bg)]" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-black text-white mb-6 text-center">
            Freelancer vs Agency vs <span className="text-[var(--cres-orange-primary)]">CRES Dynamics</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-white/20 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-black/60">
                  <th className="text-left p-4 text-white/90 font-bold border-b border-white/20">Criteria</th>
                  <th className="text-left p-4 text-white/80 border-b border-white/20">Freelancer</th>
                  <th className="text-left p-4 text-white/80 border-b border-white/20">Agency</th>
                  <th className="text-left p-4 text-[var(--cres-orange-primary)] border-b border-white/20">CRES Dynamics</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-white/10"><td className="p-4 font-medium text-white/90">Deliverable</td><td className="p-4 text-white/70">Pages, templates</td><td className="p-4 text-white/70">Campaigns, sites</td><td className="p-4 text-white/90">Systems (ERP, finance, automation)</td></tr>
                <tr className="border-b border-white/10"><td className="p-4 font-medium text-white/90">Focus</td><td className="p-4 text-white/70">Task completion</td><td className="p-4 text-white/70">Aesthetics, campaigns</td><td className="p-4 text-white/90">Revenue, visibility, control</td></tr>
                <tr className="border-b border-white/10"><td className="p-4 font-medium text-white/90">Starting point</td><td className="p-4 text-white/70">Design or code</td><td className="p-4 text-white/70">Creative brief</td><td className="p-4 text-white/90">Structure, process, data</td></tr>
                <tr className="border-b border-white/10"><td className="p-4 font-medium text-white/90">Scale</td><td className="p-4 text-white/70">Single projects</td><td className="p-4 text-white/70">Multiple clients, fixed scope</td><td className="p-4 text-white/90">Scalable architecture from day one</td></tr>
                <tr><td className="p-4 font-medium text-white/90">Outcome</td><td className="p-4 text-white/70">Deliverable handed off</td><td className="p-4 text-white/70">Launch and handoff</td><td className="p-4 text-white/90">System you run and extend</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. OUR PHILOSOPHY */}
      <section className="relative py-20 md:py-28 bg-[var(--cres-secondary-bg)]">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-black text-white mb-4 text-center">
            We Build for <span className="text-[var(--cres-orange-primary)]">Control. Scale. Longevity.</span>
          </h2>
          <p className="text-white/70 text-center mb-16 max-w-2xl mx-auto">
            Three pillars guide every system we design and deploy.
          </p>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                icon: 'fas fa-sitemap',
                title: 'Strategic Architecture',
                body: 'Every solution is structured, not patched. We map processes and data before we build, so the system fits the business—not the other way around.',
              },
              {
                icon: 'fas fa-chart-line',
                title: 'Operational Visibility',
                body: 'Finance, CRM, and workflow clarity in one place. No more silos. Role-based dashboards so the right people see the right data.',
              },
              {
                icon: 'fas fa-robot',
                title: 'Automation & Intelligence',
                body: 'Systems that reduce manual work. Automated workflows, triggers, and—where it adds value—AI that supports decisions instead of replacing judgment.',
              },
            ].map((pillar, i) => (
              <div key={i} className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-white/20 transition-colors duration-300">
                <div className="text-2xl text-[var(--cres-orange-primary)] mb-4">
                  <i className={pillar.icon} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                <p className="text-white/80 leading-relaxed">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHAT MAKES US DIFFERENT — 6 CARDS */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-[var(--cres-primary-bg)]" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-black text-white mb-4 text-center">
            What Makes Us <span className="text-[var(--cres-orange-primary)]">Different</span>
          </h2>
          <p className="text-white/70 text-center mb-16 max-w-xl mx-auto">
            Not claims. Foundations.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: 'fas fa-cubes', title: 'System-First Thinking', body: 'We start with your operations and data, not a template. Every build is architected for your business logic, roles, and growth path. No one-size-fits-all.' },
              { icon: 'fas fa-bolt', title: 'Speed Without Compromise', body: 'Phased delivery so you see value early. We ship production-ready modules, then iterate. Fast does not mean fragile.' },
              { icon: 'fas fa-coins', title: 'Revenue-Focused Builds', body: 'Systems that track revenue, subscriptions, and cash flow. Dashboards that answer "Where are we?" and "What’s next?"—not just pretty charts.' },
              { icon: 'fas fa-handshake', title: 'Long-Term Partnership Model', body: 'We don’t hand off and disappear. We support, extend, and optimize. Your system evolves with your business.' },
              { icon: 'fas fa-code', title: 'In-House Technical Depth', body: 'Architecture, backend, integrations, and security under one roof. No outsourcing core build. No blame games.' },
              { icon: 'fas fa-shield-alt', title: 'Infrastructure-Level Security', body: 'RBAC, audit trails, encryption, and governance built in from day one. Built for businesses that take compliance seriously.' },
            ].map((card, i) => (
              <div key={i} className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-7 hover:border-[var(--cres-orange-primary)]/30 transition-colors duration-300">
                <div className="text-xl text-[var(--cres-orange-primary)] mb-3">
                  <i className={card.icon} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE CRES ADVANTAGE FRAMEWORK — 5 STEPS */}
      <section className="relative py-20 md:py-28 bg-[var(--cres-secondary-bg)]">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-black text-white mb-4 text-center">
            The Cres Advantage <span className="text-[var(--cres-orange-primary)]">Framework</span>
          </h2>
          <p className="text-white/70 text-center mb-16 max-w-xl mx-auto">
            How we work. Enterprise-grade discipline, no theater.
          </p>
          <div className="space-y-6">
            {[
              { step: '1', title: 'Diagnose', body: 'We map your current state: processes, data flows, pain points, and goals. No build before clarity.' },
              { step: '2', title: 'Architect', body: 'We design the system—modules, roles, integrations, and security—aligned to your operations and scale.' },
              { step: '3', title: 'Build', body: 'We build in phases. Core first, then automation and intelligence. Each phase is production-ready.' },
              { step: '4', title: 'Integrate', body: 'We connect to your existing tools, payments, and data sources. One coherent system, not another silo.' },
              { step: '5', title: 'Optimize', body: 'We monitor, refine, and extend. Performance, new features, and governance as you grow.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start bg-black/40 border border-white/10 rounded-xl p-6 md:p-8">
                <span className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--cres-orange-primary)]/20 text-[var(--cres-orange-primary)] font-black text-lg flex items-center justify-center">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/80 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. REAL IMPACT */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-[var(--cres-primary-bg)]" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-black text-white mb-4 text-center">
            Systems That Deliver <span className="text-[var(--cres-orange-primary)]">Measurable Results</span>
          </h2>
          <p className="text-white/70 text-center mb-16 max-w-xl mx-auto">
            What changes when you run on real infrastructure.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { label: 'Reduced manual workload', desc: 'Automation and workflows that eliminate repetitive, error-prone tasks.' },
              { label: 'Increased lead tracking', desc: 'CRM and pipeline visibility so no opportunity falls through the cracks.' },
              { label: 'Clear financial visibility', desc: 'Revenue, invoices, and cash position in one place, in real time.' },
              { label: 'Automated workflows', desc: 'Approvals, notifications, and triggers that run without constant intervention.' },
              { label: 'Growth dashboards', desc: 'KPIs and reports that answer "How are we doing?" at a glance.' },
            ].map((impact, i) => (
              <div key={i} className="bg-black/50 border border-white/10 rounded-xl p-6 text-center">
                <div className="text-2xl font-black text-[var(--cres-orange-primary)] mb-2">{impact.label}</div>
                <p className="text-white/75 text-sm leading-relaxed">{impact.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHO WE WORK BEST WITH */}
      <section className="relative py-20 md:py-28 bg-[var(--cres-secondary-bg)]">
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-black text-white mb-6">
            Who We Work <span className="text-[var(--cres-orange-primary)]">Best With</span>
          </h2>
          <p className="text-white/80 text-lg mb-10">
            We are selective. We work best with:
          </p>
          <ul className="space-y-4 text-left max-w-md mx-auto">
            {[
              'Growing SMEs that need structure before scale.',
              'Church and education institutions that need membership, finance, and reporting in one system.',
              'Retail and service businesses ready to move beyond spreadsheets and ad-hoc tools.',
              'Founders and leadership teams serious about structure, visibility, and long-term control.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-white/90">
                <span className="text-[var(--cres-orange-primary)] mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-white/70 mt-10 text-sm">
            If that describes you, we&apos;re aligned.
          </p>
        </div>
      </section>

      {/* 8. FINAL AUTHORITY CLOSE */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--cres-primary-bg)] to-[#0B0F14]" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-8">
            If You Want a Website, There Are Many Agencies.
            <br />
            <span className="text-[var(--cres-orange-primary)]">If You Want a System, You&apos;re in the Right Place.</span>
          </h2>
          <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
            CRES Dynamics builds operational infrastructure for serious businesses. ERP, finance, CRM, automation—designed for control, scale, and longevity.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[#E87528] text-white font-bold text-sm px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wide"
          >
            Schedule Strategic Call
            <i className="fas fa-chevron-right text-xs" />
          </Link>
          <p className="text-white/50 text-sm mt-8">
            Professional. Minimal. Powerful.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
