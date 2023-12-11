import React, { useEffect, useState } from 'react';
import SortOptions from '../component/SortOptions';
import FilterOptions from '../component/FilterOptions';
import { products } from '../mockdata/data';
import Footer from '../component/footer/Footer';
import Header from '../component/header/Header';
import { useLocation } from 'react-router-dom';
import { Card, CardContent, Container, Grid } from '@mui/material';
import ItemList from '../component/ItemList';
import Categories from '../component/Categories';
import { MORE_DETAILS, NO_PRODUCT } from '../constant/constant';
import { NotFound } from '../component/NotFound';

const ProductList: React.FC = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState<'asc' | 'desc'>('asc');
  const [filterOptions, setFilterOptions] = useState({
    brand: 'all',
    color: 'all',
    minPrice: 1,
    maxPrice: 5000,
  });
  const [checkedCategories, setCheckedCategories] = useState<string[]>([]);
  const [checkedSubcategories, setCheckedSubcategories] = useState<string[]>(['Men', 'Women', 'Baby']);

  useEffect(() => {
    if (location.state) {
      setSearchTerm(location.state)
    } else {
      setSearchTerm('')
    }
  }, [location]);

  // Filter and sort products based on user input
  const filteredProducts = products
    .filter(
      (product) =>
        product?.name?.toLowerCase().includes(searchTerm?.toLowerCase()) &&
        (filterOptions.brand === 'all' || product.brand === filterOptions.brand) &&
        (filterOptions.color === 'all' || product.color === filterOptions.color) &&
        (filterOptions.minPrice === 1 || product.price >= filterOptions.minPrice) &&
        (filterOptions.maxPrice === 5000 || product.price <= filterOptions.maxPrice) &&
        (checkedCategories.length === 0 || checkedCategories.some(category => product.category.includes(category))) &&
        (checkedSubcategories.length === 3 || checkedSubcategories.some(category => product.subCategory.includes(category)))
    ).sort((a, b) => (sortOption === 'asc' ? a.price - b.price : b.price - a.price));

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>, searchQuery: string) => {
    setSearchTerm(searchQuery);
  };

  return (
    <>
      <Header handleSearch={handleSearch} />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={2} md={3} style={{ marginTop: '20px' }}>
            <Card>
              <CardContent>
                <Categories
                  checkedCategories={checkedCategories}
                  onSelectCategory={(category) => setCheckedCategories(category)}
                  checkedSubcategories={checkedSubcategories}
                  onSelectSubCategory={(subCategory) => setCheckedSubcategories(subCategory)}
                />
                <SortOptions sortOption={sortOption} onSelectSortOption={(option) => setSortOption(option)} />
                <FilterOptions
                  filterOptions={filterOptions}
                  onFilterChange={(newFilters) => setFilterOptions(newFilters)}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={10} md={9} >
            {filteredProducts.length === 0 ? <NotFound message={NO_PRODUCT} /> :
              <ItemList items={filteredProducts} btnLabel={MORE_DETAILS} details={true} />}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default ProductList;
