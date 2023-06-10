import {createSlice} from "@reduxjs/toolkit";
import {loginUserThunk, logoutUserThunk, registerUserThunk} from "./authThunks";

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

const authSlice = createSlice({
                                        name: 'auth',
                                        initialState,
                                        extraReducers: {
                                            [registerUserThunk.pending]:
                                                (state, action) => {
                                                    state.isLoading = true
                                                },
                                            [registerUserThunk.fulfilled]:
                                                (state, action) => {
                                                    state.isLoading = false
                                                    state.isSuccess = true
                                                    state.user = action.payload
                                                },
                                            [registerUserThunk.rejected]:
                                                (state, action) => {
                                                    state.isLoading = false
                                                    state.isError = true
                                                    state.message =
                                                        action.payload
                                                    state.user = null
                                                },
                                            [loginUserThunk.pending]:
                                                (state, action) => {
                                                    state.isLoading = true
                                                },
                                            [loginUserThunk.fulfilled]:
                                                (state, action) => {
                                                    state.isLoading = false
                                                    state.isSuccess = true
                                                    state.user = action.payload
                                                },
                                            [loginUserThunk.rejected]:
                                                (state, action) => {
                                                    state.isLoading = false
                                                    state.isError = true
                                                    state.message = action.payload
                                                    state.user = null
                                                },
                                            [logoutUserThunk.fulfilled]:
                                                (state, action) => {
                                                    state.user = null
                                                },
                                        },
                                        reducers: {
                                            reset: (state) => {
                                                state.isLoading = false
                                                state.isSuccess = false
                                                state.isError = false
                                                state.message = ''
                                            },
                                        }
                                    });

export const { reset } = authSlice.actions
export default authSlice.reducer