import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  username: "",
  login: (name) => set(() => ({ username: name })),
  logout: () => set(() => ({ username: "" })),
}));
