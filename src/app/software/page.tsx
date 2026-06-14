import ServiceProblemSolutionPage from '@/components/ServiceProblemSolutionPage';
import { SERVICE_PAGES } from '@/lib/service-page-content';
import type { Metadata } from 'next';

const content = SERVICE_PAGES.software;

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
  alternates: { canonical: 'https://cresdynamics.com/software/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: content.metaTitle,
    description: content.metaDescription,
    url: 'https://cresdynamics.com/software/',
    type: 'website',
  },
};

export default function SoftwarePage() {
  return <ServiceProblemSolutionPage content={content} />;
}
