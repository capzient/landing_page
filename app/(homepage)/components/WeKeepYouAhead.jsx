'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { TypewriterEffectSmooth } from '@/components/Animations/typewritter-text';
import { Card } from '@/components/common/atoms/card';

const content = {
  research: {
    title: 'Research and Development',
    text: `We unlock your potential for disruption. Our relentless R&D process and dedicated co-investment in emerging technologies empower you to reinvent your business models, develop revolutionary products, and disrupt entire markets. Partner with us and harness the power of science and technology, transforming challenges into breakthroughs and shaping a brighter future for your company and your industry.`,
  },
  accelerator: {
    title: 'Business Accelerator',
    text: `Capzient accelerates your innovation journey, ushering you into emerging tech markets with unprecedented speed. Our incubation services leverage cutting-edge solutions tailored to your specific needs, driving your business to the forefront of the transformation. Harness the potential of the future, today, with Capzient's trailblazing solutions.`,
  },
  delivery: {
    title: 'Delivery',
    text: `Capzient empowers your business with assured innovation, delivering reliable, repeatable, and scalable outcomes. Leverage our battle-tested solutions, proven to deliver rapid and decisive value in your industry. Our codified approaches ensure swift and successful transformation, turning change into opportunity with unprecedented speed.`,
  },
  consulting: {
    title: 'Consulting Services',
    text: `At Capzient, we unleash the full power of technology to drive transformative solutions for your organization. Our consulting services work in tandem with your strategic vision to identify and prioritize breakthrough opportunities across the value chain, creating sustainable, differentiated value that sets you apart from the competition. With Capzient, you build a future-ready enterprise poised for sustained growth, equipped with a culture of innovation and discovery.`,
  },
};

export const WeKeepYouAhead = () => {
  const [selected, setSelected] = useState('research');

  return (
    <div className="lg:px-[10vw] relative  md:px-0 bg-black p-[30px] text-[#B3B3B2] flex flex-col items-center justify-center ">
      <div className=" my-[70px] font-bold uppercase text-2xl md:text-6xl inline-flex gap-2 ">
        <TypewriterEffectSmooth
          words={[
            { text: 'We' },
            { text: 'Keep' },
            { text: 'you' },
            { text: 'Ahead', className: 'text-[#F51101] dark:text-[#F51101]' },
          ]}
        />
      </div>
      <div className="flex md:flex-row flex-col">
        <div className="md:w-1/2 bg-black text-white p-8">
          <ul>
            {Object.keys(content).map((key) => (
              <motion.li
                key={key}
                className={`py-6 cursor-pointer text-[24px] uppercase flex items-center ${
                  selected === key ? 'text-red-500' : ''
                }`}
                onMouseEnter={() => setSelected(key)}
                initial={{ x: 0 }}
                whileHover={{ x: 10 }}
                transition={{ type: 'inertia', stiffness: 300 }}
              >
                <motion.div
                  className="w-3 h-3 bg-red-500 mr-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: selected === key ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                {content[key].title}
              </motion.li>
            ))}
          </ul>
        </div>
        <Card bodyClassName={'md:w-1/2 p-10 md:p-[60px]'}>
          <motion.div
            key={selected}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl mb-4 text-white font-bold">{content[selected].title}</h2>
            <hr className="my-6 bg-[#262626] border-[#262626]" />
            <p>{content[selected].text}</p>
          </motion.div>
        </Card>
      </div>
    </div>
  );
};
