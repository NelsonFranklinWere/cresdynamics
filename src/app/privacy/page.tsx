import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <Header />
      <main className="pt-24 pb-16">
        <section className="relative py-12 md:py-16">
          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <h1 className="text-2xl md:text-3xl font-black text-white mb-8">Privacy Policy</h1>
            <div className="text-white/80 space-y-6 text-sm">
              <p className="text-white/90 font-semibold">Last updated: 2026</p>
              <p>CRES Dynamics respects your privacy. This policy describes how we collect, use, and protect information when you use our website or services.</p>
              <h2 className="text-lg font-bold text-white mt-8">Information we collect</h2>
              <p>We may collect information you provide when you contact us, book a strategy call, or use our services. We may also collect usage data to improve our site and services.</p>
              <h2 className="text-lg font-bold text-white mt-8">How we use it</h2>
              <p>We use your information to respond to inquiries, deliver services, send relevant updates, and improve our offerings. We do not sell your personal data to third parties.</p>
              <h2 className="text-lg font-bold text-white mt-8">Data security</h2>
              <p>We take reasonable measures to protect your data. See our Data and Security page for details.</p>
              <h2 className="text-lg font-bold text-white mt-8">Your rights</h2>
              <p>You may request access, correction, or deletion of your personal data by contacting us at info@cresdynamics.com.</p>
              <p className="mt-8"><a href="/contact" className="text-[var(--cres-orange-primary)] hover:underline">Contact us</a> for any privacy-related questions.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
