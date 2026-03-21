import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Study — The Stems Flowers | Cres Dynamics',
  description:
    'From walk-ins only to ordering online — full e-commerce for Nairobi CBD florist The Stems Flowers. Next.js, M-Pesa, SEO, same-day delivery UX in 4 weeks.',
  alternates: { canonical: 'https://cresdynamics.com/case-studies/the-stems-flowers/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Case Study — The Stems Flowers | Cres Dynamics',
    description:
      'E-commerce revamp for The Stems Flowers — M-Pesa checkout, product catalogue, on-page SEO. Live at thestemsflowers.co.ke.',
    url: 'https://cresdynamics.com/case-studies/the-stems-flowers/',
    type: 'article',
  },
};

export default function TheStemsFlowersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
