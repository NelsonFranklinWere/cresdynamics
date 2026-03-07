'use client';

import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;
    const onLoad = () => {
      setTimeout(() => {
        try {
          const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
          const lcp = performance.getEntriesByType('largest-contentful-paint')[0] as any;
          const fid = performance.getEntriesByType('first-input')[0] as any;
          if (process.env.NODE_ENV === 'development' && nav) {
            console.log('Performance Metrics:', {
              'DOM Content Loaded': nav.domContentLoadedEventEnd - nav.domContentLoadedEventStart,
              'Load Complete': nav.loadEventEnd - nav.loadEventStart,
              'First Paint': performance.getEntriesByName('first-paint')[0]?.startTime,
              'First Contentful Paint': performance.getEntriesByName('first-contentful-paint')[0]?.startTime,
              'LCP': lcp?.startTime,
              'FID': fid ? fid.processingStart - fid.startTime : null,
              'CLS': performance.getEntriesByType('layout-shift').reduce((sum: number, entry: any) => sum + entry.value, 0)
            });
          }
        } catch (_) { /* ignore */ }
      }, 0);
    };
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);

  return null; // This component doesn't render anything
}
