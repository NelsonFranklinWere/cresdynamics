export default function HeroSection3() {
  return (
    <section className="py-32 bg-gradient-to-b from-[var(--cres-dark)] to-[var(--cres-black)]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-4xl md:text-5xl font-black text-[var(--cres-white)] mb-20">
          Without The Right System, Your Business Is Stuck.
        </h3>

        {/* 3 PROBLEM CARDS */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {[
            { icon: '👁️', title: 'Invisible', subtitle: "you're not ranking, found over competition" },
            { icon: '✉️', title: 'Manual', subtitle: 'your sales, follow-ups too little leads', correction: 'your sales follow-ups are too slow for leads' },
            { icon: '⚡', title: 'Inefficient', subtitle: 'lead spend much through cracks', correction: 'lead spend much leaks through cracks' }
          ].map((card, i) => (
            <div key={i} className="group p-10 rounded-2xl bg-[var(--cres-charcoal)]/70 backdrop-blur-xl border border-[var(--cres-charcoal)]/50 shadow-xl hover:shadow-[var(--shadow-lg)] transition-all hover:-translate-y-3">
              <div className="text-6xl mb-6 opacity-75">{card.icon}</div>
              <h4 className="text-2xl font-black text-[var(--cres-white)] mb-4">{card.title}</h4>
              <p className="text-[var(--cres-muted)] leading-relaxed">{card.subtitle}</p>
            </div>
          ))}
        </div>

        {/* SOLUTION + FINAL CTA */}
        <div className="space-y-8 max-w-2xl mx-auto">
          <div className="bg-[var(--cres-orange-glow)] p-12 rounded-3xl shadow-2xl border-2 border-[var(--cres-orange-primary)]/30">
            <h4 className="text-3xl font-black text-[var(--cres-black)] mb-6">This Means:</h4>
            <ul className="text-xl text-[var(--cres-dark)] font-semibold space-y-2 list-disc list-inside">
              <li>Burnt Ad Spend</li>
              <li>Frustrated Customers</li>
              <li>Lost Revenue</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-[var(--cres-orange-primary)] to-[var(--cres-orange-stat)] p-2 rounded-2xl inline-block">
            <a href="#book-session" className="block bg-[var(--cres-black)] text-[var(--cres-orange-primary)] font-black px-12 py-6 rounded-xl shadow-2xl hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all text-xl uppercase tracking-wide">
              Let's Finally Fix It. Book Your Free Strategy Session Today!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
