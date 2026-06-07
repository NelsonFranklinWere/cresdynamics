'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { LucideIcon } from 'lucide-react';
import {
  Calendar,
  CreditCard,
  FileText,
  Handshake,
  LayoutDashboard,
  MessageSquare,
  Mic,
  Newspaper,
} from 'lucide-react';

const LINKS: { href: string; label: string; icon: LucideIcon }[] = [
  { href: '/management/dashboard', label: 'Overview', icon: LayoutDashboard },
  { href: '/management/events', label: 'Events', icon: Calendar },
  { href: '/management/payments', label: 'Payments', icon: CreditCard },
  { href: '/management/messages', label: 'Messages', icon: MessageSquare },
  { href: '/management/applications', label: 'Applications', icon: FileText },
  { href: '/management/speakers', label: 'Speakers', icon: Mic },
  { href: '/management/sponsors', label: 'Sponsors', icon: Handshake },
  { href: '/management/blog', label: 'Blog', icon: Newspaper },
];

function NavLink({
  href,
  label,
  icon: Icon,
  collapsedDesktop = false,
}: {
  href: string;
  label: string;
  icon: LucideIcon;
  collapsedDesktop?: boolean;
}) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(`${href}/`);

  const base =
    'flex shrink-0 items-center gap-2 rounded-lg border px-3 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors';
  const activeCls = active
    ? 'border-[var(--teal-accent)]/50 bg-[var(--teal-accent)]/10 text-white'
    : 'border-transparent bg-transparent text-white/80 hover:border-white/10 hover:bg-white/5';

  if (collapsedDesktop) {
    return (
      <Link
        href={href}
        title={label}
        className={`${base} justify-center px-2 lg:w-full lg:justify-start lg:group-hover/sidebar:px-3 ${activeCls}`}
      >
        <Icon className="h-5 w-5 shrink-0" aria-hidden />
        <span className="hidden lg:group-hover/sidebar:inline">{label}</span>
        <span className="ml-auto hidden text-white/35 lg:group-hover/sidebar:inline">→</span>
      </Link>
    );
  }

  return (
    <Link href={href} className={`${base} lg:w-full ${activeCls}`}>
      <Icon className="h-5 w-5 shrink-0 lg:hidden" aria-hidden />
      <span>{label}</span>
      <span className="ml-auto hidden text-white/35 lg:inline">→</span>
    </Link>
  );
}

export default function ManagementNav({ collapsedDesktop = false }: { collapsedDesktop?: boolean }) {
  return (
    <nav
      className={`flex gap-1.5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] lg:flex-col lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden ${collapsedDesktop ? 'lg:items-stretch' : ''}`}
    >
      {LINKS.map((link) => (
        <NavLink key={link.href} {...link} collapsedDesktop={collapsedDesktop} />
      ))}
    </nav>
  );
}
