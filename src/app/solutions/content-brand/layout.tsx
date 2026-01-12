import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Content & Brand Authority Services - CRES Dynamics | Nairobi Content Marketing',
  description: 'Build brand authority with strategic content marketing. SEO-optimized content, thought leadership, and brand positioning for Nairobi businesses.',
  openGraph: {
    title: 'Content & Brand Authority Services - CRES Dynamics',
    description: 'Build brand authority with strategic content marketing. SEO-optimized content and thought leadership for Nairobi businesses.',
    url: 'https://cresdynamics.com/solutions/content-brand',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Content & Brand Authority Services - CRES Dynamics',
    description: 'Build brand authority with strategic content marketing for Nairobi businesses.',
  },
};

export default function ContentBrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

