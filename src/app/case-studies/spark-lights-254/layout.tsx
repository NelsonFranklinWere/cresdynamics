import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Study — Spark Lights 254 | Cres Dynamics',
  description:
    '11,700 impressions and 281 clicks from Google search — website + SEO for Spark Lights 254 in Nairobi.',
  alternates: { canonical: 'https://cresdynamics.com/case-studies/spark-lights-254/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Case Study — Spark Lights 254 | Cres Dynamics',
    description:
      'Spark Lights 254 website + SEO case study with verified Google Search Console performance data.',
    url: 'https://cresdynamics.com/case-studies/spark-lights-254/',
    type: 'article',
  },
};

export default function SparkLightsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
