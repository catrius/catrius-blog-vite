import LoadingSpinner from '@/components/LoadingSpinner';
import { useForm } from 'react-hook-form';
import supabase from '@/lib/supabase';
import { useCallback, useEffect } from 'react';
import useSupaQuery from '@/hooks/useSupaQuery.ts';
import { useNavigate, useSearchParams } from 'react-router';

interface LoginFormInput {
  email: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const returnUrl = params.get('returnUrl') ?? '';

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<LoginFormInput>();

  const loginCallback = useCallback(async () => {
    const formData = getValues();
    return supabase.auth.signInWithPassword({ email: formData.email, password: formData.password });
  }, [getValues]);

  const [login, { isLoading, isSuccess, isError, error }] = useSupaQuery(loginCallback);

  useEffect(() => {
    if (isSuccess) {
      navigate(returnUrl);
    }
  }, [isSuccess, navigate, returnUrl]);

  return (
    <div
      className={`
        px-5 pb-8
        sm:mx-auto sm:my-5 sm:max-w-400
      `}
    >
      <form
        className={`
          flex flex-col gap-9
          sm:mx-auto sm:max-w-100
        `}
        onSubmit={handleSubmit(login)}
      >
        <div
          className={`
            flex flex-col gap-2
            sm:basis-1/2
          `}
        >
          <label className="font-light">Email</label>
          <input
            className={`
              border px-4 py-2 font-light outline-0
              ${errors.email ? 'border-amber-600' : 'border-neutral-950'}
            `}
            {...register('email', { required: true })}
          />
          {errors.email && <div className="font-light text-amber-600"> !⃝ Enter your email</div>}
        </div>

        <div
          className={`
            flex flex-col gap-2
            sm:basis-1/2
          `}
        >
          <label className="font-light">Password</label>
          <input
            className={`
              border px-4 py-2 font-light outline-0
              ${errors.password ? 'border-amber-600' : 'border-neutral-950'}
            `}
            type="password"
            {...register('password', { required: true })}
          />
          {errors.password && <div className="font-light text-amber-600"> !⃝ Enter your password</div>}
        </div>

        <button
          className={`
            mt-4 cursor-pointer bg-neutral-950 py-3 font-light text-neutral-300
            active:scale-95
          `}
          type="submit"
          disabled={isLoading}
        >
          {!isLoading ? 'Login' : <LoadingSpinner className="scale-75" />}
        </button>

        {isSuccess && <div className="font-light text-green-800">✓ Login success.</div>}

        {isError && <div className="font-light text-red-800">{error?.message}</div>}
      </form>
    </div>
  );
}

export default Login;
