import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />{" "}
        </Routes>
      </Router>
    </>
  );
}

export default App;
