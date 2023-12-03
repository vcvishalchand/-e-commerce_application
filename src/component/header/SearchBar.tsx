import React, { ChangeEvent, useState } from 'react';
import { InputBase, Toolbar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';
import { SearchBarProps } from '../../type/types';

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
        setSearchTerm(event.target.value);
    }

    return (
        <Toolbar>
            <InputBase
                className={classes.inputBase}
                value={searchTerm}
                onChange={handleChange}
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search' }}
                fullWidth
            />
            <SearchIcon className={classes.searchIcon} onClick={(event) => handleSearch(event, searchTerm)} />
        </Toolbar>
    )
};

export default SearchBar;
