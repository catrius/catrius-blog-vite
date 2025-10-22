import { useState, useCallback } from 'react';
import type {
  AuthTokenResponsePassword,
  PostgrestError,
  AuthError,
  PostgrestSingleResponse,
} from '@supabase/supabase-js';

type Response = PostgrestSingleResponse<any> | AuthTokenResponsePassword;
type SupaError = PostgrestError | AuthError;

function useSupaQuery(callback: () => Promise<Response>) {
  const [error, setError] = useState<SupaError | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [data, setData] = useState<Response | null>(null);

  const run = useCallback(async () => {
    setIsLoading(true);

    const { data: callbackData, error: callBackError } = await callback();

    if (callBackError) {
      setIsError(true);
      setIsSuccess(false);
      setError(callBackError);
    } else {
      setIsError(false);
      setIsSuccess(true);
    }

    setData(callbackData);
    setIsLoading(false);
  }, [callback]);

  return [
    run,
    {
      data,
      error,
      isLoading,
      isError,
      isSuccess,
    },
  ] as const;
}

export default useSupaQuery;
