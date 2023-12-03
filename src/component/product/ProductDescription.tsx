import React, { ReactNode } from 'react';
import { Grid, CardContent } from '@mui/material';

interface DescriptionProps {
    componentTitle?: ReactNode,
    componentValue?: ReactNode
}

const ProductDescription: React.FC<DescriptionProps> = ({ componentTitle, componentValue }) => {

    return (
        <CardContent sx={{ flex: '1 0 auto' }}>
            {!componentValue ? componentTitle : <Grid container spacing={3}>
                <Grid item md={6}>
                    {componentTitle}
                </Grid>
                <Grid item md={6}>
                    {componentValue}
                </Grid>
            </Grid>}

        </CardContent>
    );
};

export default ProductDescription;
