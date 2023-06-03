import React from 'react';
import {
    Toolbar,
    Button,
    Box,
    InputBase,
    IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {useLocation} from "react-router-dom";

const Appbar = ({ setSearch }) => {
    const location = useLocation();
    const isSearchPage = location.pathname === '/search';
    return (
        <Box
            sx={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                display: 'flex',
                justifyContent: 'flex-end',
                position: 'sticky',
                top: 0,
                zIndex: 1,
                height: '100%',
            }}
        >
            <Box spacing={8}>
                <Toolbar>
                    <Box sx={{display: 'flex', gap: '16px'}}>
                        {isSearchPage && (
                            <Box sx={{position: 'relative'}}>
                                <InputBase
                                    sx={{
                                        color: 'primary',
                                        ml: '3px',
                                        backgroundColor:
                                            'rgba(255, 255, 255, 255)',
                                        borderRadius: '4px',
                                        padding: '4px',
                                        width: '800px',
                                    }}
                                    placeholder="What do you want to listen to?"
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <IconButton sx={{p: '10px', color:'rgba(255,'
                                                                  + ' 255, 255, 255)',}}
                                            aria-label="search">
                                    <SearchIcon/>
                                </IconButton>
                            </Box>
                        )}
                        <Button size="medium">
                            Sign up
                        </Button>
                        <Button variant="contained" size="medium">
                            Login
                        </Button>
                    </Box>
                </Toolbar>
            </Box>
        </Box>
    );
};

export default Appbar;
