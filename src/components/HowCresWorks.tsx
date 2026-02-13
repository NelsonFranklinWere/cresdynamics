export default function HowCresWorks() {
  return (
    <section className="py-20 md:py-32 bg-[var(--cres-primary-bg)] relative" id="how-it-works">
      <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-10"></div>
      {/* Enhanced overlay for better content visibility */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-20">
          {/* Here's How CRES Builds Business Systems */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-[var(--cres-white)] mb-6 md:mb-8 underline-custom" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)'}}>
            Here's How We Build <span className="text-[var(--cres-orange-primary)]">Business Systems.</span>
          </h2>

          {/* From process mapping to production systems */}
          <p className="text-lg md:text-2xl text-[var(--cres-white)] max-w-4xl mx-auto" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)'}}>
            From process mapping to production systems — we build platforms that companies actually run on.
          </p>
        </div>

        {/* PROCESS CARDS - 3 columns on all screen sizes */}
        <div className="relative">
          {/* Process Steps */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-20">
            {[
              {
                icon: <i className="fas fa-project-diagram"></i>,
                title: 'Process Mapping',
                text: 'We map your existing processes, identify bottlenecks, and design optimized workflows before building.'
              },
              {
                icon: <i className="fas fa-network-wired"></i>,
                title: 'System Architecture',
                text: 'We design scalable, secure architectures with modular design, APIs, and proper data governance.'
              },
              {
                icon: <i className="fas fa-cogs"></i>,
                title: 'MVP ERP Build',
                text: 'We build production-ready modules incrementally, so you start seeing value immediately.'
              },
              {
                icon: <i className="fas fa-shield-alt"></i>,
                title: 'Security & Scale',
                text: 'Enterprise-grade security, governance, and scalability built into every system module.'
              }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="group p-3 md:p-4 rounded-xl bg-black/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-center">
                  <div className="flex items-center gap-2 md:gap-3 mb-2">
                    <div className="text-lg md:text-xl text-[var(--cres-white)]">{step.icon}</div>
                    <h3 className="text-sm md:text-base font-bold text-[var(--cres-white)] group-hover:text-[var(--cres-orange-primary)] transition-colors underline-custom">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-white leading-relaxed text-xs md:text-sm">
                    {step.text}
                  </p>
                </div>

                {/* Arrow between steps (not on last item, only on desktop) */}
                {i < 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <i className="fas fa-arrow-right text-xl md:text-2xl text-[var(--cres-orange-primary)]"></i>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* STATEMENT BANNER */}
          <div className="bg-black/80 backdrop-blur-sm border border-white/20 p-6 md:p-12 rounded-xl shadow-lg text-center mb-12 md:mb-16">
            <p className="text-lg md:text-2xl lg:text-3xl font-black text-[var(--cres-white)]">
              With CRES, You're Not Buying Services.
              <br />
              <span className="text-[var(--cres-orange-primary)] underline-custom">You're Investing in Systems.</span>
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a href="/contact" className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[#E87528] text-[var(--cres-white)] font-bold text-base md:text-lg px-8 md:px-12 py-4 md:py-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500 uppercase tracking-wide">
              Book ERP Discovery Session
              <i className="fas fa-chevron-right text-sm"></i>
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
