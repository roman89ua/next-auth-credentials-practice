'use client';

import { type SubmitHandler } from 'react-hook-form';
import { TextInputContainer } from '@/components/form/TextInput';
import { DevTool } from '@hookform/devtools';
import { type RegistrationCredentialsType } from '@/types/auth-types';
import { useRegister } from '@/queries/auth/register';
import { useRegularForm } from '@/hooks';
import { RegularFormProvider } from '@/providers/RegularFormProvider';
import { yupResolver } from '@hookform/resolvers/yup';
import { registrationSchema } from '@/components/schemas/registrationSchema';

const RegistrationPage = () => {
  const formData = useRegularForm<RegistrationCredentialsType>({
    resolver: yupResolver(registrationSchema),
  });

  const registration = useRegister();

  const onSubmit: SubmitHandler<RegistrationCredentialsType> = (
    data: RegistrationCredentialsType
  ) => registration.mutate(data);

  return (
    <section
      title="register page"
      className="w-screen h-screen flex flex-col justify-center flex-wrap content-center"
    >
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center text-3xl">Login</h2>
          <RegularFormProvider {...formData}>
            <form
              onSubmit={formData.handleSubmit(onSubmit)}
              className="flex flex-col"
              noValidate
            >
              <section
                title="input fields"
                className="flex flex-col gap-5 py-4"
              >
                <TextInputContainer<RegistrationCredentialsType>
                  labelProps={{
                    children: 'Name',
                    htmlFor: 'name',
                  }}
                  inputProps={{
                    placeholder: 'Type your name',
                    name: 'name',
                    id: 'name',
                    type: 'text',
                    autoComplete: 'off',
                  }}
                />

                <TextInputContainer<RegistrationCredentialsType>
                  labelProps={{
                    children: 'Email',
                    htmlFor: 'email',
                  }}
                  inputProps={{
                    placeholder: 'Type your user name',
                    name: 'email',
                    id: 'email',
                    type: 'email',
                    autoComplete: 'off',
                  }}
                />

                <TextInputContainer<RegistrationCredentialsType>
                  labelProps={{
                    children: 'Password',
                    htmlFor: 'password',
                  }}
                  inputProps={{
                    placeholder: 'Type your password',
                    name: 'password',
                    id: 'password',
                    type: 'password',
                    autoComplete: 'off',
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
                  onClick={() => formData.reset()}
                >
                  Clear
                </button>
              </div>
            </form>
          </RegularFormProvider>
        </div>
      </div>
      <DevTool control={formData.control} />
    </section>
  );
};

export default RegistrationPage;
