'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';

import { instrument_init } from '@/utils/Fonts';
import { Video } from '@/utils/Video';

// eslint-disable-next-line arrow-body-style
export const HeroSection = () => {

  const videoContainer = useRef(null);
  const container = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        // pin: true,
        scrub: true,
        start: '100px',
        end: "bottom top",
        // markers: true,
      },
    });
    timeline.fromTo(
      videoContainer.current,
      {
        width: '210px',
        height: '60px',
        bottom: '20px',
      },
      {
        width: '100%',
        height: '100vh',
        bottom: '-70%',
      },
    );
  }, []);

  return (
    <>
      <div ref={container} className=" w-full overflow-hidden h-screen pt-5  relative  bg-black  ">
        <div className="w-full h-[250px] bg-gradient-to-t from-black to-transparent absolute bottom-0 z-20 -mb-2 left-0" />

        <div className="flex justify-center relative z-10 items-center w-full">
          <div className="flex items-center  gap-3 px-4 pb-[2px] md:py-1 rounded-full border border-[#2a2a2a]">
            <div className="size-[7px] rounded-full bg-[#1aff57] shadow-[0_0_7px_2px_rgba(26,255,87)]" />
            <div>
              <span className="text-[11px] sm:text-[12px] text-white">We Boost your Business</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center relative text-center  z-10 mt-7 px-[20px] sm:px-[50px] md:px-[100px] lg:px-[150px] xl:px-[200px]">
          <div className="leading-tight">
            <div>
              <span className=" text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-semibold text-white">
                We help Leaders
              </span>
            </div>
            <div className="">
              <span className=" text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-semibold text-white">
                build a{' '}
                <span className={` italic text-[28px] md:text-[36px] lg:text-[42px] xl:text-[52px] `}>
                  <span className={`${instrument_init.className} tracking-wide`}>better tomorrow</span>
                </span>
              </span>
            </div>
            <div className="mt-5 leading-tight md:leading-snug w-full sm:w-[700px]">
              <span className=" text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] text-gray-300 ">
                We turn your ideas into reality using the latest technologies and creative strategies. Our expert team
                helps businesses achieve exceptional success by creating unique and transformative experiences.
              </span>
            </div>
            <div className="mt-7">
              <button className="px-5 md:px-7 py-3 md:py-4 bg-[#4f1ad6] border-[2px] border-black duration-200 hover:border-[#8555ffcb] text-white text-[14px] font-medium rounded-lg">
                Start your New Project
              </button>
            </div>
          </div>
        </div>

        <Video
          autoPlay
          muted
          loop
          preload="none"
          playsInline
          className="w-full absolute  bottom-5 h-full top-[50%]   lg:top-[36%]  left-0 object-cover object-top"
          url="https://darker-supply.s3.us-east-005.backblazeb2.com/Flowing+Neon+Curve+Lines_1.mp4"
          type="video/mp4"
          id="hp-video"
        />
      </div>
      <div
        ref={videoContainer}
        className="w-[210px] h-[60px] p-5  rounded-[50px] bottom-0 overflow-hidden absolute z-30 left-[50%] translate-x-[-50%]"
      >
        <Video
          autoPlay
          muted
          loop
          preload="none"
          playsInline
          className="rounded-[15px] w-full h-full left-0 object-cover object-top"
          url="../assets/videos/video.mp4"
          type="video/mp4"
          id="hp-video"
        />
      </div>
      <div className="w-full h-[70vh] bg-black" />
    </>
  );
};
