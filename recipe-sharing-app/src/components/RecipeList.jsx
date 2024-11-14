import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  // Get the filtered recipes and the search term from the Zustand store
  const recipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  // When the search term changes, filter the recipes
  useEffect(() => {
    filterRecipes(); // Apply the filter based on the current searchTerm
  }, [searchTerm, filterRecipes]);

  return (
    <div>
      <h2>Recipe List</h2>
      <div>
        {recipes.length > 0 ? (
          <ul>
            {recipes.map((recipe) => (
              <li key={recipe.id}>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                {/* Link to a detailed recipe page, passing the recipe ID */}
                <Link to={`/recipe/${recipe.id}`}>View Details</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No recipes found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default RecipeList;
