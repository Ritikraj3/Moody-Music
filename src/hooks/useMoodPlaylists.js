import { useEffect, useState } from "react";
import { getSpotifyToken } from "../utils/getSpotifyToken";
import { getMoodPlaylists } from "../utils/getMoodPlaylists";

const CACHE = {}; // In-memory cache

export function useMoodPlaylists(genre) {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!genre) return;

    const fetchData = async () => {
      setLoading(true);

      try {
        const cacheKey = `${genre}`;
        if (CACHE[cacheKey]) {
          console.log(CACHE);
          console.log("Fetched from cache");
          setPlaylists(CACHE[cacheKey]);
          setError("");
          setLoading(false);
          return;
        }
        console.log("Fetched from API");

        const token = await getSpotifyToken();
        const randomOffset = Math.floor(Math.random() * 100);

        const items = await getMoodPlaylists(token, genre, randomOffset);

        CACHE[cacheKey] = items;
        setPlaylists(items);
        setError("");
      } catch (err) {
        console.error(err);
        setError("Failed to fetch playlists");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [genre]);

  return { playlists, loading, error };
}
