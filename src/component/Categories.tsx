import React from 'react';
import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import { CATEGORIES, CATEGORY } from '../constant/constant';
import { SubCategoryCheckBox } from './SubCategoryCheckBox';

interface CategoriesProps {
  checkedCategories: string[],
  onSelectCategory: (option: any) => void;
  checkedSubcategories: string[],
  onSelectSubCategory: (option: any) => void
}

const Categories: React.FC<CategoriesProps> = ({ checkedCategories, onSelectCategory, checkedSubcategories, onSelectSubCategory }) => {

  const handleCheckedCategory = (category: string) => {
    console.log('category', checkedCategories)
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
  const Categories = [CATEGORY.CLOTHS, CATEGORY.ELECTRONICS, CATEGORY.ARTS_CRAFTS]

  return (
    <>
      <Typography variant="h6" component="div">
        {CATEGORIES}
      </Typography>
      <FormGroup>
        {Categories.map(category => {
          if (category === CATEGORY.CLOTHS) {
            return (<SubCategoryCheckBox key={category}
              checkedCategories={checkedCategories}
              selectCategory={() => handleCheckedCategory(category)} />)
          } else {
            return (
              <FormControlLabel
                key={category}
                control={
                  <Checkbox
                    checked={checkedCategories.includes(category)}
                    onChange={() => handleCheckedCategory(category)}
                  />}
                label={category} />
            );
          }
        })}
      </FormGroup>
    </>
  );
};

export default Categories;
