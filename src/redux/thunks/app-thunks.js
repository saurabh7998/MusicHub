import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from '../../service'

export const setAccessTokenThunk = createAsyncThunk(
    'spotifywebapi/getToken',
    async () => {
        const res = await service.getAccessTokenFromSpotifyAPI();
        return res.data;
    })




