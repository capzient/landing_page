"use client";

import React from "react";
import { motion } from "framer-motion";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center px-3 md:px-20 mt-40 w-full z-[20]"
    >
      <motion.div className="h-full w-full flex flex-col  justify-evenly text-start">
        <motion.div className="flex tracking-wider  md:mt-6 text-4xl md:text-9xl font-medium text-white w-full roboto items-center">
          <span>
            WE HELP <br /> LEADERS BUILD
            <span className="font-extrabold text-6xl md:text-[140px] ">
              {" "}
              TOMMOROW{" "}
            </span>
            <span className="relative inline-block">
              <div className="absolute top-0 left-0 w-6 h-5 bg-red-500 rounded-none mt-[-20px] ml-[-20px]"></div>
            </span>
          </span>
        </motion.div>
        <motion.div className="pt-[470px] md:pt-32 flex flex-row justify-between">
          <motion.p className="text-white w-8 md:w-auto text-xl md:text-4xl roboto text-start  flex items-center">
            Capabilities that fuel the future{" "}
            <span className="relative inline-block">
              <div className="absolute top-0 left-0 w-3 h-2 bg-red-500 rounded-none ml-1"></div>
            </span>
          </motion.p>
          <button className="text-white border text-sm md:text-lg border-white px-5 py-[2px] md:px-16 md:py-6 rounded-md hover:bg-white hover:text-black">
            Power your project now
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
