export default function HeroSection2() {
  return (
    <section className="pt-8 pb-32 bg-[var(--cres-secondary-bg)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* STRUGGLING TO GROW ONLINE? */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--cres-white)] mb-8 underline-custom" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)'}}>
          Struggling to Grow Online?
        </h2>

        {/* Stop Losing Leads & Wasting Money */}
        <p className="text-xl md:text-2xl text-[var(--cres-white)] mb-16 max-w-4xl mx-auto" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)'}}>
          Stop Losing Leads & Wasting Money. Let's Fix That.
        </p>

        {/* Stats Row (3 Columns) */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
          {[
            { num: '90%', label: 'of websites fail to convert visitors.' },
            { num: '60%', label: 'of leads go cold without follow-up.' },
            { num: '1000s', label: 'of hours wasted on manual tasks.' }
          ].map((stat, i) => (
            <div key={i} className="group p-4 md:p-8 rounded-xl bg-black/70 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
              {/* STAT NUMBER: Large, bold, white */}
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

        {/* YELLOW CTA CARD */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-[var(--cres-orange-primary)] rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--cres-black)] text-center mb-4">
              Book Your Free Strategy Session
            </h3>
            <p className="text-[var(--cres-black)] text-center text-lg mb-6 opacity-90">
              Let's identify what's holding your growth back and fix it.
            </p>
            <div className="text-center">
              <a href="/contact" className="inline-block bg-[var(--cres-black)] hover:bg-gray-800 text-[var(--cres-orange-primary)] font-bold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
