import {BrowserRouter, Routes, Route} from "react-router-dom";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {configureStore} from "@reduxjs/toolkit";
import appReducer from './redux/index';
import {Provider, useDispatch, useSelector} from "react-redux";
import MusicHub from "./MusicHub";

const defaultTheme = createTheme();

const store = configureStore({
                                 reducer: {
                                     appSlice: appReducer,
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
