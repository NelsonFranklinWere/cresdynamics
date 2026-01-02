'use client';

import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          const lcp = performance.getEntriesByType('largest-contentful-paint')[0] as any;
          const fid = performance.getEntriesByType('first-input')[0] as any;

          // Log performance metrics (only in development)
          if (process.env.NODE_ENV === 'development') {
            console.log('Performance Metrics:', {
              'DOM Content Loaded': perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
              'Load Complete': perfData.loadEventEnd - perfData.loadEventStart,
              'First Paint': performance.getEntriesByName('first-paint')[0]?.startTime,
              'First Contentful Paint': performance.getEntriesByName('first-contentful-paint')[0]?.startTime,
              'Largest Contentful Paint': lcp?.startTime,
              'First Input Delay': fid?.processingStart - fid?.startTime,
              'Cumulative Layout Shift': performance.getEntriesByType('layout-shift').reduce((sum, entry: any) => sum + entry.value, 0)
            });
          }

          // Send to analytics (implement as needed)
          // gtag('event', 'web_vitals', { ... });
        }, 0);
      });
    }
  }, []);

  return null; // This component doesn't render anything
}
