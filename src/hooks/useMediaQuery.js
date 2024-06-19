'use client';
import { useEffect, useState } from 'react';

import { useMounted } from '@/hooks/useMounted';

export const useMediaQuery = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const mounted = useMounted();
  useEffect(() => {
    const handleResize = () => {
      const isDesktopView = window.innerWidth >= 768;
      setIsDesktop(isDesktopView);
      setIsMobile(!isDesktopView);
    };

    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mounted]);

  return { isDesktop, isMobile };
};
