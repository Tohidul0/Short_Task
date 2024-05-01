import React, { useState } from 'react';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import PlayForWorkOutlinedIcon from '@mui/icons-material/PlayForWorkOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import KitesurfingIcon from '@mui/icons-material/Kitesurfing';
import HikingIcon from '@mui/icons-material/Hiking';
import { Button, Container, FormControl, Grid, InputLabel, MenuItem, NativeSelect, Select, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';



function Hero(props) {
    const secondaryColor = '#17998C';
    const imageUrl = '/aiir.jpg';
    const [alignment, setAlignment] = useState('left');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
    
    return (
        <div style={{ position: 'relative', height: '73.33vh', borderRadius: '10px', overflow: 'hidden' }}>
            <img src={imageUrl} alt="background" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(50%)', borderRadius: '10px', zIndex: -1 }} />
 
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(23, 153, 140, 0.5)', zIndex: 0 }}> {/* Updated with rgba */}
   
                <Container>
                    <Grid  style={{ paddingTop: '55px', paddingLeft: '40px', position: 'relative', zIndex: 1 }}>
                        <Grid item xs={4}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ paddingRight: '5px', color: 'black', paddingLeft: '5px', width: '125px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderColor: 'white', borderRadius: '10px', backgroundColor: 'white', opacity: 1 }}> 
                                <FlightTakeoffIcon style={{ }} />
                                <TextField
                                    hiddenLabel
                                    style={{ backgroundColor: 'white', paddingLeft: '10px' }}
                                    defaultValue="Search Pad"
                                    variant="standard"
                                    size="small"
                                />
                            </div>
                            <div>
                                <Button style={{color:'white', borderColor:'white'}} variant="outlined" startIcon={<PlayForWorkOutlinedIcon />}>
                                    PNR Import
                                </Button>
                            </div>
                            </div>
                        </Grid>
                    </Grid>

                    <Grid  style={{ marginTop: '30px', padding:'20px', paddingLeft: '40px', position: 'relative', zIndex: 1 }}>
                        
                            <Grid item xs={8} >
                                <Grid   style={{display:'flex', justifyContent:'center'}} >
                                    <Grid style={{display:'flex', justifyContent:'center'}}  item xs={6} style={{ height:'50px', overflow:'hidden'}} >
                                        <div style={{backgroundColor:'white', borderRadius:'20',borderRadius:'10px'}}>
                                            <ToggleButtonGroup size="small" value={alignment} exclusive onChange={handleChange}>
                                                <ToggleButton value="left"  style={{ backgroundColor: alignment === 'left' ? secondaryColor : 'inherit', color : alignment === 'left' ? 'white': 'inherit' }}>
                                                    ONE WAy
                                                </ToggleButton>
                                                <ToggleButton value="center" style={{ backgroundColor: alignment === 'center' ? secondaryColor : 'inherit', color : alignment === 'center' ? 'white': 'inherit' }}>
                                                    ROUND WAY
                                                </ToggleButton>
                                                <ToggleButton   ToggleButton value="right"  style={{ backgroundColor: alignment === 'right' ? secondaryColor : 'inherit', color : alignment === 'right' ? 'white': 'inherit' }}>
                                                    MULTY CITY
                                                </ToggleButton>
                                    
                                            </ToggleButtonGroup>
                                        </div>
                                    </Grid> 
                                </Grid>

                                <Grid container spacing={2} style={{marginTop:'15px'}} >
                                    <Grid item xs={6} style={{borderRadius:'20px'}}>
                                        
                                            <div style={{ display: 'flex',borderRadius:'10px', backgroundColor:'white', alignItems: 'center', justifyContent: 'space-between' }}>
                                            
                                                <p style={{fontSize:'14px', fontWeight:'bold'}}>From : </p>

                                                
                                                <Select defaultValue="Hazrat Shajalal Int Airport" style={{ flex: 1, color:'black', opacity:0.7  }}>
                                                    <MenuItem value="Hazrat Shajalal Int Airport">Hazrat Shajalal Int Airport</MenuItem>
                                                    <MenuItem value="option1">Option 1</MenuItem>
                                                </Select>
                                            </div>

                                            
                                       
                                    </Grid>
                                    <Grid item xs={6}>
                                        
                                            <div style={{ display: 'flex',borderRadius:'10px', backgroundColor:'white', alignItems: 'center', justifyContent: 'space-between' }}>
                                            
                                             <p style={{fontSize:'14px', fontWeight:'bold'}}>To : </p>

                                                
                                                <Select defaultValue="Dubai Int Airport" style={{ flex: 1,color:'black', opacity:0.7 }}>
                                                    <MenuItem value="Dubai Int Airport">Dubai Int Airport</MenuItem>
                                                    <MenuItem value="option1">Option 1</MenuItem>
                                                </Select>
                                            </div>
                                       
                                    </Grid>
                                    <Grid item xs={6}>
                                        
                                            <div style={{ display: 'flex',borderRadius:'10px', backgroundColor:'white', alignItems: 'center', justifyContent: 'space-between' }}>
                                            
                                             <CalendarMonthOutlinedIcon/>

                                                
                                                <Select defaultValue="Departure" style={{ flex: 1,color:'black', opacity:0.7 }}>
                                                    <MenuItem value="Departure">Departure</MenuItem>
                                                    <MenuItem value="option1">Option 1</MenuItem>
                                                </Select>
                                            </div>
                                       
                                    </Grid>
                                    <Grid item xs={6}>
                                        
                                            <div style={{ display: 'flex',borderRadius:'10px', backgroundColor:'white', alignItems: 'center', justifyContent: 'space-between' }}>
                                            
                                             <CalendarMonthOutlinedIcon/>

                                                
                                                <Select defaultValue="Add Return" style={{ flex: 1,color:'black', opacity:0.7 }}>
                                                    <MenuItem value="Add Return">Add Return</MenuItem>
                                                    <MenuItem value="option1">Option 1</MenuItem>
                                                </Select>
                                            </div>
                                       
                                    </Grid>
                                    <Grid item xs={6}>
                                        
                                            <div style={{ display: 'flex',borderRadius:'10px', backgroundColor:'white', alignItems: 'center', justifyContent: 'space-between' }}>
                                            
                                             <KitesurfingIcon/>

                                                
                                                <Select defaultValue="Select Class" style={{ flex: 1,color:'black', opacity:0.7 }}>
                                                    <MenuItem value="Select Class">Select Class</MenuItem>
                                                    <MenuItem value="option1">Option 1</MenuItem>
                                                </Select>
                                            </div>
                                       
                                    </Grid>
                                    <Grid item xs={6}>
                                        
                                            <div style={{ display: 'flex',borderRadius:'10px', backgroundColor:'white', alignItems: 'center', justifyContent: 'space-between' }}>
                                            
                                             <HikingIcon/>

                                                
                                                <Select defaultValue="Select Traveler" style={{ flex: 1,color:'black', opacity:0.7 }}>
                                                    <MenuItem value="Select Traveler">Select Traveler</MenuItem>
                                                    <MenuItem value="option1">Option 1</MenuItem>
                                                </Select>
                                            </div>
                                       
                                    </Grid>
                                </Grid>
                           
                            
                            </Grid>
                        
                    </Grid>



                    
                </Container>
            </div>
        </div>

    );
}

export default Hero;