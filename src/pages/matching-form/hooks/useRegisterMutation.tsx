import { useMutation } from '@tanstack/react-query';

import api from '@/lib/axios';
import useMutationToast from '@/hooks/toast/useMutationToast';

export type RegisterBody = {
  username: string;
  name: string;
  email: string;
  password: string;
  region_kecamatan: string;
  region_city: string;
};

export function useRegisterMutation() {
  const result = useMutationToast<void, RegisterBody>(
    useMutation((data) => {
      return api.post('/auth/register', data);
    }),
    {
      success: 'Sukses melakukan pendaftaran',
    },
  );

  return result;
}
