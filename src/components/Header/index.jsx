import React from 'react';
import PropTypes from 'prop-types';
import { Container, Typography, Toolbar, AppBar, Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ScrollHandleAppBar from './components/ScrollHandleAppBar';

Header.propTypes = {

};

function Header(props) {
    return (
        <Container>
            <ScrollHandleAppBar>
                <AppBar sx={{ bgColor: "transparent" }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" container>
                            VeXe.Online
                        </Typography>
                    </Toolbar>
                </AppBar>
            </ScrollHandleAppBar>
        </Container>
    );
}

export default Header;