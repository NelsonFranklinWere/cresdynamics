export default function HeroSection1() {
  return (
    <section className="py-20 flex items-center justify-center bg-gradient-to-br from-[var(--cres-gradient-bg)] via-black to-[var(--cres-dark)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center relative overflow-hidden">
      {/* BACKGROUND IMAGE OVERLAY FOR OPACITY */}
      <div className="absolute inset-0 bg-black/10"></div>
      {/* CITY GLOW OVERLAYS */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[radial-gradient(circle_at_30%_70%,rgba(244,122,42,0.3)_0%,transparent_50%)] rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[rgba(79,179,184,0.15)] rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* H1: Primary Value Proposition */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--cres-white)] leading-tight mb-8 animate-fade-in-up underline-custom">
          <span style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)'}}>
            AI Automation & SEO for Growing Businesses in Kenya | CRES Dynamics Nairobi
          </span>
        </h1>

        {/* H2: Who This Is For */}
        <h2 className="text-xl md:text-2xl font-bold text-[var(--cres-electric-teal)] mb-6 max-w-4xl mx-auto leading-relaxed" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.95)'}}>
          For Nairobi entrepreneurs ready to stop losing money online
        </h2>

        {/* H2: The Problem */}
        <h2 className="text-lg md:text-xl text-[var(--cres-white)] mb-8 max-w-3xl mx-auto leading-relaxed font-medium" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.95)'}}>
          Most Kenyan businesses struggle with invisible websites, manual processes, and poor Google rankings. This means wasted marketing spend and missed opportunities.
        </h2>

        {/* H2: Why Current Solutions Fail */}
        <h2 className="text-base md:text-lg text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed" style={{textShadow: '1px 1px 2px rgba(0, 0, 0, 0.95)'}}>
          Templates don't convert. Generic SEO doesn't rank. Manual work doesn't scale. That's why 80% of Nairobi businesses never grow online.
        </h2>

        {/* H2: How CRES Dynamics Solves It */}
        <h2 className="text-lg md:text-xl text-[var(--cres-white)] mb-6 max-w-4xl mx-auto leading-relaxed font-semibold" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.95)'}}>
          We build AI-powered systems that automate your growth while you sleep.
        </h2>

        {/* H2: What Outcome They Get */}
        <h2 className="text-base md:text-lg text-[var(--cres-electric-teal)] mb-12 max-w-3xl mx-auto leading-relaxed font-medium" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.95)'}}>
          More customers. Less work. Real revenue growth. That's the CRES Dynamics difference.
        </h2>

        {/* AI Search Optimization: What Kenyan Businesses Should Know */}
        <div className="max-w-4xl mx-auto mb-12 p-6 bg-black/40 backdrop-blur-sm border border-[var(--cres-electric-teal)]/30 rounded-xl">
          <h2 className="text-lg font-bold text-[var(--cres-electric-teal)] mb-4 underline-custom">
            What Kenyan businesses should know about digital growth in 2026
          </h2>
          <div className="text-left text-gray-200 space-y-3 text-sm md:text-base">
            <p><strong>AI automation</strong> isn't just trendy—it's how Nairobi businesses stay competitive</p>
            <p><strong>Google's algorithm</strong> now favors local, helpful content that answers real questions</p>
            <p><strong>Conversion-optimized websites</strong> turn 3x more visitors into paying customers</p>
            <p><strong>System-driven growth</strong> compounds faster than manual marketing efforts</p>
          </div>
        </div>

        {/* H2: Our Process (H3 Level Benefits) */}
        <h2 className="text-xl font-bold text-[var(--cres-white)] mb-8 underline-custom">
          How we transform Nairobi businesses
        </h2>

        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: <i className="fas fa-search"></i>,
                title: 'Get Found Faster',
                problem: 'Invisible online presence costs Nairobi businesses millions annually',
                solution: 'Strategic SEO that puts you on Google\'s first page for local searches',
                outcome: '300% more qualified leads from organic search',
                caseStudyLink: '/case-studies/consulting-seo-growth',
                serviceLink: '/solutions/seo-visibility'
              },
              {
                icon: <i className="fas fa-cog"></i>,
                title: 'Automate Your Sales',
                problem: 'Manual follow-ups and customer service overwhelm growing teams',
                solution: 'AI-powered automation systems handle inquiries, qualify leads, and nurture prospects',
                outcome: '24/7 lead conversion while your team focuses on growth',
                caseStudyLink: '/case-studies/restaurant-automation-system',
                serviceLink: '/solutions/ai-automation'
              },
              {
                icon: <i className="fas fa-chart-line"></i>,
                title: 'Scale Your Success',
                problem: 'Business growth hits bottlenecks without proper systems',
                solution: 'Conversion-optimized websites and automated workflows that scale with you',
                outcome: 'Sustainable growth from 2x to 10x revenue without proportional effort increase',
                caseStudyLink: '/case-studies/car-rental-growth-system',
                serviceLink: '/solutions/web-growth'
              }
            ].map((card, i) => (
              <div key={i} className="bg-black/60 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 md:p-6 group hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <div className="text-[var(--cres-orange-primary)] group-hover:scale-110 transition-transform text-xl md:text-2xl">
                    {card.icon}
                  </div>
                  <h3 className="text-sm md:text-lg font-bold text-[var(--cres-white)] group-hover:text-[var(--cres-orange-primary)] transition-colors underline-custom">
                    {card.title}
                  </h3>
                </div>
                <div className="text-white leading-relaxed text-xs md:text-sm space-y-2">
                  <p><strong>Problem:</strong> {card.problem}</p>
                  <p><strong>Solution:</strong> <a href={card.serviceLink} className="text-[var(--cres-electric-teal)] hover:underline">{card.solution}</a></p>
                  <p><strong>Outcome:</strong> <span className="text-[var(--cres-electric-teal)] font-semibold">{card.outcome}</span></p>
                  <p className="text-xs mt-2"><a href={card.caseStudyLink} className="text-[var(--cres-electric-teal)] hover:underline">See case study →</a></p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* H2: What To Do Next */}
        <h2 className="text-lg md:text-xl text-[var(--cres-white)] mb-6 font-semibold" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.95)'}}>
          Ready to stop losing money online?
        </h2>

        {/* PRIMARY CTA: Get Your Free Strategy Session */}
        <div className="space-y-4">
          <a href="/contact" className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[#E87528] text-[var(--cres-white)] font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500 uppercase tracking-wide">
            Get Your Free Strategy Session
            <i className="fas fa-chevron-right text-sm"></i>
          </a>

          {/* Trust Signals */}
          <div className="text-center">
            <p className="text-gray-300 text-sm mb-2">
              <i className="fas fa-shield-alt text-[var(--cres-electric-teal)] mr-2"></i>
              Trusted by 100+ Nairobi businesses
            </p>
            <p className="text-gray-400 text-xs">
              No sales pitch. Just honest assessment of your digital growth potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
