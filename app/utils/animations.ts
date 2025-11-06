import { Variants } from 'framer-motion';

// ===== Basic Animations =====

// Subtle fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (custom = 0) => ({
    opacity: 1,
    transition: {
      delay: custom * 0.1,
      duration: 0.6,
      ease: [0, 0, 0.58, 1]
    }
  })
};

// Subtle slide up animation
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.7,
      ease: [0, 0, 0.58, 1]
    }
  })
};

// Subtle slide in from left
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.7,
      ease: [0, 0, 0.58, 1]
    }
  })
};

// Subtle slide in from right
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.7,
      ease: [0, 0, 0.58, 1]
    }
  })
};

// Subtle scale animation
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (custom = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: custom * 0.1,
      duration: 0.6,
      ease: [0, 0, 0.58, 1]
    }
  })
};

// ===== Container Animations =====

// Container for staggered animations
export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// Fast staggered container for performance
export const fastStaggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
      type: "tween"
    }
  }
};

// ===== Hero Section Animations =====

// Hero container for entrance animations
export const heroContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.3,
      ease: [0, 0, 0.58, 1]
    }
  }
};

// Hero item for staggered children
export const heroItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: [0, 0, 0.58, 1]
    }
  }
};

// ===== Card Animations =====

// Card appearance animation
export const cardAnimation: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: custom * 0.1,
      duration: 0.7,
      type: "spring", 
      stiffness: 100,
      damping: 15
    }
  })
};

// Image entrance animation
export const imageAnimation: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.7,
      ease: [0, 0, 0.58, 1],
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

// ===== 3D Effect Animations =====

// 3D tilt effect
export const tilt3D: Variants = {
  hidden: { opacity: 0, rotateX: 10, rotateY: -10, z: -50 },
  visible: {
    opacity: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.8
    }
  }
};

// 3D card hover effect
export const hover3D = {
  rest: { 
    rotateX: 0, 
    rotateY: 0, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 20 
    }
  },
  hover: { 
    scale: 1.05,
    rotateX: 10,
    rotateY: 15,
    z: 10,
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 20 
    }
  }
};

// ===== Scroll-Based Effects (for Parallax) =====

// Creates transform values for basic Y-axis parallax
export const createYParallax = (scrollYProgress: any, strength: number = 100) => {
  // Use direct value if already transformed, otherwise create a simple y transform 
  return { 
    y: [0, strength] 
  };
};

// Creates transform values for basic X-axis parallax
export const createXParallax = (scrollYProgress: any, strength: number = 100) => {
  return {
    x: [0, strength]
  };
};

// Creates transform values for 3D parallax effect with depth
export const create3DParallax = (scrollYProgress: any, opts = { yStrength: 100, zStrength: 50, perspective: 1000 }) => {
  return {
    y: [0, opts.yStrength],
    z: [0, opts.zStrength],
    transformPerspective: opts.perspective
  };
};

// Creates opacity fade based on scroll position
export const createScrollOpacity = (scrollYProgress: any, fadeStartPoint: number = 0.3) => {
  return {
    opacity: [1, 0.4, 0]
  };
};

// ===== Performance Optimized Variants =====

// Light version of slide up for performance critical sections
export const lightSlideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0, 0, 0.58, 1]
    }
  }
};

// Light scale for performance critical elements
export const lightScale: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0, 0, 0.58, 1]
    }
  }
};

// Light fade for background elements
export const lightFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4
    }
  }
}; 