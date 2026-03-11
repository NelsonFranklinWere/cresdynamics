import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies & Proof of Work | Real Business Results Nairobi — Cres Dynamics',
  description: 'Real production results — 127 active users, KES 4.97M tracked, 99.9% uptime. See how Nairobi businesses run faster and more profitably on systems built by Cres Dynamics.',
  alternates: { canonical: 'https://cresdynamics.com/case-studies/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Case Studies — Real Results from Cres Dynamics Nairobi',
    description: '127 active users, KES 4.97M tracked, 99.9% uptime. Real production systems running in Kenya.',
    url: 'https://cresdynamics.com/case-studies/',
    type: 'website',
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

