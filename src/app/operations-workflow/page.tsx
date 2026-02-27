import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function OperationsWorkflowPage() {
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
              Service – Operations &amp; Workflow
            </p>
            <h1 className="text-3xl md:text-5xl font-black mb-6">
              Your Business
              <br />
              Should Run
              <br />
              Without You.
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              When every decision, every approval, and every update flows through one person – that person is the bottleneck.
              We remove the bottleneck.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide"
              >
                Book Operations Discovery
              </Link>
              <Link
                href="/operations-workflow"
                className="inline-flex items-center gap-2 border border-white/40 hover:bg-white/5 text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide"
              >
                See the System
              </Link>
            </div>
          </div>
        </section>

        {/* THE PROBLEM */}
        <section className="relative py-16 md:py-20 bg-[var(--cres-primary-bg)]">
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h2 className="text-sm md:text-base font-semibold tracking-[0.24em] uppercase text-white/60 mb-2 text-center">
              The Problem
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 text-center">
              You Are the System.
              <br />
              And That Has
              <br />
              A Ceiling.
            </h3>
            <p className="text-white/75 text-sm md:text-base text-center max-w-2xl mx-auto mb-6">
              You built the business. You know every process, every client, every team member. The problem: everything depends
              on you knowing it.
            </p>
            <p className="text-white/75 text-sm md:text-base text-center max-w-2xl mx-auto mb-10">
              A business where the owner is the system cannot scale. Every hour spent managing operations is an hour not spent
              growing. The businesses that break through are the ones that move from people-dependent to system-dependent –
              where the process runs whether the owner is in the room or not.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="text-2xl mb-3">📲</div>
                <h4 className="text-lg font-bold text-white mb-2">WhatsApp is your project management tool</h4>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Groups, threads, pinned messages. Things get buried. Deadlines missed. Nobody has the full picture – except
                  you, because you read every message.
                </p>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="text-2xl mb-3">🤔</div>
                <h4 className="text-lg font-bold text-white mb-2">Staff can&apos;t make decisions without calling you</h4>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Every small decision escalates upward. Your phone never stops. Your team is dependent – not empowered –
                  because there&apos;s no system defining who decides what.
                </p>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="text-2xl mb-3">👀</div>
                <h4 className="text-lg font-bold text-white mb-2">You can&apos;t see what&apos;s actually happening</h4>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  You find out about problems when clients complain – not when they happen. There&apos;s no live view of what&apos;s
                  on track, what&apos;s delayed, and what needs your attention.
                </p>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="text-2xl mb-3">🔄</div>
                <h4 className="text-lg font-bold text-white mb-2">Every hire makes things more complicated</h4>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  More people without systems means more WhatsApp groups, more coordination calls, more things falling through
                  the cracks. Hiring helps – but only when there&apos;s infrastructure to plug into.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* THE SYSTEM */}
        <section className="relative py-16 md:py-20 bg-[var(--cres-secondary-bg)]">
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <div className="text-center mb-10 md:mb-12">
              <p className="text-[11px] md:text-xs font-semibold tracking-[0.24em] uppercase text-white/70 mb-2">
                The System
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3">
                Operations That
                <br />
                Run Themselves.
              </h2>
              <p className="text-white/75 text-sm md:text-base max-w-2xl mx-auto">
                We build the operational infrastructure that lets your team manage – and lets you lead instead of firefight.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">
                    01
                  </span>
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Project &amp; Task Management</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Every project. Every task. Every deadline. Visible in one place. Who owns what. What&apos;s on track. What&apos;s
                  at risk. No more WhatsApp chasing.
                </p>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">
                    02
                  </span>
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Approval Workflows</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Define who approves what – and at what threshold. Requests flow through the system automatically. The right
                  person is notified. Decisions get made without you in every conversation.
                </p>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">
                    03
                  </span>
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Performance Dashboards</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Team performance visible in real time. Who&apos;s delivering. Who&apos;s falling behind. What&apos;s on time.
                  What&apos;s delayed. Data, not impressions, drive your management decisions.
                </p>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">
                    04
                  </span>
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Client Management</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Every client, every interaction, every delivery – in one place. Your team has the context they need to serve
                  clients without involving you at every step.
                </p>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">
                    05
                  </span>
                  <span className="text-2xl">🔔</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Smart Alerts &amp; Escalations</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  The system tells you what needs attention – not the other way around. Exceptions surface automatically.
                  Routine operations run without your involvement.
                </p>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">
                    06
                  </span>
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Mobile Operations</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Check status, approve requests, review performance – from your phone. Full operational visibility in your
                  pocket. Whether you&apos;re in the office or not.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TRANSFORMATION */}
        <section className="relative py-16 md:py-20 bg-[var(--cres-primary-bg)]">
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <div className="text-center mb-10 md:mb-12">
              <p className="text-[11px] md:text-xs font-semibold tracking-[0.24em] uppercase text-white/60 mb-2">
                The Transformation
              </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3">
              From Operator
              <br />
              to Leader.
            </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 md:p-7 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <h3 className="text-lg font-bold text-white mb-4">Without an Operations System</h3>
                <ul className="space-y-3 text-white/80 text-sm md:text-base">
                  <li>
                    <strong className="text-white">Visibility</strong> – You find out about problems when clients
                    complain. Reactive, always.
                  </li>
                  <li>
                    <strong className="text-white">Decisions</strong> – Every decision escalates to you. Your phone never
                    stops. Team is helpless without you.
                  </li>
                  <li>
                    <strong className="text-white">Growth</strong> – Every new client adds pressure. You&apos;re already at
                    capacity. Can&apos;t take more without hiring more of yourself.
                  </li>
                  <li>
                    <strong className="text-white">Time Off</strong> – Business suffers when you&apos;re away. You can never
                    fully disconnect.
                  </li>
                </ul>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 md:p-7 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <h3 className="text-lg font-bold text-white mb-4">With CRES Operations</h3>
                <ul className="space-y-3 text-white/80 text-sm md:text-base">
                  <li>
                    <strong className="text-white">Visibility</strong> – Live dashboard. See everything. Exceptions surface
                    automatically. Proactive.
                  </li>
                  <li>
                    <strong className="text-white">Decisions</strong> – Clear approval tiers. Team decides what they&apos;re
                    empowered to decide. You handle strategy.
                  </li>
                  <li>
                    <strong className="text-white">Growth</strong> – System absorbs new volume. Team manages more with the
                    same effort. You focus on winning new business.
                  </li>
                  <li>
                    <strong className="text-white">Time Off</strong> – System runs. Team manages. You come back to a
                    dashboard, not a crisis.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-16 bg-[var(--cres-secondary-bg)]">
          <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
            <p className="text-white/80 mb-6">Ready to put order in your operations?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide"
            >
              Book a Strategy Call
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
