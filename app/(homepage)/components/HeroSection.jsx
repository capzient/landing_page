'use client';
import React from 'react';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Video } from '@/utils/Video';
import { ViewportTrigger } from '@/utils/viewPortTrigger';

import { HeroContent } from './HeroContent';

export const HeroSection = () => {
  const { isMobile } = useMediaQuery();
  const [videoUrl, setVideoUrl] = React.useState('/assets/videos/video.mp4');

  React.useEffect(() => {
    if (isMobile) {
      setVideoUrl('/assets/videos/video.mp4'); // TODO: Use different video for mobile with a lower resolution
    } else {
      setVideoUrl('/assets/videos/video.mp4');
    }
  }, [isMobile]);

  return (
    <div className="relative flex flex-col h-full w-full">
      <ViewportTrigger />
      <Video
        autoPlay
        muted
        loop
        preload="none"
        playsInline
        className="w-full h-screen sm:block object-cover object-center absolute top-0 left-0"
        url={videoUrl}
        type="video/mp4"
        id="hp-video"
      />
      <HeroContent />
    </div>
  );
};
