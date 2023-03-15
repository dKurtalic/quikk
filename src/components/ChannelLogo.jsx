import { CardContent, CardMedia, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import React from 'react'

const ChannelLogo = ({ id, snippet, marginTop }) => {
    return (

        <CardContent sx={{ zIndex: '11' }}>
            <CardMedia
                image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title}
                sx={{
                    marginTop,
                    height: 180,
                    width: 180,
                    backgroundColor: '#a9a9a9',
                    borderRadius: '50%',
                }}
            />
            <Typography variant='h6' fontWeight='bold' sx={{ textAlign: 'center', color: 'white', mt: '10px' }}>
                {snippet?.title}
                <CheckCircleIcon sx={{ color: "a9a9a9", fontSize: '18px', pl: '5px' }}></CheckCircleIcon>
            </Typography>
        </CardContent>
    )
}

export default ChannelLogo