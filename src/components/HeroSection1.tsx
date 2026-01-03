export default function HeroSection1() {
  return (
    <section className="py-20 flex items-center justify-center bg-gradient-to-br from-[var(--cres-gradient-bg)] via-black to-[var(--cres-dark)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center relative overflow-hidden">
      {/* BACKGROUND IMAGE OVERLAY FOR OPACITY */}
      <div className="absolute inset-0 bg-black/10"></div>
      {/* CITY GLOW OVERLAYS */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[radial-gradient(circle_at_30%_70%,rgba(244,122,42,0.3)_0%,transparent_50%)] rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[rgba(79,179,184,0.15)] rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* H1: Turn Clicks Into Clients. Turn Chaos Into Growth. */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--cres-white)] leading-tight mb-8 animate-fade-in-up underline-custom">
          <span style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)'}}>
            Turn Clicks Into Clients.{' '}
            <span className="text-[var(--cres-orange-primary)]">Turn Chaos Into Growth.</span>
          </span>
        </h1>

        {/* H2: Smart Websites, SEO & Automation Solutions */}
        <p className="text-xl md:text-2xl font-bold text-[var(--cres-white)] mb-16 max-w-4xl mx-auto leading-relaxed" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)'}}>
          Smart Websites, SEO & Automation Solutions to Supercharge Your Business.
        </p>

        {/* VALUE CARDS - Separate Cards in One Row */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: <i className="fas fa-search-location"></i>,
                title: 'Get Found Faster',
                text: 'Boost your visibility & drive quality traffic.'
              },
              {
                icon: <i className="fas fa-cog"></i>,
                title: 'Automate Your Sales',
                text: 'Convert leads with AI & automated follow-ups.'
              },
              {
                icon: <i className="fas fa-chart-line"></i>,
                title: 'Scale Your Success',
                text: 'Streamline processes & grow efficiently.'
              }
            ].map((card, i) => (
              <div key={i} className="bg-black/60 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 group hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <div className="text-[var(--cres-orange-primary)] group-hover:scale-110 transition-transform text-xl md:text-2xl">
                    {card.icon}
                  </div>
                  <h3 className="text-sm md:text-lg font-bold text-[var(--cres-white)] group-hover:text-[var(--cres-orange-primary)] transition-colors underline-custom">
                    {card.title}
                  </h3>
                </div>
                <p className="text-white leading-relaxed text-sm md:text-base">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* PRIMARY CTA: Get Your Free Strategy Session */}
        <div>
          <a href="/contact" className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[#E87528] text-[var(--cres-white)] font-bold text-lg px-8 py-3 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500 uppercase tracking-wide">
            Get Your Free Strategy Session
            <i className="fas fa-chevron-right text-sm"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
