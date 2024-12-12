export const fetchUserData = async (username, location, minRepos) => {
  let query = `q=${username}`; // Base query

  if (location) {
    query += `+location:${location}`;
  }

  if (minRepos) {
    query += `+repo:${minRepos}`;
  }

  const url = `https://api.github.com/search/users?${query}`; // Construct URL

  try {
    const response = await axios.get(url);
    return response.data.items; // Access user data from response
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
