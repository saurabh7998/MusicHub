import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform login logic here
        console.log('Login submitted:', email, password);
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
        >
            <Typography variant="h4" component="h1" marginBottom={4}>
                Sign in
            </Typography>
            <Box
                component="form"
                width="100%"
                maxWidth={300}
                marginBottom={2}
                onSubmit={handleSubmit}
            >
                <TextField
                    variant="outlined"
                    label="Email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    fullWidth
                    required
                    autoFocus
                    margin="normal"
                />
                <TextField
                    variant="outlined"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    fullWidth
                    required
                    margin="normal"
                />
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ marginTop: 2 }}
                >
                    Sign In
                </Button>
            </Box>
        </Box>
    );
};

export default Login;
