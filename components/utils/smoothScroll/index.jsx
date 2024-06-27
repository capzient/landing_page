"use client";

import ReactLenis from "@studio-freight/react-lenis";

const SmoothScroll = ({ children }) => (
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
export default SmoothScroll;
