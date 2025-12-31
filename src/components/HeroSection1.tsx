export default function HeroSection1() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--cres-gradient-bg)] via-black to-[var(--cres-dark)] relative overflow-hidden pt-20">
      {/* CITY GLOW OVERLAYS */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[radial-gradient(circle_at_30%_70%,rgba(255,165,0,0.3)_0%,transparent_50%)] rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[rgba(255,165,0,0.15)] rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* H1: Massive, white, 4xl-7xl, hero font weight */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[var(--cres-white)] leading-tight mb-12 animate-fade-in-up">
          Struggling to Grow Online?
        </h1>

        {/* 3 STATS CARDS - EXACT POSITIONING & SHADOWS */}
        <div className="stats-grid grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {[
            { num: '90%', label: 'of websites fail to convert', color: 'cres-orange-stat' },
            { num: '60%', label: 'of leads go without follow-up', color: 'cres-orange-stat' },
            { num: '10000s', label: 'of hours wasted manual tasks', color: 'cres-orange-stat' }
          ].map((stat, i) => (
            <div key={i} className="group p-8 rounded-2xl bg-[var(--cres-dark)]/80 backdrop-blur-xl border border-[var(--cres-charcoal)]/50 hover:bg-[var(--cres-charcoal)]/50 shadow-2xl hover:shadow-[var(--shadow-lg)] transition-all duration-500 hover:-translate-y-2">
              {/* STAT NUMBER: 3xl-5xl, orange, bold */}
              <div className="text-3xl md:text-5xl font-black text-[var(--cres-orange-stat)] mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.num}
              </div>
              {/* LABEL: muted, 16px, center */}
              <p className="text-[var(--cres-muted)] text-base md:text-lg font-medium text-center leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* PRIMARY CTA: Largest, most prominent */}
        <div className="animate-bounce">
          <a href="#book-session" className="cta-hero inline-block bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-[var(--cres-black)] font-black text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-[var(--shadow-lg)] hover:-translate-y-2 transition-all duration-500 uppercase tracking-wider border-4 border-transparent hover:border-[var(--cres-orange-primary)]/50">
            Get Your Free Strategy Session
          </a>
        </div>
      </div>
    </section>
  );
}
