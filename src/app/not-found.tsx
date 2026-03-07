'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  }, [router]);

  return (
    <div className="min-h-screen bg-[var(--navy-dark)] flex items-center justify-center">
      <p className="text-white/60 text-sm">Redirecting…</p>
    </div>
  );
}
