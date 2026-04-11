import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MarketingPageContent from '@/components/MarketingPageContent';

export const metadata = {
  title: 'Marketing & Ads for Nairobi — Meta & Google | CRES Dynamics',
  description:
    'Meta and Google Ads built for Nairobi and Kenya: local, countywide, and diaspora. Packages, benchmarks, and retainers that focus on buyers—not vanity metrics.',
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
