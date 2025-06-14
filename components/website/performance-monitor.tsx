'use client';

import { useEffect } from 'react';

export const PerformanceMonitor = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals in development only
      if (process.env.NODE_ENV === 'development') {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
              console.log('LCP:', entry.startTime);
            }

            if (
              entry.entryType === 'first-input' &&
              'processingStart' in entry
            ) {
              console.log(
                'FID:',
                (entry as any).processingStart - entry.startTime
              );
            }

            if (
              entry.entryType === 'layout-shift' &&
              'hadRecentInput' in entry &&
              'value' in entry
            ) {
              if (!(entry as any).hadRecentInput) {
                console.log('CLS:', (entry as any).value);
              }
            }
          }
        });

        try {
          observer.observe({
            entryTypes: [
              'largest-contentful-paint',
              'first-input',
              'layout-shift',
            ],
          });
        } catch (e) {
          // Some browsers may not support all entry types
          console.log('Performance monitoring not fully supported');
        }

        return () => observer.disconnect();
      }
    }
  }, []);

  return null;
};

export default PerformanceMonitor;
