import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LiveProjectsSection from '@/components/proof-of-work/LiveProjectsSection';

export default function ProofOfWorkPage() {
  const caseStudies = [
    {
      id: 'thestems-flowers',
      industry: 'Florist · E-commerce (Nairobi CBD)',
      problem: 'Strong in-store trade but invisible online — no reorder path or M-Pesa checkout',
      solution: 'Node.js e-commerce, M-Pesa, SEO, same-day delivery UX — live in 4 weeks',
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
      liveUrl: 'https://mohaafinestcurtains.co.ke',
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
    <div className="min-h-screen bg-white text-[var(--navy-primary)]">
      <Header />

      <main className="pt-24">
        {/* HERO */}
        <section className="relative py-14 md:py-20 overflow-hidden bg-white">
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <h1 className="text-2xl md:text-4xl font-black mb-5 text-[var(--navy-primary)]">
              Proof of <span className="text-[var(--cres-orange-primary)]">Work</span>
            </h1>
            <p className="text-[var(--navy-primary)]/80 text-sm md:text-base leading-relaxed">
              Every case study needs four things a buyer can&apos;t argue with — the exact before state (in numbers or
              specifics), what was built (named, not described), the exact after state (in numbers or specifics), and one
              honest sentence about what made it hard.
            </p>
            <p className="mt-4 text-[var(--cres-electric-teal)] text-xs md:text-sm font-semibold tracking-tight">
              No adjectives. No hype. Just what happened.
            </p>
          </div>
        </section>

        <LiveProjectsSection />

        {/* CASE STUDIES GRID */}
        <section className="relative py-12 bg-white">
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <div className="mb-6 rounded-lg border border-white/10 bg-black p-4 md:p-6 text-white">
              <h2 className="text-lg md:text-2xl font-black mb-2 text-white">
                Case Studies on This Page
              </h2>
              <p className="text-xs md:text-sm text-white/75">
                Featured here are only the newly added case studies with live production links. The full archive remains on the case studies page.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="rounded-lg border border-white/10 bg-black p-4 text-white shadow-sm transition-shadow hover:shadow-md hover:border-white/20"
                >
                  <div className="mb-2">
                    <span className="inline-block rounded-full bg-[var(--cres-electric-teal)]/20 px-2 py-0.5 text-[10px] font-semibold text-[var(--cres-electric-teal)]">
                      {study.industry}
                    </span>
                  </div>

                  <div className="mb-2">
                    <h3 className="text-[11px] font-bold text-[var(--cres-orange-primary)] mb-0.5">Problem</h3>
                    <p className="text-[11px] md:text-xs text-white/80">{study.problem}</p>
                  </div>

                  <div className="mb-2">
                    <h3 className="text-[11px] font-bold text-[var(--cres-orange-primary)] mb-0.5">Solution</h3>
                    <p className="text-[11px] md:text-xs text-white/80">{study.solution}</p>
                  </div>

                  <div className="mb-3">
                    <h3 className="text-[11px] font-bold text-[var(--cres-orange-primary)] mb-0.5">Outcome</h3>
                    <p className="text-[11px] md:text-xs text-white/80">{study.outcome}</p>
                  </div>
                  <div className="mb-3 text-[10px] font-semibold tracking-wide text-[var(--cres-electric-teal)]">
                    Live: {study.liveUrl.replace('https://', '')}
                  </div>

                  <a
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-md bg-white px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wide text-black hover:bg-white/90 transition-colors"
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

