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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20">
            {[
              {
                icon: <i className="fas fa-search"></i>,
                title: 'Audit & Strategy',
                text: 'We analyze your online presence to identify gaps and craft a custom growth plan.'
              },
              {
                icon: <i className="fas fa-rocket"></i>,
                title: 'Build & Optimize',
                text: 'Your website is designed to convert. SEO and conversion tools, put you in front of your perfect customer.'
              },
              {
                icon: <i className="fas fa-users-cog"></i>,
                title: 'Automate & Integrate',
                text: 'AI-driven automation captures, follows up, and nurtures leads, so you don\'t have to.'
              },
              {
                icon: <i className="fas fa-chart-bar"></i>,
                title: 'Measure & Scale',
                text: 'Track performance with real-time analytics and scale what works best.'
              }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="group p-6 rounded-xl bg-black/70 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-2xl text-[var(--cres-white)]">{step.icon}</div>
                    <h3 className="text-lg font-bold text-[var(--cres-white)] group-hover:text-[var(--cres-orange-primary)] transition-colors underline-custom">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-white leading-relaxed text-sm">
                    {step.text}
                  </p>
                </div>

                {/* Arrow between steps (not on last item) */}
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <i className="fas fa-arrow-right text-2xl text-[var(--cres-orange-primary)]"></i>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* STATEMENT BANNER */}
          <div className="bg-black backdrop-blur-sm border border-white/20 p-6 md:p-12 rounded-xl shadow-lg text-center mb-16">
            <p className="text-xl md:text-2xl lg:text-3xl font-black text-[var(--cres-white)]">
              With CRES, You're Not Buying Services.
              <br />
              <span className="text-[var(--cres-orange-primary)] underline-custom">You're Investing in Results.</span>
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a href="/contact" className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[#E87528] text-[var(--cres-white)] font-bold text-lg px-12 py-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500 uppercase tracking-wide">
              Get Your Free Strategy Session
              <i className="fas fa-chevron-right text-sm"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
