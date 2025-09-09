import { useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import { useEffect } from 'react';

const COLORS = ['#13FFAA', '#1E67C6', '#d500f9', '#DD335C'];

function Aurora() {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(115% 115% at 50% 0%,#020617 50%,${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const borderBottom = useMotionTemplate`1px solid ${color}`;
  const heroBottomShadow = useMotionTemplate`0px 12px 24px -4px ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  const backgroundColor = useMotionTemplate`${color}`;
  const hoverShadow = useMotionTemplate`0px 0px 12px ${color}`;

  useEffect(function () {
    animate(color, COLORS, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror',
    });
  }, []);

  return {
    color,
    backgroundImage,
    border,
    borderBottom,
    heroBottomShadow,
    boxShadow,
    backgroundColor,
    hoverShadow,
  };
}

export default Aurora;
