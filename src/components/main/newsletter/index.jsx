'use client';
import Image from 'next/image';
import React, { useState } from 'react';

import ArrowButton from '@/components/common/atoms/arrowButton';
import Card from '@/components/common/atoms/card';
import Container from '@/components/common/atoms/container';
import ExtraContentContainer from '@/components/common/organisms/extraContentContainer';

const NewsLetter = () => {
  const [openExtra, setOpenExtra] = useState(false);
  return (
    <div className="bg-black p-[30px] text-[#B3B3B2] px-10 flex flex-col items-center justify-center ">
      <Container containerClassName="p-3 rounded-2xl border h-full w-full flex flex-col gap-[15px]">
        <ExtraContentContainer open={openExtra} setOpen={setOpenExtra} extraCpn={<Card>this is extra cpn</Card>}>
          <Card bodyClassName="w-full p-5 flex justify-between items-center bg-[#191919] rounded-2xl">
            <p className="text-[#F9EFEC] text-[40px] p-[20px]">NEWS LETTER</p>
            <ArrowButton
              handleClick={() => setOpenExtra(true)}
              arrowType="red"
              hoverColor="#ffffff81"
              arrowClassName="duration-500 color-white border-[#262626] border-[1px]  p-[15px] rounded-full bg-transparent"
              title="ALL NEWSLETTERS"
              titleClassName="text-[#B3B3B2] text-[20px]"
            />
          </Card>
        </ExtraContentContainer>

        <div className="grid grid-cols-3 gap-[15px] grid-rows-2 h-full w-full">
          <div className="animation-element appear w-full flex flex-col bg-[#191919] rounded-2xl h-full">
            <div className="flex items-center h-[400px] justify-center gap-2 relative  w-full">
              <Image
                src="/assets/images/welcome/graphic/newsletter1.svg"
                fill
                className="object-cover rounded-t-2xl"
                alt=""
              />
            </div>
            <div className="h-[30%] w-full p-5 flex justify-between items-center">
              <p className="text-[#F9EFEC] text-[25px]">Lorem ipsum dolor sit amet consectetur.</p>
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
            <div className="p-[40px] bg-[#0f0f0f] gap-2  h-full w-full bg-[#161616] rounded-b-2xl">
              <div className="text-[#F9EFEC] text-[25px] uppercase mb-[40px]">
                Lorem ipsum dolor sit amet consectetur.
              </div>
              <div className="text-[#B3B3B2] text-[20px]">
                Lorem ipsum dolor sit amet consectetur. Ac mi vestibulum mi aliquam. Ultricies amet cursus sit mauris
                dui ut leo. Luctus consequat aliquet faucibus auctor suspendisse augue.
              </div>
            </div>
          </div>
          {/*  */}
          <div className="animation-element appear w-full flex flex-col bg-[#191919] rounded-2xl h-full ">
            <div className="p-[40px] bg-[#0f0f0f] gap-2  h-full  w-full bg-[#161616] rounded-t-2xl">
              <div className="text-[#F9EFEC] text-[25px] uppercase mb-[40px]">
                Lorem ipsum dolor sit amet consectetur.
              </div>
              <div className="text-[#B3B3B2] text-[20px]">
                Lorem ipsum dolor sit amet consectetur. Ac mi vestibulum mi aliquam. Ultricies amet cursus sit mauris
                dui ut leo. Luctus consequat aliquet faucibus auctor suspendisse augue.
              </div>
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
            <div className="flex items-center h-[400px] justify-center gap-2 relative  w-full">
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
            <div className="flex items-center justify-center h-[400px]  gap-2 relative  w-full">
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
    </div>
  );
};

export default NewsLetter;
