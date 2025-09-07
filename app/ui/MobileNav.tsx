import { NavLink } from 'react-router';

interface MobileNavProps {
  navOpen: boolean;
}

function MobileNav({ navOpen }: MobileNavProps) {
  const base = 'text-purple-500';
  const hover = 'hover:text-purple-500 transition-all duration-500';
  const underline = 'mx-auto bg-purple-500 h-[1px] transition-all duration-500';

  return (
    <>
      {navOpen && (
        <div className="absolute top-[80px] left-0 w-full z-40 bg-opacity-70 backdrop-blur-md px-6 py-4 space-y-2 space-x-4 text-center md:hidden">
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
      )}
    </>
  );
}

export default MobileNav;
