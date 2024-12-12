import React, { useState, useEffect } from "react";
import axios from "axios";

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
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );

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
        <label> Search github users</label>
        <input type="text" value={username} onChange={handleChange} />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading" : "Search"}
        </button>

        {error && <p> {error}</p>}
        {userData && (
          <div className="user-info">
            <img src={userData.avatar_url} alt={userData.login} />
            <h2>{userData.login}</h2>
            <a href={userData.html_url} target="_blank" rel="noreferrer">
              View Profile
            </a>
          </div>
        )}
      </form>
    </div>
  );
};

export default Search;
