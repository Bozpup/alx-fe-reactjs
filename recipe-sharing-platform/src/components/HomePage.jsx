import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("/data.json");

        console.log("Response", response);
        const data = await response.json();
        console.log(data);
        setRecipes(data);
      } catch (error) {
        console.error("Failed to load message", error);
      }
    };

    fetchRecipes();
  }, []);
  return (
    <div className="min-h-screen bg-blue-200 lg::p-20 m-30 rounded-lg shadow-lg">
      <h5 className="hover:scale-110 transition-transform duration-300 ease-in text-purple-900 p-4 font-bold text-4xl">
        Recipes
      </h5>
      <Link className=" underline font-3xl" to="/add-recipe">
        Add a New Recipe
      </Link>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="rounded-lg m-8 p-4 bg-gray-500 hover:bg-gray-300 shadow-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  "
          >
            <img
              src={recipe.image}
              className="rounded-full w-50 h-50 mx-auto hover:scale-110 transition-transform duration-300 ease-in mb-5 md:m-11 "
            ></img>
            <p className=" md:p-14  "> {recipe.title}</p>
            <p className="md: p-12"> {recipe.summary}</p>
            <Link
              to={`/recipe/${recipe.id}`}
              className="md:p-16 text-blue-100 hover:underline mt-4 block text-center"
            >
              View Recipe
            </Link>
          </div>
        ))
      ) : (
        <p> loading recipes....</p>
      )}
    </div>
  );
};

export default HomePage;
