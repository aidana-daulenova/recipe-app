import { create } from "zustand";
import { quickRecipes } from "@/mock";
import { persist } from "zustand/middleware";

type Recipe = {
  id: string;
  title: string;
  mealType?: string;
  description?: string;
  imageUrl: string;
};

type RecipeStore = {
  recipes: Recipe[];
  addRecipe: (newRecipe: Recipe) => void;
};

export const useRecipe = create<RecipeStore>()(
  persist(
    (set) => ({
      recipes: quickRecipes,
      addRecipe: (newRecipe) =>
        set((state) => ({
          recipes: [...state.recipes, newRecipe],
        })),
    }),
    { name: "recipe-storage" },
  ),
);
