import React from 'react';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { products } from '../mockdata/data';
import ProductDescription from '../component/product/ProductDescription';
import { Box, Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import Cart from '../component/Cart';
import { clearCart } from '../store/action/cartActions';
import { BACK_TO_SHOPING } from '../constant/constant';
import { useDispatch } from 'react-redux';

const OrderPlaced: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = (event: any, searchQuery: any) => {
    navigate('/product', { state: searchQuery });
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <>
      <Header handleSearch={handleSearch} searchbox={false} cartIcon={false} />
      <Container>
        <Grid container spacing={3} style={{ marginTop: '20px' }}>
          <Grid item xs={12} sm={6} md={9} style={{ marginTop: '20px' }}>
            <Card sx={{ display: 'flex' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <ProductDescription
                    componentTitle={
                      <Typography component="div" variant="h5">
                        Your Order Successfuly Placed
                      </Typography>
                    } />
                </CardContent>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3} style={{ marginTop: '20px' }}>
            <Button size="small"
              onClick={handleClearCart}
              component={Link}
              to='/'
              fullWidth
              color='secondary'
              variant='contained'>{BACK_TO_SHOPING}
            </Button>
          </Grid>
        </Grid >
      </Container >
      <Footer />
    </>
  );
};

export default OrderPlaced;

