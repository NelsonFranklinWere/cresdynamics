import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - CRES Dynamics | Nairobi Digital Agency Team',
  description: 'Learn about CRES Dynamics - a Nairobi-based digital agency specializing in websites, SEO, AI automation, and digital growth solutions for Kenyan businesses.',
  openGraph: {
    title: 'About Us - CRES Dynamics | Nairobi Digital Agency Team',
    description: 'Learn about CRES Dynamics - a Nairobi-based digital agency specializing in websites, SEO, AI automation, and digital growth solutions for Kenyan businesses.',
    url: 'https://cresdynamics.com/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - CRES Dynamics',
    description: 'Learn about CRES Dynamics - a Nairobi-based digital agency specializing in websites, SEO, AI automation, and digital growth solutions.',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

