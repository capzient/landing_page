"use client";

import React from "react";
import { motion } from "framer-motion";
import WithRedRect from "../utils/withRedRect";
import { useInView } from "react-intersection-observer";

import {
  MobileLinkVars,
  ContainerVars,
} from "./../utils/animations/TextAnimation";

const HeroContent = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      variants={ContainerVars}
      initial="initial"
      className="absolute top-0 h-[100vh] flex items-center justify-center px-3 w-full z-[20]"
    >
      <motion.div className="w-full flex flex-col gap-0 text-start px-[50px]">
        <div className="h-[70vh] flex items-end">
          <motion.div
            variants={MobileLinkVars}
            initial="initial"
            animate={inView ? "open" : "initial"}
            className="overflow-hidden tracking-wider md:mt-6 text-4xl md:text-9xl font-medium text-white w-full roboto items-center"
          >
            <div className="overflow-hidden">
              <motion.div
                variants={MobileLinkVars}
                initial="initial"
                animate={inView ? "open" : "initial"}
              >
                WE HELP
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                variants={MobileLinkVars}
                initial="initial"
                animate={inView ? "open" : "initial"}
              >
                LEADERS BUILD
              </motion.div>
            </div>
            <motion.div
              variants={MobileLinkVars}
              initial="initial"
              animate={inView ? "open" : "initial"}
              className="text-6xl md:text-[140px] font-extrabold"
            >
              <WithRedRect>TOMORROW</WithRedRect>
            </motion.div>
          </motion.div>
        </div>
        <motion.div className="flex flex-row h-[30vh] items-center justify-between overflow-hidden">
          <motion.div
            variants={MobileLinkVars}
            initial="initial"
            animate={inView ? "open" : "initial"}
            className="text-white w-8 md:w-auto text-xl md:text-4xl roboto text-start flex items-center"
          >
            <WithRedRect>Capabilities that fuel the future</WithRedRect>
          </motion.div>
          <p className="text-white border text-sm md:text-lg border-white px-5 py-[2px] md:px-16 md:py-6 rounded-md hover:bg-white hover:text-black cursor-pointer">
            Power your project now
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
