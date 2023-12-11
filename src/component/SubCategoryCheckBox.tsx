import React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

interface SubCategoryProps {
    checkedCategories: string[],
}

export const SubCategoryCheckBox: React.FC<SubCategoryProps> = ({ checkedCategories }) => {
    const checkBoxUnit = ['Men', 'Women', 'Baby'];
    let checkBoxlen = checkBoxUnit.length;
    const [checked, setChecked] = React.useState(Array(checkBoxlen).fill(false));

    let lable = 'Cloths';

    const handleCheckedMaster = (event: React.ChangeEvent<HTMLInputElement>) => {
        const len = checked.length;
        const updatedChecked = Array(len).fill(event.target.checked)
        setChecked(updatedChecked);
    };

    const handleChecked = (event: React.ChangeEvent<HTMLInputElement>, index: number, category: string) => {
        const updatedChecked = [...checked]
        updatedChecked[index] = event.target.checked;
        setChecked(updatedChecked);
    };

    const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            {checkBoxUnit.map((category: string, index: number) => (
                <FormControlLabel
                    key={category}
                    label={category}
                    control={<Checkbox checked={checked[index]} onChange={(event) => handleChecked(event, index, category)} />}
                />)
            )}
        </Box>
    );

    return (
        <>
            <FormControlLabel
                label={lable}
                control={
                    <Checkbox
                        checked={checked.every(value => value)}
                        indeterminate={checked.some(value => value) !== checked.every(value => value)}
                        onChange={handleCheckedMaster}
                    />
                }
            />
            {checked?.some(item => item) && children}
        </>
    );
}