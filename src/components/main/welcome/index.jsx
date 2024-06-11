'use client';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import WithRedLeftBar from '@/components/utils/withRedLeftBar';
import WithRedRect from '@/components/utils/withRedRect';

import { carouselData } from './data';

import 'swiper/css';
import 'swiper/css/autoplay';

const Welcome = () => (
  <div>
    <div className="h-[100vh]"></div>
    <div className="px-[100px] py-[150px] flex bg-cover bg-center bg-[url('/assets/images/welcome/bg_1.svg')] flex-col w-full">
      <div className="text-white text-title">
        <WithRedLeftBar width={10}>
          <div>
            Welcome to the stellar standard of technology
            <WithRedRect>solutions</WithRedRect>
          </div>
        </WithRedLeftBar>
        <div className="flex flex-wrap justify-between items-center">
          <div className="text-title-lg text-white">We Re-imagine</div>
          <Image src={'/assets/images/welcome/video.svg'} width={650} height={380} alt="video" />
        </div>
        <div className="text-white text-content pt-[70px]">
          We are an emerging technology company empowering leaders to disrupt markets with visionary ideas and
          groundbreaking technology.
        </div>
      </div>
    </div>
    {/* <div className="bg-[#111111] text-white p-[30px]">
        {bullets.map((aBullet, idx) => (
          <div key={idx} className="flex flex-wrap pb-[100px]">
            <div className="w-[200px]">
              {`[ ${idx + 1 < 10 ? "0" : ""}${idx + 1} ]`}
            </div>
            <div className="text-bullet w-[300px]">
              <div>{aBullet.title_1}</div>
              <div className="text-red-500">{aBullet.title_2}</div>
            </div>
            <div className="grow">
              <div className="w-[300px] m-auto">{aBullet.description}</div>
            </div>
            <div>
              <div className="link link--metis text-sm">Learn more</div>
            </div>
          </div>
        ))}
      </div> */}

    <div className="bg-black w-full text-white text-8xl font-semibold font-['Inter'] uppercase h-full flex flex-col gap-20 justify-center items-center px-10 py-10">
      <div className="space-y-10 w-full flex flex-col gap-10 py-10">
        <p className="uppercase flex md:text-[96px] text-3xl">Unleash tomorrow&apos;s</p>
        <div className="uppercase flex justify-end items-end md:text-[96px] text-3xl">
          <WithRedRect>Tech Today</WithRedRect>
        </div>
      </div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // >= 768
          768: {
            slidesPerView: 3,
          },
          //  < 768
          0: {
            slidesPerView: 1,
          },
        }}
        className="w-full h-full flex justify-center items-center gap-10"
      >
        {carouselData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative  w-full md:w-[400px] h-[582px] bg-gradient-to-b from-black to-black rounded-2xl border border-white/20 px-10">
              <div className=" flex-col w-full h-full justify-start items-start inline-flex gap-10 md:gap-[52px]">
                <div className="md:w-[127.77px] w-full h-[582px] md:h-[500.38px] left-[50%] rotate-[-55.41deg] blur-3xl bg-gradient-to-l from-red-700 to-orange-950 rounded-full absolute opacity-50" />
                <div className="text-2xl md:text-2xl text-[#F9EFEC] ">
                  <span className="text-[#F51101] ">&quot;</span>
                  {item.heading}
                  <span className="text-[#F51101]">&rdquo;</span>
                </div>
                <div className=" text-xs md:text-lg text-[#A3A3A3]">{item.description}</div>
                <div className="gap-16 text-sm flex justify-center items-center">
                  <div className="icon">
                    <Image
                      width={50}
                      height={50}
                      className="w-28"
                      alt="graphic"
                      src={`/assets/images/welcome/graphic/${item.image}`}
                    />
                  </div>
                  <div className="text-sm md:text-xl">{item.subhead}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    <div className="bg-black p-[30px] text-[#B3B3B2] px-10 h-screen flex flex-col items-center justify-center ">
      <div className="uppercase text-2xl md:text-6xl inline-flex gap-2 mb-10">
        We keep you <WithRedRect>ahead</WithRedRect>
      </div>
      <div className="w-full flex md:flex-row flex-col justify-between gap-10">
        <div className="w-1/2 p-10">
          {[
            'Research and Development',
            'Business Accelerator ',
            'Delivery',
            'consulting services',
            'Lorem ipsum dolor sit',
          ].map((aItem, idx) => (
            <div key={idx} className="p-6 uppercase">
              {' '}
              {aItem}
            </div>
          ))}
        </div>
        <div className="w-1/2 p-10">
          <div className="bg-[#191919] rounded-lg p-8 flex flex-col gap-10">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <div className="relative w-full h-56 rounded-lg">
              <Image
                src="/assets/images/industry/sub_container.svg"
                fill
                alt="graphic"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Welcome;
