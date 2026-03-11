import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Cres Dynamics | ERP & Business Systems Company Nairobi, Kenya',
  description: 'Cres Dynamics is a Nairobi-based business systems company building ERP platforms, finance systems and AI automation for growing Kenyan businesses. Westlands, Nairobi. Est. 2024.',
  alternates: { canonical: 'https://cresdynamics.com/about/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'About Cres Dynamics — Nairobi Business Systems Company',
    url: 'https://cresdynamics.com/about/',
    type: 'website',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

