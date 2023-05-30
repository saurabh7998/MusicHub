import {Route, Routes} from "react-router-dom";
import Home from "./home";
import SearchPage from "./search";
import Library from "./library";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setAccessTokenThunk} from "./redux/app-thunks";

const MusicHub = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setAccessTokenThunk())
    }, [setAccessTokenThunk]);

    return (
        <>
            <Routes>
                <Route path={"/"}
                       element={<Home/>}/>
                <Route path={"/search"}
                       element={<SearchPage/>}/>
                <Route path={"/library"} element={<Library/>}/>
            </Routes>
        </>
    );
}

export default MusicHub;