import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom ERP System Nairobi | ERP Development Kenya — Cres Dynamics',
  description: 'Custom ERP systems for growing businesses in Nairobi. Built on the Cres Core Engine — finance, operations, inventory and M-Pesa in one platform. 500+ active users, KES 8.3M tracked.',
  alternates: { canonical: 'https://cresdynamics.com/erp/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Custom ERP System Nairobi — Cres Dynamics',
    description: 'Custom ERP systems built for Nairobi businesses. Finance, operations, inventory and M-Pesa integrated.',
    url: 'https://cresdynamics.com/erp/',
    type: 'website',
  },
};

export default function ERPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
