import {createSlice} from "@reduxjs/toolkit";
import {setAccessTokenThunk} from "./app-thunks";
import {spotifyApi} from "../shared/common";

const initialState = {
    accessToken: ''
};

const spotifyApiSlice = createSlice({
                                        name: 'appSlice',
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
                                        reducers: {
                                            // setAccessToken(state, action) {
                                            //     console.log(action.payload)
                                            //     state = {
                                            //         accessToken:
                                            // action.payload } },
                                            getAccessToken(state, action) {
                                                return state.accessToken;
                                            }
                                        }
                                    });

export const {getAccessToken} = spotifyApiSlice.actions
export default spotifyApiSlice.reducer