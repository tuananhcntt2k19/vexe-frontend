import React from 'react';
import PropTypes from 'prop-types';
import { Card, Box, Container, Typography, Grid } from '@mui/material';
import BookingFeature from 'features/Booking';
import NewsFeature from 'features/News';

HomePage.propTypes = {

};


function HomePage(props) {
    let bgImage = 'https://media.istockphoto.com/vectors/bus-stop-and-bus-on-city-background-vector-id859321840?b=1&k=20&m=859321840&s=170667a&w=0&h=8jvI7q7wIzFLJgNSOXmjSV0vCo2TwGrtgl0f4ojuNiU=';
    return (
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
                <BookingFeature />
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
                <Box sx={{ my: 2 }}>
                    <NewsFeature />
                </Box>
            </Card>

        </>
    );
}

export default HomePage;