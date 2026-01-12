import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO & Google Visibility Services - CRES Dynamics | Nairobi SEO Agency',
  description: 'Get found on Google. Professional SEO services for Nairobi businesses. Increase organic traffic, rankings, and leads with proven SEO strategies.',
  openGraph: {
    title: 'SEO & Google Visibility Services - CRES Dynamics',
    description: 'Get found on Google. Professional SEO services for Nairobi businesses. Increase organic traffic, rankings, and leads.',
    url: 'https://cresdynamics.com/solutions/seo-visibility',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO & Google Visibility Services - CRES Dynamics',
    description: 'Get found on Google. Professional SEO services for Nairobi businesses.',
  },
};

export default function SEOVisibilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

