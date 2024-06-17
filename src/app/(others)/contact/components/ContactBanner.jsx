import Image from 'next/image';
import React from 'react';

export const ContactBanner = () => (
  <div className="animation-element appear flex items-end  relative h-[50dvh] w-full mt-20">
    <Image src={'/assets/images/contact/subContainer.svg'} fill alt="" className="object-cover rounded-2xl" />
    <div className="text-white text-[70px] z-20  p-[30px] w-[750px]">
      LET&apos;S <br /> CONNECT
    </div>
  </div>
);
