export default function FinalCTA() {
  return (
    <section className="py-32 bg-gradient-to-r from-[var(--cres-primary-bg)] via-[#0D1520] to-[var(--cres-primary-bg)] relative">
      <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-20"></div>
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Final Statement */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--cres-white)] mb-6 underline-custom" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)'}}>
            Ready to Build Systems That Run Your Company?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-[var(--cres-text-secondary)] max-w-3xl mx-auto leading-relaxed" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)'}}>
            Your business deserves systems that work. ERPs, finance platforms, and automation—designed for scale, visibility, and control.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-[var(--cres-card-bg)] p-6 md:p-12 rounded-xl shadow-2xl border border-[var(--cres-divider)] mb-12">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[var(--cres-white)] mb-4 md:mb-6">
            Book a Systems Discovery Session
          </h3>
          <p className="text-base md:text-lg text-[var(--cres-text-secondary)] mb-6 md:mb-8 max-w-2xl mx-auto">
            We map your processes and data, identify system requirements, and show how we architect and deploy ERPs and finance platforms that companies run on.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
            <a
              href="/contact"
              className="inline-block bg-[var(--cres-orange-primary)] hover:bg-[#E87528] text-[var(--cres-black)] font-bold text-sm px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 uppercase tracking-wide"
            >
              Book Session
            </a>
            <p className="text-xs md:text-sm text-[var(--cres-text-secondary)]">
              No commitment • No sales pitch • Just clarity
            </p>
          </div>
        </div>

        {/* Trust Indicators - Cards - 3 columns on all screen sizes */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
          <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-4 rounded-xl shadow-lg text-center">
            <div className="text-lg md:text-xl font-bold text-[var(--cres-orange-primary)] mb-1">100+</div>
            <div className="text-xs md:text-sm text-[var(--cres-white)]">Businesses Transformed</div>
          </div>
          <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-4 rounded-xl shadow-lg text-center">
            <div className="text-lg md:text-xl font-bold text-[var(--cres-orange-primary)] mb-1">300%</div>
            <div className="text-xs md:text-sm text-[var(--cres-white)]">Average Growth</div>
          </div>
          <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-4 rounded-xl shadow-lg text-center">
            <div className="text-lg md:text-xl font-bold text-[var(--cres-orange-primary)] mb-1">24/7</div>
            <div className="text-xs md:text-sm text-[var(--cres-white)]">System Support</div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
