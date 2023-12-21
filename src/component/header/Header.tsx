import React, { } from 'react';
import { AppBar, Container, Grid } from '@mui/material';
import SearchBox from './SearchBar';
import Logo from './Logo';
import CartIcon from './CartIcon'
import { SearchBarProps } from '../../type/types';

const Header: React.FC<SearchBarProps> = ({ handleSearch, searchbox = true, cartIcon = true }) => {

  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <Logo />
            </Grid>
            <Grid item xs={12} md={6}>
              {searchbox && <SearchBox handleSearch={handleSearch} />}
            </Grid>
            <Grid item container xs={12} md={3} justifyContent="flex-end">
              <Grid item>
                {cartIcon && <CartIcon />}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </>
  )
};

export default Header;
