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
          Struggling to Grow Online?
        </h2>

        {/* Stop Losing Leads & Wasting Money */}
        <p className="text-lg md:text-2xl text-[var(--cres-white)] mb-12 md:mb-16 max-w-4xl mx-auto" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)'}}>
          Stop Losing Leads & Wasting Money. Let's Fix That.
        </p>

        {/* Stats Row - Mobile: Stack vertically, Desktop: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
          {[
            { num: '90%', label: 'of websites fail to convert visitors.' },
            { num: '60%', label: 'of leads go cold without follow-up.' },
            { num: '1000s', label: 'of hours wasted on manual tasks.' }
          ].map((stat, i) => (
            <div key={i} className="group p-4 md:p-8 rounded-xl bg-black/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
              {/* STAT NUMBER: Large, bold, orange */}
              <div className="text-2xl md:text-3xl lg:text-4xl font-black text-[var(--cres-orange-primary)] mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.num}
              </div>
              {/* LABEL: Secondary text */}
              <p className="text-white text-sm md:text-base lg:text-lg font-medium leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="mt-8 md:mt-12 text-center">
          <a href="/contact" className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[#E87528] text-[var(--cres-white)] font-bold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500 uppercase tracking-wide">
            Get Your Free Strategy Session
            <i className="fas fa-chevron-right text-sm"></i>
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}
