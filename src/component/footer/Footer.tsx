import React from 'react';
import { Typography } from '@mui/material';

const Footer = () => {

    return (
        <footer style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f5f5f5', textAlign: 'center' }}>
            <Typography variant="body2" color="textSecondary">
                © {new Date().getFullYear()} Your E-Commerce App
            </Typography>
        </footer>
    );
};

export default Footer;
