import React, { useState, useEffect } from "react";
import axios from "axios";
import { fetchUserData } from "./../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetchUserData(username);
      setUserData(response.data);
    } catch (error) {
      setError("Looks like we cant find the user");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label class="block text-gray-700 font-bold mb-2">
          {" "}
          Search github users
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={username}
          onChange={handleChange}
        />
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Location" /* Add new field */
        />
        <input
          type="number"
          min="0"
          placeholder="Min Repositories" /* Add new field */
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading" : "Search"}
        </button>
        {error && <p> {error}</p>}

        {/* {userData && (
          <div className="user-info">
            <img src={userData.avatar_url} alt={userData.login} />
            <h2>{userData.login}</h2>
            <a href={userData.html_url} target="_blank" rel="noreferrer">
              View Profile
            </a>
          </div>
        )} */}
        {userData && (
          <div className="user-list">
            {userData.map((user) => (
              <div key={user.id} className="user-card">
                <img src={user.avatar_url} alt={user.login} />
                <h2>{user.login}</h2>
                <p>Location: {user.location || "NA"}</p>
                <p>Public Repos: {user.public_repos}</p>
                <a href={user.html_url} target="_blank" rel="noreferrer">
                  View Profile
                </a>
              </div>
            ))}
          </div>
        )}
      </form>
    </div>
  );
};

export default Search;
