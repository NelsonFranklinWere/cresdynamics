import type { Metadata } from 'next';
import { canonical } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Custom ERP System Nairobi | Business ERP Development Kenya — Cres Dynamics',
  description: 'Cres Dynamics builds custom ERP systems for growing businesses in Nairobi. Powered by the Cres Core Engine — integrating finance, operations, inventory and M-Pesa in one platform. Trusted by 127 active users tracking KES 4.97M.',
  keywords: 'ERP system Nairobi, custom ERP Kenya, ERP development Nairobi, business ERP Kenya, ERP software Nairobi, enterprise resource planning Kenya, M-Pesa ERP, finance ERP Kenya',
  alternates: { canonical: canonical('/erp/') },
};

export default function ERPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
