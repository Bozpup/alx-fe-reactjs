import "./App.css";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";
import SearchBar from "./components/SearchBar";
import AddFavoriteButton from "./components/AddFavotiteButton";
import FavoriteList from "./components/FavoriteList";
import RemoveFavoriteButton from "./components/RemoveFavoriteButton";
function App() {
  return (
    <>
      <RecipeList />
      <AddRecipeForm />
      <AddFavoriteButton recipeId={1} />
      <RemoveFavoriteButton recipeId={1} />
      <FavoriteList />
      <Routes>
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
      </Routes>
      <SearchBar />
    </>
  );
}

export default App;
