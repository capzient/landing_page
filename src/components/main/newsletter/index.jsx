import Image from 'next/image';
import React from 'react';
import { IoMdArrowUp } from 'react-icons/io';
import Card from '@/components/common/atoms/card';
import Container from '@/components/common/atoms/container';
import ArrowButton from '@/components/common/atoms/arrowButton';

const NewsLetter = () => (
  <section className="bg-black p-[30px] text-[#B3B3B2] px-10 flex flex-col items-center justify-center ">
    <Container containerClassName="p-3 rounded-2xl border h-full w-full flex flex-col gap-[15px]">
      <Card bodyClassName="w-full p-5 flex justify-between items-center bg-[#191919] rounded-2xl">
        <p className="text-[#F9EFEC] text-[40px] p-[20px]">NEWS LETTER</p>
        <ArrowButton
          arrowType="red"
          hoverColor="#ffffff81"
          arrowClassName="duration-500 color-white border-[#262626] border-[1px]  p-[15px] rounded-full bg-transparent"
          title="ALL NEWSLETTERS"
          titleClassName="text-[#B3B3B2] text-[20px]"
        />
      </Card>
      <div className="grid grid-cols-3 gap-[15px] grid-rows-2 h-full w-full">
        <div className="animation-element appear w-full flex flex-col bg-[#191919] rounded-2xl h-full">
          <div className="flex items-center justify-center gap-2 relative h-[400px] w-full">
            <Image
              src="/assets/images/welcome/graphic/newsletter1.svg"
              fill
              className="object-cover rounded-t-2xl"
              alt=""
            />
          </div>
          <div className="h-[30%] w-full p-5 flex justify-between items-center">
            <p className="text-[#F9EFEC] text-[25px]">Lorem ipsum dolor sit amet consectetur.</p>{' '}
            <ArrowButton
              arrowType="red_right"
              hoverColor="#ffffff81"
              arrowClassName="duration-500 color-white border-[#262626] border-[1px]  p-[15px] rounded-full bg-transparent"
              title={null}
              titleClassName="text-[#B3B3B2] text-[20px]"
            />
          </div>
        </div>
        {/*  */}
        <div className="animation-element appear w-full flex flex-col bg-[#191919] rounded-2xl h-full ">
          <div className="h-[30%] w-full p-5 flex justify-between items-center">
            <p className="text-[#F9EFEC] text-[25px]">Lorem ipsum dior</p>{' '}
            <ArrowButton
              arrowType="red_right"
              hoverColor="#ffffff81"
              arrowClassName="duration-500 color-white border-[#262626] border-[1px]  p-[15px] rounded-full bg-transparent"
              title={null}
              titleClassName="text-[#B3B3B2] text-[20px]"
            />
          </div>
          <div className="flex items-center justify-center gap-2  h-[400px] w-full bg-[#191919] rounded-2xl">
            Lorem ipsum dior
          </div>
        </div>
        {/*  */}
        <div className="animation-element appear w-full flex flex-col bg-[#191919] rounded-2xl h-full ">
          <div className="flex items-center justify-center gap-2  h-[400px] w-full bg-[#191919] rounded-2xl">
            Lorem ipsum dior
          </div>
          <div className="h-[30%] w-full p-5 flex justify-between items-center">
            <p className="text-[#F9EFEC] text-[25px]">Lorem ipsum dolor sit amet consectetur.</p>{' '}
            <ArrowButton
              arrowType="red_right"
              hoverColor="#ffffff81"
              arrowClassName="duration-500 color-white border-[#262626] border-[1px]  p-[15px] rounded-full bg-transparent"
              title={null}
              titleClassName="text-[#B3B3B2] text-[20px]"
            />
          </div>
        </div>
        {/*  */}
        <div className="animation-element appear w-full flex flex-col bg-[#191919] rounded-2xl h-full col-span-2">
          <div className="flex items-center justify-center gap-2 relative h-[400px] w-full">
            <Image
              src="/assets/images/welcome/graphic/newsletter1.svg"
              fill
              className="object-cover rounded-t-2xl"
              alt=""
            />
          </div>
          <div className="h-[30%] w-full p-5 flex justify-between items-center">
            <p className="text-[#F9EFEC] text-[25px]">Lorem ipsum dolor sit amet consectetur.</p>{' '}
            <ArrowButton
              arrowType="red_right"
              hoverColor="#ffffff81"
              arrowClassName="duration-500 color-white border-[#262626] border-[1px]  p-[15px] rounded-full bg-transparent"
              title={null}
              titleClassName="text-[#B3B3B2] text-[20px]"
            />
          </div>
        </div>
        {/*  */}
        <div className="animation-element appear w-full flex flex-col bg-[#191919] rounded-2xl h-full">
          <div className="flex items-center justify-center gap-2 relative h-[400px] w-full">
            <Image
              src="/assets/images/welcome/graphic/newsletter2.svg"
              fill
              className="object-cover rounded-t-2xl"
              alt=""
            />
          </div>
          <div className="h-[30%] w-full p-5 flex justify-between items-center">
            <p className="text-[#F9EFEC] text-[25px]">Lorem ipsum dolor sit amet consectetur.</p>{' '}
            <ArrowButton
              arrowType="red_right"
              hoverColor="#ffffff81"
              arrowClassName="duration-500 color-white border-[#262626] border-[1px]  p-[15px] rounded-full bg-transparent"
              title={null}
              titleClassName="text-[#B3B3B2] text-[20px]"
            />
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default NewsLetter;
