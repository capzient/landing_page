'use client';

import { useState } from 'react';

export const Menu = ({ data, itemClassName }) => {
  const [preActive, setPreActive] = useState(0);
  const [active, setActive] = useState(0);
  return (
    <>
      {data.map((aItem, idx) => (
        <div
          key={idx}
          onMouseEnter={() => {
            setPreActive(idx);
          }}
          onMouseLeave={() => {
            setPreActive(active);
          }}
          onClick={() => setActive(idx)}
          className="animation-element appear cursor-pointer hover:text-white duration-500 flex items-center"
        >
          <div
            style={{
              opacity: idx === active || idx === preActive ? 1 : 0,
              transitionDuration: '0.5s',
            }}
            className="bg-red-500 w-[10px] h-[10px]"
          />
          <div
            style={{
              marginLeft: idx === active || idx === preActive ? '10px' : '0px',
              transitionDuration: '0.5s',
            }}
            key={idx}
            className={`${active === idx ? 'text-white' : ''} ${itemClassName}`}
          >
            {aItem}
          </div>
        </div>
      ))}
    </>
  );
};
