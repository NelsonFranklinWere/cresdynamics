'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LogoutButton({ collapsedDesktop = false }: { collapsedDesktop?: boolean }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  return (
    <button
      type="button"
      disabled={busy}
      onClick={async () => {
        setBusy(true);
        try {
          await fetch('/api/admin/logout/', { method: 'POST' });
          router.push('/management/login');
          router.refresh();
        } finally {
          setBusy(false);
        }
      }}
      className={`inline-flex w-full items-center justify-center rounded-lg bg-[var(--orange-energy)] py-2 text-xs font-bold uppercase tracking-wide hover:bg-[var(--orange-energy-hover)] disabled:opacity-60 ${
        collapsedDesktop ? 'px-2 lg:group-hover/sidebar:px-4' : 'px-4'
      }`}
    >
      {busy ? '…' : collapsedDesktop ? (
        <>
          <span className="lg:group-hover/sidebar:hidden" aria-hidden>
            ⎋
          </span>
          <span className="hidden lg:group-hover/sidebar:inline">{busy ? 'Logging out…' : 'Logout'}</span>
        </>
      ) : (
        busy ? 'Logging out…' : 'Logout'
      )}
    </button>
  );
}

