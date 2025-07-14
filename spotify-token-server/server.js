const express = require('express');
const axios = require('axios');
const cors = require('cors'); // <-- import CORS
require('dotenv').config();

const app = express();
const PORT = 4000;

app.use(cors()); // <-- enable CORS

app.get('/spotify-token', async (req, res) => {
  const token = Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64');

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

    res.json({ access_token: response.data.access_token });
  } catch (err) {
    res.status(500).json({ error: 'Failed to get token' });
  }
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
