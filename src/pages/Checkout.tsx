import React from 'react';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import { products } from '../mockdata/data';
import ProductDescription from '../component/product/ProductDescription';
import { PLACE_YOUR_ORDER, PRODUCT_DETAILS } from '../constant/constant';
import { Accordion, AccordionDetails, AccordionSummary, Box, Card, CardContent, CardMedia, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import Cart from '../component/Cart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Checkout: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSearch = (event: any, searchQuery: any) => {
    navigate('/product', { state: searchQuery });
  };
  

  return (
    <>
      <Header handleSearch={handleSearch} searchbox={false} cartIcon={false} />
      <Container>
        <Grid container spacing={3} style={{ marginTop: '20px' }}>
          <Grid item xs={12} sm={6} md={9} style={{ marginTop: '20px' }}>
            <Card sx={{ display: 'flex' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Grid container spacing={2}>
                    {/* Accordion 1: Delivery Address */}
                    <Grid item xs={12}>
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography fontWeight="bold">1. Delivery Address</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          {/* Your delivery address input fields go here */}
                          <TextField label="Address" fullWidth />
                          {/* Add more address fields as needed */}
                        </AccordionDetails>
                      </Accordion>
                    </Grid>

                    {/* Accordion 2: Select a Payment Method */}
                    <Grid item xs={12}>
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography fontWeight="bold">2. Select a Payment Method</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          {/* Your payment method selection fields go here */}
                          <FormControl fullWidth>
                            <InputLabel id="payment-method-label">Payment Method</InputLabel>
                            <Select labelId="payment-method-label" id="payment-method">
                              <MenuItem value="creditCard">Credit Card</MenuItem>
                              <MenuItem value="paypal">PayPal</MenuItem>
                              {/* Add more payment options as needed */}
                            </Select>
                          </FormControl>
                        </AccordionDetails>
                      </Accordion>
                    </Grid>

                    {/* Accordion 3: Items and Delivery */}
                    <Grid item xs={12}>
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography fontWeight="bold">3. Items and Delivery</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          {/* Your items and delivery information go here */}
                          {/* You can include a summary of the items, delivery details, etc. */}
                        </AccordionDetails>
                      </Accordion>
                    </Grid>

                    {/* Accordion 4: Review Items and Delivery */}
                    <Grid item xs={12}>
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography fontWeight="bold">4. Review Items and Delivery</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          {/* Your review items and delivery content go here */}
                          {/* This could include a summary of the selected items, delivery address, and payment method */}
                        </AccordionDetails>
                      </Accordion>
                    </Grid>
                  </Grid>
                </CardContent>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3} style={{ marginTop: '20px' }}>
            <Cart btnLabel={PLACE_YOUR_ORDER} gotoPage='/product/order_placed' />
          </Grid>
        </Grid >
      </Container >
      <Footer />
    </>
  );
};

export default Checkout;
