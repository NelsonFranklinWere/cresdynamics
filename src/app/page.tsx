import Header from '@/components/Header';
import HeroTesla from '@/components/HeroTesla';
import HeroCarousels from '@/components/HeroCarousels';
import HomepageStatsMarquee from '@/components/HomepageStatsMarquee';
import HomepageProblemSection from '@/components/HomepageProblemSection';
import SystemsShowcaseTesla from '@/components/SystemsShowcaseTesla';
import LiveSystemsProof from '@/components/LiveSystemsProof';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import HomepageSystemsGrid from '@/components/HomepageSystemsGrid';
import HomepageHowWeBuild from '@/components/HomepageHowWeBuild';

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

      {/* HIDDEN SEO CONTENT - Targets How Companies Think & Search */}
      <div className="sr-only" aria-hidden="true">
        {/* PROBLEM SEARCHES - HOW COMPANIES THINK (HIGHEST INTENT) */}
        <h1>My Business Needs ERP System Nairobi</h1>
        <h2>Off-the-Shelf ERP Failed Kenya</h2>
        <h3>Need Custom Finance Platform Nairobi</h3>
        <h4>Business Operations Manual Processes</h4>
        <h5>Revenue Tracking Not Working</h5>
        <h6>Need Business Systems That Scale</h6>
        <p>My business needs ERP system Nairobi, off-the-shelf ERP failed Kenya, need custom finance platform Nairobi, business operations manual processes, revenue tracking not working, need business systems that scale, production-ready ERP Kenya, fast ERP implementation Nairobi, quality business systems Kenya.</p>

        <h1>Business Growing But Systems Can't Handle It</h1>
        <h2>Need ERP With AI Integration Nairobi</h2>
        <h3>Fast ERP Development Kenya</h3>
        <h4>Quality Business Systems Nairobi</h4>
        <h5>Speed ERP Implementation Kenya</h5>
        <h6>AI-Powered Business Systems Nairobi</h6>
        <p>Business growing but systems can't handle it, need ERP with AI integration Nairobi, fast ERP development Kenya, quality business systems Nairobi, speed ERP implementation Kenya, AI-powered business systems Nairobi, enterprise-grade systems Kenya.</p>

        {/* SOLUTION SEARCHES - COMPARISON STAGE */}
        <h1>Best ERP Development Company Nairobi</h1>
        <h2>Custom ERP Builders Kenya Quality</h2>
        <h3>Fast ERP Development Nairobi</h3>
        <h4>Business Systems Builder Kenya Speed</h4>
        <h5>Finance Platform Developers Nairobi Quality</h5>
        <h6>AI Integration ERP Systems Kenya</h6>
        <p>Best ERP development company Nairobi, custom ERP builders Kenya quality, fast ERP development Nairobi, business systems builder Kenya speed, finance platform developers Nairobi quality, AI integration ERP systems Kenya, production-ready systems Nairobi.</p>

        {/* LOCAL TRUST SEARCHES - INSTANT CALLS */}
        <h1>ERP Systems Near Me Nairobi</h1>
        <h2>Business Systems Builder Near Me Kenya</h2>
        <h3>Finance Platform Developers Near Me Nairobi</h3>
        <h4>Custom ERP Near Me Kenya</h4>
        <h5>Fast ERP Development Near Me Nairobi</h5>
        <h6>Quality Business Systems Near Me Kenya</h6>
        <p>ERP systems near me Nairobi, business systems builder near me Kenya, finance platform developers near me Nairobi, custom ERP near me Kenya, fast ERP development near me Nairobi, quality business systems near me Kenya, AI-powered systems near me Nairobi.</p>

        {/* QUALITY, SPEED, AI INTEGRATION SEARCHES */}
        <h1>Fast ERP Development With Quality Nairobi</h1>
        <h2>AI Integration Business Systems Kenya</h2>
        <h3>Speed ERP Implementation Quality Nairobi</h3>
        <h4>Production-Ready Systems Fast Kenya</h4>
        <h5>Enterprise-Grade ERP Speed Nairobi</h5>
        <h6>AI-Powered Finance Platforms Quality Kenya</h6>
        <p>Fast ERP development with quality Nairobi, AI integration business systems Kenya, speed ERP implementation quality Nairobi, production-ready systems fast Kenya, enterprise-grade ERP speed Nairobi, AI-powered finance platforms quality Kenya, scalable systems speed Nairobi.</p>

        {/* POSITIONING CONTENT - Engines / Digital Infrastructure language */}
        <div>
          <h2>CRES Dynamics Engineers Proprietary Operating Environments and Digital Infrastructure</h2>
          <p>We do not build websites. We engineer proprietary operating environments and digital infrastructure – ERPs, finance platforms, automation – optimized for low-latency performance, elastic scalability, and Zero-Trust Architecture with military-grade encryption. Cres Core Engine. Nairobi Kenya.</p>

          <h3>Why Serious Businesses Choose CRES Dynamics</h3>
          <p>Zero-Trust Architecture and military-grade encryption. Systems optimized for low-latency performance and elastic scalability. Cres Core Engine: proprietary framework to deploy secure systems faster. High retention: systems so essential clients stay for years. Trusted to build regional digital infrastructure – enterprise systems, secure architecture, Church platforms.</p>

          <h3>Systems We Build in Kenya</h3>
          <p>Business Operations Systems: Projects, approvals, workflows, reporting. Finance & Revenue Systems: Billing, subscriptions, invoices, dashboards. ERP Platforms: Role-based access, analytics, automation. AI & Automation Systems: Follow-ups, workflows, decision support. All built on the Cres Core Engine with SOPs and a manual for everything – capital-ready.</p>

          <h3>Heritage and R&D</h3>
          <p>CRES Dynamics was born from years of R&D in system security. We have a manual for everything. The business runs with or without the founder. Trusted to build regional digital infrastructure.</p>
        </div>
      </div>

      <Header />
      <main>
        <HeroTesla />
        <section className="relative min-h-screen h-screen flex flex-col items-center justify-center bg-[var(--cres-primary-bg)]" aria-label="Websites, CresOS, Custom ERPs">
          <HeroCarousels />
        </section>
        <HomepageStatsMarquee />
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
