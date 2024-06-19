import Image from 'next/image';

import { TypewriterEffectSmooth } from '@/components/Animations/typewritter-text';
import { Container } from '@/components/common/atoms/container';

export const CareersSection = () => (
  <div id="careers" className="gap-[50px] bg-black px-[30px] py-[150px] pt-[100px] pb-[100px] flex flex-col">
    <div className="pl-11 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#999999] text-5xl md:text-8xl uppercase text-center flex justify-center items-center">
      <TypewriterEffectSmooth words={[{ text: 'Careers' }]} />
    </div>
    <Container containerClassName="flex flex-wrap  justify-center items-center p-[20px]  mt-[20px]">
      {' '}
      <div className="animation-element appear w-full md:w-1/2 p-[20px] lg:w-1/2">
        {' '}
        <Image
          src={'/assets/images/common/careers.svg'}
          alt="careers img"
          className=" mx-auto md:mx-0"
          width={950}
          height={950}
          layout="responsive"
        />
      </div>
      <div className="animation-element appear w-full md:w-1/2 lg:w-1/2 text-gray-400 pt-[35px] px-[35px] mr-50 text-lg md:text-3xl">
        <p>
          At Capzient, we live for change, thrive in disruption, and champion those who dare to dream bigger. If
          you&apos;re the kind of innovator who&apos;s hungry for growth and not afraid to challenge the status quo,
          this is your time. We&apos;re looking for the curious, the bold, and the brilliant. So, if you’re ready to
          push the boundaries of what’s possible, come join us and together, we’ll redefine the future of business,
          technology, and society.
        </p>
        <div className="animation-element appear flex mt-[30px] justify-center md:justify-start">
          {/* <Link href="/careers" className="bg-[#1F1F1F] flex items-center text-white py-2 mt-[50px] px-4 rounded-xl">
            Learn More{' '}
            <span className="ml-2 text-red-600 text-2xl">
              <FaArrowRight />
            </span>
          </Link> */}
        </div>
      </div>
    </Container>
  </div>
);
