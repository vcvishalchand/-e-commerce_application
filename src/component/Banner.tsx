import React from 'react';
import { Paper, Typography } from '@mui/material';
import Banner from '../assets/images/banner.jpg'

const styles = {
    root: {
        height: '50vh',
        backgroundImage: `url(${Banner})`,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center',
    },
    content: {
        padding: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
};

interface FullScreenBannerProps {
    title: string;
}

const MuiFullScreenBanner: React.FC<FullScreenBannerProps> = ({ title }) => {
    return (
        <Paper square elevation={0} sx={{ ...styles.root }}>
            <div style={styles.content}>
                <Typography variant="h3" gutterBottom>
                    {title}
                </Typography>
            </div>
        </Paper>
    );
};

export default MuiFullScreenBanner;
