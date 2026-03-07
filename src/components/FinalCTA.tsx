export default function FinalCTA() {
  return (
    <section className="py-32 relative" style={{ background: 'var(--cres-gradient-bg)' }}>
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Final Statement */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.3)' }}>
            Ready for Proprietary Operating Environments That Run Your Company?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            We engineer digital infrastructure—not websites. Our systems are so essential clients stay for years. High retention. Cres Core Engine. Zero-Trust Architecture.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-[var(--navy-dark)]/90 backdrop-blur-sm p-6 md:p-12 rounded-xl shadow-xl border border-white/10 mb-12">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-6">
            Choose Your Next Step
          </h3>
          <p className="text-base md:text-lg text-white/85 mb-6 md:mb-8 max-w-2xl mx-auto">
            See exactly how we build, or review proof of the systems we already run in production. No pitch—just clarity on
            our approach and work.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
            <a
              href="https://wa.me/254708805496?text=Hi%2C%20I'd%20like%20to%20book%20a%20strategy%20session%20with%20CRES%20Dynamics."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[var(--orange-energy)] hover:bg-[var(--orange-energy-hover)] text-white font-bold text-sm px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            >
              Book Strategy Session
            </a>
            <a
              href="tel:+254708805496"
              className="inline-block border-2 border-[var(--teal-accent)] text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-[var(--teal-accent)]/20 transition-all duration-300 uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-[var(--teal-accent)] focus:ring-offset-2 focus:ring-offset-transparent"
            >
              Call 0708 805 496
            </a>
            <a
              href="/how-we-build"
              className="inline-block border border-white/40 text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 uppercase tracking-wide"
            >
              How We Build
            </a>
          </div>
        </div>

        {/* Trust Indicators - Cards - 3 columns on all screen sizes */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl shadow-lg text-center">
            <div className="text-lg md:text-xl font-bold text-[var(--orange-energy)] mb-1">Cres Core Engine</div>
            <div className="text-xs md:text-sm text-white/90">Proprietary framework • Deploy faster</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl shadow-lg text-center">
            <div className="text-lg md:text-xl font-bold text-[var(--orange-energy)] mb-1">High Retention</div>
            <div className="text-xs md:text-sm text-white/90">Systems so essential they stay for years</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl shadow-lg text-center">
            <div className="text-lg md:text-xl font-bold text-[var(--orange-energy)] mb-1">SOPs & Manuals</div>
            <div className="text-xs md:text-sm text-white/90">A manual for everything • Capital-ready</div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
