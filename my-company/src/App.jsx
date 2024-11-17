import { useState } from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Home from "./Home";
import Services from "./Services";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
