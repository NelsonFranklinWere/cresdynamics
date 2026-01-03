export default function HeroSection3() {
  return (
    <section className="py-32 bg-gradient-to-b from-[var(--cres-secondary-bg)] to-[var(--cres-primary-bg)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Without the Right System, Your Business is Stuck. */}
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--cres-white)] mb-8 underline-custom" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)'}}>
          Without the Right System, Your Business is <span className="text-[var(--cres-orange-primary)]">Stuck.</span>
        </h3>

        {/* Stop Spinning Your Wheels */}
        <p className="text-xl md:text-2xl text-[var(--cres-white)] mb-16 max-w-4xl mx-auto" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)'}}>
          Stop Spinning Your Wheels — Let's Build a Machine That Works for You.
        </p>

        {/* 3 PROBLEM CARDS */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto mb-20">
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
            <div key={i} className="group p-6 md:p-10 rounded-xl bg-black/70 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
                <div className="text-2xl md:text-3xl text-[var(--cres-white)] opacity-75 group-hover:scale-110 transition-transform">{card.icon}</div>
                <h4 className="text-xs md:text-sm font-black text-[var(--cres-orange-primary)] underline-custom group-hover:text-[var(--cres-orange-primary)] transition-colors">{card.title}</h4>
              </div>
              <p className="text-white leading-relaxed text-center text-sm md:text-base">{card.subtitle}</p>
            </div>
          ))}
        </div>

        {/* THIS MEANS LIST + CTA */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* LEFT: This Means */}
          <div className="text-center md:text-left">
            <h4 className="text-3xl font-black text-[var(--cres-white)] mb-8 underline-custom" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)'}}>This Means:</h4>
            <ul className="text-xl text-[var(--cres-white)] font-medium space-y-4">
              <li className="flex items-center justify-center md:justify-start">
                <span className="text-[var(--cres-orange-primary)] mr-4 text-2xl" style={{textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'}}>•</span>
                <span style={{textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'}}>Wasted Ad Spend</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <span className="text-[var(--cres-orange-primary)] mr-4 text-2xl" style={{textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'}}>•</span>
                <span style={{textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'}}>Missed Sales Opportunities</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <span className="text-[var(--cres-orange-primary)] mr-4 text-2xl" style={{textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'}}>•</span>
                <span style={{textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'}}>Burnout & Frustration</span>
              </li>
            </ul>
          </div>

          {/* RIGHT: Let's Finally Fix It */}
          <div className="text-center md:text-left">
            <h4 className="text-3xl font-black text-[var(--cres-white)] mb-8 underline-custom" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)'}}>Let's Finally Fix It.</h4>
            <p className="text-xl text-[var(--cres-white)] mb-8 leading-relaxed" style={{textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)'}}>
              Imagine a system so powerful it literally pays for itself.
            </p>
            <div className="text-center md:text-left">
              <a href="/contact" className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[#E87528] text-[var(--cres-white)] font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500 uppercase tracking-wide">
                Book Your Free Strategy Session
                <i className="fas fa-chevron-right text-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
