export default function HeroSection1() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--cres-gradient-bg)] via-black to-[var(--cres-dark)] relative overflow-hidden pt-20">
      {/* CITY GLOW OVERLAYS */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[radial-gradient(circle_at_30%_70%,rgba(244,122,42,0.3)_0%,transparent_50%)] rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[rgba(79,179,184,0.15)] rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* H1: Turn Clicks Into Clients. Turn Chaos Into Growth. */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--cres-white)] leading-tight mb-8 animate-fade-in-up">
          Turn Clicks Into Clients.{' '}
          <span className="text-[var(--cres-orange-primary)]">Turn Chaos Into Growth.</span>
        </h1>

        {/* H2: Smart Websites, SEO & Automation Solutions */}
        <p className="text-xl md:text-2xl text-[var(--cres-text-secondary)] mb-16 max-w-4xl mx-auto leading-relaxed">
          Smart Websites, SEO & Automation Solutions to Supercharge Your Business.
        </p>

        {/* 3 VALUE CARDS - Horizontal layout */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {[
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              ),
              title: 'Get Found Faster',
              text: 'Boost your visibility & drive quality traffic.'
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              ),
              title: 'Automate Your Sales',
              text: 'Convert leads with AI & automated follow-ups.'
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              ),
              title: 'Scale Your Success',
              text: 'Streamline processes & grow efficiently.'
            }
          ].map((card, i) => (
            <div key={i} className="group p-8 rounded-xl bg-[var(--cres-card-bg)] backdrop-blur-xl border border-[var(--cres-divider)] hover:bg-[var(--cres-secondary-bg)]/80 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-[var(--cres-orange-primary)] mb-6 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-[var(--cres-white)] mb-4 group-hover:text-[var(--cres-orange-primary)] transition-colors">
                {card.title}
              </h3>
              <p className="text-[var(--cres-text-secondary)] leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* PRIMARY CTA: Get Your Free Strategy Session */}
        <div className="animate-bounce">
          <a href="#book-session" className="inline-block bg-[var(--cres-orange-primary)] hover:bg-[#E87528] text-[var(--cres-black)] font-bold text-lg px-12 py-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500 uppercase tracking-wide">
            Get Your Free Strategy Session
          </a>
        </div>
      </div>
    </section>
  );
}
