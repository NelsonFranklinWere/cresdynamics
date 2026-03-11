import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Automation Nairobi | Business Automation Kenya — Cres Dynamics',
  description: 'AI-powered automation systems for Nairobi businesses. Automate workflows, eliminate manual work and integrate intelligent tools. Live in production across Kenya.',
  alternates: { canonical: 'https://cresdynamics.com/solutions/ai-automation/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'AI Automation Nairobi — Cres Dynamics',
    description: 'Workflow automation and AI systems for Nairobi businesses. Live in production across Kenya.',
    url: 'https://cresdynamics.com/solutions/ai-automation/',
    type: 'website',
  },
};

export default function AIAutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

