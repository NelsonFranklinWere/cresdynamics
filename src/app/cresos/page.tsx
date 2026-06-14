import CresOSPageContent from '@/components/CresOSPageContent';
import { CRESOS_PAGE } from '@/lib/cresos-page-content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: CRESOS_PAGE.metaTitle,
  description: CRESOS_PAGE.metaDescription,
  alternates: { canonical: 'https://cresdynamics.com/cresos/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: CRESOS_PAGE.metaTitle,
    description: CRESOS_PAGE.metaDescription,
    url: 'https://cresdynamics.com/cresos/',
    type: 'website',
  },
  keywords: [
    'CresOS',
    'business operating system',
    'modular ERP Kenya',
    'SME ERP Nairobi',
    'M-Pesa ERP',
    'RBAC business system',
    'CRES Dynamics',
  ],
};

export default function CresOSPage() {
  return <CresOSPageContent />;
}
