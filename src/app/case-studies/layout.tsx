import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Live Systems in Production | Real ERP Systems, Finance Platforms | Nairobi Kenya',
  description: 'Real systems. Real production. Real businesses. See live ERP systems, finance platforms, and automation systems in production. Production-ready systems with real users and revenue tracking. Nairobi Kenya.',
  keywords: [
    'ERP systems case studies Nairobi',
    'finance platform case studies Kenya',
    'production ERP systems Nairobi',
    'live business systems Kenya',
    'ERP proof Nairobi',
    'finance platform proof Kenya',
    'automation systems case studies Nairobi',
    'production-ready systems Kenya',
    'real ERP systems Nairobi',
    'business systems proof Kenya'
  ],
  openGraph: {
    title: 'Live Systems in Production | Real ERP Systems, Finance Platforms | Nairobi Kenya',
    description: 'Real systems. Real production. Real businesses. See live ERP systems, finance platforms, and automation systems in production with real users and revenue tracking.',
    url: 'https://cresdynamics.com/case-studies',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Live Systems in Production | Real ERP Systems',
    description: 'Real systems. Real production. See live ERP systems, finance platforms, and automation systems in production.',
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

