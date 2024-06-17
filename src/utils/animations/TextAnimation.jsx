const MobileLinkVars = {
  initial: {
    y: "30vh",
    opacity: 0,
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
      delayChildren: 0.1,
      staggerChildren: 0.3, // Delay between each letter
    },
  },
  exit: {
    opacity: 0,
    y: "-30vh",
    transition: {
      ease: [0.37, 0, 0.63, 1],
      duration: 0.7,
    },
  },
  // whileInView: {
  //   opacity: 1,
  //   y: 0,
  //   transition: {
  //     duration: 0.5,
  //   },
  // },
};

const ContainerVars = {
  initial: {
    transition: {
      staggerChildren: 0.09,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.09,
    },
  },
  exit: {
    opacity: 0,
    y: "-30vh",
    transition: {
      ease: [0.37, 0, 0.63, 1],
      duration: 0.7,
    },
  },
  // whileInView: {
  //   transition: {
  //     staggerChildren: 0.09,
  //   },
  // },
};

export { MobileLinkVars, ContainerVars };

// const MobileLinkVars = {
//   initial: {
//     y: "30vh",
//     transition: {
//       duration: 0.7,
//       ease: [0.37, 0, 0.63, 1],
//     },
//   },
//   open: {
//     y: 0,
//     transition: {
//       ease: [0, 0.55, 0.45, 1],
//       duration: 0.7,
//     },
//   },
// };

// const MobileLinkVars = {
//   initial: {
//     y: "30vh",
//     transition: {
//       duration: 0.7,
//       ease: [0.37, 0, 0.63, 1],
//     },
//   },
//   visible: {
//     y: 0,
//     transition: {
//       ease: [0, 0.55, 0.45, 1],
//       duration: 0.7,
//       delayChildren: 0.1,
//       staggerChildren: 0.3, // Delay between each letter
//     },
//   },
//   whileInView: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//     },
//   },
// };

// const ContainerVars = {
//   initial: {
//     transition: {
//       staggerChildren: 0.09,
//     },
//   },
//   visible: {
//     transition: {
//       staggerChildren: 0.09,
//     },
//   },
//   whileInView: {
//     transition: {
//       staggerChildren: 0.09,
//     },
//   },
// };

// export { MobileLinkVars, ContainerVars };
