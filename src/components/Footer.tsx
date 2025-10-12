import dayjs from 'dayjs';
import { NAV_PATHS } from '@/constants/common.ts';
import { Link } from 'react-router';
import PATH from '@/routes.ts';

function Footer() {
  return (
    <div className="mt-12 border-t border-neutral-950 pt-8 pb-4">
      <div className="mb-8 flex flex-col items-center gap-5">
        {Object.entries({ [import.meta.env.VITE_ENV_PAGE_NAME]: PATH.home, ...NAV_PATHS }).map((path) => (
          <Link
            className={`
              text-2xl font-extralight text-neutral-500 uppercase transition duration-250 ease-in-out
              first:text-3xl first:text-neutral-950
            `}
            to={path[1]}
          >
            {path[0]}
          </Link>
        ))}
      </div>
      <div className="flex flex-col items-center font-light text-neutral-950">
        <div>{`© ${dayjs().format('YYYY')} by ${import.meta.env.VITE_ENV_PAGE_NAME}`}</div>
        <div>Created with React, Tailwind, Vercel, Supabase</div>
      </div>
    </div>
  );
}

export default Footer;
