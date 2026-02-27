import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProofOfWorkPage() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <Header />

      <main className="pt-24">
        {/* HERO */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--cres-primary-bg)] via-[#101927] to-[#020611]" />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-3xl md:text-5xl font-black mb-6">
              Proof of <span className="text-[var(--cres-orange-primary)]">Work</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              Systems we&apos;ve shipped, the engines behind them, and the business outcomes they created.
            </p>
            <p className="text-[var(--cres-electric-teal)] text-sm md:text-base font-semibold">
              This is the bridge between CresOS, custom ERPs, and the numbers they move.
            </p>
          </div>
        </section>

        {/* LINK TO CASE PROOF */}
        <section className="relative py-16 bg-[var(--cres-primary-bg)]">
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <div className="rounded-xl border border-white/10 bg-black/40 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-black mb-4">See the Systems in the Wild</h2>
              <p className="text-white/80 mb-4">
                Our detailed proof of work lives in our case proof library—real operators, real revenue, and real operational change.
              </p>
              <a
                href="/case-studies"
                className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-white font-bold text-sm px-5 py-2.5 rounded-lg uppercase tracking-wide transition-all duration-200"
              >
                Explore Case Proof
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

