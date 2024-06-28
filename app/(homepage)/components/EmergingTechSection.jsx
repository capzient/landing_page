import Image from 'next/image';
import React from 'react';

import { TypewriterEffectSmooth } from '@/components/Animations/typewritter-text';
import { Accordion } from '@/components/common/organisms/accordion';

export const EmergingTechSection = () => (
  <div className="bg-black p-[30px] text-[#B3B3B2] px-10 flex flex-col items-center justify-center ">
    <div className="my-[70px] uppercase text-2xl md:text-6xl inline-flex gap-2 ">
      <TypewriterEffectSmooth
        words={[{ text: 'Emerging' }, { text: 'Technologies', className: 'text-[#F51101] dark:text-[#F51101]' }]}
      />
    </div>
    <div className="w-full flex md:flex-row flex-col justify-between items-start gap-[10px] h-full">
      <div className=" w-full md:w-1/3 p-[10px]">
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
      <div className="md:w-2/3 w-full p-[10px] gap-3 flex flex-col justify-center">
        <Accordion
          bodyClassName="rounded-lg flex flex-col gap-10"
          title={<p className="w-full text-3xl py-[40px] ">Re-imagine with cloud</p>}
          idleCpn={null}
          activeCpn={
            <p className="p-[40px] text-[20px]">
              A recent survey reveals that 86% of companies have bolstered their cloud initiatives in just two years.
              This meteoric rise speaks volumes about the growing reliance on cloud-based solutions and the need for
              robust, scalable, and agile technology platforms. Capzient&apos;s cloud expertise enables you to embrace
              the cloud-based future and stay agile in the face of rapid change. With our solutions, you master the
              cloud and unlock new opportunities for growth and innovation.
            </p>
          }
        />

        <Accordion
          bodyClassName="rounded-lg flex flex-col gap-10"
          title={<p className="w-full text-3xl py-[40px] ">Re-imagine with data and AI</p>}
          idleCpn={null}
          activeCpn={
            <p className="p-[40px] text-[20px]">
              A resounding 67% of organizations plan to ramp up their technology spend, with data and AI at the
              forefront of their investment strategies. This sharp focus reflects the critical role these areas play in
              the future of business, driving transformation, insights, and growth. Capzient&apos;s data and AI
              expertise helps you to tap into these game-changing technologies, maximizing their value and securing your
              position as a leader in your industry.
            </p>
          }
        />

        <Accordion
          bodyClassName="rounded-lg flex flex-col gap-10"
          title={<p className="w-full text-3xl py-[40px] ">Re-imagine spatial computing</p>}
          idleCpn={null}
          activeCpn={
            <p className="p-[40px] text-[20px]">
              Spatial computing bridges the gap between virtual and real worlds, enabling experiences that were once
              considered impossible. With this disruptive technology, businesses can harness immersive experiences and
              augmented intelligence to drive innovation, enhance customer experiences, and disrupt entire industries.
              Capzient&apos;s deep expertise in spatial computing provides a unique opportunity for you to take
              advantage of this rapidly evolving technology, bringing the future into focus and positioning your
              organization for unprecedented growth and success.
            </p>
          }
        />
        <Accordion
          bodyClassName="rounded-lg flex flex-col gap-10"
          title={<p className="w-full text-3xl py-[40px] ">Re-imagine with blockchain</p>}
          idleCpn={null}
          activeCpn={
            <p className="p-[40px] text-[20px]">
              Blockchain is redefining the very concept of ownership in the digital realm. With 76% of CEOs citing
              citizen trust as essential to business competitiveness, blockchain’s inherent transparency and
              immutability present a powerful opportunity to secure that trust. At Capzient, our blockchain solutions
              ensure you’re ahead of the curve, leveraging the transformative power of this technology to create a more
              secure, transparent, and trustworthy business environment that resonates with customers and stakeholders
              alike.
            </p>
          }
        />
      </div>
    </div>
  </div>
);
