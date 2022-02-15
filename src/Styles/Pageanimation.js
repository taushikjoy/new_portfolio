export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
    // backgroundColor: ["hsl(0, 0%, 100%)", "hsl(0, 0%, 100%)"],
  },

  show: {
    opacity: 1,
    y: 0,
    // backgroundColor: ["hsl(55, 100%, 0%)", "hsl(55, 100%, 0%)"],

    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
    // backgroundColor: ["#555555"],
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 1,
    },
  },
};

export const titleAnime = {
  hidden: {
    opacity: 0,
    y: 200,
    // backgroundColor: ["hsl(0, 0%, 100%)", "hsl(0, 0%, 100%)"],
  },

  show: {
    opacity: 1,
    y: 0,
    // backgroundColor: ["hsl(55, 100%, 0%)", "hsl(55, 100%, 0%)"],

    transition: {
      duration: 0.4,
    },
    // backgroundColor: ["#555555"],
  },
};

export const photoAnime = {
  hidden: {
    opacity: 0,
    scale: 1.5,
  },

  show: {
    opacity: 1,
    scale: 1,
    transition: { ease: "easeOut", duration: 1 },
  },
};

export const lineAnime = {
  hidden: {
    width: "0%",
  },

  show: {
    width: "100%",
    transition: { duration: 1 },
  },
};

export const slider = {
  hidden: {
    x: "-130%",
    skew: "45deg",
  },

  show: {
    x: "100%",
    skew: "0deg",
    transition: { ease: "easeOut", duration: 1 },
  },
};

export const fade = {
  hidden: {
    opacity: 1,
  },

  show: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

export const contactanimeOne = {
  hidden: {
    opacity: 1,
    x: -2000,
    // y: 2000,
  },

  show: {
    opacity: 1,
    x: 0,
    // y: 0,

    transition: {
      duration: 1,
    },
  },
};
export const contactanimeTwo = {
  hidden: {
    x: 2000,
    // y: -2000,
  },

  show: {
    x: 0,
    // y: 0,

    transition: {
      duration: 1,
    },
    // backgroundColor: ["#555555"],
  },
};
