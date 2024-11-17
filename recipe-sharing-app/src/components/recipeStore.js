import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],

  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),

  searchTerm: "",

  // Action to update the search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Filtered recipes based on the search term
  filteredRecipes: [],

  // Action to filter recipes based on the search term
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
  favorites: [], // Stores the IDs of favorite recipes
  addFavorite: (recipeId) =>
    set((state) => ({
      // Add a recipe ID to the favorites list
      favorites: [...state.favorites, recipeId],
    })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      // Remove a recipe ID from the favorites list
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),
  recommendations: [], // Stores the list of recommended recipes
  generateRecommendations: () =>
    set((state) => {
      // Generate recommendations based on favorites
      const recommended = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));
export default useRecipeStore;
