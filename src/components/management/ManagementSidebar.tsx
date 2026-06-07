'use client';

import Link from 'next/link';
import ManagementNav from '@/components/management/ManagementNav';
import LogoutButton from '@/app/management/LogoutButton';

export default function ManagementSidebar({
  adminEmail,
}: {
  adminEmail: string;
}) {
  return (
    <>
      {/* Mobile: top bar with horizontal nav */}
      <aside className="shrink-0 border-b border-white/10 bg-black/40 lg:hidden">
        <div className="flex flex-col gap-4 p-4">
          <div className="border-b border-white/10 pb-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
              Management
            </p>
            <p className="mt-2 text-xs leading-snug text-white/55">Signed in as</p>
            <p className="mt-0.5 truncate text-sm font-semibold text-white" title={adminEmail}>
              {adminEmail}
            </p>
          </div>
          <ManagementNav />
          <MobileFooter />
        </div>
      </aside>

      {/* Desktop: collapsed by default, expands on hover */}
      <aside className="group/sidebar relative hidden shrink-0 overflow-hidden border-r border-white/10 bg-black/40 transition-[width] duration-200 ease-out lg:block lg:w-14 lg:hover:w-[220px]">
        <div className="flex h-full min-h-screen w-[220px] flex-col gap-0 p-3 lg:p-4">
          <div className="mb-4 border-b border-white/10 pb-3 lg:mb-5 lg:pb-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 opacity-0 transition-opacity duration-200 group-hover/sidebar:opacity-100">
              Management
            </p>
            <p className="mt-2 hidden text-xs leading-snug text-white/55 group-hover/sidebar:block">
              Signed in as
            </p>
            <p
              className="mt-2 truncate text-sm font-semibold text-white lg:mt-0 lg:group-hover/sidebar:mt-0.5"
              title={adminEmail}
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-xs font-bold uppercase group-hover/sidebar:hidden">
                {adminEmail.charAt(0)}
              </span>
              <span className="hidden truncate group-hover/sidebar:inline">{adminEmail}</span>
            </p>
          </div>

          <ManagementNav collapsedDesktop />

          <div className="mt-auto space-y-2 border-t border-white/10 pt-4">
            <Link
              href="/events/"
              className="flex min-h-[40px] items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-2 py-2 text-[11px] font-bold uppercase tracking-wide hover:bg-white/10 group-hover/sidebar:px-3 lg:w-full"
            >
              <span className="text-base leading-none group-hover/sidebar:hidden">↗</span>
              <span className="hidden group-hover/sidebar:inline">View site</span>
            </Link>
            <div className="min-w-0 lg:w-full">
              <LogoutButton collapsedDesktop />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

function MobileFooter() {
  return (
    <div className="flex flex-wrap gap-2 border-t border-white/10 pt-3">
      <Link
        href="/events/"
        className="flex min-h-[40px] flex-1 items-center justify-center rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-[11px] font-bold uppercase tracking-wide hover:bg-white/10"
      >
        View site
      </Link>
      <div className="min-w-0 flex-1">
        <LogoutButton />
      </div>
    </div>
  );
}
