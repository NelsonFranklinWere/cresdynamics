import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MarketingPageContent from '@/components/MarketingPageContent';

export const metadata = {
  title: 'Meta Ads Management Nairobi Kenya | Facebook & Instagram Ads | Cres Dynamics',
  description:
    'Professional Meta Ads and Google Ads management for Nairobi businesses. Structured campaigns, real targeting, monthly reporting. Packages from KES 25,000/month.',
};

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-[var(--neutral-bg)] text-[var(--navy-primary)]">
      <Header />
      <main className="pt-0">
        <MarketingPageContent />
      </main>
      <Footer />
    </div>
  );
}
