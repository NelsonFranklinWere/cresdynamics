import type { Metadata } from 'next';
import { canonical } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Case Studies | Real Business Results Nairobi — Cres Dynamics',
  description: 'Real production results from Cres Dynamics — 127 active users, KES 4.97M tracked, 99.9% uptime. See how Nairobi businesses are running faster, smarter and more profitably on systems built by Cres Dynamics.',
  keywords: 'Cres Dynamics case studies, ERP results Kenya, business system results Nairobi, software success stories Kenya, Cres Dynamics reviews',
  alternates: { canonical: canonical('/case-studies/') },
  openGraph: {
    title: 'Case Studies | Real Business Results Nairobi — Cres Dynamics',
    description: 'Real production results from Cres Dynamics — 127 active users, KES 4.97M tracked. See how Nairobi businesses run on systems built by Cres Dynamics.',
    url: 'https://cresdynamics.com/case-studies/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | Real Business Results Nairobi — Cres Dynamics',
    description: 'Real production results. 127 active users, KES 4.97M tracked.',
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

