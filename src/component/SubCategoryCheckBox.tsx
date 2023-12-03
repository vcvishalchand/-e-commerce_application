import React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

interface SubCategoryProps {
    checkedCategories: string[],
    selectCategory: () => void,
}

export const SubCategoryCheckBox: React.FC<SubCategoryProps> = ({ checkedCategories, selectCategory }) => {
    const [selectSubCategory, setSelectSubCategory] = React.useState<string[]>([]);
    const subCategory = ['Men', 'Women', 'Baby'];
    let lable = 'Cloths';

    const handleCheckedMaster = (event: React.ChangeEvent<HTMLInputElement>) => {
        // if (!event.target.checked) {
        //     setSelectSubCategory([]);
        // } else {
        //     setSelectSubCategory(subCategory);
        // }

        if (event.target.checked) {
            selectCategory();
            setSelectSubCategory(subCategory);
        } if (!event.target.checked) {
            selectCategory();
            setSelectSubCategory([]);
        }

    };

    const handleSelectSubCategory = (event: React.ChangeEvent<HTMLInputElement>, index: number, subCategory: string) => {
        const updateSubCategory = [...selectSubCategory]
        if (updateSubCategory.includes(subCategory)) {
            updateSubCategory.splice(updateSubCategory.indexOf(subCategory), 1)
        } else {
            updateSubCategory.push(subCategory);
        }
        setSelectSubCategory(updateSubCategory);
    };

    const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            {subCategory.map((subCategory: string, index: number) => (
                <FormControlLabel
                    key={subCategory}
                    label={subCategory}
                    control={<Checkbox checked={selectSubCategory.includes(subCategory)}
                        onChange={(event) => handleSelectSubCategory(event, index, subCategory)} />}
                />)
            )}
        </Box>
    );
    console.log('check', selectSubCategory)
    console.log('s', selectSubCategory.length !== 0, checkedCategories.includes(lable))
    console.log('result', selectSubCategory.length !== 0 && checkedCategories.includes(lable))
    console.log('indeterminate', selectSubCategory.length !== 0, selectSubCategory.length !== subCategory.length)
    console.log('indeterminate result', selectSubCategory.length !== 0 && selectSubCategory.length !== subCategory.length)
    //  3 !== 0 --true   
    return (
        <>
            <FormControlLabel
                label={lable}
                control={
                    <Checkbox
                        checked={checkedCategories.includes(lable)}
                        indeterminate={selectSubCategory.length !== 0 && selectSubCategory.length !== subCategory.length}
                        onChange={(event) => handleCheckedMaster(event)}
                    />
                }
            />
            {selectSubCategory.some(item => item) && children}
        </>
    );
}