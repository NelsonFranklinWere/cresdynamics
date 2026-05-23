import Link from 'next/link';

const cardClass =
  'group flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors hover:border-[var(--teal-accent)]/35 hover:bg-white/[0.07]';

type Action = {
  href: string;
  label: string;
  hint: string;
};

const DEFAULT_ACTIONS: Action[] = [
  { href: '/contact', label: 'Contact us', hint: 'Ask about your project' },
  { href: '/blog', label: 'More articles', hint: 'Browse the blog' },
];

export default function BlogActionCards({
  actions = DEFAULT_ACTIONS,
  className = '',
}: {
  actions?: Action[];
  className?: string;
}) {
  return (
    <div className={`grid gap-3 sm:grid-cols-2 ${className}`}>
      {actions.map((action) => (
        <Link key={action.href} href={action.href} className={cardClass}>
          <span className="text-sm font-semibold text-white group-hover:text-[var(--teal-accent)] transition-colors">
            {action.label}
          </span>
          <span className="mt-1 text-xs text-white/50">{action.hint}</span>
          <span className="mt-3 text-[11px] font-semibold text-[var(--teal-accent)]">→</span>
        </Link>
      ))}
    </div>
  );
}
