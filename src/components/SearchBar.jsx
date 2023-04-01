import { IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import Feed from './Feed';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('')

    const navigate = useNavigate();
    const submit = (e) => {
        e.preventDefault();
        if (searchQuery) navigate(`/search/${searchQuery}`);
        setSearchQuery('');
    }
    return (
        <Paper
            component="form"
            elevation={3}
            onSubmit={submit}
            sx={{
                boxShadow: 'none',
                mr: { sm: 5 },
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2
            }}>
            <input className='search-bar' placeholder='Search...' value={searchQuery} onChange={(query) => { setSearchQuery(query.target.value) }} />
            <IconButton type="submit" sx={{ p: '10px', color: 'red' }}> <SearchIcon /> </IconButton>
        </Paper>
    )
}

export default SearchBar