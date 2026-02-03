import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Content Marketing That Builds Trust - Become Your Industry Expert | Nairobi',
  description: 'Customers do not trust your brand? Build authority with content that positions you as the expert. SEO-optimized articles, thought leadership, credibility that converts to customers.',
  openGraph: {
    title: 'Content Marketing That Builds Trust',
    description: 'Customers do not trust your brand? Build authority with content that positions you as the expert.',
    url: 'https://cresdynamics.com/solutions/content-brand',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Content Marketing That Builds Trust',
    description: 'Become your industry expert. Content marketing that converts trust to customers.',
  },
};

export default function ContentBrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

