import type { Metadata } from 'next';
import { caseStudyMetadata } from '@/lib/caseStudyHeadlines';

export const metadata: Metadata = caseStudyMetadata('floral-whispers-gifts');

export default function FloralWhispersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
