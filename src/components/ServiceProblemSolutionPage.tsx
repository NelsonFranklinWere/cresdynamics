import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { ServicePageContent } from '@/lib/service-page-content';

type Props = {
  content: ServicePageContent;
};

export default function ServiceProblemSolutionPage({ content }: Props) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      {/* Problem — H1 */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[var(--cres-primary-bg)] to-[var(--cres-secondary-bg)] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <p className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--cres-electric-teal)] mb-4">
            {content.h1Keyword}
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-8">
            {content.problemHeadline}
          </h1>
        </div>
      </section>

      {/* What this costs them */}
      <section className="py-14 md:py-20 bg-[var(--cres-primary-bg)] relative">
        <div className="absolute inset-0 bg-black/30" aria-hidden />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-8">What this costs you</h2>
          <ul className="space-y-4">
            {content.costsThem.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 bg-black/40 border border-white/10 rounded-xl px-5 py-4"
              >
                <span className="text-[var(--cres-orange-primary)] font-bold shrink-0" aria-hidden>
                  →
                </span>
                <span className="text-white/90 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What we build */}
      <section className="py-14 md:py-20 bg-white text-[var(--navy-primary)]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-black mb-6">What we build</h2>
          <p className="text-base md:text-lg leading-relaxed text-[var(--navy-primary)]/85">
            {content.whatWeBuild}
          </p>
        </div>
      </section>

      {/* What changes */}
      <section className="py-14 md:py-20 bg-[var(--neutral-bg)] text-[var(--navy-primary)]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-black mb-8">What changes after delivery</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.whatChanges.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 bg-white border border-[#E5E7EB] rounded-xl px-5 py-4 shadow-sm"
              >
                <span className="text-[var(--teal-accent)] font-bold shrink-0" aria-hidden>
                  ✓
                </span>
                <span className="text-sm md:text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 relative" style={{ background: 'var(--cres-gradient-bg)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
            Tell us what you are dealing with
          </h2>
          <p className="text-white/85 mb-8 leading-relaxed">
            Start with a conversation about your specific situation. We will tell you honestly what we
            can build to fix it.
          </p>
          <Link
            href={content.ctaHref ?? '/contact'}
            className="inline-flex items-center gap-2 bg-[var(--orange-energy)] hover:bg-[var(--orange-energy-hover)] text-white font-bold text-sm md:text-base px-8 py-3.5 rounded-lg transition-colors"
          >
            Start the conversation
            <span aria-hidden>→</span>
          </Link>
          <p className="text-white/60 text-sm mt-4">
            No commitment. No generic proposal. Just an honest conversation.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
