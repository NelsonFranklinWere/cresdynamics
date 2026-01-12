import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Growth Insights - CRES Dynamics | SEO & AI Tips for Nairobi Businesses',
  description: 'Weekly insights on AI automation, SEO strategies, and digital growth tips specifically designed for Nairobi businesses. Learn how to turn clicks into clients.',
  openGraph: {
    title: 'Digital Growth Insights - CRES Dynamics',
    description: 'Weekly insights on AI automation, SEO strategies, and digital growth tips specifically designed for Nairobi businesses.',
    url: 'https://cresdynamics.com/insights',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Growth Insights - CRES Dynamics',
    description: 'Weekly insights on AI automation, SEO strategies, and digital growth tips for Nairobi businesses.',
  },
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

