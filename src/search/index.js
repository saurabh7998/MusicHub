import Grid from "@mui/material/Grid";
import SideNavbar from "../shared/SideNavbar";
import Appbar from "../shared/Appbar";
import {Box} from "@mui/material";

const Search = () => {
    return (
        <Grid container>
            <Grid xs={2}>
                <SideNavbar/>
            </Grid>
            <Grid xs={10}>
                <Box
                    sx={{
                        backgroundColor: 'black',
                        padding: '20px',
                    }}
                >
                    <Appbar/>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Search;