import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

Import your page components here (e.g., Home, About, etc.)
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Search from "./components/Search";

// Example layout component
const Layout = () => (
  <div>
    <header>
      <nav>
        <ul>
          <li>
            {/* <Link to="/">Home</Link> */}
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </main>
  </div>
);

const App = () => (
  <Router>
    <Layout />
    <Search />
  </Router>
);

export default App;
