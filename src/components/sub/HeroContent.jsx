"use client";

import React from "react";
import { motion } from "framer-motion";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center text-start">
        <motion.div className="flex gap-6 mt-6 text-9xl font-semibold text-white w-full roboto">
          <span>
            Designing tomorrow's
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-orange-500">
              {" "}
              web today{" "}
            </span>
          </span>
        </motion.div>

        <motion.p className="text-lg text-gray-400 my-5 max-w-[600px] poppins">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur,
          dicta voluptas inventore delectus blanditiis omnis! Voluptas
          voluptatem iste animi id amet vitae, nisi sit! Odio accusantium
          corporis dolorum perferendis, alias mollitia molestiae dicta cum
          voluptatem numquam maiores incidunt vel sapiente optio officia fugit
          nobis saepe! Exercitationem ut sit excepturi minima.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default HeroContent;
