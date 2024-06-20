'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';

const extraContainerVars = {
  initial: {
    right: '-100vw',
    transition: {
      duration: 0.8,
    },
  },
  open: {
    right: '0px',
    transition: {
      duration: 0.8,
      ease: 'circIn',
    },
  },
  exit: {
    right: '-100vw',
    transition: {
      duration: 0.8,
      ease: 'circIn',
    },
  },
};
const extraContainerBgVars = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.8,
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'circIn',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: 'circIn',
    },
  },
};

export const ExtraContentContainer = ({ children, open, setOpen, extraCpn }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflowY = 'hidden';
    } else {
      setTimeout(() => {
        document.body.style.overflowY = 'auto';
      }, 800);
    }
  }, [open]);

  return (
    <div>
      {children}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={extraContainerVars}
            initial="initial"
            animate="open"
            exit="exit"
            style={{
              zIndex: 100,
            }}
            className="fixed bg-[#0b0b0b] w-[100vw] h-[100vh] top-0"
          >
            <div
              onClick={() => setOpen(false)}
              style={{ position: 'absolute' }}
              className="top-[20px] text-[25px] right-[20px] text-white"
            >
              <div className="flex gap-[10px] items-center text-white">
                <div className="link link--metis ">Close</div>
                <IoMdClose />
              </div>
            </div>

            <div className="min-h-[100vh] pt-[50px] overflow-x-auto overflow-y-hidden">{extraCpn}</div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={extraContainerBgVars}
            initial="initial"
            animate="open"
            exit="exit"
            style={{
              zIndex: 99,
            }}
            className="fixed p-[20px] bg-black w-[100vw] h-[100vh] top-0 left-0"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
