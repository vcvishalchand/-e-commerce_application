import React from 'react';
import { Avatar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';

const Logo: React.FC = () => {
    return (
        <Toolbar>
            <Link to="/">
                <Avatar style={{ marginRight: 10 }}>
                    <ShoppingCartIcon />
                </Avatar>
            </Link>
            <Typography variant="h6" component="div">
                E-Commerce
            </Typography>
        </Toolbar>
    )
};

export default Logo;
