import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CareersApplicationForm from '@/components/CareersApplicationForm';
import Link from 'next/link';
import { CAREER_ROLES } from '@/data/careersRoles';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers — Build Kenyan Business Infrastructure | CRES Dynamics',
  description:
    'Open roles: Full-Stack Developer and Sales Executive at CRES Dynamics. Hybrid in Westlands, Nairobi. We hire for attitude, execution, and quality.',
  alternates: { canonical: 'https://cresdynamics.com/careers/' },
  openGraph: {
    title: 'Careers at CRES Dynamics — Nairobi',
    description:
      'Join a team building real operational systems for Kenyan businesses. See open roles and how to apply.',
    url: 'https://cresdynamics.com/careers/',
    type: 'website',
  },
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[var(--navy-dark)] text-white">
      <Header />

      <main className="pt-24">
        {/* HERO — two-column with open roles sidebar */}
        <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: 'var(--cres-gradient-bg)' }}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_60%_40%,rgba(243,156,36,0.08)_0%,transparent_70%)]" />
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <span className="inline-block bg-[var(--teal-accent)]/20 border border-[var(--teal-accent)]/40 text-[var(--teal-accent)] px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase mb-5">
                  We&apos;re Hiring
                </span>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                  Build Infrastructure,
                  <br />
                  <span style={{ color: 'var(--orange-energy)' }}>Not Slides.</span>
                </h1>
                <p className="text-white/80 text-base md:text-lg mb-6 max-w-xl">
                  CRES Dynamics designs and ships systems that real businesses run on—websites, finance tooling, automation,
                  and CresOS. If you want ownership, high standards, and work that shows up in production, you belong in this
                  conversation.
                </p>
                <p className="text-white/65 text-sm md:text-base mb-8 max-w-xl border-l-2 border-[var(--teal-accent)]/50 pl-4">
                  We are a small, senior-minded team in Nairobi. Every role touches clients, delivery, or code that operators
                  depend on. We move fast, document what matters, and hold the line on quality.
                </p>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Link
                    href="#open-roles"
                    className="inline-flex items-center gap-2 bg-[var(--orange-energy)] hover:bg-[var(--orange-energy-hover)] text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide"
                  >
                    See Open Roles
                  </Link>
                  <Link
                    href="#culture"
                    className="inline-flex items-center gap-2 border border-white/40 hover:bg-white/5 text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide"
                  >
                    How We Work
                  </Link>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 lg:sticky lg:top-28">
                <h4 className="text-[11px] font-bold tracking-widest uppercase text-white/60 mb-4">Open positions</h4>
                <div className="space-y-2">
                  {CAREER_ROLES.map((role) => (
                    <a
                      key={role.id}
                      href="#open-roles"
                      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 rounded-xl bg-white/5 border border-white/10 hover:bg-[var(--teal-accent)]/20 hover:border-[var(--teal-accent)]/40 px-4 py-3 transition-colors text-left"
                    >
                      <span className="font-semibold text-white">{role.title}</span>
                      <span className="text-[11px] text-white/55 sm:text-right">{role.department}</span>
                    </a>
                  ))}
                </div>
                <p className="text-white/50 text-xs mt-4 pt-4 border-t border-white/10">
                  {CAREER_ROLES.length} roles · Nairobi (hybrid where noted) · We review applications on a rolling basis
                </p>
              </div>
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
                Another Generic Agency.
                <br />
                We&apos;re Building Infrastructure.
              </h2>
              <p className="text-white/75 text-sm md:text-base mb-4">
                Every system we ship runs real businesses. People depend on it. Revenue and payroll move through it. That is
                the weight of the work—and what makes it worth doing well.
              </p>
              <p className="text-white/75 text-sm md:text-base">
                Kenyan operators deserve tooling that fits how they actually work—not borrowed templates from another market.
                That is the standard we build to. If that mission resonates, you will feel at home here.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-sm md:text-base">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4 md:p-5 text-center">
                <div className="text-2xl font-black text-[var(--cres-orange-primary)] mb-1">6</div>
                <div className="text-white/70 text-xs md:text-sm">Core team</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4 md:p-5 text-center">
                <div className="text-2xl font-black text-[var(--cres-orange-primary)] mb-1">13</div>
                <div className="text-white/70 text-xs md:text-sm">Systems in production</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4 md:p-5 text-center">
                <div className="text-2xl font-black text-[var(--cres-orange-primary)] mb-1">127+</div>
                <div className="text-white/70 text-xs md:text-sm">Daily active users (our stack)</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4 md:p-5 text-center">
                <div className="text-2xl font-black text-[var(--cres-orange-primary)] mb-1">2026</div>
                <div className="text-white/70 text-xs md:text-sm">Scaling delivery &amp; product</div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CRES — culture / how we work */}
        <section id="culture" className="relative py-16 md:py-20 bg-[var(--cres-secondary-bg)]">
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <div className="text-center mb-10 md:mb-12">
              <p className="text-[11px] md:text-xs font-semibold tracking-[0.24em] uppercase text-white/60 mb-2">
                How We Work
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white">The CRES Standard.</h2>
              <p className="text-white/75 text-sm md:text-base mt-3 max-w-2xl mx-auto">
                These are not posters—they are how we decide, how we ship, and how we expect teammates to show up.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">01</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Execution Over Conversation</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Ideas earn value when they ship. We bias to working software, real pages in production, and learning from what
                  is live—not what was debated in a meeting.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">02</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Quality Is Not Optional</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Businesses run on what we build. The bar: would you stand behind this if the client saw the code, the copy,
                  and the cutover plan?
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">03</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Honesty Is the Default</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Surface risks before deadlines. Say &quot;I don&apos;t know&quot; before guessing. Early and accurate beats late and
                  polished.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">04</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">We Build for Business</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Technology is the lever; the business outcome is the job. We learn the operation well enough to challenge a
                  bad brief with respect.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">05</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Growth Is Shared</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  We teach, document, and onboard deliberately. Capability compounds when the team levels up together.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">06</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">We Are the Standard</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Every client touch and every deploy reflects who we are. We hold the line because we choose to—not because
                  someone is watching.
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
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white">Roles We&apos;re Hiring For.</h2>
              <p className="text-white/75 text-sm md:text-base mt-3 max-w-2xl mx-auto">
                Each listing matches what you&apos;ll select in the application form. Read the fit bullets, then apply with
                evidence of what you&apos;ve shipped or owned.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {CAREER_ROLES.map((role) => (
                <article
                  key={role.id}
                  className="rounded-2xl border border-white/10 bg-black/40 p-6 md:p-7 flex flex-col justify-between"
                >
                  <div>
                    <p className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)] mb-1">
                      {role.department}
                    </p>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2">{role.title}</h3>
                    <p className="text-white/70 text-xs md:text-sm mb-2">
                      {role.commitment} · {role.location}
                    </p>
                    <p className="text-white/80 text-sm md:text-base mb-4 leading-relaxed">{role.summary}</p>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-white/50 mb-2">Strong fit if</p>
                    <ul className="list-disc list-inside space-y-1.5 text-white/80 text-sm md:text-base mb-4">
                      {role.focus.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {role.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link
                      href="#application"
                      className="inline-flex items-center justify-center w-full bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-white font-bold text-sm py-3 rounded-lg transition-colors"
                    >
                      Apply for this role
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 max-w-3xl mx-auto text-center text-sm md:text-base text-white/80">
              <p className="mb-2">
                Don&apos;t see a perfect title? We still read strong general applications. Email{' '}
                <a
                  href="mailto:careers@cresdynamics.com"
                  className="font-semibold text-[var(--cres-orange-primary)] hover:underline"
                >
                  careers@cresdynamics.com
                </a>{' '}
                with what you&apos;d build in your first 90 days.
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
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white">What It&apos;s Like Here.</h2>
              <p className="text-white/70 text-sm md:text-base mt-3 max-w-2xl mx-auto">
                Small team, high trust. You will be close to decisions, clients, and production—not buried in layers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">01</span>
                  <span className="text-2xl">🏗️</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Real Ownership</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Your work ships under real business load. You will see impact in weeks, not hypothetical roadmaps.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">02</span>
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Room to Grow</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  We are building product and process at the same time. Early hires help shape how CRES scales.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">03</span>
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Modern Stack &amp; Craft</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Next.js, disciplined design, automation where it saves time. We invest in tools and skills that raise the bar.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">04</span>
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Fair Compensation</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Base plus performance where the role allows. As the company grows, we want growth to show up in your
                  package too.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">05</span>
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Mission You Can Point To</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Systems you help build power Kenyan operators, jobs, and transactions you can name. That clarity matters.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">06</span>
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Westlands Base</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Kivuli Tower, Westlands. Hybrid where the role allows. We work hard and respect life outside the job.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hiring process — intentional expectations */}
        <section className="relative py-14 bg-[var(--cres-primary-bg)] border-y border-white/10">
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <p className="text-[11px] md:text-xs font-semibold tracking-[0.24em] uppercase text-white/60 mb-2">Process</p>
            <h2 className="text-xl md:text-2xl font-black text-white mb-4">What Happens After You Apply</h2>
            <ol className="text-left text-white/80 text-sm md:text-base space-y-3 list-decimal list-inside max-w-xl mx-auto">
              <li>We read every complete application—role selected, experience summary, and why CRES.</li>
              <li>Short screening call (video or phone) to align on fit and your work samples.</li>
              <li>Role-specific conversation: engineering exercise or walkthrough, sales scenario, design critique, or delivery case—kept proportionate.</li>
              <li>Offer and start date. We aim for clear feedback either way within a few weeks.</li>
            </ol>
          </div>
        </section>

        {/* APPLICATION FORM + CTA */}
        <section id="application" className="relative py-16 bg-[var(--cres-primary-bg)]">
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3">
                Apply in One Flow
              </h2>
              <p className="text-white/75 text-sm md:text-base mb-4 max-w-2xl mx-auto">
                Prefer email? Send your CV and a short note to{' '}
                <a
                  href="mailto:careers@cresdynamics.com"
                  className="font-semibold text-[var(--cres-orange-primary)] hover:underline"
                >
                  careers@cresdynamics.com
                </a>
                . Prefer the form? Use the same details below—choose the role that matches the listing above.
              </p>
            </div>

            <CareersApplicationForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
