export default function FinalCTA() {
  return (
    <section className="py-32 bg-gradient-to-r from-[var(--cres-primary-bg)] via-[#0D1520] to-[var(--cres-primary-bg)]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Final Statement */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--cres-white)] mb-6">
            Ready to Stop the Struggle and Start Growing?
          </h2>
          <p className="text-xl md:text-2xl text-[var(--cres-text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Your business deserves systems that work. Not guesswork. Not hype. Just results.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-[var(--cres-card-bg)] p-12 rounded-xl shadow-2xl border border-[var(--cres-divider)] mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--cres-white)] mb-6">
            Get Your Free Strategy Session
          </h3>
          <p className="text-lg text-[var(--cres-text-secondary)] mb-8 max-w-2xl mx-auto">
            We'll analyze your current situation, identify the biggest opportunities, and show you exactly how to turn clicks into clients.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#book-session"
              className="inline-block bg-[var(--cres-orange-primary)] hover:bg-[#E87528] text-[var(--cres-black)] font-bold text-lg px-12 py-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500 uppercase tracking-wide"
            >
              Book Your Free Session Now
            </a>
            <p className="text-sm text-[var(--cres-text-secondary)]">
              No commitment • No sales pitch • Just clarity
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--cres-orange-primary)] mb-2">100+</div>
            <div className="text-[var(--cres-text-secondary)]">Businesses Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--cres-orange-primary)] mb-2">300%</div>
            <div className="text-[var(--cres-text-secondary)]">Average Growth</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--cres-orange-primary)] mb-2">24/7</div>
            <div className="text-[var(--cres-text-secondary)]">System Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
