import Navbar from './Navbar';
import Logo from './Logo';
import MobileNav from './MobileNav';
import { useState } from 'react';

export default function MainNav() {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <>
      <nav className=" fixed top-0 border-b-1 border-solid border-gray-900 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
        <div
          className="max-w-[1300px] mx-auto  flex justify-between
        text-md items-center px-12 md:px-0 h-20"
        >
          <Logo />
          <Navbar navOpen={navOpen} onToggle={() => setNavOpen(!navOpen)} />
        </div>
      </nav>
      <MobileNav navOpen={navOpen} />
    </>
  );
}
