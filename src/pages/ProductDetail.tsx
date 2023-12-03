import React from 'react';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import { products } from '../mockdata/data';
import ProductDescription from '../component/product/ProductDescription';
import { PRODUCT_DETAILS } from '../constant/constant';
import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import OrderPlace from '../component/Card'

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSearch = (event: any, searchQuery: any) => {
    navigate('/product', { state: searchQuery });
  };
  const product = products.filter(item => item.id == Number(id))

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
                        {product[0]?.description}
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
                        {product[0]?.brand}
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
                        {product[0]?.color}
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
                        ${product[0]?.price}
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
                        {product[0]?.name}
                      </Typography>
                    } />
                </CardContent>
              </Box>
              {product[0]?.image && <CardMedia
                style={{ width: 500 }}
                component="img"
                image={product[0]?.image}
                alt="Live from space album cover"
              />}
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3} style={{ marginTop: '20px' }}>
            <OrderPlace />
          </Grid>
        </Grid >
      </Container >
      <Footer />
    </>
  );
};

export default ProductDetail;
