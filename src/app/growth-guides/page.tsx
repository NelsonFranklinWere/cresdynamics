import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function GrowthGuidesPage() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <Header />
      <main className="pt-24">
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--cres-primary-bg)] via-[#0D1B2A] to-[#020611]" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-3xl md:text-5xl font-black mb-6">
              Growth Guides
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              Practical guides on structure, systems, and scaling.
            </p>
            <Link href="/insights" className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide">
              Browse Insights
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
