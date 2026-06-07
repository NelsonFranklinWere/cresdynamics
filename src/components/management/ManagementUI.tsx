import type { ReactNode } from 'react';

export function ManagementSection({
  title,
  subtitle,
  note,
  actions,
  children,
  fillScreen = false,
}: {
  title: string;
  subtitle?: string;
  note?: string;
  actions?: ReactNode;
  children: ReactNode;
  fillScreen?: boolean;
}) {
  return (
    <div
      className={`flex w-full min-w-0 max-w-full flex-col ${fillScreen ? 'min-h-0 flex-1 gap-3' : 'gap-8'}`}
    >
      <div className="shrink-0 space-y-1 bg-[var(--navy-dark)]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 space-y-1">
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
        className={`w-full min-w-0 overflow-hidden rounded-lg border border-white/15 bg-[#0d0f14] ${
          fillScreen ? 'flex min-h-0 flex-1 flex-col' : ''
        }`}
      >
        {note ? <ManagementInfoBar>{note}</ManagementInfoBar> : null}
        <div className={`w-full min-w-0 ${fillScreen ? 'flex min-h-0 flex-1 flex-col overflow-hidden' : ''}`}>
          {children}
        </div>
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

/** Full-width data table — one row per record across the content area */
export function AdminDataTable({
  caption,
  children,
  fillHeight = false,
}: {
  caption?: string;
  children: ReactNode;
  fillHeight?: boolean;
}) {
  return (
    <div
      className={`w-full ${fillHeight ? 'flex min-h-0 flex-1 flex-col overflow-hidden' : 'overflow-x-auto'}`}
    >
      {caption ? (
        <div className="shrink-0 border-b border-white/10 bg-white/[0.03] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white/45">
          {caption}
        </div>
      ) : null}
      <div className={fillHeight ? 'min-h-0 flex-1 overflow-auto' : 'overflow-x-auto'}>
        <table className="w-full min-w-full border-collapse text-sm">{children}</table>
      </div>
    </div>
  );
}

export function AdminDataHead({ children }: { children: ReactNode }) {
  return (
    <thead className="sticky top-0 z-10 border-b border-white/15 bg-[#12151c] text-[10px] font-bold uppercase tracking-wide text-white/50">
      {children}
    </thead>
  );
}

export function AdminDataTh({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <th className={`whitespace-nowrap px-3 py-3 text-left font-semibold first:pl-4 last:pr-4 sm:px-4 ${className}`}>
      {children}
    </th>
  );
}

export function AdminDataBody({ children }: { children: ReactNode }) {
  return <tbody className="divide-y divide-white/10">{children}</tbody>;
}

export function AdminDataRow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <tr className={`align-top transition-colors hover:bg-white/[0.04] ${className}`}>{children}</tr>
  );
}

export function AdminDataTd({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <td className={`px-3 py-3 text-sm leading-snug text-white/90 first:pl-4 last:pr-4 sm:px-4 ${className}`}>
      {children}
    </td>
  );
}

export function AdminRowActions({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap items-center gap-1.5">{children}</div>;
}

export const adminBtn =
  'inline-flex items-center rounded border px-2 py-1 text-[11px] font-semibold leading-tight transition-colors disabled:opacity-50';
export const adminBtnMuted = `${adminBtn} border-white/15 text-white/70 hover:bg-white/10`;
export const adminBtnPrimary = `${adminBtn} border-emerald-500/40 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20`;
export const adminBtnTeal = `${adminBtn} border-[#2FA6B3]/40 bg-[#2FA6B3]/10 text-[#2FA6B3] hover:bg-[#2FA6B3]/20`;
export const adminBtnDanger = `${adminBtn} border-white/15 text-white/50 hover:border-red-400/40 hover:text-red-300`;

export function AdminCardList({ children, label = 'Records' }: { children: ReactNode; label?: string }) {
  return (
    <AdminDataTable caption={label}>
      <AdminDataBody>{children}</AdminDataBody>
    </AdminDataTable>
  );
}

export function AdminCard({ children }: { children: ReactNode }) {
  return <AdminDataRow>{children}</AdminDataRow>;
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

export function AdminDashboardGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 sm:p-5 xl:grid-cols-3">{children}</div>
  );
}

export function AdminDashboardCard({
  title,
  href,
  children,
}: {
  title: string;
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="block rounded-xl border border-white/15 bg-black/25 p-4 transition-colors hover:border-[var(--teal-accent)]/40 hover:bg-black/35 sm:p-5"
    >
      <div className="mb-4 flex items-center justify-between gap-2">
        <h2 className="text-sm font-bold uppercase tracking-wide text-white">{title}</h2>
        <span className="text-xs text-[var(--teal-accent)]">View →</span>
      </div>
      {children}
    </a>
  );
}

export function AdminProgressRow({
  label,
  value,
  target,
  tone = 'default',
}: {
  label: string;
  value: number;
  target: number;
  tone?: 'default' | 'gold' | 'teal';
}) {
  const pct = target > 0 ? Math.min(100, Math.round((value / target) * 100)) : 0;
  const bar =
    tone === 'gold'
      ? 'bg-amber-500'
      : tone === 'teal'
        ? 'bg-[var(--teal-accent)]'
        : 'bg-white/40';

  return (
    <div className="space-y-1.5">
      <div className="flex items-baseline justify-between gap-2 text-xs">
        <span className="text-white/60">{label}</span>
        <span className="font-semibold text-white">
          {value.toLocaleString()}
          <span className="font-normal text-white/45"> / {target.toLocaleString()}</span>
          <span className="ml-1 text-white/40">({pct}%)</span>
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div className={`h-full rounded-full transition-all ${bar}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export function AdminMetricLine({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-white/5 py-2 text-sm last:border-0">
      <span className="text-white/55">{label}</span>
      <span className="text-right font-semibold text-white">{value}</span>
    </div>
  );
}
