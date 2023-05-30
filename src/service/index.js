import axios from "axios";

const SPOTIFY_API = 'http://localhost:4000/api'

export const getAccessTokenFromSpotifyAPI = async () => {
    const response = await axios.post(`${SPOTIFY_API}/${'authenticate'}`);
    return response;
}