import React from 'react';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import { products } from '../mockdata/data';
import ProductDescription from '../component/product/ProductDescription';
import { AAD_TO_CART, BUY_NOW, PRODUCT_DETAILS } from '../constant/constant';
import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import Cart from '../component/Cart'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/action/cartActions';
import { Product } from '../type/types';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state: any) => state?.cart);
  const { cartItems } = cart;

  const handleAddToCart = (productId: number) => {
    const isProductInCart = cartItems.some((item: Product) => item.id === productId);
    if (!isProductInCart) {
      dispatch(addToCart(product));
    } else if (isProductInCart) {
      alert('Product is already Added')
    }
  };

  const findProductById = (productId: number) => (product: Product): boolean => {
    return product.id === productId;
  };

  const getProductById = (productId: number): Product | undefined => {
    return products.find(findProductById(productId));
  };
  // Get product by id
  let product: any = getProductById(Number(id))

  const handleSearch = (event: any, searchQuery: any) => {
    navigate('/product', { state: searchQuery });
  };


  return (
    <>
      <Header handleSearch={handleSearch} />
      <Container>
        <Grid container spacing={3} style={{ marginTop: '20px' }}>
          <Grid item xs={12} sm={6} md={9} style={{ marginTop: '20px' }}>
            <Card sx={{ display: 'flex' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <ProductDescription
                    componentTitle={
                      <Typography component="div" variant="h5">
                        {product.description}
                      </Typography>
                    } />
                  <ProductDescription
                    componentTitle={
                      <Typography component="div" variant="h6">
                        {PRODUCT_DETAILS.BRAND}
                      </Typography>
                    }
                    componentValue={
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        {product?.brand}
                      </Typography>
                    } />
                  <ProductDescription
                    componentTitle={
                      <Typography component="div" variant="h6">
                        {PRODUCT_DETAILS.COLOR}
                      </Typography>
                    }
                    componentValue={
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        {product?.color}
                      </Typography>
                    } />
                  <ProductDescription
                    componentTitle={
                      <Typography component="div" variant="h6">
                        {PRODUCT_DETAILS.PRICE}
                      </Typography>
                    }
                    componentValue={
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        ${product?.price}
                      </Typography>
                    } />
                  <ProductDescription
                    componentTitle={
                      <Typography component="div" variant="h6">
                        {PRODUCT_DETAILS.DESCRIPTION}
                      </Typography>
                    }
                    componentValue={
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        {product?.name}
                      </Typography>
                    } />
                </CardContent>
              </Box>
              {product?.image && <CardMedia
                style={{ width: 500 }}
                component="img"
                image={product?.image}
                alt="Live from space album cover"
              />}
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3} style={{ marginTop: '20px' }}>
            <Cart handleAddToCart={() => handleAddToCart(Number(id))} btnLabel={AAD_TO_CART} gotoPage='/product'
              btnLabelTwo={BUY_NOW} gotoPageTwo='/product/shopping_cart' />
          </Grid>
        </Grid >
      </Container >
      <Footer />
    </>
  );
};

export default ProductDetail;
