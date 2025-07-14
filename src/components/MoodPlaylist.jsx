import { useMoodPlaylists } from "../hooks/useMoodPlaylists";
import { moodThemes } from "../data/moodData";

export default function MoodPlaylist({ genre, currentMood }) {
  const theme = moodThemes[currentMood];
  const { playlists, loading, error } = useMoodPlaylists(genre);

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-red-400">{error}</p>;

  return (
    <div className="min-h-screen bg-neutral-900 w-full">
      <div className="p-4">
        <h2 className={`text-2xl font-semibold ${theme.text} mb-4 capitalize`}>
          {currentMood} Playlist
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {playlists.map((track) => {
            const trackId = track.uri?.split(":")[2]; // Extract the ID
            return (
              <div
                key={track.id}
                className="bg-zinc-800 p-2 rounded-lg text-white shadow-lg"
              >
                {/* Spotify Embed Player */}
                {trackId && (
                  <iframe
                    src={`https://open.spotify.com/embed/track/${trackId}`}
                    width="100%"
                    height="80"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                    className=" rounded"
                  ></iframe>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
