import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useEffect, useRef, useState } from 'react'
import SideBar from './SideBar'
import Videos from './Videos'
import { fetch } from '../utils/fetch'


const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState('New')
    const [videos, setVideos] = useState([]);
    const [counter, setCounter] = useState(0);
    const [nextPage, setNextPage] = useState(null);


    useEffect(() => {
        setVideos([]);
    }, [selectedCategory]);

    useEffect(() => {
        var urlPart = `search?part=snippet&maxResults=8&q=${selectedCategory}`;
        if (nextPage != null && videos.length < 50) {
            urlPart = urlPart + `&pageToken=${nextPage}`;
        }

        if (videos.length < 50) {
            fetch(urlPart)
                .then((data) => {
                    const newVideos = data?.items.filter((item) => {
                        return !videos.some((video) => video.id.videoId === item.id.videoId);
                    });
                    setVideos((prev) => [...prev, ...newVideos]);
                    setNextPage(data.nextPageToken);
                })
        }
        console.log("selected category " + selectedCategory);

    }, [selectedCategory, counter]);

    const handleScroll = () => {
        if (videos.length < 50) {
            if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight && videos.length <= 50) {
                setCounter(prev => prev + 1)
            }
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [])
    return (
        <Box display='flex' backgroundColor='black'>
            <Stack sx={{ flexDirection: { sx: 'column', sm: 'auto', md: 'row' } }}>
                <Box sx={{ height: { sx: 'auto', md: 'auto' }, borderRight: '1px solid #3d3d3d', px: { sx: 1, md: 2 } }}>
                    <SideBar
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                    <Typography className='copyright' sx={{ color: "#fff", mt: 1.5 }} variant="body2" >
                        Dina Kurtalić @2023 ETF
                    </Typography>
                </Box>
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%', paddingLeft: '30px' }}>
                    <Box p={2} maxHeight='80vh'>
                        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
                            {selectedCategory}<span style={{ color: '#F31503' }}> videos</span>
                        </Typography>
                        <Videos videos={videos} direction='row' sx={{ height: '100%' }} />
                    </Box>
                </div>

            </Stack >
        </Box >
    )
}

export default Feed