import Image from 'next/image';

import Container from '@/components/common/atoms/container';
import WithRedRect from '@/components/utils/withRedRect';

const Careers = () => (
  <div className="gap-[50px] bg-black px-[30px] py-[150px] pt-[100px] pb-[100px] flex flex-col">
    <div className="animation-element appear pl-11 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#999999] text-8xl uppercase">
      <WithRedRect>Careers</WithRedRect>
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
      <div className="animation-element appear w-full md:w-1/2 lg:w-1/2 text-gray-400 pt-[35px] px-[35px] mr-50 text-[20px]">
        <p>
          Lorem ipsum dolor sit amet consectetur. Sit malesuada in eget adipiscing nibh vulputate vulputate. Arcu nunc
          fermentum ornare ultrices elit tincidunt cursus vel. Sed feugiat sit diam mi ac. Sit pellentesque enim tempus
          viverra. Donec fermentum proin aliquam sit aliquet sed id nascetur platea. Augue commodo feugiat malesuada
          congue semper. Aliquam adipiscing justo semper nunc fames amet feugiat euismod netus. Congue phasellus tempor
          gravida elementum. Ac odio cursus egestac suscipit nisl. Faucibus commodo congue sit ultricies massa vehicula.
        </p>
        <div className="animation-element appear flex mt-[30px] justify-center md:justify-start">
          <button className="bg-[#1F1F1F] text-white py-2 mt-[50px] px-4 rounded-xl">
            Learn More <span className="ml-2 text-red-600 text-2xl">→</span>
          </button>
        </div>
      </div>
    </Container>
  </div>
);

export default Careers;
