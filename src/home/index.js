import Album from "../Album";
import Grid from "@mui/material/Grid";
import {Box} from "@mui/material";
import SideNavbar from "../shared/SideNavbar";
import Appbar from "../shared/Appbar";
import SpotifyWebApi from "spotify-web-api-node";
import useAuth from "../useAuth";
import {useEffect, useState} from "react";

export const spotifyApi = new SpotifyWebApi({
                                                clientId: "4a89680f85b44ea0931efc1d24e59460",
                                            })

const Home = () => {
    const accessToken = useAuth();
    const[latestAlbums, setLatestAlbums] = useState([]);
    useEffect(() => {
        if (!accessToken) {
            return
        }
        spotifyApi.setAccessToken(accessToken)
        spotifyApi.getFeaturedPlaylists().then((res) => {
            setLatestAlbums(res.body.playlists.items);
        })
    }, [accessToken]);

    // useEffect(() => {
    //     if(accessToken) {
    //         spotifyApi.getNewReleases().then((res) => {
    //             console.log(res.data);
    //         });
    //     }
    // }, []);

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


