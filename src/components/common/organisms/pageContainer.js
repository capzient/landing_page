'use client';
import { AnimatePresence, motion } from 'framer-motion';

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
      ease: 'circOut',
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

const PageContainer = ({ children }) => (
  <AnimatePresence>
    <motion.div variants={extraContainerVars} initial="initial" animate="open" exit="exit" className="relative">
      {children}
    </motion.div>
  </AnimatePresence>
);
export default PageContainer;
