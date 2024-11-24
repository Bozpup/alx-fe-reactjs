// src/hooks/useAuth.js
import { useState, useEffect } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated (this could check for a token in localStorage or sessionStorage)
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true); // Assume the user is authenticated if a token exists
    }
  }, []);

  return { isAuthenticated };
};

export default useAuth;
