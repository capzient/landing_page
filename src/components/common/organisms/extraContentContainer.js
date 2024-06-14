'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';

const extraContainerVars = {
  initial: {
    right: '-100vw',
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
  open: {
    right: '0px',
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: 'circIn',
    },
  },
  exit: {
    opacity: 0,
    right: '-100vw',
    transition: {
      duration: 0.7,
      ease: 'circOut',
    },
  },
};

const ExtraContentContainer = ({ children, open, setOpen, extraCpn }) => (
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
  </div>
);
export default ExtraContentContainer;
