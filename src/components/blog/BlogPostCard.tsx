import Link from 'next/link';

const CATEGORY_STYLES: Record<string, string> = {
  erp: 'bg-[var(--teal-accent)]/15 text-[var(--teal-accent)] border-[var(--teal-accent)]/30',
  integration: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  operations: 'bg-[var(--orange-energy)]/15 text-[var(--orange-energy)] border-[var(--orange-energy)]/30',
  seo: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
  website: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
  default: 'bg-white/10 text-white/80 border-white/20',
};

function categoryStyle(category: string | null | undefined): string {
  if (!category) return CATEGORY_STYLES.default;
  const key = category.toLowerCase();
  if (key.includes('erp')) return CATEGORY_STYLES.erp;
  if (key.includes('m-pesa') || key.includes('mpesa') || key.includes('integrat')) {
    return CATEGORY_STYLES.integration;
  }
  if (key.includes('operat') || key.includes('whatsapp') || key.includes('excel')) {
    return CATEGORY_STYLES.operations;
  }
  if (key.includes('seo') || key.includes('website')) return CATEGORY_STYLES.seo;
  if (key.includes('scale')) return CATEGORY_STYLES.operations;
  return CATEGORY_STYLES.default;
}

export type BlogPostCardProps = {
  href: string;
  title: string;
  excerpt: string;
  category?: string | null;
  meta: string;
  featured?: boolean;
};

export default function BlogPostCard({
  href,
  title,
  excerpt,
  category,
  meta,
  featured = false,
}: BlogPostCardProps) {
  const badgeClass = categoryStyle(category);

  if (featured) {
    return (
      <Link
        href={href}
        className="group relative col-span-1 md:col-span-2 flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-black/40 p-8 md:p-10 transition-all duration-300 hover:border-[var(--teal-accent)]/50 hover:shadow-[0_20px_60px_-20px_rgba(47,166,179,0.35)]"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 100% 0%, rgba(47,166,179,0.12), transparent 55%)',
          }}
        />
        <div className="relative z-10 flex flex-1 flex-col">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--teal-accent)]">
              Featured
            </span>
            {category ? (
              <span
                className={`inline-flex rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${badgeClass}`}
              >
                {category}
              </span>
            ) : null}
          </div>
          <h2 className="text-2xl md:text-3xl font-black leading-tight text-white mb-4 group-hover:text-[var(--teal-accent)] transition-colors">
            {title}
          </h2>
          <p className="text-base text-white/75 leading-relaxed mb-6 max-w-3xl line-clamp-3">{excerpt}</p>
          <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-white/50">{meta}</p>
            <span className="inline-flex items-center gap-2 text-sm font-bold text-[var(--orange-energy)] group-hover:gap-3 transition-all">
              Read article
              <span aria-hidden>→</span>
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--teal-accent)]/40 hover:bg-white/[0.07] hover:shadow-[0_16px_40px_-16px_rgba(0,0,0,0.5)]"
    >
      <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-[var(--teal-accent)] to-[var(--orange-energy)] transition-all duration-300 group-hover:w-full" />
      <div className="flex flex-1 flex-col pt-1">
        {category ? (
          <span
            className={`mb-3 inline-flex w-fit rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${badgeClass}`}
          >
            {category}
          </span>
        ) : null}
        <h2 className="text-lg font-bold leading-snug text-white mb-3 line-clamp-2 group-hover:text-[var(--teal-accent)] transition-colors">
          {title}
        </h2>
        <p className="text-sm text-white/65 leading-relaxed mb-5 line-clamp-3 flex-1">{excerpt}</p>
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/10 pt-4">
          <p className="text-[11px] text-white/45">{meta}</p>
          <span className="shrink-0 text-xs font-bold text-[var(--teal-accent)] opacity-80 group-hover:opacity-100">
            Read →
          </span>
        </div>
      </div>
    </Link>
  );
}
