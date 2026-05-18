import type { Metadata } from 'next';
import { caseStudyMetadata } from '@/lib/caseStudyHeadlines';

export const metadata: Metadata = caseStudyMetadata('mohaa-finest');

export default function MohaaFinestLayout({ children }: { children: React.ReactNode }) {
  return children;
}
