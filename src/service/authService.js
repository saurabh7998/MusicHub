import axios from "axios";

const SPOTIFY_API = 'http://localhost:4000/api'

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