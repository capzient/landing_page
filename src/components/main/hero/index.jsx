import React from 'react';

import HeroContent from '@/components/main/hero/sub/HeroContent';
import ViewportTrigger from '@/components/utils/viewPortTrigger';

const Hero = () => (
  <div className="flex flex-col h-full w-full">
    <ViewportTrigger />
    <video autoPlay muted loop className="absolute top-0  h-full w-full left-0 z-[1] object-cover ">
      <source src="/assets/videos/video.mp4" type="video/mp4" />
    </video>
    <HeroContent />
  </div>
);
export default Hero;
