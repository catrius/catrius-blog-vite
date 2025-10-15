import { useForm, type SubmitHandler } from 'react-hook-form';
import { usePostContactMutation } from '@/api/api.ts';
import LoadingSpinner from '@/components/LoadingSpinner.tsx';

interface ContactFormInput {
  name: string;
  email: string;
  message: string;
}

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInput>();

  const [postContact, { isLoading, isSuccess, isError }] = usePostContactMutation();

  const onSubmit: SubmitHandler<ContactFormInput> = (data) => {
    postContact({
      // @ts-ignore
      contact: data,
    })
      .unwrap()
      .then(() => {
        reset();
      });
  };

  return (
    <div
      className={`
        px-5 py-8
        sm:mx-auto sm:my-5 sm:max-w-400
      `}
    >
      <div
        className={`
          mb-10 block text-center text-3xl/relaxed font-extralight whitespace-pre-wrap text-neutral-950 uppercase
          sm:text-4xl/relaxed
        `}
      >
        Reach me here
      </div>

      <form
        className={`
          flex flex-col gap-9
          sm:mx-auto sm:max-w-200
        `}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div
          className={`
            flex flex-col gap-9
            sm:flex-row
          `}
        >
          <div
            className={`
              flex flex-col gap-2
              sm:basis-1/2
            `}
          >
            <label className="font-light">Name ∗</label>
            <input
              className={`
                border px-4 py-2 font-light outline-0
                ${errors.name ? 'border-amber-600' : 'border-neutral-950'}
              `}
              {...register('name', { required: true })}
            />
            {errors.name && <div className="font-light text-amber-600"> !⃝ Enter your name</div>}
          </div>

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
              {...register('email', { pattern: /\S+@\S+\.\S+/ })}
            />
            {errors.email && <div className="font-light text-amber-600"> !⃝ Enter your email in correct format</div>}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-light">Message ∗</label>
          <textarea
            className={`
              border px-4 py-2 font-light outline-0
              ${errors.message ? 'border-amber-600' : 'border-neutral-950'}
            `}
            rows={5}
            {...register('message', { required: true })}
          />
          {errors.message && <div className="font-light text-amber-600"> !⃝ Enter your message</div>}
        </div>

        <button
          className={`
            cursor-pointer bg-neutral-950 py-3 font-light text-neutral-300
            active:scale-95
          `}
          type="submit"
          disabled={isLoading}
        >
          {!isLoading ? 'Submit' : <LoadingSpinner className="scale-75" />}
        </button>

        {isSuccess && (
          <div className="font-light text-green-800">
            ✓ Thanks for contacting. I will read the message and reply soon.
          </div>
        )}

        {isError && <div className="font-light text-red-800">× Something wrong happened. Please try again.</div>}
      </form>
    </div>
  );
}

export default Contact;
