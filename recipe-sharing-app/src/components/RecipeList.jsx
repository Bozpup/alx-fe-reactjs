// import useRecipeStore from "./recipeStore";

// const RecipeList = () => {
//   const recipes = useRecipeStore((state) => state.recipes);

//   return (
//     <div>
//       {recipes.map((recipe) => (
//         <div key={recipe.id}>
//           <h3>{recipe.title}</h3>
//           <p>{recipe.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default RecipeList;
import React, { useEffect } from "react";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  // Get the list of filtered recipes from the Zustand store
  const recipes = useRecipeStore((state) => state.filteredRecipes);
  // Access the search term from the Zustand store
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  // Access actions to set the search term and filter recipes
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  // Update filtered recipes when the search term changes
  useEffect(() => {
    filterRecipes(); // Apply the filtering when the search term changes
  }, [searchTerm, filterRecipes]);

  return (
    <div>
      {/* Search input */}
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update search term
      />

      {/* Recipe list */}
      <div>
        <h2>Recipes</h2>
        {recipes.length > 0 ? (
          <ul>
            {recipes.map((recipe) => (
              <li key={recipe.id}>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No recipes found.</p> // Message when no recipes match the search
        )}
      </div>
    </div>
  );
};

export default RecipeList;
