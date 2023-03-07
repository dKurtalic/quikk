import { IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';

const SearchBar = () => {
    return (
        <Paper
            component="form"
            elevation={3}
            onSubmit={(e) => { }}
            sx={{
                boxShadow: 'none',
                mr: { sm: 5 },
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2
            }}>
            <input className='search-bar' placeholder='Search...' value="" onChange={() => { }} />
            <IconButton type="submit" onClick={() => { }} sx={{ p: '10px', color: 'red' }}> <SearchIcon /> </IconButton>
        </Paper>
    )
}

export default SearchBar