import React, { useState, useEffect } from "react";
import { fetchUserData } from "./../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState(""); // New state
  const [minRepos, setMinRepos] = useState(""); // New state
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleMinReposChange = (e) => {
    setMinRepos(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetchUserData({
        username,
        location, // Add state to capture this
        minRepos, // Add state to capture this
      });
      setUserData(response);
    } catch (error) {
      setError("Looks like we can't find the user. ");
    } finally {
      setIsLoading(false);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   setError(null);

  //   try {
  //     const filters = {
  //       username,
  //       location,
  //       minRepos: parseInt(minRepos, 10) || 0,
  //     };
  //     const response = await fetchUserData(filters);
  //     setUserData(response.data.items || []); // Adjust according to API structure
  //   } catch (error) {
  //     console.error(error); // Log for debugging
  //     setError("Looks like we can't find the user. Please try again.");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <label className="block text-gray-700 font-bold mb-2">
          Search GitHub Users
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={location}
          onChange={handleLocationChange}
          placeholder="Location"
        />
        <input
          type="number"
          min="0"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={minRepos}
          onChange={handleMinReposChange}
          placeholder="Min Repositories"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {isLoading ? "Loading..." : "Search"}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>

      {userData.length > 0 && (
        <div className="user-list mt-4">
          {userData.map((user) => (
            <div key={user.id} className="user-card border p-4 rounded mb-4">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="rounded-full w-16 h-16 mb-2"
              />
              <h2 className="font-bold">{user.login}</h2>
              <p>Location: {user.location || "N/A"}</p>
              <p>Public Repos: {user.public_repos}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
