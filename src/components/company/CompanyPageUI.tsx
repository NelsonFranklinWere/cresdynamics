import ImageSection from '@/components/ImageSection';
import ScrollReveal, { ScrollRevealStagger } from '@/components/ScrollReveal';
import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import type { SectionOverlay } from '@/lib/section-backgrounds';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
});

export function CompanyEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--teal-accent)] mb-3">
      {children}
    </p>
  );
}

type HeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  imageSrc: string;
  imageAlt?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CompanyHero({
  eyebrow,
  title,
  subtitle,
  imageSrc,
  imageAlt = '',
  primaryHref = '/contact',
  primaryLabel = 'Start the conversation',
  secondaryHref,
  secondaryLabel,
}: HeroProps) {
  return (
    <ImageSection imageSrc={imageSrc} imageAlt={imageAlt} overlay="dark" className="pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <ScrollReveal variant="slideRight">
            <CompanyEyebrow>{eyebrow}</CompanyEyebrow>
            <h1
              className={`${playfair.className} text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] tracking-[-0.02em] text-white mb-5`}
            >
              {title}
            </h1>
            <p className="text-sm md:text-base text-white/75 leading-relaxed max-w-lg mb-8">{subtitle}</p>
            <div className="flex flex-wrap gap-3">
              <Link href={primaryHref} className="hero-btn-primary">
                {primaryLabel}
                <span className="hero-btn-arrow" aria-hidden>
                  →
                </span>
              </Link>
              {secondaryHref && secondaryLabel ? (
                secondaryHref.startsWith('http') || secondaryHref.startsWith('tel') ? (
                  <a
                    href={secondaryHref}
                    className="hero-btn-glass"
                    target={secondaryHref.startsWith('http') ? '_blank' : undefined}
                    rel={secondaryHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {secondaryLabel}
                  </a>
                ) : (
                  <Link href={secondaryHref} className="hero-btn-glass">
                    {secondaryLabel}
                  </Link>
                )
              ) : null}
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slideLeft" delay={0.08}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/15 shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                unoptimized
                priority
                sizes="(max-width: 768px) 100vw, 540px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060B18]/60 via-transparent to-transparent" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </ImageSection>
  );
}

type PhotoSectionProps = {
  imageSrc: string;
  imageAlt?: string;
  overlay?: SectionOverlay;
  className?: string;
  children: React.ReactNode;
  id?: string;
};

export function CompanyPhotoSection({
  imageSrc,
  imageAlt = '',
  overlay = 'medium',
  className = '',
  children,
  id,
}: PhotoSectionProps) {
  return (
    <ImageSection id={id} imageSrc={imageSrc} imageAlt={imageAlt} overlay={overlay} className={className}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-white">{children}</div>
    </ImageSection>
  );
}

export function CompanyDarkSection({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 md:py-24 bg-[#060B18] text-white ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function CompanyPanelSection({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 md:py-24 bg-[#0A1628] border-y border-white/10 text-white ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function CompanyCard({
  title,
  body,
  icon,
}: {
  title: string;
  body: string;
  icon?: string;
}) {
  return (
    <article className="h-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-black/40 p-6 transition-colors hover:border-[var(--teal-accent)]/35">
      {icon ? (
        <span className="text-2xl mb-3 block" aria-hidden>
          {icon}
        </span>
      ) : null}
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-white/65 leading-relaxed">{body}</p>
    </article>
  );
}

export function CompanyCTA({
  title,
  body,
  href = '/contact',
  label = 'Start the conversation',
  imageSrc = '/connecting-nairobi.jpg',
  imageAlt = 'Nairobi business connectivity',
  overlay = 'medium',
}: {
  title: string;
  body: string;
  href?: string;
  label?: string;
  imageSrc?: string;
  imageAlt?: string;
  overlay?: SectionOverlay;
}) {
  return (
    <ImageSection imageSrc={imageSrc} imageAlt={imageAlt} overlay={overlay}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-28 text-center text-white">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-5 leading-tight">{title}</h2>
          <p className="text-base md:text-lg text-white/85 mb-8 leading-relaxed">{body}</p>
          <Link href={href} className="hero-btn-primary inline-flex">
            {label}
            <span className="hero-btn-arrow" aria-hidden>
              →
            </span>
          </Link>
        </ScrollReveal>
      </div>
    </ImageSection>
  );
}

export { ScrollReveal, ScrollRevealStagger };
