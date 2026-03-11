import type { Metadata } from 'next';
import { canonical } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Digital Sales Systems Nairobi | CRM & Sales Pipeline Kenya — Cres Dynamics',
  description: 'Replace spreadsheets with a real digital sales system. Cres Dynamics builds CRM, sales pipeline and lead management platforms for Nairobi businesses — track revenue, manage clients and close deals faster.',
  keywords: 'CRM Nairobi, digital sales Kenya, sales pipeline Kenya, lead management Nairobi, CRM software Kenya, sales system Nairobi, customer management Kenya',
  alternates: { canonical: canonical('/solutions/digital-sales/') },
  openGraph: {
    title: 'Digital Sales Systems Nairobi | CRM & Sales Pipeline Kenya — Cres Dynamics',
    description: 'Replace spreadsheets with a real digital sales system. CRM and lead management for Nairobi businesses.',
    url: 'https://cresdynamics.com/solutions/digital-sales/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Sales Systems Nairobi | CRM Kenya',
    description: 'CRM, sales pipeline and lead management for Nairobi businesses.',
  },
};

export default function DigitalSalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

