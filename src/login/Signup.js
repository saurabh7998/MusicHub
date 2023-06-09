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
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profileName, setProfileName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(null);
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

    const handleDateOfBirthChange = (date) => {
        setDateOfBirth(date);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform signup logic here
        console.log(
            'Signup submitted:',
            email,
            password,
            profileName,
            dateOfBirth,
            gender
        );
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
                <TextField
                    variant="outlined"
                    label="Profile Name"
                    type="text"
                    value={profileName}
                    onChange={handleProfileNameChange}
                    fullWidth
                    required
                    margin="normal"
                />
                <FormControl fullWidth margin="normal" required>
                    <Typography>Date of Birth</Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker label=""/>
                    </LocalizationProvider>
                </FormControl>
                <FormControl component="fieldset" fullWidth margin="normal"
                             required>
                    <Typography>Gender</Typography>
                    <RadioGroup value={gender} onChange={handleGenderChange}>
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
