import React from 'react';
import { Container, Grid } from '@mui/material';
import Header from './componenets/Header';
import Navbar from './componenets/Navbar';
import Hero from './componenets/Hero';
import Footer from './componenets/Footer';

function App() {
  
  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          {/* First Column - 1/6 Width */}
          <Grid item xs={12} md={2} sx={{ width: '100%' }}>
            <Navbar></Navbar>
          </Grid>


          {/* Second Column - 5/6 Width */}
          <Grid item xs={12} md={10} sx={{ width: '100%' }}>
            <Grid container spacing={2}>
              
              
              {/* First Row */}
              <Grid item xs={12}>
                <Header></Header>
              </Grid>
              
              
              {/* Second Row */}
              <Grid item xs={12}>
                {/* Image with fixed color overlay */}
                <Hero></Hero>
              </Grid>
              
              
              {/* Third Row */}
              <Grid item xs={12}>
                <Footer></Footer>
              </Grid>
              
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
