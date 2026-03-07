import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BookStrategyCallPage() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <Header />
      <main className="pt-24">
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--cres-primary-bg)] via-[#0D1B2A] to-[#020611]" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-3xl md:text-5xl font-black mb-6">
              Book a Strategy Call
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              Tell us your goals and pain points. We will map options and next steps.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="https://wa.me/254708805496?text=Hi%2C%20I'd%20like%20to%20book%20a%20strategy%20call%20with%20CRES%20Dynamics." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide">
              WhatsApp
            </a>
            <a href="tel:+254708805496" className="inline-flex items-center gap-2 border border-white/40 hover:bg-white/5 text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide">
              Call 0708 805 496
            </a>
          </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
