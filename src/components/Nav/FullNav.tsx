import { Link, useLocation } from 'react-router';
import PATH, { NAV_PATHS } from '@/routes.ts';
import SearchBox from '@/components/Nav/SearchBox';

function FullNav() {
  const location = useLocation();

  return (
    <nav
      className={`
        hidden place-content-center border-b border-neutral-950
        sm:flex
      `}
    >
      {Object.entries({ [import.meta.env.VITE_ENV_PAGE_NAME]: PATH.home, ...NAV_PATHS }).map((path) => (
        <Link
          className={`
            flex items-center border-r border-neutral-950 px-13 py-6 font-light uppercase transition duration-250
            ease-in-out
            first:text-3xl
            not-first:hover:bg-neutral-950 not-first:hover:text-neutral-300
            ${location.pathname === path[1] && 'sm:not-first:bg-neutral-950 sm:not-first:text-neutral-200'}
          `}
          to={path[1]}
        >
          {path[0]}
        </Link>
      ))}
      <SearchBox />
    </nav>
  );
}

export default FullNav;
