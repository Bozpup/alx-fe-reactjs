import React from "react";
import useRecipeStore from "./recipeStore";

const AddFavoriteButton = ({ recipeId }) => {
  const addFavorite = useRecipeStore((state) => state.addFavorite);

  return (
    <button onClick={() => addFavorite(recipeId)}>Add to Favorites</button>
  );
};

export default AddFavoriteButton;
