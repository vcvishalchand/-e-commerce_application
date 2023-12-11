import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { CART } from '../../constant/constant';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CartIcon = () => {

    const cart = useSelector((state: any) => state?.cart);
    const { cartItems } = cart;

    return (
        <Toolbar>
            {CART}
            <IconButton component={Link} to={`/product/shopping_cart`}
                color="inherit" aria-label="cart">
                <Badge badgeContent={cartItems.length} color="error">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
        </Toolbar>
    );
};

export default CartIcon;
