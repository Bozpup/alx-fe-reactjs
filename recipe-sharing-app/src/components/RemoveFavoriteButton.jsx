import React from "react";
import useRecipeStore from "./recipeStore";

const RemoveFavoriteButton = ({ recipeId }) => {
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  return (
    <button onClick={() => removeFavorite(recipeId)}>
      Remove from Favorites
    </button>
  );
};

export default RemoveFavoriteButton;
