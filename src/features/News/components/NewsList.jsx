import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Container, Grid, Box } from '@mui/material';

NewsList.propTypes = {

};


function NewsList(props) {
    let image = 'https://bit.ly/3zv9PMF'
    return (
        <>
            <Container>
                <Grid
                    container
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                    spacing={2}
                >
                    <Grid item xs={12}>
                        <Typography component="h2" variant="h2" sx={{ textAlign: 'center' }}>Tin Tức</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography component="h4" sx={{ textAlign: 'center', mb: 2 }}>Tin tức mới nhất về VeXeOnline và thông tin các tuyến xe</Typography>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Card sx={{ display: 'flex', position: 'relative', overflow: 'visible', flexDirection: 'column' }}>
                            <Box position="relative" mx={2} mt={-3}>
                                <Box
                                    component="img"
                                    src={image}
                                    elevation={4}
                                    sx={{ width: '100%', position: 'relative', zIndex: 1, borderRadius: '0.5rem' }}
                                />
                            </Box>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Card sx={{ display: 'flex', position: 'relative', overflow: 'visible', flexDirection: 'column' }}>
                            <Box position="relative" mx={2} mt={-3}>
                                <Box
                                    component="img"
                                    src={image}
                                    elevation={4}
                                    sx={{ width: '100%', position: 'relative', zIndex: 1, borderRadius: '0.5rem' }}
                                />
                            </Box>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Card sx={{ display: 'flex', position: 'relative', overflow: 'visible', flexDirection: 'column' }}>
                            <Box position="relative" mx={2} mt={-3}>
                                <Box
                                    component="img"
                                    src={image}
                                    elevation={4}
                                    sx={{ width: '100%', position: 'relative', zIndex: 1, borderRadius: '0.5rem' }}
                                />
                            </Box>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default NewsList;