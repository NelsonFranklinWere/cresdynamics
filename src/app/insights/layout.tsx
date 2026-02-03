import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Growth Insights - Learn How Nairobi Businesses Scale | CRES Dynamics',
  description: 'Learn proven strategies to grow your Nairobi business. SEO tips, automation hacks, customer acquisition tactics. Stop guessing, start growing with data-driven insights.',
  openGraph: {
    title: 'Business Growth Insights - Scale Your Nairobi Business',
    description: 'Learn proven strategies to grow your Nairobi business. SEO tips, automation hacks, customer acquisition tactics.',
    url: 'https://cresdynamics.com/insights',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Growth Insights - Scale Your Business',
    description: 'Learn proven strategies to grow your Nairobi business. Stop guessing, start growing.',
  },
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

