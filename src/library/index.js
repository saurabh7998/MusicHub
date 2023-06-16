import Grid from "@mui/material/Grid";
import SideNavbar from "../shared/SideNavbar";
import Appbar from "../shared/Appbar";
import {Box, Typography} from "@mui/material";
import PlaylistCard from "../home/PlaylistCard";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getAllLikedTracksThunk} from "../redux/thunks/likedTrackThunks";
import TrackSearchResult from "../search/TrackSearchResult";
import {getUserLikedTracksThunk} from "../redux/thunks/authThunks";
import LikedTrackSlice from "../redux/likedTrackSlice";
import LikedTrackTileTemp from "./LikedTrackTileTemp";

const Library = () => {
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.auth);
    const {likedTracks} = useSelector((state) => state.auth)
    useEffect(() => {
        if (user) {
            dispatch(getUserLikedTracksThunk(user._id));
        }
    }, []);



    return (
        <Grid container>
            <Grid xs={2}>
                <SideNavbar/>
            </Grid>
            <Grid xs={10}>
                <Box
                    sx={{
                        backgroundColor: '#1E1E1E',
                        padding: '20px',
                    }}
                >
                    <Box sx={{marginBottom: '20px'}}>
                        <Appbar />
                    </Box>
                    <div>
                        {likedTracks.map((track, index) => (
                            <div key={index} style={{marginBottom: '10px'}}>
                                <LikedTrackTileTemp track={track}/>
                            </div>
                        ))}
                    </div>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Library;