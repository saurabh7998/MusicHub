import Grid from "@mui/material/Grid";
import SideNavbar from "../shared/SideNavbar";
import Appbar from "../shared/Appbar";
import {Box} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import TrackCard from "../shared/TrackCard";
import {getUserLikedTracksThunk} from "../redux/thunks/authThunks";

const Library = () => {
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.auth);
    const {likedTracks} = useSelector((state) => state.auth)
    useEffect(() => {
        if (user) {
            dispatch(getUserLikedTracksThunk(user._id));
        }
    }, [user]);

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
                        <Appbar/>
                    </Box>
                    <div>
                        {likedTracks.map((track, index) => (
                            <div key={index} style={{marginBottom: '10px'}}>
                                <TrackCard track={track}/>
                            </div>
                        ))}
                    </div>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Library;