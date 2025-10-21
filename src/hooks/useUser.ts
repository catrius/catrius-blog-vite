import { type Session } from '@supabase/supabase-js';
import { useState, useEffect } from 'react';
import supabase from '@/lib/supabase.ts';

function useUser() {
  const [session, setSession] = useState<Session | null>(null);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
    })();
  }, []);

  useEffect(() => {
    if (session) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [session]);

  return { isLogin };
}

export default useUser;
