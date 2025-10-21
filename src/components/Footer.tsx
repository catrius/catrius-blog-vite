import dayjs from 'dayjs';
import { Link, useLocation } from 'react-router';
import PATH, { NAV_PATHS, buildLoginPath } from '@/routes.ts';
import useUser from '@/hooks/useUser.ts';

function Footer() {
  const location = useLocation();
  const { isLogin } = useUser();

  return (
    <div className="flex flex-col gap-8 border-t border-neutral-950 px-4 pt-8 pb-4">
      <div className="flex flex-col items-center gap-5">
        {Object.entries({ [import.meta.env.VITE_ENV_PAGE_NAME]: PATH.home, ...NAV_PATHS }).map((path) => (
          <Link
            className={`
              text-2xl font-extralight text-neutral-500 uppercase transition duration-250 ease-in-out
              first:text-3xl first:text-neutral-950
            `}
            to={path[1]}
            key={path[0]}
          >
            {path[0]}
          </Link>
        ))}
      </div>
      <div className="flex flex-col items-center font-light text-neutral-950">
        <div>{`© ${dayjs().format('YYYY')} by ${import.meta.env.VITE_ENV_PAGE_NAME}`}</div>
        <div className="font-stretch-semi-condensed">Created with React, Tailwind, Vite, Vercel, Supabase</div>
      </div>
      <div className="flex flex-col items-end font-light text-neutral-950">
        {isLogin ? (
          <Link to={PATH.logout}>Logout</Link>
        ) : (
          <Link to={buildLoginPath(`${location.pathname}${location.search}`)}>Login</Link>
        )}
      </div>
    </div>
  );
}

export default Footer;
