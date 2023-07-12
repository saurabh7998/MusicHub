import React, {useEffect, useMemo, useState} from "react"
import {Box, Typography, IconButton} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon
    from '@mui/icons-material/FavoriteBorderOutlined';
import Grid from "@mui/material/Grid";
import {useDispatch, useSelector} from "react-redux";
import {
    dislikeTrackThunk,
    likeTrackThunk
} from "../redux/thunks/likedTrackThunks";
import {
    getUserLikedTracksThunk,
    userDislikeTrackThunk,
    userLikeTrackThunk
} from "../redux/thunks/authThunks";

export default function TrackCard({track, key}) {
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.auth);
    const {likedTracks} = useSelector((state) => state.auth)

    const handleLike = async (track) => {
        const trackWithUser = {
            ...track,
            user: user,
        };

        if (!likedTracks.some((t) => t.trackId === track.trackId)) {
            try {
                const res = await dispatch(likeTrackThunk(trackWithUser));

                await dispatch(
                    userLikeTrackThunk({
                                           userId: user._id,
                                           likedTrackId: res.payload.track.trackId,
                                       })
                );
                dispatch(getUserLikedTracksThunk(user._id));
            } catch (error) {
                console.error('Error liking track and adding to user:', error);
            }
        } else {
            try {

                const res = await dispatch(dislikeTrackThunk(trackWithUser))
                console.log(res);

                await dispatch(userDislikeTrackThunk({
                                                         userId: user._id,
                                                         trackId: res.payload.track.trackId,
                                                     }));

                dispatch(getUserLikedTracksThunk(user._id));
            } catch (error) {
                console.error('Error disliking the track:', error);
            }
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
                                 {
                                     likedTracks.some((t) => t.trackId === track.trackId)
                                     ? <FavoriteIcon color="primary"/> :
                                     <FavoriteBorderOutlinedIcon color="primary"/>
                                 }

                             </IconButton>
                         )
                }

            </Grid>
        </div>
    );
}
