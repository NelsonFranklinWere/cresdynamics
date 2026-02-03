import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About CRES Dynamics - Why Nairobi Businesses Choose Us for Growth',
  description: 'Why businesses choose CRES Dynamics for growth. We help Nairobi companies get found online, convert more customers, and build systems that scale. Real results, not hype.',
  openGraph: {
    title: 'About CRES Dynamics - Why Businesses Choose Us for Growth',
    description: 'Why businesses choose CRES Dynamics for growth. We help Nairobi companies get found online, convert more customers, and build systems that scale.',
    url: 'https://cresdynamics.com/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About CRES Dynamics - Business Growth Partner',
    description: 'Why businesses choose CRES Dynamics for growth. Real results for Nairobi companies.',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

