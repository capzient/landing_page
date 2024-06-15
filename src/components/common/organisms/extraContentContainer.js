'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';

const extraContainerVars = {
  initial: {
    right: '-100vw',
    transition: {
      duration: 1,
    },
  },
  open: {
    right: '0px',
    transition: {
      duration: 1,
      ease: 'circIn',
    },
  },
  exit: {
    right: '-100vw',
    transition: {
      duration: 1,
      ease: 'circIn',
    },
  },
};
const extraContainerBgVars = {
  initial: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'circIn',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
      ease: 'circIn',
    },
  },
};

export const ExtraContentContainer = ({ children, open, setOpen, extraCpn }) => (
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
          className="fixed p-[20px] bg-[#161616] w-[100vw] h-[100vh] top-0"
        >
          <div
            onClick={() => setOpen(false)}
            style={{ position: 'absolute' }}
            className="link link--metis text-[25px] right-[20px] text-white"
          >
            <div className="flex gap-[5px] items-center text-white">
              <IoMdClose />
              Close
            </div>
          </div>
          {extraCpn}
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
