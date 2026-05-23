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
    <div className="flex min-h-screen overflow-x-hidden bg-[var(--navy-dark)] text-white">
      <aside className="flex w-[220px] shrink-0 flex-col border-r border-white/10 bg-black/40">
        <div className="flex flex-1 flex-col p-4">
          <div className="mb-5 border-b border-white/10 pb-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
              Management
            </p>
            <p className="mt-2 text-xs leading-snug text-white/55">
              Signed in as
            </p>
            <p className="mt-0.5 break-words text-sm font-semibold text-white">{adminEmail}</p>
          </div>

          <ManagementNav />

          <div className="mt-auto space-y-2 border-t border-white/10 pt-4">
            <Link
              href="/events/"
              className="flex w-full items-center justify-center rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-[11px] font-bold uppercase tracking-wide hover:bg-white/10"
            >
              View site
            </Link>
            <LogoutButton />
          </div>
        </div>
      </aside>

      <main className="min-w-0 flex-1 overflow-x-hidden px-4 py-5 sm:px-6 sm:py-6 lg:px-10">
        {children}
      </main>
    </div>
  );
}
