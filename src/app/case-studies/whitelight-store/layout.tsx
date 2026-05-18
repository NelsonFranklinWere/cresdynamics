import type { Metadata } from 'next';
import { caseStudyMetadata } from '@/lib/caseStudyHeadlines';

export const metadata: Metadata = caseStudyMetadata('whitelight-store');

export default function WhitelightStoreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
