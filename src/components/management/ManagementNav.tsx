'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/management/events', label: 'Events' },
  { href: '/management/payments', label: 'Payments' },
  { href: '/management/messages', label: 'Messages' },
  { href: '/management/applications', label: 'Applications' },
  { href: '/management/speakers', label: 'Speakers' },
  { href: '/management/sponsors', label: 'Sponsors' },
  { href: '/management/blog', label: 'Blog' },
] as const;

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={`flex items-center justify-between rounded-lg border px-3 py-2.5 text-sm font-semibold transition-colors ${
        active
          ? 'border-[var(--teal-accent)]/50 bg-[var(--teal-accent)]/10 text-white'
          : 'border-transparent bg-transparent text-white/80 hover:border-white/10 hover:bg-white/5'
      }`}
    >
      <span>{label}</span>
      <span className="text-white/35">→</span>
    </Link>
  );
}

export default function ManagementNav() {
  return (
    <nav className="flex w-full flex-col gap-1">
      {LINKS.map((link) => (
        <NavLink key={link.href} href={link.href} label={link.label} />
      ))}
    </nav>
  );
}
