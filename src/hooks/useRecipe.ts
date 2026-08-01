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
  id: string;
  title: string;
  mealType: MealType | string;
  description?: string;
  imageUrl: string;
};

type RecipeStore = {
  recipes: Recipe[];
  addRecipe: (newRecipe: Recipe) => void;
  updateRecipe: (updatedRecipe: Recipe) => void;
};

export const useRecipe = create<RecipeStore>()(
  persist(
    (set) => ({
      recipes: quickRecipes as unknown as Recipe[],
      selectedFilter: MealType.All,

      addRecipe: (newRecipe) =>
        set((state) => ({
          recipes: [...state.recipes, newRecipe],
        })),

      updateRecipe: (updatedRecipe) =>
        set((state) => ({
          recipes: state.recipes.map((recipe) =>
            recipe.id === updatedRecipe.id ? updatedRecipe : recipe,
          ),
        })),
    }),
    {
      name: "recipes",
    },
  ),
);
