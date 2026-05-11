import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  firstName?: string;
  email?: string;
};

type UserStore = {
  user: User | null | undefined;
  saveUser: (user: User) => void;
  removeUser: () => void;
};

export const useUser = create<UserStore>()(
  persist(
    (set) => ({
      user: undefined,
      saveUser: (user: User) => set({ user }),
      removeUser: () => set({ user: null }),
    }),
    { name: "user-storage" },
  ),
);
