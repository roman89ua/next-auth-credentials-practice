'use client';

import { TextInputContainer } from '@/components/form/TextInput';
import { DevTool } from '@hookform/devtools';
import { type LoginCredentialsType } from '@/types/auth-types';
import { useRegularForm } from '@/hooks';
import { RegularFormProvider } from '@/providers/RegularFormProvider';
import { type SubmitHandler } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import { toast } from 'sonner';
import { signIn } from 'next-auth/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '@/components/schemas/loginSchema';

const LoginPage = () => {
  const searchUrl = useSearchParams();

  const formMethods = useRegularForm<LoginCredentialsType>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginCredentialsType> = async (
    data: LoginCredentialsType
  ) => {
    const loginResult = await signIn('credentials', {
      ...data,
      redirect: true,
      callbackUrl: searchUrl.get('callbackUrl') || '/',
    });

    if (loginResult?.error) {
      toast.error(
        `Error from: ${loginResult.error}. Status code ${loginResult.status}.`
      );
    }

    if (loginResult?.status === 200 && loginResult?.ok) {
      toast.success('Logged in successfully. ');
    }
  };

  return (
    <section
      title="login page"
      className="w-screen h-screen flex flex-col justify-center flex-wrap content-center"
    >
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center text-3xl">Login</h2>
          <RegularFormProvider {...formMethods}>
            <form
              onSubmit={formMethods.handleSubmit(onSubmit)}
              className="flex flex-col"
              noValidate
            >
              <section
                title="input fields"
                className="flex flex-col gap-5 py-4"
              >
                <TextInputContainer<LoginCredentialsType>
                  labelProps={{
                    children: 'Email',
                    htmlFor: 'email',
                  }}
                  inputProps={{
                    placeholder: 'Type your email',
                    name: 'email',
                    id: 'email',
                    type: 'email',
                  }}
                />

                <TextInputContainer<LoginCredentialsType>
                  labelProps={{
                    children: 'Password',
                    htmlFor: 'password',
                  }}
                  inputProps={{
                    placeholder: 'Type your password',
                    name: 'password',
                    id: 'password',
                    type: 'password',
                    autoComplete: 'on',
                  }}
                />
              </section>
              <div className="card-actions justify-end">
                <button type="submit" className="btn btn-primary w-full">
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-warning w-full"
                  onClick={() => formMethods.reset()}
                >
                  Clear
                </button>
              </div>
            </form>
          </RegularFormProvider>
        </div>
      </div>
      <DevTool control={formMethods.control} />
    </section>
  );
};

export default LoginPage;
