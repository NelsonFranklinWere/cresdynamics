import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Cres Dynamics — Custom Software & ERP Nairobi Kenya',
  description:
    'When WhatsApp and Excel stop working, Kenyan businesses need custom infrastructure. Cres Dynamics builds ERP systems, finance platforms, and AI automation in Nairobi — designed around how you operate.',
  alternates: { canonical: 'https://cresdynamics.com/about/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'About Cres Dynamics — Nairobi Business Systems Company',
    url: 'https://cresdynamics.com/about/',
    type: 'website',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

