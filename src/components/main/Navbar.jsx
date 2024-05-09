import Image from "next/image";
import React from "react";
import "./nav.css";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 backdrop-0 z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#hero" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/assets/images/capzient_logo_white.png"
            alt="logo"
            width={200}
            height={200}
            className="cursor-pointer"
          />
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto mr-[15px] px-[20px] py-[10px] text-white tracking-wider">
            <a href="#about-me" className="link link--metis">
              About Us
            </a>
            <a href="#skills" className="link link--metis">
              Services
            </a>
            <a href="#projects" className="link link--metis">
              Client Reviews
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          <button className="button">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
