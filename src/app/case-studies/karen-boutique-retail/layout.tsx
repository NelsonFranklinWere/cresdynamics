import type { Metadata } from 'next';
import { caseStudyMetadata } from '@/lib/caseStudyHeadlines';

export const metadata: Metadata = caseStudyMetadata('karen-boutique-retail');

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
