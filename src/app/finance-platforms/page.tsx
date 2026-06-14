import ServiceProblemSolutionPage from '@/components/ServiceProblemSolutionPage';
import { SERVICE_PAGES } from '@/lib/service-page-content';
import type { Metadata } from 'next';

const content = SERVICE_PAGES.finance;

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
  alternates: { canonical: 'https://cresdynamics.com/finance-platforms/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: content.metaTitle,
    description: content.metaDescription,
    url: 'https://cresdynamics.com/finance-platforms/',
    type: 'website',
  },
};

export default function FinancePlatformsPage() {
  return <ServiceProblemSolutionPage content={content} />;
}
