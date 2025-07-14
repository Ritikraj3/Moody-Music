
export const getMoodPlaylists = async (token, genre, offset = 0) => {
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(genre + 'hindi song')}&type=track&limit=20&offset=${offset}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();
    console.log(data);

    return data.tracks?.items || [];
  } catch (error) {
    console.error("Failed to fetch mood tracks:", error);
    return [];
  }
};
