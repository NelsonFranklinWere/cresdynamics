'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';

const PerformanceMonitor = dynamic(() => import('@/components/PerformanceMonitor'), {
  ssr: false,
});

const AIChatWidget = dynamic(() => import('@/components/AIChatWidget'), {
  ssr: false,
  loading: () => null,
});

function isEventsRoute(pathname: string | null) {
  if (!pathname) return false;
  return pathname === '/events' || pathname.startsWith('/events/');
}

/** Load non-critical client widgets after first paint / idle (no AI chat on /events). */
export default function DeferredClientWidgets() {
  const pathname = usePathname();
  const [chatReady, setChatReady] = useState(false);
  const hideChat = isEventsRoute(pathname);

  useEffect(() => {
    if (hideChat) {
      setChatReady(false);
      return;
    }
    const enableChat = () => setChatReady(true);
    if (typeof requestIdleCallback === 'function') {
      const id = requestIdleCallback(enableChat, { timeout: 3000 });
      return () => cancelIdleCallback(id);
    }
    const t = setTimeout(enableChat, 2000);
    return () => clearTimeout(t);
  }, [hideChat]);

  return (
    <>
      <PerformanceMonitor />
      {!hideChat && chatReady ? <AIChatWidget /> : null}
    </>
  );
}
