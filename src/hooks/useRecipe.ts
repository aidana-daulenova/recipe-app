import { create } from "zustand";
import { quickRecipes } from "@/mock";

type Recipe = {
  id: number;
  imageUrl: string;
  imageAlt: string;
  title: string;
  time: null | string;
};

type RecipeStore = {
  recipes: Recipe[];
};

export const useRecipe = create<RecipeStore>(() => ({
  recipes: quickRecipes,
}));
