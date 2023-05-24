import Grid from "@mui/material/Grid";
import SideNavbar from "../shared/SideNavbar";
import TopAppBar from "../shared/Appbar";
import {Box} from "@mui/material";

const Library = () => {
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
                    <TopAppBar/>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Library;