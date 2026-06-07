'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';

const AIChatWidget = dynamic(() => import('@/components/AIChatWidget'), {
  ssr: false,
  loading: () => null,
});

function isEventsRoute(pathname: string | null) {
  if (!pathname) return false;
  return pathname === '/events' || pathname.startsWith('/events/');
}

function isManagementRoute(pathname: string | null) {
  if (!pathname) return false;
  return pathname.startsWith('/management');
}

/** Load non-critical client widgets after first paint / idle (no AI chat on /events or admin). */
export default function DeferredClientWidgets() {
  const pathname = usePathname();
  const [chatReady, setChatReady] = useState(false);
  const hideChat = isEventsRoute(pathname) || isManagementRoute(pathname);

  useEffect(() => {
    if (hideChat) {
      setChatReady(false);
      return;
    }
    const enableChat = () => setChatReady(true);
    if (typeof requestIdleCallback === 'function') {
      const id = requestIdleCallback(enableChat, { timeout: 5000 });
      return () => cancelIdleCallback(id);
    }
    const t = setTimeout(enableChat, 3000);
    return () => clearTimeout(t);
  }, [hideChat]);

  return !hideChat && chatReady ? <AIChatWidget /> : null;
}
