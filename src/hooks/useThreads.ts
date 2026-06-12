import { create } from "zustand";
import { exampleThreads } from "@/mockThreads";
import { persist } from "zustand/middleware";

export const ThreadCategory = {
  BakingPastry: "Baking & Pastry",
  DieteryNutrition: "Dietery & Nutrition",
  WeeknightMeals: "Weeknight Meals",
  KitchenTips: "Kitchen Tips",
  IngridientsSwaps: "Ingridients Swaps",
  ShowTell: "Show & Tell",
} as const;

type ThreadCategory = (typeof ThreadCategory)[keyof typeof ThreadCategory];

type Thread = {
  id: number;
  userName: string;
  category: ThreadCategory;
  titleOfThreads: string;
  threadDescription: string;
  comments: number;
  likes: number;
};

type ThreadStore = {
  threads: Thread[];
  addThread: (newThread: Thread) => void;
};

export const useThreads = create<ThreadStore>()(
  persist(
    (set) => ({
      threads: exampleThreads as Thread[],

      addThread: (newThread) =>
        set((state) => ({
          threads: [...state.threads, newThread],
        })),
    }),
    { name: "thread-storage" },
  ),
);
