import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Cres Dynamics',
  description:
    'Practical guides on ERP, websites, SEO, M-Pesa integration, and business systems for Kenyan companies.',
  alternates: { canonical: 'https://cresdynamics.com/blog/' },
  openGraph: {
    title: 'Blog | Cres Dynamics',
    description: 'Systems, software, and growth insights for Kenyan businesses.',
    url: 'https://cresdynamics.com/blog/',
    type: 'website',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
