import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How We Build Business Systems | Process Mapping, Architecture, Fast ERP Development | Nairobi Kenya',
  description: 'How CRES Dynamics builds business systems: Process mapping, scalable system architecture, fast MVP ERP builds, AI-powered automation, analytics pipelines, enterprise-grade security. Quality systems, fast implementation, AI integration. Nairobi Kenya.',
  keywords: [
    'how to build ERP systems Nairobi',
    'ERP development process Kenya',
    'system architecture Nairobi',
    'process mapping ERP Kenya',
    'fast ERP development process Nairobi',
    'MVP ERP build Kenya',
    'business systems architecture Nairobi',
    'ERP security governance Kenya',
    'automation systems development Nairobi',
    'quality ERP development Kenya'
  ],
};

export default function HowWeBuildLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
