import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function FinanceRevenuePhilosophyPage() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <Header />
      <main className="pt-24">
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--cres-primary-bg)] via-[#0D1B2A] to-[#020611]" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-3xl md:text-5xl font-black mb-6">
              Finance and Revenue <span className="text-[var(--cres-orange-primary)]">Philosophy</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              Why we build revenue and finance systems and why clarity here builds CEO-level control.
            </p>
            <Link href="/finance-platforms" className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide">
              See Finance Platforms
            </Link>
          </div>
        </section>
        <section className="relative py-16 md:py-20 bg-[var(--cres-primary-bg)]">
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6 text-center">Why This Builds CEO-Level Respect</h2>
            <ul className="space-y-6">
              <li className="bg-black/40 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">Businesses leak money silently</h3>
                <p className="text-white/80 text-sm">Without clear revenue tracking and cashflow visibility, money slips through gaps – unrecorded payments, duplicate effort, decisions on guesswork.</p>
              </li>
              <li className="bg-black/40 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">Revenue clarity is power</h3>
                <p className="text-white/80 text-sm">When you know what came in, what is pending, and what is going out, you scale with confidence. Revenue clarity is the foundation for growth.</p>
              </li>
              <li className="bg-black/40 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">Systems multiply effort</h3>
                <p className="text-white/80 text-sm">One person with a spreadsheet hits a ceiling. The right finance platform lets you track revenue and cashflow across the business without 20-hour days.</p>
              </li>
              <li className="bg-black/40 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">Structured growth beats hustle</h3>
                <p className="text-white/80 text-sm">Hustle fills the gap when systems are missing. We build so growth is measurable, repeatable, and sustainable.</p>
              </li>
              <li className="bg-black/40 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">Digital presence is revenue infrastructure</h3>
                <p className="text-white/80 text-sm">Your website, payments, and internal dashboards are not nice-to-haves. They are the infrastructure that turns traffic and deals into recorded revenue.</p>
              </li>
            </ul>
          </div>
        </section>
        <section className="relative py-16 bg-[var(--cres-secondary-bg)]">
          <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
            <p className="text-white/80 mb-6">Ready to turn revenue visibility into a competitive advantage?</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide">
              Book a Strategy Call
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
