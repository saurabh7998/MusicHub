import * as React from 'react';
import {useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function PlaylistCard({ playlist: playlist }) {
    const navigate = useNavigate();

    const handleViewClick = () => {
        navigate(`/playlist/${playlist.id}`);
    }
    return (
        <Grid item xs={9} sm={6} md={3}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <CardMedia
                    component="div"
                    sx={{
                        pt: '56.25%',
                    }}
                    image={playlist.images[0].url}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {playlist.name}
                    </Typography>
                    <Typography>
                        {playlist.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        onClick={handleViewClick}
                    >
                        View
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}