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
    <div className="min-h-screen overflow-x-hidden bg-[var(--navy-dark)] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col lg:flex-row">
        <aside className="shrink-0 border-b border-white/10 bg-black/35 lg:w-[260px] lg:border-b-0 lg:border-r">
          <div className="p-4 sm:p-5 lg:sticky lg:top-0 lg:max-h-screen lg:overflow-y-auto lg:flex lg:flex-col">
            <div className="mb-4">
              <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-white/60">
                Management
              </p>
              <p className="mt-1 text-sm text-white/70 break-words">
                <span className="text-white/50">Signed in as </span>
                <span className="font-semibold text-white/90">{adminEmail}</span>
              </p>
            </div>

            <ManagementNav />

            <div className="mt-4 flex gap-2 border-t border-white/10 pt-4 lg:mt-auto">
              <Link
                href="/events/"
                className="inline-flex flex-1 items-center justify-center rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-bold uppercase tracking-wide hover:bg-white/10"
              >
                View site
              </Link>
              <LogoutButton />
            </div>
          </div>
        </aside>

        <main className="min-w-0 flex-1 overflow-x-hidden px-3 py-4 sm:px-5 sm:py-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}
