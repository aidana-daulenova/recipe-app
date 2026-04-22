import { create } from "zustand";
import { quickRecipes } from "/Users/aidanakassym/Desktop/recipe-app/src/mock.ts";

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

export const useRecipes = create<RecipeStore>(() => ({
  recipes: quickRecipes,
}));
