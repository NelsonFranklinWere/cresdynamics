import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI & Sales Automation Services - CRES Dynamics | Nairobi AI Solutions',
  description: 'Automate sales and customer service with AI. WhatsApp automation, chatbots, and AI-powered systems for Nairobi businesses. Reduce workload, increase efficiency.',
  openGraph: {
    title: 'AI & Sales Automation Services - CRES Dynamics',
    description: 'Automate sales and customer service with AI. WhatsApp automation, chatbots, and AI-powered systems for Nairobi businesses.',
    url: 'https://cresdynamics.com/solutions/ai-automation',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI & Sales Automation Services - CRES Dynamics',
    description: 'Automate sales and customer service with AI. WhatsApp automation and AI-powered systems.',
  },
};

export default function AIAutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

