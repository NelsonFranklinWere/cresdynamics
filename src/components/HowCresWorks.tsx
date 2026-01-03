export default function HowCresWorks() {
  return (
    <section className="py-32 bg-[var(--cres-primary-bg)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          {/* Here's How CRES Transforms Frustration Into Growth. */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--cres-white)] mb-8 underline-custom" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)'}}>
            Here's How CRES Transforms <span className="text-[var(--cres-orange-primary)]">Frustration Into Growth.</span>
          </h2>

          {/* From attracting visitors to automating sales */}
          <p className="text-xl md:text-2xl text-[var(--cres-white)] max-w-4xl mx-auto" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)'}}>
            From attracting visitors to automating sales — we build systems that work while you work.
          </p>
        </div>

        {/* PROCESS CARDS - Horizontal Flow */}
        <div className="relative">
          {/* Process Steps */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 mb-20">
            {[
              {
                number: '1️⃣',
                title: 'Audit & Strategy',
                text: 'We analyze gaps and define a custom growth plan.'
              },
              {
                number: '2️⃣',
                title: 'Build & Optimize',
                text: 'Conversion-focused website, SEO, and systems.'
              },
              {
                number: '3️⃣',
                title: 'Automate & Integrate',
                text: 'AI captures, follows up, and nurtures leads.'
              },
              {
                number: '4️⃣',
                title: 'Measure & Scale',
                text: 'Real-time analytics to double down on what works.'
              }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="group p-6 rounded-xl bg-black/70 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-2xl">{step.number}</div>
                    <h3 className="text-lg font-bold text-[var(--cres-white)] group-hover:text-[var(--cres-orange-primary)] transition-colors">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-white leading-relaxed text-sm">
                    {step.text}
                  </p>
                </div>

                {/* Arrow between steps (not on last item) */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <svg className="w-8 h-8 text-[var(--cres-orange-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* STATEMENT BANNER */}
          <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-6 md:p-12 rounded-xl shadow-lg text-center mb-16">
            <p className="text-xl md:text-2xl lg:text-3xl font-black text-[var(--cres-white)]">
              With CRES, You're Not Buying Services.
              <br />
              <span className="text-[var(--cres-orange-primary)] underline-custom">You're Investing in Results.</span>
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a href="/contact" className="inline-block bg-[var(--cres-orange-primary)] hover:bg-[#E87528] text-[var(--cres-black)] font-bold text-lg px-12 py-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500 uppercase tracking-wide">
              Get Your Free Strategy Session
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
