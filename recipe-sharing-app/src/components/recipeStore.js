// import { create } from "zustand";

// const useRecipeStore = create((set) => ({
//   recipes: [],

//   addRecipe: (newRecipe) =>
//     set((state) => ({ recipes: [...state.recipes, newRecipe] })),
//   setRecipes: (recipes) => set({ recipes }),
//   deleteRecipe: (id) =>
//     set((state) => ({
//       recipes: state.recipes.filter((recipe) => recipe.id !== id),
//     })),
//   updateRecipe: (id, updatedRecipe) =>
//     set((state) => ({
//       recipes: state.recipes.map((recipe) =>
//         recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
//       ),
//     })),

//   searchTerm: "",

//   // Action to update the search term
//   setSearchTerm: (term) => set({ searchTerm: term }),

//   // Filtered recipes based on the search term
//   filteredRecipes: [],

//   // Action to filter recipes based on the search term
//   filterRecipes: () =>
//     set((state) => ({
//       filteredRecipes: state.recipes.filter((recipe) =>
//         recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
//       ),
//     })),
//   favorites: [], // Stores the IDs of favorite recipes
//   addFavorite: (recipeId) =>
//     set((state) => ({
//       // Add a recipe ID to the favorites list
//       favorites: [...state.favorites, recipeId],
//     })),
//   removeFavorite: (recipeId) =>
//     set((state) => ({
//       // Remove a recipe ID from the favorites list
//       favorites: state.favorites.filter((id) => id !== recipeId),
//     })),
//   recommendations: [], // Stores the list of recommended recipes
//   generateRecommendations: () =>
//     set((state) => {
//       // Generate recommendations based on favorites
//       const recommended = state.recipes.filter(
//         (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
//       );
//       return { recommendations: recommended };
//     }),
// }));
// export default useRecipeStore;
import create from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [], // List of all recipes
  favorites: [], // List of favorite recipe IDs
  recommendations: [], // List of recommended recipes

  // Add a recipe to favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])],
    })),

  // Remove a recipe from favorites
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Generate recommendations based on favorites
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter((recipe) =>
        state.favorites.includes(recipe.id)
      );
      return { recommendations: recommended.slice(0, 5) }; // Limit to top 5
    }),
}));

export default useRecipeStore;
