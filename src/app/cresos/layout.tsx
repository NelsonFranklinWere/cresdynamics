import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CresOS – The Operating System for Growing Businesses | CRES Dynamics',
  description: 'CresOS is a modular business operating system: identity & access, operations management, finance visibility, client tracking, analytics. API-first, secure cloud deployment. Built by CRES Dynamics for SMEs, training institutions, fintech, and NGOs.',
  keywords: [
    'CresOS',
    'business operating system',
    'modular ERP',
    'SME ERP Kenya',
    'training institution ERP',
    'fintech operations platform',
    'NGO management system',
    'RBAC',
    'multi-role dashboards',
    'finance visibility',
    'CRES Dynamics',
  ],
};

export default function CresOSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
