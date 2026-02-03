import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website That Actually Generates Leads - Stop Wasting Money on Dead Sites | Nairobi',
  description: 'Your website gets visitors but no customers? Get a high-converting website that turns clicks into sales. SEO-optimized, mobile-friendly, built for Nairobi business growth.',
  openGraph: {
    title: 'Website That Actually Generates Leads',
    description: 'Stop wasting money on dead websites. Get a high-converting site that turns clicks into sales.',
    url: 'https://cresdynamics.com/solutions/web-growth',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lead-Generating Websites - Stop Wasting Money',
    description: 'Your website gets visitors but no customers? Get a site that actually converts.',
  },
};

export default function WebGrowthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

