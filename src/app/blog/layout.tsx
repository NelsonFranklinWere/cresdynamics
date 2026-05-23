import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | ERP, M-Pesa & Systems Guides | Cres Dynamics Nairobi',
  description:
    'Pricing guides, integration notes, and operations advice from the Cres Dynamics team — written for Kenyan businesses planning ERP, M-Pesa, or custom software.',
  alternates: { canonical: 'https://cresdynamics.com/blog/' },
  openGraph: {
    title: 'Blog | Cres Dynamics Nairobi',
    description:
      'Field notes on ERP cost, M-Pesa integration, websites, and moving off WhatsApp and Excel — from systems we build in Kenya.',
    url: 'https://cresdynamics.com/blog/',
    type: 'website',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
