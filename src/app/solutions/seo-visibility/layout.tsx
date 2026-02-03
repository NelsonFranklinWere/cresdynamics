import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO That Actually Brings Customers - Stop Being Invisible Online | Nairobi',
  description: 'Nobody finds your business online? Get SEO that works. Rank on Google for your services, attract qualified customers, grow revenue. Proven results for Nairobi businesses.',
  openGraph: {
    title: 'SEO That Actually Brings Customers',
    description: 'Nobody finds your business online? Get SEO that works. Rank on Google, attract customers, grow revenue.',
    url: 'https://cresdynamics.com/solutions/seo-visibility',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO That Brings Real Customers',
    description: 'Stop being invisible online. Get SEO that ranks and brings qualified customers.',
  },
};

export default function SEOVisibilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

