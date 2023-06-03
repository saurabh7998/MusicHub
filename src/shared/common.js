import SpotifyWebApi from "spotify-web-api-node";

export const spotifyApi = new SpotifyWebApi({
                                                clientId: "4a89680f85b44ea0931efc1d24e59460",
                                            })

export const createTrackData = (imageUrl, title, album, dateAdded,
                                duration) => {
    return {imageUrl, title, album, dateAdded, duration};
}

export const formatDuration = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}