import React, { useState } from 'react';
import { FormControl, MenuItem, Select, Typography } from '@mui/material';

interface SortOptionsProps {
  sortOption: 'asc' | 'desc';
  onSelectSortOption: (option: 'asc' | 'desc') => void;
}

const SortOptions: React.FC<SortOptionsProps> = ({ sortOption, onSelectSortOption }) => {
  return (
    <>
      <Typography variant="h6" component="div" sx={{ mt: 2 }}>
        Sort by:
      </Typography>
      <FormControl fullWidth size="small">
        <Select
          id="select"
          value={sortOption}
          onChange={(e) => onSelectSortOption(e.target.value as 'asc' | 'desc')}
        >
          <MenuItem value="asc">Price Low to High</MenuItem>
          <MenuItem value="desc">Price High to Low</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default SortOptions;
