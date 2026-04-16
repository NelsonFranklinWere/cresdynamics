import Link from 'next/link';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { ADMIN_COOKIE_NAME, verifyAdminSessionToken } from '@/lib/adminAuth';
import LogoutButton from '@/app/management/LogoutButton';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function NavItem({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
    >
      <span>{label}</span>
      <span className="text-white/40">→</span>
    </Link>
  );
}

export default async function ManagementProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = (await cookies()).get(ADMIN_COOKIE_NAME)?.value;
  const session = verifyAdminSessionToken(token);
  if (!session) {
    redirect('/management/login');
  }

  return (
    <div className="min-h-screen bg-[var(--navy-dark)] text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
          <aside className="rounded-2xl border border-white/10 bg-black/30 p-4 h-fit lg:sticky lg:top-6">
            <div className="mb-4">
              <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-white/60">
                Management
              </p>
              <p className="text-sm text-white/70 mt-1">
                Signed in as <span className="text-white/90 font-semibold">{session.email}</span>
              </p>
            </div>

            <div className="space-y-2">
              <NavItem href="/management/events" label="Events" />
              <NavItem href="/management/payments" label="Payments" />
              <NavItem href="/management/messages" label="Messages" />
              <NavItem href="/management/applications" label="Applications" />
            </div>

            <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-3">
              <Link
                href="/events/"
                className="inline-flex flex-1 items-center justify-center rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-bold uppercase tracking-wide hover:bg-white/10"
              >
                View Site
              </Link>
              <LogoutButton />
            </div>
          </aside>

          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}

