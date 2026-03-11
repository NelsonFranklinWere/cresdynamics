import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Sales Systems Nairobi | CRM & Sales Pipeline Kenya — Cres Dynamics',
  description: 'Replace spreadsheets with a real digital sales system. CRM, sales pipeline and lead management for Nairobi businesses — track revenue, manage clients and close deals faster.',
  alternates: { canonical: 'https://cresdynamics.com/solutions/digital-sales/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Digital Sales Systems Nairobi — Cres Dynamics',
    description: 'CRM and sales pipeline systems for Nairobi businesses. Track revenue and close deals faster.',
    url: 'https://cresdynamics.com/solutions/digital-sales/',
    type: 'website',
  },
};

export default function DigitalSalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

