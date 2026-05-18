import type { Metadata } from 'next';
import { caseStudyMetadata } from '@/lib/caseStudyHeadlines';

export const metadata: Metadata = caseStudyMetadata('the-stems-flowers');

export default function TheStemsFlowersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
