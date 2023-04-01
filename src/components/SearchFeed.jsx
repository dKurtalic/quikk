import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetch } from '../utils/fetch';

import Videos from './Videos';

const SearchFeed = () => {
    const { searchQuery } = useParams();
    const [videos, setVideos] = useState(null);

    useEffect(() => {
        fetch(`search?part=snippet&q=${searchQuery}`)
            .then((data) => setVideos(data.items))
    }, [searchQuery]);

    console.log("Trazeni videi su " + JSON.stringify(videos));
    return (
        <Box minHeight='95vh' width='100%' display='flex'>
            <Typography variant='h3' sx={{ color: 'white' }}>Results:</Typography>
            <Stack flexGrow={1} sx={{ flexDirection: { sx: 'column', sm: 'auto', md: 'row' } }}>
                <Box p={2} overflowy="auto" height="150vh" flex={2}>
                    <Videos videos={videos} direction='row' />
                </Box>
            </Stack >
        </Box>
    )
}

export default SearchFeed