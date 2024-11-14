import React from "react";
import { useParams } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(id))
  );

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>
        <strong>Ingredients:</strong> {recipe.ingredients.join(", ")}
      </p>
      <p>
        <strong>Instructions:</strong> {recipe.instructions}
      </p>
      <div className="mt-4">
        {/* Edit Recipe Button, can be created later */}
        <button
          onClick={() => navigate(`/edit-recipe/${recipe.id}`)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
        >
          Edit Recipe
        </button>

        {/* Delete Recipe Button */}
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>
    </div>
  );
};

export default RecipeDetails;
