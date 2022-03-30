import SendIcon from '@mui/icons-material/Send';
import { Autocomplete, Button, Grid, TextField, Container } from '@mui/material';
import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import BookingForm from './components/BookingForm';
import SearchTicketForm from './components/SearchTicketForm';



BookingFeature.propTypes = {

};

function BookingFeature(props) {
    const match = useRouteMatch()
    return (
        <>
            <SearchTicketForm />
        </>
    );
}

export default BookingFeature;