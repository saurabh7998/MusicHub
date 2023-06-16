import {createSlice} from "@reduxjs/toolkit";
import {getAllLikedTracksThunk, likeTrackThunk} from "./thunks/likedTrackThunks";

const initialState = {
    likedTracks: [],
}

const likedTrackSlice = createSlice({
                                        name: 'auth',
                                        initialState,
                                        extraReducers: {
                                            [likeTrackThunk.fulfilled]:
                                                (state, action) => {
                                                    if (action.payload.track) {
                                                        state.likedTracks.push(
                                                            action.payload.track)
                                                    }
                                                },
                                            [getAllLikedTracksThunk.fulfilled]:
                                                (state, action) => {
                                                    state.likedTracks =
                                                        action.payload.track;
                                                }
                                        },
                                        reducers: {}
                                    });

export default likedTrackSlice.reducer