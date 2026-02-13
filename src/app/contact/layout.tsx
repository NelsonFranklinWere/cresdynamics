import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Systems Discovery Session | Contact CRES Dynamics Nairobi Kenya',
  description: 'Book a Systems Discovery Session with CRES Dynamics. Map your processes, data, and goals. We outline how we architect and deploy ERP platforms, finance systems, and automation—visibility, control, scale.',
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
    title: 'Book a Systems Discovery Session | Contact CRES Dynamics',
    description: 'Map your processes and system needs. We architect and deploy production-ready ERPs, finance platforms, and automation.',
    url: 'https://cresdynamics.com/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Systems Discovery Session | CRES Dynamics',
    description: 'Map your processes and system needs. We architect and deploy production-ready ERPs, finance platforms, and automation.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

