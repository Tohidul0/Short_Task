
import { Container, Divider, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import HouseTwoToneIcon from '@mui/icons-material/HouseTwoTone';
import CreditScoreTwoToneIcon from '@mui/icons-material/CreditScoreTwoTone';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import CurrencyExchangeRoundedIcon from '@mui/icons-material/CurrencyExchangeRounded';
import DatasetLinkedRoundedIcon from '@mui/icons-material/DatasetLinkedRounded';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';


import ImageSearchTwoToneIcon from '@mui/icons-material/ImageSearchTwoTone';

function Navbar(props) {
    const theme = useTheme();
    const secondaryColor = '#17998C';
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div style={{ backgroundColor:secondaryColor, color:'white', textAlign: 'center', height: isMobile ? '15vh' : '100vh',borderRadius: '10px' }}>
            <Container style={{paddingTop:'15px'}}>
                <img style={{width:'45', height:'35px', borderRadius:'100%'}} src="/logo.jpg"/>
                <Divider style={{marginBottom:'20px',marginTop:'10px' , backgroundColor:'white'}}></Divider>
                <div style={{paddingRight:'5px',color:'black', paddingLeft:'5px',  width:'125px', display:'flex', justifyContent:'space-between', alignItems:'center', borderColor:'white', borderRadius: '10px', backgroundColor : 'white'}}>
                                <ImageSearchTwoToneIcon/>
                                <p style={{fontSize:'14px'}}>65,215 AED</p>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <HouseTwoToneIcon/>
                    <p style={{fontSize:'14px',paddingLeft:'20px'}}>Home</p>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <CreditScoreTwoToneIcon/>
                    <p style={{fontSize:'14px',paddingLeft:'20px'}}>My Booking</p>
                </div>
                <div style={{display:'flex', alignItems:'center' }}>
                    <ManageAccountsRoundedIcon/>
                    <p style={{fontSize:'14px',paddingLeft:'20px'}}>Traveler</p>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <AccountCircleRoundedIcon/>
                    <p style={{fontSize:'14px',paddingLeft:'20px'}}>My Account</p>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <AccountBalanceRoundedIcon/>
                    <p style={{fontSize:'14px',paddingLeft:'20px'}}>Deposit</p>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <CurrencyExchangeRoundedIcon/>
                    <p style={{fontSize:'14px',paddingLeft:'20px'}}>Transaction</p>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <DatasetLinkedRoundedIcon/>
                    <p style={{fontSize:'14px',paddingLeft:'20px'}}>Ledger Report</p>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <PeopleAltIcon/>
                    <p style={{fontSize:'14px',paddingLeft:'20px'}}>My Staffs</p>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <LogoutTwoToneIcon/>
                    <p style={{fontSize:'14px',paddingLeft:'20px'}}>Logout</p>
                </div>
            </Container>
        </div>
    );
}

export default Navbar;