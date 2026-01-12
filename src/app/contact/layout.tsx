import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - CRES Dynamics | Free Strategy Session | Nairobi',
  description: 'Get in touch with CRES Dynamics for a free strategy session. Turn clicks into clients with our digital growth solutions for Nairobi businesses. Book your consultation today.',
  openGraph: {
    title: 'Contact Us - CRES Dynamics | Free Strategy Session',
    description: 'Get in touch with CRES Dynamics for a free strategy session. Turn clicks into clients with our digital growth solutions for Nairobi businesses.',
    url: 'https://cresdynamics.com/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - CRES Dynamics',
    description: 'Get in touch with CRES Dynamics for a free strategy session. Book your consultation today.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

