import Link from 'next/link';
import { cookies, headers } from 'next/headers';
import { connection } from 'next/server';
import { ADMIN_COOKIE_NAME, verifyAdminSessionToken } from '@/lib/adminAuth';
import { ADMIN_VERIFIED_HEADER } from '@/lib/adminSessionEdge';
import ManagementNav from '@/components/management/ManagementNav';
import LogoutButton from '@/app/management/LogoutButton';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export default async function ManagementProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await connection();
  const headerEmail = (await headers()).get(ADMIN_VERIFIED_HEADER);
  const cookieEmail = verifyAdminSessionToken(
    (await cookies()).get(ADMIN_COOKIE_NAME)?.value
  )?.email;
  const adminEmail = headerEmail ?? cookieEmail ?? 'Admin';

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-[var(--navy-dark)] text-white lg:flex-row">
      <aside className="shrink-0 border-b border-white/10 bg-black/40 lg:w-[220px] lg:border-b-0 lg:border-r">
        <div className="flex flex-col gap-4 p-4 lg:min-h-screen lg:gap-0">
          <div className="border-b border-white/10 pb-3 lg:mb-5 lg:pb-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
              Management
            </p>
            <p className="mt-2 text-xs leading-snug text-white/55">Signed in as</p>
            <p className="mt-0.5 truncate text-sm font-semibold text-white" title={adminEmail}>
              {adminEmail}
            </p>
          </div>

          <ManagementNav />

          <div className="flex flex-wrap gap-2 border-t border-white/10 pt-3 lg:mt-auto lg:flex-col lg:space-y-2 lg:pt-4">
            <Link
              href="/events/"
              className="flex min-h-[40px] flex-1 items-center justify-center rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-[11px] font-bold uppercase tracking-wide hover:bg-white/10 sm:flex-none lg:w-full"
            >
              View site
            </Link>
            <div className="min-w-0 flex-1 lg:w-full">
              <LogoutButton />
            </div>
          </div>
        </div>
      </aside>

      <main className="min-w-0 w-full max-w-none flex-1 px-3 py-4 sm:px-4 sm:py-5 lg:px-5 lg:py-6">
        {children}
      </main>
    </div>
  );
}
