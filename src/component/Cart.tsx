import { Button, Card, CardActions, CardContent, Divider, Typography } from '@mui/material';
import React from 'react';
import { CART_EMPTY, SUBTOTAL } from '../constant/constant';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Product } from '../type/types';

interface CartProps {
    btnLabel: string,
    btnLabelTwo?: string,
    gotoPage: string,
    gotoPageTwo?: string,
    handleAddToCart?: (id: any) => void;
    handleClearCart?: () => void
}

const OrderPlace: React.FC<CartProps> = ({ btnLabel, btnLabelTwo, gotoPage, gotoPageTwo, handleAddToCart, handleClearCart}) => {

    const cart = useSelector((state: any) => state?.cart);
    const { cartItems } = cart;

    let grandTotale: number = 0;

    return (
        <Card sx={{ minWidth: 275 }}>
            {cartItems.length === 0 ? <CardContent>
                <Typography variant="h6" component="div">
                    {CART_EMPTY}
                </Typography>
            </CardContent> : <CardContent>
                {cartItems.map((item: Product) => {
                    let subTotale = item.quantity * item.price;
                    grandTotale += subTotale;
                    return (<div key={item.id}>
                        <Typography variant="subtitle2" fontWeight="bold">
                            Name: {item.name} <br /> Price: ${item.price}
                        </Typography>

                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {SUBTOTAL}: {item.quantity} Item: ${subTotale}
                        </Typography>
                        <Divider sx={{ marginBottom: 1 }} />
                    </div>);
                })}
                <Typography variant="subtitle1" fontWeight="bold">
                    Grand Total: ${grandTotale}
                </Typography>
            </CardContent>}
            <CardActions>
                <Button size="small"
                    onClick={handleAddToCart}
                    component={Link}
                    to={gotoPage}
                    fullWidth
                    color='warning'
                    variant='contained'>{btnLabel}
                </Button><br />
                {btnLabelTwo && <Button size="small"
                    onClick={handleClearCart}
                    component={Link}
                    to={gotoPageTwo || '/'}
                    fullWidth
                    color='secondary'
                    variant='contained'>{btnLabelTwo}
                </Button>}
            </CardActions>
        </Card>
    );
};

export default OrderPlace;


