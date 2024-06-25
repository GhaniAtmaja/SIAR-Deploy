import { useMutation } from '@tanstack/react-query';

import api from '@/lib/axios';
import { setToken } from '@/lib/cookie';
import useMutationToast from '@/hooks/toast/useMutationToast';

import useAuthStore from '@/store/useAuthStore';

import { ApiResponse } from '@/types/api';
import { User } from '@/types/entities/user';

export type LoginBody = {
  email: string;
  password: string;
};

export function useLoginMutation() {
  const login = useAuthStore.useLogin();

  const result = useMutationToast<void, LoginBody>(
    useMutation((data) => {
      let tempToken: string;

      return api
        .post('/auth/login', data)
        .then((res) => {
          const token = res.data.token;

          tempToken = token;
          setToken(token);

          return api.get<ApiResponse<User>>('/auth/whoami');
        })
        .then((user) => {
          login({
            ...user.data,
            token: tempToken,
          });
        });
    }),
    {
      success: 'Berhasil masuk',
    },
  );

  return result;
}
