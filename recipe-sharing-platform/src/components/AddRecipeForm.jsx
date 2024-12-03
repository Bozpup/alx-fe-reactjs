import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setErrors] = useState("");

  // Validate function to check for errors
  const validate = () => {
    let validationErrors = [];

    if (!title.trim()) {
      validationErrors.push("Recipe title is required.");
    }
    if (!ingredients.trim()) {
      validationErrors.push("Ingredients are required.");
    } else if (ingredients.split("\n").length < 2) {
      validationErrors.push("Please include at least 2 ingredients.");
    }
    if (!steps.trim()) {
      validationErrors.push("Preparation steps are required.");
    } else if (steps.split("\n").length < 2) {
      validationErrors.push("Please include at least 2 steps.");
    }

    setErrors(validationErrors); // Set the errors state
    return validationErrors.length === 0; // Return true if there are no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Run validation before submitting
    if (!validate()) {
      return; // Stop the form submission if validation fails
    }

    const newRecipe = {
      title: title.trim(),
      ingredients: ingredients
        .split("\n")
        .map((ingredient) => ingredient.trim()),
      steps: steps.split("\n").map((step) => step.trim()),
    };

    console.log("Recipe submitted:", newRecipe);

    // Clear the form fields
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors(""); // Clear the errors after successful submission
  };

  return (
    <div className="bg-blue-400 min-h-screen m-20 lg:p-10 rounded-lg shadow-lg">
      <h2 className="hover:scale-110 transition-transform duration-300 ease-in text-purple-900 p-4 font-bold md:text-4xl">
        Add a New Recipe
      </h2>
      {error && (
        <div className="bg-red-200 p-4 rounded-lg">
          <ul>
            {error.map((err, index) => (
              <li key={index} className="text-red-600">
                {err}
              </li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Recipe Title</label>
          <br />
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 p-2 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients (one per line)</label>
          <br />
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="border-2 p-2 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="steps">Preparation Steps</label>
          <br />
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="border-2 p-2 rounded-md"
          />
        </div>
        <br />
        <button type="submit" className="bg-red-400 p-4 rounded-lg shadow-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
