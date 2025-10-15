import { FaBars } from 'react-icons/fa6';
import { HiXMark } from 'react-icons/hi2';
import { RemoveScroll } from 'react-remove-scroll';
import { Link, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { createPortal } from 'react-dom';
import PATH, { NAV_PATHS } from '@/routes.ts';
import SearchBox from '@/components/Nav/SearchBox';

function BurgerNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="sm:hidden">
      <nav className="flex items-center border-b border-neutral-950 px-5 py-3">
        <Link to={PATH.home} className="basis-1/2 text-3xl font-extralight uppercase">
          {import.meta.env.VITE_ENV_PAGE_NAME}
        </Link>
        <button
          type="button"
          className="flex basis-1/2 flex-row-reverse"
          onClick={() => {
            setMenuOpen(true);
          }}
        >
          <FaBars className="text-3xl font-extralight" />
        </button>
      </nav>
      {createPortal(
        <AnimatePresence>
          {menuOpen && (
            <RemoveScroll>
              <motion.div
                className="absolute inset-0 h-screen bg-neutral-950 pt-5 pr-5 pl-10"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }} // Animation lasts 1 second
              >
                <div className="mb-10 flex flex-row-reverse">
                  <button
                    type="button"
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                  >
                    <HiXMark className="text-3xl text-neutral-200" />
                  </button>
                </div>
                <div className="flex flex-col gap-5">
                  {Object.entries(NAV_PATHS).map((path) => (
                    <Link
                      className={`
                        text-3xl font-extralight uppercase transition duration-250 ease-in-out
                        ${location.pathname === path[1] ? 'text-neutral-500' : 'text-neutral-200'}
                      `}
                      to={path[1]}
                    >
                      {path[0]}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </RemoveScroll>
          )}
        </AnimatePresence>,
        document.body,
      )}
      <SearchBox />
    </div>
  );
}

export default BurgerNav;
