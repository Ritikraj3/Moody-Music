// api/server.js
import axios from 'axios';

export default async function handler(req, res) {
  const token = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString('base64');

  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      'grant_type=client_credentials',
      {
        headers: {
          Authorization: `Basic ${token}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    res.status(200).json({ access_token: response.data.access_token });
  } catch (err) {
    res.status(500).json({ error: 'Failed to get token' });
  }
}
