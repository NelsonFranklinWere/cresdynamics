import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom ERP Systems Nairobi Kenya | Fast ERP Development | Quality ERP With AI Integration',
  description: 'When off-the-shelf ERPs fail, we build custom ERP systems Nairobi Kenya that fit your business. Fast ERP development, quality systems, AI integration, phased approach, governance, security. Production-ready ERP systems for finance, operations, and talent management.',
  keywords: [
    'custom ERP systems Nairobi',
    'ERP development Kenya',
    'off-the-shelf ERP failed',
    'fast ERP development Nairobi',
    'quality ERP systems Kenya',
    'ERP with AI integration Nairobi',
    'production-ready ERP Kenya',
    'enterprise ERP systems Nairobi',
    'ERP for finance operations Kenya',
    'scalable ERP systems Nairobi',
    'ERP governance security Kenya',
    'phased ERP approach Nairobi'
  ],
};

export default function ERPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
