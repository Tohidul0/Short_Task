import React from 'react';

function Footer(props) {
    const secondaryColor = '#17998C';
    return (
        <div style={{ backgroundColor: secondaryColor,color:'white', textAlign: 'center', height: '10.33vh',borderRadius: '10px', display:'flex', alignItems:'center', justifyContent:'center' }}>
           <p style={{fontSize:'14px', font:'small-caption'}}>@ 2023 All right reserved by Taildash</p>
        </div>
    );
}

export default Footer;