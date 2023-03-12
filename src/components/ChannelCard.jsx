import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { demoChannelUrl, demoVideoUrl, demoChannelTitle } from '../utils/constants'


const ChannelCard = ({ channel: { id: { channelId }, snippet } }) => {
    console.log("ID CHANNELA")

    return (

        <Card sx={{
            width: { xs: '320px', md: '320px' },
            height: '326px', boxShadow: 'none', borderRadius: 0, backgroundColor: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
            <Link to={channelId ? `/channel/${channelId}` : `/channel/${demoChannelUrl}`}>
                <CardContent   >
                    <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{ height: 180, width: 180, backgroundColor: '#a9a9a9', borderRadius: '50%' }} />
                    <Typography variant='h6' fontWeight='bold' sx={{ color: 'white', mt: '10px' }}>
                        {snippet?.title}
                        <CheckCircleIcon sx={{ color: "a9a9a9", fontSize: '18px', pl: '5px' }}></CheckCircleIcon>
                    </Typography>
                </CardContent>
            </Link>

        </Card >
    )
}

export default ChannelCard