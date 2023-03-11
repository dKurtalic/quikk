import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoThumbnailUrl, demoChannelUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle, demoProfilePicture } from '../utils/constants'
const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    console.log("moj  video ")



    return (
        <Card>
            <Link to={videoId ? `/video/${videoId}` : `/video/${demoVideoUrl}`}>
                <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{ height: 180, width: 358 }} />
                <CardContent sx={{ height: '100px', backgroundColor: '#1e1e1e' }}>
                    <Link to={videoId ? `/video/${videoId}` : `/video/${demoVideoUrl}`}>
                        <Typography variant='subtitle2' fontWeight="bold" sx={{ color: '#fff' }}>
                            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                        </Typography>
                    </Link>
                    <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : `/video/${demoChannelUrl}`}>
                        <Typography variant='subtitle2' fontWeight="bold" sx={{ color: '#fff' }}>
                            {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
                        </Typography>
                    </Link>
                </CardContent>
            </Link>
        </Card>
    )
}

export default VideoCard