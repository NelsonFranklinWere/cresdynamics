export default function HeroSection1() {
  return (
    <section className="py-12 md:py-20 flex items-center justify-center bg-gradient-to-br from-[var(--cres-gradient-bg)] via-black to-[var(--cres-dark)] relative overflow-hidden">
      {/* Optimized background image - CSS background for better performance */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/backround.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform'
        }}
      />
      {/* ENHANCED BACKGROUND IMAGE OVERLAY FOR BETTER OPACITY */}
      <div className="absolute inset-0 bg-black/60"></div>
      {/* CITY GLOW OVERLAYS - deferred animation */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[radial-gradient(circle_at_30%_70%,rgba(244,122,42,0.2)_0%,transparent_50%)] rounded-full blur-xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[rgba(79,179,184,0.1)] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center relative z-10">
        {/* H1: Turn Clicks Into Clients. Turn Chaos Into Growth. - LCP Element */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-[var(--cres-white)] leading-tight mb-6 md:mb-8 underline-custom" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)'}}>
          Turn Clicks Into Clients.{' '}
          <span className="text-[var(--cres-orange-primary)]">Turn Chaos Into Growth.</span>
        </h1>

        {/* H2: Smart Websites, SEO & Automation Solutions */}
        <p className="text-lg md:text-2xl font-bold text-[var(--cres-white)] mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)'}}>
          Smart Websites, SEO & Automation Solutions to Supercharge Your Business.
        </p>

        {/* VALUE CARDS - Mobile: Stack vertically, Desktop: 3 columns */}
        <div className="max-w-6xl mx-auto mb-12 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
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
              <div key={i} className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 group hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <div className="text-[var(--cres-orange-primary)] group-hover:scale-110 transition-transform text-lg md:text-2xl">
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
          <a href="/contact" className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[#E87528] text-[var(--cres-white)] font-bold text-base md:text-lg px-6 md:px-8 py-3 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500 uppercase tracking-wide">
            Get Your Free Strategy Session
            <i className="fas fa-chevron-right text-sm"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
