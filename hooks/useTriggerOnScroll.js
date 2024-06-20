'use client';
import { useEffect, useState } from 'react';

function getOffset(el) {
  let _x = 0;
  let _y = 0;
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft;
    _y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return { top: _y, left: _x };
}
function hasScrolledTo(el) {
  if (!el) return false;
  const { top } = getOffset(el);

  const offset = window.innerHeight;
  return top - offset <= window.pageYOffset;
}
export default function useTriggerOnScroll(ref, onTrigger) {
  const [triggered, setTriggered] = useState(false);
  useEffect(() => {
    const viewed = hasScrolledTo(ref.current);
    if (viewed) {
      setTriggered(true);
      onTrigger(true);
    }
    function onScroll() {
      const viewed = hasScrolledTo(ref.current);

      if (viewed && !triggered) {
        window.removeEventListener('scroll', onScroll);
        setTriggered(true);
        onTrigger(true);
      }
      // } else if (!viewed && triggered) {
      //   window.removeEventListener('scroll', onScroll);
      //   setTriggered(false);
      //   onTrigger(false);
      // }
    }
    setTimeout(() => {
      window.addEventListener('scroll', onScroll);
    }, 1000);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [ref, onTrigger, triggered]);
}
