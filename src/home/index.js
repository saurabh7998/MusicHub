import Album from "../Album";
import Grid from "@mui/material/Grid";
import {Box} from "@mui/material";
import SideNavbar from "../shared/SideNavbar";
import Appbar from "../shared/Appbar";
import {spotifyApi} from "../shared/common";
import useAuth from "../useAuth";
import {useEffect, useState} from "react";

const Home = () => {
    const accessToken = useAuth();
    const [latestAlbums, setLatestAlbums] = useState([]);
    useEffect(() => {
        if (!accessToken) {
            return
        }
        spotifyApi.setAccessToken(accessToken)
        spotifyApi.getFeaturedPlaylists().then((res) => {
            setLatestAlbums(res.body.playlists.items);
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
                        backgroundColor: 'black',
                        padding: '20px',
                    }}
                >
                    <Box sx={{marginBottom: '20px'}}>
                        <Appbar/> {/* Render the TopAppBar component here */}
                    </Box>
                    <Grid container spacing={4}>
                        {
                            latestAlbums.map((album) => <Album album={album}/>)
                        }
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Home;


