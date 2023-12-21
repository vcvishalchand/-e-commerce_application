import React, { useEffect, useState } from 'react';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import { useNavigate } from 'react-router-dom';
import { ADD_ADDRESS, PLACE_YOUR_ORDER } from '../constant/constant';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardContent, Container, Dialog, DialogContent, DialogTitle, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import Cart from '../component/Cart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';

interface AddressType {
  deliveryAddresses: [
    {
      address?: string;
      pincode?: number;
      country?: string;
      state?: string;
      city?: string;
    }
  ]
}

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [deliveryAddresses, setDeliveryAddresses] = useState<AddressType[]>([]);

  // Use local storage to persist data
  useEffect(() => {
    const storedAddresses = localStorage.getItem('deliveryAddresses');
    if (storedAddresses) {
      setDeliveryAddresses(JSON.parse(storedAddresses));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('deliveryAddresses', JSON.stringify(deliveryAddresses));
  }, [deliveryAddresses]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('deliveryAddresses', deliveryAddresses)
    const newAddress: any = {
      address: address,
      pincode: pincode,
      country: country,
      state: state,
      city: city,
    };

    setDeliveryAddresses((prevAddresses) => [...prevAddresses, newAddress]);
    // Add your form submission logic here

  };


  const handleSearch = (searchQuery: any) => {
    navigate('/product', { state: searchQuery });
  };

  const [expandedAccordion, setExpandedAccordion] = useState<string | false>('accordion1');

  const handleChangeAccordion = (panel: string) => (
    event: React.SyntheticEvent, isExpanded: boolean
  ) => {
    setExpandedAccordion(isExpanded ? panel : false);
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
                      <Accordion expanded={expandedAccordion === 'accordion1'} onChange={handleChangeAccordion('accordion1')}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography fontWeight="bold">1. Delivery Address</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          {/* Your delivery address input fields go here */}
                          <Typography sx={{ marginBottom: 2 }} variant="subtitle1">
                            Address: {address} City: {city} State: {state} Country: {country} PinCode: {pincode}
                          </Typography>
                          <Button size="small"
                            onClick={handleClickOpen}
                            color='primary'
                            variant='contained'>{ADD_ADDRESS}</Button>
                          <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>Add Address
                              <IconButton
                                edge="end"
                                color="inherit"
                                onClick={handleClose}
                                aria-label="close"
                                sx={{ position: 'absolute', right: 20, top: 8 }}
                              >
                                <CloseIcon />
                              </IconButton>
                            </DialogTitle>
                            <DialogContent>
                              <form onSubmit={handleSubmit}>
                                <Grid container spacing={2}>
                                  <Grid item xs={12} sm={6}>
                                    <Typography variant="subtitle1">Address</Typography>
                                    <TextField
                                      size='small'
                                      fullWidth
                                      label="Address"
                                      value={address}
                                      onChange={(e) => setAddress(e.target.value)}
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={6}>
                                    <Typography variant="subtitle1">City</Typography>
                                    <TextField
                                      label="City"
                                      fullWidth
                                      size='small'
                                      value={city}
                                      onChange={(e) => setCity(e.target.value)}
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={6}>
                                    <Typography variant="subtitle1">State</Typography>
                                    <TextField
                                      label="State"
                                      fullWidth
                                      size='small'
                                      value={state}
                                      onChange={(e) => setState(e.target.value)}
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={6}>
                                    <Typography variant="subtitle1">Country</Typography>
                                    <TextField
                                      label="Country"
                                      fullWidth
                                      size='small'
                                      value={country}
                                      onChange={(e) => setCountry(e.target.value)}
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={6}>
                                    <Typography variant="subtitle1">Pincode</Typography>
                                    <TextField
                                      label="Pincode"
                                      fullWidth
                                      size='small'
                                      value={pincode}
                                      onChange={(e) => setPincode(e.target.value)}
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={12}>
                                    <Button type='submit' variant="contained" onClick={handleClose}>
                                      Add Address
                                    </Button>
                                  </Grid>
                                </Grid>
                              </form>
                            </DialogContent>
                          </Dialog>
                        </AccordionDetails>
                      </Accordion>
                    </Grid>

                    {/* Accordion 2: Select a Payment Method */}
                    <Grid item xs={12}>
                      <Accordion expanded={expandedAccordion === 'accordion2'} onChange={handleChangeAccordion('accordion2')}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography fontWeight="bold">2. Select a Payment Method</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          {/* Your payment method selection fields go here */}
                          <FormControl fullWidth>
                            <InputLabel id="payment-method-label">Payment Method</InputLabel>
                            <Select labelId="payment-method-label" id="payment-method">
                              <MenuItem value="creditCard">Credit Card</MenuItem>
                              <MenuItem value="paypal">COD</MenuItem>
                              {/* Add more payment options as needed */}
                            </Select>
                          </FormControl>
                        </AccordionDetails>
                      </Accordion>
                    </Grid>

                    {/* Accordion 3: Items and Delivery */}
                    <Grid item xs={12}>
                      <Accordion expanded={expandedAccordion === 'accordion3'} onChange={handleChangeAccordion('accordion3')}>
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
                      <Accordion expanded={expandedAccordion === 'accordion4'} onChange={handleChangeAccordion('accordion4')}>
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
