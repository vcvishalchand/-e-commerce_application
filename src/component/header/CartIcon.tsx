import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { CART } from '../../constant/constant';

const CartIcon = () => {
    const cartItemCount = 5;

    return (
        <Toolbar>
            {CART}
            <IconButton color="inherit" aria-label="cart">
                <Badge badgeContent={cartItemCount} color="error">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
        </Toolbar>
    );
};

export default CartIcon;
