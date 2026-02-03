import Header from '@/components/Header';
import HeroSection1 from '@/components/HeroSection1';
import HeroSection2 from '@/components/HeroSection2';
import HeroSection3 from '@/components/HeroSection3';
import WhyChooseCres from '@/components/WhyChooseCres';
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
    "description": "Digital agency helping Nairobi businesses turn clicks into clients through websites, SEO, AI automation, and digital growth solutions.",
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

      {/* HIDDEN SEO CONTENT - Targets Problem Searches */}
      <div className="sr-only" aria-hidden="true">
        {/* PROBLEM SEARCHES - HIGHEST INTENT */}
        <h1>Why My Business Is Not Growing Online Nairobi</h1>
        <h2>My Website Is Not Generating Leads</h2>
        <h3>How To Get More Customers Online Nairobi</h3>
        <h4>How To Automate Business Operations</h4>
        <h5>Sales Are Down What To Do</h5>
        <h6>Business Growth Challenges Nairobi</h6>
        <p>Online visibility problems Kenya, lead generation not working, customer acquisition Nairobi, business automation solutions, sales system not working.</p>

        {/* PROVIDER SEARCHES - COMPARISON STAGE */}
        <h1>Best Digital Agency In Nairobi</h1>
        <h2>Top Software Development Companies In Nairobi</h2>
        <h3>Best SEO Company Nairobi</h3>
        <h4>Best Web Development Company Kenya</h4>
        <h5>Business Automation Company Nairobi</h5>
        <h6>Digital Growth Company Nairobi</h6>
        <p>Software engineering Nairobi, growth agency Kenya, business transformation Nairobi, digital transformation company Kenya.</p>

        {/* LOCAL TRUST SEARCHES - INSTANT CALLS */}
        <h1>Software Development Company Near Me</h1>
        <h2>Digital Agency Near Me</h2>
        <h3>IT Company Near Me</h3>
        <h4>Business Automation Nairobi</h4>
        <h5>Web Development Nairobi</h5>
        <h6>SEO Services Nairobi</h6>
        <p>Growth consultants Nairobi, business systems Nairobi, automation experts Kenya.</p>

        {/* WHAT IT MEANS TO BE GROWTH */}
        <h1>Digital Growth Company Nairobi</h1>
        <h2>Software Engineering Company Kenya</h2>
        <h3>Business Growth Solutions Nairobi</h3>
        <h4>Technology Growth Partners Kenya</h4>
        <h5>Digital Transformation Nairobi</h5>
        <p>When you say "we are growth", it means you are not selling services. You are selling business outcomes. Business owners want more customers, more revenue, less chaos, systems that work, a team they can trust.</p>

        {/* GROWTH POSITIONING CONTENT */}
        <div>
          <h2>Growth Is The Language Of Buyers</h2>
          <p>Most companies in Nairobi sell web design, software development, SEO, apps. Business owners do not wake up wanting those. They wake up wanting more customers, more revenue, less chaos, systems that work, a team they can trust.</p>

          <h3>How Business Owners Actually Search</h3>
          <p>There are 3 search mindsets. Problem searches like "my website is not generating leads", provider searches like "best digital agency in Nairobi", and local trust searches like "software development company near me".</p>

          <h3>How To Become Top 5 In Nairobi</h3>
          <p>You don't rank top 5 by saying "we do everything". You rank top 5 by being clear about one thing: "We help businesses grow using technology." Everything else supports that. Position as a Digital Growth & Software Engineering Company.</p>
        </div>
      </div>

      <Header />
      <main>
        <HeroSection1 />


        <HeroSection2 />
        <HeroSection3 />
        <WhyChooseCres />
        <HowCresWorks />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
