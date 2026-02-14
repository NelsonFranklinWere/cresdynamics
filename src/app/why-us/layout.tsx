import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Serious Businesses Choose CRES Dynamics | Systems, Not Websites',
  description: 'We build operational systems that drive growth, visibility, and measurable control—ERP, finance tools, CRM, automation. Digital systems and operational infrastructure for serious businesses.',
  keywords: [
    'why choose CRES Dynamics',
    'systems engineering Kenya',
    'ERP builders Nairobi',
    'operational infrastructure',
    'business systems builder',
    'digital systems company',
    'automation and CRM',
    'strategic systems partner',
  ],
};

export default function WhyUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
