import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Sales Automation - Stop Losing Leads, Automate Customer Service | Nairobi',
  description: 'Tired of manual customer service? Automate WhatsApp responses, follow-ups, and sales processes. AI that works 24/7 for Nairobi businesses. Get more customers while you sleep.',
  openGraph: {
    title: 'AI Sales Automation - Stop Losing Leads',
    description: 'Tired of manual customer service? Automate WhatsApp responses and sales processes. AI that works 24/7.',
    url: 'https://cresdynamics.com/solutions/ai-automation',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Sales Automation - Automate Customer Service',
    description: 'Stop losing leads. Automate WhatsApp responses and get more customers while you sleep.',
  },
};

export default function AIAutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

