import axios from "axios";

const SPOTIFY_API = 'http://localhost:4000/api'

export const likeTrack = async (user) => {
    const response = await axios.post(`${SPOTIFY_API}/${'like'}`, user);
    return response.data;
};

export const getAllLikedTracks = async () => {
    const response = await axios.get(`${SPOTIFY_API}/${'liked'}`);
    return response.data;
}