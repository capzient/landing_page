// Idk the way to work around with this rule so, I disabled it
/* eslint-disable arrow-body-style */

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { MobileNavbar } from '../MobileNavbar';

const navlinks = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '/about-us' },
  { text: 'Emerging Technology', href: 'capabilities/emerging-tech' },
  { text: 'Careers', href: '#careers' },
  // { text: 'Contact', href: '/contact' },
];

export const Navbar = () => {
  return (
    <>
      <div className="py-5  px-[20px] sm:px-[50px] md:px-[100px] lg:px-[150px] xl:px-[200px] flex justify-between items-center bg-black w-full">
        <div>
          <Image
            src="/assets/images/capzient_logo_white.png"
            alt="logo"
            width={100}
            height={100}
            className="h-auto w-[80px] md:w-[100px] cursor-pointer"
          />
        </div>
        <div className="hidden xl:flex gap-5 items-center">
          <ul className="flex  gap-1">
            {navlinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="text-white text-[14px] bg-black duration-200 hover:bg-[#161616] px-4 py-2 rounded-lg"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <div className='hidden xl:block'>
            <Link href="/contact">
              <button className="px-5 py-2 bg-[#4f1ad6] text-white text-[14px] font-medium rounded-lg">Contact</button>
            </Link>
          </div>
        </div>
        <div className="block xl:hidden">
          <MobileNavbar />
        </div>
      </div>
    </>
  );
};
