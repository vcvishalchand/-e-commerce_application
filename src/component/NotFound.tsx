import React from 'react';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';

export const NotFound = () => {
    return (
        <Paper style={{ marginTop: '20px', height: '10hv' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
                <h1>No Product Found</h1>
            </Box>
        </Paper>
    );
}