import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Real Business Results - How Nairobi Companies Grew 300% | CRES Dynamics',
  description: 'See real results: Nairobi businesses that doubled revenue, automated operations, and scaled profitably. Florists, restaurants, SACCOs - proven growth strategies that work.',
  openGraph: {
    title: 'Real Business Results - How Companies Grew 300%',
    description: 'See real results: Nairobi businesses that doubled revenue and scaled profitably. Proven growth strategies.',
    url: 'https://cresdynamics.com/case-studies',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Business Results - Growth Stories',
    description: 'See how Nairobi businesses doubled revenue and scaled with our proven strategies.',
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

