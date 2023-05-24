import React from 'react';
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import { Home, Search, LibraryMusic, SurroundSound } from '@mui/icons-material';

const SideNavbar = () => {
    return (
        <Box sx={{ display: 'flex', position: 'fixed', height: '100vh' }}>
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
                            <SurroundSound sx={{ fontSize: '50px' }} />
                        </ListItemIcon>
                        <ListItemText primary="MusicHub" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Search />
                        </ListItemIcon>
                        <ListItemText primary="Search" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <LibraryMusic />
                        </ListItemIcon>
                        <ListItemText primary="Your Library" />
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    );
};

export default SideNavbar;
