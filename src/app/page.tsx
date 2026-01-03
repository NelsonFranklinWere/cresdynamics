import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Automation & SEO for Growing Businesses in Kenya | CRES Dynamics Nairobi',
  description: 'Transform your Nairobi business with AI automation, fast websites, and SEO systems that convert traffic into revenue. Trusted digital growth partner for Kenyan entrepreneurs.',
  keywords: 'AI automation Kenya, website development Nairobi, SEO services Kenya, digital marketing East Africa, business growth systems, Nairobi digital agency',
  openGraph: {
    title: 'AI Automation & SEO for Growing Businesses in Kenya | CRES Dynamics',
    description: 'Transform your Nairobi business with AI automation, fast websites, and SEO systems that convert traffic into revenue.',
    url: 'https://cresdynamics.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation & SEO for Growing Businesses in Kenya',
    description: 'Transform your Nairobi business with AI automation, fast websites, and SEO systems that convert traffic into revenue.',
  },
};

// Eager load above-the-fold content
import HeroSection1 from '@/components/HeroSection1';

// Lazy load below-the-fold content
const HeroSection2 = dynamic(() => import('@/components/HeroSection2'), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse"></div>
});
const HeroSection3 = dynamic(() => import('@/components/HeroSection3'), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse"></div>
});
const WhyChooseCres = dynamic(() => import('@/components/WhyChooseCres'), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse"></div>
});
const HowCresWorks = dynamic(() => import('@/components/HowCresWorks'), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse"></div>
});
const FinalCTA = dynamic(() => import('@/components/FinalCTA'), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse"></div>
});
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse"></div>
});

export default function Home() {
  return (
    <div className="min-h-screen">
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
