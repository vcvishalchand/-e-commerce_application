import React from 'react';
import { Box, Typography } from '@mui/material';

interface ShoppingCartDescriptionProps {
    titile: string,
    value: string | number,
}

const ShoppingCartDescription: React.FC<ShoppingCartDescriptionProps> = ({ titile, value }) => {
    return (
        <Box display="flex">
            <Typography variant="subtitle1" fontWeight="bold" marginRight={1}>
                {titile}
            </Typography>
            <Typography variant="subtitle1">
                {Number(value) ? '$' : ''}{value}
            </Typography>
        </Box>
    );
};

export default ShoppingCartDescription;
