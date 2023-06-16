import React, {useState} from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
} from '@mui/material';
import {useDispatch} from "react-redux";
import {registerUserThunk} from "../redux/thunks/authThunks";
import {reset} from "../redux/authSlice";

const Signup = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profileName, setProfileName] = useState('');
    const [gender, setGender] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleProfileNameChange = (event) => {
        setProfileName(event.target.value);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(registerUserThunk({
                                       name: profileName,
                                       email,
                                       password,
                                   }));
        dispatch(reset());
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
            color="white" // Setting text color to white
        >
            <Typography variant="h4" component="h1" marginBottom={4}>
                Sign Up
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
                <TextField
                    variant="outlined"
                    label="Profile Name"
                    type="text"
                    value={profileName}
                    onChange={handleProfileNameChange}
                    fullWidth
                    required
                    margin="normal"
                    InputLabelProps={{style: inputStyles}}
                    InputProps={{style: inputStyles}}
                />
                <FormControl component="fieldset" fullWidth
                             margin="normal" required>
                    <Typography>Gender</Typography>
                    <RadioGroup value={gender} onChange={handleGenderChange}
                                row>
                        <FormControlLabel value="female" control={<Radio/>}
                                          label="Female"/>
                        <FormControlLabel value="male" control={<Radio/>}
                                          label="Male"/>
                        <FormControlLabel value="other" control={<Radio/>}
                                          label="Other"/>
                    </RadioGroup>
                </FormControl>
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{marginTop: 2}}
                >
                    Sign Up
                </Button>
            </Box>
            <Typography variant="body2" marginTop={2}>
                Already have an account? <a href="/login">Log In</a>
            </Typography>
        </Box>
    );
};

export default Signup;
