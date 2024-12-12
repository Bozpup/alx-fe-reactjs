export const fetchUserData = async (username, location, minRepos) => {
  let q = `q=${username}`; // Base q

  if (location) {
    q += `+location:${location}`;
  }

  if (minRepos) {
    q += `+repo:${minRepos}`;
  }

  const url = `https://api.github.com/search/users?${q}`; // Construct URL

  try {
    const response = await axios.get(url);
    return response.data.items; // Access user data from response
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
