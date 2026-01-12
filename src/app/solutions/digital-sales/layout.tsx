import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WhatsApp Business Systems - CRES Dynamics | Digital Sales Automation',
  description: '24/7 WhatsApp automation for Nairobi businesses. Never miss a lead. Automated responses, lead management, and customer service systems.',
  openGraph: {
    title: 'WhatsApp Business Systems - CRES Dynamics',
    description: '24/7 WhatsApp automation for Nairobi businesses. Never miss a lead. Automated responses and lead management.',
    url: 'https://cresdynamics.com/solutions/digital-sales',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhatsApp Business Systems - CRES Dynamics',
    description: '24/7 WhatsApp automation for Nairobi businesses. Never miss a lead.',
  },
};

export default function DigitalSalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

