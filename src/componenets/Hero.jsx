import React from 'react';

function Hero(props) {
    const secondaryColor = '#17998C';
    const imageUrl = '/aiir.jpg';
    return (
        <div style={{ position: 'relative', height: '73.33vh', borderRadius: '10px', overflow: 'hidden' }}>
                  <img src={imageUrl} alt="background" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(50%)', borderRadius: '10px' }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: secondaryColor, opacity: 0.5 }}>
                    
                  </div>
        </div>
    );
}

export default Hero;