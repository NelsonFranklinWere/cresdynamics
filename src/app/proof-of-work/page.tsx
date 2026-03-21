import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProofOfWorkPage() {
  const caseStudies = [
    {
      id: 'thestems-flowers',
      industry: 'Florist · E-commerce (Nairobi CBD)',
      problem: 'Strong in-store trade but invisible online — no reorder path or M-Pesa checkout',
      solution: 'Next.js e-commerce, M-Pesa, SEO, same-day delivery UX — live in 4 weeks',
      outcome: 'Full catalogue live; organic & order metrics tracked from Month 2',
      slug: 'the-stems-flowers',
      liveUrl: 'https://thestemsflowers.co.ke',
    },
    {
      id: 'floral-whispers-gifts',
      industry: 'Florist · E-commerce (referral engine)',
      problem: 'Premium bouquets & hampers with almost no digital discoverability',
      solution: 'Premium e-commerce, WhatsApp + M-Pesa, SEO — full catalogue indexed',
      outcome: '100+ monthly organic visitors; referral win → The Stems Flowers project',
      slug: 'floral-whispers-gifts',
      liveUrl: 'https://floralwhispersgifts.co.ke',
    },
    {
      id: 'whitelight-store',
      industry: 'Fitness Retail · E-commerce + SEO',
      problem: 'Strong product range but no digital storefront or search visibility',
      solution: 'New e-commerce build, category architecture, and Nairobi-focused SEO',
      outcome: 'Live indexed store; month-2 tracking for traffic, orders, and top categories',
      slug: 'whitelight-store',
      liveUrl: 'https://whitelightstore.co.ke',
    },
    {
      id: 'mohaa-finest',
      industry: 'Home Decor · Website + SEO',
      problem: 'Trusted in Eastleigh but invisible to online curtain searches',
      solution: 'New website, product sections, and Nairobi/Eastleigh local SEO targeting',
      outcome: 'Live indexed site; month-2 tracking for WhatsApp inquiries and conversions',
      slug: 'mohaa-finest',
      liveUrl: 'https://mohaafinest.co.ke',
    },
    {
      id: 'spark-lights-254',
      industry: 'Lighting Retail · Website + SEO',
      problem: 'Large lighting showroom but no Google visibility for Nairobi buyers',
      solution: 'SEO-first site with 7 product categories, local search targeting, and WhatsApp flow',
      outcome: '11.7k impressions, 281 clicks, and 2.4% CTR from organic search',
      slug: 'spark-lights-254',
      liveUrl: 'https://sparklights.co.ke',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <Header />

      <main className="pt-24">
        {/* HERO */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--cres-primary-bg)] via-[#101927] to-[#020611]" />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-3xl md:text-5xl font-black mb-6">
              Proof of <span className="text-[var(--cres-orange-primary)]">Work</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              Systems we&apos;ve shipped, the engines behind them, and the business outcomes they created.
            </p>
            <p className="text-[var(--cres-electric-teal)] text-sm md:text-base font-semibold">
              This is the bridge between CresOS, custom ERPs, and the numbers they move.
            </p>
          </div>
        </section>

        {/* CASE STUDIES GRID */}
        <section className="relative py-16 bg-[var(--cres-primary-bg)]">
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <div className="mb-8 rounded-xl border border-white/10 bg-black/40 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-black mb-3">Case Studies on This Page</h2>
              <p className="text-white/80">
                Featured here are only the newly added case studies with live production links. The full archive remains on the case studies page.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {caseStudies.map((study) => (
                <div key={study.id} className="rounded-xl border border-white/10 bg-black/40 p-5">
                  <div className="mb-3">
                    <span className="inline-block rounded-full bg-[var(--cres-electric-teal)] px-3 py-1 text-xs font-semibold text-white">
                      {study.industry}
                    </span>
                  </div>

                  <div className="mb-3">
                    <h3 className="text-sm font-bold text-[var(--cres-orange-primary)] mb-1">Problem</h3>
                    <p className="text-sm text-white/90">{study.problem}</p>
                  </div>

                  <div className="mb-3">
                    <h3 className="text-sm font-bold text-[var(--cres-orange-primary)] mb-1">Solution</h3>
                    <p className="text-sm text-white/90">{study.solution}</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-sm font-bold text-[var(--cres-orange-primary)] mb-1">Outcome</h3>
                    <p className="text-sm text-white/90">{study.outcome}</p>
                  </div>
                  <div className="mb-4 text-xs font-semibold tracking-wide text-[var(--cres-electric-teal)]">
                    Live: {study.liveUrl.replace('https://', '')}
                  </div>

                  <a
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-[var(--cres-orange-primary)] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white hover:bg-[var(--cres-orange-hover)] transition-colors"
                  >
                    View Case Study
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

