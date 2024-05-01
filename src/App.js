import React from 'react';
import { Container, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function App() {
  const theme = useTheme();
  const secondaryColor = '#17998C';
  const whiteColor = '#ffffff';
  const imageUrl = '/aiir.jpg';
  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          {/* First Column - 1/6 Width */}
          <Grid item xs={2}>
            <div style={{ backgroundColor:secondaryColor, textAlign: 'center', height: '100vh',borderRadius: '10px' }}>1/6 Width</div>
          </Grid>
          {/* Second Column - 5/6 Width */}
          <Grid item xs={10}>
            <Grid container spacing={2}>
              {/* First Row */}
              <Grid item xs={12}>
                <div style={{ backgroundColor: secondaryColor, textAlign: 'center', height: '15.33vh',borderRadius: '10px' }}>1/3 Height</div>
              </Grid>
              
              {/* Second Row */}
              <Grid item xs={12}>
                {/* Image with fixed color overlay */}
                <div style={{ position: 'relative', height: '63.33vh', borderRadius: '10px', overflow: 'hidden' }}>
                  <img src={imageUrl} alt="background" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(50%)', borderRadius: '10px' }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: secondaryColor, opacity: 0.5 }}></div>
                </div>
              </Grid>
              
              {/* Third Row */}
              <Grid item xs={12}>
                <div style={{ backgroundColor: secondaryColor, textAlign: 'center', height: '15.33vh',borderRadius: '10px' }}>1/3 Height</div>
              </Grid>
              
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
