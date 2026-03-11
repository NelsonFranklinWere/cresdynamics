import type { Metadata } from 'next';
import { canonical } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'AI Automation Nairobi | Business Automation Kenya — Cres Dynamics',
  description: 'Cres Dynamics builds AI-powered automation systems for Nairobi businesses — eliminating manual work, automating workflows, and integrating intelligent tools into your business operations. Live in production across Kenya.',
  keywords: 'AI automation Nairobi, business automation Kenya, AI software Nairobi, workflow automation Kenya, intelligent systems Nairobi, AI business tools Kenya, process automation Nairobi',
  alternates: { canonical: canonical('/solutions/ai-automation/') },
  openGraph: {
    title: 'AI Automation Nairobi | Business Automation Kenya — Cres Dynamics',
    description: 'Cres Dynamics builds AI-powered automation systems for Nairobi businesses.',
    url: 'https://cresdynamics.com/solutions/ai-automation/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation Nairobi | Business Automation Kenya',
    description: 'AI-powered automation systems for Nairobi businesses. Live in production across Kenya.',
  },
};

export default function AIAutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

