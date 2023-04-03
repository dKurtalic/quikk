import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom'
import { demoThumbnailUrl, demoChannelUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle, demoProfilePicture } from '../utils/constants'
import ChannelCard from './ChannelCard';
const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

    return (
        <Card sx={{ width: '320px', boxShadow: 'none', border: '1px solid black', borderRadius: 4 }}>
            <Link to={videoId ? `/video/${videoId}` : `/video/${demoVideoUrl}`}>
                <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{ height: 180, width: 358 }} />
            </Link>
            <CardContent sx={{ overflowX: 'auto', height: '100px', backgroundColor: '#1e1e1e' }}>
                <Link to={videoId ? `/video/${videoId}` : `/video/${demoVideoUrl}`}>
                    <Typography variant='subtitle2' fontWeight="bold" sx={{ color: '#fff' }}>
                        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : `/channel/${demoChannelUrl}`}>
                    <Typography variant='subtitle2' fontWeight="bold" sx={{ color: '#a9a9a9' }}>
                        {snippet?.channelTitle.slice(0, 100) || demoChannelTitle.slice(0, 90)}
                        <CheckCircleIcon color="#a9a9a9" sx={{ ml: "5px", fontSize: '15px' }}></CheckCircleIcon>
                    </Typography>
                </Link>


            </CardContent>

        </Card >
    )
}

export default VideoCard