import React from "react";
import { useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(id);
    navigate("/recipes");
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white p-2 rounded"
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
