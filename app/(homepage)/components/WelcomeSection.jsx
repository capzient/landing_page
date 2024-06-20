'use client';
import { YouTubeEmbed } from '@next/third-parties/google';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { TypewriterEffectSmooth } from '@/components/Animations/typewritter-text';
import 'swiper/css';
import 'swiper/css/autoplay';
import { useMediaQuery } from '@/hooks/useMediaQuery';

import { FlipWords } from './FlipWords';
import { WavyBackground } from './WavyBackground';

const carouselData = [
  {
    heading: '97% of executives predict generative AI will transform their industries.',
    description:
      'Capzient leverages cutting-edge generative AI solutions to lead the charge in industry transformation.',
    image: 'circuit.svg',
    subhead: 'The Transformative Power of Generative AI',
  },
  {
    heading: '67% of organizations are investing more in technology, with data and AI topping their priority list.',
    description:
      "Capzient's data-driven approach and AI expertise unlock the true potential of game-changing technologies.",
    image: 'ai.png',
    subhead: 'Emphasizing Investment in Data and AI',
  },
  {
    heading: '95% of executives see next-generation computing as a critical game-changer in their industries.',
    description: 'Capzient is leading the charge in next-generation computing.',
    image: 'ml.svg',
    subhead: 'Next-Generation Computing: The Future is Here',
  },
  {
    heading:
      '96% of executives foresee the convergence of digital and physical spaces revolutionizing their industries.',
    description: 'Implementing innovative strategies to stay at the forefront of this transformation.',
    image: 'chipping.svg',
    subhead: 'The Convergence of Digital and Physical Spaces',
  },
];

const words = ['imagine', 'invent', 'define'];

const welcomeWords = [
  { text: 'Welcome' },
  { text: 'to' },
  { text: 'the' },
  { text: 'stellar' },
  { text: 'standard', className: 'text-[#F51101] dark:text-[#F51101]' },
  { text: 'solutions', className: 'text-[#F51101] dark:text-[#F51101]' },
];

export const WelcomeSection = () => {
  const { isMobile } = useMediaQuery();
  return (
    <div>
      <div className="h-[100vh]"></div>
      <div className="h-[100vh] relative welcome-text-container flex items-center justify-center bg-cover bg-center bg-black w-full text-white text-[128px]">
        {/* <WithRedRect>
        <div className="relative md:welcome-text ">We Re-imagine</div>
      </WithRedRect> */}
        {/* <svg className="welcome-text" viewBox="0 0 1320 300">
        <text x="50%" y="50%" dy=".35em" text-anchor="middle">
          We Re-imagine
        </text>
        <text x="50%" y="50%" dy=".35em" text-anchor="middle"></text>
      </svg> */}

        <WavyBackground>
          <div className="max-w-full mx-auto pb-40">
            <div className="z-50 inset-0 flex items-center justify-center text-3xl text-white font-bold px-4 pointer-events-none text-center md:text-4xl lg:text-9xl">
              We Re-
              <FlipWords words={words} />
              <span className={`text-red-500 dot`}>.</span>
            </div>
          </div>
        </WavyBackground>

        {/* <div className="absolute w-full h-full welcome-blur"></div> */}
      </div>
      <div className="px-[100px] py-[150px] flex bg-cover bg-center bg-black flex-col w-full">
        <div className="md:flex uppercase text-center text-white text-4xl gap-0  md:text-4xl w-full hidden justify-center items-center flex-col">
          <TypewriterEffectSmooth
            words={welcomeWords}
            className={'md:text-4xl text-xl'}
            textClassName={'md:text-4xl text-2xl'}
          />
          <TypewriterEffectSmooth words={[{ text: 'of' }, { text: 'Technology' }, { text: 'solution' }]} />
        </div>
        <div className="flex uppercase text-center text-white text-4xl gap-0  md:text-4xl w-full md:hidden justify-center items-center flex-col">
          <TypewriterEffectSmooth
            words={[{ text: 'Welcome' }, { text: 'to' }, { text: 'the' }]}
            textClassName={'md:text-4xl text-xl'}
          />
          <TypewriterEffectSmooth
            words={[
              { text: 'stellar' },
              { text: 'standard', className: 'text-[#F51101] dark:text-[#F51101]' },
              { text: 'solutions', className: 'text-[#F51101] dark:text-[#F51101]' },
            ]}
            textClassName={'md:text-4xl text-xl'}
          />
          <TypewriterEffectSmooth
            words={[{ text: 'of' }, { text: 'Technology' }, { text: 'solution' }]}
            textClassName={'md:text-4xl text-xl'}
          />
        </div>

        <div className="flex md:flex-row flex-col-reverse pt-[100px] gap-[30px] items-center justify-center">
          <div className="animation-element appear leading-normal	 md:w-[50%] md:p-[20px] text-xl md:text-[42px] text-[#979796]">
            We are an emerging technology company empowering leaders to disrupt markets with visionary ideas and
            groundbreaking technology.
          </div>
          <div className="animation-element appear md:w-[50%]">
            <YouTubeEmbed videoid="3WTO227boHA" style="rounded-xl" width={isMobile ? 300 : 0} />
            {/*         
          <Image
            className="mx-auto"
            src={'/assets/images/welcome/video.svg'}
            alt=""
            width={500}
            height={500}
            layout="responsive"
          /> */}
          </div>
        </div>
      </div>
      <div className="bg-black w-full text-white   h-full flex flex-col gap-20 justify-center items-center px-10 py-10">
        <div className="uppercase text-center justify-center  w-full flex flex-wrap  md:gap-10 md:py-10 md:text-8xl text-5xl">
          <TypewriterEffectSmooth
            words={[{ text: 'Our' }, { text: 'capabilities', className: 'text-[#F51101] dark:text-[#F51101]' }]}
            textClassName={'md:text-4xl text-2xl'}
          />
        </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
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
                <div className="w-full  h-[600px] grow cursor-grab p-10 flex flex-col gap-3 md:gap-[30px] bg-gradient-to-b from-black to-black rounded-2xl border border-white/20 px-10">
                  <div className="top-0  md:w-[100px] w-full md:h-[500px] left-[50%] rotate-[-55.41deg] blur-3xl bg-gradient-to-l from-red-700 to-orange-950 rounded-full absolute opacity-50" />
                  <div className="text-2xl md:text-[35px]  text-[#F9EFEC]	">
                    <span className="text-[#F51101] ">&quot;</span>
                    {item.heading}
                    <span className="text-[#F51101]">&rdquo;</span>
                  </div>
                  <div className="w-full text-xl md:text-[25px] py-10 leading-normal text-[#A3A3A3]">
                    {item.description}
                  </div>
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
    </div>
  );
};
