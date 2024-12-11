// src/services/githubApi.js

const GITHUB_API_URL = "https://api.github.com";

// Make sure you're using `REACT_APP_` in the environment variable name
const API_KEY = process.env.REACT_APP_GITHUB_API_KEY;

export const getGitHubUserData = async (username) => {
  try {
    const response = await fetch(
      `${GITHUB_API_URL}/users/${username}?access_token=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    throw error;
  }
};
