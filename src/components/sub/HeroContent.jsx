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
      className="absolute t-0 h-[100vh] items-center justify-center px-3  w-full z-[20]"

    >
      <motion.div className="w-full flex flex-col gap-[0px] text-start px-[50px]">
        <div className="h-[70vh] flex items-end">
          {/* <motion.div
            variants={MobileLinkVars}
            initial="initial"
            animate="open"
            className="overflow-hidden tracking-wider md:mt-6 text-4xl md:text-9xl font-medium text-white w-full roboto items-center"
          ></motion.div> */}
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
        <motion.div className="flex flex-row h-[30vh] items-center justify-between overflow-hidden">
          <motion.div
            variants={MobileLinkVars}
            initial="initial"
            animate="open"
            whileInView="open"
            className="text-white w-8 md:w-auto text-xl md:text-4xl roboto text-start flex items-center"
          >
            <WithRedRect>Capabilities that fuel the future</WithRedRect>
          </motion.div>
          <p className="text-white border text-sm md:text-lg border-white px-5 py-[2px] md:px-16 md:py-6 rounded-md hover:bg-white hover:text-black">
            Power your project now
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

///doing
