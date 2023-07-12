import {createSlice} from "@reduxjs/toolkit";
import {setAccessTokenThunk} from "./thunks/app-thunks";
import {spotifyApi} from "../shared/common";

const initialState = {
    accessToken: ''
};

const spotifyApiSlice = createSlice({
                                        name: 'app',
                                        initialState,
                                        extraReducers: {
                                            [setAccessTokenThunk.fulfilled]:
                                                (state, action) => {
                                                    state.accessToken =
                                                        action.payload.token;
                                                    spotifyApi.setAccessToken(
                                                        state.accessToken);
                                                },
                                        },
                                        reducers: {}
                                    });

export default spotifyApiSlice.reducer