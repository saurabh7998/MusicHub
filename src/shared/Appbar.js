import React from 'react';
import {
    Toolbar,
    Button,
    Box,
    InputBase,
    IconButton, Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logoutUserThunk} from "../redux/thunks/authThunks";
import {reset} from "../redux/authSlice";

const Appbar = ({setSearch}) => {
    const {user} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const isSearchPage = location.pathname === '/search';

    const handleLogout = () => {
        dispatch(logoutUserThunk());
        dispatch(reset());
        navigate("/");
    };

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
                                <IconButton sx={{
                                    p: '10px', color: 'rgba(255,'
                                                      + ' 255, 255, 255)',
                                }}
                                            aria-label="search">
                                    <SearchIcon/>
                                </IconButton>
                            </Box>
                        )}
                        {
                            !user && (
                                      <Box>
                                          <Button
                                              size="medium"
                                              onClick={() => navigate("/signup")}
                                          >
                                              Sign up
                                          </Button>
                                          <Button
                                              variant="contained"
                                              size="medium"
                                              onClick={() => navigate("/login")}
                                          >
                                              Login
                                          </Button>
                                      </Box>
                                  )
                        }
                        {
                            user && (
                                     <Box>
                                         <Button
                                             size="medium"
                                             style={{textTransform: 'none'}}
                                         >
                                             <Typography>
                                                 Hi {user.name}
                                             </Typography>
                                         </Button>
                                         <Button
                                             variant="contained"
                                             size="medium"
                                             onClick={handleLogout}
                                         >
                                             Logout
                                         </Button>
                                     </Box>
                                 )
                        }
                    </Box>
                </Toolbar>
            </Box>
        </Box>
    );
};

export default Appbar;
