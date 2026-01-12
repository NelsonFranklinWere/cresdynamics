import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Development Services - CRES Dynamics | Nairobi Web Design',
  description: 'Professional website development for Nairobi businesses. Fast, SEO-optimized websites that turn visitors into customers. Get your digital storefront working today.',
  openGraph: {
    title: 'Website Development Services - CRES Dynamics',
    description: 'Professional website development for Nairobi businesses. Fast, SEO-optimized websites that turn visitors into customers.',
    url: 'https://cresdynamics.com/solutions/web-growth',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Services - CRES Dynamics',
    description: 'Professional website development for Nairobi businesses. Fast, SEO-optimized websites.',
  },
};

export default function WebGrowthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

