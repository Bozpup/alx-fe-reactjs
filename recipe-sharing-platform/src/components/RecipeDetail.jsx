import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        const foundRecipe = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(foundRecipe);
      } catch (error) {
        console.error("Failed to load", error);
      }
    };
    fetchRecipeDetails();
  }, [id]);

  if (!recipe) {
    return <h1> Loading recipe ...</h1>;
  }
  return (
    <div className="md:p-20 lg:m-20 min-h-screen rounded-lg shadowlg bg-pink-100">
      <h1 className="  hover:scale-110 transition-transform duration-200 ease-in-out text-purple-900 font-bold lg:text-5xl md:text-3xl p-10">
        {recipe.title}
      </h1>
      <img className="mx-auto rounded-full m-10 " src={recipe.image}></img>
      <h1 className=" mb-3 md:text-3xl font-bold hover:text-purple-500  underline hover:decoration-dashed">
        Instructions
      </h1>
      <p className="mb-3"> {recipe.instructions}</p>
      <ul>
        <h1 className="mb-1 md:text-3xl font-bold hover:text-purple-500  underline hover:decoration-dashed">
          Ingredients
        </h1>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDetail;
