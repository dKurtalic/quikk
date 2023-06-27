import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetch } from '../utils/fetch';

import Videos from './Videos';
import SideBar from './SideBar';

const SearchFeed = () => {
    const [selectedCategory, setSelectedCategory] = useState('New')
    const { searchQuery } = useParams();
    const [videos, setVideos] = useState([]);
    const [counter, setCounter] = useState(0);
    const [nextPage, setNextPage] = useState(null);
    console.log("search query " + searchQuery);

    useEffect(() => {
        var urlPart = `search?part=snippet&q=${searchQuery}`;
        console.log(0);
        if (nextPage != null && videos != null && videos.length < 50) {
            console.log(1);
            urlPart = urlPart + `&pageToken=${nextPage}`;
        }

        if ((videos != null && videos.length < 50) || videos == null) {
            console.log(2);
            fetch(urlPart)
                .then((data) => {
                    const newVideos = data?.items.filter((item) => {
                        return !videos.some((video) => video.id.videoId === item.id.videoId);
                    });
                    setVideos((prev) => [...prev, ...newVideos]);
                    setNextPage(data.nextPageToken);
                })
            console.log("url " + urlPart);
            console.log(videos);
        }

    }, [counter, searchQuery]);

    useEffect(() => {
        setVideos([])
    }, [searchQuery])

    const handleScroll = () => {
        if (videos != null && videos.length < 50) {
            if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight && videos.length <= 50) {
                setCounter(prev => prev + 1)
            }
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [])



    console.log("Trazeni videi su ");
    console.log(videos);
    return (
        <Box display='flex' backgroundColor='black'>
            <Stack sx={{ flexDirection: { sx: 'column', sm: 'auto', md: 'row' } }}>
                <Box sx={{ height: { sx: 'auto', md: 'auto' }, borderRight: '1px solid #3d3d3d', px: { sx: 1, md: 2 } }}>
                    <SideBar
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                </Box>


                <Box p={2} maxHeight='80vh'>
                    <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>Results </Typography>
                    <Videos videos={videos} direction='row' sx={{ height: '100%' }} />
                </Box>


            </Stack>
        </Box>
    )
}

export default SearchFeed