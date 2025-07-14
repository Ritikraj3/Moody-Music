export const getSpotifyToken = async () => {
  const response = await fetch("/api/spotify");
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error || "Failed to get token");
  }

  return data.access_token;
};

