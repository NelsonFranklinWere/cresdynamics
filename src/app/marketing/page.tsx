import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MarketingPageContent from '@/components/MarketingPageContent';

export const metadata = {
  title: 'How We Work & Marketing — CRES Dynamics',
  description: 'Structured process from first call to go-live. Meta and Google Ads that bring real buyers to your business.',
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
