import Header from '@/components/Header';
import HeroSection1 from '@/components/HeroSection1';
import HeroSection2 from '@/components/HeroSection2';
import HeroSection3 from '@/components/HeroSection3';
import WhyChooseCres from '@/components/WhyChooseCres';
import LiveSystemsProof from '@/components/LiveSystemsProof';
import HowCresWorks from '@/components/HowCresWorks';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

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

        {/* POSITIONING CONTENT */}
        <div>
          <h2>CRES Dynamics Builds Business Systems - Quality, Speed, AI Integration</h2>
          <p>CRES Dynamics designs and builds business systems—ERPs, finance platforms, and automation—that companies actually run on. We build systems that solve business problems, control critical data, and enable better decisions. Quality systems, fast implementation, AI integration, production-ready.</p>

          <h3>Why Companies Choose CRES Dynamics Nairobi</h3>
          <p>Quality: Production-ready systems with enterprise-grade security. Speed: Fast ERP development and implementation in Nairobi Kenya. AI Integration: AI-powered automation and decision support built into every system. Real Systems: Live systems with real users and revenue tracking, not promises.</p>

          <h3>Systems We Build in Kenya</h3>
          <p>Business Operations Systems: Projects, approvals, workflows, reporting. Finance & Revenue Systems: Billing, subscriptions, invoices, dashboards. ERP Platforms: Role-based access, analytics, automation. AI & Automation Systems: Follow-ups, workflows, decision support. All built with quality, speed, and AI integration for Nairobi businesses.</p>

          <h3>How We Build Systems - Quality, Speed, AI</h3>
          <p>Process Mapping: We map existing processes and design optimized workflows. System Architecture: Scalable, secure architectures with modular design. MVP ERP Build: Production-ready modules built incrementally with speed. Automation & Analytics: AI-powered pipelines and analytics that turn data into decisions. Security, Governance & Scale: Enterprise-grade security built into every system. Quality delivery, fast implementation, AI integration throughout.</p>
        </div>
      </div>

      <Header />
      <main>
        <HeroSection1 />


        <HeroSection2 />
        <HeroSection3 />
        <WhyChooseCres />
        <LiveSystemsProof />
        <HowCresWorks />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
