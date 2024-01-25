'use client';

import { useMutation } from 'react-query';
import { MutationName } from '@/queries/queryName';
import { type RegistrationCredentialsType } from '@/types/auth-types';
import axios, { type AxiosError, type AxiosResponse } from 'axios';
import type { User } from '@prisma/client';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const registrationRequest = async (
  registrationData: RegistrationCredentialsType
) => {
  return await axios
    .post(
      '/api/register',
      { ...registrationData },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    .then((response: AxiosResponse<User>) => response);
};

export const useRegister = () => {
  const { replace } = useRouter();

  return useMutation({
    mutationKey: MutationName.register as string,

    mutationFn: (registrationData: RegistrationCredentialsType) =>
      registrationRequest(registrationData),

    onSuccess: () => {
      toast.success('Registered successfully');
      replace('/login');
    },
    onError: (data: AxiosError) => {
      toast.error(`${data.message}. ${data.code}`);
    },
  });
};
