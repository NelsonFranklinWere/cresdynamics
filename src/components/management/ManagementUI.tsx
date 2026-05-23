import type { ReactNode } from 'react';

export function ManagementSection({
  title,
  subtitle,
  actions,
  children,
}: {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="w-full min-w-0 max-w-full overflow-hidden rounded-xl border border-white/10 bg-black/25">
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-white/10 px-4 py-4 sm:px-5 md:px-6">
        <div className="min-w-0">
          <h1 className="text-lg font-black sm:text-xl md:text-2xl">{title}</h1>
          {subtitle ? <p className="mt-1 text-sm text-white/70">{subtitle}</p> : null}
        </div>
        {actions ? <div className="shrink-0">{actions}</div> : null}
      </div>
      <div className="min-w-0 max-w-full">{children}</div>
    </section>
  );
}

export function AdminCardList({ children }: { children: ReactNode }) {
  return <div className="space-y-3 p-4 sm:p-5">{children}</div>;
}

export function AdminCard({ children }: { children: ReactNode }) {
  return (
    <article className="rounded-xl border border-white/10 bg-black/20 p-4 sm:p-5">{children}</article>
  );
}

export function AdminCardHeader({
  title,
  badge,
  meta,
}: {
  title: ReactNode;
  badge?: ReactNode;
  meta?: ReactNode;
}) {
  return (
    <div className="mb-3 flex flex-wrap items-start justify-between gap-2 border-b border-white/10 pb-3">
      <div className="min-w-0 flex-1">
        <div className="font-semibold text-white break-words">{title}</div>
        {meta ? <div className="mt-1 text-xs text-white/50 break-words">{meta}</div> : null}
      </div>
      {badge ? <div className="shrink-0">{badge}</div> : null}
    </div>
  );
}

export function AdminFields({ children }: { children: ReactNode }) {
  return <dl className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2">{children}</dl>;
}

export function AdminField({
  label,
  children,
  className = '',
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <dt className="text-[10px] font-semibold uppercase tracking-wide text-white/45">{label}</dt>
      <dd className="mt-0.5 text-sm text-white/90 break-words">{children}</dd>
    </div>
  );
}

export function AdminEmpty({ children }: { children: ReactNode }) {
  return <p className="p-8 text-center text-sm text-white/60">{children}</p>;
}
