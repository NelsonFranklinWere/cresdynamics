import ServiceProblemSolutionPage from '@/components/ServiceProblemSolutionPage';
import { SERVICE_PAGES } from '@/lib/service-page-content';
import type { Metadata } from 'next';

const content = SERVICE_PAGES.erp;

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
  alternates: { canonical: 'https://cresdynamics.com/erp/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: content.metaTitle,
    description: content.metaDescription,
    url: 'https://cresdynamics.com/erp/',
    type: 'website',
  },
};

export default function ERPPage() {
  return <ServiceProblemSolutionPage content={content} />;
}
