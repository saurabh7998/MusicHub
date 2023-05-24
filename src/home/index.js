import Album from "../Album";
import Grid from "@mui/material/Grid";
import {Box} from "@mui/material";
import SideNavbar from "../shared/SideNavbar";
import TopAppBar from "../shared/Appbar";

const Home = () => {

    // replace this with albums from spotify api
    const albums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

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
                    <Box sx={{marginBottom: '20px'}}>
                        <TopAppBar/> {/* Render the TopAppBar component here */}
                    </Box>
                    <Grid container spacing={4}>
                        {
                            albums.map((album) => <Album/>)
                        }
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Home;


