import React from "react";
import useRecipeStore from "./recipeStore";

const SearchBar = () => {
  // Accessing the setSearchTerm action from the Zustand store
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={(e) => setSearchTerm(e.target.value)} // Update the search term in the store
        style={{
          padding: "8px",
          width: "300px",
          margin: "10px 0",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
};

export default SearchBar;
