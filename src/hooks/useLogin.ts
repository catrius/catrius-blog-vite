import { useCallback, useEffect } from 'react';
import useSupaQuery from '@/hooks/useSupaQuery';
import supabase from '@/lib/supabase';
import { setUser } from '@/store/slices/user';

function useLogin(email: string, password: string) {
  const loginCallback = useCallback(
    async () => supabase.auth.signInWithPassword({ email, password }),
    [email, password],
  );

  const [supaLogin, { data, isLoading, isSuccess, isError, error }] = useSupaQuery(loginCallback);

  useEffect(() => {
    setUser(data?.user);
  }, [data]);

  return [supaLogin, { data, isLoading, isSuccess, isError, error }] as const;
}

export default useLogin;
