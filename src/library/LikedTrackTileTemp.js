import {Box, IconButton, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import FavoriteBorderOutlinedIcon
    from "@mui/icons-material/FavoriteBorderOutlined";
import React from "react";

const LikedTrackTileTemp = ({track}) => {

    return(
        <div>
            <Grid container>
                <Grid xs={10}>
                    <Box
                        // key={key}
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
            </Grid>
        </div>
    )
}

export default LikedTrackTileTemp;