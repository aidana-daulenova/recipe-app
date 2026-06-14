import { create } from "zustand";
import { quickRecipes } from "@/mock";
import { persist } from "zustand/middleware";

export const MealType = {
  All: "All",
  Breakfast: "Breakfast",
  Lunch: "Lunch",
  Dinner: "Dinner",
  Dessert: "Dessert",
  Baking: "Baking",
} as const;

type MealType = (typeof MealType)[keyof typeof MealType];

type Recipe = {
  id: number;
  title: string;
  mealType: MealType | string; // `TODO: remove then
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
      selectedFilter: MealType.All,

      addRecipe: (newRecipe) =>
        set((state) => ({
          recipes: [...state.recipes, newRecipe],
        })),
    }),

    { name: "recipes" },
  ),
);
