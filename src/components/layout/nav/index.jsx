'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { IoMdReturnRight } from 'react-icons/io';

import MenuItem from './menuItem';
import menus from './menus';

import './nav.css';

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
      // delay: 0.5,
      // duration: 0.3,
      // ease: [0.22, 1, 0.36, 1],
    },
  },
};

// const dropdownContentVars = {
//   initial: {
//     opacity: 0,
//     transition: {
//       duration: 0.5,
//       staggerChildren: 0.09,
//       staggerDirection: -1,
//     },
//   },
//   open: {
//     opacity: 1,
//     transition: {
//       delay: 0.5,
//       delayChildren: 0.3,
//       staggerChildren: 0.09,
//       staggerDirection: 1,
//     },
//   },
// };

// const mobileLinkVars = {
//   initial: {
//     y: '30vh',
//     transition: {
//       duration: 0.5,
//       ease: [0.37, 0, 0.63, 1],
//     },
//   },
//   open: {
//     y: 0,
//     transition: {
//       ease: [0, 0.55, 0.45, 1],
//       duration: 0.5,
//     },
//   },
// };
const extendItemBars = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
  },
};
const navBarVars = {
  initial: {
    top: '-100px',
    transition: {
      duration: 0.3,
    },
  },
  open: {
    top: '0px',
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    top: '-100px',
    transition: {
      duration: 0.3,
    },
  },
};

const Navbar = () => {
  // const [open, setOpen] = useState(false);
  const [extendElement, setExtendElement] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isOnMainDiv, setIsOnMainDiv] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // const toggleMenu = () => {
  //   setOpen((prevOpen) => !prevOpen);
  // };
  const extendRef = useRef(null);
  const extendContentRef = useRef(null);
  useEffect(() => {
    if (extendRef.current) {
      extendRef.current.style.height = `${extendContentRef.current.scrollHeight + 40}px`;
    }
  }, [activeMenu]);
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
    setLastScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div>
      <AnimatePresence>
        {showNav && (
          <motion.div
            variants={navBarVars}
            initial="initial"
            animate="open"
            exit="exit"
            className="nav  w-full  fixed top-0 backdrop-0 z-50  text-[20px]"
          >
            <div className="w-full h-full flex flex-row items-center relative z-[52] justify-between mx-auto">
              <Link href="/" className="h-auto w-auto flex flex-row items-center">
                <Image
                  src="/assets/images/capzient_logo_white.png"
                  alt="logo"
                  width={300}
                  height={100}
                  className=" cursor-pointer"
                />
              </Link>
              <div
                className=" p-[10px] pb-0 mb-[5px]  w-full h-full flex justify-center"
                onMouseMove={() => {
                  if (!isOnMainDiv) {
                    setExtendElement(null);
                  }
                }}
              >
                <div
                  className="h-full flex-row items-center justify-between hidden md:flex"
                  onMouseEnter={() => {
                    setIsOnMainDiv(true);
                  }}
                  onMouseLeave={() => {
                    setIsOnMainDiv(false);
                  }}
                >
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
                              {aMenu.extend ?? ''}
                            </div>
                          )
                        }
                        setExtendElement={setExtendElement}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className=" hidden md:block">
                <button className="button text-white">
                  <div className="flex gap-[5px] items-center text-white">
                    <IoMdReturnRight />
                    <Link href="/contact" className="link link--metis">
                      Contact Us
                    </Link>
                  </div>
                </button>
              </div>
              {/* <div className="cursor-pointer md:hidden text-md text-white px-4 " onClick={toggleMenu}>
          Menu
        </div> */}
            </div>
            <AnimatePresence>
              {extendElement && (
                <motion.div
                  variants={dropdownContainerVars}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="absolute w-full left-0 top-0 origin-top z-[1] bg-[#131313] text-white p-10"
                >
                  {/* {extendElement}
                   */}
                  <div ref={extendRef} className="height-animated">
                    {menus.map((aMenu, idx) =>
                      extendElement && idx === activeMenu ? (
                        <motion.div key={idx} variants={extendItemBars} initial="initial" animate="open" exit="exit">
                          <div
                            ref={extendContentRef}
                            onMouseLeave={() => {
                              setActiveMenu(null);
                              setExtendElement(null);
                            }}
                            onClick={() => {
                              setExtendElement(null);
                            }}
                          >
                            {aMenu.extend ?? null}
                          </div>
                        </motion.div>
                      ) : null,
                    )}
                  </div>
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
