'use client';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '@/components/common/atoms/card';
import WithRedLeftBar from '@/components/utils/withRedLeftBar';
import WithRedRect from '@/components/utils/withRedRect';
import Accordion from '@/components/common/organizms/accordion';
import Menu from '@/components/common/organizms/menu';
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
      <div className="text-center text-white text-title">Welcome to the stellar standard of technology solutions</div>
      <div className="flex pt-[100px] gap-[30px] items-center justify-center">
        <div className="w-[50%] p-[20px] text-[32px] text-[#979796]">
          We are an emerging technology company empowering leaders to disrupt markets with visionary ideas and
          groundbreaking technology.
        </div>
        <div className="w-50%">
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

    <div className="bg-black w-full text-white text-8xl  font-['Inter']  h-full flex flex-col gap-20 justify-center items-center px-10 py-10">
      <div className="uppercase justify-center  w-full flex flex-wrap  gap-10 py-10">
        <div className="flex ">Unleash tomorrow&apos;s</div>
        <div className="flex justify-end items-end ">
          <WithRedRect>Tech Today</WithRedRect>
        </div>
      </div>
      <Swiper
        // modules={[Autoplay]}
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
        className="w-full h-full grow flex justify-center items-center gap-10"
      >
        {carouselData.map((item, index) => (
          <div className="h-full grow">
            <SwiperSlide className="grow h-full relative" key={index}>
              <div className="w-full h-full grow  pt-[80px] p-10 flex flex-col gap-[30px] bg-gradient-to-b from-black to-black rounded-2xl border border-white/20 px-10">
                <div className="absolute top-0 left-0 md:w-[100px] w-full md:h-[500px] left-[50%] rotate-[-55.41deg] blur-3xl bg-gradient-to-l from-red-700 to-orange-950 rounded-full absolute opacity-50" />
                <div className="text-[35px]  text-[#F9EFEC] ">
                  <span className="text-[#F51101] ">&quot;</span>
                  {item.heading}
                  <span className="text-[#F51101]">&rdquo;</span>
                </div>
                <div className="w-full text-[25px] text-[#A3A3A3]">{item.description}</div>
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
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
    <div className="lg:px-[10vw] md:px-0 bg-black p-[30px] text-[#B3B3B2] flex flex-col items-center justify-center ">
      <div className="font-bold uppercase text-2xl md:text-6xl inline-flex gap-2 mb-10">
        We keep you{' '}
        <WithRedRect>
          <span className="text-red-500">ahead</span>
        </WithRedRect>
      </div>
      <div className="w-full flex md:flex-row flex-col justify-between gap-10">
        <div className="w-1/2 p-10">
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
        <div className="w-1/2 p-10">
          <Accordion
            bodyClassName="rounded-lg p-[40px] flex flex-col gap-10 h-full grow"
            title={
              <p className="relative pr-[50px] text-white text-[20px] border-b-[1px] border-[#262626] pb-[20px]">
                Lorem ipsum dolor sit amet consectetur. Vitae potenti etiam amet fermentum.
              </p>
            }
            idleCpn={
              <div className="relative w-full h-56 rounded-lg">
                <Image
                  src="/assets/images/industry/sub_container.svg"
                  fill
                  alt="graphic"
                  className="object-cover rounded-lg"
                />
              </div>
            }
            activeCpn={
              <div className="text-[#979796] p-[15px] text-[20px]">
                Lorem ipsum dolor sit amet consectetur. Non congue cursus quis adipiscing donec velit a. Nunc varius
                lectus ut laoreet facilisis eu. Arcu ac urna eu et. Feugiat nibh nulla sed faucibus velit parturient
                proin. In sed lobortis maecenas facilisis sit enim magna velit nisi. Mauris senectus id ut consectetur
                nulla sagittis aenean mauris. Aliquam nibh pellentesque justo eu elementum. Mattis et amet ni
                Scelerisque maecenas ac ac viverra ipsum dis justo non. Ultrices ut accumsan etiam mattis. Justo fames
                sapien lorem laoreet nunc.
              </div>
            }
          >
            {/* <div className="flex gap-[40px] items-start">
              <p className="text-white text-[20px] border-b-[1px] border-[#262626] pb-[20px]">
                Lorem ipsum dolor sit amet consectetur. Vitae potenti etiam amet fermentum.
              </p>
              <div className="p-[15px] border-[1px] border-[#333333]  rounded-full  bg-[#1F1F1F]">
                <FaPlus className="text-[#f51101]" />
              </div>
            </div> */}
            {/* <div className="relative w-full h-56 rounded-lg">
              <Image
                src="/assets/images/industry/sub_container.svg"
                fill
                alt="graphic"
                className="object-cover rounded-lg"
              />
            </div> */}
          </Accordion>
        </div>
      </div>
    </div>
  </div>
);
export default Welcome;
