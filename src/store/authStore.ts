import {create} from 'zustand';
import { persist } from 'zustand/middleware';

export interface AuthState {
  token: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      setToken: (token: string) => set({ token }),
      clearToken: () => set({ token: null })
    }),
    { name: 'auth-storage' }
  )
);


export const getAuthToken = (): string | null =>
  useAuthStore.getState().token;
