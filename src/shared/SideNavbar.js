import React from 'react';
import {Link} from "react-router-dom";
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import {Home, Search, LibraryMusic, SurroundSound} from '@mui/icons-material';

const SideNavbar = () => {
    return (
        <Box sx={{display: 'flex', position: 'fixed', height: '100vh'}}>
            <Drawer
                sx={{
                    '& .MuiDrawer-paper': {
                        width: '240px',
                        position: 'fixed',
                        height: '100vh'
                    }
                }}
                variant="permanent"
                anchor="left"
            >
                <List>
                    <ListItem
                        sx={{
                            fontSize: '42px',
                            fontWeight: 'bold',
                            justifyContent: 'center',
                            paddingTop: '16px',
                            paddingBottom: '16px'
                        }}
                    >
                        <ListItemIcon>
                            <SurroundSound sx={{fontSize: '50px'}}/>
                        </ListItemIcon>
                        <ListItemText primary="MusicHub"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Home/>
                        </ListItemIcon>
                        <Link to={"/"}>
                            <ListItemText primary="Home"/>
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Search/>
                        </ListItemIcon>
                        <Link to={"/search"}>
                            <ListItemText primary="Search"/>
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <LibraryMusic/>
                        </ListItemIcon>
                        <Link to={"/library"}>
                            <ListItemText primary="Your Library"/>
                        </Link>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    );
};

export default SideNavbar;
