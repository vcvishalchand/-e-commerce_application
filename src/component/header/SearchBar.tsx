import React, { ChangeEvent, useState } from 'react';
import { Autocomplete, InputBase, TextField, Toolbar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';
import { SearchBarProps } from '../../type/types';
import { debounce } from 'lodash';
import { products } from '../../mockdata/data';

const useStyles = makeStyles((theme) => ({
    inputBase: {
        background: '#ffffff',
        borderRadius: '30px',
        padding: '0px 40px 0px 20px',
    },
    searchIcon: {
        cursor: 'pointer',
        position: 'absolute',
        right: '35px',
        zIndex: '9999',
        color: 'black',
    }
}));

const SearchBar: React.FC<SearchBarProps> = ({ handleSearch }) => {
    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newSearchTerm = event.target.innerText || '';
        setSearchTerm(newSearchTerm);
        // Calling the debounced search function
        debouncedSearch(newSearchTerm);
    }
    console.log('searchTerm', searchTerm)
    const handleKeyDown = (event: any) => {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);
        // Calling the debounced search function
        debouncedSearch(newSearchTerm);
    };

    // Define search function here
    const performSearch = (query: string) => {
        handleSearch(query)
    };

    // Debounce the search function to avoid rapid firing
    const debouncedSearch = debounce(performSearch, 1000); // Adjust the delay as needed

    return (
        <Toolbar>
            {/* <InputBase
                className={classes.inputBase}
                value={searchTerm}
                onChange={handleChange}
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search' }}
                fullWidth 
            />
            <SearchIcon className={classes.searchIcon} onClick={() => handleSearch(searchTerm)} /> */}
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={products}
                sx={{
                    '& .MuiAutocomplete-inputRoot': {
                        '&:hover, &$focused': {
                            borderColor: 'transparent !important', // Remove border on hover
                        },
                        background: '#ffffff',
                        paddingRight: '100px',
                        borderRadius: '20px',
                        border: 'none',
                    },
                    '& input': { // Border-radius for the input
                        background: '#f2f9ff',
                        borderRadius: '20px',
                        border: 'none',
                        '&:focus': {
                            borderColor: 'transparent', // Remove border on focus
                        },
                    },
                    '& .MuiAutocomplete-popper': {
                        backgroundColor: 'white',  // Background color for the popup
                        borderRadius: '20px',      // Border-radius for the popup
                        border: 'none',            // No border for the popup
                        boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
                        '& .MuiSvgIcon-root': {
                            marginRight: '50px', // Move the right arrow icon to the right by 50px
                        }
                    },
                    '& li': {
                        padding: '8px',
                        borderBottom: '1px solid #ccc',
                        '&:last-child': {
                            borderBottom: 'none',
                        },
                    },
                    '& .MuiSvgIcon-root': {
                        marginRight: '0',
                    }
                }}
                fullWidth
                size='small'
                getOptionLabel={(option) => option.name}
                onChange={(event: any) => handleChange(event)}
                onKeyDown={(event) => handleKeyDown(event)}
                renderInput={(params) => <TextField onKeyDown={(event) => handleKeyDown(event)} placeholder="Search..." {...params} />}
            />
        </Toolbar>
    )
};

export default SearchBar;
