import Image from 'next/image';
import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa6';

const EmergingTech = () => (
  <div className="bg-black p-[30px] text-[#B3B3B2] px-10 min-h-screen flex flex-col items-center justify-center ">
    <div className="uppercase text-2xl md:text-6xl inline-flex gap-2 mb-10">
      Emerging <span className="text-[#f51101]">Technologies</span>
    </div>
    <div className="w-full flex md:flex-row flex-col justify-between gap-10 h-full">
      <div className="w-1/3 p-10">
        <div className="relative w-full h-full rounded-lg">
          <Image
            src="/assets/images/industry/sub_container.svg"
            fill
            alt="graphic"
            className="object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="w-2/3 p-10 gap-3 flex flex-col justify-center">
        <div className="bg-[#191919] rounded-lg p-8 flex flex-row gap-10 ">
          <div className="w-[80%] h-full flex flex-col gap-2">
            <p className="text-3xl">Re-imagine with cloud</p>
            <hr className=" border-[#1f1f1f]" />
            <p className="text-sm">
              The timeline varies depending on the project&apos;s complexity and requirements. Our team strives to
              deliver projects on time while maintaining the highest quality standards.
            </p>
          </div>
          <div className="w-[20%] flex items-center justify-center h-full ">
            <div className="p-2 rounded-full  bg-[#232323]">
              <FaMinus className="text-[#f51101]" />
            </div>
          </div>
        </div>
        <div className="bg-[#191919] rounded-lg p-8 flex flex-row gap-10">
          <div className="w-[80%] h-full flex flex-col gap-2">
            <p className="text-3xl">Re-imagine with data and ai</p>
          </div>
          <div className="w-[20%] flex items-center justify-center h-full ">
            <div className="p-2 rounded-full  bg-[#232323]">
              <FaPlus className="text-[#f51101]" />
            </div>
          </div>
        </div>
        <div className="bg-[#191919] rounded-lg p-8 flex flex-row gap-10">
          <div className="w-[80%] h-full flex flex-col gap-2">
            <p className="text-3xl">Re-imagine with blockchain</p>
          </div>
          <div className="w-[20%] flex items-center justify-center h-full ">
            <div className="p-2 rounded-full  bg-[#232323]">
              <FaPlus className="text-[#f51101]" />
            </div>
          </div>
        </div>
        <div className="bg-[#191919] rounded-lg p-8 flex flex-row gap-10">
          <div className="w-[80%] h-full flex flex-col gap-2">
            <p className="text-3xl">Re-imagine spatial computing</p>
          </div>
          <div className="w-[20%] flex items-center justify-center h-full ">
            <div className="p-2 rounded-full  bg-[#232323]">
              <FaPlus className="text-[#f51101]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default EmergingTech;
