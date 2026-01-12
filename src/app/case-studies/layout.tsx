import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies - CRES Dynamics | Success Stories from Nairobi Businesses',
  description: 'Real success stories from Nairobi businesses. See how CRES Dynamics helped florists, restaurants, SACCOs, and more turn clicks into clients with digital growth solutions.',
  openGraph: {
    title: 'Case Studies - CRES Dynamics | Success Stories',
    description: 'Real success stories from Nairobi businesses. See how CRES Dynamics helped turn clicks into clients with digital growth solutions.',
    url: 'https://cresdynamics.com/case-studies',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies - CRES Dynamics',
    description: 'Real success stories from Nairobi businesses. See how we helped turn clicks into clients.',
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

