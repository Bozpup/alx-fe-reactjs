import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#333", // Dark background color
        padding: "10px", // Padding for the navbar
        display: "flex", // Flexbox for layout
        justifyContent: "space-around", // Distribute links evenly
        alignItems: "center", // Center items vertically
      }}
    >
      <Link to="/" style={{ margin: "0 10px" }}>
        Home
      </Link>
      <Link to="/about" style={{ margin: "0 10px" }}>
        About
      </Link>
      <Link to="/contact" style={{ margin: "0 10px" }}>
        Contact
      </Link>
      <Link to="/services" style={{ margin: "0 10px" }}>
        Services
      </Link>
    </nav>
  );
}

export default Navbar;
