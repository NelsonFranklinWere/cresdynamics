import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Growth Strategy - Stop Guessing, Start Scaling | Nairobi Consulting',
  description: 'Tired of trial and error growth? Get a custom strategy that actually works. Data-driven consulting for Nairobi businesses. From idea to profitable scaling - proven framework.',
  openGraph: {
    title: 'Business Growth Strategy - Stop Guessing',
    description: 'Tired of trial and error growth? Get a custom strategy that actually works for Nairobi businesses.',
    url: 'https://cresdynamics.com/solutions/consulting-strategy',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Growth Strategy - Stop Guessing',
    description: 'Get a custom growth strategy that works. From idea to profitable scaling.',
  },
};

export default function ConsultingStrategyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

