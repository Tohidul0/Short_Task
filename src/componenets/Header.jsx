import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Grid } from '@mui/material';
import AdfScannerIcon from '@mui/icons-material/AdfScanner';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

function Header(props) {
    const secondaryColor = '#17998C';

    return (
        <div style={{ backgroundColor: secondaryColor, height: '10.33vh',borderRadius: '10px' ,  display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
           <Container>
           <Grid container>
                <Grid item xs={3} md={7} sx={2}>
                    <MenuIcon style={{color:'white', paddingTop:'10px'}}></MenuIcon>
                </Grid>
                <Grid item xs={9} md={5} sx={10} >
                    <div style={{display:'flex', justifyContent:'space-between', alignItems: 'center'}}>
                        <Grid item xs={8}>
                        <div style={{paddingRight:'5px', paddingLeft:'5px',  width:'110px', display:'flex', justifyContent:'space-between', alignItems:'center', borderColor:'white', borderRadius: '10px', backgroundColor : 'white'}}>
                                <AdfScannerIcon></AdfScannerIcon>
                                <p style={{fontSize:'12px'}}>65,215 AED</p>
                        </div>
                        </Grid>
                        <Grid item xs={4} style={{display:'flex', alignItems: 'center', justifyContent:'space-between'}}>
                        
                                <div style={{width:'15px', height:'15px', backgroundColor:'white', borderRadius:'100%' ,display:'flex', alignItems: 'center' }}>
                                    <NotificationsNoneIcon style={{width:'15px', height:'15px'}}/>
                                </div>
                                <div style={{display:'flex', alignItems: 'center'}}>
                                <img style={{width:'30px', height:'30px', borderRadius:'100%'}} src="/dc2ec5a571974417a5551420a4fb0587.webp" alt="" />
                                <p style={{color:'white'}}>Russel</p> 
                                </div>
                                     
                             
                        
                        </Grid>
                        
                    </div>
                </Grid>
           </Grid>
           </Container>
        </div>
    );
}

export default Header;