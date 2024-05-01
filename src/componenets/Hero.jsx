import React from 'react';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import PlayForWorkOutlinedIcon from '@mui/icons-material/PlayForWorkOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import KitesurfingIcon from '@mui/icons-material/Kitesurfing';
import HikingIcon from '@mui/icons-material/Hiking';
import { Grid } from '@mui/material';

function Hero(props) {
    const secondaryColor = '#17998C';
    const imageUrl = '/aiir.jpg';
    return (
        <div style={{ position: 'relative', height: '73.33vh', borderRadius: '10px', overflow: 'hidden' }}>
                  <img src={imageUrl} alt="background" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(50%)', borderRadius: '10px',  zIndex: 0 }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: secondaryColor, opacity: 0.5, zIndex: 0 }}>
                    <Grid container >
                        <Grid item xs={4}>
                            <div style={{backgroundColor: 'white',zIndex: 1, opacity:100}}>
                                <p>jke;jgogfk</p>
                            </div>
                        </Grid>
                    </Grid>
                  </div>
        </div>
    );
}

export default Hero;