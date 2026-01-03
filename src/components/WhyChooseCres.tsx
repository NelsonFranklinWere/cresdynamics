export default function WhyChooseCres() {
  return (
    <section className="py-20 bg-gradient-to-br from-[var(--cres-primary-bg)] to-[var(--cres-secondary-bg)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--cres-white)] mb-8 underline-custom" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)'}}>
            Built for Businesses That Refuse to Stay <span className="text-[var(--cres-orange-primary)]">Invisible</span>.
          </h2>
          <p className="text-xl md:text-2xl text-[var(--cres-white)] max-w-4xl mx-auto" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}>
            Real Businesses. Real Growth. Real Results.
          </p>
        </div>

        {/* 4 BENEFIT CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-16">
          {[
            {
              icon: <i className="fas fa-chart-line"></i>,
              title: '+3x Visibility on Google in 90 Days.',
              text: 'We analyze your online presence, to identify gaps and craft a custom growth plan.'
            },
            {
              icon: <i className="fas fa-clock"></i>,
              title: 'Saved 20+ Hours/Week.',
              text: 'Your website is designed to convert. SEO & google strategy.'
            },
            {
              icon: <i className="fas fa-cog"></i>,
              title: 'Higher-Quality Leads, Not Just Traffic.',
              text: 'AI-driven automation captures, follow up, and nurtures leads, so you don\'t have to.'
            },
            {
              icon: <i className="fas fa-network-wired"></i>,
              title: 'Systems That Work Even When.',
              text: 'Track performance with real time, analytics and scale what works best.'
            }
          ].map((card, i) => (
            <div key={i} className="group bg-black/70 backdrop-blur-sm border border-white/20 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl text-[var(--cres-orange-primary)] group-hover:scale-110 transition-transform">{card.icon}</div>
                <h3 className="text-base md:text-lg font-bold text-[var(--cres-white)] group-hover:text-[var(--cres-orange-primary)] transition-colors">
                  {card.title}
                </h3>
              </div>
              <p className="text-[var(--cres-white)] leading-relaxed text-sm md:text-base">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* Industry Focus Section */}
        <div className="text-center mb-12">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-6">
            <div className="flex items-center gap-2 text-[var(--cres-white)]">
              <i className="fas fa-shopping-cart text-xl"></i>
              <span className="text-sm md:text-base">e-Commerce</span>
            </div>
            <div className="flex items-center gap-2 text-[var(--cres-white)]">
              <i className="fas fa-building text-xl"></i>
              <span className="text-sm md:text-base">Real Estate</span>
            </div>
            <div className="flex items-center gap-2 text-[var(--cres-white)]">
              <i className="fas fa-heartbeat text-xl"></i>
              <span className="text-sm md:text-base">Healthcare</span>
            </div>
            <div className="flex items-center gap-2 text-[var(--cres-white)]">
              <i className="fas fa-briefcase text-xl"></i>
              <span className="text-sm md:text-base">Small Business</span>
            </div>
          </div>
          <p className="text-lg md:text-xl text-[var(--cres-white)]" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}>
            Put your business on the path to predictable growth. It's what we do.
          </p>
        </div>

        {/* Comparison Section */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">
          {/* Typical Agencies */}
          <div className="bg-black/70 backdrop-blur-sm border border-red-500/30 p-8 rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <i className="fas fa-times-circle text-2xl text-red-500"></i>
              <h3 className="text-2xl font-bold text-[var(--cres-white)]">Typical Agencies</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="fas fa-diamond text-[var(--cres-orange-primary)] mt-1"></i>
                <span className="text-[var(--cres-white)]">Build websites and disappear</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-diamond text-[var(--cres-orange-primary)] mt-1"></i>
                <span className="text-[var(--cres-white)]">Focus on looks, not results</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-diamond text-[var(--cres-orange-primary)] mt-1"></i>
                <span className="text-[var(--cres-white)]">No SEO or automation strategy</span>
              </li>
            </ul>
          </div>

          {/* CRES Dynamics */}
          <div className="bg-black/70 backdrop-blur-sm border border-green-500/30 p-8 rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <i className="fas fa-check-circle text-2xl text-green-500"></i>
              <h3 className="text-2xl font-bold text-[var(--cres-white)]">CRES Dynamics</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="fas fa-check text-green-500 mt-1"></i>
                <span className="text-[var(--cres-white)]">Growth-first, system-driven approach</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-check text-green-500 mt-1"></i>
                <span className="text-[var(--cres-white)]">SEO + speed + conversion baked in</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-check text-green-500 mt-1"></i>
                <span className="text-[var(--cres-white)]">AI & automation from day one</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Final CTA in Section */}
        <div className="text-center mt-16">
          <h3 className="text-3xl md:text-4xl font-black text-[var(--cres-white)] mb-8" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)'}}>
            Stop Chasing Customers. Let Them Come to You.
          </h3>
          <a href="/contact" className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[#E87528] text-[var(--cres-white)] font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500 uppercase tracking-wide">
            Book a Free Strategy Session
            <i className="fas fa-chevron-right text-sm"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
