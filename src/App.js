import {BrowserRouter, Routes, Route} from "react-router-dom";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {configureStore} from "@reduxjs/toolkit";
import {Provider, useDispatch, useSelector} from "react-redux";
import appReducer from './redux/appSlice';
import authReducer from "./redux/authSlice";
import likedTrackReducer from "./redux/likedTrackSlice"
import MusicHub from "./MusicHub";

const defaultTheme = createTheme();

const store = configureStore({
                                 reducer: {
                                     app: appReducer,
                                     auth: authReducer,
                                     likedTrack: likedTrackReducer,
                                 },
                             });

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
                <div>
                    <Provider store={store}>
                        <MusicHub/>
                    </Provider>
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
