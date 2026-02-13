import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About CRES Dynamics - Business Systems Builder | ERP, Finance Platforms Nairobi Kenya',
  description: 'CRES Dynamics builds business systems—ERPs, finance platforms, and automation—that companies actually run on. Quality systems, fast implementation, AI integration. Why Nairobi Kenya businesses choose us for ERP development and business systems.',
  keywords: [
    'about CRES Dynamics Nairobi',
    'business systems builder Kenya',
    'ERP development company Nairobi',
    'finance platform developers Kenya',
    'why choose CRES Dynamics Nairobi',
    'business systems company Kenya',
    'ERP builders Nairobi',
    'quality business systems Kenya'
  ],
  openGraph: {
    title: 'About CRES Dynamics - Business Systems Builder | ERP, Finance Platforms Nairobi Kenya',
    description: 'CRES Dynamics builds business systems—ERPs, finance platforms, and automation—that companies actually run on. Quality systems, fast implementation, AI integration.',
    url: 'https://cresdynamics.com/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About CRES Dynamics - Business Systems Builder',
    description: 'CRES Dynamics builds business systems—ERPs, finance platforms, and automation—that companies actually run on.',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

