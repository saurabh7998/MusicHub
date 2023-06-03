import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import Grid from "@mui/material/Grid";
import {Box} from "@mui/material";
import {spotifyApi} from "../shared/common";
import SideNavbar from "../shared/SideNavbar";
import Typography from "@mui/material/Typography";
import StickyHeadTable from "../shared/Table";

const Playlist = () => {
    const {id} = useParams();
    const accessToken = useSelector((state) => state.appSlice.accessToken);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        if (!accessToken) {
            console.log("No access token on Playlist page");
            return;
        }
        spotifyApi.getPlaylist(id).then((res) => {
            setName(res.body.name);
            setDescription(res.body.description);
            setTracks(res.body.tracks.items);
            setImage(res.body.images[0].url);
        });
    }, [accessToken])

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
                        <Grid container>
                            <Grid xs={3}>
                                <img src={image} alt={name}
                                     style={{
                                         width: 250,
                                         height: 250,
                                         marginRight: 16
                                     }}/>
                            </Grid>
                            <Grid xs={9}>
                                <Typography variant="h6">Playlist</Typography>
                                <Typography variant="h2">{name}</Typography>
                                <Typography
                                    variant="h5">{description}</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Grid container>
                        <StickyHeadTable data={tracks}/>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Playlist;