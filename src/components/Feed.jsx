import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import Videos from './Videos'
import { fetch } from '../utils/fetch'

const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState('new')
    const [videos, setVideos] = useState(null)

    useEffect(() => {
        setVideos(null);

        fetch(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory]);
    return (
        <Stack direction={{ xs: 'column', sm: 'row' }}>
            <Box sx={{ height: { sx: 'auto', md: '94vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 1, md: 2 } }}>
                <SideBar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                <Typography className='copyright' sx={{ color: "#fff", mt: 1.5 }} variant="body2" >
                    Dina Kurtalić @2023 ETF
                </Typography>
            </Box>
            <Box p={2} overflowy="auto" height="90vh" flex={2}>
                <Typography variant='h4' fontWeight="bold" mb={2} sx={{ color: 'white' }}>
                    {selectedCategory}<span style={{ color: "#F31503" }}> videos</span>
                </Typography>
                <Videos videos={[videos]} />
            </Box>
        </Stack >
    )
}

export default Feed