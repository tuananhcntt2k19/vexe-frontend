import React from 'react';
import PropTypes from 'prop-types';
import {
    Card, Container, Box, CardContent, Typography, Grid, FormControl, Select, MenuItem, InputLabel, TextField,
    Button, Tooltip, Fade
} from '@mui/material';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

BookingForm.propTypes = {

};

function BookingForm(props) {
    let bgImage = 'https://media.istockphoto.com/vectors/bus-stop-and-bus-on-city-background-vector-id859321840?b=1&k=20&m=859321840&s=170667a&w=0&h=8jvI7q7wIzFLJgNSOXmjSV0vCo2TwGrtgl0f4ojuNiU=';

    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const theme = createTheme({
        components: {
            MuiTooltip: {
                styleOverrides: {
                    tooltip: {
                        padding: '10px 15px',
                        lineHeight: '1.5em',
                        background: '#fff',
                        border: 'none',
                        borderRadius: '3px',
                        boxShadow: '0 8px 10px 1px rgb(0 0 0 / 14%), 0 3px 14px 2px rgb(0 0 0 / 12%), 0 5px 5px -3px rgb(0 0 0 / 20%)',
                        color: '#555',
                        fontSize: '.875rem',
                    },
                    arrow: {
                        color: '#fff'
                    }
                },
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <>
                <Box
                    sx={{
                        backgroundImage: `url(${bgImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "top",
                        display: "grid",
                        placeItems: "center",
                        minHeight: '60vh'
                    }}
                >

                </Box>

                <Card
                    elevation={1}
                    sx={{
                        p: 2,
                        mx: { xs: 2, lg: 3 },
                        mt: -4,
                        mb: 4,
                    }}
                >
                    <Container>
                        <Grid container spacing={2} sx={{ mt: 2, mb: 4 }}>
                            <Grid item xs={4}>
                                <Card sx={{ display: 'flex', position: 'relative', overflow: 'visible', flexDirection: 'column' }}>
                                    <Box
                                        sx={{
                                            position: "relative",
                                            mx: 2,
                                            mt: -3,
                                            background: 'linear-gradient(60deg, #26c6da, #00acc1)',
                                            borderRadius: '0.2rem',
                                            boxShadow: 1
                                        }}
                                    >
                                        <Typography
                                            component="h4"
                                            variant="h6"
                                            sx={{
                                                textAlign: 'center',
                                                padding: '15px'
                                            }}
                                        >
                                            L???ch tr??nh chuy???n ??i
                                        </Typography>
                                    </Box>
                                    <CardContent>
                                        <Box
                                            sx={{
                                                textAlign: 'center',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <Typography component="span" sx={{ fontSize: 20, margin: '0 5px' }}>H???i Ph??ng</Typography>
                                            <ArrowCircleRightOutlinedIcon />
                                            <Typography component="span" sx={{ fontSize: 20, margin: '0 5px' }}>H???i Ph??ng</Typography>
                                        </Box>
                                        <Box sx={{ mt: 1 }}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Gi??? kh???i h??nh</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={age}
                                                    label="Age"
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                        <Box sx={{ mt: 1 }}>
                                            <FormControl fullWidth disabled>
                                                <InputLabel id="demo-simple-select-label">Gi??? ?????n</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={age}
                                                    label="Age"
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                        <Box sx={{ mt: 1 }}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">??i???m ????n</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={age}
                                                    label="Age"
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                        <Box sx={{ mt: 1 }}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">??i???m tr???</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={age}
                                                    label="Age"
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={8}>
                                <Card sx={{ display: 'flex', position: 'relative', overflow: 'visible', flexDirection: 'column' }}>
                                    <Box
                                        sx={{
                                            position: "relative",
                                            mx: 2,
                                            mt: -3,
                                            background: 'linear-gradient(60deg, #26c6da, #00acc1)',
                                            borderRadius: '0.2rem',
                                            boxShadow: 1
                                        }}
                                    >
                                        <Typography
                                            component="h4"
                                            variant="h6"
                                            sx={{ textAlign: 'center', padding: '15px' }}
                                        >
                                            S?? ????? ch???n gh???
                                        </Typography>
                                    </Box>
                                    <CardContent>
                                        <Grid container>
                                            <Tooltip
                                                title="Gh??? s???: 01"
                                                arrow
                                                TransitionComponent={Fade}
                                                TransitionProps={{ timeout: 600 }}
                                                placement="top"
                                            >
                                                <Box>
                                                    <ChairOutlinedIcon sx={{ fontSize: 60 }} />
                                                </Box>
                                            </Tooltip>
                                            <Box>
                                                <ChairOutlinedIcon sx={{ fontSize: 60 }} />
                                            </Box>
                                            <Box>
                                                <ChairOutlinedIcon sx={{ fontSize: 60 }} />
                                            </Box>
                                            <Box>
                                                <ChairOutlinedIcon sx={{ fontSize: 60 }} />
                                            </Box>
                                        </Grid>
                                        <Grid container sx={{ my: 2 }}>
                                            <Grid item xs={4}>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}
                                                >
                                                    <ChairOutlinedIcon />
                                                    <Typography component="span" sx={{ paddingLeft: '0.2rem' }}>Tr???ng</Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}
                                                >
                                                    <ChairOutlinedIcon />
                                                    <Typography component="span" sx={{ paddingLeft: '0.2rem' }}>??ang ch???n</Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}
                                                >
                                                    <ChairOutlinedIcon />
                                                    <Typography component="span" sx={{ paddingLeft: '0.2rem' }}>???? ?????t</Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid item xs={6}>
                                                <Typography component="div">Gh??? ???? ch???n:</Typography>
                                                <Typography component="div">S??? gh??? ???? ch???n:</Typography>
                                            </Grid>
                                            <Grid item xs={6} sx={{ textAlign: 'right' }}>
                                                <Typography component="div">Th??nh ti???n:</Typography>
                                                <Typography component="span">0 ?????ng</Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} sx={{ my: 2 }}>
                            <Grid item xs={6}>
                                <Card sx={{ display: 'flex', position: 'relative', overflow: 'visible', flexDirection: 'column' }}>
                                    <Box
                                        sx={{
                                            position: "relative",
                                            mx: 2,
                                            mt: -3,
                                            background: 'linear-gradient(60deg, #26c6da, #00acc1)',
                                            borderRadius: '0.2rem',
                                            boxShadow: 1
                                        }}
                                    >
                                        <Typography
                                            component="h4"
                                            variant="h6"
                                            sx={{ textAlign: 'center', padding: '15px' }}
                                        >
                                            Th??ng tin kh??ch h??ng
                                        </Typography>
                                    </Box>
                                    <CardContent>
                                        <Box sx={{ mt: 1 }}>
                                            <TextField fullWidth id="outlined-basic" label="H??? v?? t??n" variant="standard" />
                                        </Box>
                                        <Box sx={{ mt: 1 }}>
                                            <TextField fullWidth id="outlined-basic" label="S??? ??i???n tho???i" variant="standard" />
                                        </Box>
                                        <Box sx={{ mt: 1 }}>
                                            <TextField fullWidth id="outlined-basic" label="Email" variant="standard" />
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={6}>
                                <Card sx={{ display: 'flex', position: 'relative', overflow: 'visible', flexDirection: 'column' }}>
                                    <Box
                                        sx={{
                                            position: "relative",
                                            mx: 2,
                                            mt: -3,
                                            background: 'linear-gradient(60deg, #26c6da, #00acc1)',
                                            borderRadius: '0.2rem',
                                            boxShadow: 1
                                        }}
                                    >
                                        <Typography
                                            component="h4"
                                            variant="h6"
                                            sx={{ textAlign: 'center', padding: '15px' }}
                                        >
                                            Thanh to??n
                                        </Typography>
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
                                </Card>
                            </Grid>
                        </Grid>

                        <Grid container justifyContent="flex-end" sx={{ my: 3 }}>

                            <Button variant="outlined">Ho??n th??nh</Button>

                        </Grid>
                    </Container>
                </Card>
            </>
        </ThemeProvider>
    );
}

export default BookingForm;