import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LuHexagon } from 'react-icons/lu';

function Logo() {
  return (
    <NavLink to="/" className="flex items-center justify-center">
      {/* <span> */}
      <motion.img className="mx-2 h-15 w-15" src="/logo.png" alt="" />
      <div className=" absolute -z-10 flex justify-center items-center animate-pulse">
        <LuHexagon className="w-20 h-20 text-purple-500 blur-md animate-[spin_20s_linear_infinite]" />
      </div>
      {/* <img className="mx-2 h-15 w-15" src="/logo.png" alt="" /> */}
      {/* </span> */}
    </NavLink>
  );
}
export default Logo;
