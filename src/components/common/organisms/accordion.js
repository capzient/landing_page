'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { Card } from '../atoms/card';

export const Accordion = ({ bodyClassName, title, idleCpn, activeCpn }) => {
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);
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
        delay: 0.5,
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      duration: 0.5,
    },
  };

  return (
    <Card bodyClassName={bodyClassName} noHover>
      <div>
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => setActive(!active)}
          className="px-[40px] flex justify-between items-center"
        >
          <div className={`text-3xl text-balance flex justify-between`}>
            <div className={`${hover ? 'animated-title duration-500' : 'animated-title-idle'}`}>{title}</div>
          </div>
          <div
            className="relative min-w-[50px] min-h-[50px] flex items-center justify-center  border-[1px] border-[#333333]  rounded-full  bg-[#1F1F1F]"
            initial="initial"
            animate="open"
            exit="exit"
          >
            <div className="w-[15px] h-[2px] rounded-md bg-red-500" />
            <div
              style={{
                transform: `rotate(${active ? 360 : 90}deg)`,
                opacity: active ? 0 : 1,
                transitionDuration: '0.5s',
              }}
              className="absolute w-full h-full left-[0.5px] top-[0.5px] flex items-center justify-center  rounded-full"
              initial="initial"
              animate="open"
              exit="exit"
            >
              <div className="w-[15px] h-[2px] rounded-md bg-red-500" />
            </div>
          </div>
        </div>
        <div ref={contentRef} className="bg-[#131313]  height-animated">
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
