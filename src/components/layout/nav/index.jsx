"use client";

import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, delay, motion } from "framer-motion";
import { IoMdReturnRight } from "react-icons/io";

import MenuItem from "./menuItem";
import menus from "./menus";

import "./nav.css";

const dropdownContainerVars = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.3,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.5,
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const dropdownContentVars = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    opacity: 1,
    transition: {
      delay: 0.5,
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.5,
    },
  },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [extendElement, setExtendElement] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className="nav w-full  fixed top-0 backdrop-0 z-50  text-[20px]">
      <div className="w-full h-full flex flex-row items-center relative z-[52] justify-between mx-auto">
        <a href="/" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/assets/images/capzient_logo_white.png"
            alt="logo"
            width={300}
            height={200}
            className="cursor-pointer"
          />
        </a>
        <div className="h-full flex-row items-center justify-between hidden md:flex">
          <div className="flex items-center justify-between w-full h-auto  px-[20px] py-[10px] gap-x-7 text-white tracking-wider">
            {menus.map((aMenu, idx) => (
              <MenuItem
                key={idx}
                id={idx}
                title={aMenu.title}
                // setDropDownOpen={setDropDownOpen}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                extend={
                  aMenu.extend && (
                    <div
                      onMouseLeave={() => {
                        setActiveMenu(null);
                        setExtendElement(null);
                      }}
                    >
                      {aMenu.extend ?? ""}
                    </div>
                  )
                }
                setExtendElement={setExtendElement}
              />
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <button className="button text-white">
            <div className="flex gap-[5px] items-center text-white">
              <IoMdReturnRight />
              Contact Us
            </div>
          </button>
        </div>

        <div
          className="cursor-pointer md:hidden text-md text-white px-4 "
          onClick={toggleMenu}
        >
          Menu
        </div>
      </div>
      <AnimatePresence>
        {extendElement && (
          <motion.div
            variants={dropdownContainerVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute w-full left-0 top-0 origin-top z-[1] bg-blue-700 text-white p-10"
          >
            {extendElement && (
              <motion.div
                variants={dropdownContentVars}
                initial="initial"
                animate="open"
                exit="initial"
              >
                {extendElement}
              </motion.div>
            )}

          </motion.div>
        )}
      </AnimatePresence>
      {/* <AnimatePresence>
                {open && (
                    <motion.div
                        variants={dropdownContentVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed left-0 top-0 w-full h-screen origin-top bg-blue-500 text-white p-10"
                    >
                        <div className="flex h-full flex-col">
                            <div className="flex justify-between">
                                <h1 className="text-lg text-white"> Capzient</h1>
                                <p
                                    className="cursor-pointer text-md text-black"
                                    onClick={toggleMenu}
                                >
                                    Close
                                </p>
                            </div>
                            <motion.div
                                variants={dropdownContentVars}
                                initial="initial"
                                animate="open"
                                exit="initial"
                                className="flex flex-col h-full justify-center items-center gap-4"
                            >
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        variants={mobileLinkVars}
                                        key={index}
                                        className="overflow-hidden text-4xl uppercase text-white"
                                    >
                                        <Link href={link.href}>{link.title}</Link>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence> */}
    </div>
  );
};

export default Navbar;
