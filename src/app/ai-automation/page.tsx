import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AIAutomationPage() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <Header />
      <main className="pt-24">
        {/* HERO */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--cres-primary-bg)] via-[#0D1B2A] to-[#020611]" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-3xl md:text-5xl font-black mb-6">
              Less Manual.
              <br />
              More Intelligent.
              <br />
              Always On.
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Automate the repetitive. Trigger the important. Let AI handle what doesn&apos;t need a human – so your team focuses
              on what does.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide"
              >
                Book Automation Discovery
              </Link>
              <Link
                href="/ai-automation"
                className="inline-flex items-center gap-2 border border-white/40 hover:bg-white/5 text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide"
              >
                See What We Automate
              </Link>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="relative py-16 md:py-20 bg-[var(--cres-primary-bg)]">
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h2 className="text-sm md:text-base font-semibold tracking-[0.24em] uppercase text-white/60 mb-2 text-center">
              The Problem
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 text-center">
              Your Team Spends
              <br />
              Half Their Day on
              <br />
              Work That Shouldn&apos;t Exist.
            </h3>
            <p className="text-white/75 text-sm md:text-base text-center max-w-2xl mx-auto mb-10">
              Manual follow-ups. Copy-pasted reports. Reminder messages. Data entry. If a task is repetitive and rule-based – a
              system can do it better, faster, and without forgetting.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="text-2xl mb-3">📨</div>
                <h4 className="text-lg font-bold text-white mb-2">Follow-ups that never happen consistently</h4>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  A lead comes in. Someone follows up once. Then gets busy. Lead goes cold. Automated follow-up sequences don&apos;t
                  get distracted.
                </p>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="text-2xl mb-3">📝</div>
                <h4 className="text-lg font-bold text-white mb-2">Reports built manually every week</h4>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Someone spends 3 hours every Friday pulling numbers from different sources. That time and that error risk
                  disappear with automation.
                </p>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="text-2xl mb-3">🔔</div>
                <h4 className="text-lg font-bold text-white mb-2">
                  Important things get missed because nobody remembered
                </h4>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Contract renewal. Payment due. Delivery overdue. Maintenance scheduled. Automated triggers mean nothing important
                  falls through the cracks.
                </p>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="text-2xl mb-3">💬</div>
                <h4 className="text-lg font-bold text-white mb-2">Customer communication is inconsistent</h4>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Some clients get fast responses. Others wait days. Automated communication workflows ensure every client gets a
                  consistent, professional experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE AUTOMATE */}
        <section className="relative py-16 md:py-20 bg-[var(--cres-secondary-bg)]">
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <div className="text-center mb-10 md:mb-12">
              <p className="text-[11px] md:text-xs font-semibold tracking-[0.24em] uppercase text-white/70 mb-2">
                What We Automate
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3">
                If It&apos;s Repetitive,
                <br />
                It&apos;s Automatable.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">
                    01
                  </span>
                  <span className="text-2xl">📧</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Lead Follow-Up Sequences</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  New inquiry comes in. Automatic WhatsApp or email sent within 2 minutes. Follow-ups at day 1, day 3, day 7. No
                  lead goes cold because someone forgot to call.
                </p>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">
                    02
                  </span>
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Automated Reporting</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Daily revenue summary sent to your WhatsApp at 6pm. Weekly performance report every Monday morning. No manual
                  pulling. No waiting.
                </p>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">
                    03
                  </span>
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Workflow Triggers</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  When a payment is received – invoice is marked paid, client is notified, team is updated. When an order is placed
                  – warehouse is notified, delivery is scheduled. Events trigger actions automatically.
                </p>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">
                    04
                  </span>
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">AI-Powered Decision Support</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Predict which clients are at risk of leaving. Identify your most profitable products. Flag anomalies in your data
                  before they become problems. Intelligence, not just automation.
                </p>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">
                    05
                  </span>
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Customer Communication Flows</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Order confirmation. Delivery update. Payment reminder. Renewal notice. Every customer touchpoint automated,
                  consistent, and professional – without anyone typing it manually.
                </p>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-orange-primary)]">
                    06
                  </span>
                  <span className="text-2xl">🔗</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">System Integrations</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Connect your website, Mpesa, WhatsApp, email, and operations system. Data flows automatically between systems. No
                  manual data entry. No copy-paste errors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* REAL IMPACT */}
        <section className="relative py-16 md:py-20 bg-[var(--cres-primary-bg)]">
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <div className="text-center mb-10 md:mb-12">
              <p className="text-[11px] md:text-xs font-semibold tracking-[0.24em] uppercase text-white/60 mb-2">
                Real Impact
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3">
                What Automation
                <br />
                Actually Changes.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 md:p-7 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <h3 className="text-lg font-bold text-white mb-4">Without Automation</h3>
                <ul className="space-y-3 text-white/80 text-sm md:text-base">
                  <li>
                    <strong className="text-white">Lead Response</strong> – Someone gets to it when they have time. Often hours
                    later. Lead has gone cold or called a competitor.
                  </li>
                  <li>
                    <strong className="text-white">Reporting</strong> – 3 hours of manual work every Friday. Numbers are already
                    old by the time they&apos;re ready.
                  </li>
                  <li>
                    <strong className="text-white">Client Experience</strong> – Some clients feel ignored. Response time varies.
                    Professionalism is inconsistent.
                  </li>
                </ul>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 md:p-7 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <h3 className="text-lg font-bold text-white mb-4">With CRES Automation</h3>
                <ul className="space-y-3 text-white/80 text-sm md:text-base">
                  <li>
                    <strong className="text-white">Lead Response</strong> – Automated reply in under 2 minutes. Sequence runs for
                    7 days. Conversion rate increases significantly.
                  </li>
                  <li>
                    <strong className="text-white">Reporting</strong> – Daily report to your WhatsApp. Always current. Zero manual
                    effort.
                  </li>
                  <li>
                    <strong className="text-white">Client Experience</strong> – Every client gets the same fast, professional
                    experience. Consistency builds trust and retention.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-16 bg-[var(--cres-secondary-bg)]">
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
              Ready to Stop Doing Work That Doesn&apos;t Need You?
            </h2>
            <p className="text-white/75 text-sm md:text-base mb-6 max-w-xl mx-auto">
              20-minute call. We&apos;ll map exactly what&apos;s automatable in your business right now.
            </p>
            <p className="text-sm md:text-base text-white/80">
              Call{' '}
              <a href="tel:+254708805496" className="font-semibold text-[var(--cres-orange-primary)]">
                +254 708 805 496
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
