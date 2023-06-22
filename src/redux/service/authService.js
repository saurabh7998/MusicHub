import axios from "axios";

const SPOTIFY_API = 'http://localhost:4000/api'
// const SPOTIFY_API = 'https://music-hub-service.onrender.com/api'

export const registerUser = async (user) => {
    const response = await axios.post(`${SPOTIFY_API}/${'user'}`, user);
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
};

export const loginUser = async (user) => {
    const response = await axios.post(`${SPOTIFY_API}/${'user/login'}`, user);
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
};

// Logout user
export const logout = () => {
    localStorage.removeItem('user');
};

export const getUserLikedTracks = async (userId) => {
    const response = await axios.post(`${SPOTIFY_API}/${'user/likedSongs'}`,
                                      {userId});
    return response.data;
}

export const userLikeTrack = async ({userId, likedTrackId}) => {
    const response = await axios.post(`${SPOTIFY_API}/${'user/like'}`,
                                      {userId, likedTrackId})
    return response.data;
}

export const userDislikeTrack = async ({userId, trackId}) => {
    const response = await axios.post(`${SPOTIFY_API}/user/dislike`,
                                      {userId, trackId});
    return response.data;
};