
import { useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

function Navbar(props) {
    const theme = useTheme();
    const secondaryColor = '#17998C';
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div style={{ backgroundColor:secondaryColor, textAlign: 'center', height: isMobile ? '15vh' : '100vh',borderRadius: '10px' }}>
            1/6 Width
        </div>
    );
}

export default Navbar;