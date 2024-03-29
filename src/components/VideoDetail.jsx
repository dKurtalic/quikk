import { CardMedia, Paper, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Link, useParams } from 'react-router-dom'
import { fetch } from '../utils/fetch';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Videos from './Videos'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import { colors } from '../utils/colors';
import { SPACING, FONT_SIZE } from '../utils/dimensions';

const VideoDetail = () => {
    const { id } = useParams();

    const [channelInfo, setChannelInfo] = useState(null);
    const [videoDetails, setVideoDetails] = useState(null);
    const [relatedVideos, setRelatedVideos] = useState([]);

    useEffect(() => {
        fetch(`videos?part=snippet,statistics&id=${id}`).then((data) => { popuni(data?.items[0]?.snippet?.channelId); });
        fetch(`videos?part=snippet,statistics&id=${id}`).then((data) => { setVideoDetails(data?.items[0]); });
        fetch(`search?relatedToVideoId=${id}&part=id,snippet&type=video`).then((data) => { setRelatedVideos(data?.items); })
    }, [id])
    console.log("related videos ")
    console.log(videoDetails)

    async function popuni(id) {
        console.log("id je " + id);
        fetch(`channels?id=${id}&part=snippet`).then((data) => { setChannelInfo(data) });
    }
    function formatirajBroj(broj) {
        var brojString = broj?.toString();
        brojString = brojString?.split("").reverse();
        var vrati = "";
        for (let i = 0; i < brojString?.length; i++) {
            if (i % 3 === 0 && i !== 0) vrati += ".";
            vrati += brojString[i];
            console.log(vrati);
        }
        vrati = vrati.split("").reverse().join("");

        return vrati;
    }



    return (
        <Box height='95vh' width='100%' display='flex' backgroundColor='black' sx={{ flexBasis: "100%" }} >

            <Stack direction={{ xs: 'column', sm: 'row' }} flexGrow={1}>
                <Box flex={1.5} sx={{ marginRight: '50px' }}>
                    <Stack direction='column' width='100%' sx={{ width: '100%', position: 'sticky', top: '86px' }}>
                        <Box sx={{ marginBottom: '10px' }}>
                            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls />
                        </Box>
                        <Typography variant='h5' sx={{ color: 'white', size: '30px', ml: '60px', mt: '10px' }} fontWeight='bold'>{videoDetails?.snippet?.title}</Typography>
                        <Typography sx={{ color: colors.light_gray, size: FONT_SIZE.large, ml: '60px', mt: '5px' }} fontWeight='bold'>{formatirajBroj(videoDetails?.statistics?.viewCount)} views</Typography>
                        <Stack direction='row' flexWrap='wrap' sx={{ ml: '60px' }} alignItems='center' justifyContent='space-between' >
                            <Stack direction='row' justifyContent='center' sx={{ mt: '10px' }}>
                                <CardMedia
                                    image={channelInfo?.items[0].snippet?.thumbnails?.high?.url}
                                    alt={channelInfo?.items[0].snippet?.title}
                                    sx={{ height: '40px', width: '40px', borderRadius: '50%', mr: '10px' }}
                                />
                                <Stack direction='column'>
                                    <Link to={`/channel/${videoDetails?.snippet.channelId}`}>
                                        <Stack direction='row'>
                                            <Typography variant='h6' sx={{ color: 'white', mr: '4px' }}>{videoDetails?.snippet?.channelTitle}</Typography>
                                            <CheckCircleIcon sx={{ color: 'white', fontSize: '18px', pt: '6px' }} />
                                        </Stack >
                                    </Link>
                                    <Typography variant='caption' sx={{ color: '#D3D3D3' }}>{formatirajBroj(channelInfo?.items[0].statistics?.subscriberCount)} subscribers</Typography>
                                </Stack>
                            </Stack>

                            <Stack direction='row' gap={3}>
                                <Paper sx={{ p: 1, border: '1px solid gray ', borderRadius: SPACING.medium, backgroundColor: colors.light_gray }} >
                                    <Box display='flex' flexDirection='row' gap={1} >
                                        <ThumbUpIcon sx={{ color: 'white' }} />
                                        <Typography sx={{ color: 'white' }}>{formatirajBroj(videoDetails?.statistics?.likeCount)}</Typography>
                                    </Box>
                                </Paper>
                                <Paper sx={{ p: 1, border: '1px solid gray ', borderRadius: SPACING.medium, backgroundColor: colors.light_gray }} >
                                    <Box display='flex' flexDirection='row' gap={1} >
                                        <BookmarkIcon sx={{ color: 'white' }} />
                                        <Typography sx={{ color: 'white' }}>{formatirajBroj(videoDetails?.statistics?.favoriteCount)}</Typography>
                                    </Box>
                                </Paper>
                                <Paper sx={{ p: 1, border: '1px solid gray ', borderRadius: SPACING.medium, backgroundColor: colors.light_gray }} >
                                    <Box display='flex' flexDirection='row' gap={1} >
                                        <InsertCommentIcon sx={{ color: 'white' }} />
                                        <Typography sx={{ color: 'white' }}>{formatirajBroj(videoDetails?.statistics?.commentCount)}</Typography>
                                    </Box>
                                </Paper>
                            </Stack>

                        </Stack>
                    </Stack>
                </Box>
                <Box className="scrollableContainer" flex={1} px={2} py={{ md: 2, xs: 5 }} justifyContent='center' alignItems='center' sx={{ marginX: '2rem', overflowY: 'hidden' }}>
                    <Videos videos={relatedVideos} direction='column' />
                </Box>
            </Stack >
        </Box >
    );



}

export default VideoDetail