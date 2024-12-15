import axios from "axios";

const apiKey = import.meta.env.VITE_GITHUB_API_KEY;

// Ensure the function is named `getGitHubUserData` if that's what you're trying to import.
export const getGitHubUserData = async ({ username, location, minRepos }) => {
  const query = [
    `q=${username || ""}`,
    location ? `location:${location}` : "",
    minRepos ? `repos:>=${minRepos}` : "",
  ]
    .filter(Boolean)
    .join("+");

  try {
    const response = await axios.get(
      `https://api.github.com/search/users?${query}`,
      {
        headers: {
          Authorization: `token ${apiKey}`,
        },
      }
    );
    return response.data.items || [];
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
