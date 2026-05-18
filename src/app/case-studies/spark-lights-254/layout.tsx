import type { Metadata } from 'next';
import { caseStudyMetadata } from '@/lib/caseStudyHeadlines';

export const metadata: Metadata = caseStudyMetadata('spark-lights-254');

export default function SparkLightsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
