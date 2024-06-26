import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import produce from 'immer';
import { create } from 'zustand';

import { removeToken, setToken } from '@/lib/cookie';

import { User } from '@/types/entities/user';

type AuthStoreType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (user: User) => void;
  setUser: (user: User) => void;
  logout: () => void;
  stopLoading: () => void;
};

const useAuthStoreBase = create<AuthStoreType>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: (user) => {
    setToken(user.token);
    set(
      produce<AuthStoreType>((state) => {
        state.isAuthenticated = true;
        state.user = user;
      }),
    );
  },
  logout: () => {
    removeToken();
    set(
      produce<AuthStoreType>((state) => {
        state.isAuthenticated = false;
        state.user = null;
      }),
    );
  },
  setUser: (user) => {
    set(
      produce<AuthStoreType>((state) => {
        state.user = user;
      }),
    );
  },
  stopLoading: () => {
    set(
      produce<AuthStoreType>((state) => {
        state.isLoading = false;
      }),
    );
  },
}));

const useAuthStore = createSelectorHooks(useAuthStoreBase);

export default useAuthStore;
