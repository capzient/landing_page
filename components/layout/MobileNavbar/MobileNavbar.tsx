'use client';


import Link from 'next/link';
import React, { useState } from 'react';

import { AboutIcon, CareersIcon, CloseIcon, ContactIcon, HomeIcon, MenuIcon, TechnologyIcon } from '../../../icons';

export const MobileNavbar = () => {
  const [showNabarContainer, setShowNavbarContainer] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const navlinks = [
    { text: 'Home', href: '/', icon: HomeIcon },
    { text: 'About', href: '/about-us', icon: AboutIcon },
    { text: 'Emerging Technology', href: 'capabilities/emerging-tech', icon: TechnologyIcon },
    { text: 'Careers', href: '#careers', icon: CareersIcon },
    { text: 'Contact', href: '/contact', icon: ContactIcon },
  ];

  const handleNavbar = () => {
    if (showNavbar) {
      setShowNavbar(false);

      const timeout = setTimeout(() => {
        setShowNavbarContainer(false);
      }, 100);

      return () => {
        clearTimeout(timeout);
      };
    }

    setShowNavbarContainer(true);
    const timeout = setTimeout(() => {
      setShowNavbar(true);
    }, 100);
    return () => {
      clearTimeout(timeout);
    };
  };

  return (
    <>
      <div className="size-[50px]  flex justify-center items-center rounded-full cursor-pointer" onClick={handleNavbar}>
        <MenuIcon className="text-white text-[20px] " />
      </div>
      <div className={`${showNabarContainer ? 'block' : 'hidden'}  fixed top-0 left-0 z-50 w-full h-screen  flex `}>
        <div
          className={`w-full h-screen duration-200  ${showNavbar ? 'bg-[#00000085]' : 'bg-[#00000000]'} `}
          onClick={handleNavbar}
        />
        <div
          className={`min-w-[280px] sm:min-w-[350px] h-screen bg-[#1e1e1e] ${
            showNavbar ? 'mr-0' : '-mr-[100%]'
          } duration-200`}
          onClick={() => {}}
        >
          <div className="w-full flex justify-end p-5">
            <div
              className="size-[50px] bg-[#282828] flex justify-center items-center rounded-full cursor-pointer"
              onClick={handleNavbar}
            >
              <CloseIcon className="text-white text-[20px] " />
            </div>
          </div>
          <div>
            <ul className="hover:text-[#99a4b7] text-white">
              {navlinks.map((link, idx) => (
                <li key={idx} className=" mt-5 first:mt-0  hover:text-white duration-200 " >
                  <Link href={link.href} className=" text-[14px] font-medium flex items-center gap-3 px-4 py-2 ">
                    <link.icon className="text-[18px]" />
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
