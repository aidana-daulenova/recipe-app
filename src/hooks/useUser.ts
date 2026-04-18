import { create } from "zustand";

type User = {
  firstName?: string;
  email?: string;
};

type UserStore = {
  user: User | null | undefined;
  saveUser: (user: User) => void;
  removeUser: () => void;
};

export const useUser = create<UserStore>((set) => ({
  user: undefined,
  saveUser: (user: User) => set({ user }),
  removeUser: () => set({ user: null }),
}));
