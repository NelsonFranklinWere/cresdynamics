import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Study — Mohaa Finest | Cres Dynamics',
  description:
    'Eastleigh’s finest curtains, finally found online — website + SEO build for Mohaa Finest. Live and indexed at mohaafinest.co.ke.',
  alternates: { canonical: 'https://cresdynamics.com/case-studies/mohaa-finest/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Case Study — Mohaa Finest | Cres Dynamics',
    description:
      'Mohaa Finest website + SEO build for Nairobi curtain and home decor demand. Live at mohaafinest.co.ke.',
    url: 'https://cresdynamics.com/case-studies/mohaa-finest/',
    type: 'article',
  },
};

export default function MohaaFinestLayout({ children }: { children: React.ReactNode }) {
  return children;
}
