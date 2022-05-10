export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
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
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 1,
    },
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

export const skillhover = {
  hidden: {
    y: 0,
    x: -5,
  },
  show: {
    y: 10,
    x: 0,
    transition: {
      yoyo: Infinity,
    },
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

export const contactanimeOne = {
  hidden: {
    opacity: 1,

    x: -2000,
  },

  show: {
    opacity: 1,

    x: 0,

    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
export const contactanimeTwo = {
  hidden: {
    x: 2000,
  },

  show: {
    x: 0,

    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const fadedetail = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,
    transition: {
      duration: 2,
      // when: "beforeChildren",
      // staggerChildren: 0.5,
    },
  },
};

export const projectimageone = {
  hidden: {
    x: -2000,
    opacity: 0,
  },

  show: {
    x: 0,
    opacity: 1,

    transition: {
      duration: 2.5,
    },
  },
};

export const projectimagetwo = {
  hidden: {
    y: 2000,
    opacity: 0,
  },

  show: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 2.75,
    },
  },
};
export const projectimagethree = {
  hidden: {
    y: -2000,
    opacity: 0,
  },

  show: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 1.75,
    },
  },
};

export const coverparent = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 1.5,
    },
  },
};

export const coverimageone = {
  hidden: {
    x: -1500,
  },

  show: {
    x: 0,

    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
export const coverimagetwo = {
  hidden: {
    x: 700,
  },

  show: {
    x: 0,

    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};
export const coverimagethree = {
  hidden: {
    x: -1500,
  },

  show: {
    x: 0,

    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};
export const coverimagefour = {
  hidden: {
    x: 750,
  },

  show: {
    x: 0,

    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};
