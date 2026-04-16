'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LogoutButton() {
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
      className="inline-flex items-center justify-center rounded-lg bg-[var(--orange-energy)] hover:bg-[var(--orange-energy-hover)] px-4 py-2 text-xs font-bold uppercase tracking-wide disabled:opacity-60"
    >
      {busy ? 'Logging out…' : 'Logout'}
    </button>
  );
}

