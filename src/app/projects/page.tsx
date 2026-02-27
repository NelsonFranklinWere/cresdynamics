import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ProjectsPage() {
  const projects = [
    {
      name: 'Optiohire',
      tagline: 'Smart hiring and talent operations',
      description: 'A platform built to streamline recruitment, candidate pipeline, and hiring operations so teams scale without chaos. Structured workflows, visibility, and control for talent acquisition.',
      highlight: 'Hiring systems that scale',
      href: '/cresos',
      color: 'from-amber-500/20 to-orange-600/10',
      border: 'border-amber-500/30',
    },
    {
      name: 'CresOS',
      tagline: 'Growth infrastructure in one system',
      description: 'Our internal growth operating system: sales, marketing, finance, and operations in one platform. Built for SMEs scaling beyond survival. KPI visibility, workflow clarity, structured decision-making.',
      highlight: 'The OS for growing businesses',
      href: '/cresos',
      color: 'from-[var(--cres-orange-primary)]/20 to-[var(--cres-orange-hover)]/10',
      border: 'border-[var(--cres-orange-primary)]/40',
    },
    {
      name: 'Zyra',
      tagline: 'Operations and workflow clarity',
      description: 'A system designed for operational clarity—workflow mapping, process visibility, staff accountability, and SOPs in one place. Order before expansion.',
      highlight: 'Order before scale',
      href: '/operations-workflow',
      color: 'from-[var(--cres-electric-teal)]/20 to-teal-600/10',
      border: 'border-[var(--cres-electric-teal)]/30',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <Header />

      <main className="pt-24">
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--cres-primary-bg)] via-[#0D1B2A] to-[#020611]" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-3xl md:text-5xl font-black mb-6">
              <span className="text-[var(--cres-orange-primary)]">Projects</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              Systems and products we build and run. Highlighting Optiohire, CresOS, and Zyra.
            </p>
          </div>
        </section>

        <section className="relative py-16 md:py-20 bg-[var(--cres-primary-bg)]">
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <div className="grid gap-8 md:gap-10">
              {projects.map((project, i) => (
                <div
                  key={project.name}
                  className={`rounded-2xl border bg-gradient-to-br ${project.color} ${project.border} p-8 md:p-10 hover:border-white/20 transition-colors`}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <span className="text-xs font-bold tracking-widest text-[var(--cres-orange-primary)] uppercase">
                        Featured project
                      </span>
                      <h2 className="text-2xl md:text-3xl font-black text-white mt-2 mb-1">
                        {project.name}
                      </h2>
                      <p className="text-white/90 font-semibold text-lg mb-4">
                        {project.tagline}
                      </p>
                      <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <p className="text-[var(--cres-electric-teal)] font-semibold text-sm">
                        {project.highlight}
                      </p>
                    </div>
                    <div className="shrink-0">
                      <Link
                        href={project.href}
                        className="inline-flex items-center gap-2 bg-white/10 hover:bg-[var(--cres-orange-primary)] text-white font-bold text-sm px-5 py-2.5 rounded-lg uppercase tracking-wide transition-colors"
                      >
                        Learn more
                        <i className="fas fa-chevron-right text-xs" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-16 bg-[var(--cres-secondary-bg)]">
          <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
            <p className="text-white/80 mb-6">Want to build something with us?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
