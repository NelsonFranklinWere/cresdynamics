export default function HeroSection3() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[var(--cres-secondary-bg)] to-[var(--cres-primary-bg)] relative">
      <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-10"></div>
      {/* Enhanced overlay for better content visibility */}
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        {/* Without the Right System, Your Business is Stuck. */}
        <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-[var(--cres-white)] mb-6 md:mb-8 underline-custom" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)'}}>
          Without the Right System, Your Business is <span className="text-[var(--cres-orange-primary)]">Stuck.</span>
        </h3>

        {/* Stop Spinning Your Wheels */}
        <p className="text-lg md:text-2xl text-[var(--cres-white)] mb-12 md:mb-16 max-w-4xl mx-auto" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)'}}>
          Stop Spinning Your Wheels — Let's Build a Machine That Works for You.
        </p>

        {/* 3 PROBLEM CARDS - 3 columns on all screen sizes */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-16 md:mb-20">
          {[
            {
              icon: <i className="fas fa-eye-slash"></i>,
              title: 'Invisible',
              subtitle: "You're not ranking online, and your visibility is low. Potential customers can't find you over the competition."
            },
            {
              icon: <i className="fas fa-envelope-open-text"></i>,
              title: 'Manual',
              subtitle: 'Your sales are slow, follow-ups are inconsistent, and your team stuck repetitive, boring tasks.'
            },
            {
              icon: <i className="fas fa-dollar-sign"></i>,
              title: 'Inefficient',
              subtitle: "You're spending too much to get too little. Leads slip through the cracks and valuable data is going to waste."
            }
          ].map((card, i) => (
            <div key={i} className="group p-3 md:p-6 rounded-xl bg-black/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center justify-center gap-2 md:gap-3 mb-2 md:mb-3">
                <div className="text-base md:text-xl text-[var(--cres-white)] opacity-75 group-hover:scale-110 transition-transform">{card.icon}</div>
                <h4 className="text-xs md:text-sm font-black text-[var(--cres-orange-primary)] underline-custom group-hover:text-[var(--cres-orange-primary)] transition-colors">{card.title}</h4>
              </div>
              <p className="text-white leading-relaxed text-center text-xs md:text-sm">{card.subtitle}</p>
            </div>
          ))}
        </div>

        {/* THIS MEANS LIST + CTA - Mobile: Stack vertically, Desktop: 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* LEFT: This Means */}
          <div className="text-center md:text-left">
            <h4 className="text-2xl md:text-3xl font-black text-[var(--cres-white)] mb-6 md:mb-8 underline-custom" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)'}}>This Means:</h4>
            <ul className="text-lg md:text-xl text-[var(--cres-white)] font-medium space-y-3 md:space-y-4">
              <li className="flex items-center justify-center md:justify-start">
                <span className="text-[var(--cres-orange-primary)] mr-3 md:mr-4 text-xl md:text-2xl" style={{textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'}}>•</span>
                <span style={{textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'}}>Wasted Ad Spend</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <span className="text-[var(--cres-orange-primary)] mr-3 md:mr-4 text-xl md:text-2xl" style={{textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'}}>•</span>
                <span style={{textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'}}>Missed Sales Opportunities</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <span className="text-[var(--cres-orange-primary)] mr-3 md:mr-4 text-xl md:text-2xl" style={{textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'}}>•</span>
                <span style={{textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'}}>Burnout & Frustration</span>
              </li>
            </ul>
          </div>

          {/* RIGHT: Let's Finally Fix It */}
          <div className="text-center md:text-left">
            <h4 className="text-2xl md:text-3xl font-black text-[var(--cres-white)] mb-6 md:mb-8 underline-custom" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)'}}>Let's Finally Fix It.</h4>
            <p className="text-lg md:text-xl text-[var(--cres-white)] mb-6 md:mb-8 leading-relaxed" style={{textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)'}}>
              Imagine a system so powerful it literally pays for itself.
            </p>
            <div className="text-center md:text-left">
              <a href="/contact" className="inline-flex items-center gap-1.5 bg-[var(--cres-orange-primary)] hover:bg-[#E87528] text-[var(--cres-white)] font-bold text-xs px-3 py-1.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 uppercase tracking-wide">
                Book Session
                <i className="fas fa-chevron-right text-xs"></i>
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
