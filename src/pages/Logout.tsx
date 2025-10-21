import { Link } from 'react-router';
import PATH from '@/routes.ts';
import { useEffect } from 'react';
import supabase from '@/lib/supabase.ts';
import useUser from '@/hooks/useUser.ts';
import LoadingSpinner from '@/components/LoadingSpinner.tsx';

function Logout() {
  const { isLogin } = useUser();

  useEffect(() => {
    supabase.auth.signOut();
  }, []);

  return (
    <div className="flex flex-col items-center gap-8 px-5 pt-24">
      <div
        className={`
          text-2xl font-light
          sm:text-3xl
        `}
      >
        {isLogin ? 'Logging out... ' : 'You have been logged out.'}
      </div>
      {isLogin ? (
        <LoadingSpinner className="inline-block scale-75" />
      ) : (
        <div>
          <Link
            to={PATH.home}
            className={`
              cursor-pointer bg-neutral-950 px-5 py-2.5 font-light text-neutral-200
              hover:bg-neutral-700
              active:scale-95
            `}
          >
            Home
          </Link>
        </div>
      )}
    </div>
  );
}

export default Logout;
