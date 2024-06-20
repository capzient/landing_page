'use client';

import ReactLenis from '@studio-freight/react-lenis';

export const SmoothScroll = ({ children }) => (
  <ReactLenis
    root
    options={{
      lerp: 0.07,
      duration: 1.5,
      smoothTouch: true,
    }}
  >
    {children}
  </ReactLenis>
);
