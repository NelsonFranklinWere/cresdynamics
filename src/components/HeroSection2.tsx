export default function HeroSection2() {
  return (
    <section className="py-32 bg-[var(--cres-dark)]/50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* H1: Secondary hero */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--cres-white)] mb-16">
          Turn Clicks Into Clients. Turn Chaos Into Growth.
        </h2>

        {/* 3 FEATURE CARDS - Horizontal layout */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: '🚀', title: 'Get Faster', subtitle: 'quality traffic', color: 'cres-orange-primary' },
            { icon: '🤖', title: 'Automate', subtitle: 'your sales with AI', color: 'cres-orange-primary' },
            { icon: '📈', title: 'Scale', subtitle: 'success efficiently', color: 'cres-orange-primary' }
          ].map((card, i) => (
            <div key={i} className="group p-12 rounded-3xl bg-gradient-to-br from-[var(--cres-dark)]/80 to-[var(--cres-charcoal)]/60 backdrop-blur-xl border border-[var(--cres-charcoal)]/30 shadow-xl hover:shadow-[var(--shadow-lg)] hover:-translate-y-4 transition-all duration-700 cursor-pointer">
              <div className="text-5xl mb-8 opacity-80 group-hover:scale-110 transition-transform">{card.icon}</div>
              <h3 className="text-2xl md:text-3xl font-black text-[var(--cres-white)] mb-4 group-hover:text-[var(--cres-orange-primary)] transition-colors">{card.title}</h3>
              <p className="text-lg text-[var(--cres-light)] font-medium">{card.subtitle}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24">
          <a href="#book-session" className="bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-[var(--cres-black)] font-bold px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-lg uppercase">
            Get Free Strategy Session
          </a>
        </div>

        {/* PROBLEM TEASER */}
        <div className="mt-32 text-[var(--cres-light)] text-lg max-w-4xl mx-auto">
          <p>Struggling With Leads & Wasting Money? Let's Fix That.</p>
        </div>
      </div>
    </section>
  );
}
