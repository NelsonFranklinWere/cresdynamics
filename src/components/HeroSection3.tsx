export default function HeroSection3() {
  return (
    <section className="py-32 bg-gradient-to-b from-[var(--cres-secondary-bg)] to-[var(--cres-primary-bg)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Without the Right System, Your Business is Stuck. */}
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--cres-white)] mb-8">
          Without the Right System, Your Business is <span className="text-[var(--cres-orange-primary)]">Stuck.</span>
        </h3>

        {/* Stop Spinning Your Wheels */}
        <p className="text-xl md:text-2xl text-[var(--cres-text-secondary)] mb-16 max-w-4xl mx-auto">
          Stop Spinning Your Wheels — Let's Build a Machine That Works for You.
        </p>

        {/* 3 PROBLEM CARDS */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {[
            {
              icon: '👁️',
              title: 'Invisible',
              subtitle: "You’re not ranking online. Potential customers can't find you."
            },
            {
              icon: '✉️',
              title: 'Manual',
              subtitle: 'Sales are slow. Follow-ups are inconsistent. Teams burn out.'
            },
            {
              icon: '⚡',
              title: 'Inefficient',
              subtitle: 'You spend more to get less. Leads slip through cracks.'
            }
          ].map((card, i) => (
            <div key={i} className="group p-10 rounded-xl bg-black border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-6xl mb-6 opacity-75 group-hover:scale-110 transition-transform">{card.icon}</div>
              <h4 className="text-xl font-black text-[var(--cres-white)] mb-4 group-hover:text-[var(--cres-orange-primary)] transition-colors">{card.title}</h4>
              <p className="text-white leading-relaxed">{card.subtitle}</p>
            </div>
          ))}
        </div>

        {/* THIS MEANS LIST + CTA */}
        <div className="space-y-8 max-w-3xl mx-auto">
          <div className="bg-[var(--cres-orange-primary)]/10 p-12 rounded-xl shadow-lg border border-[var(--cres-orange-primary)]/20">
            <h4 className="text-2xl font-black text-[var(--cres-white)] mb-6">This Means:</h4>
            <ul className="text-lg text-[var(--cres-text-secondary)] font-medium space-y-3">
              <li className="flex items-center">
                <span className="text-[var(--cres-orange-primary)] mr-3">•</span>
                Wasted Ad Spend
              </li>
              <li className="flex items-center">
                <span className="text-[var(--cres-orange-primary)] mr-3">•</span>
                Missed Sales Opportunities
              </li>
              <li className="flex items-center">
                <span className="text-[var(--cres-orange-primary)] mr-3">•</span>
                Burnout & Frustration
              </li>
            </ul>
          </div>

          <div className="animate-bounce">
            <a href="#book-session" className="inline-block bg-[var(--cres-orange-primary)] hover:bg-[#E87528] text-[var(--cres-black)] font-bold text-lg px-12 py-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500 uppercase tracking-wide">
              Book Your Free Strategy Session
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
