'use client';
import { useState, useRef, useEffect } from 'react';
import Card from '../atoms/card';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { AnimatePresence, delay, motion } from 'framer-motion';

const Accordion = ({ bodyClassName, title, idleCpn, activeCpn }) => {
  const [active, setActive] = useState(false);
  const contentRef = useRef(null);
  const idleRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = active
        ? `${contentRef.current.scrollHeight}px`
        : `${idleRef.current?.scrollHeight ?? 0}px`;

      // contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
    }
  }, [active]);

  const accordionBodyVars = {
    initial: {
      opacity: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
    exit: {
      duration: 0.5,
      opacity: 0,
    },
  };

  return (
    <Card bodyClassName={bodyClassName}>
      <div>
        <div onClick={() => setActive(!active)} className="flex gap-[40px] items-center">
          <div className={`w-full  text-3xl `}>{title}</div>
          {!active && (
            <div
              className="p-[15px] border-[1px] border-[#333333]  rounded-full  bg-[#1F1F1F]"
              initial="initial"
              animate="open"
              exit="exit"
            >
              <FaPlus className="text-[#f51101]" />
            </div>
          )}
          {active && (
            <div
              className="p-[15px] border-[1px] border-[#333333]  rounded-full  bg-[#1F1F1F]"
              initial="initial"
              animate="open"
              exit="exit"
            >
              <FaMinus className="text-[#f51101]" />
            </div>
          )}
        </div>
        <div ref={contentRef} className="height-animated">
          {active && (
            <AnimatePresence>
              <motion.div variants={accordionBodyVars} initial="initial" animate="open" exit="exit">
                {activeCpn}
              </motion.div>
            </AnimatePresence>
          )}
          {!active && idleCpn && (
            <AnimatePresence>
              <motion.div variants={accordionBodyVars} initial="initial" animate="open" exit="exit">
                <div ref={idleRef}>{idleCpn}</div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </Card>
  );
};

export default Accordion;
