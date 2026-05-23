import type { ReactNode } from 'react';

export function ManagementSection({
  title,
  subtitle,
  note,
  actions,
  children,
}: {
  title: string;
  subtitle?: string;
  note?: string;
  actions?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="w-full min-w-0 max-w-full">
      <header className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1">
          <h1 className="text-xl font-black text-white md:text-2xl">{title}</h1>
          {subtitle ? (
            <>
              <span className="hidden text-white/25 sm:inline" aria-hidden>
                |
              </span>
              <p className="text-sm text-white/60">{subtitle}</p>
            </>
          ) : null}
        </div>
        {actions ? <div className="shrink-0">{actions}</div> : null}
      </header>

      {note ? <p className="mb-3 text-xs font-mono text-white/45">{note}</p> : null}

      <div className="min-w-0 max-w-full overflow-hidden rounded-xl border border-white/10 bg-black/25">
        {children}
      </div>
    </div>
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
        <div className="break-words font-semibold text-white">{title}</div>
        {meta ? <div className="mt-1 break-words text-xs text-white/50">{meta}</div> : null}
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
      <dd className="mt-0.5 break-words text-sm text-white/90">{children}</dd>
    </div>
  );
}

export function AdminEmpty({ children }: { children: ReactNode }) {
  return <p className="p-8 text-center text-sm text-white/60">{children}</p>;
}
