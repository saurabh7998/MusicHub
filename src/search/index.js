import React from 'react';
import Appbar from '../shared/Appbar';
import {Box, Grid} from '@mui/material';
import {spotifyApi} from '../shared/common';
import useAuth from '../useAuth';
import TrackSearchResult from './TrackSearchResult';
import SideNavbar from "../shared/SideNavbar";

const MainComponent = () => {
    const accessToken = useAuth();
    const [search, setSearch] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([]);

    React.useEffect(() => {
        if (!search) {
            setSearchResults([]);
            return;
        }
        if (!accessToken) {
            return;
        }

        let cancel = false;
        spotifyApi.searchTracks(search).then((res) => {
            if (cancel) {
                return;
            }
            setSearchResults(
                res.body.tracks.items.map((track) => {
                    const smallestAlbumImage = track.album.images.reduce(
                        (smallest, image) => {
                            if (image.height < smallest.height) {
                                return image;
                            }
                            return smallest;
                        }, track.album.images[0]);

                    return {
                        artist: track.artists[0].name,
                        title: track.name,
                        uri: track.uri,
                        albumUrl: smallestAlbumImage.url,
                    };
                })
            );
        });

        return () => (cancel = true);
    }, [search, accessToken]);

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
                        <Appbar setSearch={setSearch}/>
                    </Box>
                    <div>
                        {searchResults.map((track, index) => (
                            <div key={index} style={{marginBottom: '10px'}}>
                                <TrackSearchResult track={track}/>
                            </div>
                        ))}
                    </div>
                </Box>
            </Grid>
        </Grid>
    );
};

export default MainComponent;
