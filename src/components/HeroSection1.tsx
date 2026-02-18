export default function HeroSection1() {
  return (
    <section className="py-12 md:py-20 flex items-center justify-center bg-gradient-to-br from-[var(--cres-gradient-bg)] via-black to-[var(--cres-dark)] relative overflow-hidden">
      {/* Optimized background image - CSS background for better performance */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/backround.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform'
        }}
      />
      {/* ENHANCED BACKGROUND IMAGE OVERLAY FOR BETTER OPACITY */}
      <div className="absolute inset-0 bg-black/60"></div>
      {/* CITY GLOW OVERLAYS - deferred animation */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[radial-gradient(circle_at_30%_70%,rgba(244,122,42,0.2)_0%,transparent_50%)] rounded-full blur-xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[rgba(79,179,184,0.1)] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center relative z-10">
        {/* H1: Core OS / Engines – no "websites" */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-[var(--cres-white)] leading-tight mb-6 md:mb-8 underline-custom" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)'}}>
          We Engineer <span className="text-[var(--cres-orange-primary)]">Proprietary Operating Environments</span> and Digital Infrastructure.
        </h1>

        {/* Subheadline – authority, not "build websites" */}
        <p className="text-lg md:text-2xl font-bold text-[var(--cres-white)] mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)'}}>
          CRES Dynamics builds the engines that run companies: ERPs, finance systems, and operational platforms—optimized for low-latency performance, elastic scalability, and measurable control.
        </p>

        {/* Proof bar – security & infra language */}
        <p className="text-sm md:text-base text-[var(--cres-white)]/90 mb-10 md:mb-12 max-w-3xl mx-auto font-medium" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}>
          Zero-Trust Architecture • Military-Grade Encryption • Live Production Systems • Revenue-Tracking Platforms • Role-Based Access Control
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a href="/cresos" className="inline-flex items-center gap-1.5 bg-[var(--cres-orange-primary)] hover:bg-[#E87528] text-[var(--cres-white)] font-bold text-sm px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 uppercase tracking-wide">
            Explore CresOS
            <i className="fas fa-chevron-right text-xs"></i>
          </a>
          <a href="/contact" className="inline-flex items-center gap-1.5 bg-transparent border border-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-primary)]/10 text-[var(--cres-white)] font-bold text-sm px-4 py-2 rounded-lg transition-all duration-300 uppercase tracking-wide">
            Book Session
            <i className="fas fa-arrow-right text-xs"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
