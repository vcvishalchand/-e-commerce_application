import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react';
import { PLACE_YOUR_ORDER, SUBTOTAL } from '../constant/constant';

const OrderPlace: React.FC = () => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {SUBTOTAL}
                </Typography> */}
                <Typography variant="h5" component="div">
                    {SUBTOTAL}(1 Item): $100
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"
                    fullWidth
                    color='warning'
                    variant='contained'>{PLACE_YOUR_ORDER}</Button>
            </CardActions>
        </Card>
    );
};

export default OrderPlace;
