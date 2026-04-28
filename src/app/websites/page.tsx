import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { whatsappUrl, WHATSAPP_PREFILL, TEL_LINK } from '@/lib/contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Website Design & Development Nairobi Kenya | Cres Dynamics',
  description:
    'We build professional websites that convert visitors into clients. SEO-optimised, mobile-first, M-Pesa ready. Serving businesses across Nairobi and Kenya. Get a website that works.',
  alternates: { canonical: 'https://cresdynamics.com/websites/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Professional Website Design & Development Nairobi Kenya | Cres Dynamics',
    description:
      'We build professional websites that convert visitors into clients. SEO-optimised, mobile-first, M-Pesa ready.',
    url: 'https://cresdynamics.com/websites/',
    type: 'website',
  },
};

export default function WebsitesPage() {
  const painPoints = [
    {
      icon: '🔍',
      title: "You don't show up when people search for you",
      body: "Google is where buying decisions start. If you're not there, you don't exist to the customers who are actively looking for what you sell.",
    },
    {
      icon: '📱',
      title: 'An Instagram page is not a business presence',
      body: 'Instagram builds awareness. A website builds credibility. Corporate clients, procurement managers, and high-value buyers do not make decisions from Instagram pages.',
    },
    {
      icon: '💼',
      title: 'You look smaller than you actually are',
      body: 'Perception is the first filter. A business without a credible online presence is perceived as a side hustle – regardless of the quality of the actual work.',
    },
    {
      icon: '📞',
      title: 'Referrals check you out before they call',
      body: 'When someone is referred to your business, the first thing they do is Google you. What they find determines whether they call – or move on.',
    },
  ];

  const buildPoints = [
    {
      step: '01',
      icon: '🎯',
      title: 'Conversion Architecture',
      body: 'Every page, every section, every button is placed to guide a visitor toward one action: contacting you. Built around how Kenyan buyers actually decide.',
    },
    {
      step: '02',
      icon: '📍',
      title: 'Local SEO & Google Business',
      body: 'We set up and optimise your Google Business profile. When someone in Nairobi searches for what you do – you show up, with your address, your hours, your reviews.',
    },
    {
      step: '03',
      icon: '📱',
      title: 'Mobile-First Build',
      body: 'Over 75% of Kenyan internet users are on mobile. Your website loads fast, looks sharp, and converts on every screen size – from a Tecno to a MacBook.',
    },
    {
      step: '04',
      icon: '💬',
      title: 'WhatsApp & Inquiry Integration',
      body: 'One-tap WhatsApp buttons. Inquiry forms that arrive directly to your phone. Every contact point on your site becomes a direct lead.',
    },
    {
      step: '05',
      icon: '🖼️',
      title: 'Professional Content & Copy',
      body: 'We write the words that make clients trust you. Not corporate jargon – clear, confident language that sounds like you on your best day.',
    },
    {
      step: '06',
      icon: '🔒',
      title: 'Secure, Fast, Always On',
      body: 'SSL certificates, fast hosting, 99.9% uptime. Your website never goes down at the wrong moment. It runs like infrastructure – because it is.',
    },
  ];

  const websiteTypes = [
    { title: 'Corporate / Business Website', body: 'A professional online presence for established businesses, companies and organisations. Designed to build credibility, explain your services and convert visitors into enquiries. Includes contact forms, service pages, about sections and SEO optimisation for Google search in Kenya.' },
    { title: 'E-Commerce / Online Store', body: 'A fully functional online shop where customers can browse products, add to cart and pay — including M-Pesa, card and mobile money checkout. Ideal for retailers, wholesalers and product-based businesses wanting to sell online in Kenya.' },
    { title: 'Landing Page / Campaign Page', body: 'A single focused page designed to convert visitors into leads or sales for a specific product, service or promotion. Fast to build, optimised for paid ads and Google search. Used by businesses running promotions or launching new services.' },
    { title: 'NGO / Non-Profit Website', body: 'Websites built for NGOs, charities, churches and community organisations in Kenya. Includes donor pages, programme showcases, team sections and grant-ready professional presentation.' },
    { title: 'Portfolio / Personal Brand Website', body: 'A professional online portfolio for consultants, freelancers, creatives and professionals. Showcases work, skills and experience to attract clients, employers or investors.' },
    { title: 'Web Application / Business Platform', body: 'A full web-based system that users log into to manage data, processes or operations. More than a website — this is a functioning software product accessible from any browser. Used for portals, dashboards, booking systems and internal tools.' },
    { title: 'Informational / Blog Website', body: 'Content-rich websites designed to publish articles, guides and news. Used by businesses, media organisations and thought leaders to build authority, drive organic Google traffic and grow an audience in Kenya.' },
    { title: 'School / Institution Website', body: 'Websites for schools, colleges, universities and training institutions in Kenya. Includes admissions pages, fee structures, news sections, staff profiles and online enquiry forms.' },
  ];

  const websiteServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Website Development Nairobi',
    provider: { '@type': 'LocalBusiness', name: 'Cres Dynamics Ltd' },
    areaServed: 'Nairobi, Kenya',
    description: 'Professional website design and development for businesses, NGOs, startups and corporates in Nairobi, Kenya.',
    serviceType: [
      'Corporate Website Development',
      'E-Commerce Website Nairobi',
      'NGO Website Kenya',
      'Landing Page Design',
      'WordPress Development Kenya',
      'Web Application Development',
    ],
  };
  const websiteFaqs = [
    {
      q: 'How much does a website cost in Nairobi?',
      a: 'Most professional business websites in Nairobi range from KES 85,000 to KES 450,000 depending on scope, pages, features, and integrations. We provide a fixed scope and transparent quote before build starts.',
    },
    {
      q: 'How long does it take to build a website in Kenya?',
      a: 'Most projects take 2 to 6 weeks depending on content readiness and complexity. Campaign landing pages can go live faster, while larger multi-page websites or integrated platforms take longer.',
    },
    {
      q: 'Do I own my website after it is built?',
      a: 'Yes. You own your website, content, and core assets after project handover and payment completion. We also hand over credentials so your team has full control.',
    },
    {
      q: 'Will my website rank on Google?',
      a: 'We build every site SEO-ready: proper structure, metadata, speed optimisation, and Search Console setup. Ranking growth depends on competition and ongoing content, but the foundation is built in from day one.',
    },
    {
      q: 'Can you build a website with M-Pesa payments?',
      a: 'Yes. We implement M-Pesa-ready checkout and payment workflows for e-commerce and service businesses that need local payment support in Kenya.',
    },
  ];
  const websiteFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: websiteFaqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <div className="min-h-screen bg-[var(--navy-dark)] text-white">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteFaqSchema) }} />

      <main className="pt-24">
        {/* HERO */}
        <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: 'var(--cres-gradient-bg)' }}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_60%_40%,rgba(243,156,36,0.08)_0%,transparent_70%)]" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <p className="text-[11px] md:text-xs font-semibold tracking-[0.24em] uppercase text-white/70 mb-3">
              Service – Websites
            </p>
            <h1 className="text-3xl md:text-5xl font-black mb-6">Professional Website Design &amp; Development — Nairobi, Kenya</h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              A website that works as hard as you do – converting strangers into clients, 24 hours a day, while you sleep.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl(WHATSAPP_PREFILL.websiteDiscovery)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide"
              >
                Book a Website Discovery
              </a>
              <a
                href={TEL_LINK}
                className="inline-flex items-center gap-2 border border-white/40 hover:bg-white/5 text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide"
              >
                Call 0708 805 496
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 border border-white/40 hover:bg-white/5 text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide"
              >
                See Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* TYPES OF WEBSITES WE BUILD — PART 6 */}
        <section className="relative py-16 md:py-20 bg-[var(--cres-primary-bg)]">
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <div className="text-center mb-10 md:mb-12">
              <p className="text-[11px] md:text-xs font-semibold tracking-[0.24em] uppercase text-white/70 mb-2">
                Scope
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white">
                Types of Websites We Build
              </h2>
              <p className="text-white/70 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
                From corporate sites and stores to portals and content engines—each build is scoped to how you sell, who you
                serve, and what must happen when someone lands on the page.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {websiteTypes.map((item, i) => (
                <div
                  key={i}
                  className="bg-black/50 border border-white/10 rounded-2xl p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)]"
                >
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE PROBLEM */}
        <section className="relative py-16 md:py-20 bg-[var(--cres-primary-bg)]">
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h2 className="text-sm md:text-base font-semibold tracking-[0.24em] uppercase text-white/60 mb-2 text-center">
              The Problem
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 text-center">
              Every Day Without a
              <br />
              Proper Website is a Day
              <br />
              You&apos;re Invisible.
            </h3>
            <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
              Right now, potential clients are searching for exactly what you offer in Nairobi. Some will find you. Most
              will find your competitors.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {painPoints.map((item, i) => (
                <div
                  key={i}
                  className="bg-black/50 border border-white/10 rounded-2xl p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)] flex flex-col gap-3"
                >
                  <div className="text-2xl">{item.icon}</div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT WE BUILD */}
        <section className="relative py-16 md:py-20 bg-[var(--cres-secondary-bg)]">
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <div className="text-center mb-10 md:mb-12">
              <p className="text-[11px] md:text-xs font-semibold tracking-[0.24em] uppercase text-white/70 mb-2">
                Conversion
              </p>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
                Not a Website.
                <br />
                A Sales System.
              </h2>
              <p className="text-white/75 text-sm md:text-base max-w-2xl mx-auto">
                Design and copy serve one outcome: moving the right visitor to enquiry, checkout, or booking. Below is how we
                engineer that path—not just how pages look.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {buildPoints.map((item) => (
                <div
                  key={item.step}
                  className="bg-black/50 border border-white/10 rounded-2xl p-6 shadow-[0_14px_35px_rgba(0,0,0,0.45)] flex flex-col gap-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.28em] uppercase text-[var(--cres-orange-primary)]">
                      {item.step}
                    </span>
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BEFORE & AFTER */}
        <section className="relative py-16 md:py-20 bg-[var(--cres-primary-bg)]">
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <div className="text-center mb-10 md:mb-12">
              <p className="text-[11px] md:text-xs font-semibold tracking-[0.24em] uppercase text-white/60 mb-2">
                Before &amp; After
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3">
                What Changes
                <br />
                When You Have the
                <br />
                Right Website.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 md:p-7 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <h3 className="text-lg font-bold text-white mb-4">Without a CRES Website</h3>
                <ul className="space-y-3 text-white/80 text-sm md:text-base">
                  <li>
                    <strong className="text-white">Visibility</strong> – Invisible to anyone searching online. Only people who already know you can
                    find you.
                  </li>
                  <li>
                    <strong className="text-white">Credibility</strong> – Perceived as informal. Clients negotiate harder. Corporate buyers don&apos;t
                    engage.
                  </li>
                  <li>
                    <strong className="text-white">New Clients</strong> – Fully dependent on referrals and word of mouth. Inconsistent month to
                    month.
                  </li>
                  <li>
                    <strong className="text-white">After Hours</strong> – Business stops when you stop. No inquiries outside working hours.
                  </li>
                </ul>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 md:p-7 shadow-[0_14px_35px_rgba(0,0,0,0.45)]">
                <h3 className="text-lg font-bold text-white mb-4">With a CRES Website</h3>
                <ul className="space-y-3 text-white/80 text-sm md:text-base">
                  <li>
                    <strong className="text-white">Visibility</strong> – Show up in Google search when potential clients look for your service in
                    Nairobi.
                  </li>
                  <li>
                    <strong className="text-white">Credibility</strong> – Professional, established, trustworthy. Corporate clients shortlist you.
                    Price is respected.
                  </li>
                  <li>
                    <strong className="text-white">New Clients</strong> – Inbound inquiries from people who found you online. A second channel that
                    runs without extra effort.
                  </li>
                  <li>
                    <strong className="text-white">After Hours</strong> – Clients fill inquiry forms at 11pm. Leads arrive in the morning. Business
                    works while you sleep.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* OUR PROCESS */}
        <section className="relative py-16 md:py-20 bg-[var(--cres-secondary-bg)]">
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <div className="text-center mb-10 md:mb-12">
              <p className="text-[11px] md:text-xs font-semibold tracking-[0.24em] uppercase text-white/60 mb-2">
                Our Process
              </p>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                How We Build
                <br />
                Your Website.
              </h2>
            </div>
            <div className="space-y-5 text-white/85 text-sm md:text-base">
              <div>
                <p className="font-bold text-white mb-1">1 · Discovery – We understand your business first</p>
                <p>
                  Before any design, we spend 90 minutes understanding your business, your clients, your goals, and what
                  makes you different. Your website is built around this reality – not a template.
                </p>
              </div>
              <div>
                <p className="font-bold text-white mb-1">2 · Strategy – We map the conversion path</p>
                <p>
                  We define what your website must do, what pages it needs, what calls-to-action convert, and how it fits
                  your sales process. Strategy before design.
                </p>
              </div>
              <div>
                <p className="font-bold text-white mb-1">3 · Design &amp; Build – Pixel-perfect on every screen</p>
                <p>
                  We build your website on the Cres Core Engine – fast, secure, and fully custom. No templates. No generic
                  layouts. Built to look like a serious company.
                </p>
              </div>
              <div>
                <p className="font-bold text-white mb-1">4 · Review – You approve every detail</p>
                <p>
                  You review the website before it goes live. We refine until it&apos;s right. Nothing launches without your
                  sign-off.
                </p>
              </div>
              <div>
                <p className="font-bold text-white mb-1">5 · Launch &amp; Support – We stay after launch</p>
                <p>
                  We set up Google Analytics, Google Search Console, and your Google Business profile. Then we monitor
                  performance and support you for 30 days after launch.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING RANGES */}
        <section className="relative py-16 md:py-20 bg-[var(--cres-primary-bg)] border-y border-white/10">
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Website Pricing Ranges in Kenya</h2>
              <p className="text-white/75 text-sm md:text-base max-w-2xl mx-auto">
                Transparent pricing helps serious buyers decide faster. Final cost depends on scope, integrations, and content requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--cres-orange-primary)] mb-2">Starter</p>
                <h3 className="text-xl font-black mb-2">KES 85,000 – 140,000</h3>
                <p className="text-white/80 text-sm">Professional business website, conversion-focused pages, mobile optimisation, and inquiry capture.</p>
              </div>
              <div className="rounded-2xl border border-[var(--cres-orange-primary)]/50 bg-black/50 p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--cres-orange-primary)] mb-2">Growth</p>
                <h3 className="text-xl font-black mb-2">KES 150,000 – 280,000</h3>
                <p className="text-white/80 text-sm">Full marketing website with SEO structure, richer content blocks, analytics setup, and stronger conversion architecture.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--cres-orange-primary)] mb-2">Commerce / Platform</p>
                <h3 className="text-xl font-black mb-2">KES 280,000 – 450,000+</h3>
                <p className="text-white/80 text-sm">M-Pesa-enabled e-commerce or portal-style builds with custom workflows, integrations, and admin capabilities.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section className="relative py-16 md:py-20 bg-[var(--cres-secondary-bg)]">
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Selected Website Work</h2>
              <p className="text-white/75 text-sm md:text-base">Live examples from sectors we actively build for in Kenya.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { name: 'Cres Dynamics', href: 'https://cresdynamics.com', desc: 'Corporate and systems-led service website.' },
                { name: 'Mohaa Finest', href: 'https://mohaafinest.co.ke', desc: 'Brand-led customer acquisition website.' },
                { name: 'Spark Lights 254', href: 'https://sparklights254.co.ke', desc: 'Product-driven website with conversion intent.' },
                { name: 'The Stems Flowers', href: 'https://thestemsflowers.com', desc: 'Modern florist website for lead capture and orders.' },
                { name: 'Whitelight Store', href: 'https://whitelightstore.co.ke', desc: 'Online catalogue and e-commerce experience.' },
              ].map((site) => (
                <a key={site.href} href={site.href} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/10 bg-black/40 p-5 hover:border-[var(--cres-orange-primary)]/60">
                  <h3 className="text-lg font-bold text-white">{site.name}</h3>
                  <p className="text-white/70 text-sm mt-1">{site.desc}</p>
                  <p className="text-[var(--cres-orange-primary)] text-xs font-semibold uppercase tracking-[0.2em] mt-4">View Live Site</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* INVESTMENT */}
        <section className="relative py-16 md:py-20 bg-[var(--cres-primary-bg)]">
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <p className="text-[11px] md:text-xs font-semibold tracking-[0.24em] uppercase text-white/60 mb-2">
              Investment
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
              Choose Your
              <br />
              Starting Point.
            </h2>
            <p className="text-white/75 text-sm md:text-base mb-6 max-w-2xl mx-auto">
              All packages include 50% deposit to start, 50% on launch. 2-week build timeline. 30-day post-launch support.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide"
            >
              View Pricing
            </Link>
          </div>
        </section>

        {/* SEO FAQ */}
        <section className="relative py-16 md:py-20 bg-[var(--cres-secondary-bg)]">
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Website Questions (Nairobi &amp; Kenya)</h2>
              <p className="text-white/75 text-sm md:text-base">The exact questions buyers ask before choosing a developer.</p>
            </div>
            <div className="space-y-6 text-white/85 text-sm md:text-base">
              {websiteFaqs.map((item) => (
                <div key={item.q}>
                  <p className="font-semibold text-white mb-1">{item.q}</p>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="relative py-10 bg-[var(--cres-primary-bg)] border-t border-white/10">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/60 mb-3">Related pages</p>
            <div className="flex flex-wrap gap-2">
              {[
                { href: '/e-commerce', label: 'E-Commerce Systems' },
                { href: '/marketing', label: 'Meta Ads & Marketing' },
                { href: '/case-studies', label: 'Website Case Studies' },
                { href: '/insights', label: 'Insights: Website Cost in Nairobi' },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="rounded-lg border border-white/20 px-3 py-1.5 text-xs font-semibold hover:bg-white/10">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative py-16 bg-[var(--cres-primary-bg)]">
          <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Ready to Stop
              <br />
              Being Invisible?
            </h2>
            <p className="text-white/80 mb-6">
              Book a 20-minute discovery call. No pitch. Just clarity.
            </p>
            <p className="text-white/90 text-sm md:text-base">
              Call{' '}
              <a href="tel:+254708805496" className="font-semibold text-[var(--cres-orange-primary)]">
                +254 708 805 496
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
