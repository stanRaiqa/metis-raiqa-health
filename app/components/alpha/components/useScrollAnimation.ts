import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const useScrollAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const textAnimation = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0, 0, 0.58, 1] }
  };

  const mediaAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0, 0, 0.58, 1] }
  };

  const containerAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, ease: [0, 0, 0.58, 1] }
  };

  return {
    ref,
    isInView,
    textAnimation: isInView ? textAnimation.animate : textAnimation.initial,
    mediaAnimation: isInView ? mediaAnimation.animate : mediaAnimation.initial,
    containerAnimation: isInView ? containerAnimation.animate : containerAnimation.initial,
    textTransition: textAnimation.transition,
    mediaTransition: mediaAnimation.transition,
    containerTransition: containerAnimation.transition
  };
}; 