"use client";

import React from "react";
import { motion } from "framer-motion";
import WithRedRect from "../utils/withRedRect";
import {
  MobileLinkVars,
  ContainerVars,
} from "./../utils/animations/TextAnimation";

const HeroContent = () => {
  return (
    <motion.div
      variants={ContainerVars}
      initial="initial"
      animate="animate"
      className="flex flex-col items-center justify-center px-3 md:px-20 mt-20 w-full z-[20]"
    >
      <motion.div className="h-full w-full flex flex-col justify-evenly text-start">
        <div className="overflow-hidden">
          <motion.div
            variants={MobileLinkVars}
            initial="initial"
            animate="open"
            className="overflow-hidden tracking-wider md:mt-6 text-4xl md:text-9xl font-medium text-white w-full roboto items-center"
          ></motion.div>
          <motion.div
            variants={MobileLinkVars}
            initial="initial"
            animate="open"
            className="overflow-hidden tracking-wider md:mt-6 text-4xl md:text-9xl font-medium text-white w-full roboto items-center"
          >
            <div className="overflow-hidden">
              <motion.div variants={MobileLinkVars}>WE HELP</motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div variants={MobileLinkVars}>LEADERS BUILD</motion.div>
            </div>
            <motion.div
              variants={MobileLinkVars}
              className="text-6xl md:text-[140px] font-extrabold"
            >
              <WithRedRect>TOMORROW</WithRedRect>
            </motion.div>
          </motion.div>
        </div>
        <motion.div className="pt-32 flex flex-row justify-between overflow-hidden">
          <motion.div
            variants={MobileLinkVars}
            initial="initial"
            animate="open"
            whileInView="open"
            className="text-white w-8 md:w-auto text-xl md:text-4xl roboto text-start flex items-center"
          >
            <WithRedRect>Capabilities that fuel the future</WithRedRect>
          </motion.div>
          <div className="text-white border text-sm md:text-lg border-white px-5 py-[2px] md:px-16 md:py-6 rounded-md hover:bg-white hover:text-black">
            Power your project now
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

///doing
