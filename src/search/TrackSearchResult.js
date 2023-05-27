import React, {useState} from "react"
import {Box, Typography, IconButton} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from "@mui/material/Grid";

export default function TrackSearchResult({track, key}) {

    return (
        <div>
            <Grid container>
                <Grid xs={10}>
                    <Box
                        key={key}
                        display="flex"
                        alignItems="center"
                        py={1}
                    >
                        <img src={track.albumUrl} alt={track.title}
                             style={{width: 60, height: 60, marginRight: 16}}/>
                        <Box>
                            <Typography
                                variant="h6"
                                color="white"
                            >
                                {track.title}
                            </Typography>
                            <Typography
                                variant="body1"
                                color="white"
                            >
                                {track.artist}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <IconButton>
                    <FavoriteIcon color="primary"/>
                </IconButton>
            </Grid>
        </div>
    );
}
