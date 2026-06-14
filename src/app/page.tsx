import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import HeroTesla from '@/components/HeroTesla';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

const HomepageProblemSection = dynamic(() => import('@/components/HomepageProblemSection'));
const HomepageSystemsGrid = dynamic(() => import('@/components/HomepageSystemsGrid'));
const LiveSystemsProof = dynamic(() => import('@/components/LiveSystemsProof'));
const HomepageHowWeBuild = dynamic(() => import('@/components/HomepageHowWeBuild'));
const HomepageWhoThisIsFor = dynamic(() => import('@/components/HomepageWhoThisIsFor'));
const FinalCTA = dynamic(() => import('@/components/FinalCTA'));

export const metadata: Metadata = {
  title: 'Custom ERP Systems and Business Software Nairobi Kenya — Cres Dynamics',
  description:
    'Cres Dynamics builds custom ERP systems, e-commerce platforms, finance software, and AI automation for Kenyan businesses. Systems designed around how your business actually works. Nairobi Kenya.',
  alternates: { canonical: 'https://cresdynamics.com/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Custom ERP Systems and Business Software Nairobi Kenya — Cres Dynamics',
    description:
      'Custom ERP systems, e-commerce platforms, finance software, and AI automation for Kenyan businesses. M-Pesa integration. Nairobi Kenya.',
    url: 'https://cresdynamics.com/',
    type: 'website',
  },
};

export default function Home() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CRES Dynamics',
    url: 'https://cresdynamics.com',
    logo: 'https://cresdynamics.com/logo.png',
    description:
      'Custom ERP systems, e-commerce platforms, finance software, and AI automation for Kenyan businesses in Nairobi.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kivuli Tower, 3rd Floor Westlands',
      addressLocality: 'Nairobi',
      addressCountry: 'KE',
    },
    telephone: '+254708805496',
    email: 'info@cresdynamics.com',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+254708805496',
      email: 'info@cresdynamics.com',
      url: 'https://cresdynamics.com/contact',
    },
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <Header />
      <main>
        <HeroTesla />
        <HomepageProblemSection />
        <HomepageSystemsGrid />
        <LiveSystemsProof />
        <HomepageHowWeBuild />
        <HomepageWhoThisIsFor />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
