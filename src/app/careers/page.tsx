import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CareersApplicationForm from '@/components/CareersApplicationForm';
import Link from 'next/link';

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <Header />

      <main className="pt-24">
        {/* HERO */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--cres-primary-bg)] via-[#0D1B2A] to-[#020611]" />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <p className="text-[11px] md:text-xs font-semibold tracking-[0.24em] uppercase text-white/70 mb-3">
              Careers — CRES Dynamics
            </p>
            <h1 className="text-3xl md:text-5xl font-black mb-6">
              Build the Systems
              <br />
              Kenya Runs On.
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              We&apos;re building the infrastructure layer for Kenyan business. If you want to build things that matter – with people
              who care about quality – this is the place.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#open-roles"
                className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide"
              >
                See Open Roles
              </Link>
              <Link
                href="/who-we-are"
                className="inline-flex items-center gap-2 border border-white/40 hover:bg-white/5 text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide"
              >
                Our Culture
              </Link>
            </div>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="relative py-16 bg-[var(--cres-primary-bg)]">
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4">
                We&apos;re Not Building
                <br />
                Another Tech Company.
                <br />
                We&apos;re Building Infrastructure.
              </h2>
              <p className="text-white/75 text-sm md:text-base mb-4">
                Every system we build runs real businesses. Real people depend on it. Real money moves through it. That&apos;s the
                weight of the work – and it&apos;s also what makes it worth doing.
              </p>
              <p className="text-white/75 text-sm md:text-base">
                CRES Dynamics was founded on one belief: that growing Kenyan businesses deserve world-class operational
                infrastructure – built for how they actually operate, not adapted from tools designed for someone else. We&apos;re
                building that. And we want people who want to build it with us.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-sm md:text-base">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4 md:p-5 text-center">
                <div className="text-2xl font-black text-[var(--cres-orange-primary)] mb-1">3</div>
                <div className="text-white/70 text-xs md:text-sm">Team Members</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4 md:p-5 text-center">
                <div className="text-2xl font-black text-[var(--cres-orange-primary)] mb-1">5+</div>
                <div className="text-white/70 text-xs md:text-sm">Active Systems in Production</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4 md:p-5 text-center">
                <div className="text-2xl font-black text-[var(--cres-orange-primary)] mb-1">127+</div>
                <div className="text-white/70 text-xs md:text-sm">Daily Active Users</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4 md:p-5 text-center">
                <div className="text-2xl font-black text-[var(--cres-orange-primary)] mb-1">2026</div>
                <div className="text-white/70 text-xs md:text-sm">Scaling Year</div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW WE WORK */}
        <section className="relative py-16 md:py-20 bg-[var(--cres-secondary-bg)]">
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <div className="text-center mb-10 md:mb-12">
              <p className="text-[11px] md:text-xs font-semibold tracking-[0.24em] uppercase text-white/60 mb-2">
                How We Work
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white">The CRES Standard.</h2>
              <p className="text-white/75 text-sm md:text-base mt-3 max-w-2xl mx-auto">
                These aren&apos;t values on a wall. They&apos;re how we make decisions, how we treat clients, and how we hold each
                other accountable.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">01</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Execution Over Conversation</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Ideas have no value until built. We move fast, ship real things, and learn from what exists – not from what we
                  discussed.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">02</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Quality Is Not Optional</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Real businesses run on what we build. The standard is: would you be proud if the client saw the code, the
                  process, the commit message?
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">03</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Honesty Is the Default</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Say problems before the deadline, not after. Say &quot;I don&apos;t know&quot; before guessing. Honest and early
                  beats polished and late.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">04</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">We Build for Business</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  We understand the business well enough to know when the brief is wrong. Technology is the tool – solving the
                  business problem is the job.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">05</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Growth Is Shared</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Knowledge shared is capability multiplied. We document, we teach, we onboard. The team that learns together
                  scales together.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">06</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">We Are the Standard</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Every client interaction, every line of code, every delivery – we hold the line. Not because someone is
                  watching. Because we are.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OPEN POSITIONS */}
        <section id="open-roles" className="relative py-16 md:py-20 bg-[var(--cres-primary-bg)]">
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <div className="text-center mb-10 md:mb-12">
              <p className="text-[11px] md:text-xs font-semibold tracking-[0.24em] uppercase text-white/60 mb-2">
                Open Positions
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white">Current Openings.</h2>
              <p className="text-white/75 text-sm md:text-base mt-3 max-w-2xl mx-auto">
                We hire for attitude, then skill. If you can build things and you care about quality – talk to us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Full-Stack Developer */}
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 md:p-7 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)] mb-1">
                    Engineering
                  </p>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">Full-Stack Developer</h3>
                  <p className="text-white/70 text-xs md:text-sm mb-3">
                    Full-time · Westlands, Nairobi (Hybrid) · Competitive + Commission
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 text-xs">
                    <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">React</span>
                    <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">Node.js</span>
                    <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">PostgreSQL</span>
                    <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">Next.js</span>
                  </div>
                </div>
                <div className="mt-4">
                  <Link
                    href="#application"
                    className="inline-flex items-center justify-center w-full bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-white font-bold text-sm py-3 rounded-lg transition-colors"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>

              {/* Business Development Representative */}
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 md:p-7 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)] mb-1">Sales</p>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">Business Development Representative</h3>
                  <p className="text-white/70 text-xs md:text-sm mb-3">Full-time · Nairobi · Base + Commission</p>
                  <div className="flex flex-wrap gap-2 mb-4 text-xs">
                    <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">B2B Sales</span>
                    <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">Tech</span>
                    <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">SME Market</span>
                  </div>
                </div>
                <div className="mt-4">
                  <Link
                    href="#application"
                    className="inline-flex items-center justify-center w-full bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-white font-bold text-sm py-3 rounded-lg transition-colors"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>

              {/* UI/UX Designer */}
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 md:p-7 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)] mb-1">Design</p>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">UI/UX Designer</h3>
                  <p className="text-white/70 text-xs md:text-sm mb-3">Contract / Part-time · Remote-friendly</p>
                  <div className="flex flex-wrap gap-2 mb-4 text-xs">
                    <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">Figma</span>
                    <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">UI Design</span>
                    <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">Systems</span>
                  </div>
                </div>
                <div className="mt-4">
                  <Link
                    href="#application"
                    className="inline-flex items-center justify-center w-full bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-white font-bold text-sm py-3 rounded-lg transition-colors"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>

              {/* Project & Client Manager */}
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 md:p-7 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)] mb-1">
                    Operations
                  </p>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">Project &amp; Client Manager</h3>
                  <p className="text-white/70 text-xs md:text-sm mb-3">Full-time · Westlands, Nairobi</p>
                  <div className="flex flex-wrap gap-2 mb-4 text-xs">
                    <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">
                      Project Management
                    </span>
                    <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">
                      Client Relations
                    </span>
                    <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">Tech</span>
                  </div>
                </div>
                <div className="mt-4">
                  <Link
                    href="#application"
                    className="inline-flex items-center justify-center w-full bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-white font-bold text-sm py-3 rounded-lg transition-colors"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-10 max-w-3xl mx-auto text-center text-sm md:text-base text-white/80">
              <p className="mb-2">
                Don&apos;t see your role? We&apos;re always looking for exceptional people. If you build things, understand
                business, and care about quality – send your work to{' '}
                <a
                  href="mailto:careers@cresdynamics.com"
                  className="font-semibold text-[var(--cres-orange-primary)] hover:underline"
                >
                  careers@cresdynamics.com
                </a>{' '}
                and tell us what you&apos;d build here.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="relative py-16 md:py-20 bg-[var(--cres-secondary-bg)]">
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <div className="text-center mb-10 md:mb-12">
              <p className="text-[11px] md:text-xs font-semibold tracking-[0.24em] uppercase text-white/60 mb-2">
                What You Get
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white">Working at CRES Means.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">01</span>
                  <span className="text-2xl">🏗️</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Real Ownership</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  You own your work. Every system you build has your name on it – and runs in production for real businesses. No
                  busywork. No meaningless tasks.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">02</span>
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Fast Growth</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  We&apos;re scaling. That means opportunities grow as the company grows. The people who join now build the
                  culture, the systems, and the leadership of what CRES becomes.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">03</span>
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Learning Culture</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  AI tools. Modern stack. Real problems. We invest in the team&apos;s skills because a team that doesn&apos;t grow is
                  a team that leaves. We&apos;d rather help you grow and stay.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">04</span>
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Competitive Compensation</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Base salary plus performance incentives. As the company grows, compensation grows with it. We share the results
                  of the work we build together.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">05</span>
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Mission That Matters</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  We&apos;re building the infrastructure layer for Kenyan business. The systems you build here power real companies,
                  real jobs, real economic activity. That&apos;s the work.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">06</span>
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Westlands, Nairobi</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Based in Kivuli Tower, Westlands. Hybrid-friendly for the right roles. We work seriously – and we respect that
                  life exists outside of work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* APPLICATION FORM + CTA */}
        <section id="application" className="relative py-16 bg-[var(--cres-primary-bg)]">
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3">
                Ready to Build Something Real?
              </h2>
              <p className="text-white/75 text-sm md:text-base mb-4 max-w-2xl mx-auto">
                Send your CV and a brief note on what you&apos;d build here to{' '}
                <a
                  href="mailto:careers@cresdynamics.com"
                  className="font-semibold text-[var(--cres-orange-primary)] hover:underline"
                >
                  careers@cresdynamics.com
                </a>
                .
              </p>
              <p className="text-white/75 text-xs md:text-sm mb-6">
                Or use the form below. We read every serious application.
              </p>
            </div>

            <CareersApplicationForm />

            <div className="mt-8 flex justify-center">
              <Link
                href="#application"
                className="inline-flex items-center justify-center bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

