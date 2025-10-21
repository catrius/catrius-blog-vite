import { useState, useCallback } from 'react';
import type {
  AuthTokenResponsePassword,
  PostgrestError,
  AuthError,
  PostgrestSingleResponse,
} from '@supabase/supabase-js';

type Response = PostgrestSingleResponse<any> | AuthTokenResponsePassword;
type Error = PostgrestError | AuthError;

function useSupaQuery(callback: () => Promise<Response>) {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const run = useCallback(async () => {
    setIsLoading(true);

    const { error: callBackError } = await callback();

    if (callBackError) {
      setIsError(true);
      setIsSuccess(false);
      setError(callBackError);
    } else {
      setIsError(false);
      setIsSuccess(true);
    }

    setIsLoading(false);
  }, [callback]);

  return [
    run,
    {
      error,
      isLoading,
      isError,
      isSuccess,
    },
  ] as const;
}

export default useSupaQuery;
