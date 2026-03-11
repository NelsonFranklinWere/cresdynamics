import type { Metadata } from 'next';
import { canonical } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Contact Cres Dynamics | Web Development & ERP Company Nairobi, Kenya',
  description: 'Get in touch with Cres Dynamics — Nairobi\'s custom ERP, business systems and web development company. Call +254 708 805 496 or email info@cresdynamics.com to discuss your project.',
  alternates: { canonical: canonical('/contact/') },
  keywords: [
    'Systems Discovery Session Nairobi',
    'ERP discovery session Kenya',
    'process mapping Nairobi',
    'business systems contact Kenya',
    'CresOS discovery Nairobi',
    'finance platform discussion Kenya',
    'custom ERP contact Nairobi',
    'systems engineering Kenya contact'
  ],
  openGraph: {
    title: 'Contact Cres Dynamics | Web Development & ERP Company Nairobi, Kenya',
    description: 'Get in touch with Cres Dynamics — Nairobi\'s custom ERP, business systems and web development company.',
    url: 'https://cresdynamics.com/contact/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Cres Dynamics | Nairobi, Kenya',
    description: 'Get in touch with Cres Dynamics — custom ERP, business systems and web development.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

