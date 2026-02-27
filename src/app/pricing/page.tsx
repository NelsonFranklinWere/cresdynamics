import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <Header />

      <main className="pt-24">
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--cres-primary-bg)] via-[#0D1B2A] to-[#020611]" />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-3xl md:text-5xl font-black mb-6">
              <span className="text-[var(--cres-orange-primary)]">Transparent Pricing.</span>
              <br />
              No Surprises.
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              Every project starts with a discovery session. These are starting points – final investment depends on your specific
              needs and scope. All pricing is customised to your business, not a generic package.
            </p>
          </div>
        </section>

        <section className="relative py-16 bg-[var(--cres-primary-bg)]">
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <div className="text-center mb-10 md:mb-12">
              <p className="text-sm font-semibold tracking-[0.24em] uppercase text-white/60 mb-2">
                Automation Pricing
              </p>
              <h2 className="text-2xl md:text-3xl font-black text-white">Investment for AI &amp; Automation.</h2>
              <p className="text-white/70 text-sm md:text-base mt-3 max-w-2xl mx-auto">
                These automation tiers are starting points. Final investment is customised to the volume of workflows, channels,
                and systems we integrate.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-xl border border-white/10 bg-black/40 p-6 md:p-8">
                <div className="text-xs font-semibold tracking-widest text-[var(--cres-orange-primary)] mb-2">Foundation</div>
                <h3 className="text-xl md:text-2xl font-black text-white mb-2">Basic Automation</h3>
                <div className="text-3xl font-black text-[var(--cres-orange-primary)] mb-1">120K</div>
                <div className="text-white/50 text-xs mb-6">Starting from KES 120,000</div>
                <ul className="space-y-2 text-sm text-white/80 mb-6">
                  <li>Lead follow-up sequences</li>
                  <li>Automated reporting (daily/weekly)</li>
                  <li>WhatsApp integration</li>
                  <li>3 workflow triggers</li>
                </ul>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-white/10 hover:bg-white/20 text-white font-bold text-sm py-3 rounded-lg transition-colors"
                >
                  Get Started
                </Link>
              </div>

              <div className="rounded-xl border-2 border-[var(--cres-orange-primary)] bg-black/60 p-6 md:p-8 relative">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[var(--cres-orange-primary)] text-black text-[10px] font-bold px-2 py-0.5 rounded">
                  Most Popular
                </div>
                <div className="text-xs font-semibold tracking-widest text-[var(--cres-orange-primary)] mb-2">Full Automation</div>
                <h3 className="text-xl md:text-2xl font-black text-white mb-2">Automation Suite</h3>
                <div className="text-3xl font-black text-[var(--cres-orange-primary)] mb-1">250K</div>
                <div className="text-white/50 text-xs mb-6">Starting from KES 250,000</div>
                <ul className="space-y-2 text-sm text-white/80 mb-6">
                  <li>Everything in Foundation</li>
                  <li>Customer communication flows</li>
                  <li>System integrations (Mpesa, email)</li>
                  <li>10+ workflow triggers</li>
                  <li>Analytics dashboard</li>
                  <li>AI anomaly detection</li>
                </ul>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-white font-bold text-sm py-3 rounded-lg transition-colors"
                >
                  Book Discovery
                </Link>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/40 p-6 md:p-8">
                <div className="text-xs font-semibold tracking-widest text-[var(--cres-orange-primary)] mb-2">Enterprise</div>
                <h3 className="text-xl md:text-2xl font-black text-white mb-2">AI + Automation</h3>
                <div className="text-3xl font-black text-[var(--cres-orange-primary)] mb-1">500K</div>
                <div className="text-white/50 text-xs mb-6">Starting from KES 500,000</div>
                <ul className="space-y-2 text-sm text-white/80 mb-6">
                  <li>Full automation platform</li>
                  <li>Custom AI models</li>
                  <li>Predictive analytics</li>
                  <li>Full system integration layer</li>
                  <li>Unlimited triggers</li>
                  <li>Dedicated support retainer</li>
                </ul>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-white/10 hover:bg-white/20 text-white font-bold text-sm py-3 rounded-lg transition-colors"
                >
                  Let&apos;s Talk
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-12 bg-[var(--cres-secondary-bg)]">
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <p className="text-white/80 text-sm">We offer Starter (website), Growth (CresOS Business), Scale (Full ERP), and Enterprise (custom). A strategy call is required to align scope and investment.</p>
          </div>
        </section>

        <section className="relative py-16 bg-[var(--cres-primary-bg)]">
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-xl border border-white/10 bg-black/40 p-6 md:p-8">
                <div className="text-xs font-semibold tracking-widest text-[var(--cres-orange-primary)] mb-2">Starter</div>
                <h2 className="text-xl md:text-2xl font-black text-white mb-2">Website</h2>
                <div className="text-3xl font-black text-[var(--cres-orange-primary)] mb-1">60K</div>
                <div className="text-white/50 text-xs mb-6">Starting from KES 60,000</div>
                <ul className="space-y-2 text-sm text-white/80 mb-6">
                  <li>Professional website design</li>
                  <li>Mobile optimised</li>
                  <li>Google Business setup</li>
                  <li>Inquiry / contact system</li>
                  <li>WhatsApp integration</li>
                  <li>2-week build timeline</li>
                </ul>
                <Link href="/contact" className="block w-full text-center bg-white/10 hover:bg-white/20 text-white font-bold text-sm py-3 rounded-lg transition-colors">Start Here</Link>
              </div>

              <div className="rounded-xl border-2 border-[var(--cres-orange-primary)] bg-black/60 p-6 md:p-8 relative">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[var(--cres-orange-primary)] text-black text-[10px] font-bold px-2 py-0.5 rounded">Most Popular</div>
                <div className="text-xs font-semibold tracking-widest text-[var(--cres-orange-primary)] mb-2">Growth</div>
                <h2 className="text-xl md:text-2xl font-black text-white mb-2">CresOS Business</h2>
                <div className="text-3xl font-black text-[var(--cres-orange-primary)] mb-1">200K</div>
                <div className="text-white/50 text-xs mb-6">Starting from KES 200,000</div>
                <ul className="space-y-2 text-sm text-white/80 mb-6">
                  <li>Everything in Starter</li>
                  <li>Operations management module</li>
                  <li>Finance & invoice tracking</li>
                  <li>Client & team management</li>
                  <li>Analytics dashboard</li>
                  <li>Mpesa integration</li>
                  <li>Staff training included</li>
                  <li>3-week build timeline</li>
                </ul>
                <Link href="/contact" className="block w-full text-center bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-white font-bold text-sm py-3 rounded-lg transition-colors">Book Discovery</Link>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/40 p-6 md:p-8">
                <div className="text-xs font-semibold tracking-widest text-[var(--cres-orange-primary)] mb-2">Scale / Enterprise</div>
                <h2 className="text-xl md:text-2xl font-black text-white mb-2">Full ERP</h2>
                <div className="text-3xl font-black text-[var(--cres-orange-primary)] mb-1">400K</div>
                <div className="text-white/50 text-xs mb-6">Starting from KES 400,000</div>
                <ul className="space-y-2 text-sm text-white/80 mb-6">
                  <li>Everything in CresOS Business</li>
                  <li>Custom ERP modules</li>
                  <li>Multi-branch support</li>
                  <li>AI & automation layer</li>
                  <li>Advanced reporting</li>
                  <li>Dedicated support retainer</li>
                  <li>4-week build timeline</li>
                </ul>
                <Link href="/contact" className="block w-full text-center bg-white/10 hover:bg-white/20 text-white font-bold text-sm py-3 rounded-lg transition-colors">Let&apos;s Talk</Link>
              </div>
            </div>
            <p className="text-center text-white/60 text-sm mt-8">
              Final investment depends on scope. A discovery session is required; we then provide a tailored proposal based on your
              actual operations, goals, and constraints.
            </p>
          </div>
        </section>

        <section className="relative py-16 bg-[var(--cres-secondary-bg)]">
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <div className="text-center mb-10 md:mb-12">
              <p className="text-sm font-semibold tracking-[0.24em] uppercase text-white/60 mb-2">
                Operations System Pricing
              </p>
              <h2 className="text-2xl md:text-3xl font-black text-white">
                Investment for Operations &amp; Workflow Systems.
              </h2>
              <p className="text-white/70 text-sm md:text-base mt-3 max-w-2xl mx-auto">
                These tiers are starting points for typical implementations. Your actual investment is customised to your team
                size, complexity, and integration needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-xl border border-white/10 bg-black/40 p-6 md:p-8">
                <div className="text-xs font-semibold tracking-widest text-[var(--cres-orange-primary)] mb-2">Foundation</div>
                <h3 className="text-xl md:text-2xl font-black text-white mb-2">Team Operations</h3>
                <div className="text-3xl font-black text-[var(--cres-orange-primary)] mb-1">150K</div>
                <div className="text-white/50 text-xs mb-6">Starting from KES 150,000</div>
                <ul className="space-y-2 text-sm text-white/80 mb-6">
                  <li>Project &amp; task management</li>
                  <li>Team assignments</li>
                  <li>Basic reporting</li>
                  <li>Up to 10 users</li>
                  <li>Mobile access</li>
                </ul>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-white/10 hover:bg-white/20 text-white font-bold text-sm py-3 rounded-lg transition-colors"
                >
                  Get Started
                </Link>
              </div>

              <div className="rounded-xl border-2 border-[var(--cres-orange-primary)] bg-black/60 p-6 md:p-8 relative">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[var(--cres-orange-primary)] text-black text-[10px] font-bold px-2 py-0.5 rounded">
                  Most Popular
                </div>
                <div className="text-xs font-semibold tracking-widest text-[var(--cres-orange-primary)] mb-2">Full Operations</div>
                <h3 className="text-xl md:text-2xl font-black text-white mb-2">Operations Platform</h3>
                <div className="text-3xl font-black text-[var(--cres-orange-primary)] mb-1">280K</div>
                <div className="text-white/50 text-xs mb-6">Starting from KES 280,000</div>
                <ul className="space-y-2 text-sm text-white/80 mb-6">
                  <li>Everything in Foundation</li>
                  <li>Approval workflows</li>
                  <li>Client management</li>
                  <li>Performance dashboards</li>
                  <li>Smart alerts</li>
                  <li>Up to 30 users</li>
                </ul>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-white font-bold text-sm py-3 rounded-lg transition-colors"
                >
                  Book Discovery
                </Link>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/40 p-6 md:p-8">
                <div className="text-xs font-semibold tracking-widest text-[var(--cres-orange-primary)] mb-2">Enterprise</div>
                <h3 className="text-xl md:text-2xl font-black text-white mb-2">Operations + Finance</h3>
                <div className="text-3xl font-black text-[var(--cres-orange-primary)] mb-1">500K</div>
                <div className="text-white/50 text-xs mb-6">Starting from KES 500,000</div>
                <ul className="space-y-2 text-sm text-white/80 mb-6">
                  <li>Full Operations platform</li>
                  <li>Finance &amp; revenue module</li>
                  <li>Multi-branch support</li>
                  <li>Unlimited users</li>
                  <li>Custom workflows</li>
                  <li>Dedicated retainer</li>
                </ul>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-white/10 hover:bg-white/20 text-white font-bold text-sm py-3 rounded-lg transition-colors"
                >
                  Let&apos;s Talk
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-16 bg-[var(--cres-secondary-bg)]">
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <p className="text-sm md:text-base text-white/70 mb-2 uppercase tracking-[0.24em]">
              Ready to Start
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">
              Book a
              <br />
              Discovery Session.
            </h2>
            <p className="text-white/75 text-sm md:text-base mb-6 max-w-xl mx-auto">
              No pitch. No slides. Just an honest conversation about your business and what&apos;s possible. 20 minutes.
              No commitment.
            </p>
            <div className="space-y-2 text-sm md:text-base text-white/80">
              <p>
                Call{' '}
                <a href="tel:+254708805496" className="font-semibold text-[var(--cres-orange-primary)]">
                  +254 708 805 496
                </a>
              </p>
              <p>
                Or{' '}
                <a
                  href="mailto:info@cresdynamics.com"
                  className="font-semibold text-[var(--cres-orange-primary)] hover:underline"
                >
                  email us &gt;
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
