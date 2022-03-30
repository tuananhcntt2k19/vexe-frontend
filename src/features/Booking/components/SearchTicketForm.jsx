import SendIcon from '@mui/icons-material/Send';
import { Autocomplete, Button, Grid, TextField, Container } from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

SearchTicketForm.propTypes = {

};

function SearchTicketForm(props) {
    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 },
    ]

    const [datePicker, setDatePicker] = useState(null)

    return (
        <Container>
            <Grid
                container
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
                spacing={2}
            >
                <Grid item xs={12} lg={3}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}

                        renderInput={(params) => <TextField {...params} label="Điểm đi" />}
                    />
                </Grid>
                <Grid item xs={12} lg={3}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}

                        renderInput={(params) => <TextField {...params} label="Điểm đến" />}
                    />
                </Grid>
                <Grid item xs={12} lg={3}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Thời gian"
                            value={datePicker}
                            onChange={(newValue) => {
                                setDatePicker(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid
                    item xs={12} lg={3}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                >
                    <Button
                        variant="contained"
                        endIcon={<SendIcon />}
                        sx={{ width: '100%' }}
                    >
                        Tìm Vé
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default SearchTicketForm;