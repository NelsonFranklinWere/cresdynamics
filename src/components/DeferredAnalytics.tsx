'use client';

import { useEffect } from 'react';

const GA_ID = 'G-P2WR5M5FGH';

/** Load Google Analytics after idle so first paint is not blocked. */
export default function DeferredAnalytics() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const load = () => {
      if (document.querySelector(`script[data-ga-id="${GA_ID}"]`)) return;

      window.dataLayer = window.dataLayer || [];
      const gtag = (...args: unknown[]) => {
        window.dataLayer.push(args);
      };
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', GA_ID, { send_page_view: true });

      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      script.async = true;
      script.dataset.gaId = GA_ID;
      document.head.appendChild(script);
    };

    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(load, { timeout: 5000 });
      return () => cancelIdleCallback(id);
    }
    const t = setTimeout(load, 2500);
    return () => clearTimeout(t);
  }, []);

  return null;
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}
