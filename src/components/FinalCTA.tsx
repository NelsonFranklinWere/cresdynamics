export default function FinalCTA() {
  return (
    <section className="py-32 bg-gradient-to-r from-[var(--cres-primary-bg)] via-[#0D1520] to-[var(--cres-primary-bg)] relative">
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Final Statement */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--cres-white)] mb-6 underline-custom" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)'}}>
            Ready for Proprietary Operating Environments That Run Your Company?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-[var(--cres-text-secondary)] max-w-3xl mx-auto leading-relaxed" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)'}}>
            We engineer digital infrastructure—not websites. Our systems are so essential clients stay for years. High retention. Cres Core Engine. Zero-Trust Architecture.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-[var(--cres-card-bg)] p-6 md:p-12 rounded-xl shadow-2xl border border-[var(--cres-divider)] mb-12">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[var(--cres-white)] mb-4 md:mb-6">
            Choose Your Next Step
          </h3>
          <p className="text-base md:text-lg text-[var(--cres-text-secondary)] mb-6 md:mb-8 max-w-2xl mx-auto">
            See exactly how we build, or review proof of the systems we already run in production. No pitch—just clarity on
            our approach and work.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
            <a
              href="/how-we-build"
              className="inline-block bg-[var(--cres-orange-primary)] hover:bg-[#E87528] text-[var(--cres-black)] font-bold text-sm px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 uppercase tracking-wide"
            >
              How We Build
            </a>
            <a
              href="/proof-of-work"
              className="inline-block border border-[var(--cres-divider)] text-[var(--cres-white)] font-bold text-sm px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-300 uppercase tracking-wide"
            >
              Our Work
            </a>
          </div>
        </div>

        {/* Trust Indicators - Cards - 3 columns on all screen sizes */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
          <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-4 rounded-xl shadow-lg text-center">
            <div className="text-lg md:text-xl font-bold text-[var(--cres-orange-primary)] mb-1">Cres Core Engine</div>
            <div className="text-xs md:text-sm text-[var(--cres-white)]">Proprietary framework • Deploy faster</div>
          </div>
          <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-4 rounded-xl shadow-lg text-center">
            <div className="text-lg md:text-xl font-bold text-[var(--cres-orange-primary)] mb-1">High Retention</div>
            <div className="text-xs md:text-sm text-[var(--cres-white)]">Systems so essential they stay for years</div>
          </div>
          <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-4 rounded-xl shadow-lg text-center">
            <div className="text-lg md:text-xl font-bold text-[var(--cres-orange-primary)] mb-1">SOPs & Manuals</div>
            <div className="text-xs md:text-sm text-[var(--cres-white)]">A manual for everything • Capital-ready</div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
