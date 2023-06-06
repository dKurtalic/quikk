import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../utils/logo.png';
import SearchBar from './SearchBar';

const Navbar = () => (
    <Stack direction="row" alignItems="center" p="2" sx={{ zIndex: '10', position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between', height: '80px' }}>
        <Link to="/" style={{ display: 'flex', alignItems: "center", marginLeft: "10px" }}>
            <img src={logo} alt="logo" height={45} style={{ background: 'none', border: 'none' }} />
        </Link>
        <SearchBar />
    </Stack>
)


export default Navbar