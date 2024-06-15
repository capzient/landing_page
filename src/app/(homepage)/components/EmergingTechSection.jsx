import Image from 'next/image';
import React from 'react';

import { Accordion } from '@/components/common/organisms/accordion';

export const EmergingTechSection = () => (
  <div className="bg-black p-[30px] text-[#B3B3B2] px-10 flex flex-col items-center justify-center ">
    <div className="animation-element appear my-[70px] uppercase text-2xl md:text-6xl inline-flex gap-2 ">
      Emerging <span className="text-[#f51101]">Technologies</span>
    </div>
    <div className="w-full flex md:flex-row flex-col justify-between items-start gap-[10px] h-full">
      <div className="animation-element appear w-1/3 p-[10px]">
        <div className="relative w-full h-full rounded-lg">
          <Image
            src="/assets/images/industry/sub_container.svg"
            width={500}
            height={500}
            layout="responsive"
            alt="graphic"
            className="object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="w-2/3 p-[10px] gap-3 flex flex-col justify-center">
        <Accordion
          bodyClassName="rounded-lg flex flex-col gap-10"
          title={<p className="w-full text-3xl py-[40px] ">Re-imagine with cloud</p>}
          idleCpn={null}
          activeCpn={
            <p className="p-[40px] text-[20px]">
              The timeline varies depending on the project&apos;s complexity and requirements. Our team strives to
              deliver projects on time while maintaining the highest quality standards.
            </p>
          }
        />

        <Accordion
          bodyClassName="rounded-lg flex flex-col gap-10"
          title={<p className="w-full text-3xl py-[40px] ">Re-imagine with cloud</p>}
          idleCpn={null}
          activeCpn={
            <p className="p-[40px] text-[20px]">
              The timeline varies depending on the project&apos;s complexity and requirements. Our team strives to
              deliver projects on time while maintaining the highest quality standards.
            </p>
          }
        />

        <Accordion
          bodyClassName="rounded-lg flex flex-col gap-10"
          title={<p className="w-full text-3xl py-[40px] ">Re-imagine with cloud</p>}
          idleCpn={null}
          activeCpn={
            <p className="p-[40px] text-[20px]">
              The timeline varies depending on the project&apos;s complexity and requirements. Our team strives to
              deliver projects on time while maintaining the highest quality standards.
            </p>
          }
        />
        <Accordion
          bodyClassName="rounded-lg flex flex-col gap-10"
          title={<p className="w-full text-3xl py-[40px] ">Re-imagine with cloud</p>}
          idleCpn={null}
          activeCpn={
            <p className="p-[40px] text-[20px]">
              The timeline varies depending on the project&apos;s complexity and requirements. Our team strives to
              deliver projects on time while maintaining the highest quality standards.
            </p>
          }
        />
        <Accordion
          bodyClassName="rounded-lg flex flex-col gap-10"
          title={<p className="w-full text-3xl py-[40px] ">Re-imagine with cloud</p>}
          idleCpn={null}
          activeCpn={
            <p className="p-[40px] text-[20px]">
              The timeline varies depending on the project&apos;s complexity and requirements. Our team strives to
              deliver projects on time while maintaining the highest quality standards.
            </p>
          }
        />
      </div>
    </div>
  </div>
);
