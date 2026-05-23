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
          : 'border-white/10 bg-white/5 text-white/85 hover:bg-white/10'
      }`}
    >
      <span>{label}</span>
      <span className="text-white/35">→</span>
    </Link>
  );
}

export default function ManagementNav() {
  return (
    <nav className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1 lg:gap-2">
      {LINKS.map((link) => (
        <NavLink key={link.href} href={link.href} label={link.label} />
      ))}
    </nav>
  );
}
