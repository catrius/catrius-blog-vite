import { FaBars } from 'react-icons/fa6';
import { HiXMark } from 'react-icons/hi2';
import { RemoveScroll } from 'react-remove-scroll';
import { NAV_PATHS } from '@/constants/common.ts';
import { Link } from 'react-router';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { createPortal } from 'react-dom';

function BurgerNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="flex items-center border-b border-neutral-950 px-5 py-3">
        <div className="basis-1/2 text-3xl font-extralight uppercase">{import.meta.env.VITE_ENV_PAGE_NAME}</div>
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
                className="absolute inset-0 bg-neutral-950 pt-5 pr-5 pl-10"
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
                        text-3xl font-extralight text-neutral-200 uppercase transition duration-250 ease-in-out
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
    </>
  );
}

export default BurgerNav;
