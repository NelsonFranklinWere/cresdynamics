import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CresOSPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      {/* HERO */}
      <section className="py-20 bg-gradient-to-br from-[var(--cres-primary-bg)] to-[var(--cres-secondary-bg)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--cres-white)] mb-6" style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.95)' }}>
              CresOS – The Operating System for <span className="text-[var(--cres-orange-primary)]">Growing Businesses</span>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--cres-white)] max-w-4xl mx-auto" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
              One modular platform: identity, operations, finance, clients, and analytics. Built for visibility, control, and scale.
            </p>
          </div>
        </div>
      </section>

      {/* CORE: MODULAR ARCHITECTURE */}
      <section className="py-16 md:py-20 bg-[var(--cres-primary-bg)] relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[var(--cres-white)] mb-4 underline-custom">
                What CresOS Is
              </h2>
              <p className="text-lg md:text-xl text-[var(--cres-white)]/80 max-w-3xl mx-auto">
                Modular architecture, customizable modules, multi-role dashboards, and a single source of truth for your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { title: 'Modular architecture', desc: 'Add only the modules you need. Identity, operations, finance, clients, analytics—each can scale independently.' },
                { title: 'Multi-role dashboards', desc: 'Role-based views so each user sees only what they need: exec summary, ops, finance, or client-facing.' },
                { title: 'Finance layer', desc: 'Revenue tracking, invoicing, subscriptions, and export to your accounting tools. One finance layer across the business.' },
                { title: 'Analytics engine', desc: 'Dashboards, reports, and KPIs built on the same data your operations and finance run on.' },
                { title: 'API-first backend', desc: 'Integrate with existing tools, mobile apps, or third-party systems. No vendor lock-in.' },
                { title: 'Secure cloud deployment', desc: 'Hosted, monitored, and maintained with RBAC, audit trails, and governance built in.' },
              ].map((item, i) => (
                <div key={i} className="bg-black/80 backdrop-blur-sm border border-white/20 p-6 rounded-xl shadow-lg">
                  <h3 className="text-lg font-bold text-[var(--cres-orange-primary)] mb-2">{item.title}</h3>
                  <p className="text-[var(--cres-white)]/90 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-16 md:py-20 bg-[var(--cres-secondary-bg)] relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[var(--cres-white)] mb-4 underline-custom">
                Who CresOS Serves
              </h2>
              <p className="text-lg md:text-xl text-[var(--cres-white)]/80 max-w-3xl mx-auto">
                SMEs, training institutions, fintech, and NGOs—any organization that needs one system for operations, finance, and visibility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                { title: 'SMEs', desc: 'Replace spreadsheets and siloed tools with one platform: projects, finance, clients, and reporting in one place.' },
                { title: 'Training institutions', desc: 'Student lifecycle, courses, payments, certifications, and reporting—all with role-based access for staff and admins.' },
                { title: 'Fintech', desc: 'Operations, compliance, and revenue visibility. Subscription billing, usage tracking, and audit-ready reporting.' },
                { title: 'NGOs', desc: 'Programs, beneficiaries, grants, donor reporting, and internal controls. One system for program and finance teams.' },
              ].map((item, i) => (
                <div key={i} className="bg-black/80 backdrop-blur-sm border border-white/20 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-[var(--cres-orange-primary)] mb-3">{item.title}</h3>
                  <p className="text-[var(--cres-white)]/90 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY OFF-THE-SHELF ERPs FAIL */}
      <section className="py-16 md:py-20 bg-[var(--cres-primary-bg)] relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[var(--cres-white)] mb-4 underline-custom">
                Why Off-the-Shelf ERPs Fail
              </h2>
              <p className="text-lg md:text-xl text-[var(--cres-white)]/80 max-w-3xl mx-auto">
                Generic ERPs force your processes to fit their template. CresOS is built to fit yours.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-black/80 backdrop-blur-sm border border-red-500/30 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-red-500 mb-4 flex items-center gap-2">
                  <i className="fas fa-times-circle"></i>
                  Off-the-shelf ERPs
                </h3>
                <ul className="space-y-3">
                  {['Force you to change your processes to fit the software', 'Expensive licensing and long implementation cycles', 'Limited customization; you adapt to the product', 'Vendor lock-in and upgrade dependency'].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-red-500">•</span>
                      <span className="text-[var(--cres-white)]/90">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-black/80 backdrop-blur-sm border border-green-500/30 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-green-500 mb-4 flex items-center gap-2">
                  <i className="fas fa-check-circle"></i>
                  Why modular systems win
                </h3>
                <ul className="space-y-3">
                  {['You choose which modules to deploy; we map to your processes', 'Phased rollout: start with core, add modules as you grow', 'Customizable workflows, roles, and reports without forking the product', 'API-first and your data stays yours; integrate with existing tools'].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-green-500">•</span>
                      <span className="text-[var(--cres-white)]/90">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[var(--cres-primary-bg)] via-[#0D1520] to-[var(--cres-primary-bg)] relative">
        <div className="absolute inset-0 bg-[url('/backround.png')] bg-repeat bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-[var(--cres-white)] mb-6 underline-custom">
              Explore CresOS or Start Your System
            </h2>
            <p className="text-lg md:text-xl text-[var(--cres-white)]/80 mb-8 max-w-2xl mx-auto">
              See how our system engineering framework delivers production-ready CresOS modules, or book a Systems Discovery Session to map your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/how-we-build" className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[#E87528] text-[var(--cres-white)] font-bold text-base md:text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500 uppercase tracking-wide">
                How We Build CresOS
                <i className="fas fa-chevron-right text-sm"></i>
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-transparent border-2 border-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-primary)]/10 text-[var(--cres-white)] font-bold text-base md:text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500 uppercase tracking-wide">
                Book a Systems Discovery Session
                <i className="fas fa-arrow-right text-sm"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
