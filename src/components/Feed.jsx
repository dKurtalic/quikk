import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import Videos from './Videos'
import { fetch } from '../utils/fetch'

const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState('New')
    const [videos, setVideos] = useState(null)

    useEffect(() => {
        fetch(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data?.items))
    }, [selectedCategory]);

    return (
        <Box minHeight='95vh' width='100%' display='flex'>
            <Stack flexGrow={1} sx={{ flexDirection: { sx: 'column', sm: 'auto', md: 'row' } }}>
                <Box sx={{ height: { sx: 'auto', md: '94vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 1, md: 2 } }}>
                    <SideBar
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                    <Typography className='copyright' sx={{ color: "#fff", mt: 1.5 }} variant="body2" >
                        Dina Kurtalić @2023 ETF
                    </Typography>
                </Box>
                <Box p={2} overflowy="auto" height="150vh" flex={2}>
                    <Typography variant='h4' fontWeight="bold" mb={2} sx={{ color: 'white' }}>
                        {selectedCategory}<span style={{ color: "#F31503" }}> videos</span>
                    </Typography>
                    <Videos videos={videos} direction='row' />
                </Box>
            </Stack >
        </Box>
    )
}

export default Feed