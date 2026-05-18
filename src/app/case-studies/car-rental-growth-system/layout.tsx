import type { Metadata } from 'next';
import { caseStudyMetadata } from '@/lib/caseStudyHeadlines';

export const metadata: Metadata = caseStudyMetadata('car-rental-growth-system');

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
