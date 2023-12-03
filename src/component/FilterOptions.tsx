import React from 'react';
import { FormControl, MenuItem, Select, Slider, Typography } from '@mui/material';
import { FilterOptionsProps } from '../type/types';
import { CATEGORIES, CATEGORY, FILTTER_BY } from '../constant/constant';

const FilterOptions: React.FC<FilterOptionsProps> = ({ filterOptions, onFilterChange }) => {
  const brands = ['Adidas', 'Nike', 'Zara', 'H&M', 'Dreo', 'Gionlion'];
  const colors = ['Pink', 'Blue', 'Green', 'Yellow', 'Black', 'Purple', 'White'];
  return (
    <div>
      <Typography variant="h6" component="div" style={{ marginTop: 20 }}>
        Filter by:
      </Typography>
      <Typography variant="subtitle1" component="div" style={{ marginTop: 10 }}>
        {FILTTER_BY.BRAND}
      </Typography>
      <FormControl fullWidth size="small">
        <Select
          id="select"
          value={filterOptions.brand}
          onChange={(e) => onFilterChange({ ...filterOptions, brand: e.target.value })}
        >
          <MenuItem value='all'>All Brands</MenuItem>
          {brands?.map((brand) => (
            <MenuItem key={brand} value={brand}>{brand}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <Typography variant="subtitle1" component="div" style={{ marginTop: 10 }}>
        {FILTTER_BY.COLOR}
      </Typography>
      <FormControl fullWidth size="small">
        <Select
          id="select"
          value={filterOptions?.color}
          onChange={(e) => onFilterChange({ ...filterOptions, color: e.target.value })}
        >
          <MenuItem value='all'>All Colors</MenuItem>
          {colors.map((color) => (
            <MenuItem key={color} value={color}>{color}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <Typography variant="subtitle1" component="div" style={{ marginTop: 10 }}>
        {FILTTER_BY.MIN_PRICE}
      </Typography>
      <Slider aria-label="Default"
        value={filterOptions?.minPrice}
        onChange={(_, value: any) => onFilterChange({ ...filterOptions, minPrice: value })}
        onChangeCommitted={(_, value: any) => onFilterChange({ ...filterOptions, minPrice: value })}
        defaultValue={30}
        valueLabelDisplay="auto"
        min={1}
        max={5000} />

      <Typography variant="subtitle1" component="div" style={{ marginTop: 10 }}>
        {FILTTER_BY.MAX_PRICE}
      </Typography>
      <Slider aria-label="Default"
        value={filterOptions?.maxPrice}
        onChange={(_, value: any) => onFilterChange({ ...filterOptions, maxPrice: value })}
        onChangeCommitted={(_, value: any) => onFilterChange({ ...filterOptions, maxPrice: value })}
        defaultValue={30}
        valueLabelDisplay="auto"
        min={1}
        max={5000} />
    </div>
  );
};

export default FilterOptions;
