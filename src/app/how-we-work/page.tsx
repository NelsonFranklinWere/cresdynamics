import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HowWeWorkPageContent from '@/components/HowWeWorkPageContent';

export const metadata = {
  title: 'How We Work — From Discovery to Go-Live | CRES Dynamics Nairobi',
  description:
    'Structured website delivery for Nairobi and Kenya: discovery, scope, Mpesa payments, design, build, go-live. Clear milestones and owners at every step.',
};

export default function HowWeWorkPage() {
  return (
    <div className="min-h-screen bg-[var(--neutral-bg)] text-[var(--navy-primary)]">
      <Header />
      <main className="pt-0">
        <HowWeWorkPageContent />
      </main>
      <Footer />
    </div>
  );
}
