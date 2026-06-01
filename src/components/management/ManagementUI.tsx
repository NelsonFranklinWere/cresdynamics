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
    <div className="flex w-full min-w-0 max-w-full flex-col gap-8">
      <div className="shrink-0 space-y-4 bg-[var(--navy-dark)]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 space-y-2">
            <h1 className="text-xl font-black leading-snug text-white md:text-2xl">{title}</h1>
            {subtitle ? (
              <p className="block text-sm font-medium leading-relaxed text-[var(--teal-accent)]">
                {subtitle}
              </p>
            ) : null}
          </div>
          {actions ? <div className="w-full shrink-0 sm:w-auto">{actions}</div> : null}
        </div>
      </div>

      <section
        aria-label={`${title} records`}
        className="min-w-0 rounded-xl border border-white/15 bg-black/30 shadow-sm"
      >
        {note ? <ManagementInfoBar>{note}</ManagementInfoBar> : null}
        <div className="min-w-0">{children}</div>
      </section>
    </div>
  );
}

export function ManagementInfoBar({ children }: { children: ReactNode }) {
  return (
    <div className="border-b border-white/10 bg-white/[0.04] px-4 py-3 text-xs leading-relaxed text-white/75 sm:px-5">
      {children}
    </div>
  );
}

export function AdminStatsGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-3 border-b border-white/10 p-4 sm:grid-cols-2 sm:p-5 lg:grid-cols-4">
      {children}
    </div>
  );
}

export function AdminStatCard({
  label,
  value,
  suffix,
  tone = 'default',
}: {
  label: string;
  value: ReactNode;
  suffix?: ReactNode;
  tone?: 'default' | 'gold' | 'teal';
}) {
  const tones = {
    default: 'border-white/15 bg-white/[0.06] text-white',
    gold: 'border-amber-500/40 bg-amber-500/15 text-amber-100',
    teal: 'border-[var(--teal-accent)]/40 bg-[var(--teal-accent)]/10 text-teal-100',
  };
  const labelTones = {
    default: 'text-white/60',
    gold: 'text-amber-200/90',
    teal: 'text-teal-200/90',
  };

  return (
    <div className={`rounded-xl border px-4 py-3 ${tones[tone]}`}>
      <p className={`text-[10px] font-bold uppercase tracking-wide ${labelTones[tone]}`}>{label}</p>
      <p className="mt-1 text-2xl font-black leading-none">
        {value}
        {suffix ? (
          <span className="ml-1 text-sm font-semibold text-white/50">{suffix}</span>
        ) : null}
      </p>
    </div>
  );
}

export function AdminCardList({ children, label = 'Records' }: { children: ReactNode; label?: string }) {
  return (
    <div className="p-4 sm:p-5">
      <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.15em] text-white/45">{label}</p>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

export function AdminCard({ children }: { children: ReactNode }) {
  return (
    <article className="rounded-xl border border-white/15 bg-[#0f1118] p-4 sm:p-5">{children}</article>
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
    <div className="space-y-3 border-b border-white/10 pb-4">
      <div className="min-w-0">
        <div className="break-words text-lg font-semibold leading-snug text-white">{title}</div>
        {meta ? (
          <div className="mt-2 break-words text-xs leading-relaxed text-white/55">{meta}</div>
        ) : null}
      </div>
      {badge ? <div className="min-w-0 pt-0.5">{badge}</div> : null}
    </div>
  );
}

export function AdminFields({ children }: { children: ReactNode }) {
  return <dl className="mt-1 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">{children}</dl>;
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
      <dt className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-white/50">{label}</dt>
      <dd className="break-words text-sm leading-relaxed text-white">{children}</dd>
    </div>
  );
}

export function AdminEmpty({ children }: { children: ReactNode }) {
  return <p className="p-8 text-center text-sm text-white/65">{children}</p>;
}
