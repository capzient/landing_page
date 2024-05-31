"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import "./nav.css";

const navLinks = [
  { title: "Markets", href: "/" },
  { title: "Solutions", href: "/" },
  { title: "Products", href: "/" },
  { title: "Technology", href: "/" },
  { title: "Company", href: "/" },
  { title: "Resources", href: "/" },
];

const menuVars = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const containerVars = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
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
      duration: 0.7,
    },
  },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className="bg-[#111111] w-full h-[65px] fixed top-0 backdrop-0 z-50">
      <div className="w-full h-full flex flex-row items-center justify-between mx-auto">
        <a href="#hero" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/assets/images/capzient_logo_white.png"
            alt="logo"
            width={200}
            height={200}
            className="cursor-pointer"
          />
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20 hidden md:flex">
          <div className="flex items-center justify-between w-full h-auto mr-[15px] px-[20px] py-[10px] gap-x-3 text-white tracking-wider">
            <a href="#market" className="link link--metis">
              Markets
            </a>
            <a href="#solution" className="link link--metis">
              Solutions
            </a>
            <a href="#product" className="link link--metis">
              Products
            </a>
            <a href="#technology" className="link link--metis">
              Technology
            </a>
            <a href="#company" className="link link--metis">
              Company
            </a>
            <a href="#resources" className="link link--metis">
              Resources
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5 hidden md:block">
          <button className="button text-white">Contact Us</button>
        </div>

        <div
          className="cursor-pointer md:hidden text-md text-white"
          onClick={toggleMenu}
        >
          Menu
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
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
                variants={containerVars}
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
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
