import {createAsyncThunk} from "@reduxjs/toolkit";
import * as likedTrackService from '../service/likedTrackService'

export const likeTrackThunk = createAsyncThunk(
    'api/like',
    async (track, thunkAPI) => {
        try {
            return await likedTrackService.likeTrack(track);
        } catch (error) {
            const message =
                (error.response &&
                 error.response.data &&
                 error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    });

export const getAllLikedTracksThunk = createAsyncThunk(
    '/api/getAllLikedTracks',
    async () => {
        return await likedTrackService.getAllLikedTracks();
    });

export const dislikeTrackThunk = createAsyncThunk(
    '/api/dislike',
    async (track, thunkAPI) => {
        try {
            return await likedTrackService.dislikeTrack(track);
        } catch (error) {
            const message =
                (error.response &&
                 error.response.data &&
                 error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    });