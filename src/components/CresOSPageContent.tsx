import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageSection from '@/components/ImageSection';
import ScrollReveal, { ScrollRevealStagger } from '@/components/ScrollReveal';
import { CRESOS_PAGE } from '@/lib/cresos-page-content';
import { whatsappUrl, WHATSAPP_PREFILL } from '@/lib/contact';
import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
});

function ProductMockup({
  image,
  alt,
  url = 'app.cresdynamics.com/cresos',
}: {
  image: string;
  alt: string;
  url?: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#0a0f18] shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden />
        <span className="ml-2 flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-[10px] font-mono text-white/40">
          {url}
        </span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-[#0d1117]">
        <Image
          src={image}
          alt={alt}
          fill
          unoptimized
          priority
          sizes="(max-width: 768px) 100vw, 560px"
          className="object-cover object-left-top"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#0a0f18]/40 via-transparent to-[#2FA6B3]/10"
          aria-hidden
        />
      </div>
    </div>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--teal-accent)] mb-3">
      {children}
    </p>
  );
}

export default function CresOSPageContent() {
  const page = CRESOS_PAGE;

  return (
    <div className="min-h-screen bg-[#060B18] text-white">
      <Header />

      {/* Hero */}
      <ImageSection
        imageSrc={page.hero.background}
        imageAlt="Analytics workspace — business systems environment"
        overlay="dark"
        className="pt-24"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <ScrollReveal variant="slideRight">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--teal-accent)] mb-4">
                {page.hero.eyebrow}
              </p>
              <h1
                className={`${playfair.className} text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.12] tracking-[-0.02em] mb-5`}
              >
                <span className="block">{page.hero.titleLine1}</span>
                <span className="block text-[var(--teal-accent)] mt-1">{page.hero.titleLine2}</span>
              </h1>
              <p className="text-sm md:text-base text-white/75 leading-relaxed max-w-lg mb-8">
                {page.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="hero-btn-primary">
                  Book a discovery call
                  <span className="hero-btn-arrow" aria-hidden>
                    →
                  </span>
                </Link>
                <a
                  href={whatsappUrl(WHATSAPP_PREFILL.cresosDiscovery)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-btn-glass"
                >
                  WhatsApp us
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slideLeft" delay={0.1}>
              <ProductMockup image={page.hero.image} alt={page.hero.imageAlt} />
            </ScrollReveal>
          </div>
        </div>
      </ImageSection>

      {/* Stats strip */}
      <section className="border-y border-white/10 bg-[#0A1628]/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {page.stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left md:px-4 md:border-r md:border-white/10 last:border-r-0">
                <p className="text-2xl md:text-3xl font-black text-[var(--teal-accent)]">{stat.value}</p>
                <p className="text-[10px] md:text-xs uppercase tracking-widest text-white/45 font-mono mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <ImageSection
        imageSrc="/sections/team-collaboration-board.jpg"
        imageAlt="Team collaboration — fragmented tools problem"
        overlay="medium"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <ScrollReveal>
            <SectionEyebrow>The problem</SectionEyebrow>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight mb-10 max-w-3xl">
              {page.problem.headline}
            </h2>
          </ScrollReveal>
          <ScrollRevealStagger className="space-y-3" staggerDelay={0.06}>
            {page.problem.costs.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/40 px-5 py-4 backdrop-blur-sm"
              >
                <span className="text-[var(--cres-orange-primary)] font-bold shrink-0 mt-0.5" aria-hidden>
                  →
                </span>
                <p className="text-sm md:text-base text-white/90 leading-relaxed">{item}</p>
              </div>
            ))}
          </ScrollRevealStagger>
        </div>
      </ImageSection>

      {/* Modules */}
      <section className="py-16 md:py-24 bg-[#060B18]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal className="max-w-2xl mb-12 md:mb-16">
            <SectionEyebrow>{page.modules.eyebrow}</SectionEyebrow>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight mb-4">
              {page.modules.headline}
            </h2>
            <p className="text-sm md:text-base text-white/65 leading-relaxed">{page.modules.subhead}</p>
          </ScrollReveal>

          <ScrollRevealStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6" staggerDelay={0.07}>
            {page.modules.items.map((mod) => (
              <article
                key={mod.title}
                className="group flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-black/40 p-6 transition-colors hover:border-[var(--teal-accent)]/35"
              >
                <span className="text-2xl mb-3" aria-hidden>
                  {mod.icon}
                </span>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--teal-accent)] transition-colors">
                  {mod.title}
                </h3>
                <p className="text-sm text-white/65 leading-relaxed flex-1 mb-4">{mod.body}</p>
                <div className="flex flex-wrap gap-1.5">
                  {mod.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </ScrollRevealStagger>
        </div>
      </section>

      {/* Cres Core Engine */}
      <section className="py-16 md:py-24 bg-[#0A1628] border-y border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal variant="slideRight">
              <SectionEyebrow>{page.engine.eyebrow}</SectionEyebrow>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight mb-5">
                {page.engine.headline}
              </h2>
              <p className="text-sm md:text-base text-white/70 leading-relaxed mb-8">{page.engine.body}</p>
              <ul className="space-y-3">
                {page.engine.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm md:text-base text-white/85">
                    <span className="text-[var(--teal-accent)] font-bold shrink-0" aria-hidden>
                      ✓
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal variant="slideLeft" delay={0.08}>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
                <Image
                  src={page.engine.image}
                  alt="Connected data and business intelligence"
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 540px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060B18] via-[#060B18]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs font-mono uppercase tracking-widest text-[var(--teal-accent)] mb-1">
                    Proprietary foundation
                  </p>
                  <p className="text-lg font-bold text-white">Cres Core Engine</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <ImageSection
        imageSrc="/sections/tech-team-planning.jpg"
        imageAlt="Team planning with unified business systems"
        overlay="medium"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <ScrollReveal className="max-w-2xl mb-10 md:mb-12">
            <SectionEyebrow>{page.outcomes.eyebrow}</SectionEyebrow>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight">
              {page.outcomes.headline}
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-4">
            {page.outcomes.items.map((item, i) => (
              <ScrollReveal key={item} delay={i * 0.05}>
                <div className="h-full rounded-xl border border-white/10 bg-black/45 px-5 py-5 backdrop-blur-sm">
                  <p className="text-sm md:text-base text-white/90 leading-relaxed">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ImageSection>

      {/* Audiences + pricing */}
      <section className="py-16 md:py-24 bg-[#060B18]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
            <div className="lg:col-span-3">
              <ScrollReveal className="mb-8">
                <SectionEyebrow>{page.audiences.eyebrow}</SectionEyebrow>
                <h2 className="text-2xl md:text-3xl font-black leading-tight">{page.audiences.headline}</h2>
              </ScrollReveal>
              <ScrollRevealStagger className="grid sm:grid-cols-2 gap-4" staggerDelay={0.06}>
                {page.audiences.items.map((aud) => (
                  <div
                    key={aud.label}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
                  >
                    <p className="font-bold text-white mb-1.5">{aud.label}</p>
                    <p className="text-sm text-white/60 leading-relaxed">{aud.desc}</p>
                  </div>
                ))}
              </ScrollRevealStagger>
            </div>

            <ScrollReveal variant="scaleIn" className="lg:col-span-2">
              <div className="h-full rounded-2xl border-2 border-[var(--cres-orange-primary)]/50 bg-gradient-to-b from-[var(--cres-orange-primary)]/10 to-black/50 p-6 md:p-8 flex flex-col">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--cres-orange-primary)] mb-2">
                  Growth tier
                </p>
                <h3 className="text-xl md:text-2xl font-black text-white mb-1">{page.pricing.tier}</h3>
                <p className="text-3xl font-black text-[var(--cres-orange-primary)] mb-1">{page.pricing.from}</p>
                <p className="text-xs text-white/45 mb-6">{page.pricing.note}</p>
                <ul className="space-y-2 text-sm text-white/80 mb-8 flex-1">
                  {page.pricing.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[var(--teal-accent)] shrink-0" aria-hidden>
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/pricing"
                  className="block w-full text-center rounded-xl bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-[#060B18] font-bold text-sm py-3 transition-colors mb-3"
                >
                  View full pricing
                </Link>
                <a
                  href={whatsappUrl(WHATSAPP_PREFILL.pricingPackage('CresOS Business'))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center rounded-xl border border-white/20 text-white/85 hover:border-[var(--teal-accent)] hover:text-[var(--teal-accent)] font-semibold text-sm py-3 transition-colors"
                >
                  Book discovery on WhatsApp
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ImageSection
        imageSrc="/connecting-nairobi.jpg"
        imageAlt="Nairobi business connectivity"
        overlay="dark"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-28 text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-5 leading-tight">
              Ready to run your business on one system?
            </h2>
            <p className="text-base md:text-lg text-white/85 mb-8 leading-relaxed">
              Tell us how your business operates today. We will map where CresOS fits — honestly, with no generic
              proposal.
            </p>
            <Link href="/contact" className="hero-btn-primary inline-flex">
              Start the conversation
              <span className="hero-btn-arrow" aria-hidden>
                →
              </span>
            </Link>
            <p className="text-white/55 text-sm mt-6">
              Or explore{' '}
              <Link href="/erp" className="text-[var(--teal-accent)] hover:underline">
                custom ERP
              </Link>{' '}
              and{' '}
              <Link href="/finance-platforms" className="text-[var(--teal-accent)] hover:underline">
                finance platforms
              </Link>{' '}
              if you need a narrower scope first.
            </p>
          </ScrollReveal>
        </div>
      </ImageSection>

      <Footer />
    </div>
  );
}
