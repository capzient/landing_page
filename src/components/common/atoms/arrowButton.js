'use client';
import Image from 'next/image';
import { useState } from 'react';

const ArrowButton = ({ titleClassName, hoverColor, arrowType, arrowClassName, title }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="animation-element appear cursor-pointer flex items-center duration-300 hover:gap-[20px] gap-[15px]"
    >
      <div
        style={{
          backgroundColor: hovered ? hoverColor : '',
        }}
        className={arrowClassName}
      >
        <Image src={`/assets/images/common/arrow_${arrowType}.svg`} width={20} height={20} alt="" />
      </div>

      {title && <div className={titleClassName}>{title}</div>}
    </div>
  );
};
export default ArrowButton;
