import React, { ChangeEvent, useState } from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import { CATEGORIES, CATEGORY, SUB_CATEGORY } from '../constant/constant';

interface CategoriesProps {
  checkedCategories: string[],
  onSelectCategory: (option: any) => void;
  checkedSubcategories: string[],
  onSelectSubCategory: (option: any) => void
}

const Categories: React.FC<CategoriesProps> = ({ checkedCategories, onSelectCategory, checkedSubcategories, onSelectSubCategory }) => {

  const [checked, setChecked] = React.useState([false, false, false]);


  const handleChangeCategory = (category: string) => {
    const updatedCheckedCategories = [...checkedCategories];
    if (updatedCheckedCategories.includes(category)) {
      // Remove the category if it's already checked
      updatedCheckedCategories.splice(updatedCheckedCategories.indexOf(category), 1);
    } else {
      // Add the category if it's not checked
      updatedCheckedCategories.push(category);
    }
    onSelectCategory(updatedCheckedCategories);
  };

  const handleChangeSubcategory = (subcategory: string) => {
    const updatedCheckedSubcategories = [...checkedSubcategories];
    if (updatedCheckedSubcategories.includes(subcategory)) {
      updatedCheckedSubcategories.splice(updatedCheckedSubcategories.indexOf(subcategory), 1);
    } else {
      updatedCheckedSubcategories.push(subcategory);
    }
    onSelectSubCategory(updatedCheckedSubcategories);
  };

  const handleChange = (index: number, event: ChangeEvent<HTMLInputElement>, category: string) => {
    const updatedChecked = [...checked];
    updatedChecked[index] = event.target.checked;
    setChecked(updatedChecked);
    handleChangeSubcategory(category)
    console.log('category', category)
  };

  // Handlers for individual checkboxes
  const handleChangeMen = (event: ChangeEvent<HTMLInputElement>) => handleChange(0, event, SUB_CATEGORY.MEN);
  const handleChangeWomen = (event: ChangeEvent<HTMLInputElement>) => handleChange(1, event, SUB_CATEGORY.WOMEN);
  const handleChangeBaby = (event: ChangeEvent<HTMLInputElement>) => handleChange(2, event, SUB_CATEGORY.BABY);

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label={SUB_CATEGORY.MEN}
        control={<Checkbox checked={checkedSubcategories.includes('Men')} onChange={handleChangeMen} />}
      />
      <FormControlLabel
        label={SUB_CATEGORY.WOMEN}
        control={<Checkbox checked={checkedSubcategories.includes('Women')} onChange={handleChangeWomen} />}
      />
      <FormControlLabel
        label={SUB_CATEGORY.BABY}
        control={<Checkbox checked={checkedSubcategories.includes('Baby')} onChange={handleChangeBaby} />}
      />
    </Box>
  );

  return (
    <>
      <Typography variant="h6" component="div">
        {CATEGORIES}
      </Typography>
      <FormGroup>
        <FormControlLabel
          label={CATEGORY.CLOTHS}
          control={
            <Checkbox
              checked={checked.every((value) => value)}
              indeterminate={checked.some((value) => value) && !checked.every((value) => value)}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setChecked([event.target.checked, event.target.checked, event.target.checked])
                handleChangeCategory(CATEGORY.CLOTHS);
              }}
            />
          }
        />
        {(checked[0] || checked[1] || checked[2]) && children}
        <FormControlLabel control={<Checkbox
          checked={checkedCategories.includes(CATEGORY.ELECTRONICS)}
          onChange={() => handleChangeCategory(CATEGORY.ELECTRONICS)} />}
          label={CATEGORY.ELECTRONICS} />
        <FormControlLabel control={<Checkbox
          checked={checkedCategories.includes(CATEGORY.ARTS_CRAFTS)}
          onChange={() => handleChangeCategory(CATEGORY.ARTS_CRAFTS)} />}
          label={CATEGORY.ARTS_CRAFTS} />
      </FormGroup>
    </>
  );
};

export default Categories;
