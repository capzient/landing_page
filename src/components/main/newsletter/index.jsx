import Image from 'next/image';
import React from 'react';
import { IoMdArrowUp } from 'react-icons/io';
import Card from '@/components/atoms/card';
import Container from '@/components/atoms/container';

const NewsLetter = () => (
  <section className="bg-black p-[30px] text-[#B3B3B2] px-10 h-screen flex flex-col items-center justify-center ">
    <Container containerClassName="p-3 rounded-2xl border h-full w-full flex flex-col gap-2">
      <Card bodyClassName="w-full p-5 flex justify-between bg-[#191919] rounded-2xl">
        <p className="text-3xl">NEWS LETTER</p>
        <div className="flex items-center justify-center gap-2">
          <div className="rounded-full p-2 bg-[#1f1f1f] w-fit h-fit">
            <IoMdArrowUp className="text-[#8a1710] rotate-12" />
          </div>
          <p>All News letters</p>
        </div>
      </Card>
      <div className="grid grid-cols-3 gap-2 grid-rows-2 h-full w-full">
        <div className="animation-element appear w-full flex flex-col bg-[#191919] rounded-2xl h-full">
          <div className="flex items-center justify-center gap-2 relative h-[70%] w-full">
            <Image
              src="/assets/images/welcome/graphic/newsletter1.svg"
              fill
              className="object-cover rounded-t-2xl"
              alt=""
            />
          </div>
          <div className="h-[30%] w-full p-5 flex justify-between">
            <p>Lorem Ipsum Dior</p>{' '}
            <div className="rounded-full p-2 bg-[#1f1f1f] w-fit h-fit">
              <IoMdArrowUp className="text-[#8a1710] rotate-90" />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="animation-element appear w-full flex flex-col bg-[#191919] rounded-2xl h-full ">
          <div className="h-[30%] w-full p-5 flex justify-between">
            <p>Lorem Ipsum Dior</p>{' '}
            <div className="rounded-full p-2 bg-[#1f1f1f] w-fit h-fit">
              <IoMdArrowUp className="text-[#8a1710] rotate-90" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-2  h-[70%] w-full bg-[#191919] rounded-2xl">
            Lorem ipsum dior
          </div>
        </div>
        {/*  */}
        <div className="animation-element appear w-full flex flex-col bg-[#191919] rounded-2xl h-full ">
          <div className="flex items-center justify-center gap-2  h-[70%] w-full bg-[#191919] rounded-2xl">
            Lorem ipsum dior
          </div>
          <div className="h-[30%] w-full p-5 flex justify-between">
            <p>Lorem Ipsum Dior</p>{' '}
            <div className="rounded-full p-2 bg-[#1f1f1f] w-fit h-fit">
              <IoMdArrowUp className="text-[#8a1710] rotate-90" />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="animation-element appear w-full flex flex-col bg-[#191919] rounded-2xl h-full col-span-2">
          <div className="flex items-center justify-center gap-2 relative h-[70%] w-full">
            <Image
              src="/assets/images/welcome/graphic/newsletter1.svg"
              fill
              className="object-cover rounded-t-2xl"
              alt=""
            />
          </div>
          <div className="h-[30%] w-full p-5 flex justify-between">
            <p>Lorem Ipsum Dior</p>{' '}
            <div className="rounded-full p-2 bg-[#1f1f1f] w-fit h-fit">
              <IoMdArrowUp className="text-[#8a1710] rotate-90" />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="animation-element appear w-full flex flex-col bg-[#191919] rounded-2xl h-full">
          <div className="flex items-center justify-center gap-2 relative h-[70%] w-full">
            <Image
              src="/assets/images/welcome/graphic/newsletter2.svg"
              fill
              className="object-cover rounded-t-2xl"
              alt=""
            />
          </div>
          <div className="h-[30%] w-full p-5 flex justify-between">
            <p>Lorem Ipsum Dior</p>
            <div className="rounded-full p-2 bg-[#1f1f1f] w-fit h-fit">
              <IoMdArrowUp className="text-[#8a1710] rotate-90" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default NewsLetter;
