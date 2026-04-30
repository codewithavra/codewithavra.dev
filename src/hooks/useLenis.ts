/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

/**
 * Node modules
 */
import { useEffect } from 'react';

export default function useLenis() {
  useEffect(() => {
    let rafId = 0;
    let isMounted = true;
    let lenisInstance: { raf: (time: number) => void; destroy: () => void } | null = null;

    const setupLenis = async () => {
      const { default: Lenis } = await import('lenis');
      if (!isMounted) return;

      lenisInstance = new Lenis({
        lerp: 0.1,
        smoothWheel: true,
      });

      const raf = (time: number) => {
        lenisInstance?.raf(time);
        rafId = requestAnimationFrame(raf);
      };

      rafId = requestAnimationFrame(raf);
    };

    setupLenis();

    return () => {
      isMounted = false;
      cancelAnimationFrame(rafId);
      lenisInstance?.destroy();
    };
  }, []);
}