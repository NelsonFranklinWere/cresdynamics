import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Strategy Consulting - CRES Dynamics | Nairobi Business Consulting',
  description: 'Strategic digital consulting for Nairobi businesses. Custom growth strategies, digital transformation, and business optimization. Free strategy session available.',
  openGraph: {
    title: 'Digital Strategy Consulting - CRES Dynamics',
    description: 'Strategic digital consulting for Nairobi businesses. Custom growth strategies and digital transformation.',
    url: 'https://cresdynamics.com/solutions/consulting-strategy',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Strategy Consulting - CRES Dynamics',
    description: 'Strategic digital consulting for Nairobi businesses. Custom growth strategies.',
  },
};

export default function ConsultingStrategyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

