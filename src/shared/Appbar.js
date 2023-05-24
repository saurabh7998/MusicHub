import React from 'react';
import {
    Toolbar,
    Button,
    Box
} from '@mui/material';

const TopAppBar = () => {
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
            }}
        >
            <Box spacing={8}>
                <Toolbar>
                    <Box sx={{display: 'flex', gap: '16px' }}>
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

export default TopAppBar;
