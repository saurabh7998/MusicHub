import {Route, Routes} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setAccessTokenThunk} from "./redux/app-thunks";
import Home from "./home";
import SearchPage from "./search";
import Library from "./library";
import Playlist from "./playlist";
import Login from "./login/Login";
import Signup from "./login/Signup";

const MusicHub = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setAccessTokenThunk())
    }, [setAccessTokenThunk]);

    return (
        <Routes>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/signup"} element={<Signup/>}/>
            <Route path={"/"}
                   element={<Home/>}/>
            <Route path={"/search"}
                   element={<SearchPage/>}/>
            <Route path={"/library"} element={<Library/>}/>
            <Route path={"/playlist/:id"} element={<Playlist/>}/>
        </Routes>
    );
}

export default MusicHub;