export default function WhyChooseCres() {
  return (
    <section className="py-20 bg-gradient-to-br from-[var(--cres-primary-bg)] to-[var(--cres-secondary-bg)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--cres-white)] mb-8 underline-custom">
            Why Businesses Choose CRES Dynamics
          </h2>
          <p className="text-xl md:text-2xl text-[var(--cres-white)] max-w-4xl mx-auto" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}>
            We're not just another agency. We're your growth partner.
          </p>
        </div>

        {/* 4 CARDS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {[
            {
              icon: '🔧',
              title: 'Systems, not templates',
              text: 'Custom-built solutions that grow with you'
            },
            {
              icon: '🎯',
              title: 'Strategy before execution',
              text: 'We plan your growth, then build it'
            },
            {
              icon: '📈',
              title: 'Growth-focused, ROI-driven',
              text: 'Every feature drives revenue'
            },
            {
              icon: '🌍',
              title: 'Built for African businesses',
              text: 'Understanding your market and customers'
            }
          ].map((card, i) => (
            <div key={i} className="group bg-black/70 backdrop-blur-sm border border-white/20 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center justify-center gap-1 mb-3">
                <div className="text-xl group-hover:scale-110 transition-transform">{card.icon}</div>
                <h3 className="text-[10px] font-bold text-[var(--cres-white)] underline-custom leading-tight group-hover:text-[var(--cres-orange-primary)] transition-colors">
                  {card.title}
                </h3>
              </div>
              <p className="text-[var(--cres-white)] leading-relaxed text-center text-sm">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
