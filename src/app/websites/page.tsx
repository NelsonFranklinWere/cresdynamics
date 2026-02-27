import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

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

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <Header />

      <main className="pt-24">
        {/* HERO */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--cres-primary-bg)] via-[#0D1B2A] to-[#020611]" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <p className="text-[11px] md:text-xs font-semibold tracking-[0.24em] uppercase text-white/70 mb-3">
              Service – Websites
            </p>
            <h1 className="text-3xl md:text-5xl font-black mb-6">
              Your Business
              <br />
              Deserves to
              <br />
              Be Found.
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              A website that works as hard as you do – converting strangers into clients, 24 hours a day, while you sleep.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide"
              >
                Book a Website Discovery
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 border border-white/40 hover:bg-white/5 text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide"
              >
                See Pricing
              </Link>
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
                What We Build
              </p>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
                Not a Website.
                <br />
                A Sales System.
              </h2>
              <p className="text-white/75 text-sm md:text-base max-w-2xl mx-auto">
                Every CRES website is built to do one job: convert visitors into clients. Design is how we achieve that –
                not the goal itself.
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

        {/* COMMON QUESTIONS */}
        <section className="relative py-16 md:py-20 bg-[var(--cres-secondary-bg)]">
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Common Questions</h2>
              <p className="text-white/75 text-sm md:text-base">Answered honestly.</p>
            </div>
            <div className="space-y-6 text-white/85 text-sm md:text-base">
              <div>
                <p className="font-semibold text-white mb-1">“Can&apos;t I just use Wix or a template?”</p>
                <p>
                  You can. But Wix and similar platforms are templates built for the global average – not your business.
                  They&apos;re slow, hard to optimise for Kenyan search, and they look like every other website. A CRES website
                  is built specifically around your business, your clients, and your conversion path.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">“How long before this starts working?”</p>
                <p>
                  SEO takes 2–4 months to build momentum. But your website starts working from day one – every referral,
                  every business card, every social media link now leads somewhere that converts. The compounding effect
                  builds over time.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">“I don&apos;t have copy or photos yet.”</p>
                <p>
                  We handle it. Our Growth and E-Commerce packages include professional copywriting. We&apos;ll guide you on
                  photography or work with what you have. We&apos;ve launched great websites with nothing more than a phone call
                  and a brief.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">“Will I own and control the website?”</p>
                <p>
                  Yes – completely. The website belongs to you. We hand over all credentials and source files at launch. You
                  can manage it yourself or engage us on a monthly retainer for updates and support.
                </p>
              </div>
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
