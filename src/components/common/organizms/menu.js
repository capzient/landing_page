'use client';

import { useState } from 'react';

const Menu = ({ data, itemClassName }) => {
  const [active, setActive] = useState(0);
  return (
    <>
      {data.map((aItem, idx) => (
        <div
          onClick={() => setActive(idx)}
          className="animation-element appear cursor-pointer hover:text-white duration-500 flex items-center"
        >
          <div
            style={{
              opacity: idx === active ? 1 : 0,
              transitionDuration: '0.5s',
            }}
            className="bg-red-500 w-[10px] h-[10px]"
          />
          <div key={idx} className={`${active === idx ? 'text-white' : ''} ${itemClassName}`}>
            {aItem}
          </div>
        </div>
      ))}
    </>
  );
};

export default Menu;
