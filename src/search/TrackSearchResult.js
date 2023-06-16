import React, {useEffect, useMemo, useState} from "react"
import {Box, Typography, IconButton} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon
    from '@mui/icons-material/FavoriteBorderOutlined';
import Grid from "@mui/material/Grid";
import {useDispatch, useSelector} from "react-redux";
import {likeTrackThunk} from "../redux/thunks/likedTrackThunks";
import {userLikeTrackThunk} from "../redux/thunks/authThunks";

export default function TrackSearchResult({track, key}) {
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.auth);

    const handleLike = async (track) => {
        const trackWithUser = {
            ...track,
            user: user,
        };

        try {
            const res = await dispatch(likeTrackThunk(trackWithUser));

            await dispatch(
                userLikeTrackThunk({
                                            userId: user._id,
                                            likedTrackId: res.payload.track.trackId,
                                        })
            );
        } catch (error) {
            console.error('Error liking track and adding to user:', error);
        }
    };

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
                {
                    user && (
                             <IconButton onClick={() => handleLike(track)}>
                                 <FavoriteBorderOutlinedIcon color="primary"/>
                             </IconButton>
                         )
                }

            </Grid>
        </div>
    );
}
