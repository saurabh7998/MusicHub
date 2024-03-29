import PlaylistCard from "./PlaylistCard";
import Grid from "@mui/material/Grid";
import {Box} from "@mui/material";
import SideNavbar from "../shared/SideNavbar";
import Appbar from "../shared/Appbar";
import {spotifyApi} from "../shared/common";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

const Home = () => {
    const accessToken = useSelector((state) => state.app.accessToken);
    const [latestPlaylists, setLatestPlaylists] = useState([]);

    useEffect(() => {
        if (!accessToken) {
            console.log("No access token!")
            return
        }
        spotifyApi.getFeaturedPlaylists().then((res) => {
            setLatestPlaylists(res.body.playlists.items);
        })
    }, [accessToken]);

    return (
        <Grid container>
            <Grid xs={2}>
                <SideNavbar/>
            </Grid>
            <Grid xs={10}>
                <Box
                    sx={{
                        backgroundColor: '#1E1E1E',
                        color: '#FFFFFF',
                        padding: '20px',
                        height: '100%',
                    }}
                >
                    <Box sx={{marginBottom: '20px'}}>
                        <Appbar/>
                    </Box>
                    <Grid container spacing={4}>
                        {
                            latestPlaylists.map((playlist) => <PlaylistCard playlist={playlist}/>)
                        }
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Home;


