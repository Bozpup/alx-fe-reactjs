import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const EditRecipeForm = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(id))
  );
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const navigate = useNavigate();

  const [name, setName] = useState(recipe?.name || "");
  const [ingredients, setIngredients] = useState(
    recipe?.ingredients.join(", ") || ""
  );
  const [instructions, setInstructions] = useState(recipe?.instructions || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(id, {
      name,
      ingredients: ingredients.split(",").map((item) => item.trim()),
      instructions,
    });
    navigate(`/recipes/${id}`);
  };

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Recipe Name"
      />
      <textarea
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Ingredients (comma separated)"
      />
      <textarea
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        placeholder="Instructions"
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
