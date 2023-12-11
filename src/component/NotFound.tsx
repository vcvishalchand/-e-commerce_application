import React from 'react';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';

interface MessageProps {
    message: string
}

export const NotFound: React.FC<MessageProps> = ({ message }) => {
    return (
        <Paper style={{ marginTop: '20px', height: '10hv' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
                <h1>{message}</h1>
            </Box>
        </Paper>
    );
}