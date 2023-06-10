import {createAsyncThunk} from "@reduxjs/toolkit"
import * as authService from '../service/authService'

export const registerUserThunk = createAsyncThunk(
    'api/user',
    async (user, thunkAPI) => {
        try {
            return await authService.registerUser(user)
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

export const loginUserThunk = createAsyncThunk(
    '/api/user/login',
    async (user, thunkAPI) => {
        try {
            return await authService.loginUser(user)
        } catch (error) {
            const message =
                (error.response && error.response.data
                 && error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
);

export const logoutUserThunk = createAsyncThunk('auth/logout', async () => {
    await authService.logout()
});




