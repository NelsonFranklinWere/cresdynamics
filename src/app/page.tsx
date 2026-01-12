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
