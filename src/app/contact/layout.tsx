import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Cres Dynamics | Web Development & ERP Company Nairobi Kenya',
  description: 'Contact Cres Dynamics — Nairobi\'s custom ERP, business systems and web development company. Call +254 708 805 496 or email info@cresdynamics.com. Kivuli Tower, Westlands, Nairobi.',
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

