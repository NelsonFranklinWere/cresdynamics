import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tell Us What You Are Dealing With — Cres Dynamics Nairobi',
  description:
    'Tell Cres Dynamics what operational problem you are facing. Custom ERP, e-commerce, finance platforms, and AI automation for Kenyan businesses. We respond within 2 hours. Nairobi Kenya.',
  alternates: { canonical: 'https://cresdynamics.com/contact/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Contact Cres Dynamics Nairobi',
    url: 'https://cresdynamics.com/contact/',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

