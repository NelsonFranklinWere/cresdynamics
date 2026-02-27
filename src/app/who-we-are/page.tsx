import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function WhoWeArePage() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <Header />
      <main className="pt-24">
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--cres-primary-bg)] via-[#0D1B2A] to-[#020611]" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-3xl md:text-5xl font-black mb-6">
              <span className="text-[var(--cres-orange-primary)]">Who We Are</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              A systems-first company that builds growth infrastructure for African businesses. Performance-driven, vision-led, built by practitioners.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide">
              Book a Strategy Call
            </Link>
          </div>
        </section>
        <section className="relative py-16 md:py-20 bg-[var(--cres-primary-bg)]">
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Our Identity</h2>
            <ul className="space-y-2 text-white/85 text-sm max-w-2xl mx-auto">
              <li>• Systems-first company: we build growth infrastructure, not one-off projects.</li>
              <li>• Growth infrastructure builders: ERPs, finance platforms, automation—the systems companies run on.</li>
              <li>• African-focused technology company: built for Kenyan and East African business reality.</li>
              <li>• Performance-driven: we measure by outcomes—visibility, control, scale.</li>
              <li>• Vision-led: long-term ambition to be the leading builder of business systems in the region.</li>
              <li>• Built by practitioners, not theorists: we ship production systems and operate with discipline.</li>
            </ul>
          </div>
        </section>
        <section className="relative py-16 bg-[var(--cres-secondary-bg)]">
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-black text-white mb-4 text-center">Founder Story</h2>
            <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto text-center">CRES Dynamics was born from seeing hardworking businesses do everything right yet struggle to scale. The gap was structure, visibility, and systems. We built the company to close that gap—resilience and a commitment to systems that companies actually run on.</p>
          </div>
        </section>
        <section className="relative py-16 bg-[var(--cres-primary-bg)]">
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Values & Culture</h2>
            <p className="text-white/80 text-sm text-center mb-6">Ownership, clarity, discipline, integrity, growth. We iterate through each milestone with clarity and intent. Progress from testing and refining—not waiting for perfection.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
