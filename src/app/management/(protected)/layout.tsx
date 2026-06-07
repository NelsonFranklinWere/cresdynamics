import ManagementSidebar from '@/components/management/ManagementSidebar';
import { cookies, headers } from 'next/headers';
import { connection } from 'next/server';
import { ADMIN_COOKIE_NAME, verifyAdminSessionToken } from '@/lib/adminAuth';
import { ADMIN_VERIFIED_HEADER } from '@/lib/adminSessionEdge';

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
    <div className="flex h-screen flex-col overflow-hidden bg-[var(--navy-dark)] text-white lg:flex-row">
      <ManagementSidebar adminEmail={adminEmail} />

      <main className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden px-3 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-4">
        {children}
      </main>
    </div>
  );
}
