import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Study — Whitelight Store | Cres Dynamics',
  description:
    'Premium footwear and gym gear, built to be found — a new e-commerce website and SEO strategy for Whitelight Store in Nairobi.',
  alternates: { canonical: 'https://cresdynamics.com/case-studies/whitelight-store/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Case Study — Whitelight Store | Cres Dynamics',
    description:
      'Whitelight Store e-commerce + SEO build for Nairobi fitness and footwear demand. Live at whitelightstore.co.ke.',
    url: 'https://cresdynamics.com/case-studies/whitelight-store/',
    type: 'article',
  },
};

export default function WhitelightStoreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
