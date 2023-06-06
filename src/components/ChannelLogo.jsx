import { CardContent, CardMedia, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import React from 'react'

const ChannelLogo = ({ id, snippet, marginTop, height = 180, width = 180, fontSize = 18 }) => {
    return (

        <CardContent sx={{ zIndex: '11' }}>
            <CardMedia
                image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title}
                sx={{
                    marginTop,
                    height: height,
                    width: width,
                    backgroundColor: '#a9a9a9',
                    borderRadius: '50%',
                }}
            />
            <Typography variant='h6' fontWeight='bold' sx={{ textAlign: 'center', color: 'white', mt: '10px' }}>
                {snippet?.title}
                <CheckCircleIcon sx={{ color: "a9a9a9", fontSize: fontSize, pl: '5px' }}></CheckCircleIcon>
            </Typography>
        </CardContent>
    )
}

export default ChannelLogo