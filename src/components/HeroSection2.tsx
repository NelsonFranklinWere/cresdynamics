export default function HeroSection2() {
  return (
    <section className="py-32 bg-[var(--cres-secondary-bg)]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* STRUGGLING TO GROW ONLINE? */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--cres-white)] mb-8">
          Struggling to Grow Online?
        </h2>

        {/* Stop Losing Leads & Wasting Money */}
        <p className="text-xl md:text-2xl text-[var(--cres-text-secondary)] mb-16 max-w-4xl mx-auto">
          Stop Losing Leads & Wasting Money. Let's Fix That.
        </p>

        {/* Stats Row (3 Columns) */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { num: '90%', label: 'of websites fail to convert visitors.' },
            { num: '60%', label: 'of leads go cold without follow-up.' },
            { num: '1000s', label: 'of hours wasted on manual tasks.' }
          ].map((stat, i) => (
            <div key={i} className="group p-8 rounded-xl bg-[var(--cres-card-bg)] backdrop-blur-xl border border-[var(--cres-divider)] shadow-lg hover:shadow-xl transition-all duration-300">
              {/* STAT NUMBER: Large, bold, white */}
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--cres-orange-primary)] mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.num}
              </div>
              {/* LABEL: Secondary text */}
              <p className="text-[var(--cres-text-secondary)] text-base md:text-lg font-medium leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
