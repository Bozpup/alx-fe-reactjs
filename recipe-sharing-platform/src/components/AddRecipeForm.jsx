import React from "react";
import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !ingredients || !steps) {
      return setErrors("All fields are required");
    }
    if (ingredients.split("\n").length < 2) {
      setErrors("Please include atleast 2 ingredients");
    }
    if (steps.split("\n").length < 2) {
      return setErrors("please include alteast 2 steps");
    }
    setErrors("");

    const newRecipes = {
      title,
      ingredients: ingredients.split("\n"),
      steps: steps.split("\n"),
    };
    console.log("Recipe submitted", newRecipes);
    setTitle("");
    setIngredients("");
    setSteps("");
  };
  return (
    <div className="bg-blue-400 min-h-screen m-20 lg:p-10 rounded-lg shadow-lg">
      <h2 className="hover:scale-110 transition-transform duration-300 ease-in text-purple-900 p-4 font-bold md:text-4xl ">
        Add a New Recipe
      </h2>
      {error && <p>{error} </p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title"> Recipe Title</label>
          <br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="ingredients"> Ingredients (one per line )</label>
          <br />
          <textarea
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          <div>
            <label htmlFor="steps"> Preparation Steps</label>
            <br />
            <textarea
              type="text"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
            />
          </div>
          <br />
          <button
            type="submit"
            className="bg-red-400 p-6 rounded-lg shadow-lg "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
