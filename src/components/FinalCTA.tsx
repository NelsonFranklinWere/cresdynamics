export default function FinalCTA() {
  return (
    <section className="py-32 bg-gradient-to-r from-[var(--cres-primary-bg)] via-[#0D1520] to-[var(--cres-primary-bg)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Final Statement */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--cres-white)] mb-6 underline-custom" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)'}}>
            Ready to Stop the Struggle and Start Growing?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-[var(--cres-text-secondary)] max-w-3xl mx-auto leading-relaxed" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)'}}>
            Your business deserves systems that work. Not guesswork. Not hype. Just results.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-[var(--cres-card-bg)] p-6 md:p-12 rounded-xl shadow-2xl border border-[var(--cres-divider)] mb-12">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[var(--cres-white)] mb-4 md:mb-6">
            Get Your Free Strategy Session
          </h3>
          <p className="text-base md:text-lg text-[var(--cres-text-secondary)] mb-6 md:mb-8 max-w-2xl mx-auto">
            We'll analyze your current situation, identify the biggest opportunities, and show you exactly how to turn clicks into clients.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
            <a
              href="/contact"
              className="inline-block bg-[var(--cres-orange-primary)] hover:bg-[#E87528] text-[var(--cres-black)] font-bold text-base md:text-lg px-8 md:px-12 py-4 md:py-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500 uppercase tracking-wide"
            >
              Book Your Free Session Now
            </a>
            <p className="text-xs md:text-sm text-[var(--cres-text-secondary)]">
              No commitment • No sales pitch • Just clarity
            </p>
          </div>
        </div>

        {/* Trust Indicators - Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto">
          <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-6 rounded-xl shadow-lg text-center">
            <div className="text-2xl md:text-3xl font-bold text-[var(--cres-orange-primary)] mb-2">100+</div>
            <div className="text-sm md:text-base text-[var(--cres-white)]">Businesses Transformed</div>
          </div>
          <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-6 rounded-xl shadow-lg text-center">
            <div className="text-2xl md:text-3xl font-bold text-[var(--cres-orange-primary)] mb-2">300%</div>
            <div className="text-sm md:text-base text-[var(--cres-white)]">Average Growth</div>
          </div>
          <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-6 rounded-xl shadow-lg text-center">
            <div className="text-2xl md:text-3xl font-bold text-[var(--cres-orange-primary)] mb-2">24/7</div>
            <div className="text-sm md:text-base text-[var(--cres-white)]">System Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
