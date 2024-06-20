'use client';
import { motion, stagger, useAnimate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const AnimatedTitle = ({ title, className }) => {
  const [scope, animate] = useAnimate();
  const wordsArray = title.split(' ');
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      animate(
        'span',
        {
          opacity: 1,
        },
        {
          duration: 2,
          delay: stagger(0.2),
        },
      );
    }
  }, [animate, inView, wordsArray]);

  const renderWords = () => (
    <motion.div ref={scope}>
      {wordsArray.map((word, idx) => (
        <motion.span key={word + idx} className="opacity-0">
          {word}{' '}
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <div className={className} ref={ref}>
      <div className="mt-4">
        <div className="leading-snug tracking-wide">{renderWords()}</div>
      </div>
    </div>
  );
};
