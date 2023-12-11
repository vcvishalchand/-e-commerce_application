import React from 'react';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import { useNavigate } from 'react-router-dom';
import { BACK_TO_SHOPING, CLEAR_CART, NO_PRODUCT, PROCEED_TO_BUY, REMOVE_PRODUCT } from '../constant/constant';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Divider, Grid, InputLabel, MenuItem, Popper, Select, TextField, Typography } from '@mui/material';
import Cart from '../component/Cart'
import ShoppingCartDescription from '../component/ShoppingCartDescription';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addMoreQuantity, clearCart, removeFromCart } from '../store/action/cartActions';
import { Product } from '../type/types';
import { NotFound } from '../component/NotFound';

const ShoppingCart: React.FC = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state: any) => state?.cart);
  const { cartItems } = cart;
  const quantityOptions = Array.from({ length: 10 }, (_, index) => index + 1);

  const handleChange = (event: any, productById: any) => {
    dispatch(addMoreQuantity(productById, event.target.value))
  };

  const handleDeleteProduct = (productById: Product) => {
    dispatch(removeFromCart(productById));
  }

  const handleSearch = (event: any, searchQuery: any) => {
    navigate('/product', { state: searchQuery });
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <>
      <Header handleSearch={handleSearch} />
      <Container>
        <Grid container spacing={3} style={{ marginTop: '20px' }}>
          <Grid item xs={12} sm={6} lg={9}>
            {cartItems.length === 0 ? <NotFound message={NO_PRODUCT} /> : cartItems.map((item: any) => (<Grid key={item.id + item.name} item style={{ marginTop: '20px' }}>
              <Card sx={{ display: 'flex' }}>
                {item.image && <CardMedia
                  style={{ width: 200 }}
                  component="img"
                  image={item?.image}
                  alt="Live from space album cover"
                />}
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                      {item.description}
                    </Typography>
                    <ShoppingCartDescription titile='Name:' value={item.name} />
                    <ShoppingCartDescription titile='Price:' value={item.price} />
                    <ShoppingCartDescription titile='Color:' value={item.color} />
                    <ShoppingCartDescription titile='Brand:' value={item.brand} />
                  </CardContent>
                  <Divider />
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <CardActions>
                      <InputLabel id="demo-simple-select">
                        Quantity
                      </InputLabel>
                      <Select
                        size='small'
                        id="demo-simple-select"
                        value={item.quantity}
                        onChange={(event) => handleChange(event, item)}
                        sx={{ margin: '0px 20px 0px 10px' }}
                      >
                        {quantityOptions.map((value) => (
                          <MenuItem key={value} value={value}>
                            {value}
                          </MenuItem>
                        ))}
                      </Select>
                      <Typography variant="subtitle1">
                        Subtotal: ${item.price * item.quantity} ({item.quantity} item):
                      </Typography>
                      <Typography variant="subtitle1" fontWeight="bold" marginRight={1}>
                        ${item.price}
                      </Typography>
                      <Button size="small"
                        onClick={() => handleDeleteProduct(item)}
                        color='error'
                        variant='contained'>{REMOVE_PRODUCT}
                      </Button>
                    </CardActions>
                  </Box>
                </Box>
              </Card>
            </Grid>))}
          </Grid>
          <Grid item xs={12} sm={6} lg={3} style={{ marginTop: '20px' }}>
            {cartItems.length === 0 ? <Cart btnLabel={BACK_TO_SHOPING} gotoPage='/product' /> :
              <Cart handleClearCart={handleClearCart} btnLabel={PROCEED_TO_BUY} gotoPage='/product/checkout'
                btnLabelTwo={CLEAR_CART} />
            }
          </Grid>
        </Grid >
      </Container >
      <Footer />
    </>
  );
};

export default ShoppingCart;
