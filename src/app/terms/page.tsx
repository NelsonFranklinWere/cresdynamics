import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <Header />
      <main className="pt-24 pb-16">
        <section className="relative py-12 md:py-16">
          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <h1 className="text-2xl md:text-3xl font-black text-white mb-8">Terms of Service</h1>
            <div className="prose prose-invert prose-sm max-w-none text-white/80 space-y-6">
              <p className="text-white/90 font-semibold">Last updated: 2026</p>
              <p>
                By using the CRES Dynamics website and services, you agree to these terms. If you do not agree, please do not use our site or engage our services.
              </p>
              <h2 className="text-lg font-bold text-white mt-8">Services</h2>
              <p>We provide business systems design and build services (e.g. websites, CresOS, custom ERP, finance platforms, automation). Scope, deliverables, and fees are defined in separate agreements or statements of work.</p>
              <h2 className="text-lg font-bold text-white mt-8">Use of the website</h2>
              <p>You may use this website for lawful purposes only. You may not attempt to gain unauthorised access to our systems, scrape content without permission, or use the site in a way that harms us or third parties.</p>
              <h2 className="text-lg font-bold text-white mt-8">Intellectual property</h2>
              <p>Content on this site (text, design, logos) is owned by CRES Dynamics unless otherwise stated. Work product and IP developed for you under a project will be governed by the relevant contract.</p>
              <h2 className="text-lg font-bold text-white mt-8">Limitation of liability</h2>
              <p>To the extent permitted by law, we are not liable for indirect, incidental, or consequential damages arising from use of our website or services. Liability under any project is capped as set out in the applicable agreement.</p>
              <h2 className="text-lg font-bold text-white mt-8">Governing law</h2>
              <p>These terms are governed by the laws of Kenya. Any disputes shall be subject to the exclusive jurisdiction of the courts of Kenya.</p>
              <p className="mt-8">
                <a href="/contact" className="text-[var(--cres-orange-primary)] hover:underline">Contact us</a> for questions about these terms.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
