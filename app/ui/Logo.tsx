import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LuHexagon } from 'react-icons/lu';
import Aurora from './Aurora';
import { useEffect } from 'react';

function Logo() {
  // const location = useLocation();
  const { color, resetColor } = Aurora();

  // useEffect(() => {
  //   if (location.pathname === '/') {
  //     resetColor(); // sync color when returning to homepage
  //   }
  // }, [location.pathname]);

  return (
    <NavLink to="/" className="flex items-center justify-center">
      {/* <span> */}
      <motion.img className="mx-2 h-15 w-15" src="/logo.png" alt="" />
      <motion.div
        style={{ color }}
        className=" absolute -z-10 flex justify-center items-center animate-pulse"
      >
        <LuHexagon className="w-20 h-20  blur-md " />
      </motion.div>
      {/* <img className="mx-2 h-15 w-15" src="/logo.png" alt="" /> */}
      {/* </span> */}
    </NavLink>
  );
}
export default Logo;
