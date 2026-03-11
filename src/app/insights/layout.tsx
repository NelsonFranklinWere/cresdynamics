import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights & Blog | Business Systems, ERP & Tech for Kenya — Cres Dynamics',
  description: 'Guides, articles and insights for Nairobi businesses — covering ERP systems, business automation, web development, M-Pesa integration and digital growth strategies for Kenya.',
  alternates: { canonical: 'https://cresdynamics.com/insights/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Insights & Blog — Business Systems for Kenya | Cres Dynamics',
    url: 'https://cresdynamics.com/insights/',
    type: 'website',
  },
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

