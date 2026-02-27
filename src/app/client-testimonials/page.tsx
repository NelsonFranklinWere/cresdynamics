import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ClientTestimonialsPage() {
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
              Client <span className="text-[var(--cres-orange-primary)]">Testimonials</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              What happens when we plug CresOS, finance platforms, and automation into real companies.
            </p>
            <p className="text-[var(--cres-electric-teal)] text-sm md:text-base font-semibold">
              These stories pair with our detailed case proof to show outcomes, not theory.
            </p>
          </div>
        </section>

        {/* TESTIMONIALS PLACEHOLDER */}
        <section className="relative py-16 bg-[var(--cres-primary-bg)]">
          <div className="relative z-10 max-w-5xl mx-auto px-6 space-y-8">
            <p className="text-white/70">
              We are curating formal testimonials from clients whose systems have been in production long enough to measure impact
              on revenue, operations, and retention.
            </p>
            <p className="text-white/70">
              In the meantime, you can explore specific builds and quantified results in our{' '}
              <a href="/case-studies" className="text-[var(--cres-orange-primary)] hover:text-[var(--cres-orange-hover)] underline">
                case proof library
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

