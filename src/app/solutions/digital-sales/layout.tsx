import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WhatsApp Automation - Never Miss Another Customer Inquiry | Nairobi',
  description: 'Customers contact you but you miss calls? 24/7 WhatsApp automation that responds instantly, qualifies leads, and books meetings. Stop losing customers to slow responses.',
  openGraph: {
    title: 'WhatsApp Automation - Never Miss Customer Inquiries',
    description: 'Customers contact you but you miss calls? 24/7 WhatsApp automation that responds instantly and books meetings.',
    url: 'https://cresdynamics.com/solutions/digital-sales',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhatsApp Automation - Never Miss Leads',
    description: 'Stop losing customers to slow responses. 24/7 WhatsApp automation that converts.',
  },
};

export default function DigitalSalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

