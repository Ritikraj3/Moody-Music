export const getSpotifyToken = async () => {
  const response = await fetch("http://localhost:4000/spotify-token");
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error || "Failed to get token");
  }

  return data.access_token;
};

