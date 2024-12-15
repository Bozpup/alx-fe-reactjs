import axios from "axios";

export const fetchUserData = async ({ username, location, minRepos }) => {
  const GITHUB_API_KEY =
    process.env.REACT_APP_GITHUB_API_KEY || "default_fallback_key";

  try {
    let query = "";
    if (username) query += `user:${username}`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>${minRepos}`;

    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}`,
      {
        headers: {
          Authorization: `token ${GITHUB_API_KEY}`,
        },
      }
    );

    return response.data.items; // 'items' contains the list of users
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
