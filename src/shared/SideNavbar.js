import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    useMediaQuery,
    useTheme
} from '@mui/material';
import { Home, Search, LibraryMusic, SurroundSound } from '@mui/icons-material';
import {useSelector} from "react-redux";

const SideNavbar = () => {
    const { user } = useSelector((state) => state.auth);
    const location = useLocation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const isActiveLink = (path) => {
        return location.pathname === path;
    };

    return (
        <Drawer
            sx={{
                '& .MuiDrawer-paper': {
                    width: '240px',
                    backgroundColor: 'black',
                    color: '#FFFFFF',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                }}
            >
                <List sx={{ flex: 1 }}>
                    <ListItem
                        sx={{
                            fontSize: '42px',
                            fontWeight: 'bold',
                            justifyContent: 'center',
                            paddingTop: '16px',
                            paddingBottom: '16px',
                        }}
                        button
                        component={Link}
                        to="/"
                    >
                        <ListItemIcon>
                            <SurroundSound sx={{ fontSize: '50px', color: '#f50057' }} />
                        </ListItemIcon>
                        {!isMobile && <ListItemText primary="MusicHub" />}
                    </ListItem>
                    <ListItem
                        button
                        component={Link}
                        to="/"
                        sx={{
                            backgroundColor: isActiveLink('/') ? '#323232' : 'transparent',
                            '&:hover': {
                                backgroundColor: '#323232',
                            },
                        }}
                    >
                        <ListItemIcon>
                            <Home sx={{ color: isActiveLink('/') ? '#f50057' : '#9E9E9E' }} />
                        </ListItemIcon>
                        {!isMobile && <ListItemText primary="Home" />}
                    </ListItem>
                    <ListItem
                        button
                        component={Link}
                        to="/search"
                        sx={{
                            backgroundColor: isActiveLink('/search') ? '#323232' : 'transparent',
                            '&:hover': {
                                backgroundColor: '#323232',
                            },
                        }}
                    >
                        <ListItemIcon>
                            <Search sx={{ color: isActiveLink('/search') ? '#f50057' : '#9E9E9E' }}/>
                        </ListItemIcon>
                        {!isMobile && <ListItemText primary="Search" />}
                    </ListItem>
                    <ListItem
                        button
                        component={Link}
                        to="/library"
                        disabled={!user}
                        sx={{
                            backgroundColor: isActiveLink('/library') ? '#323232' : 'transparent',
                            '&:hover': {
                                backgroundColor: '#323232',
                            },
                        }}
                    >
                        <ListItemIcon>
                            <LibraryMusic sx={{ color: isActiveLink('/library') ? '#f50057' : '#9E9E9E' }}/>
                        </ListItemIcon>
                        {!isMobile && <ListItemText primary="Your Library" />}
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );
};

export default SideNavbar;
