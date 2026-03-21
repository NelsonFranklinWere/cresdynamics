import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Study — Floral Whispers Gifts | Cres Dynamics',
  description:
    'Beautiful gifts, finally visible — full e-commerce for Nairobi florist Floral Whispers Gifts. Next.js, M-Pesa, WhatsApp ordering, SEO. Referral win led to The Stems Flowers.',
  alternates: { canonical: 'https://cresdynamics.com/case-studies/floral-whispers-gifts/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Case Study — Floral Whispers Gifts | Cres Dynamics',
    description:
      'E-commerce for Floral Whispers Gifts — premium catalogue, M-Pesa, organic reach. Live at floralwhispersgifts.co.ke.',
    url: 'https://cresdynamics.com/case-studies/floral-whispers-gifts/',
    type: 'article',
  },
};

export default function FloralWhispersGiftsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
