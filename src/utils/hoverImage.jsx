'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';

const descriptionVars = {
  initial: {
    opacity: 0,
    left: '100%',
  },
  open: {
    opacity: 1,
    left: '0px',
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    left: '-100%',
    transition: {
      duration: 0.3,
    },
  },
};
const expandVars = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const HoverImage = ({ className, url, title, description }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative ${className} overflow-hidden`}
    >
      <div
        className="absolute w-full h-full duration-300 top-0 left-0"
        style={
          hovered
            ? {
                width: '200%',
              }
            : {
                width: '100%',
              }
        }
      >
        <Image src={url} alt="" fill className="object-cover " />
      </div>
      <div
        className="absolute w-full h-full top-0 left-0 bg-transparent duration-300"
        style={
          hovered
            ? {
                transition: '0.3s cubic-bezier(0.6, 0.04, 0.98, 0.335)',
                backdropFilter: 'blur(20px)',
              }
            : {
                transition: '0.3s cubic-bezier(0.6, 0.04, 0.98, 0.335)',
                backdropFilter: 'blur(0px)',
              }
        }
      ></div>
      <div className="text-[40px] text-white text-[30px] p-[40px] px-[50px] pointer-events-none absolute w-full left-0 h-full top-0 ">
        {title}
      </div>
      <AnimatePresence>
        {hovered && (
          <motion.div
            variants={descriptionVars}
            initial="initial"
            animate="open"
            exit="exit"
            className="text-white text-[30px] p-[50px] pointer-events-none absolute w-full left-0 h-full top-0 
            flex items-center justify-center"
          >
            {description}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {hovered && (
          <motion.div
            variants={expandVars}
            initial="initial"
            animate="open"
            exit="exit"
            className="text-white text-[20px] p-[20px] pointer-events-none absolute w-full left-0 h-full top-0 
            flex items-end flex-col justify-end"
          >
            <div>
              <div className="flex gap-[10px] items-center text-white">
                <div className="link link--metis text-white">Expand</div>
                <FaChevronRight />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
