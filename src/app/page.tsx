import Header from '@/components/Header';
import HeroTesla from '@/components/HeroTesla';
import HeroCarousels from '@/components/HeroCarousels';
import HomepageStatsMarquee from '@/components/HomepageStatsMarquee';
import HomepageProblemSection from '@/components/HomepageProblemSection';
import HomepageMarketingWebsitesSection from '@/components/HomepageMarketingWebsitesSection';
import SystemsShowcaseTesla from '@/components/SystemsShowcaseTesla';
import LiveSystemsProof from '@/components/LiveSystemsProof';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import HomepageSystemsGrid from '@/components/HomepageSystemsGrid';
import HomepageHowWeBuild from '@/components/HomepageHowWeBuild';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cres Dynamics | Business Systems, Websites & ERP — Nairobi Kenya',
  description:
    'We build the digital infrastructure Kenyan businesses run on. Custom ERP systems, professional websites, AI automation, and finance platforms. Based in Nairobi. Book a discovery session.',
  alternates: { canonical: 'https://cresdynamics.com/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Cres Dynamics | Business Systems, Websites & ERP — Nairobi Kenya',
    description:
      'We build the digital infrastructure Kenyan businesses run on. Custom ERP systems, professional websites, AI automation, and finance platforms.',
    url: 'https://cresdynamics.com/',
    type: 'website',
  },
};

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CRES Dynamics",
    "url": "https://cresdynamics.com",
    "logo": "https://cresdynamics.com/logo.png",
        "description": "CRES Dynamics is a systems engineering company that builds ERP platforms, financial infrastructure, and automation systems that enable businesses to operate with visibility, control, and scale.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "url": "https://cresdynamics.com/contact"
    },
    "sameAs": [
      "https://cresdynamics.com"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "CRES Dynamics",
    "url": "https://cresdynamics.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://cresdynamics.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <h1 className="sr-only">Business Systems Built for Growing Kenyan Businesses.</h1>

      <Header />
      <main>
        <HeroTesla />
        <section className="bg-[var(--neutral-bg)] border-y border-[#D9E1EA]">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--teal-accent)] mb-3">
              Explore Services
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { href: '/websites', label: 'Websites' },
                { href: '/erp', label: 'Custom ERP' },
                { href: '/software', label: 'Custom Software' },
                { href: '/ai-automation', label: 'AI Automation' },
                { href: '/finance-platforms', label: 'Finance Platforms' },
                { href: '/operations-workflow', label: 'Operations & Workflow' },
                { href: '/e-commerce', label: 'E-Commerce' },
                { href: '/marketing', label: 'Marketing' },
                { href: '/case-studies', label: 'Case Studies' },
                { href: '/insights', label: 'Insights' },
                { href: '/events', label: 'Events' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg border border-[var(--teal-accent)]/35 bg-white px-3 py-1.5 text-xs font-semibold text-[var(--navy-primary)] hover:bg-[var(--teal-accent)]/10"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section
          className="relative min-h-[70vh] h-[70vh] md:min-h-screen md:h-screen flex flex-col items-center justify-center"
          style={{ background: 'var(--cres-gradient-bg)' }}
          aria-label="Websites, CresOS, Custom ERPs"
        >
          <HeroCarousels />
        </section>
        <HomepageStatsMarquee />
        <HomepageMarketingWebsitesSection />
        <HomepageProblemSection />
        <HomepageSystemsGrid />
        <HomepageHowWeBuild />
        <SystemsShowcaseTesla />
        <LiveSystemsProof />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
