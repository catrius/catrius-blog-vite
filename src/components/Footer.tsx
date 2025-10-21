import dayjs from 'dayjs';
import { Link } from 'react-router';
import PATH, { NAV_PATHS } from '@/routes.ts';

function Footer() {
  return (
    <div className="border-t border-neutral-950 pt-8 pb-4">
      <div className="mb-8 flex flex-col items-center gap-5">
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
    </div>
  );
}

export default Footer;
