import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact CRES Dynamics - Free Business Growth Consultation | Nairobi',
  description: 'Ready to grow your business? Get a free strategy session. We help Nairobi businesses get more customers, automate operations, and scale profitably. Book now.',
  openGraph: {
    title: 'Contact CRES Dynamics - Free Business Growth Consultation',
    description: 'Ready to grow your business? Get a free strategy session. We help Nairobi businesses get more customers and scale profitably.',
    url: 'https://cresdynamics.com/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact CRES Dynamics - Free Consultation',
    description: 'Ready to grow your business? Get a free strategy session for Nairobi businesses.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

