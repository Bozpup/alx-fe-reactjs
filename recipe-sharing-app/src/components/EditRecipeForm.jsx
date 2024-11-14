import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useRecipeStore from "./recipeStore"; // Import your Zustand store

const EditRecipeForm = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const navigate = useNavigate(); // To navigate after successful update

  // Get recipes from the Zustand store
  const recipes = useRecipeStore((state) => state.recipes);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe); // Access updateRecipe action

  // Find the recipe to edit based on the ID
  const recipeToEdit = recipes.find((recipe) => recipe.id === parseInt(id));

  // State to hold updated recipe values
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  useEffect(() => {
    if (recipeToEdit) {
      setName(recipeToEdit.name);
      setIngredients(recipeToEdit.ingredients);
      setInstructions(recipeToEdit.instructions);
    }
  }, [recipeToEdit]);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    if (recipeToEdit) {
      const updatedRecipe = {
        id: recipeToEdit.id,
        name,
        ingredients,
        instructions,
      };

      // Call the updateRecipe action from Zustand store
      updateRecipe(recipeToEdit.id, updatedRecipe);

      // Redirect to the updated recipe's details page
      navigate(`/recipe/${recipeToEdit.id}`);
    }
  };

  if (!recipeToEdit) {
    return <div>Recipe not found!</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>

      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label>
        Ingredients:
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
      </label>

      <label>
        Instructions:
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        />
      </label>

      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;
