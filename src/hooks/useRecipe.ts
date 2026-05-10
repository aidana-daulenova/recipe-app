import { create } from "zustand";
import { quickRecipes } from "@/mock";

type Recipe = {
  id: number;
  title: string;
  mealType?: string;
  description?: string;
  imageUrl: string;
};

type RecipeStore = {
  recipes: Recipe[];
  addRecipe: (newRecipe: Recipe) => void;
};

export const useRecipe = create<RecipeStore>((set) => ({
  recipes: quickRecipes,
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),
}));
