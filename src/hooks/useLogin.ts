import { useState, useEffect } from 'react';
import supabase from '@/lib/supabase';
import { type Session } from '@supabase/supabase-js';
import { useNavigate } from 'react-router';

function useLogin() {
  const [session, setSession] = useState<Session | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });

    return () => subscription.unsubscribe();
  }, []);

  return {
    session,
  };
}

export default useLogin;
