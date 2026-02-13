export default function HeroSection2() {
  return (
    <section className="pt-6 md:pt-8 pb-20 md:pb-32 bg-[var(--cres-secondary-bg)] relative">
      <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-10"></div>
      {/* Enhanced overlay for better content visibility */}
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        {/* STRUGGLING TO GROW ONLINE? */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-[var(--cres-white)] mb-6 md:mb-8 underline-custom" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)'}}>
          Operating Without Systems?
        </h2>

        <p className="text-lg md:text-2xl text-[var(--cres-white)] mb-12 md:mb-16 max-w-4xl mx-auto" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)'}}>
          No visibility. No control. Manual processes that don't scale. Let's map and fix that.
        </p>

        <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {[
            { num: '90%', label: 'of businesses lack unified systems for operations and finance.' },
            { num: '60%', label: 'of data stays in spreadsheets instead of one platform.' },
            { num: '1000s', label: 'of hours lost to manual workflows and approvals.' }
          ].map((stat, i) => (
            <div key={i} className="group p-3 md:p-4 rounded-xl bg-black/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
              {/* STAT NUMBER: Large, bold, orange */}
              <div className="text-lg md:text-xl lg:text-2xl font-black text-[var(--cres-orange-primary)] mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.num}
              </div>
              {/* LABEL: Secondary text */}
              <p className="text-white text-xs md:text-sm lg:text-base font-medium leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="mt-8 md:mt-12 text-center">
          <a href="/contact" className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[#E87528] text-[var(--cres-white)] font-bold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500 uppercase tracking-wide">
            Book a Systems Discovery Session
            <i className="fas fa-chevron-right text-sm"></i>
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}
