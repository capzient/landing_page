'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import { ContainerVars, MobileLinkVars } from '@/utils/animations/TextAnimation';
import { WithRedRect } from '@/utils/withRedRect';

export const HeroContent = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      variants={ContainerVars}
      initial="initial"
      className="absolute top-0 h-[100vh] flex items-center justify-center px-3 w-full z-[20] "
    >
      <motion.div className="w-full flex flex-col gap-0 text-start px-10 md:px-[50px]">
        <div className="h-[70vh] flex items-end">
          <motion.div
            variants={MobileLinkVars}
            initial="initial"
            animate={inView ? 'open' : 'initial'}
            className="overflow-hidden tracking-wider md:mt-6 text-4xl md:text-9xl font-medium text-white w-full roboto items-center"
            // style={{ textShadow: '8px 8px 16px rgba(0, 0, 0, 1)' }}
          >
            <div className="overflow-hidden">
              <motion.div variants={MobileLinkVars} initial="initial" animate={inView ? 'open' : 'initial'}>
                WE HELP
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div variants={MobileLinkVars} initial="initial" animate={inView ? 'open' : 'initial'}>
                LEADERS BUILD
              </motion.div>
            </div>
            <motion.div
              variants={MobileLinkVars}
              initial="initial"
              animate={inView ? 'open' : 'initial'}
              className="text-5xl md:text-[140px] font-extrabold"
              // style={{ textShadow: '8px 8px 16px rgba(0, 0, 0, 1)' }}
            >
              <WithRedRect>TOMORROW</WithRedRect>
            </motion.div>
          </motion.div>
        </div>
        {/* <motion.div className="flex flex-col md:flex-row h-[30vh] md:items-center md:justify-between overflow-hidden gap-6">
          <motion.div
            variants={MobileLinkVars}
            initial="initial"
            animate={inView ? 'open' : 'initial'}
            className="text-white md:w-auto text-xl md:text-4xl roboto text-start flex items-center"
            // style={{ textShadow: '8px 8px 16px rgba(0, 0, 0, 1)' }}
          >
            <WithRedRect>Capabilities that fuel the future</WithRedRect>
          </motion.div>
          <Link
            href="/contact"
            className="animation-element appear text-white border text-sm md:text-lg border-white px-5 py-[2px] md:px-16 md:py-6 rounded-md hover:bg-[#ffffff9f] hover:text-black cursor-pointer duration-500"
          >
            Power your project now
          </Link>
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
};
