// src/components/Home.jsx
import React, { useState, useEffect } from "react";
//import { getGitHubUserData } from "../services/githubApi";
import { getGitHubUserData } from "/src/services/gitHubApi.jsx";

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [username, setUsername] = useState("octocat"); // Default username

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getGitHubUserData(username);
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, [username]);

  return (
    <div>
      <h1>GitHub User Info</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      {userData ? (
        <div>
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <img src={userData.avatar_url} alt={userData.name} width="100" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
