import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DataSecurityPage() {
  const practices = [
    { title: 'Access control', body: 'Role-based access (RBAC) so only authorised users see and change data. Multi-factor authentication where appropriate.' },
    { title: 'Encryption', body: 'Data encrypted in transit (TLS) and at rest where applicable. Sensitive data handled according to risk.' },
    { title: 'Audit trails', body: 'Critical actions logged so we can trace who did what and when. Audit-ready for compliance and investigations.' },
    { title: 'Backups and recovery', body: 'Regular backups and tested recovery procedures so we can restore in case of failure or incident.' },
    { title: 'Vendor and environment', body: 'We choose hosting and tools with security in mind. Environments kept up to date and monitored.' },
  ];

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <Header />

      <main className="pt-24 pb-16">
        <section className="relative py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--cres-primary-bg)] via-[#0D1B2A] to-[#020611]" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-2xl md:text-4xl font-black text-white mb-4">Data &amp; Security</h1>
            <p className="text-white/80 text-lg">How we protect your data and systems.</p>
          </div>
        </section>

        <section className="relative py-16 bg-[var(--cres-primary-bg)]">
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <p className="text-white/80 mb-10">
              We build and operate systems that handle business-critical data. Security and data protection are built into our design and operations, not bolted on.
            </p>
            <ul className="space-y-6">
              {practices.map((item, i) => (
                <li key={i} className="bg-black/40 border border-white/10 rounded-xl p-6">
                  <h2 className="text-lg font-bold text-white mb-2">{item.title}</h2>
                  <p className="text-white/80 text-sm md:text-base">{item.body}</p>
                </li>
              ))}
            </ul>
            <p className="text-white/70 text-sm mt-8">
              For privacy-specific handling of personal data, see our <a href="/privacy" className="text-[var(--cres-orange-primary)] hover:underline">Privacy Policy</a>. For questions about security or compliance, <a href="/contact" className="text-[var(--cres-orange-primary)] hover:underline">contact us</a>.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
