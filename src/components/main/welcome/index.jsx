'use client';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Accordion from '@/components/common/organisms/accordion';
import Menu from '@/components/common/organisms/menu';
import WithRedRect from '@/components/utils/withRedRect';

import { carouselData } from './data';

import 'swiper/css';
import 'swiper/css/autoplay';

const Welcome = () => (
  <div>
    <div className="h-[100vh]"></div>
    <div className="h-[100vh] relative welcome-text-container flex items-center justify-center bg-cover bg-center bg-[url('/assets/images/home/image_1.svg')] w-full text-white text-[128px]">
      <WithRedRect>
        <div className="relative welcome-text">We Re-imagine</div>
      </WithRedRect>
      {/* <div className="absolute w-full h-full welcome-blur"></div> */}
    </div>
    <div className="px-[100px] py-[150px] flex bg-cover bg-center bg-black flex-col w-full">
      <div className="animation-element appear uppercase text-center text-white text-center text-title">
        Welcome to the <span className="text-red-500">stellar</span>
        <div className="flex justify-center flex-wrap gap-[20px]">
          <span className="text-red-500">standard</span> of technology <WithRedRect>solutions</WithRedRect>
        </div>
      </div>
      <div className="flex pt-[100px] gap-[30px] items-center justify-center">
        <div className="animation-element appear w-[50%] p-[20px] text-[32px] text-[#979796]">
          We are an emerging technology company empowering leaders to disrupt markets with visionary ideas and
          groundbreaking technology.
        </div>
        <div className="animation-element appear w-[50%]">
          <Image
            className="mx-auto"
            src={'/assets/images/welcome/video.svg'}
            alt=""
            width={500}
            height={500}
            layout="responsive"
          />
        </div>
      </div>
    </div>
    <div className="bg-black w-full text-white text-8xl  font-['Inter']  h-full flex flex-col gap-20 justify-center items-center px-10 py-10">
      <div className="animation-element appear  uppercase text-center justify-center  w-full flex flex-wrap  gap-10 py-10">
        <div className="flex ">Unleash tomorrow&apos;s Tech</div>
        <div className="flex justify-end items-end ">
          <WithRedRect>Today</WithRedRect>
        </div>
      </div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
        }}
        className="animation-element appear w-full h-full grow flex justify-center items-center gap-10"
      >
        {carouselData.map((item, index) => (
          <div key={index} className="h-full grow">
            <SwiperSlide className="grow h-full relative">
              <div className="w-full  h-[600px] grow pt-[80px] p-10 flex flex-col gap-[30px] bg-gradient-to-b from-black to-black rounded-2xl border border-white/20 px-10">
                <div className="absolute top-0 left-0 md:w-[100px] w-full md:h-[500px] left-[50%] rotate-[-55.41deg] blur-3xl bg-gradient-to-l from-red-700 to-orange-950 rounded-full absolute opacity-50" />
                <div className="text-[35px]  text-[#F9EFEC]	">
                  <span className="text-[#F51101] ">&quot;</span>
                  {item.heading}
                  <span className="text-[#F51101]">&rdquo;</span>
                </div>
                <div className="w-full text-[25px] py-10 leading-normal text-[#A3A3A3]">{item.description}</div>
                <div className="flex flex-col justify-end h-full grow">
                  <div className="gap-10 text-sm flex lex-wrap items-center">
                    <Image
                      width={50}
                      height={50}
                      className="w-[70px]"
                      alt="graphic"
                      src={`/assets/images/welcome/graphic/${item.image}`}
                    />
                    <div className="text-sm md:text-xl">{item.subhead}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
    <div className="lg:px-[10vw] md:px-0 bg-black p-[30px] text-[#B3B3B2] flex flex-col items-center justify-center ">
      <div className="animation-element my-[70px] appear font-bold uppercase text-2xl md:text-6xl inline-flex gap-2 ">
        We keep you{' '}
        <WithRedRect>
          <span className="text-red-500">ahead</span>
        </WithRedRect>
      </div>
      <div className="w-full flex md:flex-row flex-col gap-[10px]">
        <div className="w-[40%] p-10">
          <Menu
            data={[
              'Research and Development',
              'Business Accelerator ',
              'Delivery',
              'consulting services',
              'Lorem ipsum dolor sit',
            ]}
            itemClassName="text-[25px]  p-6 uppercase"
          />
        </div>
        <div className="w-[60%] p-10">
          <Accordion
            bodyClassName="rounded-lg flex flex-col gap-[10px]"
            title={
              <p className="py-[40px] text-white text-[20px] ">
                Lorem ipsum dolor sit amet consectetur. Vitae potenti etiam amet fermentum.
              </p>
            }
            idleCpn={
              <div className=" h-[250px] w-full p-[20px] rounded-lg">
                <div className="p-[25px] relative w-full h-full">
                  <Image
                    src="/assets/images/industry/sub_container.svg"
                    alt=""
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            }
            activeCpn={
              <div className="text-[#979796] p-[35px] text-[20px]">
                Lorem ipsum dolor sit amet consectetur. Non congue cursus quis adipiscing donec velit a. Nunc varius
                lectus ut laoreet facilisis eu. Arcu ac urna eu et. Feugiat nibh nulla sed faucibus velit parturient
                proin. In sed lobortis maecenas facilisis sit enim magna velit nisi. Mauris senectus id ut consectetur
                nulla sagittis aenean mauris. Aliquam nibh pellentesque justo eu elementum. Mattis et amet ni
                Scelerisque maecenas ac ac viverra ipsum dis justo non. Ultrices ut accumsan etiam mattis. Justo fames
                sapien lorem laoreet nunc.
              </div>
            }
          ></Accordion>
        </div>
      </div>
    </div>
  </div>
);
export default Welcome;
