import React, {useEffect, useState} from 'react';
import {Box, Typography, TextField, Button} from '@mui/material';
import {toast} from 'react-toastify'
import {useDispatch, useSelector} from "react-redux";
import {loginUserThunk} from "../redux/thunks/authThunks";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user, isSuccess, isError, message} = useSelector(
        (state) => state.auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (isError) {
            toast.error(message);
            console.log(message);
        }
        if (isSuccess || user) {
            navigate('/');
        }
    }, [user, isError, message, dispatch, navigate]);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(loginUserThunk({
                                    email,
                                    password
                                }))

    };

    const inputStyles = {
        color: 'white', // Set the desired text color here
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            color="white"
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
                    InputLabelProps={{style: inputStyles}}
                    InputProps={{style: inputStyles}}
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
                    InputLabelProps={{style: inputStyles}}
                    InputProps={{style: inputStyles}}
                />
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{marginTop: 2}}
                >
                    Sign In
                </Button>
            </Box>
        </Box>
    );
};

export default Login;
