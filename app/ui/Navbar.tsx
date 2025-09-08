import { NavLink } from 'react-router';
import { FaBars, FaTimes } from 'react-icons/fa';

interface NavbarProps {
  onToggle: () => void;
  navOpen: boolean;
}

function Navbar({ onToggle, navOpen }: NavbarProps) {
  const base = 'text-purple-500';
  const hover = 'hover:text-purple-500 transition-all duration-500';
  const underline = 'mx-auto bg-purple-500 h-[1px] transition-all duration-500';

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:flex items-center gap-10 text-2xl">
        {['/', '/projects', '/blog', '/about', '/contact'].map(
          (path, index) => (
            <NavLink key={index} to={path}>
              {({ isActive }) => (
                <span className="group relative inline-block cursor-pointer text-sm">
                  <span className={isActive ? base : hover}>
                    {path === '/'
                      ? 'Home'
                      : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                  </span>
                  <div
                    className={`${underline} ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></div>
                </span>
              )}
            </NavLink>
          )
        )}
      </div>

      <div className="md:hidden flex items-center ">
        <button
          onClick={onToggle}
          className="text-gray-200 text-xl cursor-pointer"
          title="Menu"
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </>
  );
}

export default Navbar;
